import { z } from "zod";

export const activityDetailSchema = z
  .object({
    activityName: z.string().min(3, "Activity must be at least 3 characters"),
    category: z.enum(
      [
        "Adventure & Games",
        "Creative Expression",
        "Food & Drink",
        "Learning & Development",
        "Sports and Fitness",
        "Volunteering",
        "Other",
      ],
      { error: "Please select a category" },
    ),
    specifyCategory: z.string().optional(),
    activityDescription: z
      .string()
      .min(10, "Description must be at least 10 character"),
    activityType: z.enum(["Indoor", "Outdoor", "Virtual"], {
      error: "Select an activity type",
    }),
    locationType: z.enum(["Provider Location", "User Location"], {
      error: "Select a location type",
    }),
    minMembers: z.coerce.number().min(1, "Must be at least 1"),
    maxMembers: z.coerce.number().max(1, "Must be at least 1"),
  })
  .refine(
    (data) => {
      if (
        data.category == "Other" &&
        (!data.specifyCategory || data.specifyCategory.trim() === "")
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Please specify a category",
      path: ["specifyCategory"],
    },
  )
  .refine((data) => data.maxMembers >= data.minMembers, {
    message: "Maximum number should be greater than or equal to minimum",
    path: ["maxMembers"],
  });

export type ActivityDetailsType = z.infer<typeof activityDetailSchema>;

import { z } from "zod";

export const activityDetailsSchema = z
  .object({
    name: z.string().min(3, "Activity must be at least 3 characters"),
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
      {
        required_error: "Please select a category",
        invalid_type_error: "Please select a category",
      },
    ),
    specifyCategory: z.string().optional(),
    about: z.string().min(10, "Description must be at least 10 characters"),
    activityType: z.enum(["Indoor", "Outdoor", "Virtual"], {
      required_error: "Select an activity type",
      invalid_type_error: "Select an activity type",
    }),
    location: z.enum(["Provider Location", "User Location"], {
      required_error: "Select a location type",
      invalid_type_error: "Select a location type",
    }),
    minMembers: z.coerce.number().min(1, "Must be at least 1"),
    maxMembers: z.coerce.number().min(1, "Must be at least 1"), // Fixed from .max(1)
  })
  .refine(
    (data) => {
      if (
        data.category === "Other" &&
        (!data.specifyCategory || data.specifyCategory.trim() === "")
      ) {
        return false;
      }
      return true;
    },
    { message: "Please specify a category", path: ["specifyCategory"] },
  )
  .refine((data) => data.maxMembers >= data.minMembers, {
    message: "Maximum number should be greater than or equal to minimum",
    path: ["maxMembers"],
  });

export type ActivityDetailsType = z.infer<typeof activityDetailsSchema>;

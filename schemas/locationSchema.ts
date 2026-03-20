import { z } from "zod";

export const locationDetailsSchema = z.object({
  address1: z.string().min(3, "Please enter a valid address"),
  address2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zip: z.string().min(4, "Please enter a valid zip code"),
  countryCode: z.string().min(1, "Country code is required"),
  phoneNumber: z.string().min(7, "Please enter a valid phone number"),
  contactName: z.string().min(2, "Contact name is required"),
});

export type LocationDetailsType = z.infer<typeof locationDetailsSchema>;

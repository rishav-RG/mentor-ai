import { z } from "zod";

export const onboardingSchema = z.object({
  industry: z.string().min(1, "Industry is required"),
  subIndustry: z.string().min(1, "Specialization is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be negative")
    .max(50, "Experience seems too high"),
  skills: z.string().min(1, "Please list at least one skill"),
  bio: z.string().min(10, "Bio must be at least 10 characters long"),
});

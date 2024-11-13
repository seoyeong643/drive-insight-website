import { z } from "zod"
 
export const contactSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  countryCode: z.enum(["US", "CA", "UK"]),
  phoneNumber: z.string(),
  message: z.string().min(2).max(500),
  // category: z.enum(["a", "b", "c", "d"])
})

export type ContactFormData = z.infer<typeof contactSchema>

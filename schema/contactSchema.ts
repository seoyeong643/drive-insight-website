import { z } from "zod"
 
export const contactSchema = z.object({
  firstName: z.string().min(2, { message: "Please enter in your first name" }).max(50, { message: "Please enter in a valid first name" }),
  lastName: z.string().min(2, { message: "Please enter in your last name" }).max(50),
  email: z.string().email( {message: "Please enter in a valid email address"}),
  countryCode: z.enum(["US", "CA", "UK"]),
  phoneNumber: z.string().length(10, { message: "Please enter in a valid phone number" }),
  message: z.string().min(2, { message: "Please enter in a message" }).max(500),
  // category: z.enum(["a", "b", "c", "d"])
})

export type ContactFormData = z.infer<typeof contactSchema>

import { z } from "zod";

export const compatibilitySchema = z.object({
    year: z.string({ required_error: "Please select a year" }),
    make: z.string({ required_error: "Please select a make" }),
    model: z.string({ required_error: "Please select a model" }),
    option: z.string({ required_error: "Please select a model option" }),
});

export type CompatibilityFormData = z.infer<typeof compatibilitySchema>;

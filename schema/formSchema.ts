import { STATES } from "@/constants/states";
import { z } from "zod";

export const formContactSchema = z.object({
    email: z.string().email({ message: "Email is Required" }).min(2, {
        message: "Please enter in a valid email address",
    }),
});

export const formDeliverySchema = z.object({
    country: z.enum(["United States"]),
    firstName: z.string().min(2, { message: "First Name is Required" }),
    lastName: z.string().min(2, { message: "Last Name is Required" }),
    address: z.string().min(2, { message: "Enter Street Address" }),
    aptNo: z.optional(
        z.string().min(0, { message: "Enter Apartment Number (if any)" }),
    ),
    city: z.string().min(2, { message: "Enter City" }),
    state: z.enum(STATES),
    zip: z.string().min(2, { message: "Enter Valid Zip Code" }),
    phone: z.string(),
});

export const formShippingSchema = z.object({
    shippingOption: z.enum(["Standard Shipping", "Express Shipping"]),
});

export const formPaymentSchema = z.object({
    cardNumber: z.string().min(2),
    cardExpiry: z.string().min(2),
    cardCvv: z.string().min(2),
    cardHolderName: z.string().min(2),
});

export type FormContactData = z.infer<typeof formContactSchema>;
export type FormDeliveryData = z.infer<typeof formDeliverySchema>;
export type FormShippingData = z.infer<typeof formShippingSchema>;
export type FormPaymentData = z.infer<typeof formPaymentSchema>;

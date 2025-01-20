"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "./ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

const formContactSchema = z.object({
    email: z.string().email({ message: "Email is Required" }),
});

const formDeliverySchema = z.object({
    country: z.enum(["United States"]),
    firstName: z.string().min(2, { message: "First Name is Required" }),
    lastName: z.string().min(2, { message: "Last Name is Required" }),
    address: z.string().min(2, { message: "Enter Street Address" }),
    aptNo: z.optional(
        z.string().min(0, { message: "Enter Apartment Number (if any)" }),
    ),
    city: z.string().min(2, { message: "Enter City" }),
    state: z.enum(["Arizona", "California", "Florida", "Texas"]),
    zip: z.string().min(2, { message: "Enter Valid Zip Code" }),
    phone: z.string(),
});

const formShippingSchema = z.object({
    shippingOption: z.enum(["Standard Shipping", "Express Shipping"]),
});

const formPaymentSchema = z.object({
    cardNumber: z.string().min(2),
    cardExpiry: z.string().min(2),
    cardCvv: z.string().min(2),
    cardHolderName: z.string().min(2),
});

export const FormContactSection = () => {
    const form = useForm<z.infer<typeof formContactSchema>>({
        resolver: zodResolver(formContactSchema),
    });

    return (
        <Form {...form}>
            <form className="flex flex-col gap-5">
                <h3>Contact</h3>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export const FormDeliverySection = () => {
    const form = useForm<z.infer<typeof formDeliverySchema>>({
        resolver: zodResolver(formDeliverySchema),
    });
    return (
        <Form {...form}>
            <form className="flex flex-col gap-5">
                <h3>Delivery</h3>
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                value={field.value}
                                onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue
                                            className="text-muted-foreground"
                                            placeholder="Select Country"
                                        />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="United States">
                                        United States
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-row gap-3">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        placeholder="First Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder="Last Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="aptNo"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Apt / Suite #" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-row gap-3">
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder="City" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="State" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="California">
                                            California
                                        </SelectItem>
                                        <SelectItem value="Arizona">
                                            Arizona
                                        </SelectItem>
                                        <SelectItem value="Florida">
                                            Florida
                                        </SelectItem>
                                        <SelectItem value="Texas">
                                            Texas
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder="Zip" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        placeholder="Phone Number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};

export const FormShippingSection = () => {
    const form = useForm<z.infer<typeof formShippingSchema>>({
        resolver: zodResolver(formShippingSchema),
    });
    return (
        <Form {...form}>
            <form className="flex flex-col gap-5">
                <h3>Shipping</h3>
                <FormField
                    control={form.control}
                    name="shippingOption"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Shipping Option" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Standard Shipping">
                                            Standard Shipping
                                        </SelectItem>
                                        <SelectItem value="Express Shipping">
                                            Express Shipping
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export const FormPaymentSection = () => {
    const form = useForm<z.infer<typeof formPaymentSchema>>({
        resolver: zodResolver(formPaymentSchema),
    });
    return (
        <Form {...form}>
            <form className="flex flex-col gap-5">
                <h3>Payment Details</h3>
                <div>
                    <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Card Number"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-row gap-3">
                    <FormField
                        control={form.control}
                        name="cardExpiry"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder="MM/YY" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cardCvv"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input placeholder="CVV" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="cardHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Card Holder Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};

interface orderSummaryProps {
    quantity: number;
}

export const OrderSummarySection = ({ quantity }: orderSummaryProps) => {
    return (
        <div className="flex flex-col gap-5 py-5">
            <h3>Order Summary</h3>
            <div className="flex flex-col gap-3 py-5">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2">
                        <div className="relative">
                            <Image
                                src="/v1temp.jpg"
                                alt={""}
                                width={50}
                                height={50}
                                className="rounded-lg"
                            />
                            <Badge className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary">
                                {quantity}
                            </Badge>
                        </div>
                        <p className="self-center font-semibold">
                            Velocity 1.0
                        </p>
                    </div>
                    <p className="self-center">$49.99</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Subtotal</p>
                    <p>$49.99</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Shipping</p>
                    <p>$9.99</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Tax</p>
                    <p>$4.79</p>
                </div>
                <div className="flex flex-row justify-between">
                    <h4 className="text-white">Total</h4>
                    <p className="text-lg font-bold text-white">$64.78</p>
                </div>
            </div>
        </div>
    );
};

"use client";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { STATES } from "@/constants/states";
import {
    FormContactData,
    formContactSchema,
    FormDeliveryData,
    formDeliverySchema,
    FormPaymentData,
    formPaymentSchema,
    FormShippingData,
    formShippingSchema,
} from "@/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Badge } from "./ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

export const FormContactSection = () => {
    const form = useForm<FormContactData>({
        resolver: zodResolver(formContactSchema),
        mode: "onBlur",
    });

    return (
        <Form {...form}>
            <form className="flex flex-col gap-3">
                <h3>Contact</h3>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormDescription />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export const FormDeliverySection = () => {
    const form = useForm<FormDeliveryData>({
        resolver: zodResolver(formDeliverySchema),
        mode: "onBlur",
    });
    return (
        <Form {...form}>
            <form className="flex flex-col gap-3">
                <h3>Delivery</h3>
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                defaultValue={"United States"}
                                onValueChange={field.onChange}
                                disabled>
                                <FormControl>
                                    <SelectTrigger value={field.value}>
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
                            <FormItem>
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
                            <FormItem>
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
                            <FormItem>
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
                            <FormItem>
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}>
                                    <FormControl>
                                        <SelectTrigger
                                            className={
                                                field.value
                                                    ? "text-foreground"
                                                    : "text-muted-foreground"
                                            }>
                                            <SelectValue placeholder="State" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {STATES.map((state) => (
                                            <SelectItem
                                                key={state}
                                                value={state}>
                                                {state}
                                            </SelectItem>
                                        ))}
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
                            <FormItem>
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
                            <FormItem>
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
    const form = useForm<FormShippingData>({
        resolver: zodResolver(formShippingSchema),
    });
    return (
        <Form {...form}>
            <form className="flex flex-col gap-3">
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
                                        <SelectTrigger value={field.value}>
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
    const form = useForm<FormPaymentData>({
        resolver: zodResolver(formPaymentSchema),
    });
    return (
        <Form {...form}>
            <form className="flex flex-col gap-3">
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
                            <FormItem>
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
                            <FormItem>
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
        <div className="flex flex-col gap-3">
            <h3>Order Summary</h3>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center gap-3">
                        <div className="relative">
                            <Image
                                src="/v1temp.jpg"
                                alt={""}
                                width={50}
                                height={50}
                                className="rounded-lg"
                                unoptimized
                            />
                            <Badge className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-primary">
                                {quantity}
                            </Badge>
                        </div>
                        <h5>Velocity 1.0</h5>
                    </div>
                    <p className="self-center">$49.99</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Subtotal</p>
                    <p>$49.99</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Shipping</p>
                    <p>--</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>Tax</p>
                    <p>--</p>
                </div>
                <div className="flex flex-row justify-between">
                    <h5 className="text-white">Total</h5>
                    <h5 className="text-white">--</h5>
                </div>
            </div>
        </div>
    );
};

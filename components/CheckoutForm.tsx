"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// TODO: Add validation

const formSchema = z.object({
    name: z.string().min(2, { message: "Name is Required" }),
    email: z.string().email({ message: "Email is Required" }),
    address: z.string().min(2, { message: "Enter Street Address" }),
    aptNo: z.string().min(0, { message: "Enter Apartment Number (if any)" }),
    city: z.string().min(2, { message: "Enter City" }),
    state: z.string().min(2, { message: "Enter State" }),
    zip: z.string().min(2, { message: "Enter Valid Zip Code" }),
    cardNumber: z.string().min(2),
    cardExpiry: z.string().min(2),
    cardCvv: z.string().min(2),
});

export default function CheckoutForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     name: "",
        // },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
    return (
        <div className="container mx-auto p-20">
            <h3>Billing Information</h3>
            <br />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8">
                    <div className="flex flex-col gap-5 px-5">
                        <div className="flex flex-row gap-3">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Enter your full name.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john.doe@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Enter your email address.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-row gap-3">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Street Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="123 ABC St"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Enter your street address.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Mailbox/Apt Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="221B"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Enter your mailbox/apt number (if
                                            applicable).
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-row gap-3">
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Phoenix"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Enter your city.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="AZ"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            PEnter your state.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-row gap-3">
                            <FormField
                                control={form.control}
                                name="zip"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Zip Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="99999"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>
                                            Enter your Zip Code.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-fit p-3 font-semibold">
                            Continue
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { Input, Textarea, Button, Checkbox } from "@/components/ui";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData, contactSchema } from "@/schema/contactSchema";
import { sendDiscordMessage } from "@/utils/discord";

export default function Contact() {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur",
        // todo: do we need these?
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "US",
            phoneNumber: "",
            message: "",
        },
    });

    const onSubmit = (values: ContactFormData) => {
        const success = sendDiscordMessage(values);
        // TODO: Show confirmation message on the website: "Thank you for your message! We will get back to you soon."
        console.log(values);
    };

    return (
        <div className="container mx-auto flex flex-col gap-5">
            <div className="flex flex-col items-center gap-2">
                <h1>Contact Us</h1>
                <p>Most of the answers you're looking for may already be in our FAQ section. If you still need help, just fill out the form below, and we'll get back to you shortly.</p>
                <div className="flex items-center justify-center gap-2">
                    <Button 
                        variant="default" 
                        size="lg">
                        FAQ
                    </Button>
                    <Button 
                        variant="default" 
                        size="lg">
                        Guides
                    </Button>
                </div>
            </div>

                {/* Contact Form */}
                <div className="flex-1 p-6 rounded-lg shadow-md text-card-foreground">
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <Input placeholder="First name" {...field} />
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
                                                <Input placeholder="Last name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="countryCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <select className="w-full p-2 border rounded-md bg-input text-slate-100" {...field}>
                                                    <option value="US">US</option>
                                                    <option value="CA">CA</option>
                                                    <option value="UK">UK</option>
                                                    {/* Add more countries as needed */}
                                                </select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="+1 (555) 000-0000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Leave us a message..." {...field} rows={4} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-wrap gap-4">
                                {["a", "b", "c", "d"].map((option) => (
                                    <label key={option} className="flex items-center space-x-2">
                                        <Checkbox className="accent-primary" />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>

                            <Button type="submit" className="w-full">
                                Send message
                            </Button>
                        </form>
                    </Form>
                </div>

{/* //TODO: Color these buttons. Red for email, green for text/call, purple discord, blue for twitter */}
                <div className="flex items-center justify-center gap-2">
                    <Button className="flex-1"
                        variant="default" 
                        size="lg">
                        Email
                    </Button>
                    <Button className="flex-1"
                        variant="default" 
                        size="lg">
                        Text/Call
                    </Button>
                    <Button className="flex-1"
                        variant="default" 
                        size="lg">
                        Discord
                    </Button>
                    <Button className="flex-1"
                        variant="default" 
                        size="lg">
                        Twitter
                    </Button>
                </div>
        </div>
    );
}

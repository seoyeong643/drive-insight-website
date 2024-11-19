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
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">Contact our team</h1>
            <p>Link to FAQ</p>
            <p>Otherwise Contact us</p>
            <br />

            <p className="text-center text-slate-400 mb-8">
                Got any questions about the product or scaling on our platform? We’re here to help.
                <br />
                Chat with our friendly team 24/7 and get onboard in less than 5 minutes.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Form */}
                <div className="flex-1 bg-card p-6 rounded-lg shadow-md text-card-foreground">
                    <Form {...form}>
                        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
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
                                        <FormItem>
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

                {/* Contact Information */}
                <div className="flex-1 bg-muted p-6 rounded-lg shadow-md text-muted-foreground space-y-4">
                    <div>
                        <h2>Chat with us</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-slate-400 hover:underline">
                                    Start a live chat
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@example.com" className="text-slate-400 hover:underline">
                                    Shoot us an email
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-400 hover:underline">
                                    Message us on X
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Call us</h2>
                        <p>Mon-Fri from 8am to 5pm.</p>
                        <p className="text-slate-400">+1 (555) 000-0000</p>
                    </div>

                    <div>
                        <h2>Visit us</h2>
                        <p>100 Smith Street, Collingwood VIC 3066</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

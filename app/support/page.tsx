"use client"

import { ContactFormData, contactSchema } from "@/schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Contact() {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    })
    function onSubmit(values: ContactFormData) {
        console.log(values)
    }

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

                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} >
                    <div className="flex gap-4">
                    <input type="text"
                        placeholder="First name"
                        {...form.register("firstName")}
                        className="w-full p-2 border rounded-md bg-input text-slate-100 placeholder-slate-500"
                    />
                    <input type="text"
                        placeholder="Last name"
                        {...form.register("lastName")}
                        className="w-full p-2 border rounded-md bg-input text-slate-100 placeholder-slate-500"
                    />
                    </div>

                    <input type="email"
                    placeholder="Email"
                    {...form.register("email")}
                    className="w-full p-2 border rounded-md bg-input text-slate-100 placeholder-slate-500"
                    />

                    <div className="flex gap-4">
                    <select className="p-2 border rounded-md bg-input text-slate-100" defaultValue={"US"} {...form.register("countryCode")}>
                        <option value="US" defaultChecked>US</option>
                        <option value="CA">CA</option>
                        <option value="UK">UK</option>
                        {/* Add more countries as needed */}
                    </select>
                    <input type="text"
                        placeholder="+1 (555) 000-0000"
                        {...form.register("phoneNumber")}
                        className="w-full p-2 border rounded-md bg-input text-slate-100 placeholder-slate-500"
                    />
                    </div>

                    <textarea placeholder="Leave us a message..."
                    {...form.register("message")}
                    className="w-full p-2 border rounded-md bg-input text-slate-100 placeholder-slate-500"
                    rows={4}
                    />

                    <div className="flex flex-wrap gap-4 text-slate-100">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-primary" />
                        <span>a</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-primary" />
                        <span>b</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-primary" />
                        <span>c</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-primary" />
                        <span>d</span>
                    </label>
                    </div>

                    <button type="submit"
                    className="w-full p-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                    >
                    Send message
                    </button>
                </form>
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

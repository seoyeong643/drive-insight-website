import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="container flex flex-col gap-5 lg:px-60">
            <div className="flex flex-col items-center gap-2">
                <h1>Contact Us</h1>
                <p>
                    Most of the answers you&apos;re looking for may already be
                    in our FAQ section. If you still need help, just fill out
                    the form below, and we&apos;ll get back to you shortly.
                </p>
                <div className="flex items-center justify-center gap-2">
                    <Button variant="default" size="lg">
                        FAQ
                    </Button>
                    <Button variant="default" size="lg">
                        Guides
                    </Button>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 rounded-lg text-card-foreground shadow-md">
                <ContactForm />
            </div>

            {/* <p className="text-center">or</p> */}

            {/* //TODO: Color these buttons. Red for email, green for text/call, purple discord, blue for twitter */}
            {/* <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
                <Button className="w-full bg-red-500 text-white" variant="link">
                    <FaEnvelope />
                    Email
                </Button>
                <Button
                    className="w-full bg-green-500 text-white"
                    variant="link"
                    size="lg">
                    <FaPhone />
                    Text/Call
                </Button>
                <Button
                    className="w-full bg-indigo-500 text-white"
                    variant="link"
                    size="lg">
                    <FaDiscord />
                    Discord
                </Button>
                <Button
                    className="w-full bg-blue-500 text-white"
                    variant="link"
                    size="lg">
                    <FaTwitter />
                    Twitter
                </Button>
            </div> */}
        </div>
    );
}

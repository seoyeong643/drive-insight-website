import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faq } from "@/constants/faq";
import Link from "next/link";

export default function FAQ() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1
                className="text-4xl font-bold"
                style={{ textAlign: "center", fontSize: 35 }}>
                Frequently Asked Questions
            </h1>
            <br />

            <p style={{ textAlign: "center" }}>
                Quick answers to questions you may have about our app and
                device. For further information, check out our guide.
            </p>

            <Button asChild>
                <Link href="/support">Contact us</Link>
            </Button>

            <Accordion
                type="single"
                collapsible
                className="mx-auto flex w-5/6 flex-col gap-3">
                {faq.map((item, index) => {
                    return (
                        <AccordionItem
                            value={index.toString()}
                            key={index.toString()}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
}

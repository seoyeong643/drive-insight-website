import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from 'react';

export const FAQSection = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", fontSize: 35 }}>FAQs</h1>
            <br />

            <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>                   
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip .
                    </AccordionContent>                   
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>                   
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip .
                    </AccordionContent>                   
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>                   
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip .
                    </AccordionContent>                   
                </AccordionItem>
            </Accordion>
      
            <Link href="/faq">
                <h6 style={{ textAlign: "right", color: "blue" }}>
                    Click here for more information
                </h6>
            </Link>
        </div>
    );
};

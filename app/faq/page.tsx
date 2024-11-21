"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Category, faq } from "@/constants/faq";
import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
    // Keeps track of the selected category
    const [selectedCategory, setSelectedCategory] = useState<Category>(
        Category.ALL,
    );

    return (
        <div className="container mx-auto flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center gap-2">
                <h1>Frequently Asked Questions</h1>
                <p>
                    Quick answers to questions you may have about our app and
                    device.
                </p>
            </div>

            <div className="flex flex-row gap-3">
                {Object.values(Category).map((category) => {
                    return (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={
                                category === selectedCategory
                                    ? ""
                                    : "border-2 border-primary"
                            }
                            variant={
                                category === selectedCategory
                                    ? "default"
                                    : "outline"
                            }>
                            {category}
                        </Button>
                    );
                })}
            </div>

            <Accordion
                type="single"
                collapsible
                className="mx-auto flex w-full flex-col gap-3 px-6">
                {faq.map((item, index) => {
                    return (
                        (item.category === selectedCategory ||
                            selectedCategory === Category.ALL) && (
                            <AccordionItem
                                value={index.toString()}
                                key={index.toString()}>
                                <AccordionTrigger>
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.description}
                                    {item.category}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    );
                })}
            </Accordion>

            <div className="flex flex-col gap-3">
                <p>For more information, check out our other resources.</p>
                <div className="flex flex-row justify-center gap-3">
                    <Button asChild>
                        <Link href="/support">Contact Us</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/guide">Guide</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

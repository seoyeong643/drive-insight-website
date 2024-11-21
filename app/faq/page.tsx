"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Category, faq } from "@/constants/faq";
import { useState } from "react";

export default function FAQ() {
    // Keeps track of the selected category
    const [selectedCategory, setSelectedCategory] = useState<Category>(
        Category.ALL,
    );

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
                className="mx-auto flex w-5/6 flex-col gap-3">
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
        </div>
    );
}

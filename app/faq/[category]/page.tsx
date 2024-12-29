import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Category, faq } from "@/constants/faq";
import { capitalize } from "@/utils/strings";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";

export default function FAQ({ params }: { params: { category: Category } }) {
    console.log(params.category);

    // Redirect to the default category if the category is not valid
    if (!Object.values(Category).includes(params.category))
        redirect(`/faq/${Category.ALL}`, RedirectType.replace);

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
                        <Link key={category} href={`/faq/${category}`}>
                            <Button
                                className={
                                    category === params.category
                                        ? ""
                                        : "border-2 border-primary"
                                }
                                variant={
                                    category === params.category
                                        ? "default"
                                        : "outline"
                                }>
                                {capitalize(category)}
                            </Button>
                        </Link>
                    );
                })}
            </div>

            <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-3">
                {faq.map((item, index) => {
                    return (
                        (item.category === params.category ||
                            params.category === Category.ALL) && (
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

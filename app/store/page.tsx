"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(1);

    const handleCounter = (event: "increment" | "decrement") => {
        setCount((prevCount) => {
            if (event === "increment") {
                return prevCount + 1;
            } else if (event === "decrement" && prevCount > 1) {
                return prevCount - 1;
            }
            return prevCount;
        });
    };

    return (
        <div className="flex flex-row gap-5">
            <div className="rounded-s-md bg-slate-700 p-2">
                <button onClick={() => handleCounter("decrement")}>
                    <Minus />
                </button>
            </div>
            <div>
                <p id="counter">{count}</p>
            </div>
            <div className="rounded-e-md bg-slate-700 p-2">
                <button onClick={() => handleCounter("increment")}>
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default function Store() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex flex-1 flex-col items-center justify-center">
                    <img
                        src="/v1temp.jpg"
                        alt="Velocity 1.0 Image"
                        height={300}
                        width={300}
                    />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-20">
                    {/* <h1 className="text-4xl font-bold">Store</h1>
                    <p>Device information, shipping info, price info</p>
                    <p>Buy now</p>
                    <p>Expandable form</p> */}
                    <div className="flex flex-col items-center justify-center gap-7 px-20">
                        <h1 className="text-4xl font-bold">Buy Velocity 1.0</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <h2 className="font-semibold">$49.99</h2>
                    </div>
                    <div className="flex flex-row items-center gap-20">
                        {/* Quantity counter */}
                        <Counter />
                        <Button className="w-full">Checkout</Button>
                    </div>
                    <div className="container mx-auto">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full px-20 py-10">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Product Overview
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quisquam quae aliquid,
                                        earum sit optio sunt inventore quaerat
                                        corporis incidunt autem nesciunt eum
                                        eveniet veniam provident iste nobis eius
                                        consequuntur illum! Lorem ipsum dolor
                                        sit amet consectetur adipisicing elit.
                                        Dolores quibusdam, porro exercitationem
                                        labore neque modi eaque non aliquam
                                        sapiente qui voluptas pariatur
                                        blanditiis quia iure! Consequatur quos
                                        pariatur laborum doloribus.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

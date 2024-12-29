"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export const CheckoutCounter = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => prev - 1);

    return (
        <div className="flex flex-col gap-5 md:flex-row">
            {/* COUNTER */}
            <div className="flex flex-row items-center justify-between gap-3 rounded-full border-2 border-muted-foreground">
                <Button
                    variant="ghost"
                    className="h-12 rounded-full"
                    disabled={quantity === 1}
                    onClick={decrement}>
                    <FaMinus />
                </Button>
                <div className="w-4 items-center justify-center">
                    <h4 className="text-center">{quantity}</h4>
                </div>
                <Button
                    variant="ghost"
                    className="h-12 rounded-full"
                    disabled={quantity === 10}
                    onClick={increment}>
                    <FaPlus />
                </Button>
            </div>

            {/* BUTTON */}
            {/* <Link href={`/checkout/${quantity}`}>
                <Button className="h-12 w-full rounded-full text-lg font-semibold">
                    <FaSquareArrowUpRight />
                    Checkout
                </Button>
            </Link> */}
        </div>
    );
};

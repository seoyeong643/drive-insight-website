"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";

export const CheckoutCounter = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prev) => prev + 1);
    };
    const decrement = () => {
        setQuantity((prev) => prev - 1);
    };

    return (
        <div className="flex flex-row gap-7">
            {/* Counter */}
            <div className="flex flex-row items-center gap-3 rounded-full border-2 border-muted-foreground p-2">
                <Button
                    variant="ghost"
                    className="rounded-full"
                    size="icon"
                    disabled={quantity === 1}
                    onClick={decrement}>
                    <FaMinus />
                </Button>
                <div className="w-4 items-center justify-center">
                    <h4 className="text-center">{quantity}</h4>
                </div>
                <Button
                    variant="ghost"
                    className="rounded-full"
                    size="icon"
                    disabled={quantity === 10}
                    onClick={increment}>
                    <FaPlus />
                </Button>
            </div>

            <Link
                href={{
                    pathname: "/checkout",
                    query: { quantity: quantity },
                }}>
                <Button className="h-full gap-3 rounded-full px-10 text-xl">
                    <FaCartShopping />
                    Checkout
                </Button>
            </Link>
        </div>
    );
};

"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
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
        <div className="flex flex-row gap-5 p-5">
            <button onClick={() => handleCounter("decrement")}>
                <Minus />
            </button>
            <p id="counter">{count}</p>
            <button onClick={() => handleCounter("increment")}>
                <Plus />
            </button>
        </div>
    );
};

export default function Store() {
    return (
        <div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-1 flex-col items-center justify-center">
                    Insert OBD Graphic
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                    {/* <h1 className="text-4xl font-bold">Store</h1>
                    <p>Device information, shipping info, price info</p>
                    <p>Buy now</p>
                    <p>Expandable form</p> */}
                    <div className="gap-10 p-20">
                        <h1 className="text-4xl font-bold">Buy Velocity 1.0</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <h3 className="font-semibold">$49.99</h3>
                    </div>
                    <div className="flex flex-row items-center gap-20">
                        {/* Quantity counter */}
                        <Counter />
                        <Button
                            className="w-full md:w-fit md:gap-4 md:pl-4"
                            size="lg">
                            <ShoppingCart />
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

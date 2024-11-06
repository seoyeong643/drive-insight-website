"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function Store() {
    const [openForm, setOpenForm] = useState<boolean>(false);

    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/v1temp.jpg"
                        alt={""}
                        width={1200}
                        height={700}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col gap-7 px-20">
                        <div className="flex flex-col gap-2">
                            <h1>Velocity 1.0</h1>
                            <h2 className="pb-0">$49.99</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <Button
                            className="w-fit gap-3 rounded-full px-12 py-8 text-xl"
                            onClick={() => setOpenForm((prev) => !prev)}>
                            <FaCartShopping />
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
            {/* Insert Form here */}
            {openForm && <CheckoutForm />}
        </div>
    );
}

import { CheckoutCounter } from "@/components/CheckoutCounter";
import Image from "next/image";

export default function Store() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
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
                        <CheckoutCounter />
                    </div>
                </div>
            </div>
        </div>
    );
}

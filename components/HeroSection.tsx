import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "./ui/button";

export const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-between md:flex-row-reverse">
            {/* HERO IMAGE */}
            <Image
                src="/drive-insight-hero-mockup.png"
                alt={""}
                width={500}
                height={500}
                className="flex-1"
                unoptimized
            />

            <div className="flex flex-1 flex-col gap-6">
                {/* HEADLINE */}
                <h1 className="md:text-6xl">
                    Smart Insights for Smarter Driving
                </h1>
                {/* SUBHEADLINE */}
                <p className="text-lg md:text-xl">
                    Build better driving habits and save money on fuel costs by
                    unlocking actionable driving insights.
                </p>

                <div className="flex flex-col gap-3">
                    {/* CTA BUTTON */}
                    <Link href="/store">
                        <Button
                            className="w-full px-2 md:w-fit md:gap-4 md:pl-4"
                            size="lg">
                            <div className="flex-1">Buy Now For $49</div>
                            <div className="flex aspect-square items-center justify-center rounded bg-background p-1.5">
                                {/* <FaCartShopping className="text-primary" /> */}
                                <FaArrowRight className="text-primary" />
                            </div>
                        </Button>
                    </Link>

                    {/* <div className="flex items-center justify-center gap-1 text-muted-foreground md:justify-start">
                        <FaMoneyBillWave />
                        <p className="text-sm">Free app, forever</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

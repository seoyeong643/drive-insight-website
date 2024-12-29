import { Fuel, KeyRound, ShieldCheck } from "lucide-react";
import BenefitCard from "./BenefitCard";

export const BenefitsSection = () => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-center">Get more out of your drive</h2>
                <p className="text-center">
                    Unlock actionable driving insights to improve your driving
                    habits and save money on fuel costs.
                </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                <BenefitCard
                    title="Fuel Consumption and Cost"
                    description="Discover how much fuel you save by optimizing your driving habits."
                    icon={<Fuel className="h-10 w-10" />}
                    imgPath={"/benefit_fuel_2.webp"}
                />
                <BenefitCard
                    title="Safety and Awareness"
                    description="Learn about the latest safety tips and advice to keep you and your passengers safe on the road."
                    icon={<ShieldCheck className="h-10 w-10" />}
                    imgPath={"/benefit_safety_1.webp"}
                />
                <BenefitCard
                    title="Privacy Control"
                    description="Your personal data is protected and only used for the purposes of providing you with the best driving experience."
                    icon={<KeyRound className="h-10 w-10" />}
                    imgPath={"/benefit_safety_2.webp"}
                />
            </div>
        </div>
    );
};

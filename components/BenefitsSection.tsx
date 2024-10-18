import { Fuel, KeyRound, ShieldCheck } from "lucide-react";
import BenefitCard from "./BenefitCard";

export const BenefitsSection = () => {
    return (
        <div>
            <h1>Benefits Section</h1>
            <div className="flex flex-col items-center gap-4 p-4">
                <BenefitCard
                    title="Fuel Consumption and Cost"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    icon={<Fuel className="h-10 w-10" />}
                    imgPath={"/benefit_fuel_2.webp"}
                />
                <BenefitCard
                    title="Safety and Awareness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    icon={<ShieldCheck className="h-10 w-10" />}
                    imgPath={"/benefit_safety_1.webp"}
                />
                <BenefitCard
                    title="Privacy Control"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    icon={<KeyRound className="h-10 w-10" />}
                    imgPath={"/benefit_safety_2.webp"}
                />
            </div>
        </div>
    );
};

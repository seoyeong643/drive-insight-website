"use client";

import Picker from "@/components/Picker";
import { getYears } from "@/utils/compatibility";
import { Button } from "./ui/button";

const makeItems = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Audi",
    "Hyundai",
];
const modelItems = [
    "Camry",
    "Civic",
    "Mustang",
    "Silverado",
    "Altima",
    "3 Series",
    "C-Class",
    "Golf",
    "A4",
    "Elantra",
];
const typeItems = [
    "Sedan",
    "SUV",
    "Truck",
    "Coupe",
    "Hatchback",
    "Convertible",
    "Minivan",
    "Crossover",
    "Wagon",
    "Electric",
];

export const CompatibilitySection = () => {
    // const [year, setYear] = useState<string>("");

    return (
        <div>
            <h1>CompatibilitySection</h1>
            Check here if your car is compatible with our device.
            <div className="relative mt-4 flex w-full flex-col items-center justify-center gap-4 px-6 md:flex-row">
                {/* <DropdownMenuRadioGroupDemo title="Year" items={yearItems.map(String)} />
                <DropdownMenuRadioGroupDemo title="Make" items={makeItems.map(String)} />
                <DropdownMenuRadioGroupDemo title="Model" items={modelItems.map(String)} />
                <DropdownMenuRadioGroupDemo title="Type" items={typeItems.map(String)} /> */}
                <div className="flex w-full flex-col justify-end md:w-auto">
                    <Picker title="Year" items={getYears()} />
                </div>
                <div className="flex w-full flex-col justify-end md:w-auto">
                    <Picker title="Make" items={makeItems.map(String)} />
                </div>
                <div className="flex w-full flex-col justify-end md:w-auto">
                    <Picker title="Model" items={modelItems.map(String)} />
                </div>
                <div className="flex w-full flex-col justify-end md:w-auto">
                    <Picker title="Type" items={typeItems.map(String)} />
                </div>
                <div className="flex w-full flex-col justify-end md:w-auto">
                    <Button>Check Compatibility</Button>
                </div>
            </div>
        </div>
    );
};

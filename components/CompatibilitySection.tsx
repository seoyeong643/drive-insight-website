import ButtonDemo from "./Button";
import DropdownMenuRadioGroupDemo from "./DropDownMenu";

const yearItems : number[] = [];
for (let year = 2023; year >= 2015; year--) {
    yearItems.push(year);
}
const makeItems = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"];
const modelItems = ["Camry", "Civic", "Mustang", "Silverado", "Altima", "3 Series", "C-Class", "Golf", "A4", "Elantra"];
const typeItems = ["Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Convertible", "Minivan", "Crossover", "Wagon", "Electric"];

export const CompatibilitySection = () => {
    return (
        <div>
            <h1>CompatibilitySection</h1>
            Check here if your car is compatible with our device.
            <div className="relative flex flex-col items-center md:flex-row justify-center gap-4 w-full mt-4 px-6">
                {/* <DropdownMenuRadioGroupDemo title="Year" items={yearItems.map(String)} />
                <DropdownMenuRadioGroupDemo title="Make" items={makeItems.map(String)} />
                <DropdownMenuRadioGroupDemo title="Model" items={modelItems.map(String)} />
                <DropdownMenuRadioGroupDemo title="Type" items={typeItems.map(String)} /> */}
                <div className="flex flex-col justify-end w-full md:w-auto">
                    <DropdownMenuRadioGroupDemo title="Year" items={yearItems.map(String)} />
                </div>
                <div className="flex flex-col justify-end w-full md:w-auto">
                    <DropdownMenuRadioGroupDemo title="Make" items={makeItems.map(String)} />
                </div>
                <div className="flex flex-col justify-end w-full md:w-auto">
                    <DropdownMenuRadioGroupDemo title="Model" items={modelItems.map(String)} />
                </div>
                <div className="flex flex-col justify-end w-full md:w-auto">
                    <DropdownMenuRadioGroupDemo title="Type" items={typeItems.map(String)} />
                </div>
                <div className="flex flex-col justify-end w-full md:w-auto">
                    <ButtonDemo title="Check"/>
                </div>
            </div>
        </div>
    );
};
import CompatibilityForm from "./CompatibilityForm";

export const CompatibilitySection = () => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-center">Compatibility</h2>
                <p className="text-center">
                    Check here if your car is compatible with our device.
                </p>
            </div>
            <CompatibilityForm />
        </div>
    );
};

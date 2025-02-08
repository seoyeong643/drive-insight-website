import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        title: "Trip Recording",
        description: "Auto start/stop for seamless tracking.",
        size: "col-span-2",
    },
    {
        title: "Advanced BLE",
        description: "Bluetooth 5.0 for fast and efficient connectivity.",
        size: "col-span-1",
    },
    {
        title: "Trip Analysis & Charts",
        description: "View maps and performance insights from past trips.",
        size: "row-span-2",
    },
    {
        title: "Driving Behavior Insights",
        description: "Monitor braking, acceleration, and driving habits.",
        size: "col-span-1",
    },
    {
        title: "Long-Term Trip Data Storage",
        description: "Aggregate trip data up to a month for review.",
        size: "col-span-2",
    },
    {
        title: "Multiple Vehicle Support",
        description: "Manage and track data for multiple vehicles.",
        size: "row-span-2 col-span-1",
    },
    {
        title: "Customizable Units & Fuel Pricing",
        description: "Set fuel cost and measurement units to match your needs.",
        size: "col-span-1",
    },
    {
        title: "Real-Time Performance Monitoring",
        description: "Track RPM, speed, fuel efficiency, and location live.",
        size: "col-span-2",
    },
];

export const FeaturesSection = () => {
    return (
        <div className="px-6 py-12 md:px-12">
            <h1 className="mb-10 text-center text-3xl font-bold">Features</h1>
            <div className="grid auto-rows-[180px] grid-cols-1 gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className={`rounded-xl p-6 shadow-lg transition hover:shadow-xl ${feature.size}`}>
                        <CardContent>
                            <h2 className="mb-2 text-xl font-semibold">
                                {feature.title}
                            </h2>
                            <p>{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

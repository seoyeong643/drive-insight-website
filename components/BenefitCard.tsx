const BenefitCard = ({
    title,
    description,
    icon,
    imgPath,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    imgPath: string;
}) => {
    return (
        <div
            className="flex w-full flex-col justify-between gap-96 rounded-lg bg-orange-600 p-4"
            style={{
                backgroundImage: `url(${imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            {icon}
            <div>
                <h1 className="font-medium">{title}</h1>
                <p className="text-xs font-extralight">{description}</p>
            </div>
        </div>
    );
};

export default BenefitCard;

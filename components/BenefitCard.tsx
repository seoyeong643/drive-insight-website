const BenefitCard = ({
    title,
    description,
    icon,
    imgPath,
    darkMode = true,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    imgPath: string;
    darkMode?: boolean;
}) => {
    return (
        <div
            className="flex h-[500px] flex-1 flex-col justify-between gap-10 rounded-lg bg-orange-600 p-4"
            style={{
                backgroundImage: `url(${imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className={darkMode ? "text-slate-900" : "text-slate-200"}>
                {icon}
            </div>
            <div>
                <h1
                    className={`font-medium ${darkMode ? "text-slate-900" : "text-slate-200"}`}>
                    {title}
                </h1>
                <p
                    className={`text-xs font-extralight ${darkMode ? "text-slate-900" : "text-slate-200"}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;

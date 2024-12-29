const BenefitCard = ({
    title,
    description,
    icon,
    // imgPath,
    darkMode = true,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    // imgPath: string;
    darkMode?: boolean;
}) => {
    return (
        <div
            className="flex h-[250px] flex-1 flex-col justify-between gap-10 rounded-lg bg-slate-300 p-4"
            // style={{
            //     backgroundImage: `url(${imgPath})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
        >
            <div className={darkMode ? "text-slate-900" : "text-slate-200"}>
                {icon}
            </div>
            <div className="flex flex-col gap-3">
                <h2
                    className={`${darkMode ? "text-slate-900" : "text-slate-200"}`}>
                    {title}
                </h2>
                <p
                    className={`${darkMode ? "text-slate-900" : "text-slate-200"}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;

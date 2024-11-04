"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

// const Counter = () => {
//     const [count, setCount] = useState<number>(1);

//     const handleCounter = (event: "increment" | "decrement") => {
//         setCount((prevCount) => {
//             if (event === "increment") {
//                 return prevCount + 1;
//             } else if (event === "decrement" && prevCount > 1) {
//                 return prevCount - 1;
//             }
//             return prevCount;
//         });
//     };

//     return (
//         <div className="flex flex-row gap-5">
//             <div className="rounded-s-md bg-slate-700 p-2">
//                 <button onClick={() => handleCounter("decrement")}>
//                     <Minus />
//                 </button>
//             </div>
//             <div>
//                 <p id="counter">{count}</p>
//             </div>
//             <div className="rounded-e-md bg-slate-700 p-2">
//                 <button onClick={() => handleCounter("increment")}>
//                     <Plus />
//                 </button>
//             </div>
//         </div>
//     );
// };

export default function Store() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/v1temp.jpg"
                        alt={""}
                        width={1200}
                        height={700}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col gap-7 px-20 py-10">
                        <div className="flex flex-col gap-2">
                            <h1>Velocity 1.0</h1>
                            <h2 className="pb-0">$49.99</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <Button className="w-fit gap-3 rounded-full px-12 py-8 text-xl">
                            <FaCartShopping />
                            Buy Now
                        </Button>
                    </div>
                    {/* <div className="flex flex-row items-center gap-20">
                        <Counter />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { MdLooks3, MdLooksOne, MdLooksTwo } from "react-icons/md";
import app_store_badge from "../../public/App_Store.svg";
import google_play_badge from "../../public/Google_Play.svg";
import obd from "../../public/obd.svg";

export default function Install() {
    return (
        <div className="container flex flex-col gap-5 px-4">
            {/* HEADER */}
            <div className="flex flex-col gap-2">
                <h1 className="text-center">Welcome to the Drive Insight</h1>
                <p className="text-center text-lg md:text-2xl">
                    Let&apos;s get you set up!
                </p>
            </div>

            {/* CARDS */}
            <div className="flex flex-col gap-4 md:flex-row">
                {/* DOWNLOAD */}
                <Card className="flex flex-1 flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-1">
                            <MdLooksOne className="text-3xl" />
                            Download the app
                        </CardTitle>
                        <CardDescription>
                            Download the Drive Insight app from the Google Play
                            Store or the App Store.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-row gap-4">
                        <Link
                            href="https://google.com"
                            className="flex flex-1"
                            target="_blank">
                            <Image
                                src={google_play_badge}
                                alt="Get it on Google Play"
                                className="flex-1"
                            />
                        </Link>
                        <Link
                            href="https://apple.com"
                            className="flex flex-1"
                            target="_blank">
                            <Image
                                src={app_store_badge}
                                alt="Download on the App Store"
                                className="flex-1"
                            />
                        </Link>
                    </CardContent>
                </Card>

                {/* SETUP */}
                <Card className="flex flex-1 flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-1">
                            <MdLooksTwo className="text-3xl" />
                            Setup the device
                        </CardTitle>
                        <CardDescription>
                            Plug in your device and make sure that it&apos;s
                            securely connected to the OBD port. Next, follow the
                            instructions in the app to set up your device
                            easily.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image
                            src={obd}
                            alt="Get it on Google Play"
                            className="mx-auto h-auto w-1/2"
                        />
                    </CardContent>
                </Card>

                {/* HIT THE ROAD */}
                <Card className="flex flex-1 flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-1">
                            <MdLooks3 className="text-3xl" />
                            Hit the road!
                        </CardTitle>
                        <CardDescription>
                            Start recording trips and gain insights.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full">Learn more</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

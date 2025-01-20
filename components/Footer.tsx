import Image from "next/image";
import Link from "next/link";
import {
    FaDiscord,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import app_store_badge from "../public/App_Store.svg";
import logo from "../public/DIS_Logo_Dark.png";
import google_play_badge from "../public/Google_Play.svg";

export const Footer = () => {
    return (
        <div className="w-full bg-background">
            <div className="container flex flex-col gap-6 py-6 md:flex-row">
                {/* COMPANY INFO */}
                <div className="flex flex-1 flex-col gap-4">
                    {/* LOGO */}
                    <Image src={logo} alt="Drive Insight Logo" width={140} />
                    {/* SOCIAL LINKS */}
                    <div className="flex gap-4">
                        <Link href="" target="_blank">
                            <FaFacebook className="text-2xl" />
                        </Link>
                        <Link href="" target="_blank">
                            <FaXTwitter className="text-2xl" />
                        </Link>
                        <Link href="" target="_blank">
                            <FaInstagram className="text-2xl" />
                        </Link>
                        <Link href="" target="_blank">
                            <FaYoutube className="text-2xl" />
                        </Link>
                        <Link href="" target="_blank">
                            <FaDiscord className="text-2xl" />
                        </Link>
                        <Link href="" target="_blank">
                            <FaLinkedin className="text-2xl" />
                        </Link>
                    </div>
                    {/* STORE BADGES */}
                    <div className="flex gap-4">
                        <Link href="https://google.com" target="_blank">
                            <Image
                                src={google_play_badge}
                                alt="Get it on Google Play"
                                width={100}
                            />
                        </Link>
                        <Link href="https://apple.com" target="_blank">
                            <Image
                                src={app_store_badge}
                                alt="Download on the App Store"
                                width={100}
                            />
                        </Link>
                    </div>
                </div>

                {/* NAVIGATION */}
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="mb-1 font-bold text-slate-300">Company</p>
                        <Link href="/about">About</Link>
                        <Link href="/store">Store</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="mb-1 font-bold text-slate-300">
                            Resources
                        </p>
                        <Link href="/faq" className="hover:underline">
                            FAQ
                        </Link>
                        <Link href="/guides">Guides</Link>
                        <Link href="/support">Support</Link>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT AND LEGAL */}
            <div className="flex flex-col justify-between bg-slate-900 px-6 py-2 md:flex-row md:items-center">
                <p className="text-sm">
                    © 2024 Drive Insight. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-sm">
                    <Link href="/terms">Terms of Service</Link>
                    {/* TODO: add dot separator */}
                    <span>&sdot;</span>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

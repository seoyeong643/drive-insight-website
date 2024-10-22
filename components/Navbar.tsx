"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaCartShopping, FaXmark } from "react-icons/fa6";
import { Button } from "./ui/button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col justify-between border-b px-6 py-2 md:flex-row md:px-12">
            <div className="flex flex-row items-center justify-between">
                {/* LOGO */}
                <Image
                    src="/DIS_Logo_Dark.png"
                    alt="Drive Insight Logo"
                    width={140}
                    height={63}
                />

                {/* HAMBURGER MENU */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsOpen((open) => !open)}
                    className="md:hidden">
                    {isOpen ? <FaXmark /> : <FaBars />}
                </Button>
            </div>

            {/* MOBILE LINKS */}
            {isOpen && (
                <div className="py-3 md:hidden">
                    <NavLinks />
                </div>
            )}

            {/* DESKTOP LINKS */}
            <div className="hidden self-center md:block">
                <NavLinks />
            </div>
        </nav>
    );
};

const NavLinks = () => {
    return (
        <div className="flex flex-col gap-2 font-semibold text-slate-400 md:flex-row md:items-center md:gap-4">
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/support">Support</Link>
            <Button className="w-fit" asChild>
                <Link href="/store">
                    <FaCartShopping className="mr-2" />
                    Buy Now
                </Link>
            </Button>
        </div>
    );
};

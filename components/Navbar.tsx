"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaCartShopping, FaXmark } from "react-icons/fa6";
import logo from "../public/DIS_Logo_Dark.png";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="container mx-auto flex flex-col justify-between px-6 py-2 md:flex-row">
            <div className="flex flex-row items-center justify-between">
                {/* LOGO */}
                <Link href={"/"}>
                    <Image src={logo} alt="Drive Insight Logo" width={140} />
                </Link>

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
                <Card className="mt-3 md:hidden">
                    <CardContent className="pt-4">
                        <NavLinks />
                    </CardContent>
                </Card>
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
        <div className="flex flex-col gap-2 font-semibold md:flex-row md:items-center md:gap-4">
            <Link href="/about">About</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/support">Support</Link>
            <Link href="/store">
                <Button className="w-fit">
                    <FaCartShopping className="mr-2" />
                    Buy Now
                </Button>
            </Link>
        </div>
    );
};

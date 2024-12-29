"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaBars, FaCartShopping, FaXmark } from "react-icons/fa6";
import logo from "../public/DIS_Logo_Dark.png";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <nav className="container flex flex-col justify-between py-2 md:flex-row">
            <div className="flex flex-row items-center justify-between">
                {/* LOGO */}
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="Drive Insight Logo"
                        width={140}
                        unoptimized
                    />
                </Link>

                {/* HAMBURGER MENU */}
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleMenu}
                    className="md:hidden">
                    {isOpen ? <FaXmark /> : <FaBars />}
                </Button>
            </div>

            {/* MOBILE LINKS */}
            {isOpen && (
                <Card className="mt-3 md:hidden">
                    <CardContent className="pt-4">
                        <NavLinks closeMenu={closeMenu} />
                    </CardContent>
                </Card>
            )}

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex">
                <NavLinks closeMenu={closeMenu} />
            </div>
        </nav>
    );
};

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
    const links = [
        { href: "/about", label: "About" },
        { href: "/faq", label: "FAQ" },
        { href: "/guides", label: "Guides" },
        { href: "/support", label: "Support" },
    ];

    return (
        <div className="flex flex-col gap-2 font-semibold md:flex-row md:items-center md:gap-4">
            {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                </Link>
            ))}
            <Link href="/store" onClick={closeMenu}>
                <Button className="w-fit">
                    <FaCartShopping className="mr-2" />
                    Buy Now
                </Button>
            </Link>
        </div>
    );
};

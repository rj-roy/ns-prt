'use client'

import {
    House,
    User,
    Shapes,
    MessageSquareText,
    Mail,
    X,
    GanttChart,
    Briefcase,
    GripVertical,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const NavHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const menus = [
        { name: "Home", href: "#home", icon: House },
        { name: "About", href: "#about", icon: User },
        { name: "Resume", href: "#resume", icon: Briefcase },
        { name: "Services", href: "#services", icon: GanttChart },
        { name: "Skills", href: "#skills", icon: Shapes },
        { name: "Projects", href: "#projects", icon: GripVertical },
        { name: "Testimonials", href: "#testimonials", icon: MessageSquareText },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    return (
        <div>
            <button
                onClick={() => setMenuOpen(true)}
                className="fixed right-18 top-15 p-2 bg-white dark:bg-dark text-black dark:text-white hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-400/50 z-9 ring rounded-full"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>

            <div
                onClick={closeMenu}
                className={`fixed inset-0 dark:bg-black/50 z-40 transition-opacity duration-300 
                ${menuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
            />

            <div
                id="mobile-menu"
                className={`fixed top-0 right-0 z-50 w-[320px] min-h-screen bg-white dark:bg-[#0f0f11] dark:text-zinc-400 px-10 py-14 flex flex-col justify-between transform transition-transform duration-300 
                ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div>
                    <div className="flex items-center justify-between mb-14">
                        <h2 className="text-3xl font-light text-gray-700 dark:text-zinc-300">
                            Menu
                        </h2>

                        <button
                            onClick={closeMenu}
                            aria-label="Close menu"
                            className="text-zinc-300 hover:text-white transition"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    <div className="space-y-7">
                        {menus.map((menu, index) => (
                            <Link
                                href={menu.href}
                                key={index}
                                onClick={closeMenu}
                                className="flex items-center gap-4 dark:hover:text-white transition duration-300"
                            >
                                <menu.icon size={20} />

                                <span className="text-[15px]">
                                    {menu.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-light text-zinc-300 mb-8">
                        Social
                    </h3>
                    <div className="flex items-center gap-5">
                        <i className="ri-instagram-line text-lg hover:text-white cursor-pointer transition"></i>
                        <i className="ri-twitter-x-line text-lg hover:text-white cursor-pointer transition"></i>
                        <i className="ri-dribbble-line text-lg hover:text-white cursor-pointer transition"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavHeader;
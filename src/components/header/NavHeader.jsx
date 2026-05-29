'use client'
import { useState } from "react";
import MenuPopup from "../MenuPopup";
import ThemeToggle from "../ui/ThemeToggle";

const NavHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setMenuOpen(true)}
                className="z-50 fixed top-4 right-4 sm:right-6 md:right-8 p-2 bg-white dark:bg-dark text-black dark:text-white hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-400/50 ring rounded-full"
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
                    className="w-6 h-6 text-white">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className='fixed top-4 right-16 sm:right-20 z-50'>
                <ThemeToggle />
            </div>
            <MenuPopup isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default NavHeader;
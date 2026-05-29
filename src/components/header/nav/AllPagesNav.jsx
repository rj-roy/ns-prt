'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../../ui/ThemeToggle";
import MenuPopup from "../../MenuPopup";

const AllPagesNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const links = [
        { name: "Work", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    const renderedLinks = links.map((link) => (
        <Link key={link.name} href={link.href}
            className={`z-9999 nav-link text-[12px] font-medium tracking-widest uppercase text-mid no-underline hover:text-ink transition-colors duration-200
            ${pathname === link.href ? 'text-red underline underline-offset-4 font-bold!' : ''}`}>
            {link.name}
        </Link>
    ));

    return (
        <>
            <nav className="px-4 sm:px-6 md:px-12 py-7 flex justify-between items-center relative z-40">
                <div className="flex justify-center items-center">
                    <Link href='/' className="font-serif text-lg font-bold italic text-ink dark:text-parchment no-underline tracking-snug">Rj Roy.</Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-9">
                    {renderedLinks}
                    <div className="hidden lg:flex items-center gap-1.75 text-[12px] text-mid">
                        <div className="w-1.75 h-1.75 rounded-full bg-green-500 animate-pulse-dot"></div>
                        Available now
                    </div>
                    <ThemeToggle className=""/>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="p-2 hover:text-amber-400 transition focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-full"
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
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            <MenuPopup isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default AllPagesNav;
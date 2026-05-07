'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/icon/rj-logo.png"
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
    const links = [
        { name: "Work", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    const renderedLinks = links.map((link) => (
        <Link key={link.name} href={link.href}
            className={`nav-link text-[12px] font-medium tracking-widest uppercase text-mid no-underline hover:text-ink transition-colors duration-200
            ${pathname === link.href ? 'text-red underline underline-offset-4 font-bold!' : ''}`}>
            {link.name}
        </Link>
    ));

    return (
        <nav className="fixed top-0 left-0 right-0 z-100 px-12 py-7 flex justify-between items-center mix-blend-multiply">
            <div className="flex justify-center items-center">
                {/* <Image className="rounded-sm"
                    src={logo}
                    alt="rj-roy"
                    width={40}
                    height={100}
                /> */}
                <Link href='/' className="font-serif text-lg font-bold italic text-ink no-underline tracking-snug">Rj Roy.</Link>
            </div>
            <div className="flex items-center gap-9">
                {renderedLinks}
                <div className="hidden md:flex items-center gap-1.75 text-[12px] text-mid">
                    <div className="w-1.75 h-1.75 rounded-full bg-green-500 animate-pulse-dot"></div>
                    Available now
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";

const AllPagesNav = () => {
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
        <nav className="px-12 py-7 flex justify-between items-center">
            <div className="flex justify-center items-center">
                {/* <Image className="rounded-sm"
                    src={logo}
                    alt="rj-roy"
                    width={40}
                    height={100}
                /> */}
                <Link href='/' className="font-serif text-lg font-bold italic text-ink dark:text-parchment no-underline tracking-snug">Rj Roy.</Link>
            </div>
            <div className="flex items-center gap-9">
                {renderedLinks}
                <div className="hidden md:flex items-center gap-1.75 text-[12px] text-mid">
                    <div className="w-1.75 h-1.75 rounded-full bg-green-500 animate-pulse-dot"></div>
                    Available now
                </div>
                <ThemeToggle className=""/>
            </div>
        </nav>
    );
};

export default AllPagesNav;
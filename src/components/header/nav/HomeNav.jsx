'use client'
import { Briefcase, GanttChart, GripVertical, House, Mail, MessageSquareText, Shapes, User } from "lucide-react";
import Link from "next/link";

const HomeNav = () => {
    const links = [
        { name: "Home", href: "#home", icon: House },
        { name: "About", href: "#about", icon: User },
        { name: "Resume", href: "#resume", icon: Briefcase },
        { name: "Services", href: "#services", icon: GanttChart },
        { name: "Skills", href: "#skills", icon: Shapes },
        { name: "Projects", href: "#projects", icon: GripVertical },
        { name: "Testimonials", href: "#testimonials", icon: MessageSquareText },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    const renderedLinks = links.map((link) => (
        <Link key={link.name} href={link.href}
            className={`group cursor-none relative`}>
            <link.icon strokeWidth={1.2} />
            <span className="absolute top-1 -translate-x-55 opacity-0 w-30 group-hover:opacity-100 group-hover:-translate-x-35 bg-gray-600 px-3 py-1 rounded text-white transition-all duration-350 text-center pointer-events-none">
                {link.name}
                <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t- [16px] border-t-transparent border-b-15 border-b-transparent border-l-16 border-l-gray-600">
                </span>
            </span>
        </Link>
    ));
    return (
        <div className="border hidden xl:grid h-120 w-10 p-8 rounded-full mx-auto place-content-center cursor-none fixed right-8 top-40 bottom-40">
            <nav className="flex flex-col gap-5">
                {renderedLinks}
            </nav>
        </div>
    );
};

export default HomeNav;
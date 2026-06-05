'use client'
import { Briefcase, GanttChart, GripVertical, House, Mail, MessageSquareText, Shapes, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HomeNav = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const links = [
        { name: "Home", href: "#home", icon: House },
        { name: "Projects", href: "#projects", icon: GripVertical },
        { name: "About", href: "#about", icon: User },
        { name: "Skills", href: "#skills", icon: Shapes },
        { name: "Services", href: "#services", icon: GanttChart },
        { name: "Testimonials", href: "#testimonials", icon: MessageSquareText },
        { name: "Resume", href: "#resume", icon: Briefcase },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    const renderedLinks = links.map((link) => (
        <Link key={link.name} href={link.href}
            className={`group cursor-none relative`}>
            <link.icon strokeWidth={1.2} />
            <span className="absolute -top-0.5 -translate-x-55 opacity-0 w-30 group-hover:opacity-100 group-hover:-translate-x-35 bg-gray-600 px-3 py-1 rounded text-white transition-all duration-350 text-center pointer-events-none">
                {link.name}
                <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t- [16px] border-t-transparent border-b-15 border-b-transparent border-l-16 border-l-gray-600">
                </span>
            </span>
        </Link>
    ));
    return <>
        {
            menuOpen ? (
                <div className="border-l border-l-primary hidden bg-[#dadbda] dark:bg-black lg:grid h-120 w-10 p-8 rounded-full mx-auto place-content-center cursor-none fixed right-8 top-50 bottom-50 transition-all duration-700">
                    <nav className="relative flex flex-col gap-5">
                        {renderedLinks}
                    </nav>
                    <div onClick={()=>setMenuOpen(false)} className="z-9999 absolute top-50 bottom-50 -left-3 border-l border-l-primary bg-[#F1EDEC] dark:bg-[#1F1F1F] h-7 w-5 rounded-lg flex items-center justify-center cursor-pointer">
                        <FaAngleRight size={15} className=""/>
                    </div>
                </div>
            ): (
                <div onClick={()=>setMenuOpen(true)} className="fixed right-0 top-100 bottom-100 bg-black/20 dark:bg-white/20 h-12 w-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-700">
                    <FaAngleLeft size={30} className="text-primary"/>
                </div>
            )
        }
    </>


};

export default HomeNav;
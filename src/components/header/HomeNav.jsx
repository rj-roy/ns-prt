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
            className={``}>
            <link.icon />
        </Link>
    ));
    return (
        <div>
            <nav className="flex flex-col">
                {renderedLinks}
            </nav>
        </div>
    );
};

export default HomeNav;
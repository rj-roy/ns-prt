import { Briefcase, GanttChart, GripVertical, House, Mail, MessageSquareText, Shapes, User } from "lucide-react";
import Link from "next/link";

const AllPagesNav = () => {
    const links = [
        { name: "Home", href: "/", icon: House },
        { name: "Projects", href: "/projects", icon: GripVertical },
        { name: "About", href: "/#about", icon: User },
        { name: "Skills", href: "/#skills", icon: Shapes },
        { name: "Services", href: "/#services", icon: GanttChart },
        { name: "Testimonials", href: "/#testimonials", icon: MessageSquareText },
        { name: "Resume", href: "/resume", icon: Briefcase },
        { name: "Contact", href: "/#contact", icon: Mail },
    ];

    const renderedLinks = links.map((link) => (
        <Link key={link.name} href={link.href}
            className={`group cursor-none relative`}>
            <link.icon strokeWidth={1.2} />
            <span className="absolute top-1 -translate-x-6 opacity-0 w-auto group-hover:opacity-100 group-hover:translate-y-10 bg-gray-600 px-2 py-1 rounded text-white transition-all duration-350 text-center pointer-events-none">
                {link.name}
            </span>
        </Link>
    ));
    return (
        <div className=" border-b-[0.1px] border-b-primary z-9999 hidden bg-[#dadbda]/80 shadow-2xl dark:bg-black/60 lg:flex w-120 h-10 p-8 rounded-full mx-auto justify-center items-center cursor-none fixed right-50 left-50 top-5 transition-all duration-700">
            <nav className="relative flex  gap-5">
                {renderedLinks}
            </nav>
        </div>
    )
};

export default AllPagesNav;
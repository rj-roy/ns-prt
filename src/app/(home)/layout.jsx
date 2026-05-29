import Header from "@/components/header/NavHeader";
import HomeNav from "@/components/header/nav/HomeNav";
import LeftAbout from "@/components/home/LeftAbout";

export default function HomeLayout({ children }) {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            <Header />
            <div className="flex flex-col lg:flex-row w-full">
                <aside className="w-full lg:w-130 lg:h-screen lg:sticky lg:top-0 shrink-0 ">
                    <LeftAbout />
                </aside>
                
                <main className="flex-1 w-full lg:w-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
            
            <div className="hidden lg:block lg:fixed lg:bottom-0 lg:left-0 lg:h-120 lg:w-full">
                <HomeNav />
            </div>
        </div>
    )
};
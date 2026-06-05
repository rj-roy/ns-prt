import Header from "@/components/header/NavHeader";
import HomeNav from "@/components/header/nav/HomeNav";
import LeftAbout from "@/components/home/LeftAbout";
import HideLeftAboutProvider from "@/components/providers/HideLeftAboutProvider";

export default function HomeLayout({ children }) {
    return (
        <HideLeftAboutProvider>
            <div className="relative w-full min-h-screen">
                <Header />
                <div className="flex flex-col lg:flex-row w-full">
                    <aside className="w-full lg:w-130 lg:h-screen lg:top-0 lg-aside-transition">
                        <LeftAbout />
                    </aside>
                    
                    <main className="flex-1 w-full lg:w-auto">
                        {children}
                    </main>
                </div>
                
                <div className="">
                    <HomeNav />
                </div>
            </div>
        </HideLeftAboutProvider>
    );
}
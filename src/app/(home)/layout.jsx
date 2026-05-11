import Header from "@/components/header/NavHeader";
import HomeNav from "@/components/header/nav/HomeNav";
import LeftAbout from "@/components/home/LeftAbout";

export default function HomeLayout({ children }) {
    return (
        <div className="relative">
            <Header/>
            <div className="grid absolute w-full">
                <LeftAbout />
            </div>
            <div>
                {children}
            </div>
            <div className="grid absolute h-120">
                <HomeNav />
            </div>
        </div>
    )
};
import HomeNav from "@/components/header/HomeNav";
import LeftAbout from "@/components/home/LeftAbout";

export default function HomeLayout({ children }) {
    return (
        <div className="">
            <LeftAbout/>
            <div>
                {children}
            </div>
            <HomeNav />
        </div>
    )
};
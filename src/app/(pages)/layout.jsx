import AllPagesNav from "@/components/header/nav/AllPagesNav";
import Header from "@/components/header/NavHeader";

export default function AllPagesLayout ({children}) {
    return (
        <div className="w-full min-h-screen">
            <AllPagesNav/>
            <Header/>
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
                {children}
            </div>
        </div>
    )
};
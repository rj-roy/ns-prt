import AllPagesNav from "@/components/header/nav/AllPagesNav";

export default function AllPagesLayout ({children}) {
    return (
        <div>
            <AllPagesNav/>
            <div>
                {children}
            </div>
        </div>
    )
};
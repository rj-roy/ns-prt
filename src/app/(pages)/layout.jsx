import AllPagesNav from "@/components/header/AllPagesNav";

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
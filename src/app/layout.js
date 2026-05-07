import "./globals.css";
import { cabinet, fraunces } from "./fonts/styles/FontStyle";
import NavBar from "@/components/header/NavBar";
import CustomCursor from "@/components/ui/CustomCursor";
// import HoverPreview from "@/components/ui/HoverPreview";

export const metadata = {
  title: "Rj Roy",
  description: "Next.js Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full ${fraunces.variable} ${cabinet.variable}`}
    >
      <body className="bg-parchment text-ink font-sans font-normal overflow-x-hidden cursor-none">
        <CustomCursor/>
        {/* <HoverPreview/> */}
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
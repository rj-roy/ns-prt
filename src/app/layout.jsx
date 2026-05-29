import "./globals.css";
import { cabinet, fraunces } from "./fonts/styles/FontStyle";
import CustomCursor from "@/components/ui/CustomCursor";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Rj Roy",
  description: "Next.js Frontend Developer",
  // viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full ${fraunces.variable} ${cabinet.variable}`}
    >
      <body className="font-sans font-normal overflow-x-hidden cursor-none bg-d-white dark:bg-dark">
        <CustomCursor />
        <Provider>
            {children}          
        </Provider>
      </body>
    </html>
  );
}
import "./globals.css";
import { cabinet, fraunces } from "./fonts/styles/FontStyle";
import CustomCursor from "@/components/ui/CustomCursor";
import Provider from "@/components/Provider";
import BackToTop from "@/components/ui/BackToTop";
import Copyright from "@/components/Copyright";

export const metadata = {
  title: "Rj Roy",
  description: "Next.js Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full ${fraunces.variable} ${cabinet.variable}`}
    >
      <body className="font-cabinet font-normal overflow-x-hidden cursor-none bg-d-white dark:bg-dark">
        <CustomCursor />
        <Provider>
            {children}
            <div>
              <BackToTop/>
            </div>

                <div>
                    <Copyright/>
                </div>
        </Provider>
      </body>
    </html>
  );
}
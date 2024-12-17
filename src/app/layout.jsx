import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { ThemeProvider } from "@/components/home/theme-provider";
import "@/styles/globals.css";

export const metadata = {
  title: "FitCreatives",
  description: "A fitness community for techies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-auto min-h-screen">
            <div className="p-4 mdScreen:px-8 ">
              <div className="smScreen:w-[500px] mdScreen:w-[810px] lgScreen:w-[1024px] mx-auto">
                <div className="flex flex-col gap-4 items-center justify-items-center relative">
                  <Header />
                  <main className="w-full">{children}</main>
                  <CallToAction />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

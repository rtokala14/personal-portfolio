import "./globals.css";
import { ThemeProviders } from "../utils/themeProvider";
import Link from "next/link";
import ThemeChanger from "@/components/ThemeChanger";
import SideDrawer from "@/components/SideDrawer";
import { Github } from "lucide-react";

export const metadata = {
  title: "Rohit Tokala",
  description: "Personal website of Rohit Tokala",
  metadataBase: new URL("https://tokala.dev/"),
  openGraph: {
    type: "website",
    url: "https://tokala.dev/",
    title: "Rohit Tokala",
    description: "Personal website of Rohit Tokala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Tokala",
    description: "Personal website of Rohit Tokala",
    site: "@TokalaRohit",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning data-theme="black" lang="en">
      <head />
      <body>
        <ThemeProviders>
          {/* <NavBar /> */}
          {/* <main>{children}</main> */}
          <div className="drawer">
            <input type="checkbox" id="nav-drawer" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <nav className="sticky backdrop-blur-lg navbar h-14 p-2 top-0 w-full flex items-center justify-between">
                <div className="navbar-start flex items-center gap-4">
                  <div className="md:hidden flex-none">
                    <label
                      htmlFor="nav-drawer"
                      className="btn btn-square rounded-md btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </label>
                  </div>
                  <div>
                    <Link href="/">
                      <h1 className=" text-xl font-bold pl-2">Rohit Tokala</h1>
                    </Link>
                  </div>
                  <div className="menu menu-horizontal hidden md:flex gap-1 items-center">
                    <Link href={"/about"}>
                      <button className="btn btn-md rounded-md btn-ghost capitalize">
                        About
                      </button>
                    </Link>
                    <Link href={"/projects"}>
                      <button className="btn btn-md rounded-md btn-ghost capitalize">
                        Projects
                      </button>
                    </Link>
                    <Link href={"/contact"}>
                      <button className="btn btn-md rounded-md btn-ghost capitalize">
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="navbar-end">
                  <div>
                    <a
                      rel="noreferer"
                      target="_blank"
                      href={"https://github.com/rtokala14"}
                      aria-label="Link to Rohit's Github"
                      className="btn btn-ghost btn-square rounded-md"
                    >
                      <Github />
                    </a>
                    <ThemeChanger />
                  </div>
                </div>
              </nav>
              {children}
            </div>
            <SideDrawer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}

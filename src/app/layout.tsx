import "./globals.css";
import { ThemeProviders } from "../utils/themeProvider";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Rohit Tokala",
  description: "Personal website of Rohit Tokala",
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
          <NavBar />
          <main>{children}</main>
        </ThemeProviders>
      </body>
    </html>
  );
}

import "./globals.css";
import { ThemeProviders } from "../utils/themeProvider";

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
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}

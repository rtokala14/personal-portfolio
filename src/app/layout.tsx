import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

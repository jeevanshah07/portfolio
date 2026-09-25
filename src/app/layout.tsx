import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeevan Shah | Full-stack Developer",
  description:
    "Jeevan Shah is a Rutgers computer science and mathematics student building accessible web tools, data systems, and software for Formula Racing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

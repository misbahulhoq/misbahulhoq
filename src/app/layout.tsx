import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/components/Shared/Footer";
import HeaderClient from "@/components/Shared/HeaderClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const birthStone = localFont({
  src: "./fonts/BirthstoneBounce-Medium.ttf",
  variable: "--font-birthstone",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Md Mezbah Uddin",
  description: "Portfolio of Md Mezbah Uddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="html" className="scroll-smooth">
      <link rel="icon" href="/icon.svg" type="image/svg" sizes="42x32" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-secondary selection:text-secondary-content`}
      >
        {/* <Header /> */}
        <HeaderClient />
        {children}
        <Footer />
      </body>
    </html>
  );
}

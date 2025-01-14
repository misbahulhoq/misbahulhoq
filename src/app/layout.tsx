import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Md Mezbah Uddin",
    default: "Md Mezbah Uddin",
  },
  description:
    "Welcome to the portfolio of Md Mezbah Uddin, a skilled MERN Stack developer specializing in React, Next.js,MongoDb, Node.js, Express.js and Tailwind CSS. Explore my projects, skills, and contact details.",
  keywords: [
    "Md Mezbah Uddin",
    "Mezbah",
    "front-end developer",
    "MERN Stack developer",
    "Full stack developer",
    "Backend developer",
    "React developer",
    "Next.js portfolio",
    "Tailwind CSS projects",
    "web developer portfolio",
    "JavaScript developer",
  ],
  authors: [{ name: "Md Mezbah Uddin", url: "https://misbahulhoq.vercel.app" }],
  robots: "index, follow",
  openGraph: {
    title: "Md Mezbah Uddin | MERN Stack Developer Portfolio",
    description:
      "Explore the portfolio of Md Mezbah Uddin, showcasing expertise in full stack development, including React, Next.js, Node.js, Express.js, and Tailwind CSS.",
    url: "https://misbahulhoq.vercel.app", // Replace with your actual domain
    siteName: "Md Mezbah Uddin Portfolio",
    images: [
      {
        url: "/mezbah-photo.png", // Add a relevant image for preview
        width: 1200,
        height: 630,
        alt: "Portfolio Preview of Md Mezbah Uddin",
      },
    ],
    type: "website",
  },
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
        <Header />
        {/* <HeaderClient /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

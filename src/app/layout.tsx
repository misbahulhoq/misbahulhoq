import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/providers/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // The title is the most important element for SEO.
  title: {
    template: "%s | Md Mezbah Uddin", // For sub-pages like Blog or Projects
    default: "Md Mezbah Uddin | Full Stack MERN Developer", // The main title for your homepage
  },

  // The description is sales pitch in search results.
  description:
    "The official portfolio of Md Mezbah Uddin, a skilled Full Stack MERN Developer based in Bangladesh. Explore projects built with MongoDB, Express, React, and Node.js by Mezbah.",

  // Keywords to help search engines categorize my site.
  keywords: [
    "Md Mezbah Uddin",
    "Mezbah",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Bangladesh",
  ],

  // Establishing authorship.
  authors: [{ name: "Md Mezbah Uddin", url: "https://misbahulhoq.vercel.app" }],
  creator: "Md Mezbah Uddin",
  publisher: "Md Mezbah Uddin",

  // For search engine crawlers.
  robots: {
    index: true,
    follow: true,
  },

  // Open Graph (OG) metadata for social sharing (LinkedIn, Facebook, etc.).
  openGraph: {
    title: "Md Mezbah Uddin - Full Stack MERN Developer",
    description:
      "Explore the work of Md Mezbah Uddin, a developer specializing in the MERN stack.",
    url: "https://misbahulhoq.vercel.app",
    siteName: "Md Mezbah Uddin Portfolio",
    images: [
      {
        url: "https://misbahulhoq.vercel.app/og-image.png", // ** IMPORTANT: Create and upload this image **
        width: 1200,
        height: 630,
        alt: "Md Mezbah Uddin - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Favicons and icons.
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // The canonical URL for your homepage.
  alternates: {
    canonical: "https://misbahulhoq.vercel.app",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

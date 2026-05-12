import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"], // Optimizing for "Normal" to "SemiBold" range common in Apple design
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jombina.site"),
  title: {
    default: "JomBina Digital Solutions | Enterprise Software Development",
    template: "%s | JomBina Digital",
  },
  description:
    "Strategic digital consultancy specializing in high-performance web applications, e-commerce, and enterprise software.",
  keywords: [
    "Web Development",
    "Software Engineering",
    "Next.js",
    "React",
    "Enterprise Solutions",
    "Digital Transformation",
    "Malaysia",
  ],
  authors: [{ name: "JomBina Team" }],
  creator: "JomBina International",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jombina.site",
    title: "JomBina Digital Solutions",
    description: "Building the digital infrastructure for tomorrow's market leaders.",
    siteName: "JomBina Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JomBina Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JomBina Digital Solutions",
    description: "Building the digital infrastructure for tomorrow's market leaders.",
    images: ["/og-image.png"],
    creator: "@jombina_tech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-background text-foreground flex min-h-screen flex-col font-sans antialiased selection:bg-orange-600 selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

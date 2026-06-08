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
    default: "JomBina Digital | Servis Bina Website Untuk Bisnes",
    template: "%s | JomBina Digital",
  },
  description:
    "Kami bantu owner bisnes bina website, landing page, kedai online dan sistem web yang nampak kemas, laju, dan senang pelanggan percaya.",
  keywords: [
    "Bina Laman Web",
    "Bina Website",
    "Servis Buat Website",
    "Website Bisnes",
    "Pembangunan Perisian",
    "Next.js",
    "React",
    "Sistem Web",
    "Transformasi Digital",
    "Malaysia",
  ],
  authors: [{ name: "Pasukan JomBina" }],
  creator: "JomBina International",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://jombina.site",
    title: "JomBina Digital | Website Kemas Untuk Bisnes Anda",
    description:
      "Nak website yang nampak profesional dan bantu pelanggan yakin? JomBina bina laman web, landing page dan sistem web untuk bisnes anda.",
    siteName: "JomBina Digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JomBina Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JomBina Digital | Website Kemas Untuk Bisnes Anda",
    description:
      "Kami bina website, landing page dan sistem web yang sesuai untuk bisnes yang nak nampak yakin online.",
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
    <html lang="ms" suppressHydrationWarning>
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

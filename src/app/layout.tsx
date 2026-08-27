import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteUrl } from "@/constants/data";
import { professionalServiceSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"], // Optimizing for "Normal" to "SemiBold" range common in Apple design
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JomBina Digital | Website Development For Business",
    template: "%s | JomBina Digital",
  },
  description:
    "We help business owners build websites, landing pages, online stores and web systems that look sharp, load fast, and earn customer trust.",
  keywords: [
    "Web Design",
    "Website Development",
    "Website Development Service",
    "Business Website",
    "Software Development",
    "Next.js",
    "React",
    "Web Systems",
    "Digital Transformation",
    "Malaysia",
  ],
  authors: [{ name: "The JomBina Team" }],
  creator: "JomBina International",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteUrl,
    title: "JomBina Digital | Sharp Websites For Your Business",
    description:
      "Want a website that looks professional and gives customers confidence? JomBina builds websites, landing pages and web systems for your business.",
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
    title: "JomBina Digital | Sharp Websites For Your Business",
    description:
      "We build websites, landing pages and web systems for businesses that want to look credible online.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} bg-background text-foreground flex min-h-screen flex-col font-sans antialiased selection:bg-orange-600 selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}

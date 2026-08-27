import { Metadata } from "next";
import dynamic from "next/dynamic";
import Pricing from "@/components/Pricing";

const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));

export const metadata: Metadata = {
  // No "| JomBina" — layout.tsx applies the "%s | JomBina Digital" template.
  // (openGraph.title below is standalone and keeps its own branding.)
  title: "Website Packages & Pricing",
  description:
    "Landing page from RM199, online store from RM499, corporate website from RM990. See exactly what is included in each package before you commit.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Website Packages & Pricing | JomBina",
    description:
      "Clear budget from day one. See what is included in our landing page, online store and corporate website packages.",
  },
};

// No FAQPage JSON-LD here on purpose — <FAQ /> is reused visually, but the
// schema stays on the homepage. The same FAQ markup on two URLs is the kind of
// duplication Google flags.
export default function PricingPage() {
  return (
    <div className="bg-white pt-20">
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}

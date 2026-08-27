import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import { faqSchema } from "@/lib/schema";

const Process = dynamic(() => import("@/components/Process"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));

// Testimonials is unmounted, not deleted — the component and testimonialsData
// are still on disk, waiting on real client quotes. The placeholder ones matched
// no project or client logo. Re-mount by restoring the import and the JSX line.
//
// Clients (tech marquee), WhyUs and Scale were deleted outright — see git
// history if any of that copy is ever wanted back.

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* FAQPage markup lives here because Google requires the marked-up
          Q&A to be visible on the same page — <FAQ /> renders below. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ClientLogos />
      <Work />
      <Services variant="teaser" />
      <About />
      <Process />
      <Pricing variant="teaser" />
      <FAQ />
      <CTA />
    </div>
  );
}

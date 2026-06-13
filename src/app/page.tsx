import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";

const Scale = dynamic(() => import("@/components/Scale"));
const Process = dynamic(() => import("@/components/Process"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Hero />
      <ClientLogos />
      <Work />
      <Clients />
      <Services />
      <About />
      <WhyUs />
      <Scale />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

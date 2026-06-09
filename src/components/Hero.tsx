"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import ProjectShowcase from "@/components/ProjectShowcase";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white pt-32 pb-20">
      {/* Background Graphic - Subtle Architectural Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <FadeIn delay={0.1}>
            <h1 className="mb-12 text-6xl leading-[0.9] font-semibold tracking-tighter text-zinc-950 md:text-8xl lg:text-9xl">
              WEBSITE <br />
              <span className="text-zinc-400">KEMAS</span> <br />
              UNTUK BISNES.
            </h1>
          </FadeIn>
        </div>

        <div className="flex flex-col items-start justify-end lg:col-span-3 lg:items-end">
          <FadeIn delay={0.4} className="space-y-8">
            <p className="max-w-xs text-left text-lg leading-relaxed text-zinc-600 lg:text-right">
              Kami bantu owner bisnes bina website, landing page dan sistem web yang nampak
              profesional, laju, dan senang pelanggan percaya.
            </p>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Link
                href="/contact"
                className="group flex items-center gap-4 text-sm font-bold tracking-widest text-zinc-950 uppercase"
              >
                Saya Nak Website
                <span className="h-[1px] w-12 bg-zinc-950 transition-all duration-300 group-hover:w-20" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <ProjectShowcase />

      <div className="absolute bottom-8 left-6 hidden animate-bounce opacity-50 md:left-12 lg:block">
        <ArrowDown className="h-6 w-6 text-zinc-400" />
      </div>
    </section>
  );
};

export default Hero;

"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const clientLogos = [
  { name: "Bosta", src: "/logo_brand/bosta.png" },
  { name: "Ells Cafe", src: "/logo_brand/ells.png" },
  { name: "FamyyTech Mobile", src: "/logo_brand/famyytech_mobile.png" },
  { name: "House of Misses", src: "/logo_brand/house_of_misses.png" },
  { name: "MissGoldenHair", src: "/logo_brand/missgoldenhair.png" },
  { name: "MissPlumpyLips", src: "/logo_brand/missplumpylips.png" },
  { name: "Probiozen", src: "/logo_brand/probiozen.png" },
];

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

const ClientLogos = () => {
  return (
    <section className="border-b border-zinc-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
            Dipercayai Oleh Pelbagai Bisnes & Brand Tempatan
          </p>
        </div>

        <div className="group relative mx-auto max-w-4xl">
          {/* Centered Hover Overlay Button */}
          <div className="pointer-events-none absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase shadow-xl transition-all duration-300 hover:scale-105 hover:bg-zinc-800"
            >
              <span>Hubungi Kami</span>
              <ChevronRight className="size-4" />
            </Link>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mx-auto grid grid-cols-2 gap-x-8 gap-y-8 transition-all duration-500 group-hover:opacity-40 group-hover:blur-[2px] sm:grid-cols-4 sm:gap-x-16 sm:gap-y-12 lg:gap-x-20"
          >
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex h-20 items-center justify-center">
                <div className="relative h-12 w-full max-w-[160px] transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="160px"
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

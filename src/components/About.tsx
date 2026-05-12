"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const About = () => {
  return (
    <section id="about" className="border-t border-zinc-200 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start gap-12 md:flex-row md:gap-24">
          {/* Image Column */}
          <div className="w-full md:w-1/3">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden border border-zinc-200 bg-zinc-100">
                <Image
                  src="/about.webp"
                  alt="Aniq — Lead Digital Architect"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </FadeIn>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-2/3">
            <FadeIn delay={0.2}>
              <p className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                About Me
              </p>

              <h2 className="mb-8 text-3xl leading-tight font-semibold tracking-tighter text-zinc-950 md:text-5xl">
                Lead Digital Architect.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
                <p>
                  A graduate in Information Technology from KPTM Batu Pahat, built on a foundation
                  of practical experience in engineering digital solutions for real-world business
                  cases.
                </p>
                <p>
                  My approach is pragmatic and results-oriented: understanding commercial objectives
                  first, then applying robust technical execution to deliver websites and systems
                  that perform at scale.
                </p>
                <p>
                  I collaborate directly with business owners, managers, and marketing teams to
                  translate requirements into digital assets that drive growth and operational
                  efficiency.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="font-medium text-zinc-900">
                    Diploma in Information Technology (KPTM Batu Pahat)
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="font-medium text-zinc-900">
                    Production-grade Business Systems Development
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

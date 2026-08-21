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
                  alt="Aniq — web developer at JomBina"
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
                Who Is Behind JomBina
              </p>

              <h2 className="mb-8 text-3xl leading-tight font-semibold tracking-tighter text-zinc-950 md:text-5xl">
                I build digital solutions that business owners genuinely understand and use.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
                <p>
                  I am Aniq, a developer who helps small and medium businesses solve operational
                  problems with digital tools. That could be a website, an internal system, or
                  automation for the daily tasks that keep eating up your time.
                </p>
                <p>
                  My approach is simple. I start by understanding the real problem in your business,
                  how the process runs today, and which technology actually fits. Only then do I
                  start building, whether that is a website, a web app or a custom system, based on
                  what your business truly needs. Not the same template as everyone else.
                </p>
                <p>
                  I know not everyone is comfortable with technical jargon. So I explain things as
                  plainly as I can, set everything up for you, and make sure the system genuinely
                  runs and helps your business move more smoothly.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="font-medium text-zinc-900">
                    Built and deployed web systems (inventory, HR, e-learning) used by more than 50
                    staff inside a real company
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="font-medium text-zinc-900">
                    Websites, Web Systems, Automation and Digital Tools for Business
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

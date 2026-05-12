"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const CTA = () => {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 bg-white px-6 py-32 text-zinc-950 md:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 lg:grid-cols-2">
        <div>
          <FadeIn>
            <h2 className="mb-8 text-5xl leading-[0.9] font-semibold tracking-tighter md:text-7xl lg:text-8xl">
              LET&apos;S BUILD <br />
              THE FUTURE.
            </h2>
          </FadeIn>
        </div>
        <div className="pb-4">
          <FadeIn delay={0.2}>
            <p className="mb-12 max-w-md text-lg leading-relaxed text-zinc-500 md:text-xl">
              We accept 3 new partnerships per quarter. Secure your slot for Q3 2026.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center bg-orange-600 px-12 py-6 font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-700 md:w-auto"
            >
              Start Project
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTA;

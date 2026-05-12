"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { testimonialsData as reviews } from "@/constants/data";

const Testimonials = () => {
  return (
    <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-32 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 text-center">
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-400 uppercase">
              Success Stories
            </p>
            <h2 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Trusted by the Best.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col justify-between space-y-8 border border-zinc-200 bg-white p-8 transition-colors hover:border-orange-600">
                <div className="flex gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-600 text-orange-600" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed font-medium text-zinc-800">
                  &quot;{r.quote}&quot;
                </p>

                <div className="flex items-center gap-4 border-t border-zinc-200 pt-4">
                  <div>
                    <p className="font-bold text-zinc-950">{r.author}</p>
                    <p className="text-sm tracking-wide text-zinc-500 uppercase">{r.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

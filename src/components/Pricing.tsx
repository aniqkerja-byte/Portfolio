"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { pricingPlansData as plans } from "@/constants/data";

const Pricing = () => {
  return (
    <section id="pricing" className="border-t border-zinc-100 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mx-auto mb-24 max-w-2xl text-center">
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-400 uppercase">
              Investment
            </p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Transparent Pricing.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              No hidden charges. Choose a package that fits your business phase.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col border p-8 transition-all duration-300 md:p-12 ${p.highlight ? "border-orange-600 bg-zinc-950 text-white ring-1 ring-orange-600" : "border-zinc-200 bg-white text-zinc-950 hover:border-zinc-300"}`}
              >
                {p.highlight && (
                  <div className="absolute top-0 right-0 bg-orange-600 px-3 py-1 text-xs font-bold tracking-widest text-white uppercase">
                    Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-lg font-bold tracking-widest uppercase opacity-70">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tighter md:text-5xl">
                      {p.price}
                    </span>
                    <span className="text-xl font-medium opacity-60">{p.priceRange}</span>
                  </div>
                  <p
                    className={`mt-4 text-sm leading-relaxed ${p.highlight ? "text-zinc-400" : "text-zinc-500"}`}
                  >
                    {p.desc}
                  </p>
                </div>

                <ul className="mb-12 flex-grow space-y-4">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 ${p.highlight ? "text-orange-500" : "text-zinc-400"}`}
                      />
                      <span className="opacity-90">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-colors ${p.highlight ? "bg-white text-zinc-950 hover:bg-zinc-200" : "bg-zinc-950 text-white hover:bg-orange-600"}`}
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-400">
            *All packages include .com domain & premium hosting for 1 year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

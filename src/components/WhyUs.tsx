"use client";

import { Zap, TrendingUp, LifeBuoy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const WhyUs = () => {
  const reasons = [
    {
      icon: <Zap className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "A Process Without The Hassle",
      desc: "We map out every step from kickoff to launch. You give us the basic content, we shape it into a website that looks professional.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "Design That Helps You Close",
      desc: "A website is not just about looking nice. We arrange the copy, the key sections and the call-to-action buttons so visitors understand quickly and reach out.",
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "We Do Not Disappear After Launch",
      desc: "Once the site is live we help you review it, walk you through how to use it, and support the technical side so you can focus on the business.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 max-w-2xl">
            <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Why Business Owners Choose JomBina.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              Because we do not just build websites. We help you look more credible, stay easy to
              reach, and get ready to sell online.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-24">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group">
                <div className="mb-8 inline-block rounded-none border border-zinc-100 bg-white p-4 transition-colors group-hover:border-orange-600">
                  {r.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-950">{r.title}</h3>
                <p className="leading-relaxed text-zinc-500">{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

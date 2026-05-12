"use client";

import { Zap, TrendingUp, LifeBuoy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const WhyUs = () => {
  const reasons = [
    {
      icon: <Zap className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "Rapid Deployment",
      desc: "Go to market in 7-14 days. We skip the bureaucracy and focus on shipping production-grade software.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "ROI-Driven Design",
      desc: "We don't just design for aesthetics. We engineer interfaces using AIDA principles to maximize conversion.",
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "Enterprise Support",
      desc: "12 months of dedicated technical maintenance. You focus on growth, we ensure 99.9% uptime.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 max-w-2xl">
            <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Why JomBina.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              We bridge the gap between &quot;Corporate Reliability&quot; and &quot;Startup
              Speed&quot;.
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

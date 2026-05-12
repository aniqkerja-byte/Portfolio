"use client";

import { Zap, TrendingUp, LifeBuoy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const WhyUs = () => {
    const reasons = [
        {
            icon: <Zap className="w-8 h-8 text-orange-600" strokeWidth={1.5} />,
            title: "Rapid Deployment",
            desc: "Go to market in 7-14 days. We skip the bureaucracy and focus on shipping production-grade software.",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-orange-600" strokeWidth={1.5} />,
            title: "ROI-Driven Design",
            desc: "We don't just design for aesthetics. We engineer interfaces using AIDA principles to maximize conversion.",
        },
        {
            icon: <LifeBuoy className="w-8 h-8 text-orange-600" strokeWidth={1.5} />,
            title: "Enterprise Support",
            desc: "12 months of dedicated technical maintenance. You focus on growth, we ensure 99.9% uptime.",
        }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-50 border-t border-zinc-100">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <div className="mb-24 max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950 mb-6">
                            Why JomBina.
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            We bridge the gap between "Corporate Reliability" and "Startup Speed".
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                    {reasons.map((r, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group">
                                <div className="mb-8 p-4 bg-white inline-block rounded-none border border-zinc-100 group-hover:border-orange-600 transition-colors">
                                    {r.icon}
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4">
                                    {r.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed">
                                    {r.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;

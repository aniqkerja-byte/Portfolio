"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { servicesData as services } from "@/constants/data";

const Services = () => {

    return (
        <section id="expertise" className="py-32 px-6 md:px-12 bg-zinc-50">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950">Expertise.</h2>
                        <p className="text-zinc-500 max-w-sm text-sm mt-6 md:mt-0 leading-relaxed">
                            Precision engineering for every layer of your digital stack.
                        </p>
                    </div>
                </FadeIn>

                <div className="border-t border-zinc-200">
                    {services.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group border-b border-zinc-200 py-12 md:py-16 transition-colors hover:bg-white">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8 md:gap-0">
                                    <div className="md:w-1/4">
                                        <span className="text-xs font-mono text-zinc-400">0{i + 1}</span>
                                    </div>
                                    <div className="md:w-1/2">
                                        <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                            {s.title}
                                        </h3>
                                        <div className="flex gap-4 flex-wrap">
                                            {s.tags.map((t, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-zinc-100 text-xs font-medium text-zinc-600 rounded-full">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="md:w-1/4 flex justify-between md:justify-end items-start gap-4">
                                        <p className="text-zinc-500 text-sm max-w-[200px] leading-relaxed">
                                            {s.desc}
                                        </p>
                                        <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-orange-600 transition-colors" />
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

export default Services;

"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { pricingPlansData as plans } from "@/constants/data";

const Pricing = () => {

    return (
        <section id="pricing" className="py-32 px-6 md:px-12 bg-white border-t border-zinc-100">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <div className="mb-24 text-center max-w-2xl mx-auto">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Investment</p>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950 mb-6">
                            Transparent Pricing.
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            No hidden charges. Choose a package that fits your business phase.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((p, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="h-full">
                            <div className={`relative flex flex-col p-8 md:p-12 border transition-all duration-300 h-full ${p.highlight ? 'border-orange-600 bg-zinc-950 text-white ring-1 ring-orange-600' : 'border-zinc-200 bg-white text-zinc-950 hover:border-zinc-300'}`}>

                                {p.highlight && (
                                    <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                                        Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-lg font-bold uppercase tracking-widest mb-2 opacity-70">{p.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold tracking-tighter">{p.price}</span>
                                        <span className="text-xl font-medium opacity-60">{p.priceRange}</span>
                                    </div>
                                    <p className={`mt-4 text-sm leading-relaxed ${p.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                        {p.desc}
                                    </p>
                                </div>

                                <ul className="flex-grow space-y-4 mb-12">
                                    {p.features.map((f, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${p.highlight ? 'text-orange-500' : 'text-zinc-400'}`} />
                                            <span className="opacity-90">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="/contact" className={`w-full py-4 text-center text-sm font-bold uppercase tracking-widest transition-colors ${p.highlight ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-950 text-white hover:bg-orange-600'}`}>
                                    Get Started
                                </a>
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

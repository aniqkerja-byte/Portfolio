"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { testimonialsData as reviews } from "@/constants/data";

const Testimonials = () => {

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-50 text-zinc-950 border-t border-zinc-100">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <div className="mb-24 text-center">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Success Stories</p>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950">
                            Trusted by the Best.
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
                    {reviews.map((r, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="h-full">
                            <div className="flex flex-col justify-between space-y-8 p-8 bg-white border border-zinc-200 hover:border-orange-600 transition-colors h-full">
                                <div className="flex gap-1">
                                    {[...Array(r.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-orange-600 fill-orange-600" />
                                    ))}
                                </div>

                                <p className="text-lg leading-relaxed font-medium text-zinc-800">
                                    "{r.quote}"
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200">
                                    <div>
                                        <p className="font-bold text-zinc-950">{r.author}</p>
                                        <p className="text-sm text-zinc-500 uppercase tracking-wide">{r.role}</p>
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

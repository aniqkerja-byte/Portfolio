"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const CTA = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-white text-zinc-950 border-t border-zinc-200">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <div>
                    <FadeIn>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
                            LET'S BUILD <br />
                            THE FUTURE.
                        </h2>
                    </FadeIn>
                </div>
                <div className="pb-4">
                    <FadeIn delay={0.2}>
                        <p className="text-zinc-500 text-lg md:text-xl max-w-md leading-relaxed mb-12">
                            We accept 3 new partnerships per quarter. Secure your slot for Q3 2026.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-12 py-6 bg-orange-600 text-white font-bold tracking-widest uppercase hover:bg-orange-700 transition-colors w-full md:w-auto"
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

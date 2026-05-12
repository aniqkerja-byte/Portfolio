"use client";

import { FadeIn } from "@/components/FadeIn";

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Strategy",
            desc: "Alignment of business objectives, scope definition, and detailed planning phase."
        },
        {
            number: "02",
            title: "Design & Structure",
            desc: "Wireframing, UI/UX design focused on user flow and brand representation."
        },
        {
            number: "03",
            title: "Development & Testing",
            desc: "Build, integrate, and rigorously test for performance, security, and reliability."
        },
        {
            number: "04",
            title: "Launch & Support",
            desc: "Deployment, handover, documentation, and continuous support setup."
        }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-zinc-50 text-zinc-950 border-t border-zinc-200">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <div className="text-center mb-24 max-w-2xl mx-auto">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Workflow</p>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950 mb-6">
                            Structured Delivery.
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            A proven workflow ensuring quality control and timeline adherence.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-zinc-200" />

                    {steps.map((s, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="relative group">
                                {/* Number Circle */}
                                <div className="w-24 h-24 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-3xl font-bold text-zinc-300 group-hover:text-orange-600 group-hover:border-orange-600 transition-all duration-300 mb-8 mx-auto md:mx-0 relative z-10 shadow-sm">
                                    {s.number}
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-zinc-950 mb-4 text-center md:text-left">
                                    {s.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm text-center md:text-left">
                                    {s.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

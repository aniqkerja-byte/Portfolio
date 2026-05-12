"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-white border-t border-zinc-200">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">

                    {/* Image Column */}
                    <div className="w-full md:w-1/3">
                        <FadeIn>
                            <div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden border border-zinc-200">
                                {/* Placeholder for User Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-400">
                                    <span className="text-xs font-mono uppercase tracking-widest">Profile Photo</span>
                                </div>
                                {/* If you have an actual image, uncomment below and replace src */}
                                {/* <img src="/path/to/image.jpg" alt="Profile" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" /> */}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-2/3">
                        <FadeIn delay={0.2}>
                            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">About Me</p>

                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-950 mb-8 leading-tight">
                                Lead Digital Architect.
                            </h2>

                            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                                <p>
                                    A graduate in Information Technology from KPTM Batu Pahat, built on a foundation of practical experience in engineering digital solutions for real-world business cases.
                                </p>
                                <p>
                                    My approach is pragmatic and results-oriented: understanding commercial objectives first, then applying robust technical execution to deliver websites and systems that perform at scale.
                                </p>
                                <p>
                                    I collaborate directly with business owners, managers, and marketing teams to translate requirements into digital assets that drive growth and operational efficiency.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4">
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                                    <span className="font-medium text-zinc-900">Diploma in Information Technology (KPTM Batu Pahat)</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                                    <span className="font-medium text-zinc-900">Production-grade Business Systems Development</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

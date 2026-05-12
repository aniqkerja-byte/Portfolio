"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 bg-white relative overflow-hidden">

            {/* Background Graphic - Subtle Architectural Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-[1400px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-9">
                    <FadeIn delay={0.1}>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-zinc-950 leading-[0.9] mb-12">
                            WE BUILD <br />
                            <span className="text-zinc-400">DIGITAL</span> <br />
                            AUTHORITY.
                        </h1>
                    </FadeIn>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-end items-start lg:items-end">
                    <FadeIn delay={0.4} className="space-y-8">
                        <p className="text-lg text-zinc-600 leading-relaxed max-w-xs text-left lg:text-right">
                            JomBina is a strategic design consultancy. We help global enterprises define their digital future specifically.
                        </p>

                        <div className="flex flex-col items-start lg:items-end gap-4">
                            <Link href="/contact" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-950">
                                Start a Project
                                <span className="w-12 h-[1px] bg-zinc-950 group-hover:w-20 transition-all duration-300" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="absolute bottom-12 left-6 md:left-12 opacity-50 animate-bounce">
                <ArrowDown className="w-6 h-6 text-zinc-400" />
            </div>

        </section>
    );
};

export default Hero;

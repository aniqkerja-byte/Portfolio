"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Work = () => {
    const projects = [
        {
            name: "Probiozen",
            category: "Health & Wellness",
            year: "2024",
            image: "/work/probiozen.webp",
            slug: "probiozen"
        },
        {
            name: "MissGoldenHair",
            category: "Beauty & Cosmetics",
            year: "2024",
            image: "/work/missgoldenhair.webp",
            slug: "missgoldenhair"
        },
        {
            name: "Ells Cafe",
            category: "Food & Beverage",
            year: "2023",
            image: "/work/ellscafe.webp",
            slug: "ellscafe"
        },
        {
            name: "Buku Panduan Sihat",
            category: "Digital Education",
            year: "2023",
            image: "/work/bukupanduansihat.webp",
            slug: "bukupanduansihat"
        },
        {
            name: "Formula Turun 10KG",
            category: "Fitness Program",
            year: "2023",
            image: "/work/formulaturun10kg.webp",
            slug: "modul-formula-turun-10kg"
        },
        {
            name: "Rawat Hormon",
            category: "Live Events",
            year: "2024",
            image: "/work/rawathotmon.webp",
            slug: "rawat-hormon"
        }
    ];

    return (
        <section id="work" className="py-32 px-6 md:px-12 bg-white border-t border-zinc-200">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <div className="flex justify-between items-end mb-24">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950">Selected Work.</h2>
                        <Link href="#archive" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-950 hover:text-orange-600 transition-colors">
                            View Archive <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((p, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <Link href={`/work/${p.slug}`} className="group cursor-pointer block">
                                <div className="w-full aspect-[4/3] bg-zinc-100 mb-8 overflow-hidden relative border border-zinc-100">
                                    <Image
                                        src={p.image}
                                        alt={p.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                <div className="flex justify-between items-baseline border-b border-zinc-200 pb-4 group-hover:border-orange-600 transition-colors">
                                    <div>
                                        <h3 className="text-2xl font-medium tracking-tight text-zinc-950 mb-1">{p.name}</h3>
                                        <p className="text-sm text-zinc-500">{p.category}</p>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-400">{p.year}</span>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.2} className="mt-24 md:hidden">
                    <Link href="#archive" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-950">
                        View Archive <ArrowRight className="w-4 h-4" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};

export default Work;

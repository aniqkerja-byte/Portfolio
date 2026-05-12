import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Real Project Data Provided by User
const projects = [
    {
        slug: "probiozen",
        title: "Probiozen",
        category: "Health & Wellness",
        year: "2024",
        desc: "High-conversion landing page for Probiozen health supplements.",
        challenge: "To communicate complex health benefits in a simple, engaging way that drives immediate purchases.",
        solution: "We designed a clean, trust-focused landing page with clear scientific backing, testimonials, and a streamlined checkout flow.",
        results: [
            "High Conversion Rate",
            "Fast Load Speed",
            "Mobile Optimized Analysis"
        ],
        techStack: ["WordPress", "Elementor", "WooCommerce"],
        liveUrl: "https://bosta.com.my/probiozen/",
        image: "/work/probiozen.webp"
    },
    {
        slug: "missgoldenhair",
        title: "MissGoldenHair",
        category: "Beauty & Cosmetics",
        year: "2024",
        desc: "Elegant e-commerce presence for premium hair care products.",
        challenge: "Creating a luxurious brand aesthetic while ensuring the site remains approachable and easy to shop on.",
        solution: "Implemented a 'Gold & Black' premium theme with smooth animations and high-quality imagery to elevate the brand perception.",
        results: [
            "Premium Brand Identity",
            "Seamless Shopping Cart",
            "Interactive Product Gallery"
        ],
        techStack: ["Next.js", "Tailwind CSS", "Stripe"],
        liveUrl: "https://missgoldenhair.vercel.app/",
        image: "/work/missgoldenhair.webp"
    },
    {
        slug: "ellscafe",
        title: "Ells Cafe",
        category: "Food & Beverage",
        year: "2023",
        desc: "Digital storefront for a trendy local cafe.",
        challenge: "Capturing the cozy, inviting atmosphere of the physical cafe in a digital format.",
        solution: "Used warm photography and typography to create a welcoming vibe, integrated with a digital menu system.",
        results: [
            "Digital Menu Integration",
            "Local SEO Dominance",
            "Instagram Integration"
        ],
        techStack: ["WordPress", "PHP", "MySQL"],
        liveUrl: "https://bosta.com.my/ellscafe/",
        image: "/work/ellscafe.webp"
    },
    {
        slug: "bukupanduansihat",
        title: "Buku Panduan Sihat",
        category: "Digital Education",
        year: "2023",
        desc: "Sales page for a comprehensive digital health guide.",
        challenge: "Selling a digital product requires building high trust and clearly demonstrating value upfront.",
        solution: "Constructed a long-form sales letter style page with persuasive copywriting and clear value-stacking visuals.",
        results: [
            "Automated Digital Delivery",
            "High Trust Signals",
            "Payment Gateway Integration"
        ],
        techStack: ["HTML5", "Tailwind CSS", "ToyyibPay"],
        liveUrl: "https://bosta.com.my/bukupanduansihat/",
        image: "/work/bukupanduansihat.webp"
    },
    {
        slug: "modul-formula-turun-10kg",
        title: "Modul Formula Turun 10KG",
        category: "Fitness Program",
        year: "2023",
        desc: "Membership and sales portal for a weight loss program.",
        challenge: "Managing user access and content delivery for a paid course.",
        solution: "Built a secure membership area with drip-feed content capability and progress tracking.",
        results: [
            "Secure Member Area",
            "Recurring Revenue Model",
            "Community Features"
        ],
        techStack: ["WordPress", "LearnDash", "Billplz"],
        liveUrl: "https://bosta.com.my/formula-turun-10kg/",
        image: "/work/formulaturun10kg.webp"
    },
    {
        slug: "rawat-hormon",
        title: "Rawat Hormon",
        category: "Live Events",
        year: "2024",
        desc: "Registration and ticketing platform for health webinars.",
        challenge: "Handling traffic spikes during launch and ensuring smooth ticketing process.",
        solution: "Deployed a scalable landing page with an integrated countdown timer and scarcity mechanisms.",
        results: [
            "Scalable Infrastructure",
            "Automated Email Sequences",
            "QR Ticket Generation"
        ],
        techStack: ["Next.js", "Serverless Functions", "SendGrid"],
        liveUrl: "https://bosta.com.my/RawatHormon/",
        image: "/work/rawathotmon.webp"
    }
];

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} - Case Study`,
        description: project.desc,
        openGraph: {
            title: `${project.title} | JomBina Work`,
            description: project.desc,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <FadeIn>
                <header className="pt-32 pb-20 px-6 md:px-12 bg-zinc-50 border-b border-zinc-200">
                    <div className="max-w-[1400px] mx-auto">
                        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-950 transition-colors mb-12">
                            <ArrowLeft className="w-4 h-4" /> Back to Work
                        </Link>

                        <div className="max-w-4xl">
                            <span className="block text-orange-600 font-mono text-sm uppercase tracking-widest mb-4">{project.category} — {project.year}</span>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-950 mb-8">{project.title}</h1>
                            <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                </header>
            </FadeIn>

            <article className="px-6 md:px-12 py-24">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* Hero Image */}
                        <FadeIn delay={0.2}>
                            <div className="aspect-[16/9] bg-zinc-100 w-full overflow-hidden relative border border-zinc-200">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">The Challenge</h3>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-6">The Solution</h3>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="p-12 bg-zinc-950 text-white">
                                <h3 className="text-2xl font-bold tracking-tight mb-8">Key Results</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {project.results.map((result, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                            <span className="text-lg font-medium">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <FadeIn delay={0.5}>
                            <div className="p-8 border border-zinc-200 bg-zinc-50">
                                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-zinc-200 text-xs font-medium text-zinc-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-orange-600 text-white font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors"
                            >
                                Visit Live Site <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </FadeIn>
                    </aside>

                </div>
            </article>
        </main>
    );
}

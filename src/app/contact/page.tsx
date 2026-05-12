"use client";

import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* Header */}
                <FadeIn>
                    <div className="mb-24 max-w-4xl">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">Contact Us</p>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-950 mb-8 leading-[0.9]">
                            Let's Build the<br />
                            <span className="text-zinc-300">Next Big Thing.</span>
                        </h1>
                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
                            Ready to turn your vision into digital reality? Schedule a free consultation with our team.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left Column: Info */}
                    <div className="space-y-16">
                        <FadeIn delay={0.2}>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-zinc-50 border border-zinc-100 group-hover:border-orange-600 transition-colors">
                                        <Mail className="w-6 h-6 text-zinc-950" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Official Email</p>
                                        <a href="mailto:hello@jombina.com" className="text-2xl font-medium text-zinc-950 hover:text-orange-600 transition-colors tracking-tight">
                                            hello@jombina.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-zinc-50 border border-zinc-100 group-hover:border-orange-600 transition-colors">
                                        <Phone className="w-6 h-6 text-zinc-950" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Phone / WhatsApp</p>
                                        <p className="text-2xl font-medium text-zinc-950 tracking-tight">
                                            +60 12-345 6789
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-zinc-50 border border-zinc-100 group-hover:border-orange-600 transition-colors">
                                        <MapPin className="w-6 h-6 text-zinc-950" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Headquarters</p>
                                        <p className="text-xl text-zinc-950 leading-relaxed max-w-xs">
                                            Kuala Lumpur, Malaysia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="p-8 bg-zinc-50 border border-zinc-100">
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">Need Technical Support?</h3>
                                <p className="text-zinc-500 mb-6 text-sm">Existing clients can reach our hotline directly.</p>
                                <Link href="mailto:support@jombina.com" className="text-zinc-950 font-bold border-b-2 border-orange-600 hover:text-orange-600 transition-colors pb-1">
                                    Contact Support Team &rarr;
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white">
                        <FadeIn delay={0.4}>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">First Name</label>
                                        <input type="text" className="w-full pb-4 border-b border-zinc-200 focus:border-orange-600 outline-none transition-colors bg-transparent text-xl text-zinc-950 placeholder-zinc-300" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Last Name</label>
                                        <input type="text" className="w-full pb-4 border-b border-zinc-200 focus:border-orange-600 outline-none transition-colors bg-transparent text-xl text-zinc-950 placeholder-zinc-300" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Work Email</label>
                                    <input type="email" className="w-full pb-4 border-b border-zinc-200 focus:border-orange-600 outline-none transition-colors bg-transparent text-xl text-zinc-950 placeholder-zinc-300" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Project Type</label>
                                    <select className="w-full pb-4 border-b border-zinc-200 focus:border-orange-600 outline-none transition-colors bg-transparent text-xl text-zinc-950">
                                        <option>Corporate Website</option>
                                        <option>E-Commerce</option>
                                        <option>Web System (SaaS)</option>
                                        <option>Landing Page</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Message</label>
                                    <textarea rows={4} className="w-full pb-4 border-b border-zinc-200 focus:border-orange-600 outline-none transition-colors bg-transparent text-xl text-zinc-950 placeholder-zinc-300 resize-none" placeholder="Tell us a bit about your project goals..." />
                                </div>

                                <div className="pt-8">
                                    <button type="submit" className="w-full py-6 bg-zinc-950 text-white font-bold tracking-widest uppercase hover:bg-orange-600 transition-colors flex items-center justify-center gap-4 text-sm">
                                        Send Message <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <p className="text-center text-xs text-zinc-400 mt-6">
                                        We typically respond within 24 business hours.
                                    </p>
                                </div>
                            </form>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </div>
    );
}

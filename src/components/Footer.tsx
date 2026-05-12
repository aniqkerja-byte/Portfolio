"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white pt-32 pb-12 px-6 md:px-12 border-t border-zinc-900">
            <div className="max-w-[1400px] mx-auto">

                {/* Top Section: CTA & Big Text */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-12">
                            jombina<span className="text-orange-600">.</span>
                        </h2>
                        <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-lg">
                            Strategic design consultancy for the digital age. We help ambitious brands define their future through precision engineering.
                        </p>
                    </div>

                    <div className="mt-12 md:mt-0">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 text-2xl md:text-4xl font-semibold tracking-tighter hover:text-orange-600 transition-colors"
                        >
                            <span>Start a Project</span>
                            <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-zinc-800 mb-16" />

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">

                    <div>
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Sitemap</h4>
                        <ul className="space-y-4 text-sm font-medium text-zinc-300">
                            <li><Link href="/#work" className="hover:text-white transition-colors">Selected Work</Link></li>
                            <li><Link href="/#expertise" className="hover:text-white transition-colors">Expertise</Link></li>
                            <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Socials</h4>
                        <ul className="space-y-4 text-sm font-medium text-zinc-300">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Threads</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Legal</h4>
                        <ul className="space-y-4 text-sm font-medium text-zinc-300">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Office</h4>
                        <address className="not-italic text-sm text-zinc-300 leading-relaxed space-y-2">
                            <p>Level 23, Menara 3 Petronas</p>
                            <p>Persiaran KLCC</p>
                            <p>50088 Kuala Lumpur</p>
                        </address>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} JomBina International. All Rights Reserved.</p>
                    <p className="mt-4 md:mt-0">Designed in Malaysia</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

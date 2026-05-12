"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-zinc-100">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">

                {/* Logo - Text Only, Bold, Tight */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-950 z-50 relative">
                    JomBina<span className="text-orange-600">.</span>
                </Link>

                {/* Desktop Navigation - Small, spaced out, uppercase */}
                <div className="hidden md:flex items-center gap-12">
                    {[
                        { name: "Work", href: "#work" },
                        { name: "Services", href: "#expertise" },
                        { name: "About", href: "#about" },
                        { name: "Pricing", href: "#pricing" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={isHome ? item.href : `/${item.href}`}
                            className="text-xs font-medium text-zinc-500 uppercase tracking-widest hover:text-orange-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* CTA - Text Link, no button box */}
                <div className="hidden md:block">
                    <Link
                        href={isHome ? "#contact" : "/#contact"}
                        className="text-sm font-semibold text-zinc-950 hover:text-orange-600 transition-colors flex items-center gap-2"
                    >
                        Start a Project &rarr;
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-950 z-50 relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
                </button>
            </div>

            {/* Full Screen Mobile Menu - International Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-40 flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            {[
                                { name: "Selected Work", href: "#work" },
                                { name: "Expertise", href: "#expertise" },
                                { name: "About Me", href: "#about" },
                                { name: "Pricing", href: "#pricing" },
                                { name: "Contact", href: "#contact" }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={isHome ? item.href : `/${item.href}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-bold tracking-tighter text-zinc-950 hover:text-orange-600 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

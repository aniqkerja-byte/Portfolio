"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo, whatsappUrl } from "@/constants/data";

const navItems = [
  { name: "Selected Work", href: "#work" },
  { name: "Expertise", href: "#expertise" },
  { name: "About Me", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolveHref = (href: string) => (isHome ? href : `/${href}`);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative text-xl font-bold tracking-tighter text-zinc-950"
          >
            JomBina<span className="text-orange-600">.</span>
          </Link>

          <div className="hidden items-center gap-12 md:flex">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={resolveHref(item.href)}
                className="text-xs font-medium tracking-widest text-zinc-500 uppercase transition-colors hover:text-orange-600"
              >
                {item.name === "Selected Work" ? "Work" : item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href={resolveHref("#contact")}
              className="flex items-center gap-2 text-sm font-semibold text-zinc-950 transition-colors hover:text-orange-600"
            >
              Start a Project &rarr;
            </Link>
          </div>

          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative -mr-2 flex h-11 w-11 items-center justify-center text-zinc-950 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {isOpen ? (
                  <X strokeWidth={1.5} className="h-6 w-6" />
                ) : (
                  <Menu strokeWidth={1.5} className="h-6 w-6" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-[100dvh] w-full flex-col">
              <div className="h-20 flex-shrink-0 border-b border-zinc-100/60" />

              <motion.nav
                className="flex flex-1 flex-col items-stretch justify-center px-8"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
                  },
                  closed: {},
                }}
              >
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 16 },
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-zinc-100 last:border-b-0"
                  >
                    <Link
                      href={resolveHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-5 font-bold tracking-tighter text-zinc-950 transition-colors active:text-orange-600"
                      style={{
                        fontSize: "clamp(1.75rem, 7vw, 2.25rem)",
                        lineHeight: 1.1,
                      }}
                    >
                      <span>{item.name}</span>
                      <span
                        className="pt-2 font-mono text-xs tracking-widest text-zinc-300 tabular-nums"
                        aria-hidden
                      >
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35, ease: "easeOut" }}
                className="flex-shrink-0 border-t border-zinc-100 px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
              >
                <Link
                  href={resolveHref("#contact")}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 py-4 text-sm font-semibold tracking-wide text-white transition-all active:scale-[0.98] active:bg-orange-600"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <div className="mt-5 flex items-center justify-between text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="py-2 transition-colors hover:text-zinc-950"
                  >
                    Email
                  </a>
                  <span className="mx-4 h-px flex-1 bg-zinc-200" aria-hidden />
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 transition-colors hover:text-zinc-950"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

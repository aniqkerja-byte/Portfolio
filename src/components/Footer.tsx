"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 px-6 pt-32 pb-12 text-white md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Top Section: CTA & Big Text */}
        <div className="mb-32 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-12 text-6xl leading-[0.8] font-bold tracking-tighter md:text-9xl">
              jombina<span className="text-orange-600">.</span>
            </h2>
            <p className="max-w-lg text-xl leading-relaxed font-light text-zinc-400">
              Kami bantu owner bisnes bina website, landing page dan sistem web yang nampak
              profesional, mudah difahami pelanggan, dan senang diurus selepas siap.
            </p>
          </div>

          <div className="mt-12 md:mt-0">
            <Link
              href="/contact"
              className="group flex items-center gap-4 text-2xl font-semibold tracking-tighter transition-colors hover:text-orange-600 md:text-4xl"
            >
              <span>Tanya Projek</span>
              <ArrowUpRight className="h-8 w-8 transition-transform duration-300 group-hover:rotate-45 md:h-12 md:w-12" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16 h-[1px] w-full bg-zinc-800" />

        {/* Links Grid */}
        <div className="mb-24 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div>
            <h4 className="mb-8 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Sitemap
            </h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-300">
              <li>
                <Link href="/#work" className="transition-colors hover:text-white">
                  Projek
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="transition-colors hover:text-white">
                  Servis
                </Link>
              </li>
              <li>
                <Link href="/#about" className="transition-colors hover:text-white">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="transition-colors hover:text-white">
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Media Sosial
            </h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-300">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Threads
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Polisi & Terma
            </h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-300">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-white">
                  Dasar Privasi
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terma & Syarat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-mono text-xs tracking-widest text-zinc-500 uppercase">
              Kawasan Servis
            </h4>
            <address className="space-y-2 text-sm leading-relaxed text-zinc-300 not-italic">
              <p>Remote dari Malaysia</p>
              <p>Terima projek seluruh Malaysia</p>
              <p>dan juga luar negara</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between font-mono text-xs tracking-wider text-zinc-600 uppercase md:flex-row">
          <p>&copy; {new Date().getFullYear()} JomBina International. Hak Cipta Terpelihara.</p>
          <p className="mt-4 md:mt-0">Dibina di Malaysia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

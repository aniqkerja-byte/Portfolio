"use client";

import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Header */}
        <FadeIn>
          <div className="mb-24 max-w-4xl">
            <p className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
              Contact Us
            </p>
            <h1 className="mb-8 text-5xl leading-[0.9] font-semibold tracking-tighter text-zinc-950 md:text-7xl">
              Let&apos;s Build the
              <br />
              <span className="text-zinc-300">Next Big Thing.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-500">
              Ready to turn your vision into digital reality? Schedule a free consultation with our
              team.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Left Column: Info */}
          <div className="space-y-16">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-orange-600">
                    <Mail className="h-6 w-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      Official Email
                    </p>
                    <a
                      href="mailto:hello@jombina.com"
                      className="text-2xl font-medium tracking-tight text-zinc-950 transition-colors hover:text-orange-600"
                    >
                      hello@jombina.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-orange-600">
                    <Phone className="h-6 w-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      Phone / WhatsApp
                    </p>
                    <p className="text-2xl font-medium tracking-tight text-zinc-950">
                      +60 12-345 6789
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-orange-600">
                    <MapPin className="h-6 w-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      Based In
                    </p>
                    <p className="max-w-xs text-xl leading-relaxed text-zinc-950">
                      Remote-First — Kuala Lumpur, Malaysia.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border border-zinc-100 bg-zinc-50 p-8">
                <h3 className="mb-2 text-lg font-bold text-zinc-950">Need Technical Support?</h3>
                <p className="mb-6 text-sm text-zinc-500">
                  Existing clients can reach our hotline directly.
                </p>
                <Link
                  href="mailto:support@jombina.com"
                  className="border-b-2 border-orange-600 pb-1 font-bold text-zinc-950 transition-colors hover:text-orange-600"
                >
                  Contact Support Team &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white">
            <FadeIn delay={0.4}>
              <form className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Project Type
                  </label>
                  <select className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 transition-colors outline-none focus:border-orange-600">
                    <option>Corporate Website</option>
                    <option>E-Commerce</option>
                    <option>Web System (SaaS)</option>
                    <option>Landing Page</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600"
                    placeholder="Tell us a bit about your project goals..."
                  />
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-4 bg-zinc-950 py-6 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-600"
                  >
                    Send Message <ArrowRight className="h-5 w-5" />
                  </button>
                  <p className="mt-6 text-center text-xs text-zinc-400">
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

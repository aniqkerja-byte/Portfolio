"use client";

import { useActionState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { sendContactEmail, type ContactState } from "./actions";

const INITIAL_STATE: ContactState = { status: "idle", message: "" };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, INITIAL_STATE);

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
                      href="mailto:jombina.site@gmail.com"
                      className="text-2xl font-medium tracking-tight text-zinc-950 transition-colors hover:text-orange-600"
                    >
                      jombina.site@gmail.com
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
                    <a
                      href="tel:+60123456789"
                      className="text-2xl font-medium tracking-tight text-zinc-950 transition-colors hover:text-orange-600"
                    >
                      +60 12-345 6789
                    </a>
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
          </div>

          {/* Right Column: Form */}
          <div className="bg-white">
            <FadeIn delay={0.4}>
              {state.status === "success" ? (
                <div
                  role="status"
                  className="flex flex-col items-start gap-4 border border-zinc-200 bg-zinc-50 p-8"
                >
                  <CheckCircle2 className="h-8 w-8 text-orange-600" />
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-950">Message sent.</h3>
                  <p className="text-zinc-600">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        disabled={isPending}
                        className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                        placeholder="John"
                      />
                      {state.fieldErrors?.firstName && (
                        <p className="text-xs text-red-600">{state.fieldErrors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        disabled={isPending}
                        className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                        placeholder="Doe"
                      />
                      {state.fieldErrors?.lastName && (
                        <p className="text-xs text-red-600">{state.fieldErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                    >
                      Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isPending}
                      className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                      placeholder="john@company.com"
                    />
                    {state.fieldErrors?.email && (
                      <p className="text-xs text-red-600">{state.fieldErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue="Corporate Website"
                      disabled={isPending}
                      className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                    >
                      <option>Corporate Website</option>
                      <option>E-Commerce</option>
                      <option>Web System (SaaS)</option>
                      <option>Landing Page</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isPending}
                      className="w-full resize-none border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                      placeholder="Tell us a bit about your project goals..."
                    />
                    {state.fieldErrors?.message && (
                      <p className="text-xs text-red-600">{state.fieldErrors.message}</p>
                    )}
                  </div>

                  {state.status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="flex w-full items-center justify-center gap-4 bg-zinc-950 py-6 text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                      {!isPending && <ArrowRight className="h-5 w-5" />}
                    </button>
                    <p className="mt-6 text-center text-xs text-zinc-400">
                      We typically respond within 24 business hours.
                    </p>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

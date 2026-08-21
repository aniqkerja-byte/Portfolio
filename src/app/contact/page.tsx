"use client";

import { useActionState } from "react";
import { Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { sendContactEmail, type ContactState } from "./actions";
import { contactInfo, whatsappUrl } from "@/constants/data";

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
              Let Us Talk About Your Project
            </p>
            <h1 className="mb-8 text-5xl leading-[0.9] font-semibold tracking-tighter text-zinc-950 md:text-7xl">
              Tell Us A Bit
              <br />
              <span className="text-zinc-300">About Your Website.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-zinc-500">
              No need for a perfect brief. Just tell us what your business does, the kind of website
              you want, and a rough budget if you have one.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Left Column: Info */}
          <div className="space-y-16">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <a href={`mailto:${contactInfo.email}`} className="group flex items-start gap-6">
                  <div className="border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-orange-600">
                    <Mail className="h-6 w-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      Email
                    </p>
                    <span className="text-2xl font-medium tracking-tight text-zinc-950 transition-colors group-hover:text-orange-600">
                      {contactInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-6"
                >
                  <div className="border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-orange-600">
                    <MessageCircle className="h-6 w-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      WhatsApp
                    </p>
                    <span className="text-2xl font-medium tracking-tight text-zinc-950 transition-colors group-hover:text-orange-600">
                      {contactInfo.phoneDisplay}
                    </span>
                    <p className="mt-1 text-xs text-zinc-400">The fastest way to get a quote</p>
                  </div>
                </a>

                <div className="group flex items-start gap-6">
                  <div className="border border-zinc-100 bg-zinc-50 p-4 transition-colors group-hover:border-orange-600">
                    <MapPin className="h-6 w-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                      Location
                    </p>
                    <p className="max-w-xs text-xl leading-relaxed text-zinc-950">
                      Remote from Malaysia. Working with clients across Malaysia and abroad.
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
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="companyWebsite">Company website</label>
                    <input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                      >
                        Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        disabled={isPending}
                        aria-invalid={Boolean(state.fieldErrors?.firstName)}
                        aria-describedby={
                          state.fieldErrors?.firstName ? "firstName-error" : undefined
                        }
                        className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                        placeholder="Alex"
                      />
                      {state.fieldErrors?.firstName && (
                        <p id="firstName-error" className="text-xs text-red-600">
                          {state.fieldErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                      >
                        Company / Brand Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        disabled={isPending}
                        aria-invalid={Boolean(state.fieldErrors?.lastName)}
                        aria-describedby={
                          state.fieldErrors?.lastName ? "lastName-error" : undefined
                        }
                        className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                        placeholder="ABC Company"
                      />
                      {state.fieldErrors?.lastName && (
                        <p id="lastName-error" className="text-xs text-red-600">
                          {state.fieldErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isPending}
                      aria-invalid={Boolean(state.fieldErrors?.email)}
                      aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
                      className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                      placeholder="alex@company.com"
                    />
                    {state.fieldErrors?.email && (
                      <p id="email-error" className="text-xs text-red-600">
                        {state.fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                    >
                      What Do You Need?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue="Corporate Website"
                      disabled={isPending}
                      className="w-full border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                    >
                      <option value="Corporate Website">Business / company website</option>
                      <option value="E-Commerce">Online store</option>
                      <option value="Web System (SaaS)">Custom web system</option>
                      <option value="Landing Page">Sales landing page</option>
                      <option value="Other">Not sure yet</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold tracking-widest text-zinc-500 uppercase"
                    >
                      Brief Project Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={isPending}
                      aria-invalid={Boolean(state.fieldErrors?.message)}
                      aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
                      className="w-full resize-none border-b border-zinc-200 bg-transparent pb-4 text-xl text-zinc-950 placeholder-zinc-300 transition-colors outline-none focus:border-orange-600 disabled:opacity-50"
                      placeholder="Example: I run a renovation service and want a website that looks more professional..."
                    />
                    {state.fieldErrors?.message && (
                      <p id="message-error" className="text-xs text-red-600">
                        {state.fieldErrors.message}
                      </p>
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
                      {isPending ? "Sending..." : "Send Inquiry"}
                      {!isPending && <ArrowRight className="h-5 w-5" />}
                    </button>
                    <p className="mt-6 text-center text-xs text-zinc-400">
                      We usually reply within 24 business hours.
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

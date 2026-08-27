import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { projectsData, servicesData } from "@/constants/data";

const Process = dynamic(() => import("@/components/Process"));
const CTA = dynamic(() => import("@/components/CTA"));

export const metadata: Metadata = {
  // No "| JomBina" — layout.tsx applies the "%s | JomBina Digital" template.
  title: "Services — Websites, Online Stores & Web Systems",
  description:
    "Business websites, landing pages, online stores with payments, and custom web systems. Each service shown with real projects we have built and shipped.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | JomBina",
    description:
      "Business websites, online stores and custom web systems — each backed by real work, not stock promises.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="relative border-b border-zinc-200 bg-zinc-50 pt-28 pb-16 md:px-12 md:pt-40 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <FadeIn>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-950 md:mb-12"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="max-w-4xl">
              <p className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                What We Do
              </p>
              <h1 className="mb-8 text-5xl leading-[0.9] font-semibold tracking-tighter text-zinc-950 md:text-7xl lg:text-8xl">
                SERVICES
                <span className="text-orange-600">.</span>
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 md:text-2xl">
                From a single landing page to a system built around how your business actually runs.
                Every service below is shown with work we have already shipped.
              </p>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* One block per service */}
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          {servicesData.map((service, index) => {
            // Real portfolio work for this service — no invented case studies.
            const examples = projectsData
              .filter((project) => service.projectCategories.includes(project.category))
              .slice(0, 3);

            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 border-b border-zinc-200 py-20 md:py-28"
              >
                <FadeIn>
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                      <span className="mb-6 block font-mono text-xs tracking-widest text-zinc-400">
                        0{index + 1}
                      </span>
                      <h2 className="mb-6 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-5xl">
                        {service.title}
                      </h2>
                      <p className="mb-8 text-lg leading-relaxed text-zinc-600">{service.desc}</p>

                      <div className="mb-8 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-mono text-xs text-zinc-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-950 uppercase transition-colors hover:text-orange-600"
                      >
                        Ask About This
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <div className="lg:col-span-7">
                      {examples.length > 0 ? (
                        <>
                          <p className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                            Work We Have Shipped
                          </p>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            {examples.map((project) => (
                              <Link
                                key={project.slug}
                                href={`/work/${project.slug}`}
                                className="group block border border-zinc-200 bg-white p-3 transition-colors hover:border-orange-600"
                              >
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 240px"
                                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                                  />
                                </div>
                                <p className="mt-3 truncate text-sm font-semibold tracking-tight text-zinc-950">
                                  {project.title}
                                </p>
                                <p className="mt-1 font-mono text-xs text-zinc-400">
                                  {project.year}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        // Support work is bundled into every project rather than
                        // sold on its own, so there is no portfolio to show.
                        <div className="flex h-full flex-col justify-center border border-zinc-200 bg-zinc-50 p-8 md:p-12">
                          <p className="text-lg leading-relaxed text-zinc-600">
                            This one comes bundled with every project we take on rather than as a
                            standalone job — the domain, hosting, email and analytics are set up and
                            handed over as part of the build.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              </section>
            );
          })}
        </div>
      </div>

      {/* Cross-link to pricing */}
      <section className="border-b border-zinc-200 bg-zinc-50 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-5xl">
              Wondering what it costs?
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              Packages start at RM199 for a landing page. Everything is listed openly, with no
              quote-only pricing.
            </p>
          </div>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-3 bg-zinc-950 px-10 py-5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-600"
          >
            See Packages
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </section>

      <Process />
      <CTA />
    </main>
  );
}

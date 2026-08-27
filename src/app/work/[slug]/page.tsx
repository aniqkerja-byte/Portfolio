import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/constants/data";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    // layout.tsx applies the "%s | JomBina Digital" template — no suffix here.
    title: `${project.title} - Case Study`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Case Study by JomBina`,
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
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const formattedIndex = String(currentIndex + 1).padStart(2, "0");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="relative border-b border-zinc-200 bg-zinc-50 pt-28 pb-16 md:px-12 md:pt-40 md:pb-28">
        {/* Subtle architectural grid */}
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
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-950 md:mb-12"
            >
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>

            <div className="flex flex-col">
              <div className="max-w-5xl">
                <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs tracking-widest uppercase">
                  <span className="text-zinc-400">{formattedIndex}</span>
                  <span className="text-zinc-300">/</span>
                  <span className="font-semibold text-orange-600">{project.category}</span>
                  <span className="text-zinc-300">/</span>
                  <span className="text-zinc-400">{project.year}</span>
                </div>

                <h1 className="text-5xl leading-[0.9] font-semibold tracking-tighter text-zinc-950 md:text-7xl lg:text-8xl">
                  {project.title}
                  <span className="text-orange-600">.</span>
                </h1>
              </div>

              {/* Lead paragraph — sits under the title on desktop, under the showcase on mobile */}
              <p className="order-3 mt-8 max-w-3xl text-xl leading-relaxed text-zinc-600 md:order-none md:text-2xl">
                {project.desc}
              </p>

              {/* Showcase — pulled above the copy on mobile so the work is visible without scrolling */}
              <div className="order-2 mt-8 w-full max-w-5xl md:order-none md:mx-auto md:mt-12">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Quick Metadata Bar */}
              <div className="order-4 mt-12 grid grid-cols-2 gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-4 md:order-none md:mt-16">
                <div>
                  <span className="font-mono text-xs text-zinc-400 uppercase">Category</span>
                  <p className="mt-1 text-sm font-semibold text-zinc-950">{project.category}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-zinc-400 uppercase">Year</span>
                  <p className="mt-1 text-sm font-semibold text-zinc-950">{project.year}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-zinc-400 uppercase">Primary Stack</span>
                  <p className="mt-1 text-sm font-semibold text-zinc-950">
                    {project.techStack.slice(0, 2).join(", ")}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-zinc-400 uppercase">Live Preview</span>
                  <p className="mt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                    >
                      <span>Visit Site</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Main Content Article */}
      <article className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Main Column */}
          <div className="space-y-20 lg:col-span-8">
            {/* Problem & Solution Grid */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                <div>
                  <span className="mb-4 block font-mono text-xs tracking-widest text-zinc-400 uppercase">
                    01 / The Challenge
                  </span>
                  <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
                    The Problem To Solve
                  </h2>
                  <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <span className="mb-4 block font-mono text-xs tracking-widest text-zinc-400 uppercase">
                    02 / The Approach
                  </span>
                  <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
                    What We Built
                  </h2>
                  <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                    {project.solution}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Key Results / Outcomes Banner */}
            <FadeIn delay={0.2}>
              <div className="border border-zinc-900 bg-zinc-950 p-8 text-white md:p-14">
                <span className="mb-4 block font-mono text-xs tracking-widest text-orange-500 uppercase">
                  03 / Key Outcomes
                </span>
                <h3 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  What Changed For The Business
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {project.results.map((result, i) => (
                    <div key={i} className="border-t border-zinc-800 pt-6">
                      <span className="font-mono text-xs text-zinc-500">Result 0{i + 1}</span>
                      <p className="mt-2 text-lg font-semibold text-white">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar — order-first on mobile so the CTAs land right after the
              header instead of below the whole article. */}
          <aside className="order-first space-y-12 lg:order-none lg:col-span-4">
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                {/* Primary Action Links — first in the sidebar so they sit at
                    the top of the column on desktop too. */}
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 bg-zinc-950 py-5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-600"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-3 border border-zinc-200 bg-white py-5 text-xs font-bold tracking-widest text-zinc-950 uppercase transition-colors hover:border-zinc-950"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Tech Stack Specs Box */}
                <div className="border border-zinc-200 bg-zinc-50 p-8">
                  <h3 className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guarantee / Trust snippet */}
                <div className="border-t border-zinc-100 pt-6">
                  <p className="font-mono text-xs leading-relaxed text-zinc-400 uppercase">
                    Built by JomBina with performance, mobile responsiveness, and high conversion in
                    mind.
                  </p>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </article>

      {/* Next / Previous Project Pagination Bar */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Previous */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group border border-zinc-200 bg-white p-8 transition-colors hover:border-orange-600"
            >
              <span className="mb-2 flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Project
              </span>
              <p className="text-2xl font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-orange-600 md:text-3xl">
                {prevProject.title}
              </p>
              <span className="mt-2 block font-mono text-xs text-zinc-400">
                {prevProject.category}
              </span>
            </Link>

            {/* Next */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group border border-zinc-200 bg-white p-8 text-left transition-colors hover:border-orange-600 md:text-right"
            >
              <span className="mb-2 flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-400 uppercase md:justify-end">
                Next Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <p className="text-2xl font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-orange-600 md:text-3xl">
                {nextProject.title}
              </p>
              <span className="mt-2 block font-mono text-xs text-zinc-400">
                {nextProject.category}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Matching Bottom CTA Section */}
      <section className="border-t border-zinc-200 bg-white px-6 py-32 text-zinc-950 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <h2 className="mb-8 text-5xl leading-[0.9] font-semibold tracking-tighter md:text-7xl lg:text-8xl">
                WANT A WEBSITE <br />
                LIKE THIS?
              </h2>
            </FadeIn>
          </div>
          <div className="pb-4">
            <FadeIn delay={0.2}>
              <p className="mb-12 max-w-md text-lg leading-relaxed text-zinc-500 md:text-xl">
                Tell us about your business goals. We will suggest the website, landing page or
                system that best fits your budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center bg-orange-600 px-12 py-6 font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-700 md:w-auto"
              >
                Start A Project
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}

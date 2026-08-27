"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ArrowLeft, X } from "lucide-react";
import { projectsData, type Project } from "@/constants/data";
import { FadeIn } from "@/components/FadeIn";

const categories = [
  { id: "all", label: "All" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "landing", label: "Landing Pages" },
  { id: "websystem", label: "Web Systems" },
  { id: "corporate", label: "Corporate & Services" },
];

const projectCategoryMap: Record<string, string> = {
  // E-Commerce
  "kowa-gaming-studio": "ecommerce",
  "house-of-misses": "ecommerce",
  bosta: "ecommerce",
  "fyebeauty-ecommerce": "ecommerce",

  // Landing Pages
  probiozen: "landing",
  bukupanduansihat: "landing",
  "rawat-hormon": "landing",
  "modul-formula-turun-10kg": "landing",
  missgoldenhair: "landing",

  // Web Systems
  cekdoku: "websystem",
  "glow-mask-explorer": "websystem",
  jomenvois: "websystem",
  "perodua-budget-checker": "websystem",

  // Corporate / Business / Services
  "fatimah-khairunisa-aia": "corporate",
  ellscafe: "corporate",
  "famyytech-mobile": "corporate",
};

function matchesCategory(project: Project, categoryId: string): boolean {
  if (categoryId === "all") return true;
  return projectCategoryMap[project.slug] === categoryId;
}

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCat = matchesCategory(project, selectedCategory);
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = project.title.toLowerCase().includes(q);
      const inCategory = project.category.toLowerCase().includes(q);
      const inDesc = project.desc.toLowerCase().includes(q);
      const inTech = project.techStack.some((t) => t.toLowerCase().includes(q));
      const inResults = project.results.some((r) => r.toLowerCase().includes(q));

      return inTitle || inCategory || inDesc || inTech || inResults;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="relative border-b border-zinc-200 bg-zinc-50 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28">
        {/* Architectural grid background */}
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
              className="mb-12 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase transition-colors hover:text-zinc-950"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="max-w-4xl">
              <p className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                Selected Works · 2023 — 2025
              </p>

              <h1 className="mb-8 text-6xl leading-[0.9] font-semibold tracking-tighter text-zinc-950 md:text-8xl lg:text-9xl">
                ALL <br />
                <span className="text-zinc-300">PROJECTS.</span>
              </h1>
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-zinc-200 pt-8 md:flex-row md:items-end">
              <p className="max-w-xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                A complete archive of websites, e-commerce stores, landing pages, and web systems
                built for fast-growing businesses.
              </p>

              <div className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
                Archive /{" "}
                <span className="font-bold text-zinc-950">{projectsData.length} Projects</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Filter & Search Bar */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 px-6 py-6 md:flex-row md:items-center md:px-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors ${
                    isActive
                      ? "bg-zinc-950 font-bold text-white"
                      : "border border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-950 hover:text-zinc-950"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, tech..."
              className="w-full border-b border-zinc-200 bg-transparent py-2.5 pr-8 text-sm text-zinc-950 placeholder-zinc-400 transition-colors outline-none focus:border-orange-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-0 -translate-y-1/2 text-zinc-400 hover:text-zinc-950"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="bg-white px-4 py-12 sm:px-6 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          {/* Active filter count banner */}
          <div className="mb-8 flex items-center justify-between border-b border-zinc-100 pb-4 sm:mb-12">
            <span className="font-mono text-xs text-zinc-400 uppercase">
              Showing {filteredProjects.length} of {projectsData.length} items
            </span>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="cursor-pointer font-mono text-xs text-orange-600 uppercase hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Grid: 2 columns on mobile, 2 columns on tablet, 3 columns on large screens */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {filteredProjects.map((project, index) => {
                const formattedNumber = String(index + 1).padStart(2, "0");
                return (
                  <FadeIn key={project.slug} delay={index * 0.04}>
                    <div className="group flex h-full flex-col justify-between border border-zinc-200 bg-white p-3 transition-colors duration-300 hover:border-orange-600 sm:p-5">
                      <div>
                        {/* Top Meta Bar */}
                        <div className="mb-2 flex items-center justify-between font-mono text-[10px] sm:mb-4 sm:text-xs">
                          <span className="text-zinc-400">{formattedNumber}</span>
                          <span className="truncate font-semibold text-orange-600 uppercase">
                            {project.category}
                          </span>
                          <span className="hidden text-zinc-400 sm:inline">{project.year}</span>
                        </div>

                        {/* Image Frame */}
                        <Link
                          href={`/work/${project.slug}`}
                          className="relative block aspect-[4/3] w-full overflow-hidden border border-zinc-100 p-2"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                          />
                        </Link>

                        {/* Title & Description */}
                        <div className="pt-3 sm:pt-6">
                          <div className="mb-2 flex items-start justify-between gap-2 sm:mb-3 sm:gap-4">
                            <h2 className="line-clamp-1 text-sm font-bold tracking-tight text-zinc-950 transition-colors group-hover:text-orange-600 sm:line-clamp-none sm:text-xl md:text-2xl">
                              <Link href={`/work/${project.slug}`}>{project.title}</Link>
                            </h2>
                            <Link
                              href={`/work/${project.slug}`}
                              className="hidden text-zinc-300 transition-colors group-hover:text-orange-600 sm:inline"
                              aria-label={`View case study for ${project.title}`}
                            >
                              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>
                          </div>

                          <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-zinc-600 sm:mb-6 sm:text-sm">
                            {project.desc}
                          </p>

                          {/* Tech Stack Chips */}
                          <div className="mb-3 flex flex-wrap gap-1 sm:mb-6 sm:gap-2">
                            {project.techStack.slice(0, 3).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 font-mono text-[9px] text-zinc-600 sm:px-2.5 sm:py-1 sm:text-[11px]"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 3 && (
                              <span className="hidden border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-zinc-400 sm:inline">
                                +{project.techStack.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="flex items-center justify-between border-t border-zinc-100 pt-2.5 sm:pt-4">
                        <Link
                          href={`/work/${project.slug}`}
                          className="group/link flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-zinc-950 uppercase transition-colors hover:text-orange-600 sm:gap-3 sm:text-xs sm:tracking-widest"
                        >
                          <span>Case Study</span>
                          <span className="hidden h-[1px] w-6 bg-zinc-950 transition-all duration-300 group-hover/link:w-10 group-hover/link:bg-orange-600 sm:inline" />
                          <ArrowRight className="h-3 w-3 sm:hidden" />
                        </Link>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 transition-colors hover:text-zinc-950 sm:text-xs"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            <div className="border border-zinc-200 bg-zinc-50 p-16 text-center">
              <p className="text-xl font-bold tracking-tight text-zinc-950">No projects found</p>
              <p className="mt-2 text-sm text-zinc-500">
                No items match your active search or category criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 bg-zinc-950 px-8 py-4 font-mono text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-600"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Matching Bottom CTA Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-32 text-zinc-950 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <h2 className="mb-8 text-5xl leading-[0.9] font-semibold tracking-tighter md:text-7xl lg:text-8xl">
                HAVE A PROJECT <br />
                IN MIND?
              </h2>
            </FadeIn>
          </div>
          <div className="pb-4">
            <FadeIn delay={0.2}>
              <p className="mb-12 max-w-md text-lg leading-relaxed text-zinc-500 md:text-xl">
                Tell us about your business. We will suggest the website, landing page or system
                that best fits your budget and your goals.
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
    </div>
  );
}

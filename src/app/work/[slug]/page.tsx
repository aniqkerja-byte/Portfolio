import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    title: `${project.title} - Case Study`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | JomBina Work`,
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
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <FadeIn>
        <header className="border-b border-zinc-200 bg-zinc-50 px-6 pt-32 pb-20 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <Link
              href="/#work"
              className="mb-12 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-500 uppercase transition-colors hover:text-zinc-950"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Work
            </Link>

            <div className="max-w-4xl">
              <span className="mb-4 block font-mono text-sm tracking-widest text-orange-600 uppercase">
                {project.category} — {project.year}
              </span>
              <h1 className="mb-8 text-5xl font-bold tracking-tighter text-zinc-950 md:text-8xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-zinc-500 md:text-2xl">
                {project.desc}
              </p>
            </div>
          </div>
        </header>
      </FadeIn>

      <article className="px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-24 lg:grid-cols-12">
          {/* Main Content */}
          <div className="space-y-24 lg:col-span-8">
            {/* Hero Image */}
            <FadeIn delay={0.2}>
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-zinc-200 bg-zinc-100">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-2xl font-bold tracking-tight text-zinc-950">
                    The Challenge
                  </h3>
                  <p className="leading-relaxed text-zinc-600">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="mb-6 text-2xl font-bold tracking-tight text-zinc-950">
                    The Solution
                  </h3>
                  <p className="leading-relaxed text-zinc-600">{project.solution}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-zinc-950 p-12 text-white">
                <h3 className="mb-8 text-2xl font-bold tracking-tight">Key Results</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600" />
                      <span className="text-lg font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12 lg:col-span-4">
            <FadeIn delay={0.5}>
              <div className="border border-zinc-200 bg-zinc-50 p-8">
                <h4 className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-orange-600 py-4 font-bold tracking-widest text-white uppercase transition-colors hover:bg-orange-700"
              >
                Visit Live Site <ArrowUpRight className="h-4 w-4" />
              </a>
            </FadeIn>
          </aside>
        </div>
      </article>
    </main>
  );
}

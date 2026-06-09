"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData, type Project } from "@/constants/data";

const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    href={`/work/${project.slug}`}
    className="group/project w-[78vw] flex-none sm:w-[380px] lg:w-[430px]"
    aria-label={`Lihat projek ${project.title}`}
  >
    <div className="border border-zinc-200 bg-white p-3 transition-colors duration-300 group-hover/project:border-orange-600">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 380px, 430px"
          className="object-cover transition-transform duration-700 group-hover/project:scale-105"
        />
      </div>

      <div className="flex items-end justify-between gap-4 px-1 pt-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold tracking-tight text-zinc-950">
            {project.title}
          </h3>
          <p className="mt-1 truncate text-xs text-zinc-500">{project.category}</p>
        </div>
        <span className="font-mono text-xs text-zinc-400">{project.year}</span>
      </div>
    </div>
  </Link>
);

const ProjectShowcase = () => {
  return (
    <div className="relative z-10 mt-16 w-full overflow-hidden md:mt-20">
      <div className="mx-auto mb-6 flex max-w-[1400px] items-center justify-between px-6 md:px-12">
        <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
          Preview Projek Yang Pernah Dibina
        </p>
        <Link
          href="/#work"
          className="hidden items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 uppercase transition-colors hover:text-orange-600 sm:flex"
        >
          Tengok Semua <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div
        className="group/showcase flex overflow-hidden px-6 md:px-12"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-[marquee_20s_linear_infinite] group-hover/showcase:[animation-play-state:paused] motion-reduce:animate-none sm:animate-[marquee_24s_linear_infinite] md:animate-[marquee_28s_linear_infinite] lg:animate-[marquee_38s_linear_infinite]">
          {[0, 1].map((group) => (
            <div key={group} className="flex gap-5 pr-5 md:gap-8 md:pr-8" aria-hidden={group === 1}>
              {projectsData.map((project) => (
                <ProjectCard key={`${group}-${project.slug}`} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;

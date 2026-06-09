"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;
    if (!track || !firstGroup) return;

    let frameId = 0;
    let lastTime = performance.now();
    let offset = 0;

    const durationForViewport = () => {
      if (window.innerWidth >= 1024) return 38;
      if (window.innerWidth >= 768) return 28;
      if (window.innerWidth >= 640) return 24;
      return 20;
    };

    const animate = (time: number) => {
      const distance = firstGroup.offsetWidth;
      if (distance > 0) {
        const elapsed = time - lastTime;
        const pixelsPerSecond = distance / durationForViewport();

        offset = (offset + (pixelsPerSecond * elapsed) / 1000) % distance;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      lastTime = time;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

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

      <div className="project-showcase-viewport flex overflow-hidden px-6 md:px-12">
        <div ref={trackRef} className="project-showcase-track flex w-max">
          {[0, 1].map((group) => (
            <div
              key={group}
              ref={group === 0 ? firstGroupRef : undefined}
              className="flex gap-5 pr-5 md:gap-8 md:pr-8"
              aria-hidden={group === 1}
            >
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

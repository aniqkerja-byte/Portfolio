"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { projectsData } from "@/constants/data";

const Work = () => {
  return (
    <section id="work" className="border-t border-zinc-200 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 flex items-end justify-between">
            <h2 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Selected Work.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
          {projectsData.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.1}>
              <Link href={`/work/${p.slug}`} className="group block cursor-pointer">
                <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden border border-zinc-100 bg-zinc-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                <div className="flex items-baseline justify-between border-b border-zinc-200 pb-4 transition-colors group-hover:border-orange-600">
                  <div>
                    <h3 className="mb-1 text-2xl font-medium tracking-tight text-zinc-950">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{p.category}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">{p.year}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

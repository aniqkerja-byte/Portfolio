"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { servicesData as services } from "@/constants/data";

const Services = () => {
  return (
    <section id="expertise" className="bg-zinc-50 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 flex flex-col items-start justify-between md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Servis Yang Kami Buat.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-500 md:mt-0">
              Dari website simple sampai sistem custom, kami bantu susun ikut bajet dan matlamat
              bisnes anda.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-zinc-200">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group border-b border-zinc-200 py-12 transition-colors hover:bg-white md:py-16">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-baseline md:gap-0">
                  <div className="md:w-1/4">
                    <span className="font-mono text-xs text-zinc-400">0{i + 1}</span>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="mb-4 text-2xl font-medium tracking-tight text-zinc-950 transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                      {s.title}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {s.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4 md:w-1/4 md:justify-end">
                    <p className="max-w-[200px] text-sm leading-relaxed text-zinc-500">{s.desc}</p>
                    <ArrowUpRight className="h-5 w-5 text-zinc-300 transition-colors group-hover:text-orange-600" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

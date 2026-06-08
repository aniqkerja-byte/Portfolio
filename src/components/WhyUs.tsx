"use client";

import { Zap, TrendingUp, LifeBuoy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const WhyUs = () => {
  const reasons = [
    {
      icon: <Zap className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "Proses Tak Leceh",
      desc: "Kami susun proses dari awal sampai launch. Anda beri content asas, kami bantu kemaskan jadi website yang nampak profesional.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "Design Yang Bantu Closing",
      desc: "Website bukan sekadar cantik. Kami susun ayat, bahagian penting dan butang tindakan supaya pelawat mudah faham dan terus hubungi anda.",
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-orange-600" strokeWidth={1.5} />,
      title: "Tak Tinggal Lepas Siap",
      desc: "Lepas website live, kami bantu semak, guide cara guna, dan support perkara teknikal supaya anda boleh fokus pada bisnes.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-zinc-50 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 max-w-2xl">
            <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Kenapa Ramai Owner Bisnes Pilih JomBina.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              Sebab kami bukan sekadar buat website. Kami bantu anda nampak lebih dipercayai, senang
              dihubungi, dan lebih bersedia untuk jual online.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-24">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group">
                <div className="mb-8 inline-block rounded-none border border-zinc-100 bg-white p-4 transition-colors group-hover:border-orange-600">
                  {r.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-950">{r.title}</h3>
                <p className="leading-relaxed text-zinc-500">{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

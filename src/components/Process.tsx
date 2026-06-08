"use client";

import { FadeIn } from "@/components/FadeIn";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Kita Borak Dulu",
      desc: "Kami fahamkan bisnes, target customer, bajet dan apa yang website perlu bantu.",
    },
    {
      number: "02",
      title: "Susun Content & Design",
      desc: "Kami bantu susun flow, ayat penting, layout dan rupa website supaya mudah pelanggan faham.",
    },
    {
      number: "03",
      title: "Bina & Test",
      desc: "Website dibina, disambungkan dengan fungsi yang perlu, kemudian diuji di desktop dan mobile.",
    },
    {
      number: "04",
      title: "Launch & Guide",
      desc: "Kami bantu publish, serah akses, dan guide cara guna supaya anda tak terpinga-pinga.",
    },
  ];

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-32 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mx-auto mb-24 max-w-2xl text-center">
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-400 uppercase">
              Cara Kerja
            </p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Dari Idea Sampai Website Live.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              Kami pecahkan proses supaya projek jelas, mudah follow, dan tak berulang-ulang tanpa
              hala tuju.
            </p>
          </div>
        </FadeIn>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-12 left-0 hidden h-[1px] w-full bg-zinc-200 md:block" />

          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative">
                {/* Number Circle */}
                <div className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-zinc-200 bg-white text-3xl font-bold text-zinc-300 shadow-sm transition-all duration-300 group-hover:border-orange-600 group-hover:text-orange-600 md:mx-0">
                  {s.number}
                </div>

                <h3 className="mb-4 text-center text-xl font-bold tracking-tight text-zinc-950 md:text-left">
                  {s.title}
                </h3>
                <p className="text-center text-sm leading-relaxed text-zinc-500 md:text-left">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

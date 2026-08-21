"use client";

import { FadeIn } from "@/components/FadeIn";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "We Talk First",
      desc: "We get to know your business, your target customers, your budget and what the website needs to do.",
    },
    {
      number: "02",
      title: "Content & Design",
      desc: "We help structure the flow, the key copy, the layout and the look so customers understand it easily.",
    },
    {
      number: "03",
      title: "Build & Test",
      desc: "The website gets built, wired up with the features you need, then tested on desktop and mobile.",
    },
    {
      number: "04",
      title: "Launch & Guide",
      desc: "We help publish it, hand over the access, and walk you through how to use it so you are never left guessing.",
    },
  ];

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-32 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mx-auto mb-24 max-w-2xl text-center">
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-400 uppercase">
              How We Work
            </p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              From Idea To Live Website.
            </h2>
            <p className="text-lg leading-relaxed text-zinc-500">
              We break the process into clear steps so the project stays easy to follow and never
              goes in circles.
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

"use client";

import { useEffect, useRef } from "react";

const techNames = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "NODE.JS",
  "AWS",
  "TAILWIND",
  "VERCEL",
  "SUPABASE",
  "DOCKER",
  "GRAPHQL",
];

const Clients = () => {
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
      if (window.innerWidth >= 1024) return 34;
      if (window.innerWidth >= 768) return 26;
      return 18;
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
    <section
      id="tech-stack"
      className="overflow-hidden border-t border-zinc-100 bg-zinc-50 px-6 py-24 md:px-12"
    >
      <div className="mx-auto mb-16 max-w-[1400px] text-center">
        <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
          Teknologi Yang Kami Guna Untuk Bina Website Anda
        </p>
      </div>

      <div className="tech-marquee-viewport flex overflow-hidden select-none">
        <div ref={trackRef} className="flex w-max">
          {[0, 1].map((group) => (
            <div
              key={group}
              ref={group === 0 ? firstGroupRef : undefined}
              className="flex items-center gap-16 pr-16 whitespace-nowrap"
              aria-hidden={group === 1}
            >
              {techNames.map((tech) => (
                <div
                  key={`${group}-${tech}`}
                  className="group flex cursor-default items-center gap-16"
                >
                  <span className="text-4xl font-bold tracking-tighter text-zinc-950 opacity-10 transition-opacity duration-500 group-hover:opacity-100 md:text-6xl">
                    {tech}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

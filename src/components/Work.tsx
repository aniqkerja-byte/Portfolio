"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { projectsData } from "@/constants/data";

/* ─── Helpers ──────────────────────────────────────────────── */

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i: number, active: number, len: number) {
  const raw = i - active;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

/* ─── Mobile Card Stack ────────────────────────────────────── */

const CARD_W = 320;
const CARD_H = 240;
const MAX_VISIBLE = 5;
const OVERLAP = 0.52;
const SPREAD_DEG = 36;
const DEPTH_PX = 100;
const TILT_X = 10;
const ACTIVE_LIFT = 16;
const ACTIVE_SCALE = 1.02;
const INACTIVE_SCALE = 0.92;
const SPRING = { stiffness: 280, damping: 28 };
const AUTO_INTERVAL = 3200;

const MobileCardStack = () => {
  const reduceMotion = useReducedMotion();
  const items = projectsData;
  const len = items.length;

  const [active, setActive] = React.useState(0);
  const [hovering, setHovering] = React.useState(false);

  const maxOffset = Math.max(0, Math.floor(MAX_VISIBLE / 2));
  const cardSpacing = Math.max(10, Math.round(CARD_W * (1 - OVERLAP)));
  const stepDeg = maxOffset > 0 ? SPREAD_DEG / maxOffset : 0;

  const prev = React.useCallback(() => {
    setActive((a) => wrapIndex(a - 1, len));
  }, [len]);

  const next = React.useCallback(() => {
    setActive((a) => wrapIndex(a + 1, len));
  }, [len]);

  // auto-advance
  React.useEffect(() => {
    if (reduceMotion || hovering) return;
    const id = window.setInterval(() => next(), AUTO_INTERVAL);
    return () => window.clearInterval(id);
  }, [hovering, reduceMotion, next]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      {/* Stage */}
      <div
        className="relative mx-auto w-full"
        style={{ height: CARD_H + 80 }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-32 w-[70%] rounded-full bg-zinc-950/5 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence initial={false}>
            {items.map((p, i) => {
              const off = signedOffset(i, active, len);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 8;
              const z = -abs * DEPTH_PX;
              const isActive = off === 0;
              const scale = isActive ? ACTIVE_SCALE : INACTIVE_SCALE;
              const lift = isActive ? -ACTIVE_LIFT : 0;
              const rotateX = isActive ? 0 : TILT_X;
              const zIndex = 100 - abs;

              const dragProps = isActive
                ? {
                    drag: "x" as const,
                    dragConstraints: { left: 0, right: 0 },
                    dragElastic: 0.18,
                    onDragEnd: (
                      _e: unknown,
                      info: { offset: { x: number }; velocity: { x: number } }
                    ) => {
                      if (reduceMotion) return;
                      const travel = info.offset.x;
                      const v = info.velocity.x;
                      const threshold = Math.min(120, CARD_W * 0.22);
                      if (travel > threshold || v > 650) prev();
                      else if (travel < -threshold || v < -650) next();
                    },
                  }
                : {};

              return (
                <motion.div
                  key={p.slug}
                  className={`absolute bottom-0 overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xl will-change-transform select-none ${
                    isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                  }`}
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: y + 40, x, rotateZ, rotateX, scale }
                  }
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{ type: "spring", ...SPRING }}
                  onClick={() => setActive(i)}
                  {...dragProps}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Card content */}
                    <div className="relative h-full w-full">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="320px"
                        className="object-cover"
                        draggable={false}
                      />
                      {/* Gradient overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* Text */}
                      <div className="relative z-10 flex h-full flex-col justify-end p-4">
                        <h3 className="truncate text-base font-semibold text-white">{p.title}</h3>
                        <p className="mt-0.5 text-xs text-white/70">
                          {p.category} · {p.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((p, idx) => (
          <button
            key={p.slug}
            onClick={() => setActive(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === active ? "w-6 bg-zinc-950" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Go to ${p.title}`}
          />
        ))}
      </div>

      {/* Active card link */}
      <div className="mt-6 text-center">
        <Link
          href={`/work/${items[active].slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-950 uppercase transition-colors hover:text-orange-600"
        >
          Lihat Projek
          <span className="h-[1px] w-8 bg-current transition-all duration-300 hover:w-12" />
        </Link>
      </div>
    </div>
  );
};

/* ─── Desktop Grid (unchanged) ─────────────────────────────── */

const DesktopGrid = () => (
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
              <h3 className="mb-1 text-2xl font-medium tracking-tight text-zinc-950">{p.title}</h3>
              <p className="text-sm text-zinc-500">{p.category}</p>
            </div>
            <span className="font-mono text-xs text-zinc-400">{p.year}</span>
          </div>
        </Link>
      </FadeIn>
    ))}
  </div>
);

/* ─── Main Work Section ────────────────────────────────────── */

const Work = () => {
  return (
    <section id="work" className="border-t border-zinc-200 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-24 flex items-end justify-between">
            <h2 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Contoh Kerja Kami.
            </h2>
          </div>
        </FadeIn>

        {/* Mobile: Card Stack */}
        <div className="block md:hidden">
          <MobileCardStack />
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:block">
          <DesktopGrid />
        </div>
      </div>
    </section>
  );
};

export default Work;

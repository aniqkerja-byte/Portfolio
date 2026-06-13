"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { projectsData } from "@/constants/data";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

const Work = () => {
  const reduceMotion = useReducedMotion();
  const projects = projectsData;
  const projectsLength = projects.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);

  const activeProject = useMemo(() => projects[activeIndex], [activeIndex, projects]);

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay (resets the 5s timer whenever activeIndex changes)
  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsLength);
    }, 5000);
    return () => clearInterval(id);
  }, [reduceMotion, projectsLength, activeIndex]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
  }, [projectsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
  }, [projectsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  // Touch handlers for mobile swipe
  const touchStartRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    const threshold = 40; // min swipe distance in pixels

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    touchStartRef.current = null;
  };

  // Compute transforms for each image
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: `translateX(0px) translateY(0px) scale(0.7) rotateY(0deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for text content animation
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section
      id="work"
      className="overflow-hidden border-t border-zinc-200 bg-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="mb-16 flex items-end justify-between md:mb-24">
            <h2 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Contoh Kerja Kami.
            </h2>
          </div>
        </FadeIn>

        {/* Circular perspective grid */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Images Columns */}
          <div
            className="xs:h-[320px] relative z-10 flex h-[260px] w-full items-center justify-center overflow-visible select-none perspective-[1000px] md:h-[360px] lg:h-[400px]"
            ref={imageContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="absolute h-full w-[80%] max-w-[340px] cursor-pointer transition-all duration-300 md:max-w-[420px]"
                style={getImageStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-200/50 bg-zinc-100 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-768px) 80vw, 400px"
                    className="object-cover"
                    draggable={false}
                  />
                  {/* Subtle vignette overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Details Content Column */}
          <div className="relative z-10 flex min-h-[300px] flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-start"
              >
                <span className="mb-2 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                  {activeProject.category} · {activeProject.year}
                </span>

                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl lg:text-5xl">
                  {activeProject.title}
                </h3>

                <div className="mb-8 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
                  {activeProject.desc.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        filter: "blur(8px)",
                        opacity: 0,
                        y: 4,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.012 * i,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </div>

                <div className="mb-2">
                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-xs font-semibold tracking-widest text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-zinc-800"
                  >
                    <span>Lihat Projek</span>
                    <ChevronRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="relative z-20 mt-8 flex gap-4 border-t border-zinc-100 pt-4">
              <button
                onClick={handlePrev}
                className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-zinc-950 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-600 active:scale-95"
                aria-label="Previous project"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-zinc-950 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-orange-600 active:scale-95"
                aria-label="Next project"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

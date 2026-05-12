"use client";

import { motion } from "framer-motion";

const TechStack = () => {
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

  // Duplicate the list enough times to ensure it fills wide screens and loops smoothly
  // 4x is usually safe for distinct looping
  const marqueeContent = [...techNames, ...techNames, ...techNames, ...techNames];

  return (
    <section
      id="tech-stack"
      className="overflow-hidden border-t border-zinc-100 bg-zinc-50 px-6 py-24 md:px-12"
    >
      <div className="mx-auto mb-16 max-w-[1400px] text-center">
        <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
          Powered by Modern Technology
        </p>
      </div>

      {/* 
               Marquee Container 
               - Uses a functional CSS animation or Framer Motion 'x' translation.
               - We animate the container to -50% if we have 2 sets, or -25% if we have 4 sets?
               - Actually, proper seamless loop: 
                 If we have [A, B] repeated as [A, B, A, B], we move from 0 to -50% (the width of one [A, B] set).
                 At -50%, the view is identical to 0%, so we reset.
            */}
      <div
        className="flex overflow-hidden select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex min-w-full items-center gap-16 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // Slower for elegance
          }}
        >
          {/* We need double the content for the 0 -> -50% trick to work seamlessly if the view width < content width.
                        If view width > content width, we need more duplication.
                        Let's just use a massive list to be safe.
                    */}
          {[...marqueeContent, ...marqueeContent].map((tech, i) => (
            <div key={i} className="group flex cursor-default items-center gap-16">
              <span className="text-4xl font-bold tracking-tighter text-zinc-950 opacity-10 transition-opacity duration-500 group-hover:opacity-100 md:text-6xl">
                {tech}
              </span>
              {/* Separator dot for rhythm */}
              <div className="h-2 w-2 rounded-full bg-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

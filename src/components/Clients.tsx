"use client";

import { motion } from "framer-motion";

const TechStack = () => {
    const techNames = [
        "NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "AWS", "TAILWIND", "VERCEL", "SUPABASE", "DOCKER", "GRAPHQL"
    ];

    // Duplicate the list enough times to ensure it fills wide screens and loops smoothly
    // 4x is usually safe for distinct looping
    const marqueeContent = [...techNames, ...techNames, ...techNames, ...techNames];

    return (
        <section id="tech-stack" className="py-24 px-6 md:px-12 border-t border-zinc-100 overflow-hidden bg-zinc-50">
            <div className="max-w-[1400px] mx-auto text-center mb-16">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Powered by Modern Technology</p>
            </div>

            {/* 
               Marquee Container 
               - Uses a functional CSS animation or Framer Motion 'x' translation.
               - We animate the container to -50% if we have 2 sets, or -25% if we have 4 sets?
               - Actually, proper seamless loop: 
                 If we have [A, B] repeated as [A, B, A, B], we move from 0 to -50% (the width of one [A, B] set).
                 At -50%, the view is identical to 0%, so we reset.
            */}
            <div className="flex overflow-hidden select-none mask-gradient">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap min-w-full"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Slower for elegance
                    }}
                >
                    {/* We need double the content for the 0 -> -50% trick to work seamlessly if the view width < content width.
                        If view width > content width, we need more duplication.
                        Let's just use a massive list to be safe.
                    */}
                    {[...marqueeContent, ...marqueeContent].map((tech, i) => (
                        <div key={i} className="flex items-center gap-16 group cursor-default">
                            <span className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-950 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                                {tech}
                            </span>
                            {/* Separator dot for rhythm */}
                            <div className="w-2 h-2 rounded-full bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

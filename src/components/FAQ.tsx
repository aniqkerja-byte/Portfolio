"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { faqsData as faqs } from "@/constants/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-zinc-200 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1000px]">
        <FadeIn>
          <div className="mb-24 text-center">
            <p className="mb-4 font-mono text-xs tracking-widest text-zinc-400 uppercase">
              Soalan Biasa
            </p>
            <h2 className="text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
              Selalu Ditanya Sebelum Buat Website.
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300">
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left md:p-8"
                >
                  <span
                    className={`text-lg font-medium tracking-tight md:text-xl ${activeIndex === i ? "text-orange-600" : "text-zinc-950"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`rounded-full p-2 transition-colors ${activeIndex === i ? "bg-orange-600 text-white" : "bg-zinc-100 text-zinc-400"}`}
                  >
                    {activeIndex === i ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="max-w-3xl px-6 pb-8 leading-relaxed text-zinc-500 md:px-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

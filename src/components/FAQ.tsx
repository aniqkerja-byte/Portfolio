"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { faqsData as faqs } from "@/constants/data";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 px-6 md:px-12 bg-white border-t border-zinc-200">
            <div className="max-w-[1000px] mx-auto">
                <FadeIn>
                    <div className="mb-24 text-center">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">FAQ</p>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950">
                            Common Questions.
                        </h2>
                    </div>
                </FadeIn>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="border border-zinc-200 bg-white overflow-hidden transition-all duration-300 hover:border-zinc-300">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 md:p-8 text-left"
                                >
                                    <span className={`text-lg md:text-xl font-medium tracking-tight ${activeIndex === i ? 'text-orange-600' : 'text-zinc-950'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-colors ${activeIndex === i ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
                                        {activeIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                                            <div className="px-6 md:px-8 pb-8 text-zinc-500 leading-relaxed max-w-3xl">
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

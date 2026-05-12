"use client";

import { motion } from "framer-motion";

const Statement = () => {
    return (
        <section className="py-24 md:py-36 bg-gray-50/50">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
                        "Most websites optimize for features. We optimize for trust. In a crowded market, clarity is your only competitive advantage."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Statement;

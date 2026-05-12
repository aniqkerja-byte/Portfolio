"use client";

const Scale = () => {
    const stats = [
        {
            value: "100+",
            label: "Landing Pages Delivered",
            desc: "Conversion-focused, A/B tested pages driving real business revenue.",
        },
        {
            value: "20+",
            label: "SaaS Systems Built",
            desc: "Used daily by operational teams in high-stakes production environments.",
        },
        {
            value: "FULL",
            label: "Full-Stack Expertise",
            desc: "From architectural concept to deployment & continuous maintenance.",
        }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-white border-t border-zinc-100">
            <div className="max-w-[1400px] mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-950 mb-6">
                        Proven Delivery Scale.
                    </h2>
                    <p className="text-zinc-500 text-lg leading-relaxed">
                        Measurable results delivered to real-world businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((s, i) => (
                        <div key={i} className="group">
                            <div className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-950 mb-6 group-hover:text-orange-600 transition-colors">
                                {s.value}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-zinc-950 mb-4 uppercase">
                                {s.label}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed max-w-xs mx-auto">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-xs font-mono text-zinc-400 italic">
                        Work utilized by companies in retail, logistics, and legal sectors.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Scale;

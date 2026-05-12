"use client";

const Stats = () => {
    const stats = [
        { label: "Projects Delivered", value: "50+" },
        { label: "Team Experts", value: "12" },
        { label: "Client Retention", value: "98%" },
        { label: "Countries Served", value: "4" },
    ];

    return (
        <section id="stats" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/0 md:divide-slate-800">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

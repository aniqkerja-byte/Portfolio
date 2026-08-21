"use client";

const Scale = () => {
  const stats = [
    {
      value: "100+",
      label: "Landing Pages Built",
      desc: "Sales pages for product campaigns, services, classes, webinars and business promos.",
    },
    {
      value: "20+",
      label: "Websites & Web Systems",
      desc: "For businesses that need booking, invoicing, dashboards, memberships or a custom workflow.",
    },
    {
      value: "FULL",
      label: "Setup Until Live",
      desc: "From idea, design and coding to domain, hosting and testing until the website is ready to use.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
            More Than Just A Pretty Design.
          </h2>
          <p className="text-lg leading-relaxed text-zinc-500">
            We build websites that look sharp, read clearly for customers, and stay easy to manage
            after launch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="group">
              <div className="mb-6 text-6xl font-bold tracking-tighter text-zinc-950 transition-colors group-hover:text-orange-600 md:text-8xl">
                {s.value}
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-zinc-950 uppercase">
                {s.label}
              </h3>
              <p className="mx-auto max-w-xs leading-relaxed text-zinc-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="font-mono text-xs text-zinc-400 italic">
            Built for founders, online sellers, coaches, consultants, physical stores and service
            companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scale;

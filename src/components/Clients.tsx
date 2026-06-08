const Clients = () => {
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

  const marqueeContent = [...techNames, ...techNames, ...techNames, ...techNames];

  return (
    <section
      id="tech-stack"
      className="overflow-hidden border-t border-zinc-100 bg-zinc-50 px-6 py-24 md:px-12"
    >
      <div className="mx-auto mb-16 max-w-[1400px] text-center">
        <p className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
          Teknologi Yang Kami Guna Untuk Bina Website Anda
        </p>
      </div>

      <div
        className="flex overflow-hidden select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex min-w-full animate-[marquee_10s_linear_infinite] items-center gap-16 whitespace-nowrap motion-reduce:animate-none md:animate-[marquee_25s_linear_infinite] lg:animate-[marquee_40s_linear_infinite]">
          {[...marqueeContent, ...marqueeContent].map((tech, i) => (
            <div key={i} className="group flex cursor-default items-center gap-16">
              <span className="text-4xl font-bold tracking-tighter text-zinc-950 opacity-10 transition-opacity duration-500 group-hover:opacity-100 md:text-6xl">
                {tech}
              </span>
              <div className="h-2 w-2 rounded-full bg-orange-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

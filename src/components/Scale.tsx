"use client";

const Scale = () => {
  const stats = [
    {
      value: "100+",
      label: "Landing Page Dibina",
      desc: "Halaman jualan untuk kempen produk, servis, kelas, webinar dan promosi bisnes.",
    },
    {
      value: "20+",
      label: "Website & Sistem Web",
      desc: "Untuk bisnes yang perlukan booking, invoice, dashboard, membership atau workflow khas.",
    },
    {
      value: "PENUH",
      label: "Setup Sampai Live",
      desc: "Dari idea, design, coding, domain, hosting, testing sampai website boleh digunakan.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
            Bukan Sekadar Design Cantik.
          </h2>
          <p className="text-lg leading-relaxed text-zinc-500">
            Kami bina website yang nampak kemas, jelas untuk pelanggan, dan mudah diurus selepas
            siap.
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
            Sesuai untuk founder, peniaga online, coach, consultant, kedai fizikal dan syarikat
            servis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scale;

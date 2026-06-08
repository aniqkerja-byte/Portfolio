import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "Jun 2026";

export const metadata = {
  title: "Terma & Syarat",
  description: "Terma & Syarat untuk JomBina Digital.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-24 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-[800px]">
        <FadeIn>
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-zinc-500 uppercase transition-colors hover:text-zinc-950"
          >
            <ArrowLeft className="h-4 w-4" /> Kembali ke Laman Utama
          </Link>

          <h1 className="mb-12 text-4xl font-bold tracking-tighter md:text-6xl">
            Terma & Syarat<span className="text-orange-600">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-zinc-600">
            <p className="mb-12 text-xl font-light text-zinc-500 md:text-2xl">
              Kemaskini Terakhir: {LAST_UPDATED}
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              1. Persetujuan Terma
            </h3>
            <p>
              Terma & Syarat ini merupakan perjanjian sah antara anda (secara peribadi atau bagi
              pihak syarikat) dan JomBina (&quot;kami&quot;), mengenai akses dan penggunaan laman
              web ini serta sebarang saluran media lain yang berkaitan dengannya (secara kolektif
              dirujuk sebagai &quot;Laman Web&quot;).
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              2. Hak Harta Intelek
            </h3>
            <p>
              Melainkan dinyatakan sebaliknya, Laman Web ini adalah hak milik kami sepenuhnya. Semua
              kod sumber, pangkalan data, fungsi perisian, reka bentuk laman web, audio, video,
              teks, gambar, grafik (secara kolektif dirujuk sebagai &quot;Kandungan&quot;) serta
              tanda dagangan dan logo di dalamnya adalah dimiliki atau dikawal oleh kami dan
              dilindungi oleh undang-undang hak cipta dan harta intelek.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              3. Tanggungjawab Pengguna
            </h3>
            <p>
              Dengan menggunakan Laman Web ini, anda mengakui dan menjamin bahawa: (1) semua
              maklumat yang anda berikan adalah betul, tepat dan lengkap; (2) anda akan sentiasa
              memastikan maklumat tersebut tepat; (3) anda mempunyai kapasiti undang-undang dan
              bersetuju untuk mematuhi Terma & Syarat ini.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              4. Aktiviti yang Dilarang
            </h3>
            <p>
              Anda tidak boleh mengakses atau menggunakan Laman Web ini untuk sebarang tujuan selain
              daripada apa yang kami sediakan. Laman Web ini tidak boleh digunakan untuk sebarang
              tujuan komersial yang lain melainkan mendapat kebenaran bertulis daripada kami.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              5. Perubahan dan Gangguan
            </h3>
            <p>
              Kami berhak untuk mengubah, mengubah suai atau membuang kandungan Laman Web pada
              bila-bila masa atas budi bicara kami sendiri tanpa sebarang notis. Kami juga berhak
              untuk mengubah suai atau menghentikan sebahagian atau keseluruhan Laman Web tanpa
              notis pada bila-bila masa.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              6. Undang-undang Terpakai
            </h3>
            <p>
              Terma & Syarat ini dikawal dan ditafsirkan mengikut undang-undang Malaysia. JomBina
              dan anda bersetuju bahawa mahkamah di Malaysia mempunyai bidang kuasa eksklusif untuk
              menyelesaikan sebarang pertikaian yang timbul berkaitan terma ini.
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

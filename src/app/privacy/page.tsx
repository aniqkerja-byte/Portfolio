import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "Jun 2026";

export const metadata = {
  title: "Dasar Privasi",
  description: "Dasar Privasi untuk JomBina Digital.",
};

export default function PrivacyPage() {
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
            Dasar Privasi<span className="text-orange-600">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-zinc-600">
            <p className="mb-12 text-xl font-light text-zinc-500 md:text-2xl">
              Kemaskini Terakhir: {LAST_UPDATED}
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              1. Pengenalan
            </h3>
            <p>
              JomBina (&quot;kami&quot;) menghormati privasi anda dan komited untuk melindungi data
              peribadi anda. Dasar privasi ini menerangkan cara kami mengendalikan data peribadi
              anda apabila anda melawat laman web kami serta hak privasi anda dan bagaimana
              undang-undang melindungi anda.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              2. Data yang Kami Kumpul
            </h3>
            <p>
              Kami mungkin mengumpul, menggunakan, menyimpan dan memindahkan beberapa jenis data
              peribadi anda seperti berikut:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-zinc-900">Data Identiti</strong> termasuk nama
                pertama, nama keluarga, nama pengguna atau pengecam yang serupa.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Data Hubungan</strong> termasuk
                alamat bil, alamat penghantaran, alamat e-mel dan nombor telefon.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Data Teknikal</strong> termasuk
                alamat protokol internet (IP), data log masuk anda, jenis dan versi pelayar, tetapan
                zon masa dan lokasi, serta teknologi lain pada peranti yang anda gunakan untuk
                mengakses laman web ini.
              </li>
            </ul>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              3. Cara Kami Menggunakan Data Anda
            </h3>
            <p>
              Kami hanya akan menggunakan data peribadi anda apabila dibenarkan oleh undang-undang.
              Kebiasaannya, kami menggunakan data anda untuk perkara berikut:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Untuk memenuhi kontrak/perjanjian yang akan atau telah kami persetujui dengan anda.
              </li>
              <li>
                Untuk kepentingan sah kami (atau pihak ketiga) selagi ia tidak menjejaskan hak
                privasi asas anda.
              </li>
              <li>Untuk mematuhi undang-undang atau peraturan yang ditetapkan.</li>
            </ul>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              4. Keselamatan Data
            </h3>
            <p>
              Kami telah mengambil langkah keselamatan yang sewajarnya untuk mengelakkan data
              peribadi anda daripada hilang, diguna, diakses tanpa kebenaran, diubah atau didedahkan
              secara tidak sengaja. Selain itu, kami mengehadkan akses data anda hanya kepada
              pekerja atau rakan kongsi yang mempunyai keperluan perniagaan untuk mengetahuinya.
            </p>

            <h3 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-zinc-950">
              5. Hubungi Kami
            </h3>
            <p>
              Jika anda mempunyai sebarang soalan mengenai dasar privasi ini atau amalan privasi
              kami, sila hubungi kami di:{" "}
              <a href="mailto:jombina.site@gmail.com" className="text-orange-600 hover:underline">
                jombina.site@gmail.com
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

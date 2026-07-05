"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const About = () => {
  return (
    <section id="about" className="border-t border-zinc-200 bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start gap-12 md:flex-row md:gap-24">
          {/* Image Column */}
          <div className="w-full md:w-1/3">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden border border-zinc-200 bg-zinc-100">
                <Image
                  src="/about.webp"
                  alt="Aniq — pembangun website JomBina"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </FadeIn>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-2/3">
            <FadeIn delay={0.2}>
              <p className="mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
                Siapa Di Sebalik JomBina
              </p>

              <h2 className="mb-8 text-3xl leading-tight font-semibold tracking-tighter text-zinc-950 md:text-5xl">
                Saya bina solusi digital yang owner bisnes betul-betul faham dan boleh guna.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
                <p>
                  Saya Aniq, pembangun teknologi yang bantu bisnes kecil dan sederhana selesaikan
                  masalah operasi melalui digital. Boleh jadi website, boleh jadi sistem dalaman,
                  atau automasi untuk kerja harian yang selalu makan masa.
                </p>
                <p>
                  Cara saya kerja mudah je. Saya cuba faham dulu apa masalah sebenar dalam bisnes
                  anda, macam mana proses kerja berjalan sekarang, dan teknologi apa yang paling
                  sesuai untuk bantu. Lepas tu baru saya mula bina, sama ada website, web app atau
                  sistem custom, ikut apa yang bisnes anda betul-betul perlukan. Bukan ikut template
                  yang sama untuk semua orang.
                </p>
                <p>
                  Saya faham tak semua orang selesa dengan bahasa teknikal. Jadi saya cuba explain
                  semudah mungkin, siapkan semuanya untuk anda, dan pastikan sistem tu betul-betul
                  boleh jalan dan tolong bisnes anda bergerak lebih lancar.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="font-medium text-zinc-900">
                    Pernah bina dan deploy sistem web (inventori, HR, e-learning) yang digunakan
                    oleh lebih 50 staff dalam syarikat sebenar
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="font-medium text-zinc-900">
                    Website, Sistem Web, Automasi dan Digital Tools untuk Bisnes
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

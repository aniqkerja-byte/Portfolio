"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: number;
  completePrice: number;
  priceSuffix: string;
  desc: string;
  features: string[];
  highlight: boolean;
  buttonText: string;
  description: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Landing Page",
    price: 199,
    completePrice: 349,
    priceSuffix: "- RM499",
    desc: "Sesuai untuk jual satu produk, servis, kelas, webinar atau kempen promosi.",
    features: [
      "Design 1 halaman yang kemas",
      "Susunan ayat jualan yang jelas",
      "Butang WhatsApp / borang inquiry",
      "Setup domain & hosting asas",
      "Sesuai untuk mobile",
    ],
    highlight: false,
    buttonText: "Tanya Pakej Ini",
    description: "Sesuai untuk pelancaran produk pantas",
  },
  {
    name: "Laman Web Korporat",
    price: 990,
    completePrice: 1140,
    priceSuffix: "+",
    desc: "Untuk bisnes yang nak website lengkap supaya pelanggan lebih yakin sebelum hubungi.",
    features: [
      "Halaman utama, servis, tentang & contact",
      "Struktur content yang mudah faham",
      "SEO asas untuk Google",
      "Borang inquiry / link WhatsApp",
      "Panduan selepas website siap",
    ],
    highlight: false,
    buttonText: "Tanya Pakej Ini",
    description: "Pakej lengkap yang paling dipercayai",
  },
  {
    name: "Kedai Online (E-Commerce)",
    price: 499,
    completePrice: 649,
    priceSuffix: "- RM999",
    desc: "Untuk bisnes yang nak jual produk online. Harga boleh bertambah ikut feature tambahan yang diperlukan.",
    features: [
      "Produk, troli dan checkout",
      "Integrasi bayaran FPX / kad",
      "Dashboard urus order",
      "Setup penghantaran asas",
      "Training ringkas cara guna",
    ],
    highlight: true,
    buttonText: "Tanya Pakej Ini",
    description: "Bagus untuk start e-commerce bisnes",
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const switchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 60,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#ea580c", "#18181b", "#71717a", "#ffffff"],
        ticks: 150,
        gravity: 1.1,
        decay: 0.94,
        startVelocity: 28,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section
      id="pricing"
      className="overflow-hidden border-t border-zinc-100 bg-white px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Title Block */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs tracking-widest text-zinc-400 uppercase">
            Pakej Website
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
            Bajet Jelas Dari Awal.
          </h2>
          <p className="text-lg leading-relaxed text-zinc-500">
            Pilih pakej ikut tahap bisnes anda. Kalau tak pasti, mesej dulu dan kami cadangkan
            pilihan yang paling masuk akal.
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div className="mb-16 flex items-center justify-center gap-3 select-none">
          <span
            className={cn(
              "text-sm font-semibold transition-colors duration-200",
              isMonthly ? "text-zinc-950" : "text-zinc-400"
            )}
          >
            Pakej Asas (Tanpa Hosting)
          </span>

          <label className="relative inline-flex cursor-pointer items-center">
            <Label className="sr-only">Toggle Package</Label>
            <Switch
              ref={switchRef}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="bg-zinc-200 data-[state=checked]:bg-orange-600"
            />
          </label>

          <span
            className={cn(
              "text-sm font-semibold transition-colors duration-200",
              !isMonthly ? "text-zinc-950" : "text-zinc-400"
            )}
          >
            Pakej Lengkap <span className="font-bold text-orange-600">(+ Domain & Hosting)</span>
          </span>
        </div>

        {/* 3D Pricing Grid */}
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 items-center justify-center gap-8 md:grid-cols-3"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={
                isDesktop
                  ? {
                      y: plan.highlight ? -12 : 0,
                      opacity: 1,
                      x: index === 2 ? -20 : index === 0 ? 20 : 0,
                      scale: plan.highlight ? 1.02 : 0.95,
                      rotateY: plan.highlight ? 0 : index === 0 ? 6 : index === 2 ? -6 : 0,
                    }
                  : { y: 0, opacity: 1, x: 0, scale: 1, rotateY: 0 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 90,
                damping: 24,
                delay: 0.1 * index,
              }}
              className={cn(
                "relative flex h-full flex-col rounded-xl border p-8 shadow-sm transition-all duration-300 md:p-10",
                plan.highlight
                  ? "z-10 border-orange-600 bg-zinc-950 text-white shadow-xl ring-1 ring-orange-600"
                  : "z-0 border-zinc-200 bg-white text-zinc-950 hover:border-zinc-300",
                index === 0 && "origin-right",
                index === 2 && "origin-left"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 right-8 flex items-center gap-1 rounded-full bg-orange-600 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm">
                  <Star className="h-3 w-3 fill-current text-white" />
                  <span>Paling Popular</span>
                </div>
              )}

              <div className="flex flex-grow flex-col">
                {/* Header */}
                <div className="mb-8">
                  <h3
                    className={cn(
                      "mb-2 text-sm font-bold tracking-widest uppercase",
                      plan.highlight ? "text-zinc-400" : "text-zinc-500"
                    )}
                  >
                    {plan.name}
                  </h3>

                  {/* Pricing display with NumberFlow */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight md:text-5xl">
                      <NumberFlow
                        value={isMonthly ? plan.price : plan.completePrice}
                        format={{
                          style: "currency",
                          currency: "MYR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 450,
                          easing: "ease-out",
                        }}
                        willChange
                        className="font-variant-numeric: tabular-nums"
                      />
                    </span>
                    <span className="ml-1 text-lg font-medium opacity-60">{plan.priceSuffix}</span>
                  </div>

                  <p
                    className={cn(
                      "mt-4 text-sm leading-relaxed",
                      plan.highlight ? "text-zinc-400" : "text-zinc-500"
                    )}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="mb-10 flex-grow space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-5 w-5 flex-shrink-0",
                          plan.highlight ? "text-orange-500" : "text-zinc-400"
                        )}
                      />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr
                  className={cn(
                    "mb-6 w-full border-t",
                    plan.highlight ? "border-zinc-800" : "border-zinc-100"
                  )}
                />

                {/* Button Link */}
                <Link
                  href="/contact"
                  className={cn(
                    "w-full rounded-sm py-4 text-center text-xs font-bold tracking-widest uppercase shadow-sm transition-all duration-300",
                    plan.highlight
                      ? "bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-950 text-white hover:bg-orange-600"
                  )}
                >
                  {plan.buttonText}
                </Link>

                {/* Note */}
                <p
                  className={cn(
                    "mt-4 text-center text-[10px] leading-relaxed",
                    plan.highlight ? "text-zinc-500" : "text-zinc-400"
                  )}
                >
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-400">
            *Harga boleh berubah ikut skop sebenar. Kami akan confirm semuanya sebelum projek mula.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

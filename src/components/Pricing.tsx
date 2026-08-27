"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { pricingPlansData as pricingPlans } from "@/constants/data";

type PricingProps = {
  /**
   * "teaser" is the homepage cut: names, prices, one-line desc and CTA only.
   * The toggle, feature lists and footnote live on /pricing. Same data either
   * way — a second copy of this markup is how a pricing page and a homepage
   * end up disagreeing about which package is most popular.
   */
  variant?: "full" | "teaser";
};

const Pricing = ({ variant = "full" }: PricingProps) => {
  const isTeaser = variant === "teaser";
  // No toggle in the teaser, so isMonthly stays true and base prices show.
  const [isMonthly, setIsMonthly] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const switchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
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
            Website Packages
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tighter text-zinc-950 md:text-6xl">
            Clear Budget From Day One.
          </h2>
          <p className="text-lg leading-relaxed text-zinc-500">
            Pick the package that matches where your business is. Not sure? Message us and we will
            suggest the option that makes the most sense.
          </p>
        </div>

        {/* Custom Toggle Switch */}
        <div
          className={cn(
            "mb-16 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center select-none",
            isTeaser ? "hidden" : "flex"
          )}
        >
          <span
            className={cn(
              "text-sm font-semibold transition-colors duration-200",
              isMonthly ? "text-zinc-950" : "text-zinc-400"
            )}
          >
            Basic Package (No Hosting)
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
            Complete Package <span className="font-bold text-orange-600">(+ Domain & Hosting)</span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 pt-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: isDesktop && plan.highlight ? -16 : 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 90,
                damping: 24,
                delay: 0.1 * index,
              }}
              className={cn(
                "relative flex h-full flex-col rounded-xl border p-8 transition-colors duration-300 lg:p-10",
                plan.highlight
                  ? "z-10 border-orange-600 bg-zinc-950 text-white shadow-xl ring-1 ring-orange-600"
                  : "z-0 border-zinc-200 bg-white text-zinc-950 shadow-sm hover:border-zinc-300"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-orange-600 px-3.5 py-1.5 text-[10px] leading-none font-bold tracking-widest whitespace-nowrap text-white uppercase shadow-sm">
                  <Star className="h-3 w-3 fill-current text-white" />
                  <span>Most Popular</span>
                </div>
              )}

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
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight md:text-5xl">
                    <NumberFlow
                      value={isMonthly ? plan.price : plan.completePrice}
                      locales="ms-MY"
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
                      className="tabular-nums"
                    />
                  </span>
                  <span className="text-lg font-medium opacity-60">{plan.priceSuffix}</span>
                </div>

                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed lg:min-h-[4.5rem]",
                    plan.highlight ? "text-zinc-400" : "text-zinc-500"
                  )}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Features List — full detail lives on /pricing */}
              {!isTeaser && (
                <ul className="mb-10 space-y-4">
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
              )}

              {/* Footer pinned to the bottom so every card's CTA lines up */}
              <div className="mt-auto">
                <hr
                  className={cn(
                    "mb-6 w-full border-t",
                    plan.highlight ? "border-zinc-800" : "border-zinc-100"
                  )}
                />

                <Link
                  href="/contact"
                  className={cn(
                    "block w-full rounded-sm py-4 text-center text-xs font-bold tracking-widest uppercase shadow-sm transition-all duration-300",
                    plan.highlight
                      ? "bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-950 text-white hover:bg-orange-600"
                  )}
                >
                  {plan.buttonText}
                </Link>

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

        {/* Footer — teaser sends people to the full page, /pricing carries the
            scope caveat since that is where the detail actually is. */}
        <div className="mt-16 text-center">
          {isTeaser ? (
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-950 uppercase transition-colors hover:text-orange-600"
            >
              See What Is Included In Each Package
              <span className="h-[1px] w-8 bg-current transition-all duration-300 group-hover:w-14" />
            </Link>
          ) : (
            <p className="text-xs text-zinc-400">
              *Prices may change based on the actual scope. We confirm everything before the project
              starts.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { DotsPattern } from "@/components/patterns/dots-pattern";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1520637836862-4d197d0acb6c?auto=format&fit=crop&w=2400&q=85";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home;
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-cocobiches-marine-900 md:min-h-[90svh] md:items-center">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      {/* Lumière & profondeur */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,transparent_0%,rgb(19_19_53/0.55)_55%,rgb(19_19_53/0.92)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cocobiches-marine-900/25 via-transparent to-cocobiches-marine-900/88"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgb(196_165_116/0.12),transparent_45%)]"
        aria-hidden
      />
      <DotsPattern variant="creme-on-marine" className="opacity-[0.35] mix-blend-overlay" />

      <div className="via-cocobiches-creme-50/25 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cocobiches-creme-50 to-transparent md:h-48" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-36">
        <div className="max-w-3xl space-y-8 text-cocobiches-creme">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-cocobiches-or to-transparent md:w-14"
              aria-hidden
            />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-cocobiches-creme-200 md:text-xs">
              {h.kicker}
            </p>
          </div>

          <svg className="absolute h-0 w-0" aria-hidden>
            <defs>
              <filter
                id="cocobiches-welcome-warp"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012"
                  numOctaves="2"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale={reduce ? "0" : "2.5"}
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>

          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.32em] text-cocobiches-creme-100/95 md:text-sm",
              !reduce && "drop-shadow-[0_2px_24px_rgb(0_0_0/0.35)]",
            )}
            style={
              reduce
                ? undefined
                : { filter: "url(#cocobiches-welcome-warp)" as const }
            }
          >
            {h.welcomeLine}
          </p>

          <motion.h1
            className="font-display text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_48px_rgb(0_0_0/0.35)] md:text-5xl lg:text-[3.35rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {h.title}
          </motion.h1>

          <p className="max-w-xl font-sans text-base font-normal leading-relaxed text-cocobiches-creme-100 md:text-lg md:leading-relaxed">
            {h.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`${href(locale)}#nos-maisons`}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cocobiches-creme px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine shadow-[0_12px_40px_rgb(0_0_0/0.2)] transition hover:bg-white"
            >
              <span className="relative z-10">{h.ctaDiscover}</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 transition group-hover:translate-x-full group-hover:opacity-100 motion-safe:duration-700"
                aria-hidden
              />
            </Link>
            <a
              href="https://www.hotel-jeudepaume.fr/seminaires"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/[0.06] px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:border-cocobiches-or/60 hover:bg-white/10"
              rel="noopener noreferrer"
              target="_blank"
            >
              {h.ctaSeminars}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

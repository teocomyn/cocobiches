"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

/** Photo maison — pas de stock Unsplash ; image Cocobiches locale (brief). */
const HERO_IMAGE = "/hotel-jeu-de-paume/salon.png";

const easeCb = [0.22, 1, 0.36, 1] as const;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home;
  const reduce = useReducedMotion();
  const welcomeParts = h.welcomeLine.split(/\s*·\s*/).filter(Boolean);

  return (
    <section className="relative flex min-h-[100svh] max-h-[820px] items-end overflow-hidden bg-cocobiches-marine-900 md:items-center">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: easeCb }}
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900/90 via-cocobiches-marine-900/35 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgb(45_48_119/0.4)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
        <div className="max-w-3xl space-y-8 text-cocobiches-creme">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 shrink-0 bg-cocobiches-or/80 md:w-14"
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
                  baseFrequency="0.01"
                  numOctaves="2"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale={reduce ? "0" : "2"}
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>

          <p
            className={cn(
              "text-xs font-bold uppercase tracking-[0.28em] text-cocobiches-creme-100/95 md:text-sm",
              !reduce && "drop-shadow-[0_2px_24px_rgb(0_0_0/0.35)]",
            )}
            style={reduce ? undefined : { filter: "url(#cocobiches-welcome-warp)" }}
          >
            {welcomeParts.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.15, duration: 0.6, ease: easeCb }}
              >
                {i > 0 ? <span className="mx-2 opacity-45">·</span> : null}
                {word}
              </motion.span>
            ))}
          </p>

          <motion.h1
            className="font-display text-[2.35rem] font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_4px_48px_rgb(0_0_0/0.35)] md:text-5xl lg:text-[3.35rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeCb, delay: 0.2 }}
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

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-cocobiches-creme-200/80"
        aria-hidden
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-cocobiches-creme-200/60">
          {locale === "fr" ? "Défiler" : "Scroll"}
        </span>
        <motion.span
          className="inline-block rounded-full border border-white/20 p-1"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="block h-2 w-2 rotate-45 border-b border-r border-white/60" />
        </motion.span>
      </div>
    </section>
  );
}

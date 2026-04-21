"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/hotel-jeu-de-paume/salon.png";
const easeCb = [0.22, 1, 0.36, 1] as const;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.home;
  const reduce = useReducedMotion();
  const welcomeParts = h.welcomeLine.split(/\s*·\s*/).filter(Boolean);

  const badges =
    locale === "fr"
      ? ["3 maisons", "À 5 min du Château", "Depuis 2010"]
      : ["3 houses", "5 min from the Palace", "Since 2010"];

  return (
    <section className="relative flex min-h-[100svh] max-h-[880px] items-end overflow-hidden bg-cocobiches-marine-900 md:items-center">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: easeCb }}
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
        className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900/95 via-cocobiches-marine-900/45 to-cocobiches-marine-900/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(110deg,rgb(19_19_53/0.6)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_100%,rgb(19_19_53/0.75),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-24 pt-32 md:px-10 md:pb-28 md:pt-36">
        <div className="max-w-3xl space-y-7 text-cocobiches-creme">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12 shrink-0 bg-cocobiches-or/80 md:w-16"
              aria-hidden
            />
            <p className="cb-eyebrow text-[0.7rem] text-cocobiches-creme-200/95 md:text-[0.75rem]">
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
            className="font-display text-[2.55rem] font-semibold uppercase leading-[0.98] tracking-[-0.04em] text-white drop-shadow-[0_4px_48px_rgb(0_0_0/0.45)] md:text-[4.1rem] lg:text-[4.6rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: easeCb, delay: 0.15 }}
          >
            {h.title}
          </motion.h1>

          <motion.p
            className="max-w-xl font-sans text-[1rem] leading-[1.7] text-cocobiches-creme-100 md:text-[1.1rem] md:leading-[1.7]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeCb, delay: 0.3 }}
          >
            {h.subtitle}
          </motion.p>

          <motion.ul
            className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: easeCb, delay: 0.5 }}
          >
            {badges.map((b, i) => (
              <li
                key={b}
                className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cocobiches-creme-200/85"
              >
                {i > 0 ? (
                  <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-cocobiches-or/80" />
                ) : null}
                <span>{b}</span>
              </li>
            ))}
          </motion.ul>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href={`${href(locale)}#nos-maisons`}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-cocobiches-creme px-8 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine shadow-[0_16px_45px_rgb(0_0_0/0.25)] transition hover:bg-white"
            >
              <span className="relative z-10">{h.ctaDiscover}</span>
              <span
                aria-hidden
                className="relative z-10 inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <a
              href="https://www.hotel-jeudepaume.fr/seminaires"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/[0.06] px-8 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-cocobiches-or/60 hover:bg-white/10"
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

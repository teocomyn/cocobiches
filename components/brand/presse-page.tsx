import Image from "next/image";
import Link from "next/link";
import { Download, FileText, ImageIcon, Mail, Newspaper } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import { getPressePage } from "@/lib/i18n/presse-page";
import type { Locale } from "@/lib/i18n-config";
import { PRESS_DOWNLOADS, PRESS_EMAIL } from "@/lib/press-data";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const DOWNLOAD_ICONS = {
  kit: FileText,
  logos: ImageIcon,
  photos: Download,
} as const;

export function PressePageView({ locale }: { locale: Locale }) {
  const d = getPressePage(locale);
  const isFr = locale === "fr";

  return (
    <article className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[72svh] max-h-[760px] overflow-hidden bg-cocobiches-marine-900">
        <Image
          src="/hotel-jeu-de-paume/hotel-facade.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900 via-cocobiches-marine-900/60 to-cocobiches-marine-900/25"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-36">
          <div className="mx-auto w-full max-w-[1240px]">
            <p className="cb-eyebrow flex items-center gap-2 text-cocobiches-creme/75">
              <Newspaper className="size-3.5" strokeWidth={2} aria-hidden />
              {d.hero.eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-[12ch] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-white md:text-[4.5rem] lg:text-[5.25rem]">
              {d.hero.title}
              <span className="block text-cocobiches-creme-200">{d.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.72] text-cocobiches-creme-100 md:text-[1.1rem]">
              {d.hero.lead}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden bg-cocobiches-creme py-20 md:py-28">
        <LogoPattern className="opacity-[0.035]" />
        <div className="relative mx-auto max-w-[880px] px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.02] tracking-[-0.025em] text-cocobiches-marine md:text-[3.5rem]">
              {d.intro.quote}
              <span className="block font-light italic text-cocobiches-marine/85">
                {d.intro.quoteAccent}
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-[1.75] text-cocobiches-muted md:text-lg">
              {d.intro.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="border-y border-cocobiches-border/70 bg-cocobiches-creme-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-or-muted">{d.downloads.eyebrow}</p>
            <h2 className="font-display mt-4 text-[2rem] font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[2.75rem]">
              {d.downloads.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[0.88rem] text-cocobiches-muted">{d.downloads.subtitle}</p>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {PRESS_DOWNLOADS.map((item, i) => {
              const meta = d.downloads.items[item.id];
              const Icon = DOWNLOAD_ICONS[item.id];
              return (
                <FadeIn key={item.id} delay={i * 0.05}>
                  <a
                    href={item.href}
                    download={item.id !== "kit"}
                    className="group flex h-full flex-col rounded-sm border border-cocobiches-marine/10 bg-white p-7 shadow-card ring-1 ring-cocobiches-marine/[0.06] transition duration-500 hover:-translate-y-1 hover:shadow-lift md:p-8"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full border border-cocobiches-marine/12 bg-cocobiches-creme-50 text-cocobiches-marine transition group-hover:border-cocobiches-marine/25 group-hover:bg-cocobiches-marine group-hover:text-cocobiches-creme">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="font-display mt-6 text-xl font-bold text-cocobiches-marine md:text-[1.35rem]">
                      {meta.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-cocobiches-muted">
                      {meta.desc}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-cocobiches-border/80 pt-5">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine/45">
                        {item.ext}
                        {item.size ? ` · ${item.size}` : ""}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine transition group-hover:text-cocobiches-marine-800">
                        {d.downloads.downloadLabel}
                        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                          ↓
                        </span>
                      </span>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACTS + ANGLES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 md:grid-cols-2 md:gap-20 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.facts.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.facts.title}
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-cocobiches-marine/10 shadow-card ring-1 ring-cocobiches-marine/[0.08]">
              {d.facts.items.map((fact) => (
                <div key={fact.label} className="bg-white p-6 md:p-8">
                  <p className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.03em] text-cocobiches-marine md:text-[3rem]">
                    {fact.value}
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-snug text-cocobiches-muted">{fact.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="cb-eyebrow text-cocobiches-marine">{d.angles.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.angles.title}
            </h2>
            <ul className="mt-10 space-y-3">
              {d.angles.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-l-[3px] border-cocobiches-or/60 py-1 pl-4"
                >
                  <span
                    className="font-display text-[0.75rem] font-bold text-cocobiches-marine/35"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.92rem] leading-relaxed text-cocobiches-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="grid overflow-hidden lg:grid-cols-3">
        {[
          { src: "/hotel-angleterre/hotel-facade.jpg", alt: isFr ? "Hôtel d'Angleterre" : "Hôtel d'Angleterre" },
          { src: "/hotel-jeu-de-paume/salon.jpg", alt: isFr ? "Salon Jeu de Paume" : "Jeu de Paume lounge" },
          { src: "/hotel-angleterre/chambre-1.jpg", alt: isFr ? "Chambre Cocobiches" : "Cocobiches room" },
        ].map((img) => (
          <div key={img.src} className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[280px]">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900 py-24 text-cocobiches-creme md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgb(196_165_116/0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <Mail className="mx-auto size-8 text-cocobiches-or/80" strokeWidth={1.5} aria-hidden />
            <h2 className="font-display mt-6 text-[2rem] font-bold md:text-[2.75rem]">{d.contact.title}</h2>
            <p className="mt-6 text-[1.02rem] leading-[1.75] text-cocobiches-creme/85 md:text-lg">
              {d.contact.body}
            </p>
            <p className="mt-4 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-creme/55">
              {d.contact.emailLabel} · {PRESS_EMAIL}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${PRESS_EMAIL}?subject=${encodeURIComponent(
                  isFr ? "Demande presse Cocobiches" : "Cocobiches press request",
                )}`}
                className="inline-flex rounded-full bg-cocobiches-creme px-8 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine shadow-lg transition hover:bg-white"
              >
                {d.contact.ctaEmail}
              </a>
              <Link
                href={href(locale, "/contact")}
                className={cn(
                  "inline-flex rounded-full border border-white/30 px-8 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10",
                )}
              >
                {d.contact.ctaContact} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}

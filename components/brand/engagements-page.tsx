import Image from "next/image";
import Link from "next/link";
import { Check, Leaf, Train, Users, UtensilsCrossed } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import { ENGAGEMENTS_STATS, ENGAGEMENTS_UPDATED } from "@/lib/engagements-data";
import { getEngagementsPage } from "@/lib/i18n/engagements-page";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const STAT_ICONS = {
  local: UtensilsCrossed,
  waste: Leaf,
  team: Users,
  transport: Train,
} as const;

function StatCard({
  stat,
  locale,
  featured = false,
}: {
  stat: (typeof ENGAGEMENTS_STATS)[number];
  locale: Locale;
  featured?: boolean;
}) {
  const Icon = STAT_ICONS[stat.id];
  const value = locale === "fr" ? stat.valueFr : stat.valueEn;
  const label = locale === "fr" ? stat.labelFr : stat.labelEn;
  const target = locale === "fr" ? stat.targetFr : stat.targetEn;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-sm border bg-white p-7 shadow-card ring-1 ring-cocobiches-marine/[0.08] transition duration-500 hover:shadow-lift md:p-9",
        featured
          ? "border-cocobiches-marine/15 md:col-span-2 md:flex-row md:items-end md:gap-10 md:p-10"
          : "border-cocobiches-border/80",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-4 -top-6 select-none font-display font-black leading-none text-cocobiches-marine/[0.04]",
          featured ? "text-[8rem] md:text-[10rem]" : "text-[5rem]",
        )}
        aria-hidden
      >
        {stat.progress ?? "·"}
      </div>

      <div className={cn("relative flex-1", featured && "md:max-w-[55%]")}>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-cocobiches-marine/12 bg-cocobiches-creme-50 text-cocobiches-marine">
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
          {stat.accent === "green" ? (
            <span className="rounded-full bg-cocobiches-vert/10 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-vert-600">
              {locale === "fr" ? "En progression" : "In progress"}
            </span>
          ) : null}
        </div>

        <p
          className={cn(
            "font-display font-bold leading-none tracking-[-0.04em] text-cocobiches-marine",
            featured ? "text-[4.5rem] md:text-[5.5rem]" : "text-[3rem] md:text-[3.25rem]",
          )}
        >
          {value}
        </p>
        <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-cocobiches-muted">{label}</p>

        {stat.progress !== undefined ? (
          <div className="mt-6">
            <div className="h-1.5 overflow-hidden rounded-full bg-cocobiches-marine/[0.08]">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-700",
                  stat.accent === "green" ? "bg-cocobiches-vert" : "bg-cocobiches-marine",
                )}
                style={{ width: `${Math.min(stat.progress, 100)}%` }}
              />
            </div>
            {target ? (
              <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine/45">
                {target}
              </p>
            ) : null}
          </div>
        ) : target ? (
          <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-or-muted">
            {target}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function EngagementsPageView({ locale }: { locale: Locale }) {
  const d = getEngagementsPage(locale);
  const isFr = locale === "fr";

  return (
    <article className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[72svh] max-h-[760px] overflow-hidden bg-cocobiches-marine-900 md:min-h-[78svh]">
        <Image
          src="/hotel-jeu-de-paume/jardin.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900 via-cocobiches-marine-900/55 to-cocobiches-marine-900/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(110deg,rgb(19_19_53/0.55)_0%,transparent_50%)]"
          aria-hidden
        />

        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-36">
          <div className="mx-auto w-full max-w-[1240px]">
            <p className="cb-eyebrow text-cocobiches-creme/75">{d.hero.eyebrow}</p>
            <h1 className="font-display mt-6 max-w-[14ch] text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-white md:text-[4.5rem] lg:text-[5.25rem]">
              {d.hero.title}
              <span className="block text-cocobiches-creme-200">{d.hero.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-[1.72] text-cocobiches-creme-100 md:text-[1.1rem]">
              {d.hero.lead}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-creme-200/90 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-cocobiches-vert" aria-hidden />
              {d.hero.updatedLabel} · {ENGAGEMENTS_UPDATED}
            </p>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative overflow-hidden bg-cocobiches-creme py-20 md:py-28">
        <LogoPattern className="opacity-[0.035]" />
        <div className="relative mx-auto max-w-[880px] px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-[2.1rem] font-bold leading-[1.02] tracking-[-0.025em] text-cocobiches-marine md:text-[3.5rem]">
              {d.manifesto.quote}
              <span className="block font-light italic text-cocobiches-marine/85">
                {d.manifesto.quoteAccent}
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-[1.75] text-cocobiches-muted md:text-lg">
              {d.manifesto.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* STATS DASHBOARD */}
      <section className="border-y border-cocobiches-border/70 bg-cocobiches-creme-50 py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10">
          <FadeIn>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="cb-eyebrow text-cocobiches-or-muted">{d.stats.title}</p>
                <h2 className="font-display mt-4 text-[2rem] font-semibold tracking-[-0.02em] text-cocobiches-marine md:text-[2.75rem]">
                  {isFr ? "Chiffres du trimestre" : "Quarterly figures"}
                </h2>
              </div>
              <p className="max-w-md text-[0.88rem] leading-relaxed text-cocobiches-muted md:text-right">
                {d.stats.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <FadeIn className="lg:col-span-2">
              <StatCard stat={ENGAGEMENTS_STATS[0]} locale={locale} featured />
            </FadeIn>
            {ENGAGEMENTS_STATS.slice(1).map((stat, i) => (
              <FadeIn key={stat.id} delay={0.05 + i * 0.04}>
                <StatCard stat={stat} locale={locale} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-[880px] px-5 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.pillars.eyebrow}</p>
            <h2 className="font-display mt-4 text-[2rem] font-bold tracking-[-0.02em] text-cocobiches-marine md:text-[2.75rem]">
              {d.pillars.title}
            </h2>
          </FadeIn>

          <div className="mt-16 space-y-0">
            {d.pillars.items.map((item, i) => (
              <FadeIn key={item.n} delay={i * 0.04}>
                <div className="relative py-8 md:py-10">
                  {i > 0 ? (
                    <div className="mb-8 h-px bg-cocobiches-marine/10" aria-hidden />
                  ) : null}
                  <span
                    className="pointer-events-none absolute -left-1 top-6 select-none font-display text-[5rem] font-black leading-none text-cocobiches-marine/[0.05] md:text-[7rem]"
                    aria-hidden
                  >
                    {item.n}
                  </span>
                  <div className="relative border-l-[3px] border-cocobiches-vert pl-6 md:pl-8">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-marine/45">
                      {item.n}
                    </p>
                    <h3 className="font-display mt-2 text-[1.65rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[1.02rem] leading-[1.72] text-cocobiches-muted md:text-[1.05rem]">
                      {item.body}
                    </p>
                    <aside className="mt-6 rounded-sm bg-cocobiches-creme-50 px-5 py-4 text-[0.92rem] italic leading-relaxed text-cocobiches-marine/80">
                      {item.proof}
                    </aside>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* KITCHEN SPLIT */}
      <section className="overflow-hidden bg-cocobiches-marine text-cocobiches-creme">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <Image
              src="/hotel-jeu-de-paume/salon.jpg"
              alt={d.kitchen.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-cocobiches-marine/40 lg:bg-gradient-to-l lg:from-cocobiches-marine lg:via-cocobiches-marine/20 lg:to-transparent"
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-24 lg:px-16">
            <FadeIn>
              <p className="cb-eyebrow text-cocobiches-creme/60">{d.kitchen.eyebrow}</p>
              <h2 className="font-display mt-5 text-[2rem] font-bold leading-[1.05] tracking-[-0.02em] md:text-[2.75rem]">
                {d.kitchen.title}
              </h2>
              <p className="mt-6 text-[1.02rem] leading-[1.75] text-cocobiches-creme/85 md:text-lg">
                {d.kitchen.body}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TARGETS + ACTIONS */}
      <section className="bg-cocobiches-creme-50 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-16 px-5 md:grid-cols-2 md:gap-20 md:px-10">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.targets.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.targets.title}
            </h2>
            <ol className="mt-10 space-y-0">
              {d.targets.items.map((item, i) => (
                <li
                  key={item.year}
                  className={cn(
                    "relative flex gap-5 border-l border-cocobiches-marine/15 py-5 pl-6",
                    i === d.targets.items.length - 1 && "pb-0",
                  )}
                >
                  <span
                    className={cn(
                      "absolute -left-[5px] top-6 size-2.5 rounded-full",
                      item.done ? "bg-cocobiches-vert" : "border-2 border-cocobiches-or bg-cocobiches-creme-50",
                    )}
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-2xl font-bold text-cocobiches-marine">{item.year}</p>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-cocobiches-muted">{item.label}</p>
                  </div>
                  {item.done ? (
                    <Check
                      className="ml-auto mt-1 size-5 shrink-0 text-cocobiches-vert"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="cb-eyebrow text-cocobiches-marine">{d.actions.eyebrow}</p>
            <h2 className="font-display mt-4 text-[1.85rem] font-bold text-cocobiches-marine md:text-[2.25rem]">
              {d.actions.title}
            </h2>
            <ul className="mt-10 space-y-3">
              {d.actions.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-sm border border-cocobiches-marine/8 bg-white px-4 py-3.5 shadow-sm"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cocobiches-vert/15 text-cocobiches-vert-600">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-[0.9rem] leading-relaxed text-cocobiches-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900 py-24 text-cocobiches-creme md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgb(196_165_116/0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-display text-[2rem] font-bold md:text-[2.75rem]">{d.transparency.title}</h2>
            <p className="mt-6 text-[1.02rem] leading-[1.75] text-cocobiches-creme/85 md:text-lg">
              {d.transparency.body}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${d.transparency.email}?subject=${encodeURIComponent(
                  isFr ? "Demande rapport RSE Cocobiches" : "Cocobiches CSR report request",
                )}`}
                className="inline-flex rounded-full bg-cocobiches-creme px-8 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-marine shadow-lg transition hover:bg-white"
              >
                {d.cta.contact}
              </a>
              <Link
                href={href(locale, "/journal/hotellerie-independante-cocobiches")}
                className="inline-flex rounded-full border border-white/30 px-8 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
              >
                {d.cta.journal} →
              </Link>
            </div>
            <p className="mt-10 text-[0.82rem] text-cocobiches-creme/60">
              {d.transparency.report} · {d.transparency.methodology} ·{" "}
              <a href={`mailto:${d.transparency.email}`} className="underline-offset-4 hover:underline">
                {d.transparency.email}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}

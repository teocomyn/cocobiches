import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LogoPattern } from "@/components/patterns/logo-pattern";
import {
  getLaMarque,
  historyImages,
  type LaMarqueLocale,
} from "@/lib/i18n/la-marque";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

function RseIcon({ kind }: { kind: "train" | "leaf" | "people" | "home" }) {
  const stroke = "currentColor";
  const className = "h-8 w-8 text-cocobiches-vert";
  switch (kind) {
    case "train":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M4 22v2M8 10h16l2 6v6H8v-6l-2-6Zm8-6v4M6 22h4m12 0h4M10 22a2 2 0 104 0m4 0a2 2 0 104 0"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M16 26c6-4 10-10 10-18-8 0-14 4-18 10-2 8 4 14 8 18v-8h4v8Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "people":
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M10 14a3 3 0 116 0 3 3 0 01-6 0Zm6 4H8a3 3 0 00-3 3v3h14v-3a3 3 0 00-3-3Zm7-8a3 3 0 11-6 0 3 3 0 016 0Zm3 7v6M22 17h4"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
          <path
            d="M6 14L16 6l10 8v12a2 2 0 01-2 2H8a2 2 0 01-2-2V14Z M12 28V18h8v10"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function ValueSeparator() {
  return (
    <div className="flex justify-center py-6" aria-hidden>
      <svg width="28" height="28" viewBox="0 0 72 72" className="text-cocobiches-marine/25">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="18" cy="22" r="5" />
          <circle cx="34" cy="22" r="5" />
          <circle cx="18" cy="38" r="5" />
          <circle cx="34" cy="38" r="5" />
          <rect x="44" y="20" width="18" height="20" rx="2" />
        </g>
      </svg>
    </div>
  );
}

export function LaMarquePage({ locale }: { locale: LaMarqueLocale }) {
  const d = getLaMarque(locale);
  const rseIcons: Array<"train" | "leaf" | "people" | "home"> = [
    "train",
    "leaf",
    "people",
    "home",
  ];

  return (
    <article className="bg-white">
      {/* SECTION 1 · HERO */}
      <section className="relative min-h-[100svh] max-h-[820px] overflow-hidden">
        <Image
          src="/hotel-jeu-de-paume/hotel-facade.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cocobiches-marine/10 to-cocobiches-marine/[0.35]"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 pb-14 md:p-20 md:pb-16">
          <p className="cb-eyebrow text-cocobiches-creme/80">{d.hero.micro}</p>
          <h1 className="font-display mt-6 max-w-[22ch] text-[2.5rem] font-bold leading-[0.95] tracking-[-0.03em] text-cocobiches-creme md:text-[4.5rem] lg:text-[6rem]">
            {d.hero.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg italic leading-relaxed text-cocobiches-creme/85 md:text-xl">
            {d.hero.baseline}
          </p>
          <a
            href="#manifeste"
            className="cb-eyebrow mt-14 inline-flex items-center gap-2 text-cocobiches-creme/55 transition hover:text-cocobiches-creme/90"
          >
            {d.hero.scroll}
            <span className="cb-scroll-hint inline-block" aria-hidden>
              ↓
            </span>
          </a>
        </div>
      </section>

      {/* SECTION 2 · MANIFESTE */}
      <section
        id="manifeste"
        className="relative overflow-hidden bg-cocobiches-creme py-24 md:py-40"
      >
        <LogoPattern className="opacity-[0.04]" />
        <div className="relative mx-auto max-w-[800px] px-6 text-center md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.manifesto.micro}</p>
            <h2 className="font-display mt-10 whitespace-pre-line text-[2.5rem] font-bold leading-[0.98] tracking-[-0.025em] text-cocobiches-marine md:text-[4.5rem] lg:text-[5.5rem]">
              {d.manifesto.headline}
            </h2>
            <p className="mt-14 whitespace-pre-line text-left text-[1.05rem] leading-[1.7] text-cocobiches-marine/85 md:text-[1.15rem]">
              {d.manifesto.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 · VALEURS */}
      <section className="relative bg-white py-24 md:py-40">
        <div className="mx-auto max-w-[880px] px-6 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.values.micro}</p>
            <h2 className="font-display mt-4 text-[2rem] font-bold tracking-[-0.02em] text-cocobiches-marine md:text-[2.75rem]">
              {d.values.title}
            </h2>
            <p className="mt-2 text-lg text-cocobiches-marine/80">{d.values.subtitle}</p>
          </FadeIn>

          <div className="mt-20 space-y-0">
            {d.values.items.map((item, i) => (
              <div key={item.n}>
                {i > 0 ? <ValueSeparator /> : null}
                <FadeIn delay={i * 0.04}>
                  <div className="relative py-6">
                    <span
                      className="pointer-events-none absolute -left-2 top-0 select-none font-display text-[7rem] font-black leading-none text-cocobiches-marine/[0.06] md:text-[11rem]"
                      aria-hidden
                    >
                      {item.n}
                    </span>
                    <div className="relative border-t border-cocobiches-marine/20 pt-8">
                      <h3 className="font-display text-[2rem] font-bold text-cocobiches-marine md:text-[3.5rem]">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-[1.05rem] leading-[1.7] text-cocobiches-marine/90 md:text-[1.15rem]">
                        {item.body}
                      </p>
                      <aside className="mt-8 border-l-[3px] border-cocobiches-marine bg-cocobiches-creme/40 px-6 py-5 text-[0.95rem] italic leading-relaxed text-cocobiches-marine/90 md:text-base">
                        {item.proof}
                      </aside>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 · HISTOIRE */}
      <section className="bg-cocobiches-marine py-24 text-cocobiches-creme md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-creme/70">{d.history.micro}</p>
            <h2 className="font-display mt-6 text-[2.25rem] font-bold leading-[0.98] tracking-[-0.02em] md:text-[3.5rem]">
              {d.history.title}
              <span className="block">{d.history.titleLine2}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.7] text-cocobiches-creme/85 md:text-lg">
              {d.history.intro}
            </p>
          </FadeIn>

          <div className="relative mt-20 border-l border-cocobiches-creme/25 pl-8 md:pl-12">
            {d.history.steps.map((step, i) => (
              <FadeIn key={step.year} delay={i * 0.06}>
                <div className="relative pb-20 last:pb-0">
                  <span className="absolute -left-[9px] top-2 h-3 w-3 rounded-full bg-cocobiches-creme md:-left-[13px]" />
                  <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start md:gap-14">
                    <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-sm bg-cocobiches-marine-800/50">
                      <Image
                        src={historyImages[i] ?? historyImages[0]}
                        alt={step.imageAlt}
                        fill
                        className="object-cover object-center opacity-95"
                        sizes="280px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.08%22/%3E%3C/svg%3E')]"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <p className="font-display text-[3rem] font-bold leading-none text-cocobiches-creme md:text-[5rem]">
                        {step.year}
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-bold md:text-[2rem]">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-[1.02rem] leading-[1.7] text-cocobiches-creme/85 md:text-[1.05rem]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 · CHIFFRES */}
      <section className="bg-cocobiches-creme py-24 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.stats.micro}</p>
            <h2 className="font-display mt-6 text-[2rem] font-bold leading-[0.98] tracking-[-0.02em] text-cocobiches-marine md:text-[3rem]">
              {d.stats.title}
              <span className="block">{d.stats.titleLine2}</span>
            </h2>
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 gap-px bg-cocobiches-marine/15 sm:grid-cols-2 lg:grid-cols-3">
            {d.stats.items.map((item, i) => (
              <FadeIn key={item.value + item.unit} delay={i * 0.03}>
                <div className="h-full bg-cocobiches-creme px-6 py-10 md:px-8">
                  <p className="font-display text-[4rem] font-black leading-none tracking-[-0.03em] text-cocobiches-marine md:text-[6rem]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.95rem] font-medium text-cocobiches-marine/70">
                    {item.unit}
                  </p>
                  <p className="mt-4 text-[0.94rem] leading-[1.6] text-cocobiches-marine/80">
                    {item.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 · ÉQUIPES */}
      <section className="bg-white py-24 md:py-40">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl font-medium italic leading-snug text-cocobiches-marine md:text-4xl">
              {d.teams.quote}
            </p>
            <footer className="cb-eyebrow mt-8 text-cocobiches-marine/60">{d.teams.quoteBy}</footer>
            <div className="cb-hairline mx-auto mt-10 max-w-[80px]" />
          </blockquote>

          <FadeIn className="mt-20">
            <p className="cb-eyebrow text-cocobiches-marine">{d.teams.micro}</p>
            <h2 className="font-display mt-4 text-[2rem] font-bold tracking-[-0.02em] text-cocobiches-marine md:text-[2.75rem]">
              {d.teams.title}
              <span className="block">{d.teams.titleLine2}</span>
            </h2>
            <p className="mt-8 max-w-3xl whitespace-pre-line text-[1.05rem] leading-[1.75] text-cocobiches-muted md:text-lg">
              {d.teams.intro}
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {d.teams.people.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.05}>
                <article className="group cb-card overflow-hidden rounded-sm bg-white shadow-card ring-1 ring-cocobiches-marine/10">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cocobiches-marine/15 to-cocobiches-creme">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-5xl font-bold tracking-tight text-cocobiches-marine/25">
                        {person.initials}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-cocobiches-border bg-white p-6">
                    <h3 className="text-lg font-bold text-cocobiches-marine">{person.name}</h3>
                    <p className="mt-1 text-sm text-cocobiches-marine/70">{person.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-cocobiches-muted">{person.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 · RSE */}
      <section className="bg-cocobiches-marine py-24 text-cocobiches-creme md:py-40">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-creme/70">{d.rse.micro}</p>
            <h2 className="font-display mt-6 text-[2rem] font-bold leading-[0.98] md:text-[2.75rem]">
              {d.rse.title}
              <span className="block">{d.rse.titleLine2}</span>
            </h2>
            <p className="mt-8 max-w-3xl text-[1.05rem] leading-[1.75] text-cocobiches-creme/85">
              {d.rse.intro}
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
            {d.rse.items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div>
                  <RseIcon kind={rseIcons[i] ?? "home"} />
                  <h3 className="mt-5 font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-[1.02rem] leading-[1.65] text-cocobiches-creme/85">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-16 text-center text-sm italic text-cocobiches-creme/70">
            {d.rse.footnote}
          </p>
        </div>
      </section>

      {/* SECTION 8 · COLLECTION */}
      <section className="bg-cocobiches-creme py-24 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.collection.micro}</p>
            <h2 className="font-display mt-6 text-[2rem] font-bold leading-[0.98] tracking-[-0.02em] text-cocobiches-marine md:text-[3rem]">
              {d.collection.title}
              <span className="block">{d.collection.titleLine2}</span>
              <span className="block">{d.collection.titleLine3}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cocobiches-marine/85">
              {d.collection.intro}
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7">
            {d.collection.houses.map((house, i) => {
              const isInternal = "internal" in house && house.internal;
              const url = isInternal
                ? href(locale, house.url as string)
                : (house.url as string);
              const Inner = (
                <>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={house.image}
                      alt=""
                      fill
                      className={cn(
                        "object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
                        house.imagePos,
                      )}
                      sizes="(min-width: 768px) 33vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="cb-eyebrow text-cocobiches-creme/90">{house.pretitle}</p>
                      <p className="mt-3 font-display text-2xl font-bold text-cocobiches-creme">
                        {house.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col bg-white p-8">
                    <p className="text-lg italic text-cocobiches-marine/90">{house.baseline}</p>
                    <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-cocobiches-muted">
                      {house.desc}
                    </p>
                    <span className="cb-eyebrow mt-6 text-cocobiches-marine">
                      {house.cta} →
                    </span>
                  </div>
                </>
              );
              return (
                <FadeIn key={house.name} delay={i * 0.08}>
                  <article className="group cb-card flex h-full flex-col overflow-hidden rounded-sm shadow-card ring-1 ring-cocobiches-marine/10 hover:-translate-y-1.5 hover:shadow-lift">
                    {isInternal ? (
                      <Link href={url} className="flex h-full flex-col">
                        {Inner}
                      </Link>
                    ) : (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-full flex-col"
                      >
                        {Inner}
                      </a>
                    )}
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9 · SIGNATURE */}
      <section className="relative overflow-hidden bg-cocobiches-marine py-28 text-center md:py-44">
        <LogoPattern className="opacity-[0.07] [&_svg]:text-cocobiches-creme" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h2 className="font-display text-[3rem] font-bold leading-[0.95] tracking-[-0.04em] text-cocobiches-creme md:text-[6rem] lg:text-[7.5rem]">
            {d.signature.line1}
          </h2>
          <p className="mt-10 text-xl italic text-cocobiches-creme/80 md:text-2xl">
            {d.signature.line2}
          </p>
        </div>
      </section>

      {/* SECTION 10 · CTA */}
      <section className="bg-cocobiches-creme py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <FadeIn>
            <p className="cb-eyebrow text-cocobiches-marine">{d.cta.micro}</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-cocobiches-marine md:text-4xl">
              {d.cta.title}
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {d.cta.blocks.map((block, i) => {
              const linkHref =
                "hash" in block && block.hash
                  ? `${href(locale, "/")}${block.hash}`
                  : href(locale, (block as { path: string }).path);
              return (
                <FadeIn key={block.title} delay={i * 0.06}>
                  <Link
                    href={linkHref}
                    className="cb-card flex h-full flex-col rounded-md border border-transparent bg-white p-10 shadow-sm ring-1 ring-cocobiches-marine/10 transition hover:border-cocobiches-marine/25 hover:shadow-card"
                  >
                    <h3 className="font-display text-xl font-bold text-cocobiches-marine">
                      {block.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.94rem] leading-relaxed text-cocobiches-muted">
                      {block.desc}
                    </p>
                    <span className="cb-eyebrow mt-8 text-cocobiches-marine">{block.linkLabel}</span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}

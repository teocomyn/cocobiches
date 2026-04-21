import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";

const CARD_META = [
  { cat: "Guide · Versailles", read: "7 min" },
  { cat: "Séminaires", read: "5 min" },
  { cat: "Adresses", read: "4 min" },
];

export function JournalPreview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const h = dict.home;
  const posts = dict.blog.posts;
  const items = [
    { ...posts["1"], ...CARD_META[0] },
    { ...posts["2"], ...CARD_META[1] },
    { ...posts["3"], ...CARD_META[2] },
  ];

  return (
    <section className="relative overflow-hidden bg-cocobiches-creme-50 py-24 md:py-32">
      <div className="relative mx-auto max-w-[1240px] px-5 md:px-10">
        <FadeIn>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-cocobiches-or-muted">
                <span className="h-px w-10 bg-current opacity-70" aria-hidden />
                <p className="cb-eyebrow">{h.journalEyebrow}</p>
              </div>
              <h2 className="font-display mt-4 text-[2.05rem] font-semibold leading-[1.12] tracking-[-0.022em] text-cocobiches-marine md:text-[2.85rem]">
                {h.journalTitle}
              </h2>
            </div>
            <p className="max-w-md text-[0.98rem] leading-[1.7] text-cocobiches-muted md:text-right">
              {h.journalLead}
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {items.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <article className="cb-card group flex h-full flex-col rounded-sm border border-cocobiches-marine/10 bg-white p-7 shadow-card transition hover:border-cocobiches-marine/25 hover:shadow-lift md:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-or-muted">
                    {p.cat}
                  </p>
                  <p className="text-[0.72rem] text-cocobiches-muted">· {p.read}</p>
                </div>
                <h3 className="font-display mt-5 text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.018em] text-cocobiches-marine md:text-[1.45rem]">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.93rem] leading-[1.65] text-cocobiches-muted">
                  {p.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-marine">
                  <span className="underline-offset-4 group-hover:underline">
                    {dict.blog.read}
                  </span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 flex justify-center md:mt-14">
          <Link
            href={href(locale, "/blog")}
            className="inline-flex items-center gap-3 rounded-full border border-cocobiches-marine/25 px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine transition hover:border-cocobiches-marine hover:bg-cocobiches-marine hover:text-white"
          >
            <span>{h.journalCta}</span>
            <span aria-hidden>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

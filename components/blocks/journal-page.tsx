"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { JournalNewsletterEncart } from "@/components/blocks/journal-newsletter-encart";
import { FadeIn } from "@/components/motion/fade-in";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import { getJournalPosts } from "@/lib/journal/posts";
import type { JournalArticleMeta } from "@/lib/journal/types";
import { categoryLabel, formatJournalDate, sortByDateDesc } from "@/lib/journal/utils";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

type Cat = "all" | JournalArticleMeta["category"];

export function JournalPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const j = dict.journalPage;
  const posts = useMemo(() => sortByDateDesc(getJournalPosts()), []);
  const [cat, setCat] = useState<Cat>("all");

  const filtered = useMemo(() => {
    if (cat === "all") return posts;
    return posts.filter((p) => p.category === cat);
  }, [posts, cat]);

  const featured = useMemo(() => {
    const f = filtered.find((p) => p.featured);
    return f ?? filtered[0];
  }, [filtered]);

  const rest = useMemo(
    () => filtered.filter((p) => p.slug !== featured?.slug),
    [filtered, featured],
  );

  const firstChunk = rest.slice(0, 4);
  const secondChunk = rest.slice(4);

  const filters: { id: Cat; label: string }[] = [
    { id: "all", label: j.filterAll },
    { id: "actualites", label: j.filterActualites },
    { id: "guide", label: j.filterGuide },
    { id: "coulisses", label: j.filterCoulisses },
    { id: "gastronomie", label: j.filterGastronomie },
    { id: "seminaires", label: j.filterSeminaires },
    { id: "saisonnalite", label: j.filterSaison },
  ];

  function title(p: JournalArticleMeta) {
    return locale === "fr" ? p.titleFr : p.titleEn;
  }
  function excerpt(p: JournalArticleMeta) {
    return locale === "fr" ? p.excerptFr : p.excerptEn;
  }

  return (
    <div className="bg-cocobiches-creme-50">
      <header className="relative overflow-hidden border-b border-cocobiches-border/80 bg-cocobiches-creme px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cocobiches-marine/55">
            {j.heroEyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-[18ch] text-[2.75rem] font-bold leading-[1.05] tracking-[-0.02em] text-cocobiches-marine md:text-[4.5rem] lg:text-[5.5rem]">
            {j.heroTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.65] text-cocobiches-muted">
            {j.heroLead}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-[120px] md:pb-[120px]">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setCat(f.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                cat === f.id
                  ? "border-cocobiches-marine bg-cocobiches-marine text-cocobiches-creme"
                  : "border-cocobiches-marine/15 bg-white text-cocobiches-marine/75 hover:border-cocobiches-marine/40",
              )}
              style={{ transitionTimingFunction: ease }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {featured ? (
          <FadeIn className="mt-14 md:mt-20">
            <Link
              href={href(locale, `/journal/${featured.slug}`)}
              className="group block overflow-hidden rounded-2xl bg-white shadow-card"
            >
              {/* Mobile : image + texte empilés */}
              <div className="md:hidden">
                <p className="px-1 pb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/50">
                  {j.featuredLabel}
                </p>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={featured.heroImage}
                    alt={title(featured)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ transitionTimingFunction: ease }}
                    sizes="100vw"
                    priority
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/50">
                    {categoryLabel(featured.category, j)} · {formatJournalDate(featured.dateISO, locale)}
                  </p>
                  <h2 className="font-display mt-3 text-[1.65rem] font-bold leading-[1.12] tracking-[-0.02em] text-cocobiches-marine">
                    {title(featured)}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-cocobiches-muted">
                    {excerpt(featured)}
                  </p>
                  <span className="mt-6 inline-flex text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine">
                    {j.readArticle} →
                  </span>
                </div>
              </div>

              {/* Desktop : overlay sur image */}
              <div className="relative hidden aspect-[21/9] w-full overflow-hidden md:block">
                <Image
                  src={featured.heroImage}
                  alt={title(featured)}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ transitionTimingFunction: ease }}
                  sizes="1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine/85 via-cocobiches-marine/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12 text-cocobiches-creme">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-creme/75">
                    {j.featuredLabel} · {categoryLabel(featured.category, j)}
                  </span>
                  <p className="mt-3 text-[0.75rem] text-cocobiches-creme/80">
                    {formatJournalDate(featured.dateISO, locale)}
                  </p>
                  <h2 className="font-display mt-3 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.02em] lg:text-5xl">
                    {title(featured)}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-cocobiches-creme/90">
                    {excerpt(featured)}
                  </p>
                  <span className="mt-6 inline-flex text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-creme">
                    {j.readArticle} →
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ) : null}

        {firstChunk.length > 0 ? (
          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
            {firstChunk.map((post, i) => (
              <FadeIn
                key={post.slug}
                className={cn(
                  i === 0 && "md:col-span-7",
                  i === 1 && "md:col-span-5",
                  i === 2 && "md:col-span-6",
                  i === 3 && "md:col-span-6",
                )}
                delay={i * 0.04}
              >
                <ArticleCard locale={locale} dict={dict} post={post} />
              </FadeIn>
            ))}
          </div>
        ) : null}

        <div className="mt-16 md:mt-[120px]">
          <JournalNewsletterEncart
            dict={dict}
            title={j.newsletterEncartTitle}
            lead={j.newsletterEncartLead}
          />
        </div>

        {secondChunk.length > 0 ? (
          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
            {secondChunk.map((post, i) => (
              <FadeIn
                key={post.slug}
                className={cn(
                  i === 0 && "md:col-span-7",
                  i === 1 && "md:col-span-5",
                  i === 2 && "md:col-span-6",
                  i === 3 && "md:col-span-6",
                  i === 4 && "md:col-span-12 lg:col-span-8 lg:col-start-3",
                )}
                delay={i * 0.04}
              >
                <ArticleCard locale={locale} dict={dict} post={post} />
              </FadeIn>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ArticleCard({
  locale,
  dict,
  post,
}: {
  locale: Locale;
  dict: Dictionary;
  post: JournalArticleMeta;
}) {
  const j = dict.journalPage;
  const title = locale === "fr" ? post.titleFr : post.titleEn;
  const excerpt = locale === "fr" ? post.excerptFr : post.excerptEn;

  return (
    <Link
      href={href(locale, `/journal/${post.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cocobiches-border/90 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lift"
      style={{ transitionTimingFunction: ease }}
    >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={post.heroImage}
          alt={locale === "fr" ? post.titleFr : post.titleEn}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ transitionTimingFunction: ease }}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/50">
          {categoryLabel(post.category, j)} · {formatJournalDate(post.dateISO, locale)}
        </p>
        <h3 className="font-display mt-3 text-xl font-bold leading-snug tracking-[-0.02em] text-cocobiches-marine md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cocobiches-marine/80">{excerpt}</p>
        <span className="mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine">
          {j.readArticle} →
        </span>
      </div>
    </Link>
  );
}

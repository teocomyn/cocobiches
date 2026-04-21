import Image from "next/image";
import Link from "next/link";
import { JournalNewsletterEncart } from "@/components/blocks/journal-newsletter-encart";
import { FadeIn } from "@/components/motion/fade-in";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Locale } from "@/lib/i18n-config";
import type { ArticleBlock } from "@/lib/journal/types";
import type { JournalArticleMeta } from "@/lib/journal/types";
import { categoryLabel, formatJournalDate } from "@/lib/journal/utils";
import { href } from "@/lib/paths";
import { cn } from "@/lib/utils";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function ArticleBody({
  blocks,
  locale,
  post,
  dict,
}: {
  blocks: ArticleBlock[];
  locale: Locale;
  post: JournalArticleMeta;
  dict: Dictionary;
}) {
  const j = dict.journalPage;
  const images = post.inlineImages ?? [];
  let imgIdx = 0;
  let cumulative = 0;
  let nextThreshold = 200;
  const insertNewsletterAfterIndex = Math.max(0, Math.ceil(blocks.length / 2) - 1);

  const pushFigure = (nodes: React.ReactNode[]) => {
    const img = images[imgIdx];
    if (!img) return;
    const k = imgIdx;
    imgIdx += 1;
    nextThreshold += 200;
    nodes.push(
      <figure key={`fig-${k}`} className="my-12 overflow-hidden rounded-xl">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={img.src}
            alt={locale === "fr" ? img.altFr : img.altEn}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 680px"
          />
        </div>
      </figure>,
    );
  };

  const flushFigures = (nodes: React.ReactNode[]) => {
    while (cumulative >= nextThreshold && imgIdx < images.length) {
      pushFigure(nodes);
    }
  };

  const nodes: React.ReactNode[] = [];

  blocks.forEach((block, i) => {
    if (block.kind === "lead") {
      cumulative += wordCount(block.text);
      nodes.push(
        <p
          key={`lead-${i}`}
          className="font-display text-[1.15rem] font-medium leading-[1.65] text-cocobiches-marine md:text-[1.22rem]"
        >
          {block.text}
        </p>,
      );
      flushFigures(nodes);
    } else if (block.kind === "h2") {
      nodes.push(
        <h2
          key={`h2-${i}`}
          className="font-display mt-14 scroll-mt-28 text-2xl font-bold tracking-[-0.02em] text-cocobiches-marine first:mt-0 md:text-[1.65rem]"
        >
          {block.text}
        </h2>,
      );
    } else {
      cumulative += wordCount(block.text);
      nodes.push(
        <p key={`p-${i}`} className="mt-5 text-[1.05rem] leading-[1.75] text-cocobiches-muted md:text-[1.1875rem]">
          {block.text}
        </p>,
      );
      flushFigures(nodes);
    }

    if (i === insertNewsletterAfterIndex) {
      nodes.push(
        <div key="nl" className="my-16 md:my-24">
          <JournalNewsletterEncart
            dict={dict}
            title={j.newsletterEncartTitle}
            lead={j.newsletterEncartLead}
          />
        </div>,
      );
    }
  });

  return <div className="mt-12">{nodes}</div>;
}

export function ArticleTemplate({
  locale,
  dict,
  post,
  blocks,
}: {
  locale: Locale;
  dict: Dictionary;
  post: JournalArticleMeta;
  blocks: ArticleBlock[];
}) {
  const j = dict.journalPage;
  const title = locale === "fr" ? post.titleFr : post.titleEn;

  return (
    <article className="bg-cocobiches-creme-50">
      <header className="relative h-[40vh] w-full overflow-hidden md:h-[60vh]">
        <Image
          src={post.heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine/80 via-cocobiches-marine/25 to-transparent" />
      </header>

      <div className="mx-auto max-w-[680px] px-5 pb-8 pt-10 md:px-6 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={href(locale, "/journal")} className="transition hover:text-cocobiches-marine">
                {j.breadcrumbJournal}
              </Link>
            </li>
            <li aria-hidden className="text-cocobiches-marine/35">
              /
            </li>
            <li className="text-cocobiches-marine/75">{categoryLabel(post.category, j)}</li>
            <li aria-hidden className="text-cocobiches-marine/35">
              /
            </li>
            <li className="max-w-[min(100%,28rem)] text-cocobiches-marine">{title}</li>
          </ol>
        </nav>

        <h1 className="font-display mt-8 text-[2.35rem] font-bold leading-[1.05] tracking-[-0.02em] text-cocobiches-marine md:text-[3.25rem] lg:text-[4.25rem]">
          {title}
        </h1>
        <p className="mt-6 text-[0.92rem] text-cocobiches-muted">
          {j.byline} · {post.readingMinutes} {j.minRead} · {formatJournalDate(post.dateISO, locale)}
        </p>

        <ArticleBody blocks={blocks} locale={locale} post={post} dict={dict} />
      </div>
    </article>
  );
}

export function ArticleRelated({
  locale,
  dict,
  posts,
}: {
  locale: Locale;
  dict: Dictionary;
  posts: JournalArticleMeta[];
}) {
  const j = dict.journalPage;

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-cocobiches-border/80 bg-cocobiches-creme-50 px-5 py-16 md:px-8 md:py-[120px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-cocobiches-marine md:text-3xl">
            {j.related}
          </h2>
          <Link
            href={href(locale, "/journal")}
            className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-cocobiches-marine/70 transition hover:text-cocobiches-marine"
          >
            {j.breadcrumbJournal} →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {posts.map((post, i) => {
            const t = locale === "fr" ? post.titleFr : post.titleEn;
            const excerpt = locale === "fr" ? post.excerptFr : post.excerptEn;
            return (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <Link
                  href={href(locale, `/journal/${post.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cocobiches-border/90 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lift"
                  style={{ transitionTimingFunction: ease }}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={t}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ transitionTimingFunction: ease }}
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cocobiches-marine/50">
                      {categoryLabel(post.category, j)} · {formatJournalDate(post.dateISO, locale)}
                    </p>
                    <h3 className="font-display mt-3 text-lg font-bold leading-snug text-cocobiches-marine md:text-xl">
                      {t}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cocobiches-marine/80">{excerpt}</p>
                    <span className="mt-5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-marine">
                      {j.readArticle} →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ArticleCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const j = dict.journalPage;
  return (
    <div className="bg-cocobiches-creme-50 px-5 pb-20 pt-0 md:px-8 md:pb-28">
      <div className="mx-auto max-w-[680px] text-center">
        <Link
          href={href(locale, "/hotel-jeu-de-paume")}
          className={cn(
            "inline-flex rounded-full bg-cocobiches-marine px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-cocobiches-creme transition hover:bg-cocobiches-marine-800",
          )}
        >
          {j.ctaBook}
        </Link>
      </div>
    </div>
  );
}

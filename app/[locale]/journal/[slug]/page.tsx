import {
  ArticleCta,
  ArticleRelated,
  ArticleTemplate,
} from "@/components/blocks/article-template";
import { getArticleBlocks } from "@/lib/journal/get-blocks";
import { getArticleMeta, getJournalPosts } from "@/lib/journal/posts";
import { getRelatedArticles } from "@/lib/journal/related";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocaleFromParams } from "@/lib/locale-params";
import { locales } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.cocobiches.fr";

export function generateStaticParams() {
  const slugs = getJournalPosts().map((p) => p.slug);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }> | undefined;
}): Promise<Metadata> {
  const p = await params;
  if (!p?.slug) return {};
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const post = getArticleMeta(p.slug);
  if (!post) return {};
  const title = locale === "fr" ? post.titleFr : post.titleEn;
  const description = locale === "fr" ? post.descriptionFr : post.descriptionEn;
  const path = href(locale, `/journal/${post.slug}`);
  const ogTitle = `${title} · Cocobiches`;

  return {
    title: ogTitle,
    description,
    alternates: {
      canonical: path,
      languages: {
        fr: `/fr/journal/${post.slug}`,
        en: `/en/journal/${post.slug}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "article",
      publishedTime: post.dateISO,
      images: [{ url: post.heroImage, width: 1600, height: 900, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [post.heroImage],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }> | undefined;
}) {
  const p = await params;
  if (!p?.slug) notFound();
  const locale = await getLocaleFromParams(params);
  if (!locale) notFound();
  const post = getArticleMeta(p.slug);
  if (!post) notFound();

  const dict = await getDictionary(locale);
  const blocks = getArticleBlocks(post.slug, locale);
  const related = getRelatedArticles(post.slug, 3);

  const title = locale === "fr" ? post.titleFr : post.titleEn;
  const description = locale === "fr" ? post.descriptionFr : post.descriptionEn;
  const url = `${base}${href(locale, `/journal/${post.slug}`)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [post.heroImage],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "Cocobiches",
    },
    publisher: {
      "@type": "Organization",
      name: "Cocobiches",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleTemplate locale={locale} dict={dict} post={post} blocks={blocks} />
      <ArticleRelated locale={locale} dict={dict} posts={related} />
      <ArticleCta locale={locale} dict={dict} />
    </>
  );
}

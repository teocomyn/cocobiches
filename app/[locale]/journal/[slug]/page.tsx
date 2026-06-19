import {
  ArticleCta,
  ArticleRelated,
  ArticleTemplate,
} from "@/components/blocks/article-template";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getArticleBlocks } from "@/lib/journal/get-blocks";
import { getArticleMeta, getJournalPosts } from "@/lib/journal/posts";
import { getRelatedArticles } from "@/lib/journal/related";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocaleFromParams } from "@/lib/locale-params";
import { locales } from "@/lib/i18n-config";
import { breadcrumbList, jsonLdGraph } from "@/lib/json-ld";
import { buildArticleMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site-url";
import { href } from "@/lib/paths";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

  return buildArticleMetadata({
    locale,
    path: `/journal/${post.slug}`,
    title,
    description,
    publishedTime: post.dateISO,
    image: post.heroImage,
    imageAlt: title,
  });
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
  const url = absoluteUrl(href(locale, `/journal/${post.slug}`));
  const isFr = locale === "fr";

  const jsonLd = jsonLdGraph(
    {
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
    },
    breadcrumbList(locale, [
      { name: isFr ? "Accueil" : "Home", path: "" },
      { name: "Journal", path: "/journal" },
      { name: title, path: `/journal/${post.slug}` },
    ]),
  );

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <ArticleTemplate locale={locale} dict={dict} post={post} blocks={blocks} />
      <ArticleRelated locale={locale} dict={dict} posts={related} />
      <ArticleCta locale={locale} dict={dict} />
    </>
  );
}

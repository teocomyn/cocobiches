import {
  ArticleCta,
  ArticleRelated,
  ArticleTemplate,
} from "@/components/blocks/article-template";
import { SeminaireDevisCta } from "@/components/seminaire/seminaire-devis-embed";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { buildJournalArticleJsonLd } from "@/lib/journal/article-json-ld";
import { getArticleBlocks } from "@/lib/journal/get-blocks";
import { getArticleMeta, getJournalPosts } from "@/lib/journal/posts";
import { getRelatedArticles } from "@/lib/journal/related";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocaleFromParams } from "@/lib/locale-params";
import { locales } from "@/lib/i18n-config";
import { buildArticleMetadata } from "@/lib/metadata";
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
  const seoTitle =
    locale === "fr" ? post.metaTitleFr : post.metaTitleEn;
  const ogTitle = locale === "fr" ? post.ogTitleFr : post.ogTitleEn;

  return buildArticleMetadata({
    locale,
    path: `/journal/${post.slug}`,
    title,
    description,
    publishedTime: post.dateISO,
    image: post.heroImage,
    imageAlt: title,
    seoTitle,
    ogTitle,
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
  const jsonLd = buildJournalArticleJsonLd(post, locale, title, description);

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <ArticleTemplate locale={locale} dict={dict} post={post} blocks={blocks} />
      {post.slug === "seminaire-versailles-jeu-de-paume" ? (
        <div className="bg-cocobiches-creme-50 px-5 pb-8 md:px-8">
          <div className="mx-auto flex max-w-[680px] justify-center">
            <SeminaireDevisCta locale={locale} />
          </div>
        </div>
      ) : null}
      <ArticleRelated locale={locale} dict={dict} posts={related} />
      <ArticleCta locale={locale} dict={dict} />
    </>
  );
}

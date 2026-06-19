import { LegalDocumentPageView } from "@/components/brand/legal-document-page";
import { getLegalPageContent } from "@/lib/i18n/legal-page";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import { OG_IMAGES } from "@/lib/og-images";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const content = getLegalPageContent(locale, "legal");
  return buildPageMetadata({
    locale,
    path: "/mentions-legales",
    title: content.heroTitle,
    description: content.heroLead,
    ogImagePath: OG_IMAGES.legal,
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const content = getLegalPageContent(locale, "legal");

  return <LegalDocumentPageView locale={locale} content={content} />;
}

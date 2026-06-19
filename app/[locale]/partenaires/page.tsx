import { PartenairesPageView } from "@/components/brand/partenaires-page";
import { getDictionary } from "@/lib/get-dictionary";
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
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/partenaires",
    title: dict.meta.partners.title,
    description: dict.meta.partners.description,
    ogImagePath: OG_IMAGES.partenaires,
  });
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;

  return <PartenairesPageView locale={locale} />;
}

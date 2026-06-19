import { PressePageView } from "@/components/brand/presse-page";
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
    path: "/presse",
    title: dict.meta.press.title,
    description: dict.meta.press.description,
    ogImagePath: OG_IMAGES.presse,
  });
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;

  return <PressePageView locale={locale} />;
}

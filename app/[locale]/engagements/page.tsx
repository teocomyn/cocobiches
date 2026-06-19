import { EngagementsPageView } from "@/components/brand/engagements-page";
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
    path: "/engagements",
    title: dict.meta.commitments.title,
    description: dict.meta.commitments.description,
    ogImagePath: OG_IMAGES.engagements,
  });
}

export default async function CommitmentsPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;

  return <EngagementsPageView locale={locale} />;
}

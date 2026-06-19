import { JournalPage } from "@/components/blocks/journal-page";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { getDictionary } from "@/lib/get-dictionary";
import { blogSchema, breadcrumbList, jsonLdGraph } from "@/lib/json-ld";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);
  const m = dict.meta.journal;
  return buildPageMetadata({
    locale,
    path: "/journal",
    title: m.title,
    description: m.description,
  });
}

export default async function JournalIndexPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);
  const m = dict.meta.journal;
  const isFr = locale === "fr";
  const jsonLd = jsonLdGraph(
    blogSchema(locale, m.title, m.description),
    breadcrumbList(locale, [
      { name: isFr ? "Accueil" : "Home", path: "" },
      { name: isFr ? "Journal" : "Journal", path: "/journal" },
    ]),
  );

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <JournalPage locale={locale} dict={dict} />
    </>
  );
}

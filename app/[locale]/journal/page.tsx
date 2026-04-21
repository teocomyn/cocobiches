import { JournalPage } from "@/components/blocks/journal-page";
import { getDictionary } from "@/lib/get-dictionary";
import { getLocaleFromParams } from "@/lib/locale-params";
import { href } from "@/lib/paths";
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
  const path = href(locale, "/journal");
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: path,
      languages: { fr: "/fr/journal", en: "/en/journal" },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

export default async function JournalIndexPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);

  return <JournalPage locale={locale} dict={dict} />;
}

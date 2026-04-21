import { PageIntro } from "@/components/pages/page-intro";
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
  return {
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    alternates: {
      canonical: href(locale, "/politique-confidentialite"),
      languages: {
        fr: "/fr/politique-confidentialite",
        en: "/en/politique-confidentialite",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro title={dict.privacy.title} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <p className="leading-relaxed text-cocobiches-muted">{dict.privacy.body}</p>
      </div>
    </>
  );
}

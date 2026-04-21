import { PageIntro } from "@/components/pages/page-intro";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    alternates: {
      canonical: href(raw, "/politique-confidentialite"),
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
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const dict = await getDictionary(raw);

  return (
    <>
      <PageIntro title={dict.privacy.title} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <p className="leading-relaxed text-cocobiches-muted">{dict.privacy.body}</p>
      </div>
    </>
  );
}

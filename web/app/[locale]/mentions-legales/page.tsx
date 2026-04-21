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
    title: dict.meta.legal.title,
    description: dict.meta.legal.description,
    alternates: {
      canonical: href(raw, "/mentions-legales"),
      languages: { fr: "/fr/mentions-legales", en: "/en/mentions-legales" },
    },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const dict = await getDictionary(raw);

  return (
    <>
      <PageIntro title={dict.legal.title} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <p className="leading-relaxed text-cocobiches-muted">{dict.legal.body}</p>
      </div>
    </>
  );
}

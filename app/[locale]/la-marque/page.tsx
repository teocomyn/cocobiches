import { PageIntro } from "@/components/pages/page-intro";
import { FadeIn } from "@/components/motion/fade-in";
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
    title: dict.meta.brand.title,
    description: dict.meta.brand.description,
    alternates: {
      canonical: href(locale, "/la-marque"),
      languages: { fr: "/fr/la-marque", en: "/en/la-marque" },
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);
  const b = dict.brand;
  const values = [b.v1, b.v2, b.v3, b.v4];

  return (
    <>
      <PageIntro title={b.title} lead={b.lead} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <FadeIn>
          <h2 className="text-2xl font-bold text-cocobiches-marine">{b.valuesTitle}</h2>
        </FadeIn>
        <ul className="mt-8 space-y-4">
          {values.map((v, i) => (
            <FadeIn key={v} delay={i * 0.05}>
              <li className="rounded-2xl border border-cocobiches-border bg-white p-5 text-cocobiches-muted shadow-sm">
                {v}
              </li>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-cocobiches-marine">{b.teamTitle}</h2>
          <p className="leading-relaxed text-cocobiches-muted">{b.teamBody}</p>
        </FadeIn>
      </div>
    </>
  );
}

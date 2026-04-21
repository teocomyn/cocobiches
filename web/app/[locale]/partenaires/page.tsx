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
    title: dict.meta.partners.title,
    description: dict.meta.partners.description,
    alternates: {
      canonical: href(locale, "/partenaires"),
      languages: { fr: "/fr/partenaires", en: "/en/partenaires" },
    },
  };
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);
  const p = dict.partners;
  const rows = [
    p.chain,
    p.amadeus,
    p.galileo,
    p.sabre,
    p.worldspan,
  ];

  return (
    <>
      <PageIntro title={p.title} lead={p.lead} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <FadeIn>
          <h2 className="text-xl font-bold text-cocobiches-marine">{p.gdsTitle}</h2>
        </FadeIn>
        <ul className="mt-6 space-y-2">
          {rows.map((line, i) => (
            <FadeIn key={line} delay={i * 0.04}>
              <li className="rounded-xl border border-cocobiches-border bg-white px-4 py-3 font-mono text-sm text-cocobiches-marine">
                {line}
              </li>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-10 text-sm text-cocobiches-muted">
          <a className="font-semibold text-cocobiches-marine underline-offset-4 hover:underline" href={`mailto:${p.commercial}`}>
            {p.commercial}
          </a>
        </FadeIn>
      </div>
    </>
  );
}

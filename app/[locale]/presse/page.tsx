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
    title: dict.meta.press.title,
    description: dict.meta.press.description,
    alternates: {
      canonical: href(locale, "/presse"),
      languages: { fr: "/fr/presse", en: "/en/presse" },
    },
  };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const dict = await getDictionary(locale);
  const p = dict.press;
  const items = [
    p.downloadPressKit,
    p.downloadLogos,
    p.downloadPhotos,
  ];

  return (
    <>
      <PageIntro title={p.title} lead={p.lead} />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <ul className="space-y-3">
          {items.map((label, i) => (
            <FadeIn key={label} delay={i * 0.05}>
              <li>
                <button
                  type="button"
                  className="w-full rounded-2xl border border-dashed border-cocobiches-marine/35 bg-cocobiches-creme-50 px-5 py-4 text-left text-sm font-semibold text-cocobiches-marine transition hover:border-cocobiches-marine hover:bg-white"
                >
                  {label} — PDF / ZIP (à connecter au média)
                </button>
              </li>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-10 text-sm text-cocobiches-muted">{p.contact}</FadeIn>
      </div>
    </>
  );
}

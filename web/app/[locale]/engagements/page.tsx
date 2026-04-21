import { PageIntro } from "@/components/pages/page-intro";
import { FadeIn } from "@/components/motion/fade-in";
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
    title: dict.meta.commitments.title,
    description: dict.meta.commitments.description,
    alternates: {
      canonical: href(raw, "/engagements"),
      languages: { fr: "/fr/engagements", en: "/en/engagements" },
    },
  };
}

export default async function CommitmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const dict = await getDictionary(raw);
  const c = dict.commitments;
  const stats = [
    { label: c.stats.local, value: "62%" },
    { label: c.stats.waste, value: "12 t" },
    { label: c.stats.team, value: "48" },
    { label: c.stats.transport, value: "41%" },
  ];

  return (
    <>
      <PageIntro title={c.title} lead={c.lead} />
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="rounded-3xl border border-cocobiches-border bg-white p-6 text-center shadow-card">
                <p className="text-3xl font-bold text-cocobiches-marine">{s.value}</p>
                <p className="mt-2 text-sm text-cocobiches-muted">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-sm text-cocobiches-muted">{c.note}</FadeIn>
      </div>
    </>
  );
}

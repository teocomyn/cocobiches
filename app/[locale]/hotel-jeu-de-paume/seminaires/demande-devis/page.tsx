import { HjpDevisForm } from "@/components/hotel-jeu-de-paume/hjp-devis-form";
import { FadeIn } from "@/components/motion/fade-in";
import { getLocaleFromParams } from "@/lib/locale-params";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

const PATH = "/hotel-jeu-de-paume/seminaires/demande-devis";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  if (!locale) return {};
  const isFr = locale === "fr";
  return buildPageMetadata({
    locale,
    path: PATH,
    title: isFr
      ? "Demande de devis séminaire · Hôtel du Jeu de Paume"
      : "Seminar quote request · Hôtel du Jeu de Paume",
    description: isFr
      ? "Demandez un devis pour votre séminaire ou événement à l'Hôtel du Jeu de Paume · salle modulable, yourte, hébergement sur place."
      : "Request a quote for your seminar or event at Hôtel du Jeu de Paume · modular room, yurt, on-site accommodation.",
  });
}

export default async function HotelJdpDevisPage({
  params,
}: {
  params: Promise<{ locale: string }> | undefined;
}) {
  const locale = await getLocaleFromParams(params);
  if (!locale) return null;
  const isFr = locale === "fr";

  return (
    <section className="bg-cocobiches-creme-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-hjp-teal-dark">
            {isFr ? "Séminaires & événements" : "Seminars & events"}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight text-cocobiches-marine md:text-5xl">
            {isFr ? "Demande de devis" : "Quote request"}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cocobiches-muted md:text-lg">
            {isFr
              ? "Décrivez votre projet · notre équipe événements vous répond sous 48 h ouvrées avec une proposition sur mesure."
              : "Tell us about your project · our events team will reply within two business days with a tailored proposal."}
          </p>
        </FadeIn>
        <FadeIn delay={0.05} className="mt-12">
          <HjpDevisForm locale={locale} />
        </FadeIn>
      </div>
    </section>
  );
}

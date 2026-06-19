import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { angleterreAlt, angleterreImage } from "@/lib/angleterre-images";
import { href } from "@/lib/paths";

const ROOMS = [
  {
    key: "chambreDouble" as const,
    titleFr: "Chambre double",
    titleEn: "Double room",
    descFr: "Confort et charme dans un format intimiste, idéal pour un week-end à Versailles.",
    descEn: "Comfort and charm in an intimate format, ideal for a weekend in Versailles.",
  },
  {
    key: "chambreSuperieure" as const,
    titleFr: "Chambre supérieure",
    titleEn: "Superior room",
    descFr: "Volumes généreux et lumière naturelle, avec le décor signature de la maison.",
    descEn: "Generous space and natural light, with the house's signature decor.",
  },
  {
    key: "chambreFamiliale" as const,
    titleFr: "Chambre familiale",
    titleEn: "Family room",
    descFr: "Espace pensé pour les familles, à deux minutes du Château.",
    descEn: "Space designed for families, two minutes from the Palace.",
  },
  {
    key: "chambre1" as const,
    titleFr: "Chambre cosy",
    titleEn: "Cosy room",
    descFr: "Ambiance chaleureuse entre pièces rétro et lignes actuelles.",
    descEn: "Warm atmosphere between retro pieces and contemporary lines.",
  },
] as const;

export function AngleterreChambresPageView({ locale }: { locale: Locale }) {
  const isFr = locale === "fr";

  return (
    <>
      <header className="border-b border-cocobiches-border/70 bg-cocobiches-creme-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Link
            href={href(locale, "/hotel-angleterre")}
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cocobiches-marine/60 hover:text-cocobiches-marine"
          >
            ← {isFr ? "Hôtel d'Angleterre" : "Hôtel d'Angleterre"}
          </Link>
          <h1 className="font-display mt-6 text-4xl font-semibold text-cocobiches-marine md:text-5xl">
            {isFr ? "Nos chambres" : "Our rooms"}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cocobiches-muted">
            {isFr
              ? "29 chambres cosy et confortables, au décor parfaitement dosé entre pièces rétro et lignes actuelles."
              : "29 cosy, comfortable rooms with decor balanced between retro pieces and contemporary lines."}
          </p>
        </div>
      </header>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-5 md:px-8">
          {ROOMS.map((room, index) => (
            <FadeIn key={room.key} delay={index * 0.05}>
              <article className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-[1.15rem] border border-cocobiches-border shadow-card ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <Image
                    src={angleterreImage(room.key).src}
                    alt={angleterreAlt(room.key, locale)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="font-display text-2xl font-semibold text-cocobiches-marine md:text-3xl">
                    {isFr ? room.titleFr : room.titleEn}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-cocobiches-muted">
                    {isFr ? room.descFr : room.descEn}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

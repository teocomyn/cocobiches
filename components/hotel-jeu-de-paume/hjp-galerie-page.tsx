import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import { hjpAlt, hjpImage, type HjpImageKey } from "@/lib/hjp-images";

export function HjpGaleriePageView({
  locale,
  images,
}: {
  locale: Locale;
  images: HjpImageKey[];
}) {
  const isFr = locale === "fr";

  return (
    <>
      <section className="relative min-h-[40vh] overflow-hidden bg-cocobiches-marine-900 md:min-h-[44vh]">
        <Image
          src={hjpImage("salon").src}
          alt={hjpAlt("salon", locale)}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-cocobiches-marine-900 via-cocobiches-marine-900/55 to-hjp-teal/20"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-end px-5 pb-12 pt-32 md:min-h-[44vh] md:px-8 md:pb-16">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-hjp-mint">
            Hôtel du Jeu de Paume
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            {isFr ? "Galerie photos" : "Photo gallery"}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {isFr
              ? "Façade, salons, chambres, jardin et espaces séminaire · les visuels officiels de la maison."
              : "Façade, lounges, rooms, garden and seminar spaces · the hotel's official photography."}
          </p>
        </div>
      </section>

      <section className="bg-cocobiches-creme-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((key, i) => {
              const img = hjpImage(key);
              return (
                <FadeIn key={key} delay={i * 0.03}>
                  <li className="group overflow-hidden rounded-[1.15rem] border border-cocobiches-border bg-white shadow-card">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={hjpAlt(key, locale)}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <p className="border-t border-cocobiches-border/70 px-4 py-3 text-[0.8rem] leading-snug text-cocobiches-muted">
                      {hjpAlt(key, locale)}
                    </p>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

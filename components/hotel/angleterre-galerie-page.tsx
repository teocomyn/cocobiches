import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n-config";
import {
  ANGLETERRE_GALLERY,
  angleterreAlt,
  angleterreImage,
} from "@/lib/angleterre-images";
import { href } from "@/lib/paths";

export function AngleterreGaleriePageView({ locale }: { locale: Locale }) {
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
            {isFr ? "Galerie photos" : "Photo gallery"}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cocobiches-muted">
            {isFr
              ? "Façade, chambres et ambiance · les visuels officiels de la maison."
              : "Façade, rooms and atmosphere · the hotel's official photography."}
          </p>
        </div>
      </header>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ANGLETERRE_GALLERY.map((key, i) => (
              <FadeIn key={key} delay={i * 0.03}>
                <li className="group overflow-hidden rounded-[1.15rem] border border-cocobiches-border bg-white shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={angleterreImage(key).src}
                      alt={angleterreAlt(key, locale)}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

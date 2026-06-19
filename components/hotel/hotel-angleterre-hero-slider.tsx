import Image from "next/image";
import { PausableHeroSlideshow } from "@/components/ui/pausable-hero-slideshow";
import type { Locale } from "@/lib/i18n-config";
import {
  ANGLETERRE_HERO_SLIDES,
  angleterreAlt,
  angleterreImage,
  angleterreLabel,
} from "@/lib/angleterre-images";

export function HotelAngleterreHeroSlider({ locale }: { locale: Locale }) {
  return (
    <PausableHeroSlideshow locale={locale}>
      {ANGLETERRE_HERO_SLIDES.map((key, index) => {
        const img = angleterreImage(key);
        return (
          <div
            key={key}
            className="hjp-hero-slide absolute inset-0"
            style={{ animationDelay: `${index * 5}s` }}
          >
            <Image
              src={img.src}
              alt={angleterreAlt(key, locale)}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="100vw"
              quality={80}
              className="object-cover object-center"
            />
            {angleterreLabel(key, locale) ? (
              <span className="absolute bottom-24 left-6 rounded-full border border-white/30 bg-cocobiches-marine/75 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white md:bottom-28 md:left-10">
                {angleterreLabel(key, locale)}
              </span>
            ) : null}
          </div>
        );
      })}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cocobiches-marine-900/95 via-cocobiches-marine-900/60 to-cocobiches-marine-900/35"
        aria-hidden
      />
    </PausableHeroSlideshow>
  );
}

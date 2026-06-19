import Image from "next/image";
import { PausableHeroSlideshow } from "@/components/ui/pausable-hero-slideshow";
import type { Locale } from "@/lib/i18n-config";
import {
  HJP_HERO_SLIDES,
  hjpAlt,
  hjpImage,
  hjpLabel,
} from "@/lib/hjp-images";

export function HjpHeroSlider({ locale }: { locale: Locale }) {
  return (
    <PausableHeroSlideshow locale={locale}>
      {HJP_HERO_SLIDES.map((key, index) => {
        const img = hjpImage(key);
        return (
          <div
            key={key}
            className="hjp-hero-slide absolute inset-0"
            style={{ animationDelay: `${index * 5}s` }}
          >
            <Image
              src={img.src}
              alt={hjpAlt(key, locale)}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="100vw"
              quality={80}
              className="object-cover object-center"
            />
            {hjpLabel(key, locale) ? (
              <span className="absolute bottom-24 left-6 rounded-full border border-white/30 bg-cocobiches-marine/75 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white md:bottom-28 md:left-10">
                {hjpLabel(key, locale)}
              </span>
            ) : null}
          </div>
        );
      })}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cocobiches-marine-900/95 via-cocobiches-marine-900/55 to-hjp-teal/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgb(42_157_143/0.25),transparent_60%)]"
        aria-hidden
      />
    </PausableHeroSlideshow>
  );
}

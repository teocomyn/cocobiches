import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/brand/cocobiches-logo.png";

/** Logo officiel (PNG) sur fond sombre ; SVG de secours sur fond clair (variant marine). */
export function CocobichesMark({
  className,
  variant = "marine",
  priority = false,
}: {
  className?: string;
  variant?: "marine" | "creme";
  /** Réservé au header (LCP) · éviter sur le footer. */
  priority?: boolean;
}) {
  if (variant === "creme") {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image
          src={LOGO_SRC}
          alt="Cocobiches"
          width={180}
          height={48}
          className="h-full w-auto max-w-[min(200px,58vw)] object-contain object-left"
          sizes="(max-width: 768px) 160px, 180px"
          priority={priority}
          quality={85}
        />
      </span>
    );
  }

  const fill = "#2D3077";
  const text = "text-cocobiches-marine";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 48 36"
        className="h-7 w-9 shrink-0 md:h-8 md:w-10"
        aria-hidden
      >
        <g fill={fill}>
          <circle cx="8" cy="12" r="4" />
          <circle cx="20" cy="12" r="4" />
          <circle cx="8" cy="24" r="4" />
          <circle cx="20" cy="24" r="4" />
          <rect x="28" y="10" width="18" height="16" rx="2" />
        </g>
      </svg>
      <span
        className={cn(
          "font-bold uppercase tracking-[0.14em]",
          "text-[0.8rem] md:text-[0.95rem]",
          text,
        )}
      >
        Cocobiches
      </span>
    </span>
  );
}

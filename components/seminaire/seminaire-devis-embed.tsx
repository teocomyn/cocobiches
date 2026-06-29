export const SEMINAIRE_DEVIS_URL = "https://events-hotel-jeu-de-paume.netlify.app";

type SeminaireDevisEmbedProps = {
  title: string;
  className?: string;
};

export function SeminaireDevisEmbed({ title, className }: SeminaireDevisEmbedProps) {
  return (
    <iframe
      src={SEMINAIRE_DEVIS_URL}
      title={title}
      className={className ?? "h-[920px] w-full rounded-2xl border border-cocobiches-border/80 bg-white shadow-card"}
      loading="lazy"
    />
  );
}

export function SeminaireDevisCta({
  locale,
  className,
}: {
  locale: "fr" | "en";
  className?: string;
}) {
  const isFr = locale === "fr";
  return (
    <a
      href={SEMINAIRE_DEVIS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex rounded-full bg-cocobiches-marine px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-cocobiches-creme shadow-[0_12px_32px_rgb(45_48_119/0.28)] transition hover:bg-cocobiches-marine-800"
      }
    >
      {isFr ? "Demander un devis" : "Request a quote"}
    </a>
  );
}

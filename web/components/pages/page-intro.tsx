import { DotsPattern } from "@/components/patterns/dots-pattern";

export function PageIntro({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-cocobiches-marine via-cocobiches-marine-800 to-cocobiches-marine-900 py-20 text-cocobiches-creme md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,rgb(196_165_116/0.12),transparent_55%)]"
        aria-hidden
      />
      <DotsPattern variant="creme-on-marine" className="opacity-[0.18]" />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl md:leading-[1.08] lg:text-[3.15rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cocobiches-creme-100 md:text-xl">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}

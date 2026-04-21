import Link from "next/link";

/** Routes sans locale (rare) — liens explicites FR / EN. */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cocobiches-creme-50 px-6 py-24 text-center text-cocobiches-marine">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cocobiches-muted">404</p>
      <h1 className="font-display mt-4 max-w-md text-2xl font-semibold tracking-[-0.02em]">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-cocobiches-muted">
        Cette adresse ne correspond à aucune page. Choisissez votre langue :
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/fr"
          className="inline-flex rounded-full bg-cocobiches-marine px-6 py-3 text-sm font-semibold text-white"
        >
          Accueil (FR)
        </Link>
        <Link
          href="/en"
          className="inline-flex rounded-full border border-cocobiches-marine/30 bg-white px-6 py-3 text-sm font-semibold text-cocobiches-marine"
        >
          Home (EN)
        </Link>
      </div>
    </div>
  );
}

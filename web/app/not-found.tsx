import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cocobiches-creme-50 px-6 py-24 text-center text-cocobiches-marine">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cocobiches-muted">
        404
      </p>
      <h1 className="mt-4 max-w-md text-2xl font-bold">
        Cette page a pris quelques jours de congés. Revenons à l’essentiel.
      </h1>
      <Link
        href="/fr"
        className="mt-8 inline-flex rounded-full bg-cocobiches-marine px-6 py-3 text-sm font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}

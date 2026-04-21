import Link from "next/link";
import { PageIntro } from "@/components/pages/page-intro";
import { FadeIn } from "@/components/motion/fade-in";
import { getDictionary } from "@/lib/get-dictionary";
import { isLocale } from "@/lib/i18n-config";
import { href } from "@/lib/paths";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.meta.blog.title,
    description: dict.meta.blog.description,
    alternates: {
      canonical: href(raw, "/blog"),
      languages: { fr: "/fr/blog", en: "/en/blog" },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const dict = await getDictionary(raw);
  const b = dict.blog;
  const posts = [b.posts["1"], b.posts["2"], b.posts["3"]];

  return (
    <>
      <PageIntro title={b.title} lead={b.lead} />
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <p className="text-sm text-cocobiches-muted">{b.soon}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-cocobiches-border bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-cocobiches-marine">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cocobiches-muted">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-cocobiches-vert">
                  {b.read} →
                </span>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12 text-center">
          <Link
            href={href(raw, "/contact")}
            className="inline-flex rounded-full bg-cocobiches-marine px-6 py-3 text-sm font-semibold text-white"
          >
            {dict.nav.contact}
          </Link>
        </FadeIn>
      </div>
    </>
  );
}

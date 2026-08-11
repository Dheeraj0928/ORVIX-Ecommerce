import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { BlogCard } from "@/components/sections/blog-card";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/config/brand";
import {
  getAuthor,
  getCategory,
  getPost,
  posts,
  relatedPosts,
} from "@/content/blog";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const category = getCategory(post.category);
  const related = relatedPosts(post);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: author?.name ?? brand.name,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: brand.urls.site,
    },
    mainEntityOfPage: `${brand.urls.site}/blog/${post.slug}`,
  };

  return (
    <main>
      <JsonLd data={articleLd} />
      <Container className="max-w-3xl py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/blog" className="hover:text-charcoal">
            Blog
          </Link>
          {category ? (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/blog/category/${category.slug}`}
                className="hover:text-charcoal"
              >
                {category.title}
              </Link>
            </>
          ) : null}
        </nav>

        <header className="mt-6">
          <p className="text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {author ? (
              <>
                {" · "}
                <Link
                  href={`/blog/author/${author.slug}`}
                  className="font-medium text-charcoal hover:underline"
                >
                  {author.name}
                </Link>
              </>
            ) : null}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.description}</p>
        </header>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-bold text-charcoal">
                {section.heading}
              </h2>
              {section.body.map((para) => (
                <p key={para} className="mt-3 text-base leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        <aside className="mt-12 rounded-2xl border border-border bg-warm-white p-6">
          <h2 className="font-display text-xl font-bold text-charcoal">
            Key takeaways
          </h2>
          <ul className="mt-4 space-y-2">
            {post.takeaways.map((t) => (
              <li key={t} className="text-muted">
                · {t}
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-charcoal hover:border-accent"
            >
              #{tag}
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold text-charcoal">
            Want this applied to your catalog?
          </h2>
          <p className="mt-2 text-muted">
            Book a consultation or request a free ecommerce audit.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href={brand.ctas.primary.href} className={cn(buttonVariants())}>
              {brand.ctas.primary.label}
            </Link>
            <Link
              href={brand.ctas.secondary.href}
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              {brand.ctas.secondary.label}
            </Link>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Related posts
            </h2>
            <div className="mt-6 grid gap-4">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12">
          <h2 className="font-display text-xl font-bold text-charcoal">
            Newsletter
          </h2>
          <NewsletterForm className="mt-4" />
        </div>
      </Container>
      <FinalCta />
    </main>
  );
}

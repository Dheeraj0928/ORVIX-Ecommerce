import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { BlogCard } from "@/components/sections/blog-card";
import { brand } from "@/config/brand";
import { categories, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: `Marketplace SEO, advertising, inventory, GST, and AI automation insights from ${brand.name}.`,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical marketplace intelligence."
        description="No fluff — operating notes that help sellers grow and protect accounts."
      />
      <Container className="py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/category/${c.slug}`}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-charcoal hover:border-accent"
            >
              {c.title}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-warm-white p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Marketplace notes, occasionally
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            One practical email when we publish something worth your time.
          </p>
          <NewsletterForm className="mt-6 max-w-lg" />
        </div>
      </Container>
      <FinalCta />
    </main>
  );
}

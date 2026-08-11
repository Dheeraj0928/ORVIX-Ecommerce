import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { brand } from "@/config/brand";
import { categories, posts } from "@/content/blog";
import { serviceCategories } from "@/content/services";
import { marketplaces } from "@/content/marketplaces";

export const metadata: Metadata = {
  title: "Resources",
  description: `Guides, playbooks, and tools for marketplace sellers from ${brand.name}.`,
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Operator resources for marketplace growth."
        description="Start with guides, then go deeper on services and marketplaces — or book a consult when you’re ready."
      />
      <Container className="space-y-16 py-16">
        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Latest guides
          </h2>
          <ul className="mt-6 space-y-3">
            {latest.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-medium text-charcoal hover:text-accent"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-muted">{post.description}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
          >
            View all articles
          </Link>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              By topic
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium hover:border-accent"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Marketplaces
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {marketplaces.map((m) => (
                <Link
                  key={m.slug}
                  href={`/marketplaces/${m.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium hover:border-accent"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Service playbooks
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-border bg-warm-white p-5 hover:border-accent"
              >
                <h3 className="font-semibold text-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Get new guides by email
          </h2>
          <p className="mt-2 text-muted">
            Occasional, practical, unsubscribe anytime.
          </p>
          <NewsletterForm className="mt-6 max-w-lg" />
        </section>
      </Container>
      <FinalCta />
    </main>
  );
}

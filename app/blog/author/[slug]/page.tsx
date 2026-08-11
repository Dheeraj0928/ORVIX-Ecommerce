import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { BlogCard } from "@/components/sections/blog-card";
import { JsonLd } from "@/components/seo/json-ld";
import {
  authors,
  getAuthor,
  postsByAuthor,
} from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return {
    title: author.name,
    description: author.bio,
    alternates: { canonical: `/blog/author/${author.slug}` },
  };
}

export default async function BlogAuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const list = postsByAuthor(slug);

  const authorLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
  };

  return (
    <main>
      <JsonLd data={authorLd} />
      <PageHero
        eyebrow={author.role}
        title={author.name}
        description={author.bio}
      />
      <Container className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {list.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </Container>
      <FinalCta />
    </main>
  );
}

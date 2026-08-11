import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { BlogCard } from "@/components/sections/blog-card";
import {
  categories,
  getCategory,
  postsByCategory,
} from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} Articles`,
    description: category.description,
    alternates: { canonical: `/blog/category/${category.slug}` },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const list = postsByCategory(slug);

  return (
    <main>
      <PageHero title={category.title} description={category.description} />
      <Container className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {list.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </Container>
      <FinalCta />
    </main>
  );
}

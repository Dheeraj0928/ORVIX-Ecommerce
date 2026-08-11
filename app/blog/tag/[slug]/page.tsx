import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { BlogCard } from "@/components/sections/blog-card";
import { allTags, postsByTag } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allTags().map((tag) => ({ slug: tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `#${slug}`,
    description: `Articles tagged ${slug} from ORVIX Commerce.`,
    alternates: { canonical: `/blog/tag/${slug}` },
  };
}

export default async function BlogTagPage({ params }: Props) {
  const { slug } = await params;
  const list = postsByTag(slug);
  if (list.length === 0) notFound();

  return (
    <main>
      <PageHero
        title={`#${slug}`}
        description="Posts sharing this operational theme."
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

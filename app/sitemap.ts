import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { posts, categories, authors, allTags } from "@/content/blog";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { marketplaces } from "@/content/marketplaces";
import { serviceCategories } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.urls.site;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/marketplaces",
    "/pricing",
    "/case-studies",
    "/industries",
    "/blog",
    "/resources",
    "/faq",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamic = [
    ...serviceCategories.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...marketplaces.map((m) => ({
      url: `${base}/marketplaces/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industries.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...categories.map((c) => ({
      url: `${base}/blog/category/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...authors.map((a) => ({
      url: `${base}/blog/author/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    ...allTags().map((tag) => ({
      url: `${base}/blog/tag/${tag}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];

  return [...staticRoutes, ...dynamic];
}

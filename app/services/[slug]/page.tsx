import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/sections/service-page";
import { getService, serviceCategories } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ORVIX Commerce`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}

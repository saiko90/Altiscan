import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "@/lib/services-data";
import ServicePageContent from "@/components/sections/ServicePageContent";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service introuvable | Altiscan" };
  return {
    title: `${service.title} | Altiscan`,
    description: service.heroDescription,
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return <ServicePageContent service={service} />;
}

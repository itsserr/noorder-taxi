import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { REGIONS, getRegion } from "@/lib/regions";

type Params = { params: Promise<{ regio: string }> };

export function generateStaticParams() {
  return REGIONS.map((region) => ({ regio: region.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { regio } = await params;
  const region = getRegion(regio);
  if (!region) return {};
  return {
    title: region.title,
    description: region.metaDescription,
    alternates: { canonical: `/taxi/${region.slug}/` },
  };
}

export default async function RegioPage({ params }: Params) {
  const { regio } = await params;
  const region = getRegion(regio);
  if (!region) notFound();

  return (
    <>
      <section className="section-y-first">
        <div className="container-luxe max-w-3xl">
          <div className="text-center">
            <p className="eyebrow mb-4">Werkgebied</p>
            <h1 className="font-display text-4xl italic text-foreground sm:text-5xl">
              {region.h1}
            </h1>
            {region.intro.map((paragraph, i) => (
              <p
                key={i}
                className="mt-5 text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {region.places.map((place) => (
              <li
                key={place}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-surface px-3 py-1.5 text-xs text-muted"
              >
                <MapPin className="h-3 w-3 text-navy-light" />
                {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-t border-white/5 bg-surface">
        <div className="container-luxe max-w-3xl space-y-12">
          {region.sections.map((block) => (
            <div key={block.heading}>
              <h2 className="font-display text-2xl text-foreground">
                {block.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

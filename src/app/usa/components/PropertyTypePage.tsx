import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import PropertyCard from "../components/PropertyCard";
import { supabase } from "../lib/supabase";
import type { PropertyListing, PropertyType } from "../lib/types";

interface PropertyTypePageProps {
  type: {
    slug: string;
    label: string;
    description: string;
    transactionTypes: readonly string[];
  };
  sectorDetails: {
    marketContext: string;
    keyDrivers: string[];
    advisoryScope: string[];
  };
  heroImage: string;
}

export default function PropertyTypePage({
  type,
  sectorDetails,
  heroImage,
}: PropertyTypePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${type.label} commercial real estate`}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow className="text-gold-400">
              {type.label} — U.S. Commercial Real Estate
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              {type.label} advisory and opportunities
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-200">
              {type.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {type.transactionTypes.includes("sale") && (
                <Link
                  href={`/usa/commercial-real-estate/${type.slug}/for-sale`}
                  className="group flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300"
                >
                  {type.label} For Sale
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              )}
              {type.transactionTypes.includes("lease") && (
                <Link
                  href={`/usa/commercial-real-estate/${type.slug}/for-lease`}
                  className="flex items-center justify-center rounded-lg border border-ink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-ink-400 hover:bg-ink-800"
                >
                  {type.label} For Lease
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Market Context"
              title={`${type.label} market dynamics`}
            />
            <p className="mt-6 text-lg leading-relaxed text-ink-500">
              {sectorDetails.marketContext}
            </p>
            <div className="mt-8">
              <h3 className="font-serif text-lg font-semibold text-ink-900">
                Key market drivers
              </h3>
              <ul className="mt-4 space-y-3">
                {sectorDetails.keyDrivers.map((driver) => (
                  <li
                    key={driver}
                    className="flex items-start gap-3 text-base text-ink-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                    {driver}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-8">
            <h3 className="font-serif text-lg font-semibold text-ink-900">
              Advisory scope
            </h3>
            <ul className="mt-4 space-y-3">
              {sectorDetails.advisoryScope.map((scope) => (
                <li
                  key={scope}
                  className="flex items-start gap-2.5 text-sm text-ink-600"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-500" />
                  {scope}
                </li>
              ))}
            </ul>
            <Link
              href="/usa/contact"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-600 transition-colors"
            >
              Discuss a {type.label.toLowerCase()} mandate
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      <PropertyTypeListings typeSlug={type.slug} />

      <CTABanner
        title={`Engage Murivest for ${type.label.toLowerCase()} advisory`}
        description="Whether acquiring, disposing, financing, or leasing, our sector team is ready to advise."
        primaryLabel="Request a Mandate"
        secondaryLabel="Investment Sales"
        secondaryHref="/usa/investment-sales"
      />
    </>
  );
}

async function PropertyTypeListings({ typeSlug }: { typeSlug: string }) {
  const { data } = await supabase
    .from("usa_properties")
    .select("*")
    .eq("is_listed", true)
    .eq("property_type", typeSlug)
    .order("published_at", { ascending: false })
    .limit(6);

  const properties = (data || []) as PropertyListing[];

  if (properties.length === 0) {
    return (
      <Section className="py-20 bg-ink-50">
        <SectionHeading
          eyebrow="Current Opportunities"
          title="Active mandate offerings"
          description={`Murivest's current ${typeSlug.replace(/_/g, " ")} opportunities are available to qualified investors on a confidential basis. Contact us to discuss active and off-market engagements.`}
        />
        <div className="mt-8 flex items-center justify-center rounded-2xl border border-ink-100 bg-white py-16">
          <div className="text-center">
            <Building2 size={40} className="mx-auto text-ink-300" />
            <p className="mt-4 text-ink-500">
              No public listings currently available. Contact us for active
              and off-market opportunities.
            </p>
            <Link
              href="/usa/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-600 transition-colors"
            >
              Inquire about opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-20 bg-ink-50">
      <SectionHeading
        eyebrow="Current Opportunities"
        title="Active mandate offerings"
        description="A sample of current engagements. Additional opportunities are available to qualified investors on a confidential basis."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </Section>
  );
}

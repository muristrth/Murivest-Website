import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import CTABanner from "@/components/CTABanner";
import PropertyCard from "@/components/PropertyCard";
import { supabase } from "@/lib/supabase";
import type { PropertyListing } from "@/lib/types";
import { PROPERTY_TYPES, propertyTypeLabel } from "@/lib/site";

interface ListingPageData {
  typeSlug: string;
  transactionType: "sale" | "lease";
}

export default async function ListingPage({ typeSlug, transactionType }: ListingPageData) {
  const type = PROPERTY_TYPES.find((p) => p.slug === typeSlug);
  const label = type?.label || propertyTypeLabel(typeSlug);
  const isSale = transactionType === "sale";
  const transactionLabel = isSale ? "For Sale" : "For Lease";

  const { data } = await supabase
    .from("usa_properties")
    .select("*")
    .eq("is_listed", true)
    .eq("property_type", typeSlug)
    .eq("transaction_type", transactionType)
    .order("published_at", { ascending: false });

  const properties = (data || []) as PropertyListing[];

  return (
    <>
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-navy-300">
            <Link href="/usa" className="hover:text-white transition-colors">
              USA
            </Link>
            <span>/</span>
            <Link
              href="/usa/commercial-real-estate"
              className="hover:text-white transition-colors"
            >
              Commercial Real Estate
            </Link>
            <span>/</span>
            <Link
              href={`/usa/commercial-real-estate/${typeSlug}`}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
            <span>/</span>
            <span className="text-gold-400">{transactionLabel}</span>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow className="text-gold-400">
              {label} — {transactionLabel}
            </Eyebrow>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {label} {transactionLabel.toLowerCase()} — U.S. opportunities
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-navy-200">
              {isSale
                ? `Current ${label.toLowerCase()} disposition mandates and acquisition opportunities available through Murivest. Additional off-market opportunities are available to qualified investors on a confidential basis.`
                : `Current ${label.toLowerCase()} leasing opportunities available through Murivest. Contact us for additional lease availabilities and tenant representation services.`}
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        {properties.length === 0 ? (
          <div className="flex flex-col items-center rounded-2xl border border-ink-100 bg-ink-50 py-20 text-center">
            <Building2 size={48} className="text-ink-300" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-ink-900">
              No public {transactionLabel.toLowerCase()} listings currently available
            </h2>
            <p className="mx-auto mt-2 max-w-md text-ink-500">
              {isSale
                ? `Murivest's current ${label.toLowerCase()} opportunities are available to qualified investors on a confidential basis. Contact us to discuss active and off-market engagements.`
                : `Murivest's current ${label.toLowerCase()} lease availabilities are available through our leasing team. Contact us for current and upcoming lease opportunities.`}
            </p>
            <Link
              href="/usa/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-600"
            >
              Inquire about opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <SectionHeading
                title={`${properties.length} ${label} ${transactionLabel.toLowerCase()} ${properties.length === 1 ? "opportunity" : "opportunities"}`}
              />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        )}
      </Section>

      <CTABanner
        title={`Discuss ${label.toLowerCase()} ${isSale ? "investment sales" : "leasing"} with our team`}
        description={isSale
          ? "Contact us to access confidential and off-market opportunities aligned with your investment criteria."
          : "Contact us for current lease availabilities and tenant representation services."
        }
        primaryLabel="Request a Mandate"
        secondaryLabel={`Back to ${label}`}
        secondaryHref={`/usa/commercial-real-estate/${typeSlug}`}
      />
    </>
  );
}

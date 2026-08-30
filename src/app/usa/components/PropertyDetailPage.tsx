import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  MapPin,
  Building2,
  Calendar,
  Ruler,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Lock,
} from "lucide-react";
import { Section, Eyebrow } from "../components/Section";
import CTABanner from "../components/CTABanner";
import InquiryForm from "../components/InquiryForm";
import { supabase } from "../lib/supabase";
import type { PropertyListing } from "../lib/types";
import {
  SITE,
  PROPERTY_TYPES,
  propertyTypeLabel,
  transactionTypeLabel,
  formatCurrency,
  formatSqft,
  formatCapRate,
  formatRentPSF,
} from "../lib/site";

interface PropertyDetailPageProps {
  typeSlug: string;
  transactionType: "sale" | "lease";
  slug: string;
}

export async function generatePropertyMetadata({
  typeSlug,
  transactionType,
  slug,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { data } = await supabase
    .from("usa_properties")
    .select("title, description, city, state")
    .eq("slug", slug)
    .eq("property_type", typeSlug)
    .eq("transaction_type", transactionType)
    .eq("is_listed", true)
    .maybeSingle();

  if (!data) return { title: "Property not found" };

  const title = `${data.title} — ${transactionTypeLabel(transactionType)} | Murivest`;
  const description = data.description.slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: `https://${SITE.domain}/usa/commercial-real-estate/${typeSlug}/${transactionType === "sale" ? "for-sale" : "for-lease"}/${slug}`,
    },
  };
}

export default async function PropertyDetailPage({
  typeSlug,
  transactionType,
  slug,
}: PropertyDetailPageProps) {
  const { data } = await supabase
    .from("usa_properties")
    .select("*")
    .eq("slug", slug)
    .eq("property_type", typeSlug)
    .eq("transaction_type", transactionType)
    .eq("is_listed", true)
    .maybeSingle();

  const property = data as PropertyListing | null;

  if (!property) notFound();

  const label = propertyTypeLabel(typeSlug);
  const isSale = transactionType === "sale";
  const basePath = `/usa/commercial-real-estate/${typeSlug}`;
  const listingPath = isSale ? `${basePath}/for-sale` : `${basePath}/for-lease`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.title,
    description: property.description,
    url: `https://${SITE.domain}${listingPath}/${property.slug}`,
    category: label,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-[#0F2E22] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-navy-300">
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
              href={basePath}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
            <span>/</span>
            <Link
              href={listingPath}
              className="hover:text-white transition-colors"
            >
              {transactionTypeLabel(transactionType)}
            </Link>
            <span>/</span>
            <span className="text-gold-400">{property.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-[#0F2E22]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-[#1B4332]">
            {property.image_url ? (
              <img
                src={property.image_url}
                alt={property.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Building2 size={64} className="text-navy-400" />
              </div>
            )}
            <div className="absolute left-4 top-4 rounded-md bg-[#1B4332]/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              {transactionTypeLabel(transactionType)}
            </div>
          </div>
        </div>
      </section>

      <Section className="py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Eyebrow>{label} — {transactionTypeLabel(transactionType)}</Eyebrow>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2C2C2C] sm:text-4xl">
              {property.title}
            </h1>
            <div className="mt-3 flex items-center gap-2 text-[#8B8680]">
              <MapPin size={18} className="text-gold-500" />
              <span>
                {property.address_line ? `${property.address_line}, ` : ""}
                {property.city}, {property.state}
                {property.msa ? ` — ${property.msa} MSA` : ""}
              </span>
            </div>

            {/* Key facts grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {isSale ? (
                <>
                  <FactCard
                    icon={TrendingUp}
                    label="Asking Price"
                    value={formatCurrency(property.asking_price)}
                  />
                  {property.cap_rate != null && (
                    <FactCard
                      icon={TrendingUp}
                      label="Cap Rate"
                      value={formatCapRate(property.cap_rate)}
                    />
                  )}
                </>
              ) : (
                <>
                  <FactCard
                    icon={TrendingUp}
                    label="Asking Rent"
                    value={formatRentPSF(property.asking_rent_psf)}
                  />
                  {property.lease_type && (
                    <FactCard
                      icon={Building2}
                      label="Lease Type"
                      value={property.lease_type}
                    />
                  )}
                </>
              )}
              {property.building_size_sqft && (
                <FactCard
                  icon={Ruler}
                  label="Building Size"
                  value={formatSqft(property.building_size_sqft)}
                />
              )}
              {property.land_size_acres && (
                <FactCard
                  icon={Ruler}
                  label="Land Area"
                  value={`${property.land_size_acres} acres`}
                />
              )}
              {property.year_built && (
                <FactCard
                  icon={Calendar}
                  label="Year Built"
                  value={String(property.year_built)}
                />
              )}
              {property.year_renovated && (
                <FactCard
                  icon={Calendar}
                  label="Renovated"
                  value={String(property.year_renovated)}
                />
              )}
              {property.occupancy != null && (
                <FactCard
                  icon={Building2}
                  label="Occupancy"
                  value={`${property.occupancy}%`}
                />
              )}
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-[#2C2C2C]">
                Property overview
              </h2>
              <p className="mt-4 whitespace-pre-line text-lg leading-relaxed text-[#8B8680]">
                {property.description}
              </p>
            </div>

            {/* Highlights */}
            {property.highlights && property.highlights.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-semibold text-[#2C2C2C]">
                  Key highlights
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {property.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-base text-[#C9A87C]"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-success-500"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {property.gallery_urls && property.gallery_urls.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-semibold text-[#2C2C2C]">
                  Gallery
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {property.gallery_urls.map((url, idx) => (
                    <div
                      key={idx}
                      className="aspect-[4/3] overflow-hidden rounded-xl bg-[#FAF9F6]"
                    >
                      <img
                        src={url}
                        alt={`${property.title} — image ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar — inquiry form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-[#E8E6E1] bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-[#2C2C2C]">
                  Inquire about this property
                </h3>
                <p className="mt-2 text-sm text-[#8B8680]">
                  Contact our team to request full property details, financials,
                  and arrange a confidential discussion.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#8B8680]/70">
                  <Lock size={14} />
                  <span>Confidential — qualified investors only</span>
                </div>
                <div className="mt-6">
                  <InquiryForm
                    defaultType="property_inquiry"
                    propertyRef={property.slug}
                    variant="inline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Explore more opportunities with Murivest"
        description="Access our full inventory of active and off-market U.S. commercial real estate opportunities."
        primaryLabel="View All Property Types"
        primaryHref="/usa/commercial-real-estate"
        secondaryLabel={`More ${label} ${transactionTypeLabel(transactionType)}`}
        secondaryHref={listingPath}
      />
    </>
  );
}

function FactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-[#E8E6E1] bg-[#FAF9F6] p-4">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[#8B8680]/70">
        <Icon size={14} />
        {label}
      </div>
      <div className="mt-1.5 font-serif text-lg font-semibold text-[#B8956B]">
        {value}
      </div>
    </div>
  );
}

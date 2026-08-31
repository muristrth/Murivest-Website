import Link from "next/link";
import { MapPin, Building2, Calendar } from "lucide-react";
import type { PropertyListing } from "../lib/types";
import {
  formatCurrency,
  formatSqft,
  formatCapRate,
  formatRentPSF,
  transactionTypeLabel,
} from "../lib/site";

export default function PropertyCard({ property }: { property: PropertyListing }) {
  const basePath = `/usa/commercial-real-estate/${property.property_type}`;
  const listingPath =
    property.transaction_type === "sale"
      ? `${basePath}/for-sale/${property.slug}`
      : `${basePath}/for-lease/${property.slug}`;

  return (
    <Link
      href={listingPath}
      className="group flex flex-col border border-[#E5E2DC] bg-white hover:border-[#8B7355]/40 transition-colors duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F7F4]">
        {property.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.image_url}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#2C2C2C]">
            <Building2 size={32} strokeWidth={1.5} className="text-[#8B7355]" />
          </div>
        )}
        <div className="absolute left-4 top-4 bg-[#2C2C2C]/85 px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase font-medium text-[#F8F7F4]">
          {transactionTypeLabel(property.transaction_type)}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg leading-snug text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
          {property.title}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#5A5A5A]/70">
          <MapPin size={13} />
          <span>
            {property.city}, {property.state}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-[#5A5A5A]">
          {property.building_size_sqft && (
            <span className="flex items-center gap-1">
              <Building2 size={13} className="text-[#8B7355]" />
              {formatSqft(property.building_size_sqft)}
            </span>
          )}
          {property.year_built && (
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-[#8B7355]" />
              {property.year_built}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-[#E5E2DC] pt-4">
          <div>
            {property.transaction_type === "sale" ? (
              <>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]/70">
                  Asking Price
                </div>
                <div className="font-serif text-lg text-[#2C2C2C]">
                  {formatCurrency(property.asking_price)}
                </div>
                {property.cap_rate != null && (
                  <div className="text-[11px] text-[#5A5A5A]/70">
                    {formatCapRate(property.cap_rate)} cap
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]/70">
                  Asking Rent
                </div>
                <div className="font-serif text-lg text-[#2C2C2C]">
                  {formatRentPSF(property.asking_rent_psf)}
                </div>
                {property.lease_type && (
                  <div className="text-[11px] text-[#5A5A5A]/70">
                    {property.lease_type}
                  </div>
                )}
              </>
            )}
          </div>
          <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-[#8B7355] group-hover:text-[#2C2C2C] transition-colors duration-300">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

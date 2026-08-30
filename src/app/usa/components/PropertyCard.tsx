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
      className="group flex flex-col overflow-hidden rounded-xl border border-[#E8E6E1] bg-white transition-all hover:border-[#B8956B] hover:shadow-lg hover:shadow-ink-900/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F6]">
        {property.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.image_url}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#1B4332]">
            <Building2 size={40} className="text-navy-400" />
          </div>
        )}
        <div className="absolute left-3 top-3 rounded-md bg-[#1B4332]/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {transactionTypeLabel(property.transaction_type)}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-semibold leading-snug text-[#2C2C2C] group-hover:text-[#B8956B] transition-colors">
          {property.title}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-[#8B8680]/70">
          <MapPin size={14} />
          <span>
            {property.city}, {property.state}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-[#8B8680]">
          {property.building_size_sqft && (
            <span className="flex items-center gap-1">
              <Building2 size={14} className="text-[#FAF9F6]" />
              {formatSqft(property.building_size_sqft)}
            </span>
          )}
          {property.year_built && (
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-[#FAF9F6]" />
              {property.year_built}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-[#E8E6E1] pt-4">
          <div>
            {property.transaction_type === "sale" ? (
              <>
                <div className="text-xs uppercase tracking-wide text-[#8B8680]/70">
                  Asking Price
                </div>
                <div className="font-serif text-lg font-semibold text-[#B8956B]">
                  {formatCurrency(property.asking_price)}
                </div>
                {property.cap_rate != null && (
                  <div className="text-xs text-[#8B8680]/70">
                    {formatCapRate(property.cap_rate)} cap
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-xs uppercase tracking-wide text-[#8B8680]/70">
                  Asking Rent
                </div>
                <div className="font-serif text-lg font-semibold text-[#B8956B]">
                  {formatRentPSF(property.asking_rent_psf)}
                </div>
                {property.lease_type && (
                  <div className="text-xs text-[#8B8680]/70">
                    {property.lease_type}
                  </div>
                )}
              </>
            )}
          </div>
          <span className="text-sm font-medium text-[#C9A87C] group-hover:text-[#B8956B] transition-colors">
            Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

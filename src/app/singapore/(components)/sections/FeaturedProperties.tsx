'use client';

import Link from 'next/link';
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionHeader from '../shared/SectionHeader';
import { SAMPLE_PROPERTIES } from '../data/singapore-market-data';

export default function FeaturedProperties() {
  const featured = SAMPLE_PROPERTIES.filter((p) => p.featured);

  return (
    <section className="py-20 md:py-32 bg-[#F8F7F4]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="flex-1">
            <SectionHeader
              kicker="Curated Portfolio"
              title="Featured Opportunities"
              subtitle="Institutional-grade commercial properties currently available for acquisition. Each asset has been rigorously vetted by our investment committee."
            />
          </div>
          <Link
            href="/singapore/properties"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#1B4332] font-medium hover:text-[#B8956B] transition-colors shrink-0"
          >
            View All Properties
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, i) => (
            <ScrollReveal key={property.id} delay={i * 0.1}>
              <Link
                href={`/singapore/properties/${property.slug}`}
                className="group block bg-white border border-[#E8E6E1] hover:shadow-xl hover:border-[#B8956B]/20 transition-all duration-500"
              >
                {/* Image area */}
                <div className="relative h-[240px] bg-[#1B4332] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium">
                      {property.propertyType.replace(/-/g, ' ')}
                    </span>
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5">
                      {property.status === 'available' ? 'Available' : property.status === 'under-offer' ? 'Under Offer' : 'Coming Soon'}
                    </span>
                  </div>
                  {/* Yield badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.15em] uppercase px-3 py-1.5">
                      {property.yield}% Yield
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors leading-tight mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#8B8680] mb-4">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span className="text-[11px] tracking-wide">{property.address}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E6E1]">
                    <div>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">Price</span>
                      <span className="font-mono text-lg text-[#2C2C2C]">{property.price}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">Size</span>
                      <div className="flex items-center justify-end gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#8B8680]" strokeWidth={1.5} />
                        <span className="text-sm">{property.sizeSqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E8E6E1]">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#8B8680]">
                      Cap Rate: <span className="text-[#1B4332] font-medium">{property.capRate}%</span>
                    </span>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#8B8680]">
                      Occupancy: <span className="text-[#1B4332] font-medium">{property.occupancyRate}%</span>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

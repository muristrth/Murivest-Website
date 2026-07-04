'use client';

import Link from 'next/link';
import { MapPin, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { PropertyListing } from '../data/singapore-market-data';

interface PropertyCardProps {
  property: PropertyListing;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/singapore/properties/${property.slug}`}
        className="group block bg-white border border-[#E8E6E1] hover:shadow-xl hover:border-[#B8956B]/20 transition-all duration-500"
      >
        {/* Image area */}
        <div className="relative h-[220px] bg-[#1B4332] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] font-medium">
              {property.propertyType.replace(/-/g, ' ')}
            </span>
          </div>
          {/* Status badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
              {property.status === 'available' ? 'Available' : property.status === 'under-offer' ? 'Under Offer' : 'Coming Soon'}
            </span>
          </div>
          {/* Yield badge */}
          {property.yield > 0 && (
            <div className="absolute top-3 right-3 z-20">
              <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
                {property.yield}% Yield
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-serif text-lg text-[#2C2C2C] group-hover:text-[#1B4332] transition-colors leading-tight mb-1.5">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-[#8B8680] mb-4">
            <MapPin className="w-3 h-3" strokeWidth={1.5} />
            <span className="text-[11px] tracking-wide truncate">{property.address}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#E8E6E1]">
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">Price</span>
              <span className="font-mono text-base text-[#2C2C2C]">{property.price}</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] block mb-0.5">Size</span>
              <div className="flex items-center justify-end gap-1">
                <Maximize2 className="w-3 h-3 text-[#8B8680]" strokeWidth={1.5} />
                <span className="text-[12px]">{property.sizeSqft.toLocaleString()} sqft</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E8E6E1]">
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#8B8680]">
              Cap: <span className="text-[#1B4332] font-medium">{property.capRate}%</span>
            </span>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#8B8680]">
              Occ: <span className="text-[#1B4332] font-medium">{property.occupancyRate}%</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

'use client';

import Link from 'next/link';
import { Building2, Eye, Lock, ArrowLeft } from 'lucide-react';
import { SAMPLE_PROPERTIES } from '../../(components)/data/singapore-market-data';
import ScrollReveal from '../../(components)/shared/ScrollReveal';

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#E8E6E1] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-[#1B4332]">Murivest</span>
            <span className="text-[#E8E6E1]">|</span>
            <span className="text-[11px] tracking-wider uppercase text-[#8B8680]">Deal Room</span>
          </div>
          <Link 
            href="/singapore/investor-portal/dashboard" 
            className="text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        <ScrollReveal>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">Exclusive Access</span>
            </div>
            <h1 className="font-serif text-3xl text-[#2C2C2C] mb-2">Deal Room</h1>
            <p className="text-sm text-[#8B8680] font-light">
              Off-market and exclusive commercial real estate opportunities in Singapore.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {SAMPLE_PROPERTIES.map((property, i) => (
            <ScrollReveal key={property.id} delay={i * 0.05}>
              <div className="bg-white border border-[#E8E6E1] p-6 md:p-8 hover:shadow-lg transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9px] tracking-[0.2em] uppercase bg-[#1B4332] text-white px-2.5 py-1">
                        {property.status === 'available' ? 'Available' : property.status === 'under-offer' ? 'Under Offer' : 'Coming Soon'}
                      </span>
                      <span className="text-[9px] tracking-[0.2em] uppercase bg-[#B8956B]/10 text-[#B8956B] px-2.5 py-1">
                        {property.propertyType.replace(/-/g, ' ')}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl text-[#2C2C2C] mb-1">{property.title}</h2>
                    <p className="text-[11px] text-[#8B8680] mb-3">{property.address}</p>
                    <p className="text-sm text-[#5A5A5A] font-light line-clamp-2">{property.description}</p>
                  </div>

                  <div className="flex flex-row md:flex-col items-end gap-4 md:gap-3 shrink-0">
                    <div className="text-right">
                      <p className="text-[9px] tracking-wider uppercase text-[#8B8680]">Price</p>
                      <p className="font-mono text-lg text-[#1B4332]">{property.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] tracking-wider uppercase text-[#8B8680]">Yield</p>
                      <p className="font-mono text-base text-[#B8956B]">{property.yield}%</p>
                    </div>
                    <Link
                      href={`/singapore/properties/${property.slug}`}
                      className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors border border-[#B8956B]/30 px-4 py-2 hover:border-[#1B4332]"
                    >
                      <Eye className="w-3.5 h-3.5" strokeWidth={1.5} />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}

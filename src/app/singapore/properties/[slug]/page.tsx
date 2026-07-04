import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Maximize2, Download, Calendar, ArrowLeft, TrendingUp, Building2, Shield, Mail, Phone } from 'lucide-react';
import { SAMPLE_PROPERTIES, SEO_TEMPLATES } from '../../(components)/data/singapore-market-data';
import ScrollReveal from '../../(components)/shared/ScrollReveal';
import { BreadcrumbSchema } from '../../(components)/shared/SchemaMarkup';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = SAMPLE_PROPERTIES.find((p) => p.slug === slug);
  if (!property) return { title: 'Property Not Found' };
  
  return {
    title: `${property.title} | ${property.propertyType.replace(/-/g, ' ')} — Murivest Singapore`,
    description: `${property.title} — ${property.address}. ${property.sizeSqft.toLocaleString()} sqft, ${property.yield}% yield, ${property.occupancyRate}% occupancy. ${property.description.slice(0, 120)}...`,
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = SAMPLE_PROPERTIES.find((p) => p.slug === slug);
  
  if (!property) notFound();

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Properties', url: 'https://murivest.com/singapore/properties' },
        { name: property.title, url: `https://murivest.com/singapore/properties/${property.slug}` },
      ]} />

      <main>
        {/* Navigation Bar */}
        <div className="bg-[#1B4332] border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4">
            <Link
              href="/singapore/properties"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Return to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] bg-[#1B4332] flex items-end">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F17] via-[#1B4332]/80 to-[#1B4332]/40" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 w-full">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                {property.propertyType.replace(/-/g, ' ')}
              </span>
              <span className="bg-white/10 text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5">
                {property.status === 'available' ? 'Available' : property.status === 'under-offer' ? 'Under Offer' : 'Coming Soon'}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-3">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
              <span className="text-sm">{property.address}</span>
            </div>
          </div>
        </section>

        {/* Key Metrics Bar */}
        <section className="bg-white border-b border-[#E8E6E1]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E6E1]">
              {[
                { label: 'Price', value: property.price },
                { label: 'PSF', value: `S$${property.psf.toLocaleString()}` },
                { label: 'Net Yield', value: `${property.yield}%` },
                { label: 'Cap Rate', value: `${property.capRate}%` },
              ].map((metric) => (
                <div key={metric.label} className="py-6 px-4 text-center">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1">{metric.label}</p>
                  <p className="font-mono text-lg text-[#1B4332] font-medium">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F5F4F0] flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-[#1B4332]" strokeWidth={1.5} />
                      </div>
                      Executive Summary
                    </h2>
                    <p className="text-[15px] text-[#5A5A5A] leading-[1.8] font-light">{property.description}</p>
                  </div>
                </ScrollReveal>

                {/* Highlights */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F5F4F0] flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#1B4332]" strokeWidth={1.5} />
                      </div>
                      Investment Highlights
                    </h2>
                    <ul className="space-y-3">
                      {property.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#2C2C2C]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Features */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6">Asset Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-[#FAF9F6] border border-[#E8E6E1]">
                          <Shield className="w-4 h-4 text-[#B8956B] mt-0.5 shrink-0" strokeWidth={1.5} />
                          <span className="text-[13px] text-[#2C2C2C]">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Financials Table */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6">Financial Summary</h2>
                    <div className="divide-y divide-[#E8E6E1]">
                      {[
                        ['Asking Price', property.price],
                        ['Price per sqft', `S$${property.psf.toLocaleString()}`],
                        ['Net Lettable Area', `${property.sizeSqft.toLocaleString()} sqft (${property.sizeSqm.toLocaleString()} sqm)`],
                        ['Gross Yield', `${property.yield}%`],
                        ['Capitalisation Rate', `${property.capRate}%`],
                        ['Occupancy Rate', `${property.occupancyRate}%`],
                        ['WALE', `${property.wale} years`],
                        ['Year Built', `${property.yearBuilt}`],
                        ['Last Refurbished', `${property.lastRefurbished}`],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center py-3">
                          <span className="text-[12px] text-[#8B8680] uppercase tracking-wide">{label}</span>
                          <span className="text-[14px] text-[#2C2C2C] font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Location */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6">Location</h2>
                    <div className="h-[300px] bg-[#E8E6E1] mb-4 flex items-center justify-center">
                      <span className="text-sm text-[#8B8680]">Map — {property.coordinates.lat}, {property.coordinates.lng}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.nearbyMRT.map((mrt) => (
                        <span key={mrt} className="text-[10px] tracking-wider uppercase bg-[#1B4332] text-white px-3 py-1.5">
                          {mrt}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column — Sidebar */}
              <div className="space-y-6">
                {/* Mandate Badge */}
                <div className="bg-[#1B4332] text-white p-6 flex items-center gap-4">
                  <Shield className="w-6 h-6 text-[#B8956B]" strokeWidth={1.5} />
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">Exclusive Mandate</p>
                    <p className="text-[13px] text-white/90 mt-1">Direct representation by Murivest</p>
                  </div>
                </div>

                {/* Size Card */}
                <div className="bg-white border border-[#E8E6E1] p-6 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680]">Total Area</p>
                    <p className="text-lg font-medium text-[#2C2C2C]">{property.sizeSqft.toLocaleString()} sqft</p>
                  </div>
                  <Maximize2 className="w-5 h-5 text-[#8B8680]" strokeWidth={1.5} />
                </div>

                {/* Documents */}
                <div className="bg-white border border-[#E8E6E1] p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4 font-medium">Documents</p>
                  <div className="space-y-2">
                    {property.documents.map((doc) => (
                      <button
                        key={doc.name}
                        className="w-full flex items-center justify-between p-3 border border-[#E8E6E1] hover:border-[#B8956B] transition-colors text-left"
                      >
                        <div className="flex items-center gap-2">
                          <Download className="w-3.5 h-3.5 text-[#8B8680]" strokeWidth={1.5} />
                          <span className="text-[12px] text-[#2C2C2C]">{doc.name}</span>
                        </div>
                        {doc.gated && (
                          <span className="text-[9px] tracking-wider uppercase bg-[#1B4332]/10 text-[#1B4332] px-2 py-0.5">Portal</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Broker */}
                <div className="bg-white border border-[#E8E6E1] p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4 font-medium">Mandated Advisor</p>
                  <div className="space-y-3">
                    <p className="font-serif text-base text-[#2C2C2C]">{property.brokerName}</p>
                    <div className="flex items-center gap-2 text-xs text-[#8B8680]">
                      <Mail className="w-3.5 h-3.5" />
                      {property.brokerEmail}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#8B8680]">
                      <Phone className="w-3.5 h-3.5" />
                      {property.brokerPhone}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`mailto:${property.brokerEmail}?subject=Investment Inquiry: ${property.title}`}
                  className="block w-full bg-[#1B4332] text-white py-4 text-center text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2D5A45] transition-colors"
                >
                  Arrange Private Viewing
                </a>

                <a
                  href={`mailto:${property.brokerEmail}?subject=Information Request: ${property.title}`}
                  className="block w-full border border-[#1B4332] text-[#1B4332] py-4 text-center text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#1B4332] hover:text-white transition-colors"
                >
                  Request Full Details
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-white border-t border-[#E8E6E1]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-[10px] text-[#8B8680] leading-relaxed text-center max-w-3xl mx-auto">
              All information is confidential and provided for qualified investors only. 
              Past performance is not indicative of future returns. All figures are indicative and subject to final due diligence.
              Murivest Realty Pte Ltd — Licensed Real Estate Agency.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

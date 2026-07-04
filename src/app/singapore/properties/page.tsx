import type { Metadata } from 'next';
import { SAMPLE_PROPERTIES, SEO_TEMPLATES } from '../(components)/data/singapore-market-data';
import PropertyCard from '../(components)/shared/PropertyCard';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import SectionHeader from '../(components)/shared/SectionHeader';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';

export const metadata: Metadata = {
  title: SEO_TEMPLATES.properties.title,
  description: SEO_TEMPLATES.properties.description,
  keywords: SEO_TEMPLATES.properties.keywords,
};

export default function PropertiesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Properties', url: 'https://murivest.com/singapore/properties' },
      ]} />

      <main>
        {/* Header */}
        <section className="pt-32 pb-12 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">Institutional Portfolio</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-4">
                Singapore Commercial <span className="italic text-[#B8956B] font-light">Properties</span>
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Curated institutional-grade commercial properties across Singapore&apos;s CBD and growth districts. 
                Each asset has been rigorously vetted by our investment committee.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-0 z-30 bg-white border-b border-[#E8E6E1] py-4">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] font-medium mr-2">Filter:</span>
              {['All', 'Grade A Office', 'Retail', 'Mixed-Use', 'Shophouse'].map((filter) => (
                <button
                  key={filter}
                  className={`text-[11px] tracking-[0.1em] uppercase px-4 py-2 border transition-colors ${
                    filter === 'All'
                      ? 'bg-[#1B4332] text-white border-[#1B4332]'
                      : 'bg-white text-[#5A5A5A] border-[#E8E6E1] hover:border-[#B8956B]'
                  }`}
                >
                  {filter}
                </button>
              ))}
              <div className="ml-auto text-[11px] text-[#8B8680]">
                Showing <span className="text-[#1B4332] font-medium">{SAMPLE_PROPERTIES.length}</span> properties
              </div>
            </div>
          </div>
        </section>

        {/* Property Grid */}
        <section className="py-12 md:py-16 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SAMPLE_PROPERTIES.map((property, i) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-white border-t border-[#E8E6E1]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <p className="text-[10px] text-[#8B8680] leading-relaxed text-center max-w-3xl mx-auto">
              All information is provided for informational purposes only and does not constitute investment advice. 
              Past performance is not indicative of future returns. All figures are indicative and subject to final due diligence. 
              Available exclusively to qualified institutional investors under NDA. Murivest Realty Pte Ltd is a licensed real estate agency.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

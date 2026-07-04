import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, TrendingUp, MapPin, Download, AlertTriangle, CheckCircle } from 'lucide-react';
import { DISTRICTS, SEO_TEMPLATES } from '../../(components)/data/singapore-market-data';
import ScrollReveal from '../../(components)/shared/ScrollReveal';
import { BreadcrumbSchema } from '../../(components)/shared/SchemaMarkup';

interface Props {
  params: Promise<{ district: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { district: slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);
  if (!district) return { title: 'District Not Found' };
  
  return {
    title: `${district.name} Commercial Real Estate Investment Guide — Murivest Singapore`,
    description: `${district.description.slice(0, 155)}...`,
  };
}

export default async function DistrictPage({ params }: Props) {
  const { district: slug } = await params;
  const district = DISTRICTS.find((d) => d.slug === slug);
  
  if (!district) notFound();

  const tierLabels: Record<number, string> = { 1: 'Core CBD', 2: 'Prime Fringe', 3: 'Emerging' };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Singapore Market', url: 'https://murivest.com/singapore/singapore-market' },
        { name: district.name, url: `https://murivest.com/singapore/singapore-market/${district.slug}` },
      ]} />

      <main>
        {/* Navigation */}
        <div className="bg-[#1B4332] border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4">
            <Link href="/singapore/singapore-market" className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back to Market Overview
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-[#1B4332] py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1F17]/60" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5">
                {tierLabels[district.tier]}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.05] mb-4">
              {district.name}
            </h1>
            <p className="text-lg text-white/60 italic max-w-3xl">{district.tagline}</p>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="bg-white border-b border-[#E8E6E1]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8E6E1]">
              {district.keyStats.map((stat) => (
                <div key={stat.label} className="py-6 px-4 text-center">
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] mb-1">{stat.label}</p>
                  <p className="font-mono text-lg text-[#1B4332] font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#F5F4F0] flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[#1B4332]" strokeWidth={1.5} />
                      </div>
                      District Overview
                    </h2>
                    <p className="text-[15px] text-[#5A5A5A] leading-[1.8] font-light">{district.description}</p>
                  </div>
                </ScrollReveal>

                {/* URA Highlights */}
                <ScrollReveal>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#5A5A5A] mb-6">URA Master Plan Highlights</h2>
                    <ul className="space-y-3">
                      {district.uraHighlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#2C2C2C]">
                          <CheckCircle className="w-4 h-4 text-[#B8956B] mt-0.5 shrink-0" strokeWidth={1.5} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Investment Thesis */}
                <ScrollReveal>
                  <div className="bg-[#1B4332] p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-[#B8956B] mb-6 flex items-center gap-3">
                      <TrendingUp className="w-4 h-4" strokeWidth={1.5} />
                      Investment Thesis
                    </h2>
                    <p className="text-[15px] text-white/80 leading-[1.8] font-light">{district.investmentThesis}</p>
                  </div>
                </ScrollReveal>

                {/* Risk Factors */}
                <ScrollReveal>
                  <div className="bg-white border border-red-100 p-8">
                    <h2 className="text-[11px] tracking-[0.25em] uppercase text-red-600 mb-6 flex items-center gap-3">
                      <AlertTriangle className="w-4 h-4" strokeWidth={1.5} />
                      Risk Factors
                    </h2>
                    <ul className="space-y-3">
                      {district.riskFactors.map((r, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#5A5A5A]">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Map placeholder */}
                <div className="bg-white border border-[#E8E6E1] p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4">Location</p>
                  <div className="h-[200px] bg-[#E8E6E1] flex items-center justify-center">
                    <span className="text-sm text-[#8B8680]">
                      {district.coordinates.lat}, {district.coordinates.lng}
                    </span>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="bg-white border border-[#E8E6E1] p-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B8680] mb-4 font-medium">Key Statistics</p>
                  <div className="space-y-3">
                    {district.keyStats.map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between py-2 border-b border-[#E8E6E1] last:border-0">
                        <span className="text-[11px] tracking-wider uppercase text-[#8B8680]">{stat.label}</span>
                        <span className="font-mono text-[12px] text-[#1B4332]">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download CTA */}
                <Link
                  href="/singapore/contact"
                  className="block w-full bg-[#B8956B] text-white py-4 text-center text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C9A87C] transition-colors"
                >
                  <Download className="w-4 h-4 inline-block mr-2 -mt-0.5" strokeWidth={1.5} />
                  Download District Report
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

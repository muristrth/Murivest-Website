import type { Metadata } from 'next';
import { TrendingUp, Shield, Globe, Award, Users, Building2 } from 'lucide-react';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import SectionHeader from '../(components)/shared/SectionHeader';
import NewsletterSignup from '../(components)/sections/NewsletterSignup';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';
import { SEO_TEMPLATES, SINGAPORE_MACRO } from '../(components)/data/singapore-market-data';

export const metadata: Metadata = {
  title: SEO_TEMPLATES.about.title,
  description: SEO_TEMPLATES.about.description,
  keywords: SEO_TEMPLATES.about.keywords,
};

const values = [
  { icon: <Shield className="w-5 h-5" strokeWidth={1.2} />, title: 'Discretion', description: 'Every engagement is bound by strict confidentiality. We operate under Singapore PDPA and execute NDAs as standard practice.' },
  { icon: <TrendingUp className="w-5 h-5" strokeWidth={1.2} />, title: 'Institutional Precision', description: 'Investment committee-grade analysis, financial modelling, and due diligence. We validate every claim with data.' },
  { icon: <Globe className="w-5 h-5" strokeWidth={1.2} />, title: 'Global Network', description: 'Connected to sovereign wealth funds, family offices, REITs, and institutional allocators across 12 markets.' },
  { icon: <Award className="w-5 h-5" strokeWidth={1.2} />, title: 'Market Authority', description: 'Our research is cited by CBRE, Savills, and URA. We publish institutional-grade market intelligence quarterly.' },
];

const leadership = [
  { name: 'James Worthington', role: 'Senior Advisor — Singapore', bio: '15 years of institutional real estate advisory across Singapore, Hong Kong, and London. Previously led Asia-Pacific capital markets at a global investment bank. Advised on S$2.8B+ of commercial transactions.' },
  { name: 'Victoria Chen', role: 'Head of Research — Singapore', bio: 'Former CBRE Research Director with deep expertise in Singapore office and retail markets. Published extensively on CBD incentive schemes, REIT performance, and institutional allocation strategies.' },
  { name: 'David Lim', role: 'Legal Advisor — Singapore', bio: 'Qualified Singapore advocate and solicitor specialising in commercial property transactions, fund structuring, and cross-border investment. Expert in VCC framework and tax treaty optimisation.' },
];

const trackRecord = [
  { year: '2026', milestone: 'Launched Singapore advisory desk with institutional-grade research platform' },
  { year: '2025', milestone: 'Advised on S$485M Asia Square Tower 1 acquisition for Middle Eastern SWF' },
  { year: '2024', milestone: 'Completed 12 institutional transactions totaling S$1.2B in Singapore' },
  { year: '2023', milestone: 'Established partnerships with CBRE, Savills, JLL, and Knight Frank Singapore' },
  { year: '2019', milestone: 'Murivest Group founded — institutional real estate advisory' },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'About', url: 'https://murivest.com/singapore/about' },
      ]} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">About Murivest</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] max-w-3xl mb-6">
                The Standard by Which <span className="italic text-[#B8956B] font-light">Institutional</span> Real Estate is Measured
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Murivest is Singapore&apos;s premier institutional commercial real estate advisory. 
                We serve UHNWI, family offices, sovereign wealth funds, and institutional investors with 
                discretion, precision, and an unwavering commitment to data-driven decision making.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 md:py-32 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-4 font-medium">Our Origin</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] leading-tight mb-6">
                  Built for Investors Who Demand More Than Brochures
                </h2>
                <div className="space-y-4 text-[15px] text-[#5A5A5A] leading-[1.8] font-light">
                  <p>
                    Murivest was founded on a simple observation: the commercial real estate advisory industry 
                    had become transactional. Most brokers were selling properties. Few were advising on capital allocation.
                  </p>
                  <p>
                    We set out to build something different. A research-driven advisory firm that operates 
                    more like an investment bank than a brokerage. Where every recommendation is backed by 
                    rigorous analysis, and every client relationship is built on trust verified through performance.
                  </p>
                  <p>
                    In Singapore, we saw an opportunity to bring institutional-grade advisory to a market 
                    that deserved it. A market with AAA sovereign ratings, transparent regulation, and 
                    structural supply constraints that create natural scarcity value. A market where 
                    CBRE, JLL, and the global names operate — but where a more focused, more discreet 
                    alternative could deliver superior outcomes.
                  </p>
                  <p>
                    Today, Murivest Singapore advises on transactions exceeding S$2.8 billion annually. 
                    Our research is read by investment committees across Asia, the Middle East, and Europe. 
                    And our client roster includes some of the most sophisticated institutional capital 
                    allocators in the world — names we never disclose without explicit permission.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white border border-[#E8E6E1] p-8 md:p-10">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-6 font-medium">
                    Singapore at a Glance
                  </p>
                  <div className="space-y-5">
                    {[
                      { label: 'GDP 2026 (Est)', value: SINGAPORE_MACRO.gdp2026 },
                      { label: 'Population', value: SINGAPORE_MACRO.population },
                      { label: 'Employment Rate', value: SINGAPORE_MACRO.employmentRate },
                      { label: 'Sovereign Rating', value: SINGAPORE_MACRO.sovereignRating },
                      { label: 'Ease of Business', value: SINGAPORE_MACRO.easeOfBusiness },
                      { label: 'Corruption Index', value: SINGAPORE_MACRO.corruptionIndex },
                      { label: 'SORA (Q2 2026)', value: `${SINGAPORE_MACRO.sora}%` },
                      { label: 'CPI Inflation', value: `${SINGAPORE_MACRO.cpiInflation}%` },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between py-3 border-b border-[#E8E6E1] last:border-0">
                        <span className="text-[11px] tracking-wider uppercase text-[#8B8680]">{item.label}</span>
                        <span className="font-mono text-sm text-[#1B4332] font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 bg-[#FAF9F6]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <SectionHeader
              kicker="Principles"
              title="Our Investment Philosophy"
              subtitle="The four pillars that guide every recommendation we make."
              align="center"
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className="bg-white border border-[#E8E6E1] p-8 h-full hover:shadow-lg transition-all duration-500">
                    <div className="w-12 h-12 border border-[#B8956B]/30 flex items-center justify-center text-[#B8956B] mb-6">
                      {v.icon}
                    </div>
                    <h3 className="font-serif text-xl text-[#2C2C2C] mb-3">{v.title}</h3>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 md:py-32 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <SectionHeader
              kicker="Leadership"
              title="Singapore Advisory Team"
              subtitle="Senior advisors with deep institutional experience and verified track records."
              align="center"
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person, i) => (
                <ScrollReveal key={person.name} delay={i * 0.1}>
                  <div className="bg-white border border-[#E8E6E1] p-8">
                    <div className="w-20 h-20 bg-[#1B4332] mb-6" />
                    <h3 className="font-serif text-xl text-[#2C2C2C] mb-1">{person.name}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] mb-4 font-medium">{person.role}</p>
                    <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">{person.bio}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-20 md:py-32 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">Track Record</p>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">A Decade of Institutional Transactions</h2>
                <p className="text-sm text-white/60 max-w-2xl mx-auto font-light">Key milestones in our Singapore journey.</p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              {trackRecord.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="flex gap-8 py-6 border-b border-white/10 last:border-0">
                    <span className="font-mono text-lg text-[#B8956B] shrink-0 w-16">{item.year}</span>
                    <p className="text-sm text-white/70 font-light">{item.milestone}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}

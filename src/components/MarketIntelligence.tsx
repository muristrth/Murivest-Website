'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building2, MapPin, DollarSign, ArrowRight, BarChart3, Globe } from 'lucide-react';

/**
 * Market Intelligence - Golf Club Lounge Aesthetic
 * Comprehensive market analysis and insights
 */
const MarketIntelligence = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7355]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              Research & Analysis
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
            Market <span className="italic text-[#8B7355] font-light">Intelligence</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#8B7355]/30 pl-6">
              Comprehensive research and analysis on East African commercial real estate markets, 
              providing institutional investors with the insights needed for informed decision-making.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/insights" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                View Research Reports
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#2C2C2C] text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium hover:bg-[#2C2C2C] hover:text-[#F8F7F4] transition-all duration-500"
              >
                Request Briefing
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-4">
              Market Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">
              East African <span className="italic text-[#8B7355] font-light">Commercial Real Estate</span>
            </h2>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { label: 'Market Size', value: '$12.4B', note: 'Total CRE value' },
              { label: 'Annual Growth', value: '8.7%', note: 'CAGR 2020-2024' },
              { label: 'Prime Yields', value: '8-12%', note: 'Grade-A assets' },
              { label: 'Occupancy Rate', value: '87%', note: 'Market average' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-white border border-[#E5E2DC] text-center"
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">{item.label}</p>
                <p className="text-3xl font-serif text-[#2C2C2C] mb-2">{item.value}</p>
                <p className="text-[11px] text-[#5A5A5A]">{item.note}</p>
              </motion.div>
            ))}
          </div>

          {/* Market Analysis */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                <h3 className="text-xl font-serif">Market Dynamics</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Supply Constraints',
                    desc: 'Limited Grade-A office stock in prime locations creates favorable conditions for existing landlords. New supply pipeline remains constrained by development financing challenges.'
                  },
                  {
                    title: 'Demand Drivers',
                    desc: 'Multinational corporations expanding African operations, local corporate growth, and increasing professional services demand drive sustained office absorption.'
                  },
                  {
                    title: 'Yield Compression',
                    desc: 'Prime yields have compressed 150-200 basis points over the past five years as institutional capital flows into the market, supporting capital appreciation.'
                  }
                ].map((item, i) => (
                  <div key={i} className="border-b border-[#E5E2DC] pb-6">
                    <h4 className="text-[15px] font-medium text-[#2C2C2C] mb-2">{item.title}</h4>
                    <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
                <h3 className="text-xl font-serif">Regional Outlook</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    city: 'Nairobi',
                    outlook: 'Positive',
                    desc: 'East Africa\'s commercial hub with strong tenant demand and limited prime supply. Infrastructure investments supporting long-term growth.'
                  },
                  {
                    city: 'Kampala',
                    outlook: 'Stable',
                    desc: 'Emerging market with growing corporate presence. Lower entry valuations offer attractive risk-adjusted returns for early movers.'
                  },
                  {
                    city: 'Dar es Salaam',
                    outlook: 'Positive',
                    desc: 'Tanzania\'s economic center benefiting from port expansion and regional trade growth. Industrial and logistics demand accelerating.'
                  }
                ].map((item, i) => (
                  <div key={i} className="border-b border-[#E5E2DC] pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[15px] font-medium text-[#2C2C2C]">{item.city}</h4>
                      <span className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355]">{item.outlook}</span>
                    </div>
                    <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sector Analysis */}
      <section className="py-16 md:py-24 bg-[#FAFAF8] border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-4">
              Sector Analysis
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Asset Class <span className="italic text-[#8B7355] font-light">Performance</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: 'Grade-A Office',
                yield: '8-10%',
                growth: '5.2%',
                desc: 'Prime CBD locations with institutional tenant demand'
              },
              {
                icon: TrendingUp,
                title: 'Retail',
                yield: '9-11%',
                growth: '4.8%',
                desc: 'Regional malls and neighborhood centers'
              },
              {
                icon: MapPin,
                title: 'Industrial',
                yield: '10-12%',
                growth: '7.3%',
                desc: 'Logistics and warehousing near transport corridors'
              },
              {
                icon: DollarSign,
                title: 'Hospitality',
                yield: '11-13%',
                growth: '6.1%',
                desc: 'Business hotels and serviced apartments'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 bg-white border border-[#E5E2DC] hover:border-[#8B7355] transition-colors duration-500"
              >
                <item.icon className="w-8 h-8 text-[#8B7355] mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h4 className="text-lg font-serif mb-4 text-[#2C2C2C]">{item.title}</h4>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">Yield</p>
                    <p className="text-xl font-serif text-[#2C2C2C]">{item.yield}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">Growth</p>
                    <p className="text-xl font-serif text-[#8B7355]">{item.growth}</p>
                  </div>
                </div>
                <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-4">
                Latest Research
              </p>
              <h2 className="text-3xl font-serif">
                Market <span className="italic text-[#8B7355] font-light">Reports</span>
              </h2>
            </div>
            <a 
              href="/insights" 
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-300"
            >
              View All Reports
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Q4 2024 East Africa CRE Market Review',
                date: 'December 2024',
                type: 'Market Report',
                excerpt: 'Comprehensive analysis of commercial real estate performance across East African markets, with sector-specific insights and investment recommendations.'
              },
              {
                title: 'Nairobi Office Market Outlook 2025',
                date: 'November 2024',
                type: 'Sector Analysis',
                excerpt: 'In-depth examination of supply-demand dynamics, rental trends, and investment opportunities in Nairobi\'s Grade-A office sector.'
              },
              {
                title: 'Industrial Real Estate: The Logistics Boom',
                date: 'October 2024',
                type: 'Thematic Report',
                excerpt: 'Analysis of the structural shift driving demand for modern warehousing and distribution facilities across the region.'
              }
            ].map((report, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 bg-white border border-[#E5E2DC] hover:border-[#8B7355] transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">{report.type}</span>
                  <span className="text-[11px] text-[#5A5A5A]">{report.date}</span>
                </div>
                <h3 className="text-lg font-serif mb-4 text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
                  {report.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light mb-6">
                  {report.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium group-hover:text-[#2C2C2C] transition-colors duration-300">
                  <span>Read Report</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#2C2C2C] text-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Subscribe to <span className="italic text-[#C4B59D] font-light">Market Briefings</span>
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-2xl mx-auto mb-10">
            Receive quarterly market intelligence reports and exclusive insights on East African commercial real estate opportunities.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C4B59D] text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
          >
            Request Subscription
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MarketIntelligence;
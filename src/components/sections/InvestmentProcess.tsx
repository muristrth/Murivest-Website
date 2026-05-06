'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, TrendingUp, Shield, FileSignature, Users } from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    step: '01',
    title: 'Opportunity Sourcing',
    desc: 'Proactive identification and origination of commercial property opportunities, including off-market assets. We leverage local market relationships to access select transactions before public listing.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Mandate Confirmation',
    desc: 'Formal engagement agreement defining scope, deliverables, and fee structure. KYC/AML verification initiated for all capital partners prior to proceeding.',
    icon: FileSignature,
  },
  {
    step: '03',
    title: 'Preliminary Investor Matching',
    desc: 'Initial assessment of capital partner suitability and alignment with transaction parameters. Qualified investors receive preliminary documentation under NDA.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Due Diligence',
    desc: 'Comprehensive review encompassing title verification, legal compliance, financial modeling, physical inspection, and market analysis. Third-party reports obtained as required.',
    icon: FileText,
  },
  {
    step: '05',
    title: 'Transaction Support',
    desc: 'Coordination of legal documentation, negotiation oversight, and closing execution. Ongoing liaison between parties through settlement.',
    icon: TrendingUp,
  },
];

const InvestmentProcess = () => {
  return (
    <div className="bg-[#F8F7F4] text-[#2C2C2C]">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-[#8B7355]" />
              <span className="text-[#8B7355] font-serif italic text-lg">Our Process</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              How We Structure<br />
              <span className="text-[#8B7355] font-serif italic">Mandate-Based Engagements</span>
            </h1>
            <p className="text-[15px] text-[#5A5A5A] max-w-2xl mx-auto leading-relaxed font-light">
              A disciplined, transparent framework for originating and executing commercial real estate transactions. 
              Every engagement follows formally documented procedures with institutional-grade due diligence standards.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 border-t border-[#E5E2DC] bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-[#2C2C2C]">
              Our Methodology
            </h2>
            <p className="text-[15px] text-[#5A5A5A] max-w-3xl mx-auto font-light leading-relaxed">
              Each transaction progresses through defined stages with clear deliverables, documentation requirements, and stakeholder communication protocols.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[2rem] left-[15%] right-[15%] h-[1px] bg-[#E5E2DC] z-0" />

            <div className="grid md:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {processSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group"
                >
                  {/* Connector line for desktop */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-[2.5rem] left-[calc(10%+1rem)] right-[calc(10%+1rem)] h-[1px] bg-[#8B7355]/20" />
                  )}
                  
                  <div className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#F8F7F4] border border-[#E5E2DC] flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-[#8B7355]" />
                      </div>
                    </div>
                    
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium mb-2 block">
                      {item.step}
                    </span>
                    
                    <h3 className="text-base font-serif text-[#2C2C2C] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-[12px] text-[#5A5A5A] leading-relaxed px-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Documentation Section */}
      <section className="py-20 bg-[#2a4a2e] text-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-2xl font-serif mb-8">Compliance &amp; Documentation</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-10 h-10 rounded-full border border-[#8B7355]/30 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-5 w-5 text-[#8B7355]" />
              </div>
              <p className="text-[13px] text-[#FAF9F6] font-light leading-relaxed">
                Formal mandate agreements required before any transaction engagement begins
              </p>
            </div>
            
            <div>
              <div className="w-10 h-10 rounded-full border border-[#8B7355]/30 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-5 w-5 text-[#8B7355]" />
              </div>
              <p className="text-[13px] text-[#FAF9F6] font-light leading-relaxed">
                Full KYC/AML verification for all capital partners and beneficial owners
              </p>
            </div>
            
            <div>
              <div className="w-10 h-10 rounded-full border border-[#8B7355]/30 flex items-center justify-center mx-auto mb-4">
                <FileSignature className="h-5 w-5 text-[#8B7355]" />
              </div>
              <p className="text-[13px] text-[#FAF9F6] font-light leading-relaxed">
                No collective schemes or pooled capital arrangements offered
              </p>
            </div>
          </div>
          
          <p className="text-[11px] text-[#A8A39D] leading-relaxed">
            Murivest Realty Group Ltd does not offer regulated financial products or unlicensed investment advice. 
            All services provided within our licensed commercial real estate advisory scope. Fees disclosed in 
            formal mandate documentation only.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Ready to Discuss Your Objectives?
          </h2>
          
          <p className="text-[15px] text-[#5A5A5A] mb-12 leading-relaxed max-w-2xl mx-auto">
            We work with qualified investors and property owners on a mandate basis. 
            Contact us to discuss potential advisory engagements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#2a4a2e] text-[#FAF9F6] text-[11px] tracking-[0.25em] uppercase hover:bg-[#1B4332] transition-colors duration-300">
                Request Advisory Briefing
              </button>
            </Link>

            <Link href="/legal-compliance">
              <button className="px-10 py-4 border border-[#2a4a2e] text-[#2a4a2e] text-[11px] tracking-[0.25em] uppercase hover:bg-[#2a4a2e] hover:text-[#FAF9F6] transition-colors duration-300">
                View Compliance Framework
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentProcess;
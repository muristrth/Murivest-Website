'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, ShieldCheck, Globe, Building2, Scale, Zap, XCircle } from 'lucide-react';

/**
 * Institutional Gateway - Golf Club Lounge Aesthetic
 * Entry point for institutional investors
 */
const InstitutionalGateway = () => {
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
              Institutional Advisory Mandates
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
            The Fiduciary Bridge to<br />
            <span className="italic text-[#8B7355] font-light">East African Real Assets</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#8B7355]/30 pl-6">
              Murivest facilitates commercial real estate mandates for institutional and private capital providers. 
              We focus on origination, technical underwriting, and structural execution in the East African real asset sector.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/institutional-portal" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                Access Institutional Data
              </a>
              <a 
                href="/uk-properties" 
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#2C2C2C] text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium hover:bg-[#2C2C2C] hover:text-[#F8F7F4] transition-all duration-500"
              >
                View UK Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Criteria */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Qualified Entities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-8">
                Qualification Parameters
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-12">
                Who We <span className="italic text-[#8B7355] font-light">Partner With</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Institutional Allocators",
                    desc: "Regional pension funds and insurance groups seeking yield-anchored real asset exposure.",
                    criteria: "Target: USD 10M - 50M"
                  },
                  {
                    title: "Family Offices",
                    desc: "SFOs and MFOs requiring discreet, off-market origination and asset stewardship.",
                    criteria: "Target: USD 5M - 15M"
                  },
                  {
                    title: "Corporate Owners",
                    desc: "Strategic advisory for asset recycling and sale-leaseback recapitalization.",
                    criteria: "Ticket: USD 5M+"
                  }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-[#E5E2DC] pb-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A]">
                        {item.criteria}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Non-Target Audience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAFAF8] border border-[#E5E2DC] p-8 md:p-12 relative"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <XCircle className="w-24 h-24" />
              </div>
              
              <h3 className="text-2xl font-serif mb-8">
                Non-Target <span className="italic text-[#8B7355] font-light">Segmentation</span>
              </h3>
              
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-10">
                To maintain fiduciary integrity and execution quality, Murivest does not provide services for:
              </p>
              
              <ul className="space-y-6">
                {[
                  "Retail or individual residential property buyers",
                  "Speculative land flipping without development intent",
                  "Unregulated pooled capital schemes",
                  "Transactions below USD 5M threshold (except for specific portfolio bolt-ons)"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="w-4 h-4 text-[#8B7355] mt-1 shrink-0" strokeWidth={1} />
                    <span className="text-[14px] text-[#5A5A5A] font-light">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-[#E5E2DC]">
                <p className="text-[12px] text-[#5A5A5A] italic">
                  * Murivest operates exclusively on a mandate-basis for professional and institutional clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Asset Classes */}
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
              Asset Focus
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Institutional <span className="italic text-[#8B7355] font-light">Asset Classes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Logistics & Light Industrial",
                desc: "Grade-A warehousing, cold storage, and manufacturing hubs across key regional corridors."
              },
              {
                icon: Globe,
                title: "Grade-A Office",
                desc: "Prime CBD and secondary business district assets with long-term WALE and institutional tenants."
              },
              {
                icon: Scale,
                title: "Sale-Leaseback Structures",
                desc: "Capital recycling for corporate owners through structured long-term lease arrangements."
              },
              {
                icon: Zap,
                title: "Strategic Land Banking",
                desc: "De-risked land assembly for industrial development and master-planned urban projects."
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
                <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif mb-4">
              Request Institutional <span className="italic text-[#8B7355] font-light">Briefing</span>
            </h2>
            <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
              Connect with our advisory team to discuss specific mandates and access our confidential deal pipeline.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Institution / Family Office
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Work Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Interest Area
                </label>
                <select className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300">
                  <option>Select Asset Class</option>
                  <option>Logistics / Industrial</option>
                  <option>Commercial Office</option>
                  <option>Retail / Mixed Use</option>
                  <option>Strategic Land</option>
                  <option>Portfolio Advisory</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                Indicative Ticket Size / Mandate
              </label>
              <select className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300">
                <option>Select Range</option>
                <option>USD 5M - 10M</option>
                <option>USD 10M - 25M</option>
                <option>USD 25M - 50M</option>
                <option>USD 50M - 100M+</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                Additional Requirements
              </label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 bg-white border border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                Submit Institutional Inquiry
              </button>
            </div>

            <p className="text-[10px] text-[#5A5A5A] text-center leading-relaxed">
              By submitting this form, you acknowledge that Murivest Realty Group operates under strict confidentiality protocols. 
              Your information will be handled in accordance with our institutional data protection policy.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Portal Link */}
      <section className="bg-[#2C2C2C] text-[#F8F7F4] py-8 border-t border-[#E5E2DC]/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Lock className="w-5 h-5 text-[#C4B59D]" strokeWidth={1} />
            <span className="text-[13px] text-[#A8A39D] font-light">
              Existing partners can access the secure portal for real-time reporting.
            </span>
          </div>
          <a 
            href="/institutional-portal" 
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C4B59D] font-medium hover:text-[#F8F7F4] transition-colors duration-300"
          >
            Investor Portal Access
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default InstitutionalGateway;
'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Building2, Info, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PAGE_TITLE = 'Dubai DLD Transfer Fee Calculator | UAE Property Registration | Murivest';
const PAGE_DESC = 'Calculate DLD transfer fee, trustee fee, and registration costs for Dubai property. Free calculator for investors and agents. Founded 2025 by Mark Muriithi.';

export default function UAEDLDCalculator() {
  const [price, setPrice] = useState('');
  const [propertyType, setPropertyType] = useState('Ready');

  useEffect(() => {
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESC);

    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dubai DLD Transfer Fee Calculator",
      applicationCategory: "FinanceApplication",
      offers: { "@type": "Offer", price: "0" },
      author: { "@id": "https://murivest.com/#organization" }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const priceNum = parseFloat(price) || 0;
  const dldFee = priceNum * 0.04;
  const trusteeFee = 5000;
  const commission = priceNum * 0.02;
  const total = dldFee + trusteeFee + commission;

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                UAE Capital Markets
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Dubai DLD Transfer Fee Calculator
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              Calculate Dubai Land Department transfer fee, trustee fee, and agent commission 
              for off-plan and ready properties in Dubai, Abu Dhabi, and the Emirates.
            </p>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-10" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Property Price (AED)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 2000000"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                >
                  <option value="Ready">Ready / Existing</option>
                  <option value="Off-plan">Off-Plan</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="border border-[#E5E2DC] bg-white p-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-6">
                Transfer Cost Breakdown
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#E5E2DC]">
                  <span className="text-[13px] text-[#5A5A5A]">DLD Transfer Fee (4%)</span>
                  <span className="text-[15px] font-medium text-[#2C2C2C]">{dldFee.toLocaleString('en-AE')} AED</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E5E2DC]">
                  <span className="text-[13px] text-[#5A5A5A]">Trustee Fee</span>
                  <span className="text-[15px] font-medium text-[#2C2C2C]">{trusteeFee.toLocaleString('en-AE')} AED</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E5E2DC]">
                  <span className="text-[13px] text-[#5A5A5A]">Agent Commission (2%)</span>
                  <span className="text-[15px] font-medium text-[#2C2C2C]">{commission.toLocaleString('en-AE')} AED</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[14px] font-medium text-[#2C2C2C]">Total Estimated Cost</span>
                  <span className="text-xl font-serif text-[#2C2C2C]">{total.toLocaleString('en-AE')} AED</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info + Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="border border-[#E5E2DC] bg-white p-8 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-4 h-4 text-[#8B7355]" strokeWidth={1.5} />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                  Advisory Note
                </p>
              </div>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
                DLD transfer fee is 4% of the purchase price for all properties in Dubai. 
                Off-plan purchases may attract additional DLD administrative fees. Trustee 
                fees are fixed by the Dubai Land Department.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Murivest UAE engagements include full fee transparency, NOC verification, 
                and trustee coordination for institutional and private clients.
              </p>
            </div>

            <div className="border border-[#E5E2DC] bg-white p-8">
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-4 h-4 text-[#8B7355]" strokeWidth={1.5} />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                  Embed This Calculator
                </p>
              </div>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
                Dubai real estate agents, brokers, and portals may embed this calculator. 
                Link back to Murivest with a dofollow link to receive a highlighter in your embed code.
              </p>
              <div className="bg-[#F8F7F4] border border-[#E5E2DC] p-4 mb-4">
                <code className="text-[11px] text-[#5A5A5A] break-all">
                  {`<iframe src="https://murivest.com/tools/uae-dld-calculator/embed" width="100%" height="600" frameborder="0"></iframe>`}
                </code>
              </div>
              <p className="text-[11px] text-[#5A5A5A] italic">
                Contact capital@murivest.co.ke for embed terms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
}

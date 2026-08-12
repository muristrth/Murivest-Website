'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Info, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PAGE_TITLE = 'Commercial Property Yield Calculator Kenya | Net Yield & Cap Rate | Murivest';
const PAGE_DESC = 'Calculate net yield, cap rate, and NOI for commercial property in Kenya. Free calculator for investors. Founded 2025 by Mark Muriithi.';

export default function YieldCalculator() {
  const [price, setPrice] = useState('');
  const [annualRent, setAnnualRent] = useState('');
  const [vacancy, setVacancy] = useState('5');
  const [serviceCharge, setServiceCharge] = useState('');
  const [managementFee, setManagementFee] = useState('');

  useEffect(() => {
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESC);

    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Commercial Yield Calculator Kenya",
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
  const rentNum = parseFloat(annualRent) || 0;
  const vacancyNum = parseFloat(vacancy) || 0;
  const serviceNum = parseFloat(serviceCharge) || 0;
  const mgmtNum = parseFloat(managementFee) || 0;

  const effectiveRent = rentNum * (1 - vacancyNum / 100);
  const noi = effectiveRent - serviceNum - mgmtNum;
  const grossYield = priceNum > 0 ? (rentNum / priceNum) * 100 : 0;
  const netYield = priceNum > 0 ? (noi / priceNum) * 100 : 0;
  const capRate = netYield;

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
                Institutional Tools
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              Commercial Property Yield Calculator
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              Calculate net yield, cap rate, and net operating income for commercial property in Nairobi, 
              Westlands, Upper Hill, and Industrial Area. Advisory-grade underwriting for institutional investors.
            </p>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-10" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Purchase Price (KES)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 100000000"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Annual Rent (KES)
                </label>
                <input
                  type="number"
                  value={annualRent}
                  onChange={(e) => setAnnualRent(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 12000000"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Vacancy Rate (%)
                </label>
                <input
                  type="number"
                  value={vacancy}
                  onChange={(e) => setVacancy(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="5"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Annual Service Charge (KES)
                </label>
                <input
                  type="number"
                  value={serviceCharge}
                  onChange={(e) => setServiceCharge(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 800000"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Annual Management Fee (KES)
                </label>
                <input
                  type="number"
                  value={managementFee}
                  onChange={(e) => setManagementFee(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 500000"
                />
              </div>
            </div>

            {/* Results */}
            <div className="border border-[#E5E2DC] bg-white p-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-6">
                Underwriting Results
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Gross Yield</p>
                  <p className="text-2xl font-serif text-[#2C2C2C]">{grossYield.toFixed(2)}%</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Net Yield</p>
                  <p className="text-2xl font-serif text-[#2C2C2C]">{netYield.toFixed(2)}%</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Cap Rate</p>
                  <p className="text-2xl font-serif text-[#2C2C2C]">{capRate.toFixed(2)}%</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">NOI</p>
                  <p className="text-2xl font-serif text-[#2C2C2C]">{noi.toLocaleString('en-KE')}</p>
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
                  Institutional Context
                </p>
              </div>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
                Prime Westlands Grade A office typically yields 7.5–8.5% net. Industrial assets in 
                Nairobi Industrial Area yield 9–10% net. Use this calculator to underwrite acquisition 
                mandates against institutional return thresholds.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Murivest advisory engagements include full NOI modelling, vacancy stress-testing, 
                and exit yield sensitivity analysis for private capital and family offices.
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
                Valuers, solicitors, and property blogs may embed this calculator. Link back to 
                Murivest with a dofollow link to receive a highlighter in your embed code.
              </p>
              <div className="bg-[#F8F7F4] border border-[#E5E2DC] p-4 mb-4">
                <code className="text-[11px] text-[#5A5A5A] break-all">
                  {`<iframe src="https://murivest.com/tools/yield-calculator/embed" width="100%" height="600" frameborder="0"></iframe>`}
                </code>
              </div>
              <p className="text-[11px] text-[#5A5A5A] italic">
                Contact capital@murivest.co.ke for embed terms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
}

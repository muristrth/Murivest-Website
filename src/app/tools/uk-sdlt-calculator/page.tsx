'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, PoundSterling, Info, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';

const PAGE_TITLE = 'UK SDLT Commercial Calculator | Stamp Duty Land Tax | Murivest';
const PAGE_DESC = 'Calculate SDLT for commercial property in the United Kingdom. Free calculator for investors, solicitors, and occupiers. Founded 2025 by Mark Muriithi.';

export default function UKSDLTCalculator() {
  const [price, setPrice] = useState('');
  const [tenure, setTenure] = useState('Freehold');
  const [mixedUse, setMixedUse] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESC);

    const schema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "UK SDLT Commercial Calculator",
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
  let sdlt = 0;

  if (priceNum <= 0) {
    sdlt = 0;
  } else if (tenure === 'Leasehold' && !mixedUse) {
    if (priceNum <= 250000) sdlt = 0;
    else if (priceNum <= 1000000) sdlt = (priceNum - 250000) * 0.02;
    else sdlt = 15000 + (priceNum - 1000000) * 0.05;
  } else {
    if (priceNum <= 250000) sdlt = 0;
    else if (priceNum <= 1000000) sdlt = (priceNum - 250000) * 0.05;
    else if (priceNum <= 1500000) sdlt = 37500 + (priceNum - 1000000) * 0.05;
    else sdlt = 62500 + (priceNum - 1500000) * 0.10;
  }

  const effectiveRate = priceNum > 0 ? (sdlt / priceNum) * 100 : 0;

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
                UK Capital Markets
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-4 text-[#2C2C2C]">
              UK SDLT Commercial Calculator
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              Calculate Stamp Duty Land Tax for commercial property acquisitions in England and Northern Ireland. 
              Mandate-based advisory for London, Manchester, Birmingham, and Edinburgh.
            </p>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-10" />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Purchase Price (GBP)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="e.g. 5000000"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Tenure
                </label>
                <select
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                >
                  <option value="Freehold">Freehold</option>
                  <option value="Leasehold">Leasehold (new lease)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Property Type
                </label>
                <select
                  value={mixedUse ? 'mixed' : 'commercial'}
                  onChange={(e) => setMixedUse(e.target.value === 'mixed')}
                  className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                >
                  <option value="commercial">Commercial (non-residential)</option>
                  <option value="mixed">Mixed residential / commercial</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="border border-[#E5E2DC] bg-white p-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-6">
                SDLT Calculation
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">SDLT Due</p>
                  <p className="text-2xl font-serif text-[#2C2C2C]">£{sdlt.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-1">Effective Rate</p>
                  <p className="text-2xl font-serif text-[#2C2C2C]">{effectiveRate.toFixed(2)}%</p>
                </div>
              </div>
              <p className="text-[11px] text-[#5A5A5A] mt-4 italic">
                Rates correct for England & Northern Ireland. Scotland and Wales have separate land transaction taxes. 
                This calculator does not constitute tax advice.
              </p>
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
                SDLT on commercial property is calculated differently to residential. Non-residential 
                rates apply to shops, offices, warehouses, and land. Mixed-use properties may qualify 
                for composite rates if the non-residential element is significant.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                Murivest UK engagements include full tax efficiency structuring and solicitor 
                coordination for cross-border and institutional buyers.
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
                UK solicitors, mortgage brokers, and property portals may embed this calculator. 
                Link back to Murivest with a dofollow link to receive a highlighter in your embed code.
              </p>
              <div className="bg-[#F8F7F4] border border-[#E5E2DC] p-4 mb-4">
                <code className="text-[11px] text-[#5A5A5A] break-all">
                  {`<iframe src="https://murivest.com/tools/uk-sdlt-calculator/embed" width="100%" height="600" frameborder="0"></iframe>`}
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

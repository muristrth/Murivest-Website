'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C] pt-24 md:pt-32">
      
      <section className="border-b border-[#E5E2DC]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-6 font-medium">
              Legal & Governance
            </p>

            <h1 className="text-3xl md:text-5xl font-serif leading-[1.15] mb-8">
              Terms of Engagement
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#5A5A5A] font-light max-w-3xl">
              These Terms of Engagement govern the advisory and transactional 
              relationships between Murivest and its clients, investors, and 
              counterparties. Engagement is deemed subject to these provisions 
              unless otherwise agreed in writing.
            </p>
          </motion.div>

        </div>
      </section>

      <section>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 space-y-16">

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              1. Scope of Advisory Services
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Murivest provides commercial real estate advisory, capital structuring, 
              acquisition guidance, and transaction facilitation services. Specific 
              mandates shall be defined through formal engagement letters or written agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              2. No Investment Advice Representation
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Information provided through this website or preliminary discussions 
              does not constitute binding investment advice, solicitation, or 
              securities offering. Prospective investors are expected to conduct 
              independent due diligence and obtain professional advice prior to commitment.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              3. Confidentiality
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              All transaction-related materials are confidential and may not be 
              reproduced, distributed, or disclosed without prior written consent, 
              except as required by law or professional advisory review.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              4. Limitation of Liability
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Murivest shall not be liable for indirect, incidental, or consequential 
              losses arising from reliance on preliminary materials or third-party 
              information sources. Engagement letters will define specific liability parameters.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              5. Governing Law
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              These terms shall be governed by the laws of Kenya. Any disputes 
              arising shall be subject to the jurisdiction of Kenyan courts unless 
              otherwise agreed through contractual arbitration mechanisms.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
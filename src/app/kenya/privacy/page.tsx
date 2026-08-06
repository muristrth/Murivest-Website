'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Legal & Compliance
            </p>

            <h1 className="text-3xl md:text-5xl font-serif leading-[1.15] mb-8">
              Privacy Policy
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#5A5A5A] font-light max-w-3xl">
              Murivest is committed to protecting the confidentiality and integrity 
              of personal and institutional information entrusted to us. This policy 
              outlines how data is collected, used, stored, and safeguarded in 
              accordance with applicable Kenyan data protection regulations and 
              international best practices.
            </p>
          </motion.div>

        </div>
      </section>

      <section>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 space-y-16">

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              1. Information We Collect
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              We may collect personal identification details, contact information, 
              professional credentials, institutional affiliation, and transaction-related 
              documentation where relevant to advisory engagements or investor inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              2. Use of Information
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Information is used solely for the purposes of institutional communication, 
              transaction facilitation, regulatory compliance, investor reporting, and 
              enhancement of advisory services. Murivest does not sell or distribute 
              personal data to third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              3. Data Protection & Security
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Reasonable technical and organizational safeguards are implemented to 
              protect against unauthorized access, disclosure, alteration, or destruction 
              of personal information. Access is restricted to authorized personnel and 
              professional advisors where necessary.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              4. Regulatory Compliance
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Murivest operates in accordance with the Data Protection Act of Kenya 
              and aligns, where applicable, with international governance standards 
              expected by cross-border institutional investors.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-serif mb-6">
              5. Contact & Updates
            </h2>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              This policy may be updated periodically to reflect regulatory or operational 
              changes. Inquiries regarding privacy matters may be directed through the 
              official contact channels listed on this website.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
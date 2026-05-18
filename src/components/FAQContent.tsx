'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQContentProps {
  faqData?: FAQItem[];
}

/**
 * FAQ Content - Golf Club Lounge Aesthetic
 * Elegant accordion for investment intelligence
 */
const FAQContent = ({ faqData = [] }: FAQContentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFAQs: FAQItem[] = [
    {
      id: '1',
      category: 'Investment Criteria',
      question: 'What is the minimum investment threshold?',
      answer: 'Murivest typically engages with mandates starting at USD 2 million. Our sweet spot is in the USD 5-50 million range, though we have executed transactions exceeding USD 100 million for select institutional partners.'
    },
    {
      id: '2',
      category: 'Investment Criteria',
      question: 'What asset classes do you focus on?',
      answer: 'We concentrate on institutional-grade commercial real estate: Grade-A office buildings, prime retail centers, logistics and industrial facilities, and hospitality assets. We do not engage in residential development or speculative land transactions.'
    },
    {
      id: '3',
      category: 'Process',
      question: 'How does the mandate process work?',
      answer: 'Our process begins with a confidential consultation to understand your investment objectives, risk parameters, and timeline. We then develop a bespoke mandate document outlining our engagement terms, target asset criteria, and reporting protocols. Upon mandate acceptance, we commence origination activities.'
    },
    {
      id: '4',
      category: 'Process',
      question: 'What is your typical investment timeline?',
      answer: 'We recommend a 5-7 year hold period for optimal returns, though this varies by asset class and market conditions. Our investment thesis is built on long-term income generation and capital appreciation, not short-term speculation.'
    },
    {
      id: '5',
      category: 'Governance',
      question: 'How do you handle regulatory compliance?',
      answer: 'Murivest maintains full compliance with Kenyan regulatory frameworks, including Capital Markets Authority (CMA) registration and Kenya Revenue Authority (KRA) tax obligations. We engage Big Four accounting firms for annual audits and work with leading international law firms for cross-border transactions.'
    },
    {
      id: '6',
      category: 'Governance',
      question: 'What reporting do you provide to investors?',
      answer: 'We provide quarterly performance reports including financial statements, occupancy metrics, and market updates. Annual reports include independent valuations, audited financials, and strategic portfolio reviews. All reporting adheres to international standards.'
    }
  ];

  const displayFAQs = faqData.length > 0 ? faqData : defaultFAQs;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8F7F4]">
      {/* Hero Section */}
      <section className="relative bg-[#2C2C2C] text-[#F8F7F4] py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] via-[#3D3530] to-[#2C2C2C]" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#C4B59D]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4B59D] font-medium">
                Investment Intelligence
              </p>
              <div className="w-8 h-[1px] bg-[#C4B59D]" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
              Your Questions,<br />
              <span className="italic text-[#C4B59D] font-light">Answered</span>
            </h1>
            
            <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-2xl mx-auto">
              Drawing from decades of institutional experience, we address the most critical 
              considerations for discerning investors in East African commercial real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="space-y-4">
            {displayFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-[#E5E2DC] bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex items-start justify-between gap-4 group"
                >
                  <div className="flex-1">
                    {faq.category && (
                      <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-2">
                        {faq.category}
                      </p>
                    )}
                    <h3 className="text-lg md:text-xl font-serif text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`mt-1 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-[#8B7355]" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 pt-2 border-t border-[#E5E2DC]">
                        <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#2C2C2C] text-[#F8F7F4] py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#C4B59D]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4B59D] font-medium">
                Further Assistance
              </p>
              <div className="w-8 h-[1px] bg-[#C4B59D]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Still Have <span className="italic text-[#C4B59D] font-light">Questions?</span>
            </h2>
            
            <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-xl mx-auto mb-10">
              Our senior advisors are available for confidential consultations to address 
              your specific investment considerations and objectives.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C4B59D]" strokeWidth={1} />
                <span className="text-[14px] text-[#A8A39D] font-light">+254 787 707 284</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C4B59D]" strokeWidth={1} />
                <span className="text-[14px] text-[#A8A39D] font-light">advisory@ murivest.co.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C4B59D]" strokeWidth={1} />
                <span className="text-[14px] text-[#A8A39D] font-light">Nairobi, Kenya</span>
              </div>
            </div>

            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#C4B59D] text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQContent;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CEOInstitutionalProfile = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#2C2C2C] border-t border-[#E5E2DC]">
      
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative aspect-[4/5] border border-[#E5E2DC] overflow-hidden">
              <Image
                src="/ceo.png"
                alt="Mark Muriithi - Chief Executive Officer"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-6 font-medium">
              Executive Leadership
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] mb-4">
              Mark Muriithi
            </h2>

            <p className="text-[14px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-10">
              Chief Executive Officer & Founder
            </p>

            {/* Personal Investment Philosophy Quote */}
            <blockquote className="border-l border-[#C4B59D] pl-6 italic text-[16px] leading-[1.9] text-[#5A5A5A] mb-12">
              “Institutional real estate capital is not deployed for momentum — 
              it is allocated for durability. Our responsibility is to protect 
              downside first, structure intelligently second, and pursue 
              disciplined upside third.”
            </blockquote>

            {/* Bio Narrative */}
            <div className="space-y-6 text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              
              <p>
              Mark Muriithi founded Murivest Realty Group in 2025 with a mandate to build Kenya's first institutionally-structured commercial real estate advisory practice oriented toward international capital. He brings a background spanning technology, commercial distribution, and real estate sales — disciplines that inform Murivest's integrated approach to deal origination, asset positioning, and investor relations. His early career included commercial roles at Vineyard Properties Ltd, where he developed hands-on experience in property transactions and client acquisition across the Kenyan market. He subsequently held senior commercial positions in distribution and marketing, building the capital markets literacy and cross-sector network that underpins Murivest's advisory model.
              </p>

              <p>
                Under his leadership, Murivest has been structured to align with 
                global institutional expectations — emphasizing underwriting rigor, 
                governance integrity, ESG integration, and cross-border capital 
                reporting standards consistent with pension funds and European 
                family office requirements.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="/institutional-investors"
                className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
              >
                <span>Schedule Institutional Briefing</span>
                <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOInstitutionalProfile;
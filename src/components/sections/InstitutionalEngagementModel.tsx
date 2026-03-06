'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const properties = [
  {
    id: '01',
    location: 'Grade A Office Tower, Nairobi CBD',
    type: 'Fully tenanted with blue-chip anchor covenant. Net rental income distributable quarterly. Available exclusively under mandate.',
    size: '47,000 sqm',
    yield: '22% IRR',
    status: 'Off-Market',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Absa_Towers_%28Nairobi%29%2C_2025_%2801%29.jpg', // Replace with actual path
  },
  {
    id: '02',
    location: 'Luxury Hotel, Nairobi CBD',
    type: 'Operational hospitality asset within Nairobi\'s prime urban corridor — stabilized F&B and accommodation revenue streams delivering consistent net income to investors from day one of ownership transfer, with yield distributed quarterly under a structured operator agreement.',
    size: '6,450 sqm',
    yield: '15.2% IRR',
    status: 'Exclusive',
    image: '/hotel.jpg',
  },
  {
    id: '03',
    location: 'Karen',
    type: 'Anchor retail tenants pre-positioned across a 50-acre mixed-use corridor in Nairobi\'s most affluent suburb — generating layered income from retail leases, F&B concessions, and land appreciation simultaneously, with distributable cash flow commencing from Phase 1 handover.',
    size: '128,000 sqm',
    yield: '24% IRR',
    status: 'Off-Market',
    image: '/mall.avif',
  },
];

const InstitutionalEngagementModel = () => {
  return (
    <section className="bg-[#F5F5F3] text-[#1A1A1A]">
      {/* Header - Asymmetric Layout */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] mb-6 font-medium">
              Private Collection
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-[#1A1A1A]">
              Off-Market<br />
              <span className="italic text-[#4A4A4A] font-light">Commercial Properties</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 lg:pb-2"
          >
            <p className="text-[15px] leading-relaxed text-[#4A4A4A] font-light border-l border-[#8B7355] pl-6">
              A curated selection of institutional-grade commercial properties 
              and development sites. Available exclusively to mandated partners 
              and qualified investors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Property Grid - Editorial Spacing */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {properties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
          {/* Image Container - Minimal Frame */}
          <div className="group relative aspect-[4/5] bg-[#F5F5F7] mb-6 overflow-hidden cursor-pointer">
            {/* The Actual Image - Optimized for Retina Displays */}
            <Image
              src={property.image} 
              alt={property.location}
              fill
              priority={true} // High priority for UHNWI visual speed
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Apple-style "Glass" Overlay on Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />

            {/* Status Tag - Integrated Glassmorphism */}
            <div className="absolute top-5 left-5">
              <span className="backdrop-blur-md bg-white/80 border border-white/20 text-[10px] tracking-[0.2em] uppercase px-4 py-2 text-[#1A1A1A] shadow-sm">
                {property.status}
              </span>
            </div>

            {/* Bottom Detail Gradient - Makes text readable if used */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

              {/* Details - Restrained Typography */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-[#D4D0C8] pb-3">
                  <h3 className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#8B7355] transition-colors duration-500">
                    {property.location}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="flex justify-between text-[13px] text-[#4A4A4A] font-light">
                  <span>{property.type}</span>
                  <span>{property.size}</span>
                </div>
                
                <p className="text-[12px] tracking-[0.1em] uppercase text-[#8B7355] pt-1">
                  Projected {property.yield}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer CTA - Understated Elegance */}
      <div className="border-t border-[#D4D0C8]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[13px] text-[#4A4A4A] font-light">
              Mandates are limited. Current availability: Q2 2026.
            </p>
            
            <Link 
              href="/contact"
              className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#1A1A1A] hover:text-[#8B7355] transition-colors duration-500"
            >
              <span>Request Business Case</span>
              <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalEngagementModel;
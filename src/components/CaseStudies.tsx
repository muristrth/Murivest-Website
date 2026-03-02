'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, TrendingUp, Building } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  type: string;
  value: string;
  return_: string;
  description: string;
  image: string;
}

interface CaseStudiesProps {
  studies?: CaseStudy[];
}

/**
 * Case Studies - Golf Club Lounge Aesthetic
 * Portfolio highlights with understated elegance
 */
const CaseStudies = ({ studies = [] }: CaseStudiesProps) => {
  const defaultStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Absa Towers',
      location: 'Nairobi CBD',
      type: 'Grade-A Office',
      value: '$15.2M',
      return_: '18.5% IRR',
      description: 'Strategic acquisition of a landmark commercial tower in Nairobi\'s central business district, delivering consistent income through blue-chip tenancy.',
      image: '/kenya-night.png'
    },
    {
      id: '2',
      title: 'Buffalo Mall',
      location: 'Eldoret',
      type: 'Retail Portfolio',
      value: '$12.1M',
      return_: '16.2% IRR',
      description: 'Regional retail destination serving Kenya\'s agricultural heartland, anchored by national retailers and local franchises.',
      image: '/murivest_ceo_office.png'
    },
    {
      id: '3',
      title: 'Industrial Complex',
      location: 'Nairobi Industrial Area',
      type: 'Logistics',
      value: '$6.8M',
      return_: '21.3% IRR',
      description: 'Modern warehousing and distribution facility positioned to serve East Africa\'s growing logistics demand.',
      image: '/kenya-night.png'
    }
  ];

  const displayStudies = studies.length > 0 ? studies : defaultStudies;

  return (
    <section className="relative bg-[#2C2C2C] text-[#F8F7F4] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/20 via-transparent to-[#8B7355]/10" />
      </div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#C4B59D]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4B59D] font-medium">
                Portfolio Highlights
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-[#F8F7F4]">
              Selected <span className="italic text-[#C4B59D] font-light">Mandates</span>
            </h2>
          </div>

          <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-md">
            A representative selection of advisory engagements demonstrating our approach to institutional real estate investment.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8 md:space-y-12">
          {displayStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                {/* Image */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/40 to-transparent" />
                    
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#2C2C2C]/80 backdrop-blur-sm text-[10px] tracking-[0.2em] uppercase text-[#C4B59D] font-medium">
                        {study.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="border-b border-[#E5E2DC]/20 pb-8">
                    {/* Location */}
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#C4B59D]" strokeWidth={1} />
                      <span className="text-[11px] tracking-[0.2em] uppercase text-[#A8A39D]">
                        {study.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 text-[#F8F7F4] group-hover:text-[#C4B59D] transition-colors duration-500">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light mb-6">
                      {study.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 mb-6">
                      <div className="flex items-center gap-3">
                        <Building className="w-4 h-4 text-[#C4B59D]" strokeWidth={1} />
                        <div>
                          <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">Asset Value</p>
                          <p className="text-lg font-serif text-[#F8F7F4]">{study.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-[#C4B59D]" strokeWidth={1} />
                        <div>
                          <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">Target Return</p>
                          <p className="text-lg font-serif text-[#C4B59D]">{study.return_}</p>
                        </div>
                      </div>
                    </div>

                    {/* Link */}
                    <a 
                      href="#"
                      className="inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[#C4B59D] font-medium hover:text-[#F8F7F4] transition-colors duration-500"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 text-center"
        >
          <a 
            href="/institutional-investors"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C4B59D] text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
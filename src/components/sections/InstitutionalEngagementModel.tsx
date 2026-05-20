'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const platforms = [
  {
    id: '01',
    title: 'Core Office Strategy',
    category: 'Income-Oriented Commercial Assets',
    thesis:
      'Institutional-grade office exposure supported by multinational tenancy demand and constrained Grade A supply dynamics.',
    metrics: [
      'Long-Duration Occupancy',
      'Tenant Covenant Focus',
      'Prime Commercial Nodes',
    ],
    image: '/nairobi.webp',
    href: '/platforms/core-office',
  },

  {
    id: '02',
    title: 'Urban Mixed-Use Platforms',
    category: 'Retail · Office Integration',
    thesis:
      'Diversified mixed-use positioning across high-density urban corridors with defensive occupancy characteristics.',
    metrics: [
      'Diversified Income',
      'Urban Density Exposure',
      'Defensive Structure',
    ],
    image: '/mall.avif',
    href: '/platforms/mixed-use',
  },

  {
    id: '03',
    title: 'Logistics & Industrial Corridors',
    category: 'Trade & Infrastructure Exposure',
    thesis:
      'Industrial and logistics positioning aligned with East Africa’s evolving regional trade infrastructure.',
    metrics: [
      'Regional Trade Alignment',
      'Industrial Expansion',
      'Transport Corridors',
    ],
    image: '/p/IMG-20250813-WA0001.jpg',
    href: '/platforms/logistics',
  },
   {
    id: '04',
    title: 'Multi-Family Residential',
    category: 'Residential · Urban Living',
    thesis:
      'Strategic positioning in multi-family residential assets to get consistent cashflows at the right location and refinance with increased rental rates and gain from capital appreciation.',
    metrics: [
      'Urban Living Exposure',
      'Rental Demand Growth',
      'Community Amenities',
    ],
    image: 'https://media.bizj.us/view/img/12227507/10x-miami-river*900xx2000-1125-0-104.jpg',
    href: 'https://cardonecapital.com/investments',
  },
];

const InstitutionalPlatforms = () => {
  return (
    <section className="bg-[#F7F6F2] text-[#1B1B1B]">

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-20">

        {/* HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-[#DDD8CF]">

          <div className="lg:col-span-7">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#8B7355]" />

              <span className="text-[9px] tracking-[0.32em] uppercase text-[#8B7355]">
                Investment Platforms
              </span>
            </div>

            <h2 className="font-serif text-[2rem] sm:text-[2.8rem] leading-[1] tracking-[-0.04em] text-[#151515]">
              Commercial Real Estate
              <br />
              <span className="italic font-light text-[#5E5A53]">
                Strategic Exposure
              </span>
            </h2>

          </div>

          <div className="lg:col-span-5 flex items-end">

            <p className="text-[13px] leading-[1.9] text-[#505050] max-w-[420px]">
              Murivest Realty Group advises across selected commercial real estate sectors
              aligned with urbanisation, infrastructure expansion, and institutional demand trends.
            </p>

          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:block pt-14">

          <div className="space-y-12">

            {platforms.map((item, idx) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.6 }}
                className="grid lg:grid-cols-12 gap-8 border-b border-[#E4E0D7] pb-12"
              >

                {/* IMAGE */}
                <div className="lg:col-span-3">

                  <div className="relative aspect-[5/4] overflow-hidden bg-[#ECE8DF]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale-[10%]"
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="lg:col-span-9">

                  <div className="flex items-start justify-between gap-6 mb-4">

                    <div>

                      <p className="text-[9px] uppercase tracking-[0.28em] text-[#8B7355] mb-3">
                        {item.category}
                      </p>

                      <h3 className="font-serif text-[1.8rem] leading-[1.05] tracking-[-0.03em] text-[#1A1A1A]">
                        {item.title}
                      </h3>

                    </div>

                    <Link
                      href={item.href}
                      className="flex items-center justify-center w-9 h-9 border border-[#D6D0C4] hover:border-[#8B7355] transition-colors duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#5C5448]" />
                    </Link>

                  </div>

                  <p className="text-[14px] leading-[1.9] text-[#4E4E4B] max-w-[760px] mb-6">
                    {item.thesis}
                  </p>

                  {/* METRICS */}
                  <div className="flex flex-wrap gap-3">

                    {item.metrics.map((metric) => (

                      <div
                        key={metric}
                        className="border border-[#DDD7CC] px-3 py-2"
                      >
                        <p className="text-[10px] uppercase tracking-[0.16em] text-[#5F5A52]">
                          {metric}
                        </p>
                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* MOBILE — MINIMAL INSTITUTIONAL */}
        <div className="md:hidden pt-10">

          <div className="divide-y divide-[#E1DDD4]">

            {platforms.map((item) => (

              <Link
                key={item.id}
                href={item.href}
                className="block py-5"
              >

                <div className="flex gap-4 items-start">

                  {/* SMALL THUMB */}
                  <div className="relative w-[72px] h-[72px] overflow-hidden flex-shrink-0 bg-[#ECE8DF]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale-[10%]"
                    />

                  </div>

                  {/* TEXT */}
                  <div className="flex-1 min-w-0">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="text-[8px] uppercase tracking-[0.28em] text-[#8B7355] mb-2">
                          {item.category}
                        </p>

                        <h3 className="font-serif text-[1rem] leading-[1.2] text-[#191919] mb-2">
                          {item.title}
                        </h3>

                      </div>

                      <ArrowUpRight className="w-4 h-4 text-[#6B655B] flex-shrink-0 mt-1" />

                    </div>

                    <p className="text-[12px] leading-[1.7] text-[#575757] line-clamp-2">
                      {item.thesis}
                    </p>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* FOOTNOTE */}
        <div className="pt-10 mt-10 border-t border-[#DDD8CF] flex flex-col lg:flex-row justify-between gap-6">

          <p className="text-[11px] leading-[1.8] text-[#62615D] max-w-[700px]">
            Engagements conducted under formal advisory mandate and applicable
            regulatory compliance procedures.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-[#1B1B1B]"
          >
            <span>Request Advisory Engagement</span>

            <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-500" />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default InstitutionalPlatforms;
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

type CityCard = {
  name: string;
  subtitle: string;
  href: string;
  image: string;
  description: string;
  metrics: string[];
};

const cities: CityCard[] = [
  {
    name: 'Dubai',
    subtitle: 'Global Gateway City',
    href: '/united-arab-emirates/dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description: 'The pre-eminent commercial real estate market in the Middle East, offering institutional investors deep liquidity and world-class infrastructure.',
    metrics: ['6–8% Prime Office Yields', '17M+ Annual Visitors', '4,000+ DIFC Firms'],
  },
  {
    name: 'Abu Dhabi',
    subtitle: 'Sovereign Capital Hub',
    href: '/united-arab-emirates/abu-dhabi',
    image: 'https://images.unsplash.com/photo-1623998021446-45f9b6a2ad98?w=800&q=80',
    description: 'Sovereign-backed stability with long-duration income profiles and access to the world\'s largest pool of patient institutional capital.',
    metrics: ['Sovereign-Grade Stability', 'ADIA $1T+ AUM', 'Long-Duration Income'],
  },
  {
    name: 'Sharjah',
    subtitle: 'Industrial & Cultural Heart',
    href: '/united-arab-emirates/sharjah',
    image: 'https://images.unsplash.com/photo-1611967164521-ab2a1b3f5a1d?w=800&q=80',
    description: 'The UAE\'s industrial and manufacturing hub, offering institutional investors access to logistics and industrial assets at compelling value.',
    metrics: ['Industrial Hub', 'SAIF Free Zone', 'Education-Driven Demand'],
  },
  {
    name: 'Ras Al Khaimah',
    subtitle: 'Fastest-Growing Economy',
    href: '/united-arab-emirates/ras-al-khaimah',
    image: 'https://images.unsplash.com/photo-1598887142787-0cf008e9c15b?w=800&q=80',
    description: 'The UAE\'s fastest-growing emirate by GDP, offering early-mover access to a diversifying economy anchored by manufacturing and tourism.',
    metrics: ['Fastest GDP Growth', 'Manufacturing Hub', 'Tourism Infrastructure'],
  },
  {
    name: 'Ajman',
    subtitle: 'Value Corridor',
    href: '/united-arab-emirates/ajman',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80',
    description: 'Competitively-priced industrial and logistics assets within the broader Dubai metropolitan area, offering value-oriented entry into UAE CRE.',
    metrics: ['Dubai-Adjacent', 'Free Zone Access', 'Value Positioning'],
  },
  {
    name: 'Fujairah',
    subtitle: 'Strategic Maritime Gateway',
    href: '/united-arab-emirates/fujairah',
    image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8f613?w=800&q=80',
    description: 'Strategic maritime energy and logistics hub on the Indian Ocean coastline, offering specialised industrial and port-related real estate exposure.',
    metrics: ['Indian Ocean Port', 'Global Bunkering Hub', 'Energy Logistics'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function UaeCityCards() {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
            Emirates
          </p>
          <h2 className="font-display text-[32px] md:text-[42px] lg:text-[48px] leading-[1.05] text-[#1A1A1A] mb-4">
            UAE Markets — A Diversified <br className="hidden sm:block" />
            <span className="text-[#B8956B]">Institutional Platform</span>
          </h2>
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl">
            Each emirate offers a distinct risk-return profile, occupier base and growth trajectory. 
            A sophisticated UAE allocation typically includes exposure across multiple markets.
          </p>
        </div>

        {/* City cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cities.map((city) => (
            <motion.div key={city.name} variants={cardVariants}>
              <Link
                href={city.href}
                className="group block relative rounded-2xl overflow-hidden bg-white border border-[#1A1A1A]/5 hover:border-[#1B4332]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#1B4332]/5"
                style={{ minHeight: 480 }}
              >
                {/* Image container */}
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1B4332]">
                        {city.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#B8956B]" strokeWidth={1.5} />
                        <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A]">{city.name}</h3>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#B8956B] shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" strokeWidth={1.5} />
                  </div>

                  <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5 line-clamp-2">
                    {city.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {city.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#B8956B]" />
                        <span className="text-xs text-[#6B6259]">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/united-arab-emirates"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] text-white text-sm font-medium tracking-wide hover:bg-[#142d23] transition-colors"
          >
            Explore All Emirates
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

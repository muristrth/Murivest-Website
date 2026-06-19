'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

type DistrictCard = {
  name: string;
  subtitle: string;
  href: string;
  image: string;
  description: string;
  metrics: string[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export function UaeDistrictCards({
  eyebrow,
  title,
  description,
  districts,
}: {
  eyebrow: string;
  title: string;
  description: string;
  districts: DistrictCard[];
}) {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="font-body text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#B8956B] block mb-4 md:mb-5">
            {eyebrow}
          </p>
          <h2 className="font-display text-[32px] md:text-[42px] lg:text-[48px] leading-[1.05] text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* District cards grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {districts.map((district) => (
            <motion.div key={district.name} variants={cardVariants}>
              <Link
                href={district.href}
                className="group block relative rounded-2xl overflow-hidden bg-white border border-[#1A1A1A]/5 hover:border-[#1B4332]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#1B4332]/5"
                style={{ minHeight: 420 }}
              >
                {/* Image container */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <Image
                    src={district.image}
                    alt={district.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#1B4332]">
                        {district.subtitle}
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
                        <h3 className="font-display text-xl md:text-2xl text-[#1A1A1A]">{district.name}</h3>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#B8956B] shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" strokeWidth={1.5} />
                  </div>

                  <p className="text-sm text-[#4A4A4A] leading-relaxed mb-5 line-clamp-2">
                    {district.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {district.metrics.map((metric) => (
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
      </div>
    </section>
  );
}

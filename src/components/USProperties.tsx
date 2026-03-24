'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Bed, Bath, Square, DollarSign } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  image: string;
  slug: string;
  status: 'available' | 'under-contract' | 'sold';
}

interface USPropertiesProps {
  properties?: Property[];
}

/**
 * US Properties - Golf Club Lounge Aesthetic
 * Elegant property listing for US portfolio
 */
const USProperties = ({ properties = [] }: USPropertiesProps) => {
  const defaultProperties: Property[] = [
    {
      id: '1',
      title: 'Manhattan Penthouse',
      location: 'Upper East Side, New York',
      price: '$12,500,000',
      bedrooms: 4,
      bathrooms: 4,
      sqft: '3,800',
      image: '/murivest_ceo_office.png',
      slug: '#',
      status: 'available'
    },
    {
      id: '2',
      title: 'Beverly Hills Estate',
      location: 'Beverly Hills, California',
      price: '$28,000,000',
      bedrooms: 7,
      bathrooms: 8,
      sqft: '12,500',
      image: '/kenya-night.png',
      slug: '#',
      status: 'available'
    },
    {
      id: '3',
      title: 'Miami Beach Residence',
      location: 'Miami Beach, Florida',
      price: '$8,750,000',
      bedrooms: 5,
      bathrooms: 5,
      sqft: '5,200',
      image: '/murivest_ceo_office.png',
      slug: '#',
      status: 'under-contract'
    },
    {
      id: '4',
      title: 'Aspen Mountain Retreat',
      location: 'Aspen, Colorado',
      price: '$15,200,000',
      bedrooms: 6,
      bathrooms: 6,
      sqft: '8,000',
      image: '/kenya-night.png',
      slug: '#',
      status: 'available'
    }
  ];

  const displayProperties = properties.length > 0 ? properties : defaultProperties;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'under-contract':
        return { text: 'Under Contract', color: 'bg-amber-600' };
      case 'sold':
        return { text: 'Sold', color: 'bg-red-600' };
      default:
        return { text: 'Available', color: 'bg-green-600' };
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7355]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              US Collection
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
            American <span className="italic text-[#8B7355] font-light">Luxury Estates</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#8B7355]/30 pl-6">
              An exclusive portfolio of exceptional properties across America's most prestigious markets. 
              From Manhattan penthouses to California estates, each residence represents architectural excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                Request Private Viewing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProperties.map((property, index) => (
              <motion.article
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white border border-[#E5E2DC] overflow-hidden hover:shadow-lg transition-shadow duration-500"
              >
                <a href={property.slug} className="block">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E2DC]">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${getStatusLabel(property.status).color} text-[10px] tracking-[0.2em] uppercase text-white font-medium`}>
                        {getStatusLabel(property.status).text}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-3 h-3 text-[#8B7355]" />
                      <span className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                        {property.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif mb-4 text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500">
                      {property.title}
                    </h3>

                    {/* Features */}
                    <div className="flex items-center gap-4 mb-4 text-[12px] text-[#5A5A5A]">
                      <div className="flex items-center gap-1">
                        <Bed className="w-3 h-3" strokeWidth={1} />
                        <span>{property.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-3 h-3" strokeWidth={1} />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-3 h-3" strokeWidth={1} />
                        <span>{property.sqft} sq ft</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E2DC]">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                        <span className="text-xl font-serif text-[#2C2C2C]">{property.price}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium group-hover:text-[#2C2C2C] transition-colors duration-300">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#2C2C2C] text-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Access <span className="italic text-[#C4B59D] font-light">Off-Market</span> Opportunities
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#A8A39D] font-light max-w-2xl mx-auto mb-10">
            Our private collection includes properties not publicly listed. 
            Contact our US office for exclusive access.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C4B59D] text-[12px] tracking-[0.2em] uppercase text-[#F8F7F4] font-medium hover:bg-[#C4B59D] hover:text-[#2C2C2C] transition-all duration-500"
          >
            Contact US Office
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default USProperties;
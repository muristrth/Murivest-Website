'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Square,
  DollarSign,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface PropertyAgent {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
}

interface PropertyDetail {
  id?: string;
  title?: string;
  location?: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: string;
  description?: string;
  images?: string[];
  features?: string[];
  agent?: PropertyAgent;
}

interface USPropertyDetailProps {
  property?: PropertyDetail;
}

/**
 * US Property Detail - Golf Club Lounge Aesthetic
 * Elegant property detail page for US properties
 */
const USPropertyDetail = ({ property }: USPropertyDetailProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const defaultProperty: PropertyDetail = {
    id: '1',
    title: 'Manhattan Penthouse',
    location: 'Upper East Side, New York, NY 10021',
    price: '$12,500,000',
    bedrooms: 4,
    bathrooms: 4,
    sqft: '3,800',
    description: `An extraordinary full-floor penthouse in one of Manhattan's most prestigious addresses. This residence offers unparalleled luxury with panoramic views of Central Park and the Manhattan skyline.

The penthouse features a grand living room with floor-to-ceiling windows, a chef's kitchen with premium appliances, and four en-suite bedrooms including a master suite with his and hers walk-in closets. Additional amenities include a private elevator, wine cellar, and two parking spaces.

Located on the Upper East Side, this residence provides immediate access to Central Park, world-class museums, and the finest dining and shopping in New York City.`,
    images: [
      '/murivest_ceo_office.webp',
      '/kenya-night.webp',
      '/murivest_ceo_office.webp',
      '/kenya-night.webp',
    ],
    features: [
      'Full-floor penthouse with private elevator',
      'Panoramic Central Park and city views',
      'Grand living room with 14-foot ceilings',
      'Chef\'s kitchen with premium appliances',
      'Four en-suite bedrooms',
      'Master suite with his and hers walk-in closets',
      'Private wine cellar',
      'Two dedicated parking spaces',
      '24-hour doorman and concierge',
      'Fitness center and spa access',
      'Private storage included',
      'Steps from Central Park',
    ],
    agent: {
      name: 'Victoria Sterling',
      title: 'Senior Property Consultant',
      phone: '+1 (212) 555-0123',
      email: 'victoria@murivest.co.ke',
    },
  };

  /**
   * Merge CMS data with defaults safely
   */
  const displayProperty = useMemo<PropertyDetail>(() => {
    return {
      ...defaultProperty,
      ...property,
      images:
        property?.images && property.images.length > 0
          ? property.images
          : defaultProperty.images,
      features:
        property?.features && property.features.length > 0
          ? property.features
          : defaultProperty.features,
      agent: {
        ...defaultProperty.agent,
        ...(property?.agent || {}),
      },
    };
  }, [property]);

  const images = displayProperty.images || [];
  const features = displayProperty.features || [];

  const nextImage = () => {
    if (images.length === 0) return;

    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;

    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const activeImage =
    images[currentImage] || '/murivest_ceo_office.webp';

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-sm border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/us-properties"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-500"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Collection</span>
            </a>

            <div className="flex items-center gap-2">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
                Murivest
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Image Gallery */}
      <div className="pt-16">
        <div className="relative aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-[#E5E2DC]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={displayProperty.title || 'US Property'}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F8F7F4]/90 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F8F7F4]/90 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-[#2C2C2C]/80 px-4 py-2">
            <span className="text-[12px] text-[#F8F7F4]">
              {Math.min(currentImage + 1, images.length)} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 0 && (
          <div className="hidden md:flex gap-2 px-6 md:px-12 py-4 bg-white border-b border-[#E5E2DC]">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`relative w-20 h-14 overflow-hidden ${
                  index === currentImage
                    ? 'ring-2 ring-[#8B7355]'
                    : 'opacity-60 hover:opacity-100'
                } transition-all duration-300`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left: Property Details */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              {/* Location */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin
                  className="w-4 h-4 text-[#8B7355]"
                  strokeWidth={1}
                />

                <span className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                  {displayProperty.location}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 text-[#2C2C2C]">
                {displayProperty.title}
              </h1>

              {/* Key stats */}
              <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-[#E5E2DC]">

                <div className="flex items-center gap-3">
                  <Bed
                    className="w-5 h-5 text-[#8B7355]"
                    strokeWidth={1}
                  />

                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                      Bedrooms
                    </p>

                    <p className="text-lg font-serif">
                      {displayProperty.bedrooms}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Bath
                    className="w-5 h-5 text-[#8B7355]"
                    strokeWidth={1}
                  />

                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                      Bathrooms
                    </p>

                    <p className="text-lg font-serif">
                      {displayProperty.bathrooms}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Square
                    className="w-5 h-5 text-[#8B7355]"
                    strokeWidth={1}
                  />

                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#5A5A5A]">
                      Size
                    </p>

                    <p className="text-lg font-serif">
                      {displayProperty.sqft} sq ft
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <h2 className="text-xl font-serif mb-6 text-[#8B7355]">
                  Description
                </h2>

                <div className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light whitespace-pre-line">
                  {displayProperty.description}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-serif mb-6 text-[#8B7355]">
                  Key Features
                </h2>

                <ul className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-[#8B7355] mt-2 shrink-0" />

                      <span className="text-[14px] text-[#5A5A5A] font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="sticky top-24"
            >

              {/* Price Card */}
              <div className="bg-white border border-[#E5E2DC] p-6 md:p-8 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                  Indicative Value
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <DollarSign
                    className="w-6 h-6 text-[#8B7355]"
                    strokeWidth={1}
                  />

                  <span className="text-3xl font-serif text-[#2C2C2C]">
                    {displayProperty.price}
                  </span>
                </div>

                <a
                  href="/contact"
                  className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium text-center block hover:bg-[#8B7355] transition-colors duration-500"
                >
                  Request Viewing
                </a>
              </div>

              {/* Agent Card */}
              <div className="bg-white border border-[#E5E2DC] p-6 md:p-8">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-4">
                  Portfolio Agent
                </p>

                <h3 className="text-xl font-serif mb-1">
                  {displayProperty.agent?.name}
                </h3>

                <p className="text-[12px] text-[#8B7355] mb-6">
                  {displayProperty.agent?.title}
                </p>

                <div className="space-y-3">

                  <a
                    href={`tel:${displayProperty.agent?.phone}`}
                    className="flex items-center gap-3 text-[14px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors duration-300"
                  >
                    <Phone
                      className="w-4 h-4"
                      strokeWidth={1}
                    />

                    <span>
                      {displayProperty.agent?.phone}
                    </span>
                  </a>

                  <a
                    href={`mailto:${displayProperty.agent?.email}`}
                    className="flex items-center gap-3 text-[14px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors duration-300"
                  >
                    <Mail
                      className="w-4 h-4"
                      strokeWidth={1}
                    />

                    <span>
                      {displayProperty.agent?.email}
                    </span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPropertyDetail;
// sanity/schemas/uaeProperty.ts
// Murivest — UAE Property Schema
// Covers all listing categories: For Sale, For Rent, Off-Plan, Commercial

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'uaeProperty',
  title: 'UAE Property',
  type: 'document',
  groups: [
    { name: 'identity',   title: 'Identity & Classification' },
    { name: 'location',   title: 'Location' },
    { name: 'financials', title: 'Financials & Investment' },
    { name: 'assets',     title: 'Media & Documents' },
    { name: 'advisory',   title: 'Advisory & Compliance' },
  ],
  fields: [
    // ── IDENTITY ─────────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Property Title',
      type: 'string',
      group: 'identity',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'identity',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Tagline / Subtitle',
      type: 'string',
      group: 'identity',
      description: 'e.g. "Trophy Waterfront Residence — Marina Gate"',
    }),
    defineField({
      name: 'category',
      title: 'Listing Category',
      type: 'string',
      group: 'identity',
      options: {
        list: [
          { title: 'For Sale',        value: 'for-sale' },
          { title: 'For Rent',        value: 'for-rent' },
          { title: 'Off-Plan',        value: 'off-plan' },
          { title: 'Commercial Lease',value: 'commercial-lease' },
          { title: 'Investment Portfolio', value: 'portfolio' },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Asset Class',
      type: 'string',
      group: 'identity',
      options: {
        list: [
          { title: 'Residential — Apartment',  value: 'Apartment' },
          { title: 'Residential — Villa',      value: 'Villa' },
          { title: 'Residential — Penthouse',  value: 'Penthouse' },
          { title: 'Residential — Townhouse',  value: 'Townhouse' },
          { title: 'Office',                   value: 'Office' },
          { title: 'Retail',                   value: 'Retail' },
          { title: 'Warehouse / Industrial',   value: 'Industrial' },
          { title: 'Hotel / Hospitality',      value: 'Hospitality' },
          { title: 'Mixed-Use',                value: 'Mixed-Use' },
          { title: 'Land',                     value: 'Land' },
        ],
        layout: 'dropdown',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      group: 'identity',
      options: {
        list: [
          { title: 'Available',        value: 'available' },
          { title: 'Under Offer',      value: 'under-offer' },
          { title: 'Reserved',         value: 'reserved' },
          { title: 'Sold / Leased',    value: 'sold' },
          { title: 'Coming Soon',      value: 'coming-soon' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Listing',
      type: 'boolean',
      group: 'identity',
      initialValue: false,
    }),
    defineField({
      name: 'isExclusive',
      title: 'Exclusive Murivest Mandate',
      type: 'boolean',
      group: 'identity',
      initialValue: false,
    }),
    defineField({
      name: 'isOffMarket',
      title: 'Off-Market / Private',
      type: 'boolean',
      group: 'identity',
      initialValue: false,
    }),
    defineField({
      name: 'referenceCode',
      title: 'Reference / MLS Code',
      type: 'string',
      group: 'identity',
    }),

    // ── LOCATION ─────────────────────────────────────────────────────────────
    defineField({
      name: 'emirate',
      title: 'Emirate',
      type: 'string',
      group: 'location',
      options: {
        list: [
          { title: 'Dubai',           value: 'Dubai' },
          { title: 'Abu Dhabi',       value: 'Abu Dhabi' },
          { title: 'Sharjah',         value: 'Sharjah' },
          { title: 'Ras Al Khaimah',  value: 'Ras Al Khaimah' },
          { title: 'Ajman',           value: 'Ajman' },
          { title: 'Fujairah',        value: 'Fujairah' },
          { title: 'Umm Al Quwain',   value: 'Umm Al Quwain' },
        ],
        layout: 'dropdown',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'community',
      title: 'Community / District',
      type: 'string',
      group: 'location',
      description: 'e.g. Dubai Marina, Downtown Dubai, Palm Jumeirah, DIFC',
    }),
    defineField({
      name: 'address',
      title: 'Full Address',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'coordinates',
      title: 'GPS Coordinates',
      type: 'object',
      group: 'location',
      fields: [
        { name: 'lat', title: 'Latitude',  type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    }),

    // ── FINANCIALS ───────────────────────────────────────────────────────────
    defineField({
      name: 'priceAed',
      title: 'Price (AED)',
      type: 'string',
      group: 'financials',
      description: 'e.g. AED 4,250,000  or  AED 35,000 / annum',
    }),
    defineField({
      name: 'priceUsd',
      title: 'Price (USD)',
      type: 'string',
      group: 'financials',
    }),
    defineField({
      name: 'priceGbp',
      title: 'Price (GBP)',
      type: 'string',
      group: 'financials',
    }),
    defineField({
      name: 'priceKsh',
      title: 'Price (KES)',
      type: 'string',
      group: 'financials',
    }),
    defineField({
      name: 'serviceCharge',
      title: 'Service Charge (AED/sqft/yr)',
      type: 'string',
      group: 'financials',
    }),
    defineField({
      name: 'annualYield',
      title: 'Gross Rental Yield (%)',
      type: 'string',
      group: 'financials',
      description: 'e.g. 7.2%',
    }),
    defineField({
      name: 'occupancyRate',
      title: 'Occupancy Rate',
      type: 'string',
      group: 'financials',
    }),
    defineField({
      name: 'investmentMetrics',
      title: 'Investment Metrics',
      type: 'object',
      group: 'financials',
      fields: [
        { name: 'monthlyRental',      title: 'Monthly Rental Income',    type: 'string' },
        { name: 'annualRental',       title: 'Annual Rental Income',     type: 'string' },
        { name: 'appreciationRate',   title: 'Projected Appreciation %', type: 'string' },
        { name: 'totalROI',           title: 'Projected Total ROI',      type: 'string' },
        { name: 'paybackPeriod',      title: 'Payback Period (yrs)',     type: 'string' },
        { name: 'goldenVisa',         title: 'Golden Visa Eligible',     type: 'boolean' },
      ],
    }),

    // ── SPECIFICATIONS ───────────────────────────────────────────────────────
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'string',
      group: 'identity',
      description: 'e.g. 3 or Studio or 5+',
    }),
    defineField({
      name: 'bathrooms',
      title: 'Bathrooms',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'sizeSqft',
      title: 'Size (sq ft)',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'floor',
      title: 'Floor / Level',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'parkingSpaces',
      title: 'Parking Spaces',
      type: 'number',
      group: 'identity',
    }),
    defineField({
      name: 'features',
      title: 'Key Features & Amenities',
      type: 'array',
      group: 'identity',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'developmentName',
      title: 'Development / Tower Name',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'string',
      group: 'identity',
      description: 'e.g. Emaar, DAMAC, Aldar',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion / Handover Date',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'paymentPlan',
      title: 'Payment Plan',
      type: 'string',
      group: 'financials',
      description: 'e.g. 30/70, 50/50 on handover',
    }),

    // ── DESCRIPTION ──────────────────────────────────────────────────────────
    defineField({
      name: 'description',
      title: 'Investment Memorandum',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'identity',
    }),
    defineField({
      name: 'descriptionShort',
      title: 'Short Description (Card)',
      type: 'text',
      rows: 3,
      group: 'identity',
    }),

    // ── MEDIA ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Cover / Hero Image',
      type: 'image',
      group: 'assets',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      group: 'assets',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'floorPlan',
      title: 'Floor Plan',
      type: 'image',
      group: 'assets',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video / Virtual Tour URL',
      type: 'url',
      group: 'assets',
    }),
    defineField({
      name: 'brochureFile',
      title: 'Investment Brochure (PDF)',
      type: 'file',
      group: 'assets',
    }),
    defineField({
      name: 'businessCaseUrl',
      title: 'Business Case URL',
      type: 'url',
      group: 'assets',
    }),

    // ── ADVISORY ──────────────────────────────────────────────────────────────
    defineField({
      name: 'broker',
      title: 'Assigned Advisor',
      type: 'object',
      group: 'advisory',
      fields: [
        { name: 'name',  title: 'Name',           type: 'string' },
        { name: 'email', title: 'Email',           type: 'string' },
        { name: 'phone', title: 'Phone (WhatsApp)',type: 'string' },
        { name: 'photo', title: 'Headshot',        type: 'image', options: { hotspot: true } },
        { name: 'title', title: 'Title',           type: 'string', description: 'e.g. Senior Investment Associate' },
      ],
    }),
    defineField({
      name: 'nda',
      title: 'Requires NDA',
      type: 'boolean',
      group: 'advisory',
      initialValue: false,
    }),
    defineField({
      name: 'regulatoryNote',
      title: 'Regulatory / Compliance Note',
      type: 'text',
      rows: 2,
      group: 'advisory',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      group: 'advisory',
    }),
  ],

  preview: {
    select: {
      title:    'title',
      subtitle: 'community',
      media:    'coverImage',
      category: 'category',
      emirate:  'emirate',
    },
    prepare({ title, subtitle, media, category, emirate }) {
      const cats: Record<string, string> = {
        'for-sale':         '🏠 For Sale',
        'for-rent':         '🔑 For Rent',
        'off-plan':         '🏗 Off-Plan',
        'commercial-lease': '🏢 Commercial',
        'portfolio':        '📊 Portfolio',
      };
      return {
        title,
        subtitle: `${cats[category] || category} · ${emirate} · ${subtitle || ''}`,
        media,
      };
    },
  },
});
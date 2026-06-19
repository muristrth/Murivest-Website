// sanity/schemas/property.ts
import { defineType, defineField } from 'sanity'

export const propertySchema = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'classification', title: 'Classification' },
    { name: 'location', title: 'Location' },
    { name: 'financials', title: 'Financials' },
    { name: 'details', title: 'Property Details' },
    { name: 'media', title: 'Media & Documents' },
    { name: 'broker', title: 'Broker Information' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Identity ─────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Property Title',
      type: 'string',
      group: 'identity',
      validation: (Rule) => Rule.required().min(5).max(100),
      description: 'Formal name of the asset (e.g., "Westlands Business Park Tower A")',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'identity',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'string',
      group: 'identity',
      description:
        "Descriptive tagline (e.g., \"Prime Grade A Office in Nairobi's Financial District\")",
    }),
    defineField({
      name: 'description',
      title: 'Executive Summary',
      type: 'text',
      rows: 6,
      group: 'identity',
      validation: (Rule) => Rule.required().min(100),
      description:
        'Comprehensive investment narrative including location advantages, tenant profile, and market positioning',
    }),
    // Legacy text field kept for backward compatibility (first schema)
    defineField({
      name: 'location',
      title: 'Location Area (Legacy)',
      type: 'string',
      group: 'location',
      description: 'Text description of location (e.g., "Nairobi CBD", "Westlands")',
    }),

    // ── Classification ──────────────────────────────────────────────
    defineField({
      name: 'assetType',
      title: 'Asset Type',
      type: 'string',
      group: 'classification',
      options: {
        list: [
          { title: 'Office', value: 'office' },
          { title: 'Retail', value: 'retail' },
          { title: 'Logistics / Industrial', value: 'logistics' },
          { title: 'Hospitality', value: 'hospitality' },
          { title: 'Mixed-Use', value: 'mixed-use' },
          { title: 'Multifamily', value: 'multifamily' },
          { title: 'Land / Development', value: 'land' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Data Centre', value: 'data-centre' },
          // Legacy values from first schema kept for backwards compatibility
          { title: 'Commercial Office', value: 'commercial-office' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Mixed Use', value: 'mixed-use' },
          { title: 'Residential', value: 'residential' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    // Keep the first schema's propertyType field (hidden) for backward compatibility
    defineField({
      name: 'propertyType',
      title: 'Asset Class (Legacy)',
      type: 'string',
      group: 'classification',
      readOnly: true,
      hidden: true,
      description: 'Deprecated: Use Asset Type field instead',
    }),
    // Legacy "type" field from first schema
    defineField({
      name: 'type',
      title: 'Asset Class (Legacy)',
      type: 'string',
      group: 'classification',
      readOnly: true,
      hidden: true,
      description: 'Deprecated: Use Asset Type field instead',
    }),
    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      group: 'classification',
      options: {
        list: [
          { title: 'For Sale', value: 'for-sale' },
          { title: 'For Lease', value: 'for-lease' },
          { title: 'For Investment', value: 'for-investment' },
          { title: 'Joint Venture', value: 'joint-venture' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gradeClassification',
      title: 'Grade / Classification',
      type: 'string',
      group: 'classification',
      options: {
        list: [
          { title: 'Grade A', value: 'grade-a' },
          { title: 'Grade B', value: 'grade-b' },
          { title: 'Grade C', value: 'grade-c' },
        ],
      },
    }),

    // ── Location ─────────────────────────────────────────────────────
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
      group: 'location',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'location',
      validation: (Rule) => Rule.required(),
      initialValue: 'Nairobi',
    }),
    defineField({
      name: 'state',
      title: 'County / Region',
      type: 'string',
      group: 'location',
      initialValue: 'Nairobi County',
    }),
    defineField({
      name: 'submarket',
      title: 'Submarket / District',
      type: 'string',
      group: 'location',
      description: 'e.g. "Westlands", "Downtown Dubai", "Marina Bay"',
    }),
    defineField({
      name: 'country',
      title: 'Country (URL slug format)',
      type: 'string',
      group: 'location',
      options: {
        list: [
          { title: 'Kenya', value: 'kenya' },
          { title: 'United Kingdom', value: 'united-kingdom' },
          { title: 'United States', value: 'united-states' },
          { title: 'Canada', value: 'canada' },
          { title: 'South Africa', value: 'south-africa' },
          { title: 'UAE', value: 'uae' },
          { title: 'Singapore', value: 'singapore' },
        ],
      },
      validation: (Rule) => Rule.required().lowercase(),
    }),
    defineField({
      name: 'zipCode',
      title: 'Postal Code',
      type: 'string',
      group: 'location',
    }),
    defineField({
      name: 'coordinates',
      title: 'GPS Coordinates',
      type: 'geopoint',
      group: 'location',
      description:
        "Precise location for mapping. Right-click in Google Maps → \"What's here?\" to get coordinates",
    }),

    // ── Financials ───────────────────────────────────────────────────
    defineField({
      name: 'price',
      title: 'Display Price',
      type: 'string',
      group: 'financials',
      description: 'Primary price display (e.g., "KES 450 Million" or "USD 3.5M")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priceKsh',
      title: 'Price (KES)',
      type: 'string',
      group: 'financials',
      description: 'Kenyan Shilling amount for local reference',
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
      name: 'priceEur',
      title: 'Price (EUR)',
      type: 'string',
      group: 'financials',
    }),
    defineField({
      name: 'askingPrice',
      title: 'Asking Price (numeric)',
      type: 'number',
      group: 'financials',
      description: 'Numeric value for sorting/filtering',
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      group: 'financials',
      options: {
        list: [
          { title: 'KES – Kenyan Shilling', value: 'KES' },
          { title: 'USD – US Dollar', value: 'USD' },
          { title: 'GBP – British Pound', value: 'GBP' },
          { title: 'AED – UAE Dirham', value: 'AED' },
          { title: 'SGD – Singapore Dollar', value: 'SGD' },
          { title: 'EUR – Euro', value: 'EUR' },
          { title: 'THB – Thai Baht', value: 'THB' },
          { title: 'IDR – Indonesian Rupiah', value: 'IDR' },
        ],
      },
      initialValue: 'USD',
    }),
    defineField({
      name: 'capRate',
      title: 'Cap Rate (%)',
      type: 'number',
      group: 'financials',
    }),
    defineField({
      name: 'noi',
      title: 'Net Operating Income (NOI)',
      type: 'number',
      group: 'financials',
    }),
    defineField({
      name: 'grossRentalYield',
      title: 'Gross Rental Yield (%)',
      type: 'number',
      group: 'financials',
    }),
    defineField({
      name: 'yield',
      title: 'Net Yield',
      type: 'string',
      group: 'financials',
      description: 'e.g., "8.5%"',
    }),
    defineField({
      name: 'squareFootage',
      title: 'Total Area (display)',
      type: 'string',
      group: 'financials',
      description: 'e.g., "12,500 sq ft" or "2.5 hectares"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'occupancyRate',
      title: 'Occupancy Rate (display)',
      type: 'string',
      group: 'financials',
      initialValue: '100%',
      description: 'Current tenancy status',
    }),
    // Investment object from first schema (legacy financial metrics)
    defineField({
      name: 'investment',
      title: 'Financial Metrics (Legacy)',
      type: 'object',
      group: 'financials',
      fields: [
        defineField({ name: 'monthlyIncome', title: 'Monthly Rental Income', type: 'string' }),
        defineField({ name: 'annualIncome', title: 'Annual Rental Income', type: 'string' }),
        defineField({ name: 'appreciationRate', title: 'Projected Appreciation', type: 'string' }),
        defineField({ name: 'totalROI', title: 'Total ROI Target', type: 'string' }),
      ],
    }),

    // ── Property Details ────────────────────────────────────────────
    defineField({
      name: 'totalArea',
      title: 'Total Area (sq ft)',
      type: 'number',
      group: 'details',
    }),
    defineField({
      name: 'floors',
      title: 'Number of Floors',
      type: 'number',
      group: 'details',
    }),
    defineField({
      name: 'yearBuilt',
      title: 'Year Built',
      type: 'number',
      group: 'details',
    }),
    defineField({
      name: 'occupancy',
      title: 'Current Occupancy (%)',
      type: 'number',
      group: 'details',
    }),
    // Features array from first schema (Key Investment Attributes)
    defineField({
      name: 'features',
      title: 'Key Investment Attributes',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      description:
        'Bullet points highlighting investment merits (e.g., "Blue-chip tenant", "15-year lease")',
    }),
    // Highlights array from second schema (Key Highlights) – kept separate for backward compat
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'details',
    }),
    // Technical specifications from first schema
    defineField({
      name: 'details',
      title: 'Technical Specifications',
      type: 'array',
      group: 'details',
      description: 'Structured asset attributes',
      of: [
        {
          type: 'object',
          name: 'specification',
          fields: [
            defineField({
              name: 'label',
              title: 'Attribute',
              type: 'string',
              options: {
                list: [
                  'Year Built',
                  'Last Renovation',
                  'Tenure',
                  'Parking Spaces',
                  'Elevators',
                  'Floor Loading',
                  'Ceiling Height',
                  'Power Backup',
                  'Security Systems',
                  'Fire Safety',
                  'HVAC',
                  'Fiber Connectivity',
                  'Green Certification',
                  'Zoning',
                ],
              },
            }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
          ],
        },
      ],
    }),

    // ── Media & Documents ────────────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Property Images',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      description:
        'High-resolution images. First image is main thumbnail. Minimum 3 images recommended.',
    }),
    defineField({
      name: 'brochure',
      title: 'Investment Prospectus (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
      description: 'Downloadable investment memorandum',
    }),
    defineField({
      name: 'businessCase',
      title: 'Business Case (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
      description: 'Detailed financial model and business case',
    }),

    // ── Broker Information ──────────────────────────────────────────
    defineField({
      name: 'broker',
      title: 'Mandated Advisor',
      type: 'object',
      group: 'broker',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'name',
          title: 'Full Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'photo',
          title: 'Portrait Photo',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email (override)',
      type: 'string',
      group: 'broker',
      description: 'Leave blank to use the broker email above or a global default',
    }),

    // ── SEO ─────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (override)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (override)',
      type: 'text',
      rows: 2,
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Publication Date, New',
      name: 'releaseDateDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
    {
      title: 'Publication Date, Old',
      name: 'releaseDateAsc',
      by: [{ field: '_createdAt', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'country',
      media: 'images.0',
    },
  },
})

export default propertySchema
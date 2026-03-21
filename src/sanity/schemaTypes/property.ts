import { Rule } from 'sanity'

export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core Information', default: true },
    { name: 'location', title: 'Location' },
    { name: 'pricing', title: 'Pricing & Metrics' },
    { name: 'media', title: 'Media & Documents' },
    { name: 'details', title: 'Details & Features' },
    { name: 'broker', title: 'Broker Information' },
  ],
  fields: [
    // ── Core ──────────────────────────────────────────────────────────
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      group: 'core',
      validation: (Rule: Rule) => Rule.required().min(5).max(100),
      description: 'Formal name of the asset (e.g., "Westlands Business Park Tower A")',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'core',
      options: { 
        source: 'title', 
        maxLength: 96,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
          .slice(0, 96)
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Tagline',
      type: 'string',
      group: 'core',
      description: 'Descriptive tagline (e.g., "Prime Grade A Office in Nairobi\'s Financial District")',
    },
    {
      name: 'propertyType',
      title: 'Asset Class',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Commercial Office', value: 'Commercial Office' },
          { title: 'Retail', value: 'Retail' },
          { title: 'Industrial', value: 'Industrial' },
          { title: 'Mixed Use', value: 'Mixed Use' },
          { title: 'Residential', value: 'Residential' },
          { title: 'Hospitality', value: 'Hospitality' },
          { title: 'Land / Development', value: 'Land' },
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Data Center', value: 'Data Center' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    // LEGACY: Keep for backward compatibility but hidden from UI
    {
      name: 'type',
      title: 'Asset Class (Legacy)',
      type: 'string',
      group: 'core',
      readOnly: true,
      hidden: true,
      description: 'Deprecated: Use Asset Class field instead',
    },
    {
      name: 'listingType',
      title: 'Transaction Type',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'For Sale - Direct', value: 'For Sale' },
          { title: 'For Sale - Joint Venture', value: 'Joint Venture' },
          { title: 'For Lease', value: 'For Lease' },
          { title: 'Sale & Leaseback', value: 'Sale & Leaseback' },
        ],
        layout: 'radio',
      },
      initialValue: 'For Sale',
    },
    {
      name: 'description',
      title: 'Executive Summary',
      type: 'text',
      group: 'core',
      rows: 6,
      validation: (Rule: Rule) => Rule.required().min(100),
      description: 'Comprehensive investment narrative including location advantages, tenant profile, and market positioning',
    },

    // ── Location ──────────────────────────────────────────────────────
    {
      name: 'address',
      title: 'Street Address',
      type: 'string',
      group: 'location',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      group: 'location',
      initialValue: 'Nairobi',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'state',
      title: 'County / Region',
      type: 'string',
      group: 'location',
      initialValue: 'Nairobi County',
    },
    {
      name: 'zipCode',
      title: 'Postal Code',
      type: 'string',
      group: 'location',
    },
    {
      name: 'location',
      title: 'Location Area (Legacy)',
      type: 'string',
      group: 'location',
      description: 'Text description of location (e.g., "Nairobi CBD", "Westlands")',
    },
    {
      name: 'coordinates',
      title: 'GPS Coordinates',
      type: 'geopoint',
      group: 'location',
      description: 'Precise location for mapping. Right-click in Google Maps → "What\'s here?" to get coordinates',
    },

    // ── Pricing ───────────────────────────────────────────────────────
    {
      name: 'price',
      title: 'Display Price',
      type: 'string',
      group: 'pricing',
      description: 'Primary price display (e.g., "KES 450 Million" or "USD 3.5M")',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'priceKsh',
      title: 'Price (KES)',
      type: 'string',
      group: 'pricing',
      description: 'Kenyan Shilling amount for local reference',
    },
    {
      name: 'priceUsd',
      title: 'Price (USD)',
      type: 'string',
      group: 'pricing',
    },
    {
      name: 'priceGbp',
      title: 'Price (GBP)',
      type: 'string',
      group: 'pricing',
    },
    {
      name: 'priceEur',
      title: 'Price (EUR)',
      type: 'string',
      group: 'pricing',
    },
    {
      name: 'yield',
      title: 'Net Yield',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "8.5%"',
    },
    {
      name: 'squareFootage',
      title: 'Total Area',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "12,500 sq ft" or "2.5 hectares"',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'occupancyRate',
      title: 'Occupancy Rate',
      type: 'string',
      group: 'pricing',
      initialValue: '100%',
      description: 'Current tenancy status',
    },

    // ── Media ─────────────────────────────────────────────────────────
    {
      name: 'images',
      title: 'Property Images',
      type: 'array',
      group: 'media',
      of: [{ 
        type: 'image', 
        options: { hotspot: true },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: { isHighlighted: true }
          }
        ]
      }],
      options: { 
        layout: 'grid',
        hotspot: true,
      },
      description: 'High-resolution images. First image is main thumbnail. Minimum 3 images required.',
    },
    {
      name: 'brochure',
      title: 'Investment Prospectus (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
      description: 'Downloadable investment memorandum',
    },
    {
      name: 'businessCase',
      title: 'Business Case (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
      description: 'Detailed financial model and business case',
    },

    // ── Details ───────────────────────────────────────────────────────
    {
      name: 'features',
      title: 'Key Investment Attributes',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting investment merits (e.g., "Blue-chip tenant", "15-year lease", "Grade A construction")',
    },
    {
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
            { 
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
                ]
              }
            },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' }
          }
        },
      ],
    },
    {
      name: 'investment',
      title: 'Financial Metrics',
      type: 'object',
      group: 'details',
      fields: [
        { name: 'monthlyIncome', title: 'Monthly Rental Income', type: 'string' },
        { name: 'annualIncome', title: 'Annual Rental Income', type: 'string' },
        { name: 'appreciationRate', title: 'Projected Appreciation', type: 'string' },
        { name: 'totalROI', title: 'Total ROI Target', type: 'string' },
      ],
    },

    // ── Broker ────────────────────────────────────────────────────────
    {
      name: 'broker',
      title: 'Mandated Advisor',
      type: 'object',
      group: 'broker',
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: 'name',
          title: 'Full Name',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule: Rule) => Rule.required().email(),
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'photo',
          title: 'Portrait Photo',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'propertyType',
      media: 'images.0',
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title: title || 'Untitled Property',
        subtitle: subtitle || 'No type specified',
        media,
      };
    },
  },
  
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
}
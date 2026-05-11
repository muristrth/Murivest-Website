import { Rule } from 'sanity'

export default {
  name: 'propertyForRent',
  title: 'Property For Rent',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core Information', default: true },
    { name: 'location', title: 'Location' },
    { name: 'pricing', title: 'Pricing & Terms' },
    { name: 'media', title: 'Media & Documents' },
    { name: 'details', title: 'Details & Features' },
    { name: 'availability', title: 'Availability' },
  ],
  fields: [
    // ── Core ──────────────────────────────────────────────────────────
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      group: 'core',
      validation: (Rule: Rule) => Rule.required().min(5).max(100),
      description: 'Descriptive name of the rental property',
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
      description: 'Short descriptive tagline',
    },
    {
      name: 'assetCategory',
      title: 'Asset Category',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Retail', value: 'Retail', description: 'Shops, showrooms, malls' },
          { title: 'Office', value: 'Office', description: 'Corporate offices, co-working spaces' },
          { title: 'Industrial', value: 'Industrial', description: 'Warehouses, factories, logistics' },
          { title: 'Mixed Use', value: 'Mixed Use', description: 'Combined commercial/residential' },
          { title: 'Hospitality', value: 'Hospitality', description: 'Hotels, serviced apartments' },
          { title: 'Healthcare', value: 'Healthcare', description: 'Medical offices, clinics' },
          { title: 'Data Center', value: 'Data Center', description: 'Server facilities, tech infrastructure' },
        ],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Single Unit', value: 'Single Unit' },
          { title: 'Multi-Unit', value: 'Multi-Unit' },
          { title: 'Whole Building', value: 'Whole Building' },
          { title: 'Floor', value: 'Floor' },
          { title: 'Suite', value: 'Suite' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'description',
      title: 'Property Description',
      type: 'text',
      group: 'core',
      rows: 6,
      validation: (Rule: Rule) => Rule.required().min(100),
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
      name: 'coordinates',
      title: 'GPS Coordinates',
      type: 'geopoint',
      group: 'location',
      description: 'Precise location for mapping',
    },

    // ── Pricing ───────────────────────────────────────────────────────
    {
      name: 'rent',
      title: 'Monthly Rent',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "KES 150,000/month" or "USD 1,200/month"',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'rentKsh',
      title: 'Rent (KES)',
      type: 'number',
      group: 'pricing',
    },
    {
      name: 'rentUsd',
      title: 'Rent (USD)',
      type: 'number',
      group: 'pricing',
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      group: 'pricing',
      initialValue: 'KES',
      options: {
        list: [
          { title: 'Kenyan Shilling (KES)', value: 'KES' },
          { title: 'US Dollar (USD)', value: 'USD' },
          { title: 'Euro (EUR)', value: 'EUR' },
          { title: 'British Pound (GBP)', value: 'GBP' },
        ],
      },
    },
    {
      name: 'leaseTerm',
      title: 'Lease Term',
      type: 'string',
      group: 'pricing',
      initialValue: '3-5 years',
    },
    {
      name: 'securityDeposit',
      title: 'Security Deposit',
      type: 'string',
      group: 'pricing',
    },
    {
      name: 'serviceCharge',
      title: 'Service Charge',
      type: 'string',
      group: 'pricing',
    },
    {
      name: 'squareFootage',
      title: 'Area Size',
      type: 'string',
      group: 'pricing',
      description: 'e.g., "1,200 sq ft" or "100 sq m"',
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
          }
        ]
      }],
      options: { 
        layout: 'grid',
        hotspot: true,
      },
    },
    {
      name: 'floorplan',
      title: 'Floor Plan (PDF)',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
    },
    {
      name: 'virtualTour',
      title: 'Virtual Tour URL',
      type: 'url',
      group: 'media',
    },

    // ── Details ───────────────────────────────────────────────────────
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting property features',
    },
    {
      name: 'specifications',
      title: 'Technical Specifications',
      type: 'array',
      group: 'details',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'label', 
              title: 'Attribute', 
              type: 'string',
              options: {
                list: [
                  'Year Built',
                  'Last Renovation',
                  'Floor',
                  'Elevators',
                  'Ceiling Height',
                  'Power Backup',
                  'Security Systems',
                  'Fire Safety',
                  'HVAC',
                  'Fiber Connectivity',
                  'Parking Spaces',
                  'Loading Dock',
                  'Clear Span',
                  'Office Fit-out',
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

    // ── Availability ────────────────────────────────────────────────────
    {
      name: 'availableFrom',
      title: 'Available From',
      type: 'date',
      group: 'availability',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'availability',
      initialValue: 'Available',
      options: {
        list: [
          { title: 'Available', value: 'Available', color: 'success' },
          { title: 'Under Offer', value: 'Under Offer', color: 'warning' },
          { title: 'Leased', value: 'Leased', color: 'danger' },
          { title: 'Coming Soon', value: 'Coming Soon', color: 'primary' },
        ],
      },
    },
    {
      name: 'furnished',
      title: 'Furnished',
      type: 'boolean',
      group: 'availability',
      initialValue: false,
    },
    {
      name: 'parking',
      title: 'Parking Available',
      type: 'boolean',
      group: 'availability',
      initialValue: false,
    },
    {
      name: 'parkingSpaces',
      title: 'Number of Parking Spaces',
      type: 'number',
      group: 'availability',
      hidden: ({ document }: { document?: { parking?: boolean } }) => !document?.parking,
    },
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'assetCategory',
      media: 'images.0',
      status: 'status',
    },
    prepare({ title, subtitle, media, status }: any) {
      return {
        title: title || 'Untitled Property',
        subtitle: `${subtitle || 'No category'} • ${status || 'Available'}`,
        media,
      };
    },
  },
}
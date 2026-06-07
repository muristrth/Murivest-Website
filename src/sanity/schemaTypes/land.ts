import { Rule } from 'sanity'

export default {
  name: 'land',
  title: 'Land Parcel',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core Information', default: true },
    { name: 'location', title: 'Location' },
    { name: 'investment', title: 'Investment' },
    { name: 'media', title: 'Media' },
    { name: 'advisor', title: 'Advisor' },
  ],

  fields: [
    // ── CORE ────────────────────────────────────────────────────────────────
    {
      name: 'title',
      title: 'Property Name',
      type: 'string',
      group: 'core',
      validation: (Rule: Rule) => Rule.required().min(5).max(120),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'core',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 96),
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Investment Thesis',
      type: 'text',
      group: 'core',
      rows: 2,
      description: 'One-line investment summary',
    },
    {
      name: 'description',
      title: 'Executive Summary',
      type: 'text',
      group: 'core',
      rows: 8,
      validation: (Rule: Rule) => Rule.required().min(150),
    },
    {
      name: 'landCategory',
      title: 'Land Category',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Strategic Land Bank', value: 'Strategic Land Bank' },
          { title: 'House For Sale', value: 'House For Sale' },
          { title: 'Development Ready', value: 'Development Ready' },
          { title: 'Agricultural', value: 'Agricultural' },
          { title: 'Commercial Mixed-Use', value: 'Commercial Mixed-Use' },
          { title: 'Industrial/Logistics', value: 'Industrial/Logistics' },
          { title: 'Hospitality/Resort', value: 'Hospitality/Resort' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: Rule) => Rule.required(),
      initialValue: 'Strategic Land Bank',
    },
    {
      name: 'availabilityStatus',
      title: 'Availability Status',
      type: 'string',
      group: 'core',
      options: {
        list: [
          { title: 'Available – Immediate', value: 'Available' },
          { title: 'Under Offer', value: 'Under Offer' },
          { title: 'Joint Venture Opportunity', value: 'Joint Venture' },
          { title: 'Sold – Reference Only', value: 'Sold' },
        ],
        layout: 'radio',
      },
      initialValue: 'Available',
    },

    // ── LOCATION ─────────────────────────────────────────────────────────────
    {
      name: 'location',
      title: 'Area / Neighbourhood',
      type: 'string',
      group: 'location',
      validation: (Rule: Rule) => Rule.required(),
      description: 'e.g. "Upper Hill", "Likoni, Mombasa"',
    },
    {
      name: 'coordinates',
      title: 'GPS Coordinates',
      type: 'geopoint',
      group: 'location',
    },
    {
      name: 'totalArea',
      title: 'Size (Total Area)',
      type: 'object',
      group: 'location',
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: 'acres',
          title: 'Acres',
          type: 'number',
          validation: (Rule: Rule) => Rule.required().positive(),
        },
        { name: 'hectares', title: 'Hectares', type: 'number' },
        { name: 'squareMeters', title: 'Square Meters', type: 'number' },
      ],
    },

    // ── INVESTMENT ───────────────────────────────────────────────────────────
    {
      name: 'askingPrice',
      title: 'Asking Price',
      type: 'object',
      group: 'investment',
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: 'displayPrice',
          title: 'Display Price',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
          description: 'e.g. "KES 350,000,000" or "Price on Request"',
        },
        { name: 'kes', title: 'KES Amount', type: 'string' },
        { name: 'usd', title: 'USD Amount', type: 'string' },
      ],
    },

    // ── MEDIA ────────────────────────────────────────────────────────────────
    {
      name: 'sitePhotographs',
      title: 'Site Photographs',
      type: 'array',
      group: 'media',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'caption', type: 'string', title: 'Caption' },
        ],
      }],
    },
    {
      name: 'investmentMemorandum',
      title: 'Investment Memorandum',
      type: 'file',
      group: 'media',
      options: { accept: '.pdf' },
    },

    // ── ADVISOR ──────────────────────────────────────────────────────────────
    {
      name: 'advisor',
      title: 'Mandated Land Advisor',
      type: 'object',
      group: 'advisor',
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
          title: 'Email',
          type: 'string',
          validation: (Rule: Rule) => Rule.required().email(),
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'photo',
          title: 'Portrait',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },

    // ── METADATA ─────────────────────────────────────────────────────────────
    {
      name: 'featured',
      title: 'Featured Listing',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'listingDate',
      title: 'Listing Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    },
  ],

  orderings: [
    {
      title: 'Listing Date, Newest',
      name: 'listingDateDesc',
      by: [{ field: 'listingDate', direction: 'desc' }],
    },
    {
      title: 'Size, Largest First',
      name: 'sizeDesc',
      by: [{ field: 'totalArea.acres', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featured',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'listingDate', direction: 'desc' },
      ],
    },
  ],
}
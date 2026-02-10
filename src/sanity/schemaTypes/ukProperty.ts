export default {
  name: 'ukProperty',
  title: 'UK Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short catchphrase shown under the title',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Full address (e.g., 68 Upper Thames Street, London, EC4V, UK)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      options: {
        list: [
          { title: 'London', value: 'London' },
          { title: 'Manchester', value: 'Manchester' },
          { title: 'Birmingham', value: 'Birmingham' },
          { title: 'Edinburgh', value: 'Edinburgh' },
          { title: 'Liverpool', value: 'Liverpool' },
          { title: 'Newcastle', value: 'Newcastle' },
          { title: 'Bristol', value: 'Bristol' },
          { title: 'Leeds', value: 'Leeds' },
          { title: 'Glasgow', value: 'Glasgow' },
          { title: 'Other', value: 'Other' },
        ],
      },
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      options: {
        list: [
          { title: 'Greater London', value: 'Greater London' },
          { title: 'South East', value: 'South East' },
          { title: 'South West', value: 'South West' },
          { title: 'East Anglia', value: 'East Anglia' },
          { title: 'East Midlands', value: 'East Midlands' },
          { title: 'West Midlands', value: 'West Midlands' },
          { title: 'Yorkshire', value: 'Yorkshire' },
          { title: 'North West', value: 'North West' },
          { title: 'North East', value: 'North East' },
          { title: 'Scotland', value: 'Scotland' },
          { title: 'Wales', value: 'Wales' },
        ],
      },
    },
    {
      name: 'postcode',
      title: 'Postcode',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Office', value: 'Office' },
          { title: 'Hotel', value: 'Hotel' },
          { title: 'Retail', value: 'Retail' },
          { title: 'Industrial', value: 'Industrial' },
          { title: 'Mixed-Use', value: 'Mixed-Use' },
          { title: 'Residential', value: 'Residential' },
          { title: 'Commercial', value: 'Commercial' },
        ],
      },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'Available' },
          { title: 'Under Offer', value: 'Under Offer' },
          { title: 'Sold', value: 'Sold' },
        ],
      },
      initialValue: 'Available',
    },
    {
      name: 'price',
      title: 'Price (GBP)',
      type: 'string',
      description: 'Primary price shown (e.g., £140,000,000)',
    },
    {
      name: 'yield',
      title: 'Net Yield',
      type: 'string',
      description: 'Expected yield (e.g., 9.78%)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'roi',
      title: 'ROI Description',
      type: 'string',
      description: 'Short ROI or investment thesis text',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    },
    {
      name: 'features',
      title: 'Key Features / Specifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sqft',
      title: 'Square Footage',
      type: 'string',
    },
    {
      name: 'brochure',
      title: 'Property Brochure (PDF)',
      type: 'file',
      options: { accept: '.pdf' }
    },
    {
      name: 'details',
      title: 'Physical & Legal Attributes',
      type: 'array',
      description: 'Add custom attributes like Tenure, Size, or Parking',
      of: [
        {
          type: 'object',
          name: 'attribute',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'investment',
      title: 'Financial Investment Details',
      type: 'object',
      fields: [
        { name: 'monthlyIncome', title: 'Monthly Income', type: 'string' },
        { name: 'annualIncome', title: 'Annual Income', type: 'string' },
        { name: 'appreciationRate', title: 'Appreciation Rate', type: 'string' },
        { name: 'totalROI', title: 'Total ROI Target', type: 'string' },
      ],
    },
    {
      name: 'tenure',
      title: 'Tenure',
      type: 'string',
      options: {
        list: [
          { title: 'Freehold', value: 'Freehold' },
          { title: 'Leasehold', value: 'Leasehold' },
          { title: 'Virtual Freehold', value: 'Virtual Freehold' },
          { title: 'Commonhold', value: 'Commonhold' },
        ],
      },
    },
    {
      name: 'regulatory',
      title: 'Regulatory Information',
      type: 'object',
      fields: [
        { name: 'fcaCompliant', title: 'FCA Compliant', type: 'boolean', initialValue: true },
        { name: 'stampDuty', title: 'Stamp Duty Included', type: 'boolean', initialValue: false },
        { name: 'sicr', title: 'SICR Compliant', type: 'boolean', initialValue: true },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'mainImage',
    },
  },
}

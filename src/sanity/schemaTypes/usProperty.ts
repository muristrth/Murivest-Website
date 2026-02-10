export default {
  name: 'usProperty',
  title: 'US Property',
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
      description: 'Full address (e.g., Midtown Manhattan, New York, NY)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'ZIP Code',
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
          { title: 'Industrial', value: 'Industrial' },
          { title: 'Retail', value: 'Retail' },
          { title: 'Mixed-Use', value: 'Mixed-Use' },
          { title: 'Residential', value: 'Residential' },
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
      title: 'Price (USD)',
      type: 'string',
      description: 'Primary price shown (e.g., $250,000,000)',
    },
    {
      name: 'yield',
      title: 'Net Yield',
      type: 'string',
      description: 'Expected yield (e.g., 5.5%)',
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
      name: 'regulatory',
      title: 'Regulatory Information',
      type: 'object',
      fields: [
        { name: 'secCompliant', title: 'SEC Compliant', type: 'boolean', initialValue: true },
        { name: 'exchange1031', title: '1031 Exchange Eligible', type: 'boolean', initialValue: false },
        { name: 'crefcStandards', title: 'CREFC Standards', type: 'boolean', initialValue: true },
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

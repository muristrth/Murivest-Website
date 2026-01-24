export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Property Type',
      type: 'string',
      description: 'e.g. Commercial, Residential, Industrial',
    },
    {
      name: 'occupancyRate',
      title: 'Occupancy Rate',
      type: 'string',
      initialValue: '100%',
    },
    {
    name: 'brochure',
    title: 'Property Brochure (PDF)',
    type: 'file',
    options: { accept: '.pdf' }
    },
    {
      name: 'price',
      title: 'Main Display Price',
      type: 'string',
      description: 'Primary price shown (e.g. $2.5M)',
    },
    {
      name: 'priceKsh', title: 'Price (KSH)', type: 'string' 
    },
    {
      name: 'priceUsd', title: 'Price (USD)', type: 'string' 
    },
    {
      name: 'priceGbp', title: 'Price (GBP)', type: 'string' 
    },
    {
      name: 'priceEur', title: 'Price (EUR)', type: 'string' 
    },
    {
      name: 'yield',
      title: 'Yield',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    },
    {
      name: 'features',
      title: 'Key Features / Risk Mitigants',
      type: 'array',
      of: [{ type: 'string' }],
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
  ],
}
export default {
  name: 'insight',
  title: 'Commercial Insights',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Report Title',
      type: 'string',
      description: 'The headline of the commercial analysis.',
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
      name: 'assetClass',
      title: 'Asset Class',
      type: 'string',
      description: 'The specific sector this insight covers.',
      options: {
        list: [
          { title: 'Grade A Office', value: 'Office' },
          { title: 'Industrial & Logistics', value: 'Industrial' },
          { title: 'Retail & Mixed-Use', value: 'Retail' },
          { title: 'Hospitality', value: 'Hospitality' },
          { title: 'Market Strategy', value: 'Strategy' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image inside Sanity
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Executive Summary',
      type: 'text',
      rows: 3,
      description: 'A brief overview (2-3 sentences) for the card preview.',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      description: 'e.g., "12 min read"',
    },
    {
      name: 'body',
      title: 'Analysis Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'assetClass',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { title, author, media } = selection
      return {
        title: title,
        subtitle: `Sector: ${author}`,
        media: media,
      }
    },
  },
}
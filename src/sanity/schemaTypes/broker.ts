import { Rule } from 'sanity'

export default {
  name: 'broker',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Managing Director', value: 'md' },
          { title: 'Investment Advisor', value: 'advisor' },
          { title: 'Land Specialist', value: 'land' },
          { title: 'Commercial Broker', value: 'commercial' },
          { title: 'Research Analyst', value: 'research' },
        ],
      },
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
    },
    {
      name: 'photo',
      title: 'Portrait',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    },
    {
      name: 'specializations',
      title: 'Specializations',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Commercial Office',
          'Retail',
          'Industrial',
          'Land Banking',
          'Capital Markets',
          'Property Management',
        ],
      },
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
    prepare({ title, subtitle, media }: any) {
      const roleMap: Record<string, string> = {
        md: 'Managing Director',
        advisor: 'Investment Advisor',
        land: 'Land Specialist',
        commercial: 'Commercial Broker',
        research: 'Research Analyst',
      }
      return {
        title,
        subtitle: roleMap[subtitle] || subtitle,
        media,
      }
    },
  },
}
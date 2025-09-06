const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// African countries data
const africanCountries = [
  'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde',
  'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Cote d\'Ivoire',
  'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon',
  'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya',
  'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique',
  'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal',
  'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan',
  'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
];

// Blog categories
const categories = [
  'Commercial Real Estate',
  'Residential Investment',
  'Market Analysis',
  'Investment Tips',
  'Property News',
  'Legal Updates',
  'REITs',
  'Investment Comparison',
  'Luxury Properties',
  'Sustainable Development',
  'Government Policy',
  'International Investment',
  'Africa Real Estate',
  'Economic Indicators',
  'Infrastructure',
  'Property Management',
  'Financing',
  'Taxation',
  'Urban Development',
  'Technology'
];

// Content templates
const contentTemplates = {
  'Commercial Real Estate': [
    'commercial real estate investment opportunities',
    'office space development trends',
    'retail property market analysis',
    'industrial property investment',
    'mixed-use development projects',
    'commercial property financing',
    'warehouse and logistics investment'
  ],
  'Residential Investment': [
    'apartment investment strategies',
    'luxury residential properties',
    'affordable housing opportunities',
    'student housing investment',
    'retirement home development',
    'condominium market trends',
    'townhouse investment potential'
  ],
  'Market Analysis': [
    'real estate market trends',
    'property price analysis',
    'investment market outlook',
    'economic impact on property',
    'demand and supply analysis',
    'market forecasting',
    'regional market comparison'
  ],
  'Investment Tips': [
    'property investment strategies',
    'risk management in real estate',
    'portfolio diversification',
    'tax optimization techniques',
    'property valuation methods',
    'negotiation strategies',
    'exit planning'
  ]
};

// Generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Generate excerpt
function generateExcerpt(title, category, country = null) {
  const baseExcerpts = {
    'Commercial Real Estate': 'Comprehensive analysis of commercial property investment opportunities and market trends.',
    'Residential Investment': 'Explore residential property investment strategies and emerging opportunities.',
    'Market Analysis': 'In-depth market analysis and investment insights for informed decision making.',
    'Investment Tips': 'Expert tips and strategies for successful real estate investment.',
    'Property News': 'Latest updates and news from the real estate industry.',
    'Legal Updates': 'Important legal developments and regulatory changes in property investment.',
    'REITs': 'Real Estate Investment Trusts analysis and investment opportunities.',
    'Investment Comparison': 'Comparative analysis of different investment options and strategies.',
    'Luxury Properties': 'Premium property market analysis and luxury investment opportunities.',
    'Sustainable Development': 'Green building and sustainable property development trends.',
    'Government Policy': 'Government policies and their impact on real estate investment.',
    'International Investment': 'Global real estate investment opportunities and strategies.',
    'Africa Real Estate': 'Pan-African real estate market analysis and investment opportunities.',
    'Economic Indicators': 'Economic factors influencing real estate markets and investments.',
    'Infrastructure': 'Infrastructure development and its impact on property values.',
    'Property Management': 'Property management best practices and strategies.',
    'Financing': 'Property financing options and mortgage strategies.',
    'Taxation': 'Tax implications and optimization in real estate investment.',
    'Urban Development': 'Urban planning and development trends in real estate.',
    'Technology': 'Technology innovations transforming the real estate industry.'
  };

  let excerpt = baseExcerpts[category] || 'Comprehensive real estate investment analysis and insights.';

  if (country) {
    excerpt = `${country}'s ${excerpt.toLowerCase()}`;
  }

  return excerpt;
}

// Generate content
function generateContent(title, category, country = null) {
  const templates = contentTemplates[category] || ['real estate investment opportunities'];

  let content = `# ${title}\n\n`;

  if (country) {
    content += `## Overview of ${country}'s Real Estate Market\n\n`;
    content += `${country} presents unique opportunities in the real estate sector. `;
  }

  content += `This comprehensive analysis covers ${templates[Math.floor(Math.random() * templates.length)]} and provides valuable insights for investors.\n\n`;

  content += `## Key Investment Considerations\n\n`;
  content += `- Market analysis and trends\n`;
  content += `- Investment opportunities and strategies\n`;
  content += `- Risk assessment and management\n`;
  content += `- Financial planning and returns\n\n`;

  content += `## Market Outlook\n\n`;
  content += `The real estate market continues to evolve with new opportunities emerging regularly. Understanding current trends and future projections is essential for successful investment.\n\n`;

  content += `## Conclusion\n\n`;
  content += `Real estate investment offers significant potential for long-term wealth creation when approached with proper research and strategy.\n\n`;

  return content;
}

// Generate blog posts
async function generateBlogPosts() {
  console.log('Starting blog post generation...');

  const posts = [];
  let postCount = 0;

  // Generate posts for each category
  for (const category of categories) {
    console.log(`Generating posts for category: ${category}`);

    // Generate 20 posts per category
    for (let i = 1; i <= 20; i++) {
      const country = africanCountries[Math.floor(Math.random() * africanCountries.length)];
      const title = `${country} ${category}: ${2025 + Math.floor(Math.random() * 5)} Investment Guide`;
      const slug = generateSlug(title);
      const excerpt = generateExcerpt(title, category, country);
      const content = generateContent(title, category, country);

      const post = {
        title,
        slug,
        excerpt,
        content,
        author: ['Sarah Kimani', 'James Mwangi', 'Grace Wanjiku', 'David Ochieng', 'Mary Njeri'][Math.floor(Math.random() * 5)],
        category,
        tags: JSON.stringify([category.toLowerCase(), country.toLowerCase(), 'investment', 'real estate']),
        country,
        region: 'Africa',
        featured: Math.random() < 0.1, // 10% featured
        published: true,
        publishedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000), // Random date within last year
        readTime: `${5 + Math.floor(Math.random() * 10)} min read`,
        image: `https://images.unsplash.com/random/800x600?${category.toLowerCase().replace(' ', '-')}`,
        seoTitle: title,
        seoDescription: excerpt
      };

      posts.push(post);
      postCount++;

      if (postCount % 100 === 0) {
        console.log(`Generated ${postCount} posts...`);
      }
    }
  }

  // Generate additional specific posts for requested topics
  const specificTopics = [
    'Commercial Real Estate Investment',
    'Real Estate Investment in Kenya',
    'International Africa Investment',
    'Africa Real Estate Market',
    'Africa Commercial Real Estate'
  ];

  for (const topic of specificTopics) {
    for (let i = 1; i <= 50; i++) {
      const country = africanCountries[Math.floor(Math.random() * africanCountries.length)];
      const title = `${topic} in ${country}: ${2025 + Math.floor(Math.random() * 5)} Analysis`;
      const slug = generateSlug(title);
      const excerpt = generateExcerpt(title, 'International Investment', country);
      const content = generateContent(title, 'International Investment', country);

      const post = {
        title,
        slug,
        excerpt,
        content,
        author: ['Sarah Kimani', 'James Mwangi', 'Grace Wanjiku', 'David Ochieng', 'Mary Njeri'][Math.floor(Math.random() * 5)],
        category: 'International Investment',
        tags: JSON.stringify([topic.toLowerCase(), country.toLowerCase(), 'africa', 'investment']),
        country,
        region: 'Africa',
        featured: Math.random() < 0.15, // 15% featured for specific topics
        published: true,
        publishedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
        readTime: `${8 + Math.floor(Math.random() * 12)} min read`,
        image: `https://images.unsplash.com/random/800x600?${topic.toLowerCase().replace(' ', '-')}`,
        seoTitle: title,
        seoDescription: excerpt
      };

      posts.push(post);
      postCount++;
    }
  }

  console.log(`Total posts generated: ${posts.length}`);

  // Insert posts into database in batches
  const batchSize = 50;
  for (let i = 0; i < posts.length; i += batchSize) {
    const batch = posts.slice(i, i + batchSize);
    console.log(`Inserting batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(posts.length / batchSize)}...`);

    try {
      await prisma.blogPost.createMany({
        data: batch,
        skipDuplicates: true
      });
    } catch (error) {
      console.error(`Error inserting batch ${Math.floor(i / batchSize) + 1}:`, error);
    }
  }

  console.log('Blog post generation completed!');
  console.log(`Total posts created: ${posts.length}`);
}

// Main execution
async function main() {
  try {
    await generateBlogPosts();
  } catch (error) {
    console.error('Error generating blog posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Export for use in other files
module.exports = { generateBlogPosts };

if (require.main === module) {
  main();
}
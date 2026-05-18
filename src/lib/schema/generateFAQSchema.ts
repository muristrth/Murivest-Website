// ─── lib/schema/generateFAQSchema.ts ─────────────────────────────────────────

interface FAQ {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQ[]): Record<string, unknown> | null {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
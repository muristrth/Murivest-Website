import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Commercial Real Estate Investment Kenya - Murivest Realty Group",
  description = "Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.",
  keywords = "commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya",
  image = "https://murivest.co.ke/image.png",
  url = "https://murivest.co.ke",
  type = "website",
  noindex = false,
  structuredData
}) => {
  const siteUrl = "https://murivest.co.ke";
  const siteName = "Murivest Realty Group";
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_KE" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={title} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
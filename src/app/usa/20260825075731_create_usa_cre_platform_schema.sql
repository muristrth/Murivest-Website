/*
# Create USA Commercial Real Estate Platform Schema

## Overview
Creates the core data tables for the Murivest USA commercial real estate advisory platform.
This is a single-tenant public website (no sign-in) — all policies use `TO anon, authenticated`
so the anon-key frontend can read public data and submit inquiries.

## New Tables

### 1. `usa_inquiries`
Contact form submissions from the USA platform (capital markets contact, mandate requests, property inquiries).
- `id` (uuid, primary key)
- `name` (text, not null) — submitter full name
- `email` (text, not null) — submitter email
- `company` (text) — submitter's company/firm
- `phone` (text) — phone number
- `inquiry_type` (text, not null) — type: capital_markets | investment_sales | leasing | mandate | property_inquiry | general
- `message` (text, not null) — the inquiry body
- `property_ref` (text) — optional slug of a property being inquired about
- `status` (text, default 'new') — internal status: new | contacted | closed
- `created_at` (timestamptz, default now())

### 2. `usa_insights`
Market intelligence articles published by Murivest (editorial content for the insights page).
- `id` (uuid, primary key)
- `slug` (text, unique, not null) — URL slug
- `title` (text, not null)
- `summary` (text, not null) — short summary for cards/SEO
- `body` (text, not null) — full article body (markdown or plain text)
- `category` (text, not null) — e.g. market_report | cap_rate | sector_brief | macro
- `sector` (text) — optional sector tag: office | industrial | multifamily | retail | data_centers | logistics
- `msa` (text) — optional metro area tag
- `author` (text, default 'Murivest Research') — author name
- `published_at` (date, not null) — publication date
- `is_published` (boolean, default true) — whether to show publicly
- `created_at` (timestamptz, default now())

### 3. `usa_properties`
Property/opportunity listings. These represent Murivest's mandate-based offerings — not a public MLS.
Only published properties with `is_listed = true` are shown on the site.
- `id` (uuid, primary key)
- `slug` (text, unique, not null) — URL slug
- `title` (text, not null) — listing title
- `property_type` (text, not null) — office | industrial | logistics | multifamily | retail | data_centers
- `transaction_type` (text, not null) — sale | lease
- `address_line` (text) — street address
- `city` (text, not null) — city
- `state` (text, not null) — US state abbreviation
- `msa` (text) — metro statistical area
- `description` (text, not null) — full description
- `building_size_sqft` (integer) — total building size
- `land_size_acres` (numeric) — land area
- `year_built` (integer) — year built
- `year_renovated` (integer) — year renovated
- `cap_rate` (numeric) — cap rate for sales
- `asking_price` (numeric) — asking price for sales
- `asking_rent_psf` (numeric) — asking rent per square foot for leases
- `lease_type` (text) — e.g. NNN | gross | modified_gross
- `occupancy` (numeric) — occupancy percentage
- `image_url` (text) — primary image URL
- `gallery_urls` (text[]) — array of additional image URLs
- `highlights` (text[]) — array of key highlights
- `is_listed` (boolean, default true) — whether to show publicly
- `published_at` (date, not null, default current_date) — listing date
- `created_at` (timestamptz, default now())

## Security
- RLS enabled on all tables.
- `usa_inquiries`: public INSERT (anyone can submit), no public SELECT (inquiries are private to operators).
- `usa_insights`: public SELECT for published articles, no public write.
- `usa_properties`: public SELECT for listed properties, no public write.
*/

-- ============================================================
-- Table: usa_inquiries
-- ============================================================
CREATE TABLE IF NOT EXISTS usa_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  inquiry_type text NOT NULL CHECK (
    inquiry_type IN ('capital_markets', 'investment_sales', 'leasing', 'mandate', 'property_inquiry', 'general')
  ),
  message text NOT NULL,
  property_ref text,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE usa_inquiries ENABLE ROW LEVEL SECURITY;

-- Public can insert inquiries (contact form submissions)
DROP POLICY IF EXISTS "anon_insert_inquiries" ON usa_inquiries;
CREATE POLICY "anon_insert_inquiries" ON usa_inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No public SELECT — inquiries are private to Murivest operators
-- (operators access via service role key in edge functions / admin tools)

-- ============================================================
-- Table: usa_insights
-- ============================================================
CREATE TABLE IF NOT EXISTS usa_insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  summary text NOT NULL,
  body text NOT NULL,
  category text NOT NULL CHECK (
    category IN ('market_report', 'cap_rate', 'sector_brief', 'macro', 'transaction_news')
  ),
  sector text,
  msa text,
  author text NOT NULL DEFAULT 'Murivest Research',
  published_at date NOT NULL DEFAULT current_date,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE usa_insights ENABLE ROW LEVEL SECURITY;

-- Public can read published insights
DROP POLICY IF EXISTS "anon_select_published_insights" ON usa_insights;
CREATE POLICY "anon_select_published_insights" ON usa_insights FOR SELECT
  TO anon, authenticated USING (is_published = true);

-- ============================================================
-- Table: usa_properties
-- ============================================================
CREATE TABLE IF NOT EXISTS usa_properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  property_type text NOT NULL CHECK (
    property_type IN ('office', 'industrial', 'logistics', 'multifamily', 'retail', 'data_centers')
  ),
  transaction_type text NOT NULL CHECK (transaction_type IN ('sale', 'lease')),
  address_line text,
  city text NOT NULL,
  state text NOT NULL,
  msa text,
  description text NOT NULL,
  building_size_sqft integer,
  land_size_acres numeric,
  year_built integer,
  year_renovated integer,
  cap_rate numeric,
  asking_price numeric,
  asking_rent_psf numeric,
  lease_type text,
  occupancy numeric,
  image_url text,
  gallery_urls text[] DEFAULT '{}',
  highlights text[] DEFAULT '{}',
  is_listed boolean NOT NULL DEFAULT true,
  published_at date NOT NULL DEFAULT current_date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE usa_properties ENABLE ROW LEVEL SECURITY;

-- Public can read listed properties
DROP POLICY IF EXISTS "anon_select_listed_properties" ON usa_properties;
CREATE POLICY "anon_select_listed_properties" ON usa_properties FOR SELECT
  TO anon, authenticated USING (is_listed = true);

-- ============================================================
-- Indexes
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_usa_insights_published ON usa_insights (is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_usa_insights_category ON usa_insights (category);
CREATE INDEX IF NOT EXISTS idx_usa_insights_sector ON usa_insights (sector);
CREATE INDEX IF NOT EXISTS idx_usa_properties_listed ON usa_properties (is_listed, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_usa_properties_type ON usa_properties (property_type);
CREATE INDEX IF NOT EXISTS idx_usa_properties_transaction ON usa_properties (transaction_type);
CREATE INDEX IF NOT EXISTS idx_usa_properties_msa ON usa_properties (msa);
CREATE INDEX IF NOT EXISTS idx_usa_inquiries_created ON usa_inquiries (created_at DESC);

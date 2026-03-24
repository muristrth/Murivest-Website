-- Murivest Investor Portal Database Schema
-- For UHNWI Investor Portal with Admin CRUD Operations

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USER PROFILES & AUTHENTICATION
-- ============================================

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT,
    title TEXT,
    organisation TEXT,
    phone TEXT,
    aum TEXT,
    investment_focus TEXT,
    investor_status TEXT DEFAULT 'registered' CHECK (investor_status IN ('registered', 'verified', 'premium', 'admin')),
    portfolio_value DECIMAL(15,2),
    verified_at TIMESTAMPTZ,
    verified_by UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Profile allocations
CREATE TABLE IF NOT EXISTS profile_allocations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    direct_real_estate DECIMAL(5,2) DEFAULT 0,
    indirect_real_estate DECIMAL(5,2) DEFAULT 0,
    equities DECIMAL(5,2) DEFAULT 0,
    fixed_income DECIMAL(5,2) DEFAULT 0,
    alternatives DECIMAL(5,2) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- VERIFICATION SYSTEM
-- ============================================

-- Verification requests
CREATE TABLE IF NOT EXISTS verification_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    request_type TEXT NOT NULL CHECK (request_type IN ('verification', 'premium', 'kyc')),
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    documents JSONB,
    notes TEXT,
    reviewed_by UUID REFERENCES profiles(id),
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PUBLICATIONS & RESEARCH
-- ============================================

-- Publications (research reports, market insights)
CREATE TABLE IF NOT EXISTS publications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    content TEXT,
    category TEXT NOT NULL CHECK (category IN ('market_report', 'investment_analysis', 'quarterly_update', 'research_brief', 'white_paper')),
    cover_image TEXT,
    fliphtml_url TEXT,
    file_url TEXT,
    access_level TEXT DEFAULT 'registered' CHECK (access_level IN ('registered', 'verified', 'premium')),
    author TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INVESTMENT BRIEFS (ASSET BRIEFS)
-- ============================================

-- Asset briefs
CREATE TABLE IF NOT EXISTS asset_briefs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    content TEXT,
    property_type TEXT CHECK (property_type IN ('office', 'retail', 'industrial', 'hospitality', 'mixed_use', 'land')),
    location TEXT,
    asking_price DECIMAL(15,2),
    yield_estimate DECIMAL(5,2),
    cap_rate DECIMAL(5,2),
    images JSONB,
    documents JSONB,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'withdrawn')),
    access_level TEXT DEFAULT 'registered' CHECK (access_level IN ('registered', 'verified', 'premium')),
    featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- OFF-MARKET DEALS
-- ============================================

-- Off-market deals
CREATE TABLE IF NOT EXISTS off_market_deals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    description TEXT,
    property_type TEXT CHECK (property_type IN ('office', 'retail', 'industrial', 'hospitality', 'mixed_use', 'land')),
    location TEXT,
    region TEXT,
    asking_price DECIMAL(15,2),
    min_investment DECIMAL(15,2),
    expected_yield DECIMAL(5,2),
    deal_stage TEXT CHECK (deal_stage IN ('due_diligence', 'under_contract', 'closing')),
    images JSONB,
    documents JSONB,
    virtual_tour_url TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'withdrawn', 'archived')),
    access_level TEXT DEFAULT 'verified' CHECK (access_level IN ('registered', 'verified', 'premium')),
    featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ORDERS & BRIEF REQUESTS
-- ============================================

-- Brief orders (purchases)
CREATE TABLE IF NOT EXISTS brief_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    brief_id UUID REFERENCES asset_briefs(id),
    order_type TEXT NOT NULL CHECK (order_type IN ('brief_purchase', 'brief_request', 'publication_access')),
    amount DECIMAL(10,2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'awaiting_payment', 'paid', 'fulfilled', 'cancelled', 'refunded')),
    payment_method TEXT,
    payment_reference TEXT,
    notes TEXT,
    fulfilled_by UUID REFERENCES profiles(id),
    fulfilled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PAYMENTS
-- ============================================

-- Payment confirmations (M-Pesa and other)
CREATE TABLE IF NOT EXISTS payment_confirmations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES brief_orders(id) ON DELETE SET NULL,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    payment_method TEXT NOT NULL CHECK (payment_method IN ('mpesa', 'bank_transfer', 'card', 'crypto')),
    transaction_id TEXT,
    phone_number TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'failed', 'refunded')),
    review_status TEXT DEFAULT 'submitted' CHECK (review_status IN ('submitted', 'approved', 'rejected')),
    receipt_url TEXT,
    notes TEXT,
    verified_by UUID REFERENCES profiles(id),
    verified_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- RESOURCES & UPLOADS
-- ============================================

-- Resource library
CREATE TABLE IF NOT EXISTS resources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL CHECK (category IN ('brochure', 'financial_model', 'legal_document', 'presentation', 'report', 'template')),
    file_url TEXT NOT NULL,
    file_type TEXT,
    file_size INTEGER,
    access_level TEXT DEFAULT 'registered' CHECK (access_level IN ('registered', 'verified', 'premium')),
    uploaded_by UUID REFERENCES profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- AUDIT LOG
-- ============================================

-- Audit log for admin actions
CREATE TABLE IF NOT EXISTS audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- MARKET DATA
-- ============================================

-- Market snapshots (for dashboard)
CREATE TABLE IF NOT EXISTS market_snapshots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    region TEXT NOT NULL,
    metric TEXT NOT NULL,
    value TEXT NOT NULL,
    trend TEXT CHECK (trend IN ('up', 'down', 'stable')),
    source TEXT,
    as_of_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- NEWSLETTER SUBSCRIPTIONS
-- ============================================

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    unsubscribed_at TIMESTAMPTZ
);

-- ============================================
-- CONTACT INQUIRIES
-- ============================================

CREATE TABLE IF NOT EXISTS contact_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    organisation TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
    assigned_to UUID REFERENCES profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_investor_status ON profiles(investor_status);
CREATE INDEX IF NOT EXISTS idx_publications_slug ON publications(slug);
CREATE INDEX IF NOT EXISTS idx_publications_category ON publications(category);
CREATE INDEX IF NOT EXISTS idx_publications_access ON publications(access_level);
CREATE INDEX IF NOT EXISTS idx_asset_briefs_slug ON asset_briefs(slug);
CREATE INDEX IF NOT EXISTS idx_asset_briefs_status ON asset_briefs(status);
CREATE INDEX IF NOT EXISTS idx_off_market_deals_slug ON off_market_deals(slug);
CREATE INDEX IF NOT EXISTS idx_off_market_deals_status ON off_market_deals(status);
CREATE INDEX IF NOT EXISTS idx_brief_orders_user ON brief_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_brief_orders_status ON brief_orders(status);
CREATE INDEX IF NOT EXISTS idx_payment_confirmations_user ON payment_confirmations(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_confirmations_status ON payment_confirmations(status);
CREATE INDEX IF NOT EXISTS idx_verification_requests_user ON verification_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_verification_requests_status ON verification_requests(status);
CREATE INDEX IF NOT EXISTS idx_audit_log_user ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_entity ON audit_log(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
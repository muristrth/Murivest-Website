-- ============================================================
-- NDA TABLES - Add to existing profiles schema
-- Run this to add NDA functionality
-- ============================================================

-- OTP VERIFICATIONS (uses profiles.id)
CREATE TABLE IF NOT EXISTS otp_verifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  otp_hash TEXT NOT NULL,
  purpose TEXT DEFAULT 'nda_sign',
  verified BOOLEAN DEFAULT FALSE,
  attempts INT DEFAULT 0,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- NDA DOCUMENTS
CREATE TABLE IF NOT EXISTS nda_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  version TEXT DEFAULT 'v1.0',
  document_type TEXT DEFAULT 'investor_nda',
  content_text TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- NDA SIGNATURES (uses profiles.id)
CREATE TABLE IF NOT EXISTS nda_signatures (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  nda_document_id UUID REFERENCES nda_documents(id),
  signer_full_name TEXT NOT NULL,
  signer_email TEXT NOT NULL,
  signer_company TEXT,
  signature_method TEXT DEFAULT 'drawn',
  signature_data TEXT,
  otp_verified BOOLEAN DEFAULT FALSE,
  email_verified BOOLEAN DEFAULT FALSE,
  consent_accepted BOOLEAN DEFAULT FALSE,
  agreed_at TIMESTAMPTZ,
  ip_address TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  signed_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- PROPERTY LISTINGS
CREATE TABLE IF NOT EXISTS property_listings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_code TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  visibility TEXT DEFAULT 'nda_required',
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- USER PROPERTY ACCESS (uses profiles.id)
CREATE TABLE IF NOT EXISTS user_property_access (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  property_id UUID NOT NULL REFERENCES property_listings(id),
  nda_signature_id UUID REFERENCES nda_signatures(id),
  granted_by TEXT DEFAULT 'system',
  granted_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  UNIQUE(user_id, property_id)
);

-- STORED PROCEDURE (uses profiles.id)
CREATE OR REPLACE FUNCTION grant_portal_access(
  p_id UUID,
  p_signature_id UUID
)
RETURNS VOID AS $$
BEGIN
  UPDATE profiles SET investor_status = 'verified' WHERE id = p_id;
  
  INSERT INTO user_property_access (user_id, property_id, nda_signature_id, granted_by)
  SELECT p_id, pl.id, p_signature_id, 'system'
  FROM property_listings pl
  WHERE pl.visibility = 'nda_required' AND pl.status IN ('active', 'under_offer')
  ON CONFLICT (user_id, property_id) DO UPDATE SET is_active = TRUE, nda_signature_id = p_signature_id, granted_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- SEED DATA
INSERT INTO nda_documents (title, version, document_type, content_text, is_active)
VALUES ('Murivest Investor NDA', 'v1.0', 'investor_nda', 'Confidentiality Agreement', TRUE);

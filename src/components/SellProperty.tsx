"use client"

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2, User, Briefcase, ChevronRight, ChevronLeft,
  Upload, X, Check, AlertCircle, FileText, Image,
  DollarSign, Percent, Calendar, Hash, MapPin,
  Phone, Mail, Globe, Shield, Info, Star,
  Layers, Home, Warehouse, Hotel, Trees,
  CheckCircle2, Clock, Eye, Crown, TrendingUp,
  Landmark, Users, Factory, Building, TreePine,
  HardHat, FileCheck, BarChart3, Target, Zap
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = 'OWNER' | 'BROKER' | 'DEVELOPER' | 'REIT' | 'FAMILY_OFFICE' | 'SOVEREIGN_FUND'
type MandateChain = 'DIRECT' | 'CO_BROKER' | 'SUB_AGENT'
type AssetClass = 'OFFICE' | 'RETAIL' | 'INDUSTRIAL' | 'HOSPITALITY' | 'LAND' | 'MIXED_USE' | 'RESIDENTIAL_BLOCK' | 'DATA_CENTER' | 'LOGISTICS' | 'HEALTHCARE'
type TitleType = 'FREEHOLD' | 'LEASEHOLD' | 'SECTIONAL' | 'GOVERNMENT_LEASE'
type DivestmentReason = 'PORTFOLIO_REBALANCING' | 'CAPITAL_RECYCLING' | 'DISTRESSED_SALE' | 'PARTNER_EXIT' | 'FUND_MATURITY' | 'DEBT_MATURITY' | 'STRATEGIC_EXIT' | 'OTHER'
type Currency = 'KES' | 'USD' | 'EUR' | 'GBP'
type BuildingGrade = 'A' | 'B' | 'C' | 'D'
type GreenCert = 'LEED_PLATINUM' | 'LEED_GOLD' | 'LEED_SILVER' | 'EDGE_ADVANCED' | 'EDGE_CERTIFIED' | 'GREEN_STAR' | 'BREEAM' | 'NONE'

interface FileUpload {
  file: File
  preview?: string
  category: string
  name: string
}

interface FormData {
  role: Role
  ownerFullName: string
  ownerEntityName: string
  ownerEmail: string
  ownerPhone: string
  ownerIdNumber: string
  ownerPinNumber: string
  ownerPassportNumber: string
  ownerNationality: string
  ownerIsCorporate: boolean
  ownerDirectorName: string
  ownerSoleMandateConfirmation: boolean
  ownerBeneficialOwnership: string
  ownerSourceOfWealth: string
  ownerUhwiStatus: boolean
  brokerFullName: string
  brokerEntityName: string
  brokerEmail: string
  brokerPhone: string
  brokerEarbNumber: string
  brokerEarbExemptionReason: string
  brokerHasEarb: boolean
  brokerMandateChain: MandateChain
  brokerIntermediaryChainDesc: string
  brokerIsSubAgent: boolean
  brokerYearsExperience: string
  brokerTrackRecord: string
  developerCompanyName: string
  developerRegNumber: string
  developerPrincipalName: string
  developerPrincipalTitle: string
  developerEmail: string
  developerPhone: string
  developerProjectsCompleted: string
  developerCurrentPipeline: string
  developerYearsActive: string
  developerWebsite: string
  reitName: string
  reitExchangeListing: string
  reitFundManager: string
  reitAum: string
  reitNav: string
  reitDistributionHistory: string
  reitComplianceOfficer: string
  reitComplianceEmail: string
  reitRegulator: string
  foName: string
  foAumRange: string
  foInvestmentHorizon: string
  foPreferredClasses: string
  foDecisionMakerName: string
  foDecisionMakerTitle: string
  foEmail: string
  foPhone: string
  foWealthSource: string
  foGeneration: string
  sovereignFundName: string
  sovereignCountry: string
  sovereignMandate: string
  sovereignIcStructure: string
  sovereignLocalRep: string
  sovereignLocalRepTitle: string
  sovereignEmail: string
  sovereignPhone: string
  sovereignProtocol: string
  sovereignAum: string
  propertyName: string
  assetClass: AssetClass
  locationCity: string
  locationNeighborhood: string
  locationSubmarket: string
  streetAddress: string
  lrNumber: string
  titleType: TitleType
  leaseholdYearsRemaining: string
  yearBuilt: string
  yearRefurbished: string
  totalBuiltUpAreaSqm: string
  totalLettableAreaSqm: string
  landAreaAcres: string
  landAreaHectares: string
  numberOfFloors: string
  numberOfUnits: string
  numberOfParkingBays: string
  plotNumber: string
  titleDeedNumber: string
  countyRegistered: string
  buildingGrade: BuildingGrade
  greenCertification: GreenCert
  esgComplianceScore: string
  lastValuationAmount: string
  lastValuationDate: string
  insuranceValue: string
  propertyManagerName: string
  facilitiesManagement: string
  currency: Currency
  askingPrice: string
  askingPriceUsd: string
  askingPricePerSqm: string
  openToUsdPricing: boolean
  grossRentAnnual: string
  netOperatingIncome: string
  occupancyRate: string
  waleYears: string
  capRate: string
  serviceChargeAnnual: string
  serviceChargePerSqm: string
  currentDebt: string
  debtMaturityDate: string
  debtLender: string
  debtInterestRate: string
  ltvRatio: string
  divestmentReason: DivestmentReason
  divestmentReasonOther: string
  exclusivityPeriod: '30' | '60' | '90'
  anchorTenantName: string
  anchorTenantSector: string
  anchorTenantLeaseExpiry: string
  anchorTenantSqm: string
  otherTenants: string
  totalLettableArea: string
  vacantArea: string
  vacancyRate: string
  numberOfTenants: string
  energyRating: string
  waterRecycling: boolean
  solarInstalled: boolean
  backupGenerator: boolean
  borehole: boolean
  fiberConnectivity: boolean
  cctvSecurity: boolean
  accessControl: boolean
  fireSuppression: boolean
  confidentialityConfirmed: boolean
  accuracyConfirmed: boolean
  noExistingNdaViolation: boolean
  authorizedToSubmit: boolean
  marketingConsent: boolean
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, label: 'Identity', desc: 'Who are you?' },
  { id: 2, label: 'Your Details', desc: 'Contact & Compliance' },
  { id: 3, label: 'Asset ID', desc: 'Property Identification' },
  { id: 4, label: 'Financials', desc: 'Yield & Metrics' },
  { id: 5, label: 'Tenancy & ESG', desc: 'Tenant & Sustainability' },
  { id: 6, label: 'Documents', desc: 'Upload Files & Photos' },
  { id: 7, label: 'Submit', desc: 'Representations' },
]

const ROLE_OPTIONS: { value: Role; label: string; icon: React.ReactNode; desc: string; points: string[] }[] = [
  { value: 'OWNER', label: 'Property Owner', icon: <User className="w-6 h-6" strokeWidth={1} />, desc: 'I am the registered proprietor', points: ['Direct mandate rights', 'Title in your/entity name', 'Highest priority processing'] },
  { value: 'BROKER', label: 'Authorized Broker', icon: <Briefcase className="w-6 h-6" strokeWidth={1} />, desc: 'I represent the owner/entity', points: ['Valid ATS required', 'EARB registration verified', 'Mandate chain declaration'] },
  { value: 'DEVELOPER', label: 'Developer', icon: <HardHat className="w-6 h-6" strokeWidth={1} />, desc: 'Property development company', points: ['Project portfolio review', 'Development track record', 'Institutional pricing'] },
  { value: 'REIT', label: 'REIT / Fund', icon: <Landmark className="w-6 h-6" strokeWidth={1} />, desc: 'Real estate investment trust', points: ['Regulatory compliance', 'Fund manager verification', 'Distribution track record'] },
  { value: 'FAMILY_OFFICE', label: 'Family Office', icon: <Crown className="w-6 h-6" strokeWidth={1} />, desc: 'Private family investment office', points: ['Discretionary processing', 'Wealth source verification', 'Private placement protocol'] },
  { value: 'SOVEREIGN_FUND', label: 'Sovereign Fund', icon: <Globe className="w-6 h-6" strokeWidth={1} />, desc: 'Government investment fund', points: ['Diplomatic protocol', 'IC authorization required', 'Highest confidentiality'] },
]

const ASSET_CLASS_OPTIONS: { value: AssetClass; label: string; icon: React.ReactNode; desc: string }[] = [
  { value: 'OFFICE', label: 'Office', icon: <Building2 className="w-5 h-5" strokeWidth={1} />, desc: 'Grade A/B commercial office space' },
  { value: 'RETAIL', label: 'Retail', icon: <Star className="w-5 h-5" strokeWidth={1} />, desc: 'Malls, standalone retail, showrooms' },
  { value: 'INDUSTRIAL', label: 'Industrial', icon: <Factory className="w-5 h-5" strokeWidth={1} />, desc: 'Warehousing, logistics, manufacturing' },
  { value: 'LOGISTICS', label: 'Logistics', icon: <Warehouse className="w-5 h-5" strokeWidth={1} />, desc: 'Distribution centers, cold chain, last-mile' },
  { value: 'HOSPITALITY', label: 'Hospitality', icon: <Hotel className="w-5 h-5" strokeWidth={1} />, desc: 'Hotels, lodges, serviced apartments' },
  { value: 'HEALTHCARE', label: 'Healthcare', icon: <Users className="w-5 h-5" strokeWidth={1} />, desc: 'Hospitals, clinics, medical centers' },
  { value: 'DATA_CENTER', label: 'Data Center', icon: <Zap className="w-5 h-5" strokeWidth={1} />, desc: 'Colocation, hyperscale facilities' },
  { value: 'LAND', label: 'Land', icon: <Trees className="w-5 h-5" strokeWidth={1} />, desc: 'Prime development parcels' },
  { value: 'MIXED_USE', label: 'Mixed Use', icon: <Layers className="w-5 h-5" strokeWidth={1} />, desc: 'Commercial + residential integration' },
  { value: 'RESIDENTIAL_BLOCK', label: 'Residential', icon: <Home className="w-5 h-5" strokeWidth={1} />, desc: 'Apartment blocks, serviced residences' },
]

const KENYAN_COUNTIES = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos',
  'Kajiado', 'Murang\'a', 'Nyeri', 'Nyandarua', 'Laikipia', 'Kilifi',
  'Kwale', 'Taita Taveta', 'Lamu', 'Tana River', 'Garissa', 'Wajir',
  'Mandera', 'Marsabit', 'Isiolo', 'Meru', 'Tharaka-Nithi', 'Embu',
  'Kitui', 'Makueni', 'Nandi', 'Baringo', 'Kericho', 'Bomet',
  'Uasin Gishu', 'Trans Nzoia', 'Kakamega', 'Bungoma', 'Busia', 'Siaya',
  'Homa Bay', 'Migori', 'Kisii', 'Nyamira', 'Narok', 'Kajiado'
]

const DIVESTMENT_REASONS: { value: DivestmentReason; label: string }[] = [
  { value: 'PORTFOLIO_REBALANCING', label: 'Portfolio Rebalancing' },
  { value: 'CAPITAL_RECYCLING', label: 'Capital Recycling' },
  { value: 'DISTRESSED_SALE', label: 'Distressed / Forced Sale' },
  { value: 'PARTNER_EXIT', label: 'Partner / Shareholder Exit' },
  { value: 'FUND_MATURITY', label: 'Fund Maturity / Wind-Down' },
  { value: 'DEBT_MATURITY', label: 'Debt Maturity / Refinancing' },
  { value: 'STRATEGIC_EXIT', label: 'Strategic Geographic Exit' },
  { value: 'OTHER', label: 'Other (Please specify)' },
]

const DOCUMENT_CATEGORIES = {
  MANDATE: [
    { key: 'ATS', label: 'Authority to Sell (ATS) — MANDATORY', required: true, accept: '.pdf', desc: 'Signed by registered owner, notarized' },
    { key: 'CERTIFICATE_OF_TITLE', label: 'Certificate of Title (Copy)', required: true, accept: '.pdf', desc: 'Land Registry title document' },
    { key: 'SEARCH_CERTIFICATE', label: 'Official Search Certificate', required: false, accept: '.pdf', desc: 'Land Registry search within 3 months' },
    { key: 'CONSENT_LETTER', label: 'Consent Letter (Leasehold)', required: false, accept: '.pdf', desc: 'Required for leasehold properties' },
  ],
  OWNER: [
    { key: 'NATIONAL_ID', label: "Owner's National ID / Passport", required: true, accept: '.pdf,.webp,.jpeg,.webp', desc: 'Clear copy of government-issued ID' },
    { key: 'KRA_PIN', label: 'KRA PIN Certificate', required: true, accept: '.pdf', desc: 'Kenya Revenue Authority PIN' },
    { key: 'CR12', label: 'CR12 (Corporate entities)', required: false, accept: '.pdf', desc: 'If property owned by company/trust' },
    { key: 'DIRECTOR_RESOLUTION', label: "Director's Resolution to Sell", required: false, accept: '.pdf', desc: 'Board authorization for corporate sellers' },
    { key: 'BENEFICIAL_OWNERSHIP', label: 'Beneficial Ownership Declaration', required: false, accept: '.pdf', desc: 'For UHNWI and corporate entities' },
  ],
  BROKER: [
    { key: 'BROKER_ID', label: "Broker's National ID / Passport", required: true, accept: '.pdf,.webp,.jpeg,.webp', desc: 'Clear copy of government-issued ID' },
    { key: 'EARB_CERT', label: 'EARB Registration Certificate', required: false, accept: '.pdf', desc: 'Estate Agents Registration Board cert' },
    { key: 'BROKER_FIRM_REG', label: 'Firm Registration Certificate', required: false, accept: '.pdf', desc: 'Business name / company registration' },
    { key: 'PRIMARY_ATS', label: "Primary Broker's ATS (Sub-agents)", required: false, accept: '.pdf', desc: 'Required if you are a sub-agent' },
    { key: 'TRACK_RECORD', label: 'Broker Track Record / References', required: false, accept: '.pdf', desc: 'Previous transaction evidence' },
  ],
  FINANCIALS: [
    { key: 'RENT_ROLL', label: 'Current Rent Roll', required: true, accept: '.pdf,.xlsx,.xls,.csv', desc: 'Detailed tenant listing with lease terms' },
    { key: 'MANAGEMENT_ACCOUNTS', label: 'Management Accounts (3 Years)', required: false, accept: '.pdf,.xlsx', desc: 'P&L, Balance Sheet, Cash Flow' },
    { key: 'UTILITY_BILLS', label: 'Utility Bills (Sample 3 Months)', required: false, accept: '.pdf,.webp,.jpeg', desc: 'KPLC, NWSC, water evidence' },
    { key: 'SERVICE_CHARGE_BUDGET', label: 'Service Charge Budget', required: false, accept: '.pdf,.xlsx', desc: 'Annual service charge breakdown' },
    { key: 'DEBT_SCHEDULE', label: 'Debt Schedule / Loan Statement', required: false, accept: '.pdf,.xlsx', desc: 'Outstanding mortgage or facility details' },
    { key: 'VALUATION_REPORT', label: 'Previous Valuation Report', required: false, accept: '.pdf', desc: 'Any valuation within 36 months' },
    { key: 'INSURANCE_CERT', label: 'Insurance Certificate', required: false, accept: '.pdf', desc: 'Property insurance documentation' },
  ],
  PROPERTY: [
    { key: 'FLOOR_PLANS', label: 'Floor Plans (CAD / PDF)', required: false, accept: '.pdf,.dwg,.dxf,.webp', desc: 'Architectural drawings preferred' },
    { key: 'SITE_PLAN', label: 'Site Plan', required: false, accept: '.pdf,.webp,.jpeg,.webp', desc: 'Plot/land boundary plan' },
    { key: 'PLANNING_APPROVAL', label: 'Planning Approval / Change of Use', required: false, accept: '.pdf', desc: 'County development approval' },
    { key: 'BUILDING_PERMIT', label: 'Building Completion Certificate', required: false, accept: '.pdf', desc: 'NCA completion certificate' },
    { key: 'ENVIRONMENTAL', label: 'Environmental Impact Assessment', required: false, accept: '.pdf', desc: 'NEMA approval / EIA report' },
    { key: 'ENGINEERING', label: 'Structural Engineering Report', required: false, accept: '.pdf', desc: 'Within 24 months preferred' },
    { key: 'SURVEY', label: 'Survey Report', required: false, accept: '.pdf', desc: 'Topographical / boundary survey' },
  ],
}

// ─── Utility Components ─────────────────────────────────────────────────────

const InputField = ({
  label, value, onChange, placeholder, type = 'text',
  required = false, hint, error, disabled = false,
  prefix, suffix
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
  hint?: string; error?: string; disabled?: boolean;
  prefix?: string; suffix?: string;
}) => (
  <div className="space-y-2">
    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A]">
      {label}
      {required && <span className="text-[#8B7355] ml-1">*</span>}
    </label>
    <div className="relative flex items-center">
      {prefix && (
        <span className="text-[14px] text-[#8B7355] font-light mr-3">
          {prefix}
        </span>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full bg-transparent border-b text-[14px] text-[#2C2C2C] font-light py-3 outline-none transition-colors duration-300
          ${error ? 'border-red-300 focus:border-red-400' : 'border-[#E5E2DC] focus:border-[#8B7355]'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          placeholder:text-[#B0ADA6]`}
      />
      {suffix && (
        <span className="text-[14px] text-[#5A5A5A] font-light ml-3">
          {suffix}
        </span>
      )}
    </div>
    {hint && !error && <p className="text-[11px] text-[#5A5A5A] italic mt-1">{hint}</p>}
    {error && <p className="text-[11px] text-red-500 flex items-center gap-1 mt-1"><AlertCircle className="w-3 h-3" />{error}</p>}
  </div>
)

const SelectField = ({
  label, value, onChange, options, required = false, hint, placeholder
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; required?: boolean;
  hint?: string; placeholder?: string;
}) => (
  <div className="space-y-2">
    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A]">
      {label}
      {required && <span className="text-[#8B7355] ml-1">*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light py-3 outline-none focus:border-[#8B7355] transition-colors duration-300 cursor-pointer appearance-none"
    >
      {placeholder && <option value="" disabled className="bg-[#F8F7F4]">{placeholder}</option>}
      {options.map(o => (
        <option key={o.value} value={o.value} className="bg-[#F8F7F4]">{o.label}</option>
      ))}
    </select>
    {hint && <p className="text-[11px] text-[#5A5A5A] italic mt-1">{hint}</p>}
  </div>
)

const CheckboxField = ({
  label, checked, onChange, desc
}: {
  label: string; checked: boolean; onChange: (v: boolean) => void; desc?: string;
}) => (
  <label className="flex items-start gap-3 cursor-pointer group">
    <div
      onClick={() => onChange(!checked)}
      className={`mt-0.5 w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-all duration-200 cursor-pointer
        ${checked ? 'bg-[#8B7355] border-[#8B7355]' : 'border-[#E5E2DC] group-hover:border-[#8B7355]'}`}
    >
      {checked && <Check className="w-3 h-3 text-white" strokeWidth={2} />}
    </div>
    <div>
      <p className="text-[14px] text-[#2C2C2C] font-light leading-snug">{label}</p>
      {desc && <p className="text-[11px] text-[#5A5A5A] italic mt-0.5">{desc}</p>}
    </div>
  </label>
)

const SectionHeader = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) => (
  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[#E5E2DC]">
    <div className="text-[#8B7355]">
      {icon}
    </div>
    <div>
      <h3 className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">{title}</h3>
      {subtitle && <p className="text-[11px] text-[#5A5A5A] italic mt-0.5">{subtitle}</p>}
    </div>
  </div>
)

const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 bg-[#F8F7F4] border border-[#E5E2DC] p-5 mb-8">
    <Info className="w-4 h-4 text-[#8B7355] flex-shrink-0 mt-0.5" strokeWidth={1} />
    <p className="text-[13px] text-[#5A5A5A] font-light leading-relaxed">{children}</p>
  </div>
)

// ─── File Upload Zone ───────────────────────────────────────────────────────

const FileUploadZone = ({
  category, label, required, accept, desc, files, onAdd, onRemove
}: {
  category: string; label: string; required: boolean; accept: string; desc: string;
  files: FileUpload[]; onAdd: (files: FileUpload[]) => void; onRemove: (name: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const categoryFiles = files.filter(f => f.category === category)

  const handleFiles = (fileList: FileList) => {
    const newFiles: FileUpload[] = Array.from(fileList).map(file => ({
      file,
      category,
      name: file.name,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
    }))
    onAdd(newFiles)
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A]">
          {label}
          {required && <span className="text-[#8B7355] ml-1">*</span>}
        </label>
        {categoryFiles.length > 0 && (
          <span className="text-[11px] text-[#8B7355] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />{categoryFiles.length} file(s)
          </span>
        )}
      </div>
      <p className="text-[11px] text-[#5A5A5A] italic">{desc}</p>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files) }}
        className="border border-dashed border-[#E5E2DC] hover:border-[#8B7355] p-5 text-center cursor-pointer transition-all duration-300 group bg-white"
      >
        <input ref={inputRef} type="file" className="hidden" accept={accept} multiple onChange={(e) => e.target.files && handleFiles(e.target.files)} />
        <Upload className="w-5 h-5 text-[#B0ADA6] group-hover:text-[#8B7355] mx-auto mb-2 transition-colors" strokeWidth={1} />
        <p className="text-[12px] text-[#5A5A5A] group-hover:text-[#2C2C2C] transition-colors font-light">Drop files or click to browse</p>
        <p className="text-[10px] text-[#B0ADA6] mt-1">{accept.replace(/\./g, '').toUpperCase().replace(/,/g, ', ')}</p>
      </div>
      {categoryFiles.length > 0 && (
        <div className="space-y-2">
          {categoryFiles.map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-[#E5E2DC] p-3">
              {f.preview ? <img src={f.preview} alt="" className="w-8 h-8 object-cover flex-shrink-0" /> : <FileText className="w-4 h-4 text-[#8B7355] flex-shrink-0" strokeWidth={1} />}
              <span className="text-[12px] text-[#2C2C2C] font-light flex-1 truncate">{f.name}</span>
              <span className="text-[10px] text-[#5A5A5A]">{(f.file.size / 1024 / 1024).toFixed(1)} MB</span>
              <button type="button" onClick={() => onRemove(f.name)} className="p-1 hover:bg-red-50 text-[#5A5A5A] hover:text-red-500 transition-colors"><X className="w-3 h-3" strokeWidth={1.5} /></button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Photo Upload Zone ──────────────────────────────────────────────────────

const PhotoUploadZone = ({
  category, label, files, onAdd, onRemove, minCount = 0
}: {
  category: string; label: string; files: FileUpload[];
  onAdd: (files: FileUpload[]) => void; onRemove: (name: string) => void; minCount?: number;
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const categoryFiles = files.filter(f => f.category === category)

  const handleFiles = (fileList: FileList) => {
    const newFiles: FileUpload[] = Array.from(fileList).map(file => ({
      file, category, name: file.name,
      preview: URL.createObjectURL(file),
    }))
    onAdd(newFiles)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A]">
          {label} {minCount > 0 && <span className="text-[#8B7355]">*</span>}
        </label>
        <span className="text-[11px] text-[#5A5A5A]">{categoryFiles.length} uploaded {minCount > 0 && `(min ${minCount})`}</span>
      </div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files) }}
        className="border-2 border-dashed border-[#E5E2DC] hover:border-[#8B7355] p-6 text-center cursor-pointer transition-all duration-300 group bg-white"
      >
        <input ref={inputRef} type="file" className="hidden" accept=".webp,.jpeg,.webp,.webp,.heic" multiple onChange={(e) => e.target.files && handleFiles(e.target.files)} />
        <Image className="w-6 h-6 text-[#B0ADA6] group-hover:text-[#8B7355] mx-auto mb-2 transition-colors" strokeWidth={1} />
        <p className="text-[13px] text-[#5A5A5A] group-hover:text-[#2C2C2C] transition-colors font-light">Upload {label} Photos</p>
        <p className="text-[11px] text-[#B0ADA6] mt-1">JPG, PNG, WEBP up to 20MB each</p>
      </div>
      {categoryFiles.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {categoryFiles.map((f, i) => (
            <div key={i} className="relative group overflow-hidden aspect-square bg-[#F8F7F4] border border-[#E5E2DC]">
              {f.preview && <img src={f.preview} alt="" className="w-full h-full object-cover" />}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button type="button" onClick={() => onRemove(f.name)} className="p-1.5 bg-white rounded-full"><X className="w-3 h-3 text-[#2C2C2C]" strokeWidth={1.5} /></button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1"><p className="text-[9px] text-white truncate font-light">{f.name}</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Progress Bar ───────────────────────────────────────────────────────────

const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => (
  <div className="mb-10">
    <div className="flex items-center justify-between mb-6">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center flex-1">
          <div className={`flex items-center justify-center w-8 h-8 border transition-all duration-300 text-[11px] font-medium
            ${currentStep > step.id ? 'bg-[#8B7355] border-[#8B7355] text-white' : ''}
            ${currentStep === step.id ? 'border-[#8B7355] text-[#8B7355]' : ''}
            ${currentStep < step.id ? 'border-[#E5E2DC] text-[#B0ADA6]' : ''}`}>
            {currentStep > step.id ? <Check className="w-3.5 h-3.5" strokeWidth={2} /> : step.id}
          </div>
          {i < STEPS.length - 1 && <div className={`h-px flex-1 mx-2 transition-all duration-500 ${currentStep > step.id ? 'bg-[#8B7355]' : 'bg-[#E5E2DC]'}`} />}
        </div>
      ))}
    </div>
    <div className="text-center">
      <p className="text-[11px] font-medium text-[#8B7355] uppercase tracking-[0.3em]">{STEPS[currentStep - 1]?.label}</p>
      <p className="text-[12px] text-[#5A5A5A] italic mt-1">{STEPS[currentStep - 1]?.desc}</p>
    </div>
  </div>
)

// ─── Main Component ─────────────────────────────────────────────────────────

const SellProperty: React.FC = () => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [files, setFiles] = useState<FileUpload[]>([])

  const [form, setForm] = useState<FormData>({
    role: 'OWNER',
    ownerFullName: '', ownerEntityName: '', ownerEmail: '', ownerPhone: '',
    ownerIdNumber: '', ownerPinNumber: '', ownerPassportNumber: '', ownerNationality: 'Kenyan',
    ownerIsCorporate: false, ownerDirectorName: '', ownerSoleMandateConfirmation: false,
    ownerBeneficialOwnership: '', ownerSourceOfWealth: '', ownerUhwiStatus: false,
    brokerFullName: '', brokerEntityName: '', brokerEmail: '', brokerPhone: '',
    brokerEarbNumber: '', brokerEarbExemptionReason: '', brokerHasEarb: true,
    brokerMandateChain: 'DIRECT', brokerIntermediaryChainDesc: '', brokerIsSubAgent: false,
    brokerYearsExperience: '', brokerTrackRecord: '',
    developerCompanyName: '', developerRegNumber: '', developerPrincipalName: '',
    developerPrincipalTitle: '', developerEmail: '', developerPhone: '',
    developerProjectsCompleted: '', developerCurrentPipeline: '', developerYearsActive: '',
    developerWebsite: '',
    reitName: '', reitExchangeListing: '', reitFundManager: '', reitAum: '',
    reitNav: '', reitDistributionHistory: '', reitComplianceOfficer: '',
    reitComplianceEmail: '', reitRegulator: '',
    foName: '', foAumRange: '', foInvestmentHorizon: '', foPreferredClasses: '',
    foDecisionMakerName: '', foDecisionMakerTitle: '', foEmail: '', foPhone: '',
    foWealthSource: '', foGeneration: '',
    sovereignFundName: '', sovereignCountry: '', sovereignMandate: '',
    sovereignIcStructure: '', sovereignLocalRep: '', sovereignLocalRepTitle: '',
    sovereignEmail: '', sovereignPhone: '', sovereignProtocol: '', sovereignAum: '',
    propertyName: '', assetClass: 'OFFICE', locationCity: 'Nairobi',
    locationNeighborhood: '', locationSubmarket: '', streetAddress: '',
    lrNumber: '', titleType: 'FREEHOLD', leaseholdYearsRemaining: '',
    yearBuilt: '', yearRefurbished: '', totalBuiltUpAreaSqm: '',
    totalLettableAreaSqm: '', landAreaAcres: '', landAreaHectares: '',
    numberOfFloors: '', numberOfUnits: '', numberOfParkingBays: '',
    plotNumber: '', titleDeedNumber: '', countyRegistered: 'Nairobi',
    buildingGrade: 'A', greenCertification: 'NONE', esgComplianceScore: '',
    lastValuationAmount: '', lastValuationDate: '', insuranceValue: '',
    propertyManagerName: '', facilitiesManagement: '',
    currency: 'KES', askingPrice: '', askingPriceUsd: '', askingPricePerSqm: '',
    openToUsdPricing: false, grossRentAnnual: '', netOperatingIncome: '',
    occupancyRate: '', waleYears: '', capRate: '', serviceChargeAnnual: '',
    serviceChargePerSqm: '', currentDebt: '', debtMaturityDate: '',
    debtLender: '', debtInterestRate: '', ltvRatio: '',
    divestmentReason: 'PORTFOLIO_REBALANCING', divestmentReasonOther: '', exclusivityPeriod: '60',
    anchorTenantName: '', anchorTenantSector: '', anchorTenantLeaseExpiry: '',
    anchorTenantSqm: '', otherTenants: '', totalLettableArea: '',
    vacantArea: '', vacancyRate: '', numberOfTenants: '',
    energyRating: '', waterRecycling: false, solarInstalled: false,
    backupGenerator: false, borehole: false, fiberConnectivity: false,
    cctvSecurity: false, accessControl: false, fireSuppression: false,
    confidentialityConfirmed: false, accuracyConfirmed: false,
    noExistingNdaViolation: false, authorizedToSubmit: false, marketingConsent: false,
  })

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const addFiles = useCallback((newFiles: FileUpload[]) => {
    setFiles(prev => [...prev, ...newFiles])
  }, [])

  const removeFile = useCallback((name: string) => {
    setFiles(prev => prev.filter(f => f.name !== name))
  }, [])

  useEffect(() => {
    const noi = parseFloat(form.netOperatingIncome)
    const price = parseFloat(form.askingPrice)
    const area = parseFloat(form.totalBuiltUpAreaSqm)

    if (noi && price && price > 0) {
      const calculatedCapRate = ((noi / price) * 100).toFixed(2)
      setForm(prev => ({ ...prev, capRate: calculatedCapRate }))
    }
    if (price && area && area > 0) {
      const ppsm = (price / area).toFixed(0)
      setForm(prev => ({ ...prev, askingPricePerSqm: ppsm }))
    }
  }, [form.netOperatingIncome, form.askingPrice, form.totalBuiltUpAreaSqm])

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('data', JSON.stringify(form))
      files.forEach(f => formData.append(`file_${f.category}`, f.file, f.name))

      await fetch('/api/divestment/submit', { method: 'POST', body: formData })
      setIsSubmitted(true)

    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }
  useEffect(() => {
    if (isSubmitted) {
        window.scrollTo(0, 0)
    }
  }, [isSubmitted])

  const canProceed = () => {
    if (step === 1) return true
    if (step === 2) {
      if (form.role === 'OWNER') return form.ownerFullName && form.ownerEmail && form.ownerPhone
      if (form.role === 'BROKER') return form.brokerFullName && form.brokerEmail && form.brokerPhone
      if (form.role === 'DEVELOPER') return form.developerCompanyName && form.developerEmail && form.developerPrincipalName
      if (form.role === 'REIT') return form.reitName && form.reitFundManager && form.reitComplianceEmail
      if (form.role === 'FAMILY_OFFICE') return form.foName && form.foDecisionMakerName && form.foEmail
      if (form.role === 'SOVEREIGN_FUND') return form.sovereignFundName && form.sovereignLocalRep && form.sovereignEmail
      return true
    }
    if (step === 3) return form.propertyName && form.lrNumber && form.locationCity
    if (step === 4) return form.askingPrice && parseFloat(form.askingPrice) >= 30000000
    if (step === 7) return form.confidentialityConfirmed && form.accuracyConfirmed && form.noExistingNdaViolation && form.authorizedToSubmit
    return true
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#F8F7F4] text-[#2C2C2C] min-h-screen flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl w-full text-center">
          <div className="w-16 h-16 border border-[#8B7355] flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-8 h-8 text-[#8B7355]" strokeWidth={1} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif leading-[1.1] mb-4">Submission Received</h2>
          <p className="text-[15px] text-[#5A5A5A] font-light leading-relaxed mb-10">
            Your divestment lead has been received by the Murivest institutional team and assigned reference <span className="text-[#8B7355] font-medium">MRV-2026-XXXXX</span>.
            You will receive a confirmation email within 24 hours. Our Capital Markets Advisory team will reach out within 48-72 hours.
          </p>
          <div className="border border-[#E5E2DC] bg-white p-8 text-left mb-10">
            <p className="text-[11px] text-[#5A5A5A] uppercase tracking-[0.3em] mb-6 font-medium">What Happens Next</p>
            {[
              { step: '1', label: 'Preliminary Review (24-48hrs)', desc: 'AI-powered deal scoring and internal qualification by our Capital Markets team.' },
              { step: '2', label: 'Qualification Call (48-72hrs)', desc: 'A Senior Investment Advisor will conduct a detailed discovery call.' },
              { step: '3', label: 'NDA & Advisory Engagement', desc: 'Mutual NDA and exclusive advisory mandate agreement execution.' },
              { step: '4', label: 'Underwriting & Marketing', desc: 'Full institutional underwriting, teaser/CIM production, and investor targeting.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4 mb-5 last:mb-0">
                <div className="w-7 h-7 border border-[#8B7355] flex items-center justify-center text-[#8B7355] text-[11px] font-medium flex-shrink-0 mt-0.5">{item.step}</div>
                <div>
                  <p className="text-[14px] font-medium text-[#2C2C2C]">{item.label}</p>
                  <p className="text-[12px] text-[#5A5A5A] font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#5A5A5A] font-light">
            Reference your submission via email. Questions? Contact <span className="text-[#8B7355]">capital@murivest.co.ke</span>
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-[#F8F7F4] text-[#2C2C2C] min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Institutional Grade &middot; Confidential</span>
            <div className="w-8 h-[1px] bg-[#8B7355]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-4">Asset Divestment</h1>
          <p className="text-[15px] text-[#5A5A5A] font-light">Institutional Capital Markets Advisory &middot; Murivest Realty</p>
          <div className="mt-8 h-px bg-[#E5E2DC] max-w-md mx-auto" />
        </div>

        {/* Main Card */}
        <div className="border border-[#E5E2DC] bg-white overflow-hidden">
          <div className="border-b border-[#E5E2DC] p-8 md:p-12 bg-[#F8F7F4]">
            <ProgressBar currentStep={step} totalSteps={STEPS.length} />
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">

              {/* ─── STEP 1: ROLE ─────────────────────────────────────────── */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <InfoBox>
                    Murivest exclusively works with verified parties. Your information is protected
                    under strict institutional confidentiality protocols and will not be shared
                    without a signed NDA. Minimum transaction size: KES 30M.
                  </InfoBox>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[1px] bg-[#8B7355]" />
                    <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">Select Your Role</p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif leading-[1.1] mb-2">How are you presenting this asset?</h2>
                  <p className="text-[14px] text-[#5A5A5A] font-light mb-8">Select your role to determine compliance requirements.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {ROLE_OPTIONS.map(opt => (
                      <button key={opt.value} type="button" onClick={() => setField('role', opt.value)}
                        className={`p-6 border-2 text-left transition-all duration-300 group
                          ${form.role === opt.value ? 'border-[#8B7355] bg-[#F8F7F4]' : 'border-[#E5E2DC] hover:border-[#8B7355]/50 bg-white'}`}>
                        <div className={`mb-3 transition-colors ${form.role === opt.value ? 'text-[#8B7355]' : 'text-[#B0ADA6] group-hover:text-[#8B7355]'}`}>{opt.icon}</div>
                        <h3 className="text-[15px] font-medium mb-1 text-[#2C2C2C]">{opt.label}</h3>
                        <p className="text-[12px] text-[#5A5A5A] font-light mb-3">{opt.desc}</p>
                        <ul className="space-y-1">
                          {opt.points.map((p, i) => (
                            <li key={i} className="flex items-center gap-2 text-[11px] text-[#5A5A5A] font-light"><div className="w-1 h-1 bg-[#8B7355] rounded-full" />{p}</li>
                          ))}
                        </ul>
                        {form.role === opt.value && <div className="mt-4 flex items-center gap-1.5 text-[#8B7355] text-[11px] font-medium"><CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />Selected</div>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ─── STEP 2: CONTACT DETAILS ────────────────────────────── */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">

                  {form.role === 'OWNER' && (
                    <>
                      <SectionHeader icon={<User className="w-4 h-4" strokeWidth={1} />} title="Owner / Vendor Details" subtitle="Registered proprietor information" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <InputField label="Full Legal Name" value={form.ownerFullName} onChange={v => setField('ownerFullName', v)} required placeholder="As per National ID / Passport" />
                        <InputField label="Company / Trust / Entity Name" value={form.ownerEntityName} onChange={v => setField('ownerEntityName', v)} placeholder="If applicable" hint="Leave blank if individual owner" />
                        <InputField label="Email Address" value={form.ownerEmail} onChange={v => setField('ownerEmail', v)} required type="email" placeholder="primary@example.com" />
                        <InputField label="Phone Number" value={form.ownerPhone} onChange={v => setField('ownerPhone', v)} required placeholder="+254 7XX XXX XXX" />
                        <InputField label="National ID / Passport No." value={form.ownerIdNumber} onChange={v => setField('ownerIdNumber', v)} required placeholder="e.g. 12345678" />
                        <InputField label="KRA PIN Number" value={form.ownerPinNumber} onChange={v => setField('ownerPinNumber', v)} required placeholder="A000000000A" hint="Kenya Revenue Authority PIN" />
                        <InputField label="Nationality" value={form.ownerNationality} onChange={v => setField('ownerNationality', v)} placeholder="e.g. Kenyan" />
                        <InputField label="Passport Number (if foreign)" value={form.ownerPassportNumber} onChange={v => setField('ownerPassportNumber', v)} placeholder="For non-Kenyan owners" />
                      </div>
                      <div className="space-y-4 pt-4 border-t border-[#E5E2DC]">
                        <CheckboxField label="This property is owned by a corporate entity / trust / SPV" checked={form.ownerIsCorporate} onChange={v => setField('ownerIsCorporate', v)} desc="A CR12, director's resolution, and company registration will be required" />
                        {form.ownerIsCorporate && <InputField label="Authorized Director / Signatory Name" value={form.ownerDirectorName} onChange={v => setField('ownerDirectorName', v)} placeholder="Full name of signing director" />}
                        <CheckboxField label="I confirm I am the registered proprietor and have the right to mandate the sale" checked={form.ownerSoleMandateConfirmation} onChange={v => setField('ownerSoleMandateConfirmation', v)} desc="I have not granted a conflicting exclusive mandate to another party" />
                        <CheckboxField label="I am an Ultra-High-Net-Worth Individual (UHNWI) / Family Office principal" checked={form.ownerUhwiStatus} onChange={v => setField('ownerUhwiStatus', v)} desc="Enables private placement protocol and enhanced confidentiality" />
                        {form.ownerUhwiStatus && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pl-6 border-l-2 border-[#8B7355]/30">
                            <InputField label="Source of Wealth" value={form.ownerSourceOfWealth} onChange={v => setField('ownerSourceOfWealth', v)} placeholder="e.g. Real Estate, Oil & Gas, Technology" />
                            <InputField label="Beneficial Ownership Declaration" value={form.ownerBeneficialOwnership} onChange={v => setField('ownerBeneficialOwnership', v)} placeholder="Names of ultimate beneficial owners" />
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {form.role === 'BROKER' && (
                    <>
                      <SectionHeader icon={<Briefcase className="w-4 h-4" strokeWidth={1} />} title="Broker / Agent Details" subtitle="Licensed intermediary information" />
                      <InfoBox>Kenyan law requires Estate Agents to be registered with the Estate Agents Registration Board (EARB). An Authority to Sell (ATS) signed by the registered owner is mandatory.</InfoBox>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <InputField label="Broker's Full Legal Name" value={form.brokerFullName} onChange={v => setField('brokerFullName', v)} required placeholder="As per ID / Passport" />
                        <InputField label="Agency / Firm Name" value={form.brokerEntityName} onChange={v => setField('brokerEntityName', v)} placeholder="e.g. XYZ Real Estate Ltd." />
                        <InputField label="Email Address" value={form.brokerEmail} onChange={v => setField('brokerEmail', v)} required type="email" placeholder="broker@firm.co.ke" />
                        <InputField label="Phone Number" value={form.brokerPhone} onChange={v => setField('brokerPhone', v)} required placeholder="+254 7XX XXX XXX" />
                        <InputField label="Years of Experience" value={form.brokerYearsExperience} onChange={v => setField('brokerYearsExperience', v)} placeholder="e.g. 10" type="number" />
                        <InputField label="Track Record Summary" value={form.brokerTrackRecord} onChange={v => setField('brokerTrackRecord', v)} placeholder="Total value of transactions closed" />
                      </div>
                      <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-4">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">EARB Compliance</p>
                        <CheckboxField label="I am registered with the Estate Agents Registration Board (EARB)" checked={form.brokerHasEarb} onChange={v => setField('brokerHasEarb', v)} />
                        {form.brokerHasEarb ? (
                          <InputField label="EARB Registration / License Number" value={form.brokerEarbNumber} onChange={v => setField('brokerEarbNumber', v)} required placeholder="e.g. EARB/2024/XXXX" />
                        ) : (
                          <InputField label="EARB Exemption Reason" value={form.brokerEarbExemptionReason} onChange={v => setField('brokerEarbExemptionReason', v)} required placeholder="e.g. Practicing Advocate / Owner's in-house rep" hint="Murivest reserves the right to request documentary proof" />
                        )}
                      </div>
                      <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-4">
                        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Mandate Chain Declaration</p>
                        <SelectField label="Your Relationship to the Owner" value={form.brokerMandateChain} onChange={v => setField('brokerMandateChain', v as MandateChain)}
                          options={[{ value: 'DIRECT', label: 'Direct to Owner (Sole / Exclusive Mandate)' }, { value: 'CO_BROKER', label: 'Joint / Co-Broker Mandate' }, { value: 'SUB_AGENT', label: 'Sub-Agent (Multiple Brokers)' }]} />
                        {form.brokerMandateChain === 'SUB_AGENT' && (
                          <InputField label="Describe the Full Intermediary Chain" value={form.brokerIntermediaryChainDesc} onChange={v => setField('brokerIntermediaryChainDesc', v)} placeholder='e.g. "Me (Sub-Agent) -> ABC Realty (Main Agent) -> Owner"' hint="Commission splits must be disclosed" />
                        )}
                      </div>
                    </>
                  )}

                  {form.role === 'DEVELOPER' && (
                    <>
                      <SectionHeader icon={<HardHat className="w-4 h-4" strokeWidth={1} />} title="Developer Information" subtitle="Property development company details" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <InputField label="Company Name" value={form.developerCompanyName} onChange={v => setField('developerCompanyName', v)} required placeholder="Registered company name" />
                        <InputField label="Company Registration Number" value={form.developerRegNumber} onChange={v => setField('developerRegNumber', v)} placeholder="e.g. CPR/2020/XXXXXX" />
                        <InputField label="Principal / Director Name" value={form.developerPrincipalName} onChange={v => setField('developerPrincipalName', v)} required placeholder="Decision maker's full name" />
                        <InputField label="Principal Title" value={form.developerPrincipalTitle} onChange={v => setField('developerPrincipalTitle', v)} placeholder="e.g. Managing Director" />
                        <InputField label="Email Address" value={form.developerEmail} onChange={v => setField('developerEmail', v)} required type="email" placeholder="corporate@developer.co.ke" />
                        <InputField label="Phone Number" value={form.developerPhone} onChange={v => setField('developerPhone', v)} required placeholder="+254 7XX XXX XXX" />
                        <InputField label="Projects Completed" value={form.developerProjectsCompleted} onChange={v => setField('developerProjectsCompleted', v)} placeholder="Number of completed projects" type="number" />
                        <InputField label="Current Pipeline Value (KES)" value={form.developerCurrentPipeline} onChange={v => setField('developerCurrentPipeline', v)} placeholder="0" type="number" />
                        <InputField label="Years Active in Market" value={form.developerYearsActive} onChange={v => setField('developerYearsActive', v)} placeholder="e.g. 15" type="number" />
                        <InputField label="Company Website" value={form.developerWebsite} onChange={v => setField('developerWebsite', v)} placeholder="https://www.company.co.ke" type="url" />
                      </div>
                    </>
                  )}

                  {form.role === 'REIT' && (
                    <>
                      <SectionHeader icon={<Landmark className="w-4 h-4" strokeWidth={1} />} title="REIT / Fund Information" subtitle="Real estate investment trust details" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <InputField label="REIT Name" value={form.reitName} onChange={v => setField('reitName', v)} required placeholder="Official fund name" />
                        <InputField label="Stock Exchange Listing" value={form.reitExchangeListing} onChange={v => setField('reitExchangeListing', v)} placeholder="e.g. NSE, LSE, JSE (or Unlisted)" />
                        <InputField label="Fund Manager" value={form.reitFundManager} onChange={v => setField('reitFundManager', v)} required placeholder="Fund management company" />
                        <InputField label="AUM (Assets Under Management)" value={form.reitAum} onChange={v => setField('reitAum', v)} placeholder="KES amount" type="number" />
                        <InputField label="Net Asset Value (NAV)" value={form.reitNav} onChange={v => setField('reitNav', v)} placeholder="KES amount" type="number" />
                        <InputField label="Distribution History" value={form.reitDistributionHistory} onChange={v => setField('reitDistributionHistory', v)} placeholder="e.g. 8% p.a. for 5 years" />
                        <InputField label="Regulator" value={form.reitRegulator} onChange={v => setField('reitRegulator', v)} placeholder="e.g. CMA Kenya, FSC Mauritius" />
                        <InputField label="Compliance Officer Name" value={form.reitComplianceOfficer} onChange={v => setField('reitComplianceOfficer', v)} placeholder="Full name" />
                        <InputField label="Compliance Officer Email" value={form.reitComplianceEmail} onChange={v => setField('reitComplianceEmail', v)} required type="email" placeholder="compliance@reit.co.ke" />
                      </div>
                    </>
                  )}

                  {form.role === 'FAMILY_OFFICE' && (
                    <>
                      <SectionHeader icon={<Crown className="w-4 h-4" strokeWidth={1} />} title="Family Office Information" subtitle="Private family investment details" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <InputField label="Family Office Name" value={form.foName} onChange={v => setField('foName', v)} required placeholder="Official name (or Confidential)" />
                        <InputField label="AUM Range" value={form.foAumRange} onChange={v => setField('foAumRange', v)} placeholder="e.g. $50M - $200M" />
                        <InputField label="Investment Horizon" value={form.foInvestmentHorizon} onChange={v => setField('foInvestmentHorizon', v)} placeholder="e.g. 5-10 years" />
                        <InputField label="Preferred Asset Classes" value={form.foPreferredClasses} onChange={v => setField('foPreferredClasses', v)} placeholder="e.g. Office, Hospitality" />
                        <InputField label="Decision Maker Name" value={form.foDecisionMakerName} onChange={v => setField('foDecisionMakerName', v)} required placeholder="Investment committee chair" />
                        <InputField label="Decision Maker Title" value={form.foDecisionMakerTitle} onChange={v => setField('foDecisionMakerTitle', v)} placeholder="e.g. CIO, Family Principal" />
                        <InputField label="Email Address" value={form.foEmail} onChange={v => setField('foEmail', v)} required type="email" placeholder="private@familyoffice.com" />
                        <InputField label="Phone Number" value={form.foPhone} onChange={v => setField('foPhone', v)} required placeholder="+254 7XX XXX XXX" />
                        <InputField label="Source of Wealth" value={form.foWealthSource} onChange={v => setField('foWealthSource', v)} placeholder="e.g. Manufacturing, Inherited" />
                        <InputField label="Generation" value={form.foGeneration} onChange={v => setField('foGeneration', v)} placeholder="e.g. 2nd Generation" />
                      </div>
                    </>
                  )}

                  {form.role === 'SOVEREIGN_FUND' && (
                    <>
                      <SectionHeader icon={<Globe className="w-4 h-4" strokeWidth={1} />} title="Sovereign Fund Information" subtitle="Government investment fund details" />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <InputField label="Fund Name" value={form.sovereignFundName} onChange={v => setField('sovereignFundName', v)} required placeholder="Official fund name" />
                        <InputField label="Country" value={form.sovereignCountry} onChange={v => setField('sovereignCountry', v)} required placeholder="e.g. UAE, Saudi Arabia, Qatar" />
                        <InputField label="AUM (USD)" value={form.sovereignAum} onChange={v => setField('sovereignAum', v)} placeholder="e.g. 500000000" type="number" />
                        <InputField label="Investment Mandate" value={form.sovereignMandate} onChange={v => setField('sovereignMandate', v)} placeholder="Description of investment mandate" />
                        <InputField label="Investment Committee Structure" value={form.sovereignIcStructure} onChange={v => setField('sovereignIcStructure', v)} placeholder="How investment decisions are made" />
                        <InputField label="Local Representative" value={form.sovereignLocalRep} onChange={v => setField('sovereignLocalRep', v)} required placeholder="Local contact person" />
                        <InputField label="Local Rep Title" value={form.sovereignLocalRepTitle} onChange={v => setField('sovereignLocalRepTitle', v)} placeholder="e.g. Regional Investment Director" />
                        <InputField label="Email Address" value={form.sovereignEmail} onChange={v => setField('sovereignEmail', v)} required type="email" placeholder="official@sovereignfund.gov" />
                        <InputField label="Phone Number" value={form.sovereignPhone} onChange={v => setField('sovereignPhone', v)} required placeholder="+XXX XXX XXX XXX" />
                        <InputField label="Diplomatic Protocol Requirements" value={form.sovereignProtocol} onChange={v => setField('sovereignProtocol', v)} placeholder="Any specific protocol requirements" />
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {/* ─── STEP 3: ASSET IDENTITY ──────────────────────────────── */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                  <SectionHeader icon={<Building2 className="w-4 h-4" strokeWidth={1} />} title="Asset Identification" subtitle="Complete property identification for institutional processing" />

                  <InfoBox>Submissions without a valid LR Number will be auto-discarded.</InfoBox>

                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-4">Asset Class <span className="text-[#8B7355]">*</span></p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {ASSET_CLASS_OPTIONS.map(ac => (
                        <button key={ac.value} type="button" onClick={() => setField('assetClass', ac.value)}
                          className={`p-4 border text-left transition-all duration-300
                            ${form.assetClass === ac.value ? 'border-[#8B7355] bg-[#F8F7F4] text-[#2C2C2C]' : 'border-[#E5E2DC] text-[#5A5A5A] hover:border-[#8B7355]/50 bg-white'}`}>
                          <div className={`mb-2 ${form.assetClass === ac.value ? 'text-[#8B7355]' : 'text-[#B0ADA6]'}`}>{ac.icon}</div>
                          <p className="text-[12px] font-medium">{ac.label}</p>
                          <p className="text-[10px] text-[#5A5A5A] mt-0.5 leading-tight font-light">{ac.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <InputField label="Property Name (required)" value={form.propertyName} onChange={v => setField('propertyName', v)} required placeholder="e.g. Westpark Towers, Absa Center" hint="Official or commonly known name" />
                    <InputField label="LR Number (optional)" value={form.lrNumber} onChange={v => setField('lrNumber', v)} placeholder="e.g. 209/10842/1" hint="As per Certificate of Title. Mandatory." />
                    <InputField label="Title Deed Number (optional)" value={form.titleDeedNumber} onChange={v => setField('titleDeedNumber', v)} placeholder="e.g. IR 45678" />
                    <InputField label="Plot Number (optional)" value={form.plotNumber} onChange={v => setField('plotNumber', v)} placeholder="e.g. L.R. No. 209/10842/1" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    <SelectField label="County Registered (required)" value={form.countyRegistered} onChange={v => setField('countyRegistered', v)} options={KENYAN_COUNTIES.map(c => ({ value: c, label: c }))} required />
                    <InputField label="City / Town (required)" value={form.locationCity} onChange={v => setField('locationCity', v)} required placeholder="e.g. Nairobi" />
                    <InputField label="Neighborhood / Estate (optional)" value={form.locationNeighborhood} onChange={v => setField('locationNeighborhood', v)} placeholder="e.g. Westlands, Upper Hill" />
                  </div>

                  <InputField label="Submarket (optional)" value={form.locationSubmarket} onChange={v => setField('locationSubmarket', v)} placeholder="e.g. Westlands CBD, Karen-Langata" hint="Specific submarket within the city" />
                  <InputField label="Full Street Address (required)" value={form.streetAddress} onChange={v => setField('streetAddress', v)} required placeholder="e.g. Waiyaki Way, off Muthangari Road" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <SelectField label="Title Type (required)" value={form.titleType} onChange={v => setField('titleType', v as TitleType)}
                      options={[{ value: 'FREEHOLD', label: 'Freehold (Absolute Title)' }, { value: 'LEASEHOLD', label: 'Leasehold (Fixed Term)' }, { value: 'SECTIONAL', label: 'Sectional Title (Strata)' }, { value: 'GOVERNMENT_LEASE', label: 'Government Lease' }]} required />
                    {form.titleType === 'LEASEHOLD' && <InputField label="Leasehold Years Remaining (required)" value={form.leaseholdYearsRemaining} onChange={v => setField('leaseholdYearsRemaining', v)} required placeholder="e.g. 85" suffix="yrs" type="number" />}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                    <InputField label="Year Built (optional)" value={form.yearBuilt} onChange={v => setField('yearBuilt', v)} placeholder="e.g. 2005" type="number" />
                    <InputField label="Last Refurb Year (optional)" value={form.yearRefurbished} onChange={v => setField('yearRefurbished', v)} placeholder="e.g. 2021" type="number" />
                    <InputField label="Total Built-Up Area (optional)" value={form.totalBuiltUpAreaSqm} onChange={v => setField('totalBuiltUpAreaSqm', v)} placeholder="GLA" suffix="SqM" type="number" />
                    <InputField label="Land Area (optional)" value={form.landAreaAcres} onChange={v => setField('landAreaAcres', v)} placeholder="0.00" suffix="Acres" type="number" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                    <InputField label="Net Lettable Area (optional)" value={form.totalLettableAreaSqm} onChange={v => setField('totalLettableAreaSqm', v)} placeholder="NLA" suffix="SqM" type="number" />
                    <InputField label="Number of Floors (optional)" value={form.numberOfFloors} onChange={v => setField('numberOfFloors', v)} placeholder="e.g. 12" type="number" />
                    <InputField label="Units / Suites (optional)" value={form.numberOfUnits} onChange={v => setField('numberOfUnits', v)} placeholder="e.g. 48" type="number" />
                    <InputField label="Parking Bays (optional)" value={form.numberOfParkingBays} onChange={v => setField('numberOfParkingBays', v)} placeholder="e.g. 200" type="number" />
                  </div>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Property Quality &amp; Certification</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                      <SelectField label="Building Grade (required)" value={form.buildingGrade} onChange={v => setField('buildingGrade', v as BuildingGrade)}
                        options={[{ value: 'A', label: 'Grade A (Premium)' }, { value: 'B', label: 'Grade B (Good)' }, { value: 'C', label: 'Grade C (Average)' }, { value: 'D', label: 'Grade D (Below Average)' }]} />
                      <SelectField label="Green Certification (optional)" value={form.greenCertification} onChange={v => setField('greenCertification', v as GreenCert)}
                        options={[{ value: 'NONE', label: 'None' }, { value: 'LEED_PLATINUM', label: 'LEED Platinum' }, { value: 'LEED_GOLD', label: 'LEED Gold' }, { value: 'LEED_SILVER', label: 'LEED Silver' }, { value: 'EDGE_ADVANCED', label: 'EDGE Advanced' }, { value: 'EDGE_CERTIFIED', label: 'EDGE Certified' }, { value: 'GREEN_STAR', label: 'Green Star' }, { value: 'BREEAM', label: 'BREEAM' }]} />
                      <InputField label="ESG Compliance Score (optional)" value={form.esgComplianceScore} onChange={v => setField('esgComplianceScore', v)} placeholder="0-100" type="number" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <InputField label="Last Independent Valuation (optional)" value={form.lastValuationAmount} onChange={v => setField('lastValuationAmount', v)} prefix="KES" placeholder="0" type="number" />
                      <InputField label="Valuation Date (optional)" value={form.lastValuationDate} onChange={v => setField('lastValuationDate', v)} type="date" />
                      <InputField label="Insurance Value (optional)" value={form.insuranceValue} onChange={v => setField('insuranceValue', v)} prefix="KES" placeholder="0" type="number" />
                      <InputField label="Property Manager (optional)" value={form.propertyManagerName} onChange={v => setField('propertyManagerName', v)} placeholder="e.g. Knight Frank Kenya" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ─── STEP 4: FINANCIAL PROFILE ───────────────────────────── */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                  <SectionHeader icon={<DollarSign className="w-4 h-4" strokeWidth={1} />} title="Financial &amp; Yield Profile" subtitle="Institutional investment metrics - primary qualification filter" />
                  <InfoBox>This section is the primary institutional filter. Incomplete financial data significantly reduces engagement probability. Provide best estimates if exact figures are unavailable. Minimum: KES 30M.</InfoBox>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Pricing</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <SelectField label="Primary Currency (required)" value={form.currency} onChange={v => setField('currency', v as Currency)} options={[{ value: 'KES', label: 'KES - Kenyan Shilling' }, { value: 'USD', label: 'USD - US Dollar' }, { value: 'EUR', label: 'EUR - Euro' }, { value: 'GBP', label: 'GBP - British Pound' }]} />
                      <InputField label="Asking Price (required)" value={form.askingPrice} onChange={v => setField('askingPrice', v)} required prefix={form.currency} placeholder="0" type="number" hint="Minimum KES 30M for land / KES 50M for income-generating" />
                      <CheckboxField label="Also open to USD pricing / USD-denominated buyers" checked={form.openToUsdPricing} onChange={v => setField('openToUsdPricing', v)} />
                      {form.openToUsdPricing && <InputField label="USD Equivalent Asking Price (optional)" value={form.askingPriceUsd} onChange={v => setField('askingPriceUsd', v)} prefix="USD" placeholder="0" type="number" />}
                      <InputField label="Price per SqM (optional)" value={form.askingPricePerSqm} onChange={v => setField('askingPricePerSqm', v)} prefix="KES" placeholder="Auto" type="number" hint="Based on asking price and built-up area" />
                    </div>
                  </div>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Income &amp; Yield Metrics</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <InputField label="Gross Rental Income (Annual) (optional)" value={form.grossRentAnnual} onChange={v => setField('grossRentAnnual', v)} prefix="KES" placeholder="0" type="number" hint="Total contracted gross rent per annum" />
                      <InputField label="Net Operating Income (NOI) (optional)" value={form.netOperatingIncome} onChange={v => setField('netOperatingIncome', v)} prefix="KES" placeholder="0" type="number" hint="Gross rent minus operating expenses and vacancy" />
                      <InputField label="Occupancy Rate (optional)" value={form.occupancyRate} onChange={v => setField('occupancyRate', v)} suffix="%" placeholder="e.g. 85" type="number" hint="Current percentage of space leased" />
                      <InputField label="WALE - Weighted Average Lease Expiry (optional)" value={form.waleYears} onChange={v => setField('waleYears', v)} suffix="Years" placeholder="e.g. 4.5" type="number" hint="Income-weighted average lease term remaining" />
                      <InputField label="Stabilised Cap Rate (Auto-calc) (optional)" value={form.capRate} onChange={v => setField('capRate', v)} suffix="%" placeholder="NOI / Price" type="number" hint="Auto-calculated. Override if needed." />
                      <InputField label="Annual Service Charge (optional)" value={form.serviceChargeAnnual} onChange={v => setField('serviceChargeAnnual', v)} prefix="KES" placeholder="0" type="number" hint="Total annual service charge" />
                      <InputField label="Service Charge per SqM (optional)" value={form.serviceChargePerSqm} onChange={v => setField('serviceChargePerSqm', v)} prefix="KES" placeholder="0" type="number" hint="Per square meter rate" />
                    </div>
                  </div>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Debt &amp; Capital Structure</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <InputField label="Existing Debt / Mortgage Balance (optional)" value={form.currentDebt} onChange={v => setField('currentDebt', v)} prefix="KES" placeholder="0 (if unencumbered)" type="number" hint="Outstanding loan balance" />
                      <InputField label="Debt Maturity / Facility Expiry (optional)" value={form.debtMaturityDate} onChange={v => setField('debtMaturityDate', v)} type="date" />
                      <InputField label="Debt Lender (optional)" value={form.debtLender} onChange={v => setField('debtLender', v)} placeholder="e.g. KCB, Stanbic, NCBA" />
                      <InputField label="Debt Interest Rate (optional)" value={form.debtInterestRate} onChange={v => setField('debtInterestRate', v)} placeholder="e.g. 13.5" suffix="%" type="number" />
                      <InputField label="LTV Ratio (optional)" value={form.ltvRatio} onChange={v => setField('ltvRatio', v)} placeholder="e.g. 45" suffix="%" type="number" hint="Loan-to-value ratio" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <SelectField label="Primary Reason for Divestment (optional)" value={form.divestmentReason} onChange={v => setField('divestmentReason', v as DivestmentReason)} options={DIVESTMENT_REASONS} required />
                    <SelectField label="Exclusivity Period Requested (optional)" value={form.exclusivityPeriod} onChange={v => setField('exclusivityPeriod', v as '30' | '60' | '90')}
                      options={[{ value: '30', label: '30 Days (Express)' }, { value: '60', label: '60 Days (Standard)' }, { value: '90', label: '90 Days (Full Campaign)' }]} hint="Duration of exclusive marketing rights" />
                  </div>
                  {form.divestmentReason === 'OTHER' && <InputField label="Describe Reason for Divestment (optional)" value={form.divestmentReasonOther} onChange={v => setField('divestmentReasonOther', v)} placeholder="Please provide details..." />}
                </motion.div>
              )}

              {/* ─── STEP 5: TENANCY & ESG ───────────────────────────────── */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                  <SectionHeader icon={<Users className="w-4 h-4" strokeWidth={1} />} title="Tenancy, Operations &amp; Sustainability" subtitle="Tenant quality drives institutional valuation" />
                  <InfoBox>Tenant covenant strength and WALE are primary valuation drivers. Anchor tenant quality directly impacts cap rate and buyer appetite.</InfoBox>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Anchor / Primary Tenant</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                      <InputField label="Anchor Tenant Name (optional)" value={form.anchorTenantName} onChange={v => setField('anchorTenantName', v)} placeholder="e.g. Safaricom, Standard Chartered" />
                      <InputField label="Anchor Tenant Sector (optional)" value={form.anchorTenantSector} onChange={v => setField('anchorTenantSector', v)} placeholder="e.g. Banking, Telecom, Retail" />
                      <InputField label="Anchor Lease Expiry (optional)" value={form.anchorTenantLeaseExpiry} onChange={v => setField('anchorTenantLeaseExpiry', v)} type="date" />
                      <InputField label="Anchor Tenant Area (optional)" value={form.anchorTenantSqm} onChange={v => setField('anchorTenantSqm', v)} placeholder="0" suffix="SqM" type="number" />
                      <InputField label="Number of Tenants (optional)" value={form.numberOfTenants} onChange={v => setField('numberOfTenants', v)} placeholder="e.g. 8" type="number" />
                      <InputField label="Vacant Area (optional)" value={form.vacantArea} onChange={v => setField('vacantArea', v)} placeholder="0" suffix="SqM" type="number" />
                    </div>
                  </div>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Additional Tenant Information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <InputField label="Total Lettable Area (NLA) (optional)" value={form.totalLettableArea} onChange={v => setField('totalLettableArea', v)} placeholder="0" suffix="SqM" type="number" hint="Net Lettable Area across all floors" />
                      <InputField label="Vacancy Rate (optional)" value={form.vacancyRate} onChange={v => setField('vacancyRate', v)} placeholder="0" suffix="%" type="number" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A]">Other Tenants / Tenant Mix</label>
                      <textarea value={form.otherTenants} onChange={(e) => setField('otherTenants', e.target.value)} rows={5}
                        placeholder={`List other tenants, areas, lease expiry dates.\nExample:\n- ABC Bank - 450 SqM - Expires Dec 2027\n- XYZ Pharmacy - 120 SqM - Expires Jun 2026`}
                        className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] font-light py-3 outline-none focus:border-[#8B7355] transition-colors duration-300 resize-none placeholder:text-[#B0ADA6] leading-relaxed" />
                      <p className="text-[11px] text-[#5A5A5A] italic">A full Rent Roll upload in Step 6 is preferred</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-6">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">ESG &amp; Sustainability Features</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <CheckboxField label="Water Recycling System (optional)" checked={form.waterRecycling} onChange={v => setField('waterRecycling', v)} />
                      <CheckboxField label="Solar Power Installation (optional)" checked={form.solarInstalled} onChange={v => setField('solarInstalled', v)} />
                      <CheckboxField label="Backup Generator (optional)" checked={form.backupGenerator} onChange={v => setField('backupGenerator', v)} />
                      <CheckboxField label="Borehole Water (optional)" checked={form.borehole} onChange={v => setField('borehole', v)} />
                      <CheckboxField label="Fiber Internet Connectivity (optional)" checked={form.fiberConnectivity} onChange={v => setField('fiberConnectivity', v)} />
                      <CheckboxField label="CCTV Security System (optional)" checked={form.cctvSecurity} onChange={v => setField('cctvSecurity', v)} />
                      <CheckboxField label="Access Control System (optional)" checked={form.accessControl} onChange={v => setField('accessControl', v)} />
                      <CheckboxField label="Fire Suppression System (optional)" checked={form.fireSuppression} onChange={v => setField('fireSuppression', v)} />
                    </div>
                    <InputField label="Energy Performance Rating (optional)" value={form.energyRating} onChange={v => setField('energyRating', v)} placeholder="e.g. A+, B, C" hint="If available from energy audit" />
                  </div>
                </motion.div>
              )}

              {/* ─── STEP 6: DOCUMENT UPLOADS ─────────────────────────────── */}
              {step === 6 && (
                <motion.div key="step6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-12">
                  <SectionHeader icon={<Upload className="w-4 h-4" strokeWidth={1} />} title="Documents &amp; Media" subtitle="Upload all required institutional documents" />
                  <InfoBox>All uploads are encrypted and stored in the secure Murivest institutional data environment. Files are only accessible to the Capital Markets Advisory team under strict data governance protocols.</InfoBox>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E2DC]">
                      <Image className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">Property Photography</p>
                      <span className="text-[10px] text-[#8B7355] ml-auto">Min. 5 exterior photos required</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <PhotoUploadZone category="PHOTO_EXTERIOR" label="Exterior" files={files} onAdd={addFiles} onRemove={removeFile} minCount={5} />
                      <PhotoUploadZone category="PHOTO_INTERIOR" label="Interior / Lobby" files={files} onAdd={addFiles} onRemove={removeFile} minCount={3} />
                      <PhotoUploadZone category="PHOTO_AERIAL" label="Aerial / Drone" files={files} onAdd={addFiles} onRemove={removeFile} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E2DC]">
                      <Shield className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">Mandate &amp; Authority Documents</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {DOCUMENT_CATEGORIES.MANDATE.map(doc => <FileUploadZone key={doc.key} category={doc.key} label={doc.label} required={doc.required} accept={doc.accept} desc={doc.desc} files={files} onAdd={addFiles} onRemove={removeFile} />)}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E2DC]">
                      <User className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">
                        {form.role === 'OWNER' ? 'Owner Identity Documents' : form.role === 'BROKER' ? 'Broker Identity Documents' : 'Entity Registration Documents'}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {form.role === 'OWNER' && DOCUMENT_CATEGORIES.OWNER.map(doc => <FileUploadZone key={doc.key} category={doc.key} label={doc.label} required={doc.required} accept={doc.accept} desc={doc.desc} files={files} onAdd={addFiles} onRemove={removeFile} />)}
                      {form.role === 'BROKER' && DOCUMENT_CATEGORIES.BROKER.map(doc => <FileUploadZone key={doc.key} category={doc.key} label={doc.label} required={doc.required} accept={doc.accept} desc={doc.desc} files={files} onAdd={addFiles} onRemove={removeFile} />)}
                      {(form.role === 'DEVELOPER' || form.role === 'REIT' || form.role === 'FAMILY_OFFICE' || form.role === 'SOVEREIGN_FUND') && (
                        <>
                          <FileUploadZone category="ENTITY_REG" label="Certificate of Incorporation / Registration (optional)" required={false} accept=".pdf" desc="Company registration certificate" files={files} onAdd={addFiles} onRemove={removeFile} />
                          <FileUploadZone category="BOARD_RESOLUTION" label="Board Resolution to Sell / Divest (optional)" required={false} accept=".pdf" desc="Authorized by board of directors" files={files} onAdd={addFiles} onRemove={removeFile} />
                          <FileUploadZone category="AUDITED_ACCOUNTS" label="Audited Financial Statements (3 Years) (optional)" required={false} accept=".pdf,.xlsx" desc="Where applicable to the entity" files={files} onAdd={addFiles} onRemove={removeFile} />
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E2DC]">
                      <DollarSign className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">Financial Package</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {DOCUMENT_CATEGORIES.FINANCIALS.map(doc => <FileUploadZone key={doc.key} category={doc.key} label={doc.label} required={doc.required} accept={doc.accept} desc={doc.desc} files={files} onAdd={addFiles} onRemove={removeFile} />)}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E2DC]">
                      <FileText className="w-4 h-4 text-[#8B7355]" strokeWidth={1} />
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]">Property Information Documents</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {DOCUMENT_CATEGORIES.PROPERTY.map(doc => <FileUploadZone key={doc.key} category={doc.key} label={doc.label} required={doc.required} accept={doc.accept} desc={doc.desc} files={files} onAdd={addFiles} onRemove={removeFile} />)}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ─── STEP 7: REPRESENTATIONS ─────────────────────────────── */}
              {step === 7 && (
                <motion.div key="step7" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-10">
                  <SectionHeader icon={<Shield className="w-4 h-4" strokeWidth={1} />} title="Representations &amp; Submission" subtitle="Confirmation of accuracy, authority, and confidentiality" />

                  <div className="bg-[#F8F7F4] border border-[#E5E2DC] p-6 space-y-4">
                    <p className="text-[11px] text-[#5A5A5A] uppercase tracking-[0.3em] mb-4 font-medium">Submission Summary</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Role (optional)', value: ROLE_OPTIONS.find(r => r.value === form.role)?.label || form.role },
                        { label: 'Property (optional)', value: form.propertyName || 'Not specified' },
                        { label: 'LR Number (optional)', value: form.lrNumber || 'Not specified' },
                        { label: 'Asset Class (optional)', value: ASSET_CLASS_OPTIONS.find(a => a.value === form.assetClass)?.label || '' },
                        { label: 'Location (optional)', value: `${form.locationCity}${form.locationNeighborhood ? ', ' + form.locationNeighborhood : ''}` },
                        { label: 'Asking Price (optional)', value: form.askingPrice ? `${form.currency} ${Number(form.askingPrice).toLocaleString()}` : 'N/A' },
                        { label: 'Cap Rate (optional)', value: form.capRate ? `${form.capRate}%` : 'N/A' },
                        { label: 'Documents (optional)', value: `${files.length} file(s)` },
                        { label: 'Exclusivity (optional)', value: `${form.exclusivityPeriod} Days` },
                        { label: 'WALE (optional)', value: form.waleYears ? `${form.waleYears} yrs` : 'N/A' },
                      ].map(item => (
                        <div key={item.label} className="bg-white border border-[#E5E2DC] p-3">
                          <p className="text-[10px] text-[#5A5A5A] uppercase tracking-wide">{item.label}</p>
                          <p className="text-[13px] text-[#2C2C2C] mt-0.5 font-medium">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-[#F8F7F4] border border-[#E5E2DC] space-y-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8B7355]">Required Declarations</p>
                    <div className="space-y-4">
                      <CheckboxField label="I confirm that all information provided is true, accurate and complete to the best of my knowledge." checked={form.accuracyConfirmed} onChange={v => setField('accuracyConfirmed', v)} desc="Murivest reserves the right to withdraw engagement if material inaccuracies are discovered." />
                      <CheckboxField label="I confirm that submitting this information does not violate any existing NDA, exclusivity agreement, or confidentiality undertaking." checked={form.noExistingNdaViolation} onChange={v => setField('noExistingNdaViolation', v)} desc="Including any existing listing agreements with other agents or advisory firms." />
                      <CheckboxField label="I acknowledge that Murivest is authorized to present this opportunity on a confidential, no-name basis to its registered institutional buyer network." checked={form.confidentialityConfirmed} onChange={v => setField('confidentialityConfirmed', v)} desc="A formal NDA will be signed with any buyer prior to full disclosure of property identity." />
                      <CheckboxField label="I confirm I am duly authorized to make this submission on behalf of the owner/entity and to grant Murivest the rights described herein." checked={form.authorizedToSubmit} onChange={v => setField('authorizedToSubmit', v)} desc="Including authorization from all relevant shareholders, directors, or beneficiaries." />
                      <CheckboxField label="I consent to Murivest using this information for marketing and investor matching purposes in accordance with their privacy policy." checked={form.marketingConsent} onChange={v => setField('marketingConsent', v)} desc="Your data will be handled in accordance with the Data Protection Act, 2019." />
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E5E2DC]">
                    <p className="text-[12px] text-[#5A5A5A] font-light leading-relaxed">
                      <span className="font-medium text-[#2C2C2C]">Disclaimer:</span> This submission does not constitute a formal listing agreement or advisory engagement. Murivest Realty's engagement is subject to internal qualification, execution of a formal Mandate Agreement, and mutual NDA. By submitting, you agree to Murivest's data handling and confidentiality policy. Contact:{' '}
                      <a href="mailto:capital@murivest.co.ke" className="text-[#8B7355] hover:underline">capital@murivest.co.ke</a>
                    </p>
                  </div>

                  <button type="button" onClick={handleSubmit} disabled={!canProceed() || isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-40 disabled:cursor-not-allowed">
                    {isSubmitting ? <><div className="w-4 h-4 border-2 border-[#F8F7F4]/30 border-t-[#F8F7F4] rounded-full animate-spin" />Submitting Securely...</> : <><Shield className="w-4 h-4" strokeWidth={1} />Submit Institutional Divestment Lead<ChevronRight className="w-4 h-4" strokeWidth={1} /></>}
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Navigation Footer */}
          {step < 7 && (
            <div className="border-t border-[#E5E2DC] px-8 md:px-12 py-6 flex items-center justify-between bg-[#F8F7F4]">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 text-[13px] text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors font-light">
                  <ChevronLeft className="w-4 h-4" strokeWidth={1} />Back
                </button>
              ) : <div />}
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-[#5A5A5A] tracking-wide">Step {step} of {STEPS.length}</span>
                <button type="button" onClick={() => setStep(s => s + 1)} disabled={!canProceed()}
                  className="flex items-center gap-2 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.15em] uppercase font-medium px-8 py-3 hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-40 disabled:cursor-not-allowed">
                  Continue<ChevronRight className="w-4 h-4" strokeWidth={1} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <div className="h-px bg-[#E5E2DC] max-w-xs mx-auto mb-6" />
          <p className="text-[11px] text-[#5A5A5A] font-light tracking-wide">
            &copy; 2026 Murivest Realty &middot; <a href="https://murivest.com" className="hover:text-[#8B7355] transition-colors">murivest.com</a>
            {' &middot; '}<span className="text-[#8B7355]">Institutional Grade &middot; Confidential</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SellProperty
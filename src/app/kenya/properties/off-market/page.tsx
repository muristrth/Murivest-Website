"use client";

// app/ke-properties/off-market/page.tsx
// Off-Market portfolio listing page — old money aesthetic matching Properties.tsx

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sanityClient } from "@/lib/sanity/sanity-client";
import {
  Search,
  X,
  SlidersHorizontal,
  ChevronDown,
  Building2,
  MapPin,
  Shield,
  ArrowUpRight,
  Lock,
  Eye,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────

interface OffMarketProperty {
  _id: string;
  title: string;
  slug: string;
  propertyType: string;
  category: string;
  country: string;
  city: string;
  neighborhood: string;
  price: { displayPrice: string; kes?: string; usd?: string };
  sizeRange: { min: number; max: number; unit: string };
  grade: string;
  images: string[];
  availabilityStatus: string;
  featured: boolean;
  listingDate: string;
  investmentAngle?: string;
}

// ─── Property Card ──────────────────────────────────────────────────────────

const PropertyCard: React.FC<{
  property: OffMarketProperty;
  index: number;
}> = ({ property, index }) => {
  const sizeLabel =
    property.sizeRange?.min && property.sizeRange?.max
      ? `${property.sizeRange.min.toLocaleString()} – ${property.sizeRange.max.toLocaleString()} ${property.sizeRange.unit}`
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        href={`/ke-properties/off-market/${property.slug}`}
        className="group block bg-white border border-[#E8E6E1] hover:border-[#B8956B] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-[260px] overflow-hidden bg-[#F5F4F0]">
          {property.images?.[0] ? (
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Building2 className="w-12 h-12 text-[#D0CCC4]" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Off-Market frosted overlay hint */}
          <div className="absolute inset-0 bg-[#1B4332]/10 group-hover:bg-transparent transition-colors duration-500" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium flex items-center gap-1.5">
              <Lock className="w-2.5 h-2.5" strokeWidth={2} />
              Off-Market
            </span>
            {property.featured && (
              <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Priority
              </span>
            )}
          </div>

          {property.propertyType && (
            <div className="absolute top-4 right-4">
              <span className="bg-white/95 backdrop-blur-sm text-[#2C2C2C] text-[9px] tracking-[0.15em] uppercase px-2.5 py-1.5 font-medium">
                {property.propertyType}
              </span>
            </div>
          )}

          {/* Quick-view hint */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-9 h-9 bg-white/90 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-[#1B4332]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3
              className="text-base text-[#2C2C2C] leading-snug mb-1 group-hover:text-[#1B4332] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[#8B8680]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[12px] tracking-wide">
                {property.neighborhood}, {property.city}
              </span>
            </div>
          </div>

          {property.investmentAngle && (
            <p className="text-[12px] text-[#8B8680] leading-relaxed font-light line-clamp-2">
              {property.investmentAngle}
            </p>
          )}

          <div className="h-px bg-[#E8E6E1]" />

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-1">
                Indicative Value
              </p>
              <p
                className="text-lg text-[#2C2C2C]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {property.price?.displayPrice || "By Introduction"}
              </p>
            </div>
            {property.grade && (
              <div className="text-right">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium mb-1">
                  Grade
                </p>
                <p className="text-[12px] text-[#2C2C2C]">{property.grade}</p>
              </div>
            )}
          </div>

          {sizeLabel && (
            <p className="text-[11px] text-[#8B8680] tracking-wide">{sizeLabel}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function OffMarketPage() {
  const [properties, setProperties] = useState<OffMarketProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isGradeOpen, setIsGradeOpen] = useState(false);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const query = `*[_type == "property" && transactionType == "Off Market" && !(_id in path("drafts.**"))] | order(featured desc, listingDate desc) {
          _id, title, "slug": slug.current, propertyType, category,
          country, city, neighborhood,
          price { displayPrice, kes, usd },
          sizeRange { min, max, unit },
          grade,
          "images": images[].asset->url,
          availabilityStatus, featured, listingDate,
          investmentAngle
        }`;
        const data = await sanityClient.fetch(query);
        setProperties(data);
      } catch (error) {
        console.error("Error fetching off-market properties:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  const propertyTypes = useMemo(
    () => ["All", ...Array.from(new Set(properties.map((p) => p.propertyType).filter(Boolean)))],
    [properties]
  );
  const cities = useMemo(
    () => ["All", ...Array.from(new Set(properties.map((p) => p.city).filter(Boolean)))],
    [properties]
  );
  const grades = useMemo(
    () => ["All", ...Array.from(new Set(properties.map((p) => p.grade).filter(Boolean)))],
    [properties]
  );

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesType = selectedType === "All" || p.propertyType === selectedType;
      const matchesCity = selectedCity === "All" || p.city === selectedCity;
      const matchesGrade = selectedGrade === "All" || p.grade === selectedGrade;
      const matchesSearch =
        !searchTerm ||
        p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.neighborhood?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.city?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesCity && matchesGrade && matchesSearch;
    });
  }, [properties, selectedType, selectedCity, selectedGrade, searchTerm]);

  const clearFilters = () => {
    setSelectedType("All");
    setSelectedCity("All");
    setSelectedGrade("All");
    setSearchTerm("");
  };

  const hasActiveFilters =
    selectedType !== "All" || selectedCity !== "All" || selectedGrade !== "All" || searchTerm;

  return (
    <div className="min-h-screen bg-[#FAF9F6]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1B4332] pt-20 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-px h-4 bg-[#B8956B]" />
                <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8956B] font-medium">
                  Private Portfolio · Kenya
                </p>
              </div>
              <h1
                className="text-4xl md:text-5xl text-white leading-[1.1] max-w-3xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                Off-Market Opportunities
              </h1>
              <p className="mt-4 text-[14px] text-white/60 max-w-2xl leading-relaxed font-light tracking-wide">
                Exclusive commercial assets not publicly listed. Access is by introduction and subject
                to qualification. Institutional-grade opportunities across Kenya's prime corridors.
              </p>
            </div>

            {/* NDA notice */}
            <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-5 max-w-xs">
              <Lock className="w-4 h-4 text-[#B8956B] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-1">
                  Confidential Access
                </p>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  Full materials released under NDA to qualified investors only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#E8E6E1] py-5 px-6 lg:px-12 sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center gap-3 lg:gap-6">

          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680]"
              strokeWidth={1.5}
            />
            <input
              type="text"
              placeholder="Search assets by location or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b border-[#E8E6E1] focus:border-[#1B4332] pl-7 pr-7 py-2.5 text-[13px] text-[#2C2C2C] placeholder:text-[#8B8680]/60 outline-none transition-colors font-light tracking-wide"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")}>
                <X className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680] hover:text-[#1B4332] transition-colors" />
              </button>
            )}
          </div>

          <div className="w-px h-6 bg-[#E8E6E1] hidden lg:block" />

          {/* Property Type */}
          <FilterDropdown
            label="Asset Type"
            value={selectedType}
            options={propertyTypes}
            isOpen={isTypeOpen}
            onToggle={() => { setIsTypeOpen(!isTypeOpen); setIsCityOpen(false); setIsGradeOpen(false); }}
            onSelect={(v) => { setSelectedType(v); setIsTypeOpen(false); }}
          />

          {/* City */}
          <FilterDropdown
            label="City"
            value={selectedCity}
            options={cities}
            isOpen={isCityOpen}
            onToggle={() => { setIsCityOpen(!isCityOpen); setIsTypeOpen(false); setIsGradeOpen(false); }}
            onSelect={(v) => { setSelectedCity(v); setIsCityOpen(false); }}
          />

          {/* Grade */}
          <FilterDropdown
            label="Grade"
            value={selectedGrade}
            options={grades}
            isOpen={isGradeOpen}
            onToggle={() => { setIsGradeOpen(!isGradeOpen); setIsTypeOpen(false); setIsCityOpen(false); }}
            onSelect={(v) => { setSelectedGrade(v); setIsGradeOpen(false); }}
          />

          <div className="w-px h-6 bg-[#E8E6E1] hidden lg:block" />

          {/* Count */}
          <span className="text-[11px] text-[#8B8680] tracking-wide hidden md:block">
            {loading ? "—" : `${filteredProperties.length} ${filteredProperties.length === 1 ? "Asset" : "Assets"}`}
          </span>

          {/* Clear */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors"
            >
              <X className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        {loading ? (
          <div className="text-center py-32">
            <div className="w-8 h-8 border border-[#1B4332] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B8680]">
              Retrieving portfolio…
            </p>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-32">
            <p
              className="text-xl text-[#8B8680] italic mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              No assets match your current criteria.
            </p>
            <button
              onClick={clearFilters}
              className="text-[11px] tracking-[0.2em] uppercase text-[#1B4332] border border-[#1B4332] px-6 py-3 hover:bg-[#1B4332] hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property._id} property={property} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* ── Editorial / SEO Section ──────────────────────────────────── */}
      <section className="bg-white border-t border-[#E8E6E1] py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Main copy */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-4">
                  Market Intelligence · 2026
                </p>
                <h2
                  className="text-3xl text-[#2C2C2C] mb-6 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  Commercial Property for Sale in Kenya
                </h2>
                <p className="text-[14px] text-[#5A5A5A] leading-[1.9] font-light mb-4">
                  Kenya's commercial real estate market continues to attract institutional and private
                  investors seeking high-yield assets in East Africa's economic hub. Prime office yields
                  in Nairobi remain attractive at 8–9% for Grade A developments, with occupancy rates
                  climbing to 81.58% by December 2025.
                </p>
                <p className="text-[14px] text-[#5A5A5A] leading-[1.9] font-light">
                  Key investment corridors include Westlands, Upper Hill, Kilimani, and the emerging
                  Tatu City Special Economic Zone. Government infrastructure investments — including
                  the Nairobi Expressway and the upcoming National Infrastructure Fund — continue to
                  enhance property values across the capital.
                </p>
              </div>

              {/* Why invest */}
              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F5F4F0] flex items-center justify-center">
                    <Eye className="w-3.5 h-3.5 text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Why Invest in Kenyan Commercial Real Estate
                </h3>
                <div className="bg-white border border-[#E8E6E1]">
                  {[
                    "Stable GDP growth and macroeconomic stabilisation",
                    "Regional hub for multinational corporations and diplomatic missions",
                    "Growing middle class driving retail and office demand",
                    "Special Economic Zone incentives at Tatu City",
                    "Infrastructure improvements including Expressway and rail networks",
                    "UN headquarters expansion increasing expatriate and NGO demand",
                  ].map((point, i, arr) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 p-5 ${i !== arr.length - 1 ? "border-b border-[#E8E6E1]" : ""}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B8956B] mt-2 flex-shrink-0" />
                      <span className="text-[13px] text-[#5A5A5A] leading-relaxed font-light">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Access panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* NDA / Access card */}
              <div className="bg-[#1B4332] text-white p-8">
                <Lock className="w-6 h-6 text-[#B8956B] mb-4" strokeWidth={1.5} />
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium mb-3">
                  Qualified Access Only
                </p>
                <p
                  className="text-2xl text-white mb-4 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  Access the full private portfolio
                </p>
                <p className="text-[13px] text-white/60 leading-relaxed font-light mb-6">
                  Full investment memoranda, financial models, and site documentation are released
                  exclusively to mandated partners and qualified institutional investors under NDA.
                </p>
                <a
                  href="mailto:capital@murivest.co.ke?subject=Off-Market Portfolio Access Request"
                  className="flex items-center justify-between w-full py-4 px-5 border border-white/20 hover:border-[#B8956B] text-[10px] tracking-[0.25em] uppercase text-white/80 hover:text-white transition-all group"
                >
                  <span>Request Portfolio Access</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:text-[#B8956B] transition-colors" strokeWidth={1.5} />
                </a>
              </div>

              {/* Keyword tags */}
              <div className="bg-[#F5F4F0] border border-[#E8E6E1] p-7">
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B8680] font-medium mb-5">
                  Most Searched
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "off-market property Kenya",
                    "commercial property for sale Nairobi",
                    "Grade A office for sale",
                    "institutional property advisory",
                    "property investment Africa",
                    "commercial real estate Kenya 2026",
                    "Westlands office for sale",
                    "Upper Hill property investment",
                    "Tatu City commercial property",
                    "off-market real estate Nairobi",
                    "private sale commercial property",
                    "investment property Kenya yield",
                    "industrial property for sale Kenya",
                    "retail property Nairobi",
                    "off-plan commercial Kenya",
                  ].map((kw) => (
                    <span
                      key={kw}
                      className="bg-white border border-[#E8E6E1] text-[#8B8680] text-[11px] px-3 py-1.5 tracking-wide"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E6E1] bg-white py-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">
              Mandated Advisory
            </span>
          </div>
          <p className="text-[11px] text-[#8B8680] leading-relaxed max-w-2xl mx-auto font-light">
            All properties are subject to availability and require qualified investor verification.
            Full due diligence materials provided under NDA. Past performance is not indicative of
            future returns. Murivest Realty Ltd is a licensed real estate agency regulated by the
            Estate Agents Registration Board of Kenya.
          </p>
        </div>
      </footer>

      {/* Dropdown backdrops */}
      {(isTypeOpen || isCityOpen || isGradeOpen) && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => { setIsTypeOpen(false); setIsCityOpen(false); setIsGradeOpen(false); }}
        />
      )}
    </div>
  );
}

// ─── Filter Dropdown ────────────────────────────────────────────────────────

function FilterDropdown({
  label,
  value,
  options,
  isOpen,
  onToggle,
  onSelect,
}: {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="relative z-30">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-[#E8E6E1] hover:border-[#1B4332] hover:text-[#1B4332] transition-colors text-[#8B8680]"
      >
        <SlidersHorizontal className="w-3 h-3" />
        {value === "All" ? label : value}
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-white border border-[#E8E6E1] shadow-xl z-50 min-w-[180px]"
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => onSelect(opt)}
                className={`w-full text-left px-4 py-3 text-[11px] tracking-[0.1em] uppercase transition-colors ${
                  value === opt
                    ? "bg-[#F5F4F0] text-[#1B4332] font-medium"
                    : "hover:bg-[#FAF9F6] text-[#8B8680]"
                }`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
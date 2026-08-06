"use client";

import Link from "next/link";
import Image from "next/image";
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
  Layers,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────

interface PropertyForRent {
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
}

// ─── Color Palette (Old Money Aesthetic) ───────────────────────────────────

const COLORS = {
  forest: "#1B4332",
  forestLight: "#2D5A45",
  cream: "#FAF9F6",
  creamDark: "#F5F4F0",
  brass: "#B8956B",
  charcoal: "#2C2C2C",
  stone: "#8B8680",
  border: "#E8E6E1",
};

// ─── Property Card ──────────────────────────────────────────────────────────

const PropertyCard: React.FC<{
  property: PropertyForRent;
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
        href={`/ke-properties/for-rent/${property.slug}`}
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

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {property.featured && (
              <span className="bg-[#B8956B] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
                Featured
              </span>
            )}
            <span className="bg-[#1B4332] text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium">
              {property.propertyType}
            </span>
          </div>

          {property.grade && (
            <div className="absolute top-4 right-4">
              <span className="bg-white/95 backdrop-blur-sm text-[#2C2C2C] text-[9px] tracking-[0.15em] uppercase px-2.5 py-1.5 font-medium">
                {property.grade}
              </span>
            </div>
          )}

          {/* Quick view hint */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-9 h-9 bg-white/90 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-[#1B4332]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-base font-serif text-[#2C2C2C] leading-snug mb-1 group-hover:text-[#1B4332] transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[#8B8680]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[12px] tracking-wide">
                {property.neighborhood}, {property.city}
              </span>
            </div>
          </div>

          <div className="h-px bg-[#E8E6E1]" />

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-1">
                Asking Rent
              </p>
              <p className="text-lg font-serif text-[#2C2C2C]">
                {property.price?.displayPrice || "Price on Application"}
              </p>
            </div>
            {sizeLabel && (
              <div className="text-right">
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium mb-1">
                  Size Range
                </p>
                <p className="text-[12px] text-[#2C2C2C]">{sizeLabel}</p>
              </div>
            )}
          </div>

          {property.availabilityStatus && (
            <div className="flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  property.availabilityStatus.toLowerCase().includes("available")
                    ? "bg-[#1B4332]"
                    : "bg-[#B8956B]"
                }`}
              />
              <span className="text-[10px] tracking-[0.1em] uppercase text-[#8B8680]">
                {property.availabilityStatus}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function PropertiesForRentPage() {
  const [properties, setProperties] = useState<PropertyForRent[]>([]);
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
        const query = `*[_type == "propertylet" && transactionType == "To Let" && !(_id in path("drafts.**"))] | order(featured desc, listingDate desc) {
          _id, title, "slug": slug.current, propertyType, category,
          country, city, neighborhood,
          price { displayPrice, kes, usd },
          sizeRange { min, max, unit },
          grade,
          "images": images[].asset->url,
          availabilityStatus, featured, listingDate
        }`;
        const data = await sanityClient.fetch(query);
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties for rent:", error);
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
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8956B] font-medium mb-5">
                Commercial Portfolio · Kenya
              </p>
              <h1
                className="text-4xl md:text-5xl text-white leading-[1.1] max-w-3xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                Properties to Let
              </h1>
              <p className="mt-4 text-[14px] text-white/60 max-w-2xl leading-relaxed font-light tracking-wide">
                Premium office, retail, and industrial space available for lease across Kenya.
                Grade A facilities in Nairobi's foremost business corridors.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#B8956B]">
              <Shield className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B]/80">
                Mandated Advisory
              </span>
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
              placeholder="Search by location or asset name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b border-[#E8E6E1] focus:border-[#1B4332] pl-7 pr-7 py-2.5 text-[13px] text-[#2C2C2C] placeholder:text-[#8B8680]/60 outline-none transition-colors font-light tracking-wide"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-[#8B8680] hover:text-[#1B4332] transition-colors" />
              </button>
            )}
          </div>

          <div className="w-px h-6 bg-[#E8E6E1] hidden lg:block" />

          {/* Property Type Dropdown */}
          <FilterDropdown
            label="Asset Type"
            value={selectedType}
            options={propertyTypes}
            isOpen={isTypeOpen}
            onToggle={() => { setIsTypeOpen(!isTypeOpen); setIsCityOpen(false); setIsGradeOpen(false); }}
            onSelect={(v) => { setSelectedType(v); setIsTypeOpen(false); }}
          />

          {/* City Dropdown */}
          <FilterDropdown
            label="City"
            value={selectedCity}
            options={cities}
            isOpen={isCityOpen}
            onToggle={() => { setIsCityOpen(!isCityOpen); setIsTypeOpen(false); setIsGradeOpen(false); }}
            onSelect={(v) => { setSelectedCity(v); setIsCityOpen(false); }}
          />

          {/* Grade Dropdown */}
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
            <p className="text-xl font-serif text-[#8B8680] italic mb-6">
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

      {/* ── SEO / Editorial Content ───────────────────────────────────── */}
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
                  Office Space to Let in Nairobi
                </h2>
                <p className="text-[14px] text-[#5A5A5A] leading-[1.9] font-light mb-4">
                  Nairobi's commercial office market has demonstrated remarkable resilience, with
                  prime office occupancy rates climbing to 81.58% by December 2025. The "flight to
                  quality" continues as tenants prioritise Grade A spaces with ESG credentials,
                  modern amenities, and flexible lease terms.
                </p>
                <p className="text-[14px] text-[#5A5A5A] leading-[1.9] font-light">
                  Prime office rents remain stable at approximately USD 1.20 per square foot per
                  month, presenting an attractive entry point for tenants seeking quality
                  accommodation in key business districts including Westlands, Upper Hill, Kilimani,
                  and Riverside.
                </p>
              </div>

              {/* Location grid */}
              <div>
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F5F4F0] flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Key Office Locations
                </h3>
                <div className="grid md:grid-cols-2 gap-px bg-[#E8E6E1] border border-[#E8E6E1]">
                  {[
                    {
                      name: "Westlands",
                      desc: "Nairobi's premier commercial district with iconic developments like The Mandrake, 277 Brookside, and The Oval. Prime rents range KES 95–150 per sq ft.",
                    },
                    {
                      name: "Upper Hill",
                      desc: "Kenya's financial district home to Elgon Place, Landmark Plaza, and Williamson House. Prime rents KES 90–150 per sq ft with strong institutional demand.",
                    },
                    {
                      name: "Kilimani",
                      desc: "Vibrant mixed-use area with Senteu Plaza and Laiboni Centre. Popular with professional services and tech firms. Rents around KES 105 per sq ft.",
                    },
                    {
                      name: "Riverside & Lavington",
                      desc: "Prestigious addresses with The Riverfront and 67 Gitanga Place. Premium locations for diplomatic missions, NGOs, and corporate headquarters.",
                    },
                  ].map((loc) => (
                    <div key={loc.name} className="bg-white p-6 space-y-2">
                      <h4 className="text-[11px] tracking-[0.15em] uppercase text-[#2C2C2C] font-medium">
                        {loc.name}
                      </h4>
                      <p className="text-[13px] text-[#8B8680] leading-relaxed font-light">
                        {loc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Keyword sidebar */}
            <div className="lg:col-span-5">
              <div className="bg-[#F5F4F0] border border-[#E8E6E1] p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Layers className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium">
                    Most Searched
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "office to let Nairobi",
                    "office space for rent Kenya",
                    "Grade A office Nairobi",
                    "commercial property to let Westlands",
                    "office to let Upper Hill",
                    "office space Kilimani",
                    "office to let Riverside Nairobi",
                    "affordable office Nairobi",
                    "prime office space Kenya",
                    "office rental Nairobi 2026",
                    "corporate office to let",
                    "flexible office space Kenya",
                    "serviced office Nairobi",
                    "co-working space Kenya",
                    "office lease Nairobi",
                    "commercial lease Upper Hill",
                    "office building Westlands",
                    "office park Karen",
                    "industrial space to let Nairobi",
                    "warehouse to let Mombasa Road",
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
            All properties are subject to availability and require qualified tenant verification.
            Full due diligence materials provided upon request. Murivest Realty Ltd is a licensed
            real estate agency regulated by the Estate Agents Registration Board of Kenya.
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
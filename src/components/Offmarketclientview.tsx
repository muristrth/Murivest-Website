"use client";

// app/ke-properties/off-market/[slug]/OffMarketClientView.tsx
// Client view for a single off-market property.
// Mirrors PropertyClientView.tsx aesthetic; extends it with investment analysis
// fields, NDA / access framing, and the discovery sidebar pattern.

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Download,
  Building2,
  Shield,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  ArrowUpRight,
  Check,
  Maximize2,
  Mail,
  Phone,
  Printer,
  Lock,
  TrendingUp,
  Layers,
} from "lucide-react";
import type { OffMarketProperty } from "@/app/properties/off-market/[slug]/page"; // re-export from server page

// ─── Related Card ───────────────────────────────────────────────────────────

const RelatedCard: React.FC<{
  property: NonNullable<OffMarketProperty["relatedProperties"]>[number];
}> = ({ property }) => (
  <Link
    href={`/ke-properties/off-market/${property.slug}`}
    className="group flex gap-4 p-4 bg-[#FAF9F6] border border-[#E8E6E1] hover:border-[#B8956B] transition-all duration-300"
  >
    <div className="w-20 h-16 flex-shrink-0 overflow-hidden bg-[#F5F4F0]">
      {property.images?.[0] ? (
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <Building2 className="w-5 h-5 text-[#D0CCC4]" />
        </div>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[12px] font-medium text-[#2C2C2C] leading-snug truncate group-hover:text-[#1B4332] transition-colors">
        {property.title}
      </p>
      <p className="text-[11px] text-[#8B8680] mt-0.5 truncate">
        {property.neighborhood}, {property.city}
      </p>
      <p className="text-[11px] text-[#B8956B] mt-1.5 font-medium">
        {property.price?.displayPrice || "By Introduction"}
      </p>
    </div>
    <ArrowUpRight className="w-3.5 h-3.5 text-[#8B8680] group-hover:text-[#B8956B] flex-shrink-0 mt-0.5 transition-colors" />
  </Link>
);

// ─── Discovery Sidebar ───────────────────────────────────────────────────────

const DiscoverySidebar: React.FC<{
  relatedProperties?: OffMarketProperty["relatedProperties"];
  advisor?: OffMarketProperty["advisor"];
  propertyTitle: string;
}> = ({ relatedProperties, advisor, propertyTitle }) => (
  <div className="space-y-6 mt-8">

    {/* Advisor card */}
    {advisor && (
      <div className="bg-white border border-[#E8E6E1] p-6">
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] font-medium mb-5">
          Mandated Advisor
        </p>
        <div className="flex items-start gap-4 mb-5">
          {advisor.photo ? (
            <img
              src={advisor.photo}
              alt={advisor.name}
              className="w-12 h-12 rounded-full object-cover border border-[#E8E6E1] flex-shrink-0"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-[#F5F4F0] border border-[#E8E6E1] flex-shrink-0" />
          )}
          <div className="min-w-0 flex-1 space-y-1">
            <p
              className="text-base text-[#2C2C2C]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {advisor.name}
            </p>
            {advisor.title && (
              <p className="text-[11px] text-[#8B8680]">{advisor.title}</p>
            )}
            <a
              href={`mailto:${advisor.email}`}
              className="flex items-center gap-2 text-[11px] text-[#8B8680] hover:text-[#1B4332] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
              <span className="truncate">{advisor.email}</span>
            </a>
            <a
              href={`tel:${advisor.phone}`}
              className="flex items-center gap-2 text-[11px] text-[#8B8680] hover:text-[#1B4332] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
              <span>{advisor.phone}</span>
            </a>
          </div>
        </div>
        <a
          href={`mailto:${advisor.email}?subject=Off-Market Investment Inquiry: ${propertyTitle}`}
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#1B4332] hover:bg-[#2D5A45] text-white text-[10px] tracking-[0.2em] uppercase transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
          Schedule Consultation
        </a>
      </div>
    )}

    {/* Related */}
    {relatedProperties && relatedProperties.length > 0 && (
      <div>
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#8B8680] font-medium mb-4">
          Related Off-Market Assets
        </p>
        <div className="space-y-3">
          {relatedProperties.map((p) => (
            <RelatedCard key={p._id} property={p} />
          ))}
        </div>
        <Link
          href="/ke-properties/off-market"
          className="mt-4 flex items-center justify-center gap-2 w-full py-3 border border-[#E8E6E1] hover:border-[#1B4332] text-[10px] tracking-[0.2em] uppercase text-[#8B8680] hover:text-[#1B4332] transition-colors"
        >
          View All Off-Market Assets
          <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>
    )}

    {/* NDA access */}
    <div className="bg-[#1B4332] text-white p-6">
      <Lock className="w-5 h-5 text-[#B8956B] mb-3" strokeWidth={1.5} />
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium mb-2">
        Full Materials Under NDA
      </p>
      <p className="text-[12px] text-white/60 leading-relaxed font-light">
        Investment memoranda, financial models, and site documentation released exclusively
        to mandated partners and qualified institutional investors.
      </p>
      <a
        href="mailto:capital@murivest.co.ke?subject=Off-Market NDA Request"
        className="mt-4 block text-center text-[10px] tracking-[0.2em] uppercase border border-white/20 hover:border-[#B8956B] py-2.5 text-white/70 hover:text-white transition-all"
      >
        Request NDA & Full Memorandum
      </a>
    </div>

  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

export default function OffMarketClientView({ property }: { property: OffMarketProperty }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    // Lock scroll when modal open
    document.body.style.overflow = isImageModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isImageModalOpen]);

  const handleDownload = async () => {
    if (property.brochureUrl) {
      try {
        const response = await fetch(property.brochureUrl);
        if (!response.ok) throw new Error("Download failed");
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `${property.title.replace(/\s+/g, "_")}_Prospectus.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch {
        alert("Failed to download prospectus. Please try again.");
      }
    } else {
      alert("Investment memorandum is released under NDA. Please contact the advisor.");
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    } catch {
      /* fallback */
    }
  };

  const images = property.images || [];
  const nextImage = () => setCurrentImageIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  const prevImage = () => setCurrentImageIndex((i) => (i > 0 ? i - 1 : images.length - 1));

  const sizeLabel =
    property.sizeRange?.min && property.sizeRange?.max
      ? `${property.sizeRange.min.toLocaleString()} – ${property.sizeRange.max.toLocaleString()} ${property.sizeRange.unit}`
      : null;

  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#B8956B]/20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── Navigation ──────────────────────────────────────────────── */}
      <nav className="bg-[#1B4332] z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/ke-properties/off-market"
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <div className="w-10 h-10 border border-white/30 group-hover:border-white flex items-center justify-center transition-colors">
                <ArrowLeft size={16} className="text-white" strokeWidth={1.5} />
              </div>
              <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors">
                Off-Market Portfolio
              </span>
            </Link>

            <div className="flex items-center gap-3">
              {/* Off-Market pill */}
              <div className="hidden md:flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5">
                <Lock className="w-3 h-3 text-[#B8956B]" strokeWidth={2} />
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">
                  Off-Market
                </span>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-10 h-10 border flex items-center justify-center transition-all border-white/30 ${
                  isLiked ? "bg-[#B8956B] border-[#B8956B]" : ""
                }`}
              >
                <Heart
                  size={16}
                  className={isLiked ? "fill-white text-white" : "text-white"}
                  strokeWidth={1.5}
                />
              </button>
              <button
                onClick={handleShare}
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white transition-colors"
              >
                <Share2 size={16} className="text-white" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => window.print()}
                className="w-10 h-10 border border-white/30 items-center justify-center hover:border-white transition-colors hidden md:flex"
              >
                <Printer size={16} className="text-white" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Share Toast ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {showShareToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] bg-[#1B4332] text-white px-6 py-3 text-[11px] tracking-[0.2em] uppercase shadow-lg"
          >
            Link copied
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden bg-[#1B4332]">
        <div className="absolute inset-0">
          {images[0] ? (
            <img
              src={images[0]}
              alt={property.title}
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <div className="w-full h-full bg-[#2D5A45]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/50 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end pb-16 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] font-medium bg-[#B8956B]/10 px-3 py-1.5 flex items-center gap-1.5">
                  <Lock className="w-3 h-3" strokeWidth={2} />
                  Off-Market
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B8956B]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                  {property.propertyType}
                </span>
                {property.grade && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                      {property.grade}
                    </span>
                  </>
                )}
                {property.availabilityStatus && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
                      {property.availabilityStatus}
                    </span>
                  </>
                )}
              </div>

              <h1
                className="text-4xl md:text-5xl text-white leading-[1.1] max-w-4xl mb-5"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                {property.title}
                {property.subtitle && (
                  <span className="block italic text-[#B8956B] font-light text-2xl md:text-3xl mt-2">
                    {property.subtitle}
                  </span>
                )}
              </h1>

              <div className="flex items-center gap-2 text-white/60">
                <MapPin size={15} className="text-[#B8956B]" strokeWidth={1.5} />
                <span className="text-[12px] tracking-wide">
                  {[property.address, property.neighborhood, property.city, property.country]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-6 right-6 lg:right-12 hidden lg:flex gap-2">
            {images.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentImageIndex(idx); setIsImageModalOpen(true); }}
                className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                  idx === 0 ? "border-[#B8956B]" : "border-white/30 hover:border-white"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
            {images.length > 4 && (
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="w-20 h-20 border border-white/30 flex items-center justify-center text-white text-xs tracking-wide hover:border-white transition-colors"
              >
                +{images.length - 4}
              </button>
            )}
          </div>
        )}
      </section>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* ── Left Column ─────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-12">

            {/* Price & Size Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-px bg-[#E8E6E1] border border-[#E8E6E1]"
            >
              <div className="bg-white p-8 lg:p-10">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B8956B] mb-3 font-medium">
                  Indicative Value
                </p>
                <p
                  className="text-[38px] text-[#2C2C2C] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                >
                  {property.price?.displayPrice || "By Introduction"}
                </p>
                <div className="space-y-1 text-[11px] text-[#8B8680] uppercase tracking-wide">
                  {property.price?.Ksh && <p>Ksh {property.price.Ksh}</p>}
                  {property.price?.usd && <p>USD {property.price.usd}</p>}
                </div>
              </div>

              {property.investment?.yield || property.investment?.totalROI ? (
                <div className="bg-[#1B4332] text-white p-8 lg:p-10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-2 font-medium">
                      {property.investment.yield ? "Net Yield" : "Target ROI"}
                    </p>
                    <p
                      className="text-4xl text-white"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                    >
                      {property.investment.yield || property.investment.totalROI}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-white/20" strokeWidth={1} />
                </div>
              ) : (
                <div className="bg-[#1B4332] text-white p-8 lg:p-10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8956B] mb-2 font-medium">
                      Available Area
                    </p>
                    <p
                      className="text-3xl text-white"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
                    >
                      {sizeLabel || "—"}
                    </p>
                  </div>
                  <Maximize2 className="w-8 h-8 text-white/20" strokeWidth={1} />
                </div>
              )}
            </motion.div>

            {/* Investment Returns Matrix */}
            {property.investment &&
              (property.investment.monthlyIncome ||
                property.investment.annualIncome ||
                property.investment.appreciationRate ||
                property.investment.totalROI) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#1B4332] flex items-center justify-center">
                    <TrendingUp size={18} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium">
                    Investment Returns Analysis
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E6E1] border border-[#E8E6E1]">
                  {property.investment.monthlyIncome && (
                    <div className="bg-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-2">
                        Monthly Income
                      </span>
                      <span className="text-lg font-medium text-[#2C2C2C]">
                        {property.investment.monthlyIncome}
                      </span>
                    </div>
                  )}
                  {property.investment.annualIncome && (
                    <div className="bg-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-2">
                        Annual Income
                      </span>
                      <span className="text-lg font-medium text-[#2C2C2C]">
                        {property.investment.annualIncome}
                      </span>
                    </div>
                  )}
                  {property.investment.appreciationRate && (
                    <div className="bg-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-[#8B8680] block mb-2">
                        Appreciation
                      </span>
                      <span className="text-lg font-medium text-[#2C2C2C]">
                        {property.investment.appreciationRate}
                      </span>
                    </div>
                  )}
                  {property.investment.totalROI && (
                    <div className="bg-[#B8956B] text-white p-6">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-white/80 block mb-2">
                        Target ROI
                      </span>
                      <span
                        className="text-xl"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      >
                        {property.investment.totalROI}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Investment Thesis */}
            {property.investmentAngle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <Layers size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Investment Thesis
                </h3>
                <p className="text-[15px] text-[#5A5A5A] leading-[1.9] font-light">
                  {property.investmentAngle}
                </p>
              </motion.div>
            )}

            {/* Executive Summary */}
            {property.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <FileText size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Executive Summary
                </h3>
                <p className="text-[15px] text-[#5A5A5A] leading-[1.9] font-light">
                  {property.description}
                </p>
              </motion.div>
            )}

            {/* Neighbourhood Analysis */}
            {property.neighborhoodAnalysis && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <MapPin size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Neighbourhood Analysis
                </h3>
                <p className="text-[15px] text-[#5A5A5A] leading-[1.9] font-light">
                  {property.neighborhoodAnalysis}
                </p>
              </motion.div>
            )}

            {/* Appreciation Potential */}
            {property.appreciationPotential && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <TrendingUp size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Appreciation Potential
                </h3>
                <p className="text-[15px] text-[#5A5A5A] leading-[1.9] font-light">
                  {property.appreciationPotential}
                </p>
              </motion.div>
            )}

            {/* Key Features */}
            {property.features && property.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <Shield size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Key Investment Attributes
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white border border-[#E8E6E1] p-4"
                    >
                      <Check size={15} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-[13px] text-[#2C2C2C] leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Asset Specifications */}
            {property.details && property.details.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F5F4F0] flex items-center justify-center">
                    <Building2 size={18} className="text-[#1B4332]" strokeWidth={1.5} />
                  </div>
                  Asset Specifications
                </h3>
                <div className="bg-white border border-[#E8E6E1]">
                  {property.details.map((detail, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center p-5 ${
                        i !== property.details!.length - 1 ? "border-b border-[#E8E6E1]" : ""
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-wide text-[#8B8680]">
                        {detail.label}
                      </span>
                      <span className="text-[14px] text-[#2C2C2C] font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gallery */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#2C2C2C] font-medium mb-6">
                  Visual Documentation
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {images.slice(0, 6).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setCurrentImageIndex(idx); setIsImageModalOpen(true); }}
                      className="relative aspect-square overflow-hidden group"
                    >
                      <img
                        src={img}
                        alt={`${property.title} - ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#1B4332]/0 group-hover:bg-[#1B4332]/20 transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* ── Right Column — Sidebar ────────────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">

              {/* Exclusive Mandate Badge */}
              <div className="bg-[#1B4332] text-white p-6 flex items-center gap-4">
                <Shield size={22} className="text-[#B8956B] flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">
                    Exclusive Mandate
                  </p>
                  <p className="text-[13px] text-white/80 mt-1">
                    Direct representation by Murivest
                  </p>
                </div>
              </div>

              {/* Size Card */}
              {sizeLabel && (
                <div className="bg-white border border-[#E8E6E1] p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#F5F4F0] flex items-center justify-center">
                      <Maximize2 size={20} className="text-[#1B4332]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680]">Total Area</p>
                      <p className="text-base font-medium text-[#2C2C2C] mt-0.5">{sizeLabel}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Year Built if available */}
              {property.yearBuilt && (
                <div className="bg-white border border-[#E8E6E1] p-5 flex justify-between items-center">
                  <span className="text-[11px] uppercase tracking-wide text-[#8B8680]">Year Built</span>
                  <span className="text-[14px] text-[#2C2C2C] font-medium">{property.yearBuilt}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleDownload}
                  className="w-full bg-[#1B4332] hover:bg-[#2D5A45] text-white py-4 text-[11px] tracking-[0.25em] uppercase flex items-center justify-between px-6 transition-colors duration-300 group"
                >
                  <span>Download Prospectus</span>
                  <Download
                    size={17}
                    className="group-hover:translate-y-0.5 transition-transform"
                    strokeWidth={1.5}
                  />
                </button>

                <a
                  href={`mailto:${property.advisor?.email || "capital@murivest.co.ke"}?subject=Off-Market Investment Inquiry: ${property.title}`}
                  className="w-full block border border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white py-4 text-[11px] tracking-[0.25em] uppercase text-center transition-colors"
                >
                  Schedule Consultation
                </a>

                <a
                  href="mailto:capital@murivest.co.ke?subject=NDA Request — Off-Market Portfolio"
                  className="w-full block border border-[#E8E6E1] hover:border-[#B8956B] hover:text-[#B8956B] py-4 text-[11px] tracking-[0.25em] uppercase text-center transition-colors text-[#8B8680]"
                >
                  Request NDA & Full Memorandum
                </a>
              </div>

              {/* Confidentiality Notice */}
              <div className="bg-[#F5F4F0] border border-[#E8E6E1] p-5">
                <div className="flex items-start gap-3">
                  <Shield size={15} className="text-[#B8956B] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[11px] text-[#8B8680] leading-relaxed">
                    This memorandum is confidential and provided for qualified investors only.
                    All figures are indicative and subject to final due diligence.
                  </p>
                </div>
              </div>

            </div>{/* end sticky */}

            {/* Discovery Sidebar */}
            <DiscoverySidebar
              relatedProperties={property.relatedProperties}
              advisor={property.advisor}
              propertyTitle={property.title}
            />

          </div>

        </div>
      </main>

      {/* ── Full Screen Image Modal ───────────────────────────────────── */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1B4332]/98 z-[100] flex items-center justify-center"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-4"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft size={40} strokeWidth={1} />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[currentImageIndex]}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
              alt={`${property.title} – ${currentImageIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-4"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight size={40} strokeWidth={1} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 border border-white/20">
              <span className="text-[11px] tracking-[0.3em] uppercase text-white">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E6E1] bg-white py-12 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B8680]">
              Mandated Advisory
            </span>
          </div>
          <p className="text-[11px] text-[#8B8680] leading-relaxed max-w-3xl mx-auto text-center font-light">
            All information is provided for informational purposes only and should not be construed
            as investment advice. Past performance is not indicative of future returns. Available
            exclusively to mandated partners and qualified institutional investors under NDA.
            Murivest Realty Ltd is a licensed real estate agency regulated by the Estate Agents
            Registration Board of Kenya.
          </p>
        </div>
      </footer>

    </div>
  );
}
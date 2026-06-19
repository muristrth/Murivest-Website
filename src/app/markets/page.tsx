"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

interface Market {
  name: string;
  slug: string;
  region: string;
  assetClasses: string[];
  propertyCount: number;
  airport: string;
  privateTerminal: string;
  cbdTransfer: string;
  helipad: boolean;
  featured?: boolean;
}

interface Opportunity {
  title: string;
  location: string;
  assetClass: string;
  targetYield: number;
  status: "active" | "nda-required" | "closing";
}

interface IntelligenceCard {
  title: string;
  region: string;
  category: string;
  date: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────

const MARKETS: Market[] = [
  {
    name: "Singapore",
    slug: "singapore",
    region: "Asia Pacific",
    assetClasses: ["Office", "Logistics", "Retail", "Industrial"],
    propertyCount: 247,
    airport: "Singapore Changi (SIN)",
    privateTerminal: "JetQuay VIP Terminal",
    cbdTransfer: "15 minutes",
    helipad: true,
    featured: true,
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    region: "Europe",
    assetClasses: ["Office", "Logistics", "Retail", "Student Housing"],
    propertyCount: 412,
    airport: "London Heathrow (LHR)",
    privateTerminal: "Harrods Aviation, Farnborough",
    cbdTransfer: "45 minutes",
    helipad: true,
    featured: true,
  },
  {
    name: "United Arab Emirates",
    slug: "united-arab-emirates",
    region: "Middle East",
    assetClasses: ["Office", "Retail", "Hospitality", "Mixed Use"],
    propertyCount: 318,
    airport: "Dubai International (DXB)",
    privateTerminal: "Dubai Executive Terminal",
    cbdTransfer: "20 minutes",
    helipad: true,
    featured: true,
  },
  {
    name: "United States",
    slug: "united-states",
    region: "North America",
    assetClasses: ["Office", "Multifamily", "Logistics", "Data Centers"],
    propertyCount: 891,
    airport: "Multiple Hub Airports",
    privateTerminal: "Signature Aviation (nationwide)",
    cbdTransfer: "Varies by city",
    helipad: true,
  },
  {
    name: "Japan",
    slug: "japan",
    region: "Asia Pacific",
    assetClasses: ["Office", "Logistics", "Retail", "Life Sciences"],
    propertyCount: 203,
    airport: "Tokyo Haneda (HND)",
    privateTerminal: "Haneda Business Aviation",
    cbdTransfer: "30 minutes",
    helipad: false,
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    region: "Middle East",
    assetClasses: ["Office", "Retail", "Hospitality", "Development Sites"],
    propertyCount: 156,
    airport: "King Khalid International (RUH)",
    privateTerminal: "Royal Terminal",
    cbdTransfer: "25 minutes",
    helipad: true,
  },
  {
    name: "Germany",
    slug: "germany",
    region: "Europe",
    assetClasses: ["Office", "Logistics", "Industrial", "Retail"],
    propertyCount: 284,
    airport: "Frankfurt Airport (FRA)",
    privateTerminal: "Fraport VIP Terminal",
    cbdTransfer: "20 minutes",
    helipad: false,
  },
  {
    name: "Australia",
    slug: "australia",
    region: "Asia Pacific",
    assetClasses: ["Office", "Logistics", "Retail", "Mixed Use"],
    propertyCount: 178,
    airport: "Sydney Kingsford Smith (SYD)",
    privateTerminal: "Sydney Jet Base",
    cbdTransfer: "25 minutes",
    helipad: false,
  },
  {
    name: "Canada",
    slug: "canada",
    region: "North America",
    assetClasses: ["Office", "Multifamily", "Logistics", "Retail"],
    propertyCount: 221,
    airport: "Toronto Pearson (YYZ)",
    privateTerminal: "Signature Aviation, YYZ",
    cbdTransfer: "40 minutes",
    helipad: false,
  },
  {
    name: "Kenya",
    slug: "kenya",
    region: "Sub-Saharan Africa",
    assetClasses: ["Office", "Retail", "Logistics", "Mixed Use"],
    propertyCount: 89,
    airport: "Jomo Kenyatta International (NBO)",
    privateTerminal: "Wilson Airport Private Terminal",
    cbdTransfer: "20 minutes",
    helipad: true,
    featured: true,
  },
  {
    name: "South Africa",
    slug: "south-africa",
    region: "Sub-Saharan Africa",
    assetClasses: ["Office", "Retail", "Industrial", "Logistics"],
    propertyCount: 134,
    airport: "O.R. Tambo International (JNB)",
    privateTerminal: "Signature Aviation, JNB",
    cbdTransfer: "35 minutes",
    helipad: false,
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    region: "Europe",
    assetClasses: ["Office", "Logistics", "Data Centers", "Industrial"],
    propertyCount: 167,
    airport: "Amsterdam Schiphol (AMS)",
    privateTerminal: "Schiphol Private Lounge",
    cbdTransfer: "15 minutes",
    helipad: false,
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    region: "Europe",
    assetClasses: ["Office", "Life Sciences", "Hospitality", "Mixed Use"],
    propertyCount: 92,
    airport: "Geneva International (GVA)",
    privateTerminal: "Aéroport de Genève VIP",
    cbdTransfer: "10 minutes",
    helipad: true,
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    region: "Asia Pacific",
    assetClasses: ["Office", "Retail", "Logistics", "Hospitality"],
    propertyCount: 183,
    airport: "Hong Kong International (HKG)",
    privateTerminal: "Haeco VIP Terminal",
    cbdTransfer: "30 minutes",
    helipad: true,
  },
  {
    name: "France",
    slug: "france",
    region: "Europe",
    assetClasses: ["Office", "Retail", "Logistics", "Hospitality"],
    propertyCount: 219,
    airport: "Paris Charles de Gaulle (CDG)",
    privateTerminal: "Le Bourget Business Aviation",
    cbdTransfer: "35 minutes",
    helipad: false,
  },
  {
    name: "Nigeria",
    slug: "nigeria",
    region: "Sub-Saharan Africa",
    assetClasses: ["Office", "Retail", "Industrial", "Mixed Use"],
    propertyCount: 67,
    airport: "Murtala Muhammed International (LOS)",
    privateTerminal: "Zenith Aviation, Lagos",
    cbdTransfer: "30 minutes",
    helipad: false,
  },
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Grade A Office Tower",
    location: "London, UK",
    assetClass: "Office",
    targetYield: 6.2,
    status: "active",
  },
  {
    title: "Logistics Portfolio",
    location: "Dubai, UAE",
    assetClass: "Logistics",
    targetYield: 8.4,
    status: "nda-required",
  },
  {
    title: "Mixed-Use Development",
    location: "Nairobi, Kenya",
    assetClass: "Mixed Use",
    targetYield: 11.5,
    status: "active",
  },
  {
    title: "Data Centre Campus",
    location: "Singapore",
    assetClass: "Data Centre",
    targetYield: 7.8,
    status: "nda-required",
  },
  {
    title: "Retail High Street Portfolio",
    location: "Riyadh, Saudi Arabia",
    assetClass: "Retail",
    targetYield: 9.1,
    status: "active",
  },
  {
    title: "Life Sciences Hub",
    location: "Zurich, Switzerland",
    assetClass: "Life Sciences",
    targetYield: 5.9,
    status: "closing",
  },
];

const INTELLIGENCE: IntelligenceCard[] = [
  {
    title: "Singapore REIT Expansion Trends Q2 2025",
    region: "Asia Pacific",
    category: "Capital Markets",
    date: "May 2025",
  },
  {
    title: "UAE Sovereign Wealth Allocation into Real Assets",
    region: "Middle East",
    category: "Sovereign Capital",
    date: "April 2025",
  },
  {
    title: "UK Pension Fund Property Allocation Report",
    region: "Europe",
    category: "Institutional Flows",
    date: "April 2025",
  },
  {
    title: "Africa Logistics & Warehousing Outlook 2025",
    region: "Sub-Saharan Africa",
    category: "Sector Report",
    date: "March 2025",
  },
  {
    title: "Global Office Recovery & Occupancy Monitor",
    region: "Global",
    category: "Sector Report",
    date: "March 2025",
  },
  {
    title: "Data Centre Capacity & Investment Demand",
    region: "Global",
    category: "Emerging Sectors",
    date: "February 2025",
  },
];

const ASSET_CLASSES = [
  { name: "Office", icon: "🏢", slug: "office-buildings-for-sale" },
  { name: "Industrial", icon: "🏭", slug: "industrial-for-sale" },
  { name: "Logistics", icon: "📦", slug: "logistics-warehouses-for-sale" },
  { name: "Retail", icon: "🏬", slug: "retail-for-sale" },
  { name: "Mixed Use", icon: "🏙️", slug: "mixed-use-for-sale" },
  { name: "Hospitality", icon: "🏨", slug: "hospitality-for-sale" },
  { name: "Student Housing", icon: "🎓", slug: "student-housing-for-sale" },
  { name: "Data Centres", icon: "🖥️", slug: "data-centers-for-sale" },
  { name: "Life Sciences", icon: "🔬", slug: "life-sciences-for-sale" },
  { name: "Development Sites", icon: "🏗️", slug: "development-sites-for-sale" },
];

const PROCESS_STEPS = [
  { number: "01", title: "Market Selection", desc: "Geographic and sector mandate alignment" },
  { number: "02", title: "Deal Screening", desc: "Institutional-grade asset qualification" },
  { number: "03", title: "NDA Execution", desc: "Bilateral confidentiality agreement" },
  { number: "04", title: "Investor Verification", desc: "KYC, AML and accreditation review" },
  { number: "05", title: "CIM Release", desc: "Confidential Information Memorandum" },
  { number: "06", title: "Management Presentation", desc: "Vendor and asset team briefing" },
  { number: "07", title: "Due Diligence", desc: "Technical, legal and financial review" },
  { number: "08", title: "Closing", desc: "Transaction execution and transfer" },
];

const GLOBE_NODES = [
  { name: "London", x: 48, y: 22 },
  { name: "New York", x: 20, y: 28 },
  { name: "Dubai", x: 62, y: 35 },
  { name: "Singapore", x: 76, y: 48 },
  { name: "Tokyo", x: 83, y: 28 },
  { name: "Toronto", x: 18, y: 24 },
  { name: "Nairobi", x: 60, y: 52 },
  { name: "Riyadh", x: 60, y: 37 },
  { name: "Hong Kong", x: 79, y: 38 },
  { name: "Sydney", x: 84, y: 68 },
];

// ─── Utility ────────────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const duration = 1800;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function StatusBadge({ status }: { status: Opportunity["status"] }) {
  const map = {
    active: { label: "Active", color: "#2D6A4F", bg: "#E8F5EE" },
    "nda-required": { label: "NDA Required", color: "#7B5E00", bg: "#FFF8E6" },
    closing: { label: "Closing", color: "#8B2000", bg: "#FFF0EC" },
  };
  const s = map[status];
  return (
    <span
      style={{
        fontSize: "10px",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: s.color,
        background: s.bg,
        padding: "3px 10px",
        border: `1px solid ${s.color}30`,
      }}
    >
      {s.label}
    </span>
  );
}

// ─── Globe SVG ──────────────────────────────────────────────────────────────

function GlobeSVG() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % GLOBE_NODES.length), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <svg
      viewBox="0 0 420 380"
      style={{ width: "100%", maxWidth: 420 }}
      aria-label="Interactive globe showing Murivest's global market coverage"
    >
      {/* Globe base */}
      <ellipse cx="210" cy="190" rx="168" ry="168" fill="#0B1F14" stroke="#2D6A4F" strokeWidth="1" />

      {/* Latitude lines */}
      {[0.25, 0.5, 0.75].map((r, i) => (
        <ellipse
          key={i}
          cx="210"
          cy="190"
          rx={168 * r}
          ry={30 * r}
          fill="none"
          stroke="#2D6A4F"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}

      {/* Longitude arcs */}
      {[0, 45, 90, 135].map((angle, i) => (
        <ellipse
          key={i}
          cx="210"
          cy="190"
          rx={20}
          ry={168}
          fill="none"
          stroke="#2D6A4F"
          strokeWidth="0.5"
          opacity="0.3"
          transform={`rotate(${angle} 210 190)`}
        />
      ))}

      {/* Continent silhouettes — simplified */}
      {/* Africa */}
      <path
        d="M200 145 L215 140 L228 152 L232 170 L228 195 L220 215 L210 222 L202 210 L196 190 L192 168 Z"
        fill="#1A3D28"
        opacity="0.8"
      />
      {/* Europe */}
      <path
        d="M185 118 L200 112 L210 120 L208 135 L196 140 L184 135 Z"
        fill="#1A3D28"
        opacity="0.8"
      />
      {/* Asia */}
      <path
        d="M220 110 L270 105 L295 118 L300 138 L285 152 L260 155 L240 148 L225 135 Z"
        fill="#1A3D28"
        opacity="0.8"
      />
      {/* North America */}
      <path
        d="M90 115 L130 108 L148 125 L145 148 L128 160 L105 155 L88 138 Z"
        fill="#1A3D28"
        opacity="0.8"
      />
      {/* Australia */}
      <path
        d="M295 210 L320 205 L328 220 L320 235 L300 238 L288 225 Z"
        fill="#1A3D28"
        opacity="0.8"
      />

      {/* Connection lines between nodes */}
      {GLOBE_NODES.map((node, i) => {
        const next = GLOBE_NODES[(i + 2) % GLOBE_NODES.length];
        const nx = (node.x / 100) * 420;
        const ny = (node.y / 100) * 380;
        const nnx = (next.x / 100) * 420;
        const nny = (next.y / 100) * 380;
        return (
          <line
            key={i}
            x1={nx} y1={ny} x2={nnx} y2={nny}
            stroke="#B8A98A"
            strokeWidth="0.4"
            opacity="0.25"
            strokeDasharray="3,6"
          />
        );
      })}

      {/* Nodes */}
      {GLOBE_NODES.map((node, i) => {
        const nx = (node.x / 100) * 420;
        const ny = (node.y / 100) * 380;
        const isActive = i === pulse;
        return (
          <g key={node.name}>
            {isActive && (
              <>
                <circle cx={nx} cy={ny} r="14" fill="#B8A98A" opacity="0.12" />
                <circle cx={nx} cy={ny} r="9" fill="#B8A98A" opacity="0.2" />
              </>
            )}
            <circle
              cx={nx}
              cy={ny}
              r={isActive ? 4.5 : 3}
              fill={isActive ? "#D4AF37" : "#B8A98A"}
              style={{ transition: "r 0.3s ease, fill 0.3s ease" }}
            />
            <text
              x={nx}
              y={ny - 9}
              textAnchor="middle"
              fontSize="8"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="600"
              letterSpacing="0.05em"
              fill={isActive ? "#D4AF37" : "#7A9E8A"}
              style={{ transition: "fill 0.3s ease" }}
            >
              {node.name.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* Rim glow */}
      <ellipse
        cx="210" cy="190" rx="168" ry="168"
        fill="none"
        stroke="#2D6A4F"
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

// ─── Section Components ──────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#2D6A4F",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "linear-gradient(90deg, #2D6A4F30, #2D6A4F08)",
        margin: "0",
      }}
    />
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function GlobalMarketsPage() {
  const [activeMarket, setActiveMarket] = useState<Market>(MARKETS[0]);
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = ["All", ...Array.from(new Set(MARKETS.map((m) => m.region)))];
  const filtered =
    activeRegion === "All"
      ? MARKETS
      : MARKETS.filter((m) => m.region === activeRegion);

  return (
    <main
      style={{
        background: "#FAFAF8",
        color: "#1A1A1A",
        minHeight: "100vh",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .market-card {
          border: 1px solid #E5E0D8;
          background: #FFFFFF;
          padding: 28px;
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
          position: relative;
        }
        .market-card:hover {
          border-color: #2D6A4F;
          transform: translateY(-2px);
        }
        .market-card.active {
          border-color: #2D6A4F;
          background: #F4FDF8;
        }
        .asset-class-pill {
          display: inline-block;
          font-size: 9px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4A7C59;
          background: #E8F5EE;
          padding: 3px 8px;
          margin: 2px;
          border: 1px solid #C8E6D4;
        }
        .opp-card {
          border: 1px solid #E5E0D8;
          background: #FFFFFF;
          padding: 28px;
          transition: border-color 0.2s ease;
        }
        .opp-card:hover {
          border-color: #B8A98A;
        }
        .process-step {
          flex: 1;
          min-width: 0;
          padding: 20px 16px;
          border-left: 1px solid #E5E0D8;
          position: relative;
        }
        .process-step:first-child { border-left: none; }
        .intel-card {
          border: 1px solid #E5E0D8;
          background: #FFFFFF;
          padding: 24px;
          transition: border-color 0.2s ease;
          cursor: pointer;
        }
        .intel-card:hover { border-color: #2D6A4F; }
        .asset-btn {
          border: 1px solid #E5E0D8;
          background: #FFFFFF;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
          text-decoration: none;
          display: block;
          color: inherit;
        }
        .asset-btn:hover {
          border-color: #2D6A4F;
          background: #F4FDF8;
        }
        .cta-btn-primary {
          display: inline-block;
          background: #2D6A4F;
          color: #FFFFFF;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 16px 36px;
          text-decoration: none;
          border: 1px solid #2D6A4F;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .cta-btn-primary:hover { background: #1F4D38; }
        .cta-btn-ghost {
          display: inline-block;
          background: transparent;
          color: #1A1A1A;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 16px 36px;
          text-decoration: none;
          border: 1px solid #1A1A1A;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .cta-btn-ghost:hover {
          background: #1A1A1A;
          color: #FFFFFF;
        }
        .cta-btn-ghost-light {
          display: inline-block;
          background: transparent;
          color: #FFFFFF;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 16px 36px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .cta-btn-ghost-light:hover { background: rgba(255,255,255,0.1); }
        .region-filter {
          background: transparent;
          border: 1px solid #E5E0D8;
          color: #6B6B6B;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .region-filter.active {
          background: #2D6A4F;
          border-color: #2D6A4F;
          color: #FFFFFF;
        }
        .region-filter:hover:not(.active) {
          border-color: #2D6A4F;
          color: #2D6A4F;
        }
      `}</style>

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0B1F14",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ticker bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            borderBottom: "1px solid #2D6A4F40",
            padding: "12px 64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Murivest Realty Group
          </span>
          <div style={{ display: "flex", gap: "32px" }}>
            {["London", "Dubai", "Singapore", "Nairobi"].map((city) => (
              <span
                key={city}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#7A9E8A",
                  textTransform: "uppercase",
                }}
              >
                ● {city}
              </span>
            ))}
          </div>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "9px",
              color: "#4A7C59",
              letterSpacing: "0.1em",
            }}
          >
            GLOBAL CAPITAL MARKETS PLATFORM
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "80px",
            alignItems: "center",
            maxWidth: "1400px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Global Markets — Institutional CRE Advisory
            </p>

            <h1
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: "clamp(48px, 6vw, 84px)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#FFFFFF",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Global Capital.
            </h1>
            <h1
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: "clamp(48px, 6vw, 84px)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "#FFFFFF",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
                fontStyle: "italic",
              }}
            >
              Local Execution.
            </h1>
            <h1
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#7A9E8A",
                marginBottom: "40px",
                letterSpacing: "-0.01em",
              }}
            >
              Institutional Real Estate Across Emerging and Established Markets.
            </h1>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#9BB8A8",
                maxWidth: "520px",
                marginBottom: "48px",
              }}
            >
              Access office towers, logistics portfolios, retail assets and
              off-market investment opportunities through Murivest's global
              capital markets platform — serving family offices, pension funds,
              and sovereign investors across 70+ markets.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#markets-grid" className="cta-btn-primary">
                Explore Markets
              </a>
              <a href="/deal-room" className="cta-btn-ghost-light">
                View Investment Pipeline →
              </a>
            </div>

            {/* Quick stats */}
            <div
              style={{
                display: "flex",
                gap: "48px",
                marginTop: "64px",
                paddingTop: "32px",
                borderTop: "1px solid #2D6A4F30",
              }}
            >
              {[
                { value: "70+", label: "Markets" },
                { value: "3,900+", label: "Assets" },
                { value: "9", label: "Asset Classes" },
                { value: "$1.2B+", label: "Under Advisory" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "28px",
                      fontWeight: 400,
                      color: "#D4AF37",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#4A7C59",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Globe */}
          <div>
            <GlobeSVG />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 2. GLOBAL MARKETS GRID ────────────────────────────────────────── */}
      <section
        id="markets-grid"
        style={{ padding: "100px 64px", background: "#FAFAF8" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
            }}
          >
            <div>
              <SectionLabel>Global Markets Directory</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 400,
                  color: "#1A1A1A",
                  lineHeight: 1.15,
                }}
              >
                {MARKETS.length} Markets.
                <br />
                <span style={{ color: "#6B6B6B", fontStyle: "italic" }}>
                  One Platform.
                </span>
              </h2>
            </div>

            {/* Region filters */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {regions.map((r) => (
                <button
                  key={r}
                  className={`region-filter${activeRegion === r ? " active" : ""}`}
                  onClick={() => setActiveRegion(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "#E5E0D8",
            }}
          >
            {filtered.map((market) => (
              <div
                key={market.slug}
                className={`market-card${activeMarket.slug === market.slug ? " active" : ""}`}
                onClick={() => setActiveMarket(market)}
              >
                {market.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "#2D6A4F",
                      color: "#FFFFFF",
                      fontSize: "8px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                    }}
                  >
                    Featured
                  </div>
                )}

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#B8A98A",
                    marginBottom: "10px",
                  }}
                >
                  {market.region}
                </p>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#1A1A1A",
                    marginBottom: "16px",
                  }}
                >
                  {market.name}
                </h3>

                <div style={{ marginBottom: "16px" }}>
                  {market.assetClasses.map((ac) => (
                    <span key={ac} className="asset-class-pill">
                      {ac}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "14px",
                    borderTop: "1px solid #F0EBE3",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "24px",
                        fontWeight: 400,
                        color: "#2D6A4F",
                      }}
                    >
                      {market.propertyCount}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "8px",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#9B9590",
                      }}
                    >
                      Active Assets
                    </p>
                  </div>
                  <a
                    href={`/markets/${market.slug}`}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#2D6A4F",
                      textDecoration: "none",
                    }}
                  >
                    View Market →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 3. MARKET INTELLIGENCE ────────────────────────────────────────── */}
      <section style={{ padding: "100px 64px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <SectionLabel>Market Intelligence</SectionLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              Global Capital Flows &amp; Sector Reports
            </h2>
            <a
              href="/research"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2D6A4F",
                textDecoration: "none",
              }}
            >
              All Research →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "#E5E0D8",
            }}
          >
            {INTELLIGENCE.map((card) => (
              <div key={card.title} className="intel-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#B8A98A",
                    }}
                  >
                    {card.region}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      color: "#9B9590",
                    }}
                  >
                    {card.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: "#1A1A1A",
                    marginBottom: "20px",
                  }}
                >
                  {card.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid #F0EBE3",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#4A7C59",
                      background: "#E8F5EE",
                      padding: "3px 8px",
                    }}
                  >
                    {card.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      color: "#2D6A4F",
                    }}
                  >
                    Request Report →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 4. ACCESS & LOGISTICS ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 64px", background: "#0B1F14" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <SectionLabel>
            <span style={{ color: "#D4AF37" }}>Access &amp; Logistics</span>
          </SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left — description */}
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(32px, 3.5vw, 48px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Every market.
                <br />
                <span style={{ fontStyle: "italic", color: "#7A9E8A" }}>
                  Every detail accounted for.
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#9BB8A8",
                  marginBottom: "40px",
                }}
              >
                For UHNWI and institutional investors, logistical intelligence
                is as important as financial returns. Murivest provides complete
                market access briefs covering aviation, ground transfer, and
                in-market team coordination.
              </p>

              {/* Market selector */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1px",
                  background: "#2D6A4F30",
                }}
              >
                {MARKETS.slice(0, 8).map((market) => (
                  <button
                    key={market.slug}
                    onClick={() => setActiveMarket(market)}
                    style={{
                      background:
                        activeMarket.slug === market.slug ? "#2D6A4F" : "#0F2A1A",
                      border: "none",
                      padding: "14px 8px",
                      cursor: "pointer",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color:
                        activeMarket.slug === market.slug ? "#FFFFFF" : "#4A7C59",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {market.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — travel intelligence card */}
            <div
              style={{
                border: "1px solid #2D6A4F50",
                background: "#0F2A1A",
                padding: "40px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  marginBottom: "8px",
                }}
              >
                Travel Intelligence Brief
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  fontSize: "32px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  marginBottom: "32px",
                }}
              >
                {activeMarket.name}
              </h3>

              {[
                {
                  label: "Nearest Airport",
                  value: activeMarket.airport,
                  icon: "✈",
                },
                {
                  label: "Private Aviation Terminal",
                  value: activeMarket.privateTerminal,
                  icon: "◆",
                },
                {
                  label: "CBD Transfer Time",
                  value: activeMarket.cbdTransfer,
                  icon: "⏱",
                },
                {
                  label: "Helipad Access",
                  value: activeMarket.helipad ? "Available" : "Not Available",
                  icon: "◈",
                },
                {
                  label: "In-Market Team",
                  value: "Murivest Capital Markets",
                  icon: "●",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom: "1px solid #2D6A4F25",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <span style={{ color: "#D4AF37", fontSize: "12px" }}>
                      {row.icon}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#4A7C59",
                      }}
                    >
                      {row.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      textAlign: "right",
                      maxWidth: "200px",
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}

              <div style={{ marginTop: "32px", display: "flex", gap: "2px" }}>
                {activeMarket.assetClasses.map((ac) => (
                  <span
                    key={ac}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                      background: "#1A3D28",
                      padding: "4px 10px",
                      border: "1px solid #2D6A4F40",
                    }}
                  >
                    {ac}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 5. ASSET CLASSES ──────────────────────────────────────────────── */}
      <section style={{ padding: "100px 64px", background: "#FAFAF8" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <SectionLabel>Asset Classes</SectionLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              Institutional Coverage
              <br />
              <span style={{ color: "#6B6B6B", fontStyle: "italic" }}>
                Across All Major Sectors
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1px",
              background: "#E5E0D8",
            }}
          >
            {ASSET_CLASSES.map((ac) => (
              <a
                key={ac.slug}
                href={`/${ac.slug}`}
                className="asset-btn"
              >
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>
                  {ac.icon}
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  {ac.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#2D6A4F",
                  }}
                >
                  Browse →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 6. INVESTMENT OPPORTUNITIES ──────────────────────────────────── */}
      <section style={{ padding: "100px 64px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <SectionLabel>Global Investment Opportunities</SectionLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 400,
                color: "#1A1A1A",
              }}
            >
              Active Investment Pipeline
            </h2>
            <a
              href="/deal-room"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#2D6A4F",
                textDecoration: "none",
              }}
            >
              Enter Deal Room →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "#E5E0D8",
            }}
          >
            {OPPORTUNITIES.map((opp) => (
              <div key={opp.title} className="opp-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#B8A98A",
                    }}
                  >
                    {opp.assetClass}
                  </span>
                  <StatusBadge status={opp.status} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#1A1A1A",
                    marginBottom: "4px",
                  }}
                >
                  {opp.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    color: "#6B6B6B",
                    marginBottom: "28px",
                  }}
                >
                  {opp.location}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    paddingTop: "20px",
                    borderTop: "1px solid #F0EBE3",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#9B9590",
                        marginBottom: "4px",
                      }}
                    >
                      Target Yield
                    </p>
                    <p
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "32px",
                        fontWeight: 400,
                        color: "#2D6A4F",
                      }}
                    >
                      {opp.targetYield}%
                    </p>
                  </div>
                  <a
                    href="/deal-room"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      background: "#1A1A1A",
                      padding: "10px 20px",
                      textDecoration: "none",
                    }}
                  >
                    Request NDA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 7. CAPITAL FLOWS DASHBOARD ────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 64px",
          background: "#F4F0E8",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <SectionLabel>Capital Flows Dashboard</SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              color: "#1A1A1A",
              marginBottom: "64px",
            }}
          >
            Murivest at Scale
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px",
              background: "#D4C8B4",
            }}
          >
            {[
              { value: 1.2, prefix: "$", suffix: "B+", label: "Assets Under Advisory" },
              { value: 70, prefix: "", suffix: "+", label: "Markets Covered" },
              { value: 9, prefix: "", suffix: "", label: "Asset Classes" },
              { value: 120, prefix: "", suffix: "+", label: "Investment Opportunities" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#FFFDF8",
                  padding: "48px 40px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontSize: "56px",
                    fontWeight: 400,
                    color: "#2D6A4F",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {stat.prefix}
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#9B9590",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 8. INSTITUTIONAL PROCESS ──────────────────────────────────────── */}
      <section style={{ padding: "100px 64px", background: "#FAFAF8" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <SectionLabel>Institutional Transaction Process</SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              color: "#1A1A1A",
              marginBottom: "64px",
            }}
          >
            How Mandates Move
            <br />
            <span style={{ fontStyle: "italic", color: "#6B6B6B" }}>
              From Origination to Close
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              borderTop: "1px solid #E5E0D8",
              borderLeft: "1px solid #E5E0D8",
            }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className="process-step"
                style={{
                  borderRight: "1px solid #E5E0D8",
                  borderBottom: "1px solid #E5E0D8",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#E5E0D8",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  {step.number}
                </p>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: "#9B9590",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 9. FINAL CTA ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0B1F14",
          padding: "120px 64px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "32px",
            }}
          >
            Qualified Access Only
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            Access Institutional
            <br />
            <span style={{ fontStyle: "italic", color: "#7A9E8A" }}>
              Opportunities
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#9BB8A8",
              marginBottom: "56px",
            }}
          >
            Reserved for qualified purchasers, family offices, private equity
            real estate firms, pension funds, and sovereign capital vehicles.
            All enquiries are subject to verification and NDA execution.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/deal-room" className="cta-btn-primary">
              Enter Deal Room
            </a>
            <a href="/investment-pipeline" className="cta-btn-ghost-light">
              View Investment Pipeline
            </a>
          </div>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              color: "#3A5E48",
              marginTop: "48px",
              letterSpacing: "0.05em",
            }}
          >
            Murivest Realty Group Ltd — Nairobi, Kenya · murivest.com ·{" "}
            capital@murivest.co.ke
          </p>
        </div>
      </section>
    </main>
  );
}
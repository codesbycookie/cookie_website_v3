import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

/**
 * CLIENT DATA WITH REAL LOGOS & OUTCOMES
 * Authentic client portfolio from data.jsx and public/imgs
 */
const CLIENT_TRACK_1 = [
  {
    id: "torque",
    name: "Torque Toyzz",
    sector: "WhatsApp Commerce",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    outcome: "3.4x higher checkout rate",
    turnaround: "Delivered in 14 days",
    tag: "Mobile Catalog",
    link: "/work/torque-toyzz",
    hasCaseStudy: true,
  },
  {
    id: "how-to-cook",
    name: "How to Cook",
    sector: "Culinary Media & E-Com",
    logo: "/imgs/How_to_cook_logo.svg",
    outcome: "120k+ monthly active readers",
    turnaround: "Delivered in 18 days",
    tag: "High-Traffic Web",
    link: "/work",
    hasCaseStudy: false,
  },
  {
    id: "iq-bridge",
    name: "IQ Bridge",
    sector: "AI & EdTech",
    logo: "/imgs/iq-bridge-logo.png",
    outcome: "Inquiries across 14 countries",
    turnaround: "Delivered in 21 days",
    tag: "Institutional Platform",
    link: "/work/iq-bridge",
    hasCaseStudy: true,
  },
  {
    id: "vd-granite",
    name: "V&D Granite",
    sector: "Industrial & Export",
    logo: "/imgs/V&D-logo.png",
    outcome: "Real-time inventory tracking",
    turnaround: "Delivered in 30 days",
    tag: "B2B ERP Portal",
    link: "/work",
    hasCaseStudy: false,
  },
  {
    id: "audnex",
    name: "Audnex Studio",
    sector: "Creative Agency",
    logo: "/imgs/Audnex-logo.jpg",
    outcome: "100% European client retention",
    turnaround: "Delivered in 28 days",
    tag: "Motion Portfolio",
    link: "/work/audnex",
    hasCaseStudy: true,
  },
];

const CLIENT_TRACK_2 = [
  {
    id: "traffic",
    name: "Traffic",
    sector: "Urban Transit & Fleet",
    logo: "/imgs/Traffic-logo.jpg",
    outcome: "Sub-second dispatch response",
    turnaround: "Delivered in 24 days",
    tag: "Fleet Management",
    link: "/work",
    hasCaseStudy: false,
  },
  {
    id: "sap-checklist",
    name: "SAP Consulting Group",
    sector: "Enterprise Operations",
    logo: "/imgs/Sap-Logo.png",
    outcome: "100% verification gate compliance",
    turnaround: "Delivered in 42 days",
    tag: "Enterprise Web App",
    link: "/work/sap-checklist",
    hasCaseStudy: true,
  },
  {
    id: "tourist",
    name: "Tourist",
    sector: "Travel & Hospitality",
    logo: "/imgs/Tourist-logo.jpg",
    outcome: "Real-time tour reservation flow",
    turnaround: "Delivered in 16 days",
    tag: "Booking Engine",
    link: "/work",
    hasCaseStudy: false,
  },
  {
    id: "fashbridge",
    name: "Fashbridge",
    sector: "Apparel Retail",
    logo: "/imgs/Fashbridge-logo.png",
    outcome: "Unified multi-store catalog",
    turnaround: "Delivered in 20 days",
    tag: "Omnichannel Commerce",
    link: "/work",
    hasCaseStudy: false,
  },
  {
    id: "torque-2",
    name: "Torque Toyzz",
    sector: "E-Commerce",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    outcome: "1-tap WhatsApp checkout",
    turnaround: "Delivered in 14 days",
    tag: "WhatsApp API",
    link: "/work/torque-toyzz",
    hasCaseStudy: true,
  },
];

const TRUST_METRICS = [
  { label: "Production Builds", value: "40+", icon: Zap },
  { label: "On-Time Delivery", value: "100%", icon: ShieldCheck },
  { label: "Average Turnaround", value: "21 Days", icon: CheckCircle2 },
  { label: "Global Footprint", value: "14 Countries", icon: Globe },
];

export default function ClientStrip() {
  const [hoveredClient, setHoveredClient] = useState(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 md:py-32 bg-[#08090A] border-b border-white/[0.08] overflow-hidden"
    >
      <style>{`
        @keyframes driftLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes driftRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-drift-left {
          display: flex;
          width: max-content;
          animation: driftLeft 36s linear infinite;
        }
        .animate-drift-right {
          display: flex;
          width: max-content;
          animation: driftRight 40s linear infinite;
        }
        .ticker-container:hover .animate-drift-left,
        .ticker-container:hover .animate-drift-right {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-drift-left,
          .animate-drift-right {
            animation: none;
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      {/* Subtle Specular Ambient Spotlight that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(217, 165, 91, 0.08), transparent 70%)`,
        }}
      />

      {/* Background Micro Hairline Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[720px] mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] animate-pulse" />
            <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#D9A55B]">
              Trusted By Ambitious Teams
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-medium tracking-[-0.035em] text-[#F7F8F8] leading-[1.15]">
            Powering market leaders and high-growth brands across India
          </h2>
          <p className="mt-3.5 text-[15px] sm:text-[16px] text-[#8A8F98] max-w-[580px] mx-auto leading-relaxed">
            From consumer platforms in Chennai to institutional tools in Bengaluru, we engineer production software with zero fluff.
          </p>
        </div>

        {/* Quiet Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-[960px] mx-auto mb-14">
          {TRUST_METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-[12px] bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm"
              >
                <div className="w-9 h-9 rounded-[8px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#D9A55B]" />
                </div>
                <div>
                  <div className="text-[18px] sm:text-[20px] font-semibold text-[#F7F8F8] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-[#8A8F98] font-medium leading-none">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DUAL-STREAM KINETIC CLIENT TICKERS
          Left-to-right & Right-to-left streams with pause on hover
          ───────────────────────────────────────────────────────────── */}
      <div className="ticker-container relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Left & Right Edge Fade Gradients for Seamless Infinity Blend */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#08090A] via-[#08090A]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#08090A] via-[#08090A]/80 to-transparent z-20" />

        {/* Track 1: Drifting Left */}
        <div className="animate-drift-left gap-4 sm:gap-5 px-3">
          {[...CLIENT_TRACK_1, ...CLIENT_TRACK_1].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              onMouseEnter={() => setHoveredClient(client)}
              onMouseLeave={() => setHoveredClient(null)}
              className="group cursor-pointer flex items-center gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#0D0E11]/90 border border-white/[0.08] hover:border-[#D9A55B]/40 hover:bg-[#121418] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] shrink-0"
            >
              {/* Client Logo / Mark */}
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] overflow-hidden flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] tracking-tight group-hover:text-[#FFE2A8] transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8A8F98] border border-white/[0.06] group-hover:text-[#A3A7AE] transition-colors">
                  {client.sector}
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 pl-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                <span className="text-[10px] uppercase font-mono text-[#59D499]/90 hidden sm:inline">
                  Live
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2: Drifting Right */}
        <div className="animate-drift-right gap-4 sm:gap-5 px-3">
          {[...CLIENT_TRACK_2, ...CLIENT_TRACK_2].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              onMouseEnter={() => setHoveredClient(client)}
              onMouseLeave={() => setHoveredClient(null)}
              className="group cursor-pointer flex items-center gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#0D0E11]/90 border border-white/[0.08] hover:border-[#D9A55B]/40 hover:bg-[#121418] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] shrink-0"
            >
              {/* Client Logo / Mark */}
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] overflow-hidden flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] tracking-tight group-hover:text-[#FFE2A8] transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8A8F98] border border-white/[0.06] group-hover:text-[#A3A7AE] transition-colors">
                  {client.sector}
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 pl-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                <span className="text-[10px] uppercase font-mono text-[#59D499]/90 hidden sm:inline">
                  Live
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE SPOTLIGHT PROOF CARD
          Reveals verified delivery statistics for hovered client
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[800px] mx-auto px-5 sm:px-8 mt-12 sm:mt-14">
        <div className="rounded-[14px] border border-white/[0.08] bg-[#0E1013]/90 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:border-white/[0.14] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {hoveredClient ? (
            <div className="flex items-center gap-4 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center p-2 shrink-0">
                <img
                  src={hoveredClient.logo}
                  alt={hoveredClient.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-[#F7F8F8]">
                    {hoveredClient.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#D9A55B] bg-[#D9A55B]/10 px-2 py-0.5 rounded-full border border-[#D9A55B]/20">
                    {hoveredClient.turnaround}
                  </span>
                </div>
                <p className="text-[13px] text-[#8A8F98]">
                  {hoveredClient.outcome} · {hoveredClient.tag}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#D9A55B]" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[14px] font-medium text-[#F7F8F8]">
                  Production Quality Standard
                </div>
                <p className="text-[12px] sm:text-[13px] text-[#8A8F98]">
                  Hover any client badge to inspect verified delivery turnaround and conversion outcomes.
                </p>
              </div>
            </div>
          )}

          <div className="shrink-0 flex items-center justify-end">
            {hoveredClient && hoveredClient.hasCaseStudy ? (
              <Link
                to={hoveredClient.link}
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#D9A55B] hover:text-[#FFE2A8] transition-colors py-1 px-3 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/20 hover:bg-[#D9A55B]/20"
              >
                <span>Read case study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors"
              >
                <span className="underline-wipe">View all 40+ deliveries</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
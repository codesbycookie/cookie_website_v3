import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Globe,
} from "lucide-react";

const FLAGSHIP_PROJECTS = [
  {
    id: "torque",
    name: "Torque Toyzz",
    domain: "Luxury Commerce & Mobile Web",
    headline: "Eliminated mobile checkout drop-offs by routing buyers straight into WhatsApp with pre-filled SKU data.",
    narrative:
      "Torque Toyzz needed an ultra-fast storefront for premium RC cars and hobby drones. Traditional multi-step checkouts were killing mobile sales. Cookie engineered a high-velocity catalog with instantaneous search and direct WhatsApp order confirmation, driving conversion up 3.4x in the first two weeks.",
    metrics: [
      { label: "Order Conversion", value: "3.4x", sub: "Uplift in 14 days", icon: TrendingUp },
      { label: "MVP Delivery", value: "14 Days", sub: "Kickoff to production", icon: Clock },
      { label: "Core Web Vitals", value: "99/100", sub: "Mobile Lighthouse", icon: Zap },
    ],
    features: [
      "Sub-15ms client-side catalog search",
      "1-tap direct WhatsApp checkout handoff",
      "Automated stock & order metadata generation",
      "Zero-downtime Cloudflare edge caching",
    ],
    quote: {
      text: "Orders landing straight in WhatsApp with exact model and quantity is a complete game-changer for our business.",
      author: "Founder, Torque Toyzz",
    },
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    caseStudyUrl: "/work/torque-toyzz",
    liveUrl: "https://torquetoyzz.in",
    stack: ["Next.js", "Tailwind CSS", "WhatsApp Business API", "Edge CDN"],
    badgeColor: "#D9A55B",
  },
  {
    id: "iqbridge",
    name: "IQ Bridge",
    domain: "EdTech AI Assessment Infrastructure",
    headline: "Engineered a high-credibility institutional platform presenting complex AI evaluation engines to universities.",
    narrative:
      "IQ Bridge needed to articulate their proprietary AI assessment technology to institutional deans, educators, and global partners. We structured a clear narrative architecture, interactive assessment modules, and sub-100ms load speeds, expanding their footprint into 14 countries.",
    metrics: [
      { label: "Global Reach", value: "14 Countries", sub: "Institutions onboarded", icon: Globe },
      { label: "Production Launch", value: "21 Days", sub: "Zero technical debt", icon: Clock },
      { label: "Performance", value: "98/100", sub: "Lighthouse certified", icon: Zap },
    ],
    features: [
      "Institutional product demonstration flow",
      "Role-based assessment preview engine",
      "High-security cryptographic test logs",
      "Global CDN edge caching across 4 continents",
    ],
    quote: {
      text: "Clear collaboration from day one. They handled our complex AI platform requirements with unmatched precision.",
      author: "Robin Sighla, Co-Founder IQ Bridge",
    },
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
    caseStudyUrl: "/work/iq-bridge",
    liveUrl: "https://iqbridge.org",
    stack: ["React 19", "Tailwind CSS", "Vite", "Node.js", "PostgreSQL"],
    badgeColor: "#57C1FF",
  },
  {
    id: "vnd",
    name: "V&D Granite",
    domain: "B2B Export Infrastructure & ERP",
    headline: "Automated international RFQs and container load calculations for overseas natural stone buyers.",
    narrative:
      "Replacing fragile paper catalogs and manual WhatsApp calculations, we engineered an international export portal with real-time multi-currency pricing, container tonnage calculators, and automated PDF commercial invoices.",
    metrics: [
      { label: "Quotation Errors", value: "0%", sub: "Automated calculations", icon: ShieldCheck },
      { label: "Launch Window", value: "18 Days", sub: "Full system rollout", icon: Clock },
      { label: "Query Speed", value: "<40ms", sub: "Worldwide access", icon: Zap },
    ],
    features: [
      "Dynamic multi-currency catalog (USD, EUR, AED)",
      "Automated container weight & volume estimator",
      "Instant export commercial invoice generator",
      "Direct buyer inquiry line with live specs",
    ],
    quote: {
      text: "Our international buyers now configure slabs and request accurate export quotes in under three minutes.",
      author: "Director, V&D Granite",
    },
    image: "/imgs/Project-2.png",
    caseStudyUrl: "/work",
    liveUrl: "https://vdgranite.com",
    stack: ["React", "Express", "PostgreSQL", "PDF Engine", "Cloudflare"],
    badgeColor: "#59D499",
  },
];

export default function StudioWindow() {
  const [activeId, setActiveId] = useState("torque");
  const project = FLAGSHIP_PROJECTS.find((p) => p.id === activeId) || FLAGSHIP_PROJECTS[0];

  return (
    <div
      className="beam window-in w-full rounded-[18px] bg-[#090A0D] border border-white/[0.09] overflow-hidden text-left shadow-[0_40px_140px_-20px_rgba(0,0,0,0.95),0_0_90px_-30px_rgba(217,165,91,0.2),inset_0_1px_0_0_rgba(255,255,255,0.09)]"
      role="region"
      aria-label="Flagship Production Project Showcase"
    >
      {/* 1. Header Bar: Showcase Identity + Curated Switcher */}
      <div className="bg-[#0D0E12] border-b border-white/[0.08] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 select-none">
        {/* Left: Window Dots & Category */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 font-mono text-[12px] text-[#8A8F98]">
            <span className="text-[#D9A55B] font-semibold">Cookie Flagship Showcase</span>
            <span className="text-[#62666D]">·</span>
            <span className="text-[#F4F4F6] hidden md:inline">Production Systems Built For Real Businesses</span>
          </div>
        </div>

        {/* Center/Right: Project Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.07]">
          {FLAGSHIP_PROJECTS.map((p) => {
            const isSelected = activeId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                className={`px-3 py-1 rounded-full text-[12px] font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-white/[0.1] text-[#F4F4F6] shadow-sm"
                    : "text-[#8A8F98] hover:text-[#F4F4F6]"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Body: Generous Spacings, Balanced Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Column: Commercial Story & Verified Impact (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#090A0D] border-b lg:border-b-0 lg:border-r border-white/[0.07] flex flex-col justify-between">
          <div>
            {/* Top Tagline */}
            <div className="flex items-center gap-2 mb-4 font-mono text-[11px]">
              <span
                className="px-2.5 py-0.5 rounded-full border text-[11px] font-medium"
                style={{
                  backgroundColor: `${project.badgeColor}15`,
                  borderColor: `${project.badgeColor}40`,
                  color: project.badgeColor,
                }}
              >
                {project.domain}
              </span>
              <span className="text-[#62666D]">·</span>
              <span className="text-[#59D499] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                Live Production
              </span>
            </div>

            <h3 className="text-[22px] sm:text-[26px] font-medium text-[#F4F4F6] tracking-tight leading-[1.25] mb-4">
              {project.headline}
            </h3>

            <p className="text-[14px] text-[#8A8F98] leading-relaxed mb-8">
              {project.narrative}
            </p>

            {/* Impact Metric Cards (Generous Spacing) */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {project.metrics.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] text-center"
                  >
                    <div className="text-[18px] sm:text-[20px] font-semibold text-[#F4F4F6] tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-medium text-[#D9A55B] mt-0.5">
                      {m.label}
                    </div>
                    <div className="text-[10px] text-[#62666D] font-mono mt-0.5 hidden sm:block">
                      {m.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Architectural Highlights */}
            <div className="space-y-2.5 mb-8">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-2">
                What We Engineered
              </div>
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[13px] text-[#D0D6E0]">
                  <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Verified Client Quote */}
            <div className="p-4 rounded-[12px] bg-black/40 border border-white/[0.06] space-y-1.5">
              <p className="text-[13px] text-[#D0D6E0] italic leading-relaxed">
                "{project.quote.text}"
              </p>
              <div className="text-[11px] font-mono text-[#D9A55B]">
                — {project.quote.author}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-8 mt-6 border-t border-white/[0.06] flex items-center justify-between gap-4">
            <Link
              to={project.caseStudyUrl}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#F4F4F6] hover:text-[#D9A55B] transition-colors"
            >
              <span>Read Full Architectural Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <span className="text-[11px] font-mono text-[#62666D]">
              Direct Founder Delivery
            </span>
          </div>
        </div>

        {/* Right Column: Visual Product Experience Preview (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-[#060709] flex flex-col justify-between">
          <div>
            {/* Live Telemetry Bar */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06] text-[12px] font-mono">
              <div className="flex items-center gap-2 text-[#8A8F98]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A55B]" />
                <span>Production Storefront Live Preview</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#59D499] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                  Online
                </span>
                <span className="text-[#62666D] hidden sm:inline">100% Mobile Optimized</span>
              </div>
            </div>

            {/* Framed Interactive Product Visual */}
            <div className="rounded-[14px] overflow-hidden bg-black/70 border border-white/[0.09] shadow-[0_24px_60px_rgba(0,0,0,0.85)] relative group">
              <div className="aspect-[16/10] overflow-hidden bg-black/40 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[12px]">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-[#F4F4F6] font-medium shadow-md">
                    {project.name} — Shipped Product
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#59D499]/20 border border-[#59D499]/40 text-[#59D499] font-mono text-[11px]">
                    Verified Production
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Stack Architecture Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#62666D] mr-1">Stack:</span>
              {project.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-[6px] bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-[#D0D6E0]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Direct CTA */}
          <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[13px] text-[#8A8F98]">
              Want a high-converting product built like this for your company?
            </span>
            <a
              href="https://wa.cookie.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D9A55B] hover:bg-[#e4b46a] text-[#08090A] font-semibold text-[13px] transition-all shadow-[0_0_25px_rgba(217,165,91,0.25)] shrink-0"
            >
              <span>Chat With Our Founders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

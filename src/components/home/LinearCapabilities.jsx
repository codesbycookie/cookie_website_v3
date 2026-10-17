import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Lock,
  ShoppingCart,
  Battery,
} from "lucide-react";
import { Reveal, TiltIn, MOTION_TOKENS } from "../../utils/motion";

/* ─────────────────────────────────────────────────────────────────────────────
   VISUAL 1: Next-Gen Web Application & Storefront (Browser Frame)
   ───────────────────────────────────────────────────────────────────────────── */
function BrowserVisual() {
  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[420px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex flex-col group">
      {/* Browser Chrome Header */}
      <div className="h-10 px-4 bg-[#121316] border-b border-white/[0.06] flex items-center justify-between shrink-0 text-[11px]">
        {/* macOS window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>

        {/* Clean URL Bar */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#08090A] border border-white/[0.06] text-[#8A8F98] text-[11px] font-mono max-w-[280px] w-full mx-3 truncate">
          <Lock className="w-3 h-3 text-[#59D499] shrink-0" />
          <span className="text-[#F7F8F8]">cookie.studio</span>
          <span className="text-[#62666D]">/storefront-app</span>
        </div>

        {/* Lighthouse Badge */}
        <span className="flex items-center gap-1.5 text-[#59D499] font-mono text-[10px] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
          <span>99 Lighthouse</span>
        </span>
      </div>

      {/* Viewport Content */}
      <div className="relative flex-1 p-5 sm:p-6 bg-[#08090A] flex flex-col justify-between space-y-4">
        {/* Hero Card */}
        <div className="p-4 sm:p-5 rounded-[14px] bg-white/[0.02] border border-white/[0.07] space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/20 text-[10px] font-medium text-[#D9A55B]">
              <span>Next-Gen React Web App</span>
            </span>
            <span className="text-[11px] font-mono text-[#59D499]">Sub-Second Render</span>
          </div>

          <div className="space-y-1">
            <h4 className="text-[16px] sm:text-[18px] font-medium text-[#F7F8F8]">
              High-Conversion Digital Storefront
            </h4>
            <p className="text-[12px] sm:text-[13px] text-[#8A8F98] leading-relaxed">
              Built with server-side pre-rendering, instant client hydration, and zero-latency routing.
            </p>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <div className="px-3.5 py-1.5 rounded-full bg-[#D9A55B] text-[#08090A] font-semibold text-[11px]">
              Explore Platform
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#8A8F98] text-[11px]">
              100% PWA Compliance
            </div>
          </div>
        </div>

        {/* Feature Metric Tiles */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-3 rounded-[10px] bg-white/[0.015] border border-white/[0.05] space-y-1">
            <div className="text-[10px] font-mono text-[#62666D]">Core Web Vitals</div>
            <div className="text-[13px] font-semibold text-[#59D499]">0.4s LCP</div>
          </div>
          <div className="p-3 rounded-[10px] bg-white/[0.015] border border-white/[0.05] space-y-1">
            <div className="text-[10px] font-mono text-[#62666D]">SEO Audit</div>
            <div className="text-[13px] font-semibold text-[#D9A55B]">100 / 100</div>
          </div>
          <div className="p-3 rounded-[10px] bg-white/[0.015] border border-white/[0.05] space-y-1">
            <div className="text-[10px] font-mono text-[#62666D]">Checkout Jump</div>
            <div className="text-[13px] font-semibold text-[#57C1FF]">3.4x Higher</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   VISUAL 2: Authentic Modern Smartphone (iOS/Android) with Live Dynamic Island
   100% visible on mobile screens & desktop, realistic chassis, zero clipping.
   ───────────────────────────────────────────────────────────────────────────── */
function MobileVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-[480px] sm:min-h-[520px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex items-center justify-center p-5 sm:p-8">
      {/* Subtle backdrop grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      {/* Realistic Smartphone Chassis */}
      <div className="relative w-[240px] sm:w-[260px] h-[430px] sm:h-[450px] rounded-[42px] bg-[#14161A] p-[6px] shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-white/[0.14] shrink-0">
        {/* Left Side Buttons (Volume Up/Down) */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-7 bg-white/20 rounded-l-sm" />
        <div className="absolute -left-[3px] top-33 w-[3px] h-7 bg-white/20 rounded-l-sm" />
        {/* Right Side Button (Power) */}
        <div className="absolute -right-[3px] top-28 w-[3px] h-11 bg-white/20 rounded-r-sm" />

        {/* Inner OLED Screen Container */}
        <div className="relative w-full h-full rounded-[36px] bg-[#08090C] overflow-hidden flex flex-col justify-between border border-black text-[#F7F8F8]">
          {/* Status Bar */}
          <div className="h-9 px-5 pt-1.5 flex items-center justify-between text-[11px] font-medium shrink-0 z-20">
            <span className="font-semibold tracking-tight text-white/90">9:41</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-18 h-4 rounded-full bg-black flex items-center justify-between px-2 shrink-0 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#57C1FF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Signal & Battery */}
            <div className="flex items-center gap-1.5 text-white/80">
              <span className="text-[9px] font-bold tracking-tight">5G</span>
              <Battery className="w-3.5 h-3.5 text-white/90" />
            </div>
          </div>

          {/* Interactive Floating Notification */}
          <div className="px-3 pt-1">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [-12, 0, 0, -12],
                      opacity: [0, 1, 1, 0],
                      scale: [0.94, 1, 1, 0.94],
                    }
              }
              transition={{ duration: 4.5, repeat: Infinity, ease: MOTION_TOKENS.ease }}
              className="p-2 rounded-[14px] bg-[#181A20] border border-white/10 shadow-lg flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center shrink-0">
                <Bell className="w-3 h-3 text-[#59D499]" />
              </div>
              <div className="overflow-hidden flex-1 leading-tight">
                <div className="text-[10px] font-semibold text-white">Order Confirmed</div>
                <div className="text-[9px] text-[#8A8F98]">₹2,499 via WhatsApp Sync</div>
              </div>
              <span className="text-[8px] font-mono text-[#59D499] bg-[#59D499]/10 px-1.5 py-0.5 rounded-full">
                Live
              </span>
            </motion.div>
          </div>

          {/* App Body Content */}
          <div className="flex-1 px-3 py-2 space-y-2.5 overflow-hidden">
            {/* Store Top Bar */}
            <div className="flex items-center justify-between px-1">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#D9A55B] font-mono block">
                  E-Commerce App
                </span>
                <span className="text-[13px] font-semibold text-white">Torque Store</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80">
                <ShoppingCart className="w-3.5 h-3.5 text-[#D9A55B]" />
              </div>
            </div>

            {/* Featured Product Card */}
            <div className="p-2.5 rounded-[16px] bg-[#121419] border border-white/[0.08] space-y-2">
              <div className="relative rounded-[10px] bg-black/60 overflow-hidden h-20 border border-white/[0.04]">
                <img
                  src="https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png"
                  alt="Product preview"
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="80"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-[8px] font-mono text-[#59D499]">
                  3.4x Checkout
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-white">Instant WhatsApp Buy</div>
                  <div className="text-[9px] text-[#8A8F98]">0-redirect native checkout</div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#D9A55B] text-[#08090A] text-[10px] font-semibold">
                  Buy
                </div>
              </div>
            </div>

            {/* Live Synchronized Metrics Pill */}
            <div className="p-2 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[10px]">
              <span className="text-[#8A8F98] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                <span>Sync with iOS & Android</span>
              </span>
              <span className="font-mono text-[#59D499]">60 FPS</span>
            </div>
          </div>

          {/* Native Bottom Dock Bar & Home Indicator */}
          <div className="px-4 pb-2 pt-1 border-t border-white/[0.06] bg-[#0B0C10] shrink-0">
            <div className="flex items-center justify-around text-[#8A8F98] py-1">
              <span className="text-[10px] text-[#D9A55B] font-semibold">Store</span>
              <span className="text-[10px]">Search</span>
              <span className="text-[10px]">Orders</span>
              <span className="text-[10px]">Profile</span>
            </div>
            {/* iPhone Home Indicator Line */}
            <div className="w-20 h-1 rounded-full bg-white/30 mx-auto mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   VISUAL 3: Custom Business Systems & Operations Dashboard
   ───────────────────────────────────────────────────────────────────────────── */
function SystemVisual() {
  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[420px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex flex-col p-5 sm:p-6 justify-between group">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#59D499] animate-pulse" />
          <span className="font-medium text-[#F7F8F8]">SAP Operations Checklist System</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#59D499]/10 border border-[#59D499]/20 text-[#59D499] font-medium text-[10px]">
          100% Gate Compliance
        </span>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-3 gap-2.5 my-3">
        <div className="p-3 rounded-[10px] bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[10px] text-[#62666D] font-mono">Verification</div>
          <div className="text-[15px] font-semibold text-[#F7F8F8] tracking-tight">142 Gates</div>
        </div>
        <div className="p-3 rounded-[10px] bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[10px] text-[#62666D] font-mono">Sync Latency</div>
          <div className="text-[15px] font-semibold text-[#59D499] tracking-tight">18 ms</div>
        </div>
        <div className="p-3 rounded-[10px] bg-white/[0.02] border border-white/[0.06]">
          <div className="text-[10px] text-[#62666D] font-mono">Legacy Errors</div>
          <div className="text-[15px] font-semibold text-[#D9A55B] tracking-tight">0.0%</div>
        </div>
      </div>

      {/* Workflow Stage Steps */}
      <div className="space-y-2 py-2">
        <div className="flex items-center justify-between text-[11px] text-[#8A8F98] font-mono">
          <span>Automated Verification Pipeline</span>
          <span className="text-[#59D499]">PostgreSQL Cluster Live</span>
        </div>

        <div className="space-y-1.5">
          {[
            { step: "01. Intake Audit", status: "Verified", time: "12ms" },
            { step: "02. Gate Compliance", status: "Automated", time: "18ms" },
            { step: "03. Cloud Export", status: "Synced", time: "24ms" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-[8px] bg-white/[0.015] border border-white/[0.04] flex items-center justify-between text-[11px]"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                <span className="text-[#F7F8F8] font-medium">{item.step}</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px]">
                <span className="text-[#59D499] bg-[#59D499]/10 px-2 py-0.5 rounded-full">
                  {item.status}
                </span>
                <span className="text-[#62666D]">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#62666D] font-mono">
        <span>Tangled spreadsheets replaced</span>
        <span className="text-[#8A8F98]">Zero manual data loss</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   VISUAL 4: Brand Identity & Scalable Component Architecture
   ───────────────────────────────────────────────────────────────────────────── */
function BrandVisual() {
  const shouldReduceMotion = useReducedMotion();

  const SWATCHES = [
    { name: "Obsidian", hex: "#08090A", bg: "#08090A", border: "rgba(255,255,255,0.12)" },
    { name: "Warm Amber", hex: "#D9A55B", bg: "#D9A55B" },
    { name: "Electric Cyan", hex: "#57C1FF", bg: "#57C1FF" },
    { name: "Mint", hex: "#59D499", bg: "#59D499" },
    { name: "Primary White", hex: "#F7F8F8", bg: "#F7F8F8" },
  ];

  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[420px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex flex-col justify-between p-5 sm:p-6 group">
      {/* Design System Header */}
      <div className="w-full flex items-center justify-between text-[11px] text-[#62666D] border-b border-white/[0.06] pb-3">
        <span className="font-medium text-[#F7F8F8]">Cookie Design Token Architecture</span>
        <span className="font-mono text-[#D9A55B]">v2.6 Geometry System</span>
      </div>

      {/* Interactive Token Palette & Component Showcase */}
      <div className="grid grid-cols-2 gap-3 my-auto py-2">
        {/* Left: Geometric Mark with measurement bounds */}
        <div className="p-4 rounded-[12px] bg-white/[0.015] border border-white/[0.05] flex flex-col items-center justify-center relative">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Dashed measurement circle */}
            <motion.div
              animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#D9A55B]/30"
            />
            {/* Geometric diamond */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [45, 225, 45],
                      scale: [0.92, 1.06, 0.92],
                    }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-[8px] border border-[#57C1FF]/40 bg-[#57C1FF]/05"
            />
            {/* Core mark */}
            <div className="absolute w-5 h-5 rounded-full bg-[#D9A55B] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#08090A]" />
            </div>
          </div>
          <span className="text-[10px] font-mono text-[#62666D] mt-2">Scale: 1:1 Vector Ratio</span>
        </div>

        {/* Right: Component System Tokens */}
        <div className="p-3 rounded-[12px] bg-white/[0.015] border border-white/[0.05] space-y-2 flex flex-col justify-center">
          <div className="text-[10px] font-mono text-[#62666D] uppercase">Button Tokens</div>
          <div className="p-2 rounded-full bg-[#D9A55B] text-[#08090A] text-center text-[10px] font-semibold">
            Primary Action
          </div>
          <div className="p-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#F7F8F8] text-center text-[10px]">
            Ghost Hairline
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8F98] pt-1">
            <span>Border Radius</span>
            <span className="text-[#D9A55B]">9999px</span>
          </div>
        </div>
      </div>

      {/* Curated color-swatch row */}
      <div className="w-full pt-3 border-t border-white/[0.06]">
        <div className="flex items-center justify-between gap-2">
          {SWATCHES.map((swatch) => (
            <div key={swatch.hex} className="flex-1 text-center group/swatch">
              <div
                className="h-6 rounded-[6px] mb-1.5 transition-transform duration-200 group-hover/swatch:scale-105"
                style={{
                  backgroundColor: swatch.bg,
                  border: swatch.border ? `1px solid ${swatch.border}` : "none",
                }}
              />
              <span className="text-[10px] font-mono text-[#62666D] group-hover/swatch:text-[#8A8F98] block truncate">
                {swatch.hex}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CAPABILITIES DATA SPECIFICATION
   ───────────────────────────────────────────────────────────────────────────── */
const CAPABILITIES = [
  {
    label: "Websites & Web Apps",
    headlineWhite: "Fast to load,",
    headlineGrey: "structured for conversion.",
    description:
      "High-performance web apps built with modern React. Fast to load, easy to index, and structured for conversion.",
    visual: BrowserVisual,
  },
  {
    label: "Mobile Applications",
    headlineWhite: "iOS and Android apps",
    headlineGrey: "with native responsiveness.",
    description:
      "One unified codebase that runs reliably in production. Smooth navigation, offline caching, and responsive interactions on any smartphone.",
    visual: MobileVisual,
  },
  {
    label: "Custom Business Systems",
    headlineWhite: "Turn manual spreadsheets",
    headlineGrey: "into real-time tools.",
    description:
      "We replace tangled sheets, manual tracking, and clunky software with tailored internal tools, automated workflows, and real-time dashboards.",
    visual: SystemVisual,
  },
  {
    label: "Brand Identity & Systems",
    headlineWhite: "Visual identities",
    headlineGrey: "that make your product memorable.",
    description:
      "Clean visual identities, design tokens, and scalable component systems that give your business authority across every touchpoint.",
    visual: BrandVisual,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT: Tightened Spacing, Balanced Heights, 100% Mobile Visibility
   ───────────────────────────────────────────────────────────────────────────── */
export default function LinearCapabilities() {
  return (
    <section
      id="capabilities"
      data-section="capabilities"
      className="w-full py-16 md:py-24 px-5 sm:px-8 bg-[#08090A] border-t border-white/[0.08] relative"
    >
      <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-24">
        {CAPABILITIES.map((cap, index) => {
          const isEven = index % 2 === 1; // Alternating layout
          const VisualComponent = cap.visual;

          return (
            <div
              key={cap.label}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:col-start-8" : "lg:col-start-1"
                }`}
              >
                <Reveal direction="up">
                  {/* Small uppercase label */}
                  <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-3">
                    {cap.label}
                  </span>

                  {/* Two-tone headline */}
                  <h3 className="text-[26px] sm:text-[32px] xl:text-[36px] font-medium tracking-[-0.035em] leading-[1.18] mb-4">
                    <span className="text-[#F7F8F8]">{cap.headlineWhite} </span>
                    <span className="text-[#8A8F98]">{cap.headlineGrey}</span>
                  </h3>

                  {/* One short paragraph */}
                  <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-[1.6] mb-6">
                    {cap.description}
                  </p>

                  {/* Learn more link: arrow slides, underline wipes */}
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#F7F8F8] hover:text-[#D9A55B] transition-colors"
                  >
                    <span className="underline-wipe">Learn more about our approach</span>
                    <ArrowRight className="w-4 h-4 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>

              {/* Framed Visual with TiltIn Entrance */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? "lg:col-start-1" : "lg:col-start-6"
                }`}
              >
                <TiltIn>
                  <VisualComponent />
                </TiltIn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

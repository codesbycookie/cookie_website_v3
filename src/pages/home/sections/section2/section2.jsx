import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Lock,
  ShoppingCart,
  Battery,
  Check,
  Command,
  Sparkles,
} from "lucide-react";
import { Reveal, TiltIn, MOTION_TOKENS } from "../../../../utils/motion.util";

/* ─────────────────────────────────────────────────────────────────────────────
   VISUAL 1: Next-Gen Web Application & Storefront (Browser Frame)
   ───────────────────────────────────────────────────────────────────────────── */
function BrowserVisual() {
  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[420px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex flex-col group">
      {/* Browser Chrome Header */}
      <div className="h-10 px-3 sm:px-4 bg-[#121316] border-b border-white/[0.06] flex items-center justify-between shrink-0 text-[11px] gap-2">
        {/* macOS window controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>

        {/* Clean URL Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-[6px] bg-[#08090A] border border-white/[0.06] text-[#8A8F98] text-[10px] sm:text-[11px] font-mono flex-1 min-w-0 max-w-[280px] mx-1 sm:mx-3 truncate">
          <Lock className="w-3 h-3 text-[#59D499] shrink-0" />
          <span className="text-[#F7F8F8] truncate">cookie.studio</span>
          <span className="text-[#62666D] hidden xs:inline truncate">/storefront-app</span>
        </div>

        {/* Lighthouse Badge */}
        <span className="flex items-center gap-1.5 text-[#59D499] font-mono text-[9px] sm:text-[10px] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
          <span className="hidden xs:inline">99 Lighthouse</span>
          <span className="xs:hidden">99</span>
        </span>
      </div>

      {/* Viewport Content */}
      <div className="relative flex-1 p-3.5 sm:p-6 bg-[#08090A] flex flex-col justify-between space-y-3 sm:space-y-4">
        {/* Hero Card */}
        <div className="p-3.5 sm:p-5 rounded-[14px] bg-white/[0.02] border border-white/[0.07] space-y-2.5 sm:space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/20 text-[9px] sm:text-[10px] font-medium text-[#D9A55B] shrink-0">
              <span>Next-Gen React Web App</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#59D499] shrink-0">
              Sub-Second Render
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-[15px] sm:text-[18px] font-medium text-[#F7F8F8] leading-snug">
              High-Conversion Digital Storefront
            </h4>
            <p className="text-[11px] sm:text-[13px] text-[#8A8F98] leading-relaxed">
              Built with server-side pre-rendering, instant client hydration, and zero-latency routing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="px-3 py-1.5 rounded-full bg-[#D9A55B] text-[#08090A] font-semibold text-[10px] sm:text-[11px]">
              Explore Platform
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#8A8F98] text-[10px] sm:text-[11px]">
              100% PWA Compliance
            </div>
          </div>
        </div>

        {/* Feature Metric Tiles */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
          <div className="p-2 sm:p-3 rounded-[10px] bg-white/[0.015] border border-white/[0.05] space-y-0.5 sm:space-y-1">
            <div className="text-[9px] sm:text-[10px] font-mono text-[#62666D] truncate">Core Vitals</div>
            <div className="text-[11px] sm:text-[13px] font-semibold text-[#59D499]">0.4s LCP</div>
          </div>
          <div className="p-2 sm:p-3 rounded-[10px] bg-white/[0.015] border border-white/[0.05] space-y-0.5 sm:space-y-1">
            <div className="text-[9px] sm:text-[10px] font-mono text-[#62666D] truncate">SEO Audit</div>
            <div className="text-[11px] sm:text-[13px] font-semibold text-[#D9A55B]">100 / 100</div>
          </div>
          <div className="p-2 sm:p-3 rounded-[10px] bg-white/[0.015] border border-white/[0.05] space-y-0.5 sm:space-y-1">
            <div className="text-[9px] sm:text-[10px] font-mono text-[#62666D] truncate">Checkout</div>
            <div className="text-[11px] sm:text-[13px] font-semibold text-[#57C1FF]">3.4x Higher</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   VISUAL 2: Authentic Modern Smartphone (iOS/Android) with Live Dynamic Island
   100% visible on mobile screens & desktop, realistic chassis, scaled up prominently.
   ───────────────────────────────────────────────────────────────────────────── */
function MobileVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full min-h-[560px] xs:min-h-[580px] sm:min-h-[620px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex items-center justify-center p-3 xs:p-4 sm:p-8">
      {/* Subtle backdrop grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      {/* Realistic Smartphone Chassis - Bold & Prominently Scaled */}
      <div className="relative w-[285px] xs:w-[305px] sm:w-[325px] h-[525px] xs:h-[555px] sm:h-[580px] rounded-[44px] sm:rounded-[48px] bg-[#14161A] p-[7px] sm:p-[8px] shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-white/[0.14] shrink-0">
        {/* Left Side Buttons (Volume Up/Down) */}
        <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-white/20 rounded-l-sm" />
        <div className="absolute -left-[3px] top-39 w-[3px] h-8 bg-white/20 rounded-l-sm" />
        {/* Right Side Button (Power) */}
        <div className="absolute -right-[3px] top-32 w-[3px] h-12 bg-white/20 rounded-r-sm" />

        {/* Inner OLED Screen Container */}
        <div className="relative w-full h-full rounded-[38px] sm:rounded-[40px] bg-[#08090C] overflow-hidden flex flex-col justify-between border border-black text-[#F7F8F8]">
          {/* Status Bar */}
          <div className="h-10 px-6 pt-2 flex items-center justify-between text-[11px] font-medium shrink-0 z-20">
            <span className="font-semibold tracking-tight text-white/90">9:41</span>

            {/* Dynamic Island Pill */}
            <div className="w-20 h-4.5 rounded-full bg-black flex items-center justify-between px-2.5 shrink-0 border border-white/10">
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
          <div className="px-3.5 pt-1">
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
              className="p-2.5 rounded-[16px] bg-[#181A20] border border-white/10 shadow-lg flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center shrink-0">
                <Bell className="w-3.5 h-3.5 text-[#59D499]" />
              </div>
              <div className="overflow-hidden flex-1 leading-tight">
                <div className="text-[11px] font-semibold text-white">Order Confirmed</div>
                <div className="text-[10px] text-[#8A8F98]">₹2,499 via WhatsApp Sync</div>
              </div>
              <span className="text-[9px] font-mono text-[#59D499] bg-[#59D499]/10 px-2 py-0.5 rounded-full">
                Live
              </span>
            </motion.div>
          </div>

          {/* App Body Content */}
          <div className="flex-1 px-3.5 py-2.5 space-y-3 overflow-hidden">
            {/* Store Top Bar */}
            <div className="flex items-center justify-between px-1">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D9A55B] font-mono block">
                  E-Commerce App
                </span>
                <span className="text-[14px] font-semibold text-white">Torque Store</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80">
                <ShoppingCart className="w-4 h-4 text-[#D9A55B]" />
              </div>
            </div>

            {/* Featured Product Card */}
            <div className="p-3 rounded-[18px] bg-[#121419] border border-white/[0.08] space-y-2.5">
              <div className="relative rounded-[12px] bg-black/60 overflow-hidden h-24 sm:h-28 border border-white/[0.04]">
                <img
                  src="https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png"
                  alt="Product preview"
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="112"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-[#59D499]">
                  3.4x Checkout
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] font-medium text-white">Instant WhatsApp Buy</div>
                  <div className="text-[10px] text-[#8A8F98]">0-redirect native checkout</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#D9A55B] text-[#08090A] text-[11px] font-semibold">
                  Buy
                </div>
              </div>
            </div>

            {/* Live Synchronized Metrics Pill */}
            <div className="p-2.5 rounded-[12px] bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-[#8A8F98] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                <span>Sync with iOS & Android</span>
              </span>
              <span className="font-mono text-[#59D499]">60 FPS</span>
            </div>
          </div>

          {/* Native Bottom Dock Bar & Home Indicator */}
          <div className="px-5 pb-2.5 pt-1.5 border-t border-white/[0.06] bg-[#0B0C10] shrink-0">
            <div className="flex items-center justify-around text-[#8A8F98] py-1">
              <span className="text-[11px] text-[#D9A55B] font-semibold">Store</span>
              <span className="text-[11px]">Search</span>
              <span className="text-[11px]">Orders</span>
              <span className="text-[11px]">Profile</span>
            </div>
            {/* iPhone Home Indicator Line */}
            <div className="w-24 h-1 rounded-full bg-white/30 mx-auto mt-1.5" />
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
   Interactive Brand Token Sandbox:
   • Live Dynamic Palette Token Engine (Amber Gold, Electric Cyan, Mint, Amethyst)
   • Dynamic Corner Radius Variables (Sharp 4px, Smooth 10px, Pill 9999px)
   • Live Interactive Component Playground (Primary Action, Ghost Hairline, Status Chip, Search ⌘K, Live Switch)
   • Real-Time CSS Token Stream Code Output with 1-Click Copy
   • 0ms Latency, zero GPU overhead, 100% responsive on all mobile & desktop viewports
   ───────────────────────────────────────────────────────────────────────────── */
function BrandVisual() {
  const THEMES = [
    {
      id: "amber",
      name: "Studio Amber",
      hex: "#D9A55B",
      bgAlpha: "rgba(217, 165, 91, 0.12)",
      borderAlpha: "rgba(217, 165, 91, 0.35)",
      glow: "rgba(217, 165, 91, 0.3)",
    },
    {
      id: "cyan",
      name: "Electric Cyan",
      hex: "#57C1FF",
      bgAlpha: "rgba(87, 193, 255, 0.12)",
      borderAlpha: "rgba(87, 193, 255, 0.35)",
      glow: "rgba(87, 193, 255, 0.3)",
    },
    {
      id: "mint",
      name: "Emerald Mint",
      hex: "#59D499",
      bgAlpha: "rgba(89, 212, 153, 0.12)",
      borderAlpha: "rgba(89, 212, 153, 0.35)",
      glow: "rgba(89, 212, 153, 0.3)",
    },
    {
      id: "iris",
      name: "Iris Amethyst",
      hex: "#A78BFA",
      bgAlpha: "rgba(167, 139, 250, 0.12)",
      borderAlpha: "rgba(167, 139, 250, 0.35)",
      glow: "rgba(167, 139, 250, 0.3)",
    },
  ];

  const RADII = [
    { label: "Sharp", value: "4px" },
    { label: "Smooth", value: "10px" },
    { label: "Pill", value: "9999px" },
  ];

  const [activeTheme, setActiveTheme] = useState(THEMES[0]);
  const [activeRadius, setActiveRadius] = useState(RADII[1]); // Default smooth 10px
  const [isToggled, setIsToggled] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [btnFeedback, setBtnFeedback] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handlePrimaryClick = () => {
    setBtnFeedback(true);
    setTimeout(() => setBtnFeedback(false), 1200);
  };

  const handleCopyTokens = () => {
    const cssCode = `:root { --brand: ${activeTheme.hex}; --radius: ${activeRadius.value}; --state: ${isToggled ? "active" : "dormant"}; }`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cssCode).catch(() => {});
    }
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1400);
  };

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[440px] max-w-[560px] mx-auto rounded-[18px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden flex flex-col p-4 sm:p-5 justify-between group select-none">
      {/* Studio Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[11px] gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="w-2 h-2 rounded-full transition-colors duration-300 shrink-0"
            style={{
              backgroundColor: activeTheme.hex,
              boxShadow: `0 0 10px ${activeTheme.hex}`,
            }}
          />
          <span className="font-medium text-[#F7F8F8] truncate">
            Brand Tokens &amp; Component Studio
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#59D499] flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
          <span className="hidden xs:inline">0ms Latency · Live DOM</span>
          <span className="xs:hidden">Live DOM</span>
        </span>
      </div>

      {/* Control Segment Strip: Corner Radius & Theme Modes */}
      <div className="flex items-center justify-between gap-2 pt-2.5 pb-1 text-[11px] shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-[#62666D] uppercase tracking-wider mr-1">
            Radius:
          </span>
          <div className="flex items-center bg-[#121316] p-0.5 rounded-[8px] border border-white/[0.06]">
            {RADII.map((r) => {
              const isSelected = activeRadius.value === r.value;
              return (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setActiveRadius(r)}
                  className={`px-2.5 py-0.5 rounded-[6px] text-[10px] font-mono transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.12] text-[#F7F8F8] shadow-sm font-medium"
                      : "text-[#8A8F98] hover:text-[#F7F8F8]"
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Active Theme Tag */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#8A8F98]">
          <span className="hidden sm:inline text-[#62666D]">Theme:</span>
          <span
            className="font-medium transition-colors duration-300"
            style={{ color: activeTheme.hex }}
          >
            {activeTheme.name}
          </span>
        </div>
      </div>

      {/* Main Interactive Stage: Live Reactive Component Workstation */}
      <div className="relative my-auto rounded-[14px] bg-[#101114] border border-white/[0.06] p-4 sm:p-5 flex flex-col gap-3.5 overflow-hidden transition-all duration-300">
        {/* Soft Ambient Radial Background Accent (zero-lag CSS transition) */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none blur-3xl opacity-25 transition-colors duration-500"
          style={{ background: activeTheme.glow }}
        />

        {/* Workstation Top Bar: Interactive Action Row */}
        <div className="flex flex-wrap items-center gap-2.5 relative z-10">
          {/* Primary Reactive Action Button */}
          <button
            type="button"
            onClick={handlePrimaryClick}
            className="px-3.5 py-1.5 sm:py-2 text-[12px] font-medium transition-all duration-150 flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
            style={{
              backgroundColor: activeTheme.hex,
              color: "#08090A",
              borderRadius: activeRadius.value,
              boxShadow: `0 4px 14px ${activeTheme.glow}`,
            }}
          >
            {btnFeedback ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Token Deployed</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 stroke-[2]" />
                <span>Primary Action</span>
              </>
            )}
          </button>

          {/* Secondary Ghost Button */}
          <button
            type="button"
            className="px-3.5 py-1.5 sm:py-2 text-[12px] font-medium text-[#F7F8F8] bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-150 active:scale-95 cursor-pointer"
            style={{ borderRadius: activeRadius.value }}
          >
            Ghost Variant
          </button>

          {/* Dynamic Status Badge */}
          <div
            className="px-2.5 py-1 text-[11px] font-mono flex items-center gap-1.5 transition-all duration-300 ml-auto"
            style={{
              backgroundColor: activeTheme.bgAlpha,
              color: activeTheme.hex,
              border: `1px solid ${activeTheme.borderAlpha}`,
              borderRadius: activeRadius.value,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: activeTheme.hex }}
            />
            <span>{activeTheme.id}.token</span>
          </div>
        </div>

        {/* Workstation Middle Bar: Interactive Command Input & Toggle Switch */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center relative z-10">
          {/* Search / Command Token Input */}
          <div
            className="sm:col-span-7 flex items-center gap-2 px-3 py-1.5 sm:py-2 bg-[#090A0C] border transition-all duration-200 text-[12px]"
            style={{
              borderRadius: activeRadius.value,
              borderColor: isInputFocused ? activeTheme.hex : "rgba(255,255,255,0.08)",
              boxShadow: isInputFocused ? `0 0 12px ${activeTheme.glow}` : "none",
            }}
          >
            <Command className="w-3.5 h-3.5 text-[#8A8F98] shrink-0" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              placeholder="Search design tokens..."
              className="w-full bg-transparent text-[#F7F8F8] placeholder-[#62666D] text-[11px] sm:text-[12px] focus:outline-none"
            />
            <kbd className="hidden xs:inline-block px-1.5 py-0.5 text-[9px] font-mono text-[#8A8F98] bg-white/[0.06] border border-white/10 rounded">
              ⌘K
            </kbd>
          </div>

          {/* Live Reactive Toggle Switch */}
          <button
            type="button"
            onClick={() => setIsToggled(!isToggled)}
            className="sm:col-span-5 flex items-center justify-between sm:justify-end gap-2.5 px-3 py-1.5 sm:py-2 rounded-[8px] bg-[#090A0C] border border-white/[0.06] hover:border-white/15 transition-colors cursor-pointer group/toggle"
          >
            <span className="text-[11px] font-mono text-[#8A8F98] group-hover/toggle:text-[#F7F8F8] transition-colors truncate">
              {isToggled ? "Sync: Active" : "Sync: Paused"}
            </span>
            <div
              className="w-8 h-4.5 rounded-full p-0.5 transition-colors duration-200 flex items-center shrink-0"
              style={{
                backgroundColor: isToggled ? activeTheme.hex : "rgba(255,255,255,0.18)",
              }}
            >
              <div
                className="w-3.5 h-3.5 rounded-full bg-[#08090A] transition-transform duration-200 shadow-sm"
                style={{
                  transform: isToggled ? "translateX(14px)" : "translateX(0px)",
                }}
              />
            </div>
          </button>
        </div>

        {/* Real-Time CSS Token Stream Inspector */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2 text-[10px] font-mono relative z-10">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="text-[#62666D]">:root &#123;</span>
            <span
              className="font-medium transition-colors duration-300"
              style={{ color: activeTheme.hex }}
            >
              --brand: {activeTheme.hex};
            </span>
            <span className="text-[#8A8F98] hidden xs:inline">
              --radius: {activeRadius.value};
            </span>
            <span className="text-[#62666D]">&#125;</span>
          </div>

          <button
            type="button"
            onClick={handleCopyTokens}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[#F7F8F8] transition-colors cursor-pointer shrink-0"
            title="Copy CSS Tokens"
          >
            {isCopied ? (
              <>
                <Check className="w-2.5 h-2.5 text-[#59D499]" />
                <span className="text-[9px] text-[#59D499]">Copied</span>
              </>
            ) : (
              <span className="text-[9px] text-[#8A8F98] hover:text-[#F7F8F8]">Copy CSS</span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Palette Swatch Bar (1-Click Color Switching) */}
      <div className="pt-2.5 shrink-0">
        <div className="grid grid-cols-4 gap-2">
          {THEMES.map((theme) => {
            const isSelected = activeTheme.id === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => setActiveTheme(theme)}
                className="flex flex-col items-center group/swatch focus:outline-none cursor-pointer"
              >
                <div
                  className={`w-full h-5 rounded-[5px] mb-1 transition-all duration-150 ${
                    isSelected
                      ? "ring-2 ring-white/70 scale-[1.02] shadow-md"
                      : "opacity-60 group-hover/swatch:opacity-100 group-hover/swatch:scale-[1.02]"
                  }`}
                  style={{ backgroundColor: theme.hex }}
                />
                <span
                  className={`text-[9px] sm:text-[10px] font-mono block truncate transition-colors ${
                    isSelected ? "text-[#F7F8F8] font-medium" : "text-[#62666D] group-hover/swatch:text-[#8A8F98]"
                  }`}
                >
                  {theme.hex}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Studio Guarantee Footer */}
      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-[10px] text-[#62666D] font-mono shrink-0">
        <span>Figma Tokens ⇄ Production React</span>
        <span className="text-[#8A8F98]">Zero Style Drift</span>
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
export default function Section2() {
  return (
    <section
      id="capabilities"
      data-section="capabilities"
      className="w-full py-16 md:py-24 px-5 sm:px-8 bg-[#08090A] border-t border-white/[0.08] relative overflow-x-clip"
    >
      <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-24">
        {CAPABILITIES.map((cap, index) => {
          const isEven = index % 2 === 1; // Alternating layout
          const VisualComponent = cap.visual;

          return (
            <div
              key={cap.label}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isEven ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-5 ${isEven ? "lg:col-start-8" : "lg:col-start-1"
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
                className={`lg:col-span-7 ${isEven ? "lg:col-start-1" : "lg:col-start-6"
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

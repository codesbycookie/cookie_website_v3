import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Globe, Smartphone, Database, Palette, ArrowRight, Bell, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem, SpotlightCard, MOTION_TOKENS } from "../../utils/motion";

/* Micro-illustration 1: Browser frame with scrolling web content */
function BrowserIllustration() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative w-full h-36 sm:h-44 rounded-[12px] bg-[#0A0B0D] border border-white/10 overflow-hidden shadow-inner flex flex-col">
      {/* Browser Bar */}
      <div className="h-6 px-3 bg-[#14161A] border-b border-white/[0.08] flex items-center gap-1.5 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#FF5F56]/70" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/70" />
        <span className="w-2 h-2 rounded-full bg-[#27C93F]/70" />
        <div className="ml-2 w-28 h-2 rounded-full bg-white/[0.06]" />
      </div>
      {/* Auto-scrolling webpage content */}
      <div className="relative flex-1 overflow-hidden p-3">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -56, 0],
                }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="space-y-2.5"
        >
          {/* Mini hero */}
          <div className="h-10 rounded-lg bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/[0.06] p-2 flex items-center justify-between">
            <div className="space-y-1 w-2/3">
              <div className="h-2 w-full rounded bg-white/20" />
              <div className="h-1.5 w-1/2 rounded bg-[#D9A55B]/50" />
            </div>
            <div className="w-6 h-6 rounded-full bg-[#D9A55B]/20 border border-[#D9A55B]/40" />
          </div>
          {/* Mini grid */}
          <div className="grid grid-cols-3 gap-2">
            <div className="h-12 rounded bg-white/[0.03] border border-white/[0.05] p-1.5 space-y-1">
              <div className="w-3 h-3 rounded bg-[#57C1FF]/30" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
            </div>
            <div className="h-12 rounded bg-white/[0.03] border border-white/[0.05] p-1.5 space-y-1">
              <div className="w-3 h-3 rounded bg-[#59D499]/30" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
            </div>
            <div className="h-12 rounded bg-white/[0.03] border border-white/[0.05] p-1.5 space-y-1">
              <div className="w-3 h-3 rounded bg-[#D3B2FF]/30" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
            </div>
          </div>
          {/* Additional rows for continuous scroll effect */}
          <div className="h-8 rounded bg-white/[0.02] border border-white/[0.04] flex items-center px-2">
            <div className="h-2 w-1/3 rounded bg-white/10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Micro-illustration 2: Phone outline with pop-in notification */
function PhoneIllustration() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative w-full h-36 sm:h-44 flex items-center justify-center overflow-hidden">
      {/* Phone Silhouette */}
      <div className="relative w-36 h-full rounded-t-[20px] bg-[#0A0B0D] border-x border-t border-white/15 p-2 shadow-2xl flex flex-col">
        {/* Dynamic Island */}
        <div className="w-10 h-2 mx-auto rounded-full bg-black mb-3 border border-white/10" />

        {/* Popping notification pill */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [0.92, 1, 1, 0.92],
                  y: [10, 0, 0, 10],
                  opacity: [0, 1, 1, 0],
                }
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: MOTION_TOKENS.ease }}
          className="p-2 rounded-[10px] bg-[#1A1D23] border border-white/15 shadow-lg flex items-center gap-2"
        >
          <div className="w-5 h-5 rounded-full bg-[#59D499]/20 border border-[#59D499]/40 flex items-center justify-center shrink-0">
            <Bell className="w-2.5 h-2.5 text-[#59D499]" />
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <div className="h-1.5 w-12 rounded bg-white/80" />
            <div className="h-1 w-16 rounded bg-[#9EA3AD]/60" />
          </div>
        </motion.div>

        {/* Wireframe app body */}
        <div className="mt-auto space-y-1.5 pb-1">
          <div className="h-2 w-full rounded bg-white/[0.04]" />
          <div className="h-6 w-full rounded bg-white/[0.03] border border-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

/* Micro-illustration 3: Spreadsheet cells morphing into clean dashboard */
function DashboardIllustration() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative w-full h-32 sm:h-36 rounded-[12px] bg-[#0A0B0D] border border-white/10 p-3 overflow-hidden flex flex-col justify-between">
      {/* Top status */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8F98]">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
          <span>Real-time Operational Sync</span>
        </span>
        <span className="text-[#D9A55B]">Automated</span>
      </div>

      {/* Mini dashboard metrics & bars */}
      <div className="grid grid-cols-4 gap-2 items-end h-14 pt-2">
        {[45, 78, 62, 94].map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
            <motion.div
              animate={shouldReduceMotion ? { height: `${h}%` } : { height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              className="w-full rounded-t-[4px] bg-gradient-to-t from-[#D9A55B]/20 to-[#D9A55B] border-t border-[#D9A55B]"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-[#62666D] pt-1 border-t border-white/[0.06]">
        <span>Spreadsheets: 0</span>
        <span className="text-[#59D499]">100% Automated</span>
      </div>
    </div>
  );
}

/* Micro-illustration 4: Logo mark assembling from clean geometric shapes */
function BrandIllustration() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative w-full h-32 sm:h-36 rounded-[12px] bg-[#0A0B0D] border border-white/10 p-3 overflow-hidden flex items-center justify-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer glowing ring */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-[#D9A55B]/40"
        />

        {/* Geometric square rotating */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: [45, 225, 45], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-[6px] border border-[#57C1FF]/60 bg-[#57C1FF]/10"
        />

        {/* Center core mark */}
        <div className="absolute w-4 h-4 rounded-full bg-[#D9A55B] shadow-[0_0_16px_rgba(217,165,91,0.8)]" />
      </div>
    </div>
  );
}

export default function CapabilitiesBento() {
  return (
    <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 relative">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <Reveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
            Our Capabilities
          </span>
          <h2 className="text-[30px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
            What we solve for your business
          </h2>
          <p className="text-[16px] text-[#9EA3AD]">
            We handle every layer—from user journeys to design systems and reliable code—under one roof.
          </p>
        </Reveal>

        {/* Asymmetric Bento Grid: 8/4 top, 6/6 bottom */}
        <StaggerGroup stagger={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tile 1: Websites & Portals (Large 8-col tile) */}
          <StaggerItem className="lg:col-span-8">
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-[12px] bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#D9A55B]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B] px-3 py-1 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/20">
                    Websites & Portals
                  </span>
                </div>

                <h3 className="text-[24px] sm:text-[26px] font-semibold text-[#F4F4F6] mb-3 group-hover:text-[#D9A55B] transition-colors">
                  A website that brings you customers
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#9EA3AD] leading-relaxed mb-8 max-w-xl">
                  Fast to load, simple to navigate, and structured to convert casual visitors into qualified inquiries. Built to work smoothly on every phone and screen.
                </p>

                {/* Micro-illustration */}
                <div className="mb-6">
                  <BrowserIllustration />
                </div>
              </div>

              {/* Learn More link with underline wipe & sliding arrow */}
              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/services"
                  className="relative inline-flex items-center gap-1.5 text-[14px] font-medium text-[#D9A55B] hover:text-[#ECC07A] transition-colors group/link py-1"
                >
                  <span className="relative">
                    Learn more about our approach
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D9A55B] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Tile 2: Mobile Apps (4-col tile) */}
          <StaggerItem className="lg:col-span-4">
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-[12px] bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#57C1FF]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#57C1FF] px-3 py-1 rounded-full bg-[#57C1FF]/10 border border-[#57C1FF]/20">
                    Mobile Apps
                  </span>
                </div>

                <h3 className="text-[22px] font-semibold text-[#F4F4F6] mb-3 group-hover:text-[#57C1FF] transition-colors">
                  A mobile app your users actually enjoy
                </h3>
                <p className="text-[15px] text-[#9EA3AD] leading-relaxed mb-6">
                  Intuitive iOS and Android apps with zero lag, instant notifications, and clean interfaces that keep your customers coming back.
                </p>

                {/* Micro-illustration */}
                <div className="mb-6">
                  <PhoneIllustration />
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/services"
                  className="relative inline-flex items-center gap-1.5 text-[14px] font-medium text-[#57C1FF] hover:text-[#8AD1FF] transition-colors group/link py-1"
                >
                  <span className="relative">
                    Learn more about our approach
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#57C1FF] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Tile 3: Business Systems (6-col tile) */}
          <StaggerItem className="lg:col-span-6">
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-[12px] bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#59D499]">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#59D499] px-3 py-1 rounded-full bg-[#59D499]/10 border border-[#59D499]/20">
                    Business Systems
                  </span>
                </div>

                <h3 className="text-[22px] font-semibold text-[#F4F4F6] mb-3 group-hover:text-[#59D499] transition-colors">
                  Custom software that replaces spreadsheets
                </h3>
                <p className="text-[15px] text-[#9EA3AD] leading-relaxed mb-6">
                  Custom internal tools tailored to your daily operations. Automate manual paperwork, manage inventory, and track team progress in one secure place.
                </p>

                {/* Micro-illustration */}
                <div className="mb-6">
                  <DashboardIllustration />
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/services"
                  className="relative inline-flex items-center gap-1.5 text-[14px] font-medium text-[#59D499] hover:text-[#8EE6BE] transition-colors group/link py-1"
                >
                  <span className="relative">
                    Learn more about our approach
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#59D499] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* Tile 4: Brand Identity (6-col tile) */}
          <StaggerItem className="lg:col-span-6">
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-[12px] bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#D3B2FF]">
                    <Palette className="w-6 h-6" />
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#D3B2FF] px-3 py-1 rounded-full bg-[#D3B2FF]/10 border border-[#D3B2FF]/20">
                    Brand Identity
                  </span>
                </div>

                <h3 className="text-[22px] font-semibold text-[#F4F4F6] mb-3 group-hover:text-[#D3B2FF] transition-colors">
                  A brand that makes your business look established
                </h3>
                <p className="text-[15px] text-[#9EA3AD] leading-relaxed mb-6">
                  Professional logos, visual systems, and digital assets that give prospective clients immediate confidence in your capability.
                </p>

                {/* Micro-illustration */}
                <div className="mb-6">
                  <BrandIllustration />
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/services"
                  className="relative inline-flex items-center gap-1.5 text-[14px] font-medium text-[#D3B2FF] hover:text-[#E2CFFF] transition-colors group/link py-1"
                >
                  <span className="relative">
                    Learn more about our approach
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D3B2FF] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

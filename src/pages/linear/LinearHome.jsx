import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  linearHero,
  customerLogosLive,
  liveManifesto,
  liveFeatureSections,
  liveCustomerQuotes,
  liveBottomCTA,
} from "../../data/linearData";
import LinearAppWindow from "../../components/linear/LinearAppWindow";
import CommandPaletteModal from "../../components/linear/CommandPaletteModal";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Compass,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function LinearHome() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden bg-[#08090A]">
      {/* 1. Hero Section (Exact 1:1 Live Linear Hero) */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#232529]/60 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        {/* Subtle Blue/Indigo Edge Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] bg-[#5E6AD2]/12 blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Announcement: New Loops → */}
        <Link
          to="/changelog"
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121316] border border-[#232529] hover:border-[#494B4D] text-[#8A8F98] hover:text-[#F4F4F6] text-[13px] font-medium transition-all mb-8 group"
        >
          <span className="text-[#F4F4F6] font-semibold">{linearHero.announcement.badge}</span>
          <span className="text-[#D0D6E0]">{linearHero.announcement.text}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#8A8F98] group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Live Linear H1 */}
        <h1 className="text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-medium text-[#F4F4F6] tracking-[-0.035em] leading-[1.08] max-w-4xl mb-6">
          {linearHero.headline}
        </h1>

        {/* Live Linear Subheadline */}
        <p className="text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10 font-normal">
          {linearHero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <a
            href="https://linear.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="linear-btn-primary px-5 py-2.5 rounded-full text-[14px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:opacity-95 transition-opacity"
          >
            {linearHero.ctaPrimary}
          </a>

          <a
            href="https://linear.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[14px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#121316] border border-transparent hover:border-[#232529] transition-all font-medium"
          >
            <span>{linearHero.ctaSecondary}</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-[12px] font-mono text-[#62666D] mb-16">
          {linearHero.ctaHint}
        </div>

        {/* Live Linear Product Window Mockup (Faster app launch / DRV-8852) */}
        <div className="w-full max-w-5xl relative z-10">
          <LinearAppWindow onOpenCommandPalette={() => setIsCommandOpen(true)} />
        </div>
      </section>

      {/* 2. Customer Trust Logos: OpenAI, Vercel, Salesforce, Figma, Cursor, Coinbase, Ramp */}
      <section className="w-full py-16 border-b border-[#232529]/60 bg-[#08090A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75">
            {customerLogosLive.map((cust) => (
              <span
                key={cust.name}
                className="font-mono text-[17px] font-semibold text-[#D0D6E0] tracking-tight hover:opacity-100 transition-opacity cursor-default"
              >
                {cust.logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "A new species of product tool" Manifesto Section */}
      <section className="w-full py-24 md:py-32 border-b border-[#232529]/60 bg-[#08090A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[13px] font-mono uppercase tracking-wider text-[#5E6AD2] block mb-4">
              {liveManifesto.eyebrow}
            </span>
            <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-medium text-[#F4F4F6] tracking-tight leading-[1.12]">
              {liveManifesto.statement}
            </h2>
          </div>

          {/* Three Foundation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liveManifesto.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] hover:border-[#2F3031] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[13px] text-[#5E6AD2] font-semibold block mb-4">
                    {pillar.number}
                  </span>
                  <h3 className="text-[20px] font-medium text-[#F4F4F6] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Lifecycle Feature Sections */}
      <section className="w-full py-24 md:py-32 border-b border-[#232529]/60 bg-[#08090A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {liveFeatureSections.map((sec) => (
            <div
              key={sec.tag}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-8 sm:p-10 rounded-[16px] bg-[#121316]/50 border border-[#232529] hover:border-[#2F3031] transition-all"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[12px] font-mono uppercase tracking-wider text-[#62666D]">
                  {sec.tag}
                </span>
                <h3 className="text-[28px] sm:text-[34px] font-medium text-[#F4F4F6] tracking-tight leading-[1.18]">
                  {sec.headline}
                </h3>
                <p className="text-[15px] text-[#8A8F98] leading-relaxed">
                  {sec.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="h-64 rounded-[12px] bg-[#121316] border border-[#232529] p-6 flex flex-col justify-between font-mono text-[12px]">
                  <div className="flex items-center justify-between text-[#8A8F98] pb-4 border-b border-[#232529]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5E6AD2]" />
                      <span>{sec.specimen}</span>
                    </div>
                    <span className="text-[#59D499]">Realtime sync</span>
                  </div>

                  <div className="space-y-2 py-4">
                    <div className="text-[#D0D6E0]">$ linear sync:agent --stream</div>
                    <div className="text-[#8A8F98]">
                      → Auto-triaging customer ticket #8852 from Slack
                    </div>
                    <div className="text-[#5E6AD2]">
                      → Assigning label "Performance" with 98% confidence
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#232529] flex items-center justify-between text-[11px] text-[#62666D]">
                    <span>Agent protocol v2.5</span>
                    <span>P50: 16ms</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Customer Quotes (Gabriel Peal, Nik Koblov, Kaz Nejatian) */}
      <section className="w-full py-24 md:py-32 border-b border-[#232529]/60 bg-[#08090A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liveCustomerQuotes.map((q) => (
              <div
                key={q.author}
                className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] flex flex-col justify-between"
              >
                <p className="text-[15px] text-[#D0D6E0] leading-relaxed mb-8 italic">
                  "{q.quote}"
                </p>
                <div>
                  <span className="text-[14px] font-medium text-[#F4F4F6] block">
                    {q.author}
                  </span>
                  <span className="text-[12px] text-[#8A8F98]">
                    {q.role}, {q.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Live Bottom CTA Band */}
      <section className="w-full py-28 md:py-36 bg-[#08090A] text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-medium text-[#F4F4F6] tracking-tight leading-[1.12] mb-6">
            {liveBottomCTA.headline}
          </h2>
          <p className="text-[17px] text-[#8A8F98] mb-10 max-w-xl">
            {liveBottomCTA.subhead}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://linear.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="linear-btn-primary px-6 py-3 rounded-full text-[14px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:opacity-95 transition-opacity"
            >
              {liveBottomCTA.ctaPrimary}
            </a>
            <a
              href="https://linear.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full text-[14px] font-medium text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#121316] border border-transparent hover:border-[#232529] transition-all"
            >
              {liveBottomCTA.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Command Palette Modal */}
      <CommandPaletteModal isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  );
}

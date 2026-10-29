import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight } from "lucide-react";
import CookieLogo from "../../../../components/cookie_logo";
import { easybill } from "../../../../data/data";

export default function Section1() {
  const { name, subtitle, tagline, badge, status, headline, subheadline, whatsappLink } =
    easybill;

  return (
    <section className="relative w-full min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center px-6 py-10 sm:py-14 text-center overflow-hidden select-none">
      {/* Cinematic Central Illumination */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[92vw] h-[450px] rounded-full hero-ambient-glow -z-10 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
        {/* Top Studio Capsule Pill */}
        <div className="mb-6 sm:mb-6 inline-flex items-center gap-2.5 px-3.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <CookieLogo className="w-3.5 h-3.5 shrink-0" color="#FAF6EE" dotColor="#D9A55B" />
          <span className="text-[11.5px] font-mono tracking-wider uppercase text-[#8A8F98]">
            {tagline}
          </span>
          <span className="text-[#3E4249]">·</span>
          <span className="text-[11px] font-mono text-[#D9A55B] font-semibold tracking-wide uppercase">
            {badge}
          </span>
        </div>

        {/* Monumental Centered Product Display Wordmark with generous vertical breathing room */}
        <div className="w-full my-6 sm:my-10 py-2 sm:py-3 flex items-center justify-center">
          <h1 className="text-[54px] sm:text-[78px] md:text-[98px] lg:text-[116px] font-semibold tracking-[-0.035em] leading-[1.2] text-[#FAF6EE]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#FAF6EE] to-[#8E93A0] inline-block py-1">
              {name}
            </span>
            <span className="text-[#D9A55B] ml-0.5">.</span>
          </h1>
        </div>

        {/* Product Subtitle */}
        <p className="text-[13px] sm:text-[15px] font-mono uppercase tracking-[0.22em] text-[#D9A55B] font-medium mb-8 sm:mb-12">
          {subtitle}
        </p>

        {/* Main Headline & Proposed Solution Statement */}
        <div className="max-w-xl mx-auto space-y-3 mb-8 sm:mb-10">
          <h2 className="text-[26px] sm:text-[36px] md:text-[42px] font-medium tracking-[-0.03em] text-[#F7F8F8] leading-[1.18]">
            {headline}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#8A8F98] leading-relaxed max-w-lg mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Minimal Center Pill Ticker (A Different, Cardless Approach) */}
        <div className="mb-10 sm:mb-12 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-2.5 rounded-full bg-[#0E1013]/80 border border-white/[0.08] text-[12px] sm:text-[12.5px] font-mono text-[#9EA3AD] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="flex items-center gap-1.5 text-[#FAF6EE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
            <span>{status}</span>
          </span>
          <span className="text-white/20">/</span>
          <span className="text-[#8A8F98]">Fast Counter Billing</span>
          <span className="text-white/20">/</span>
          <span className="text-[#8A8F98]">Smart Stock</span>
          <span className="text-white/20">/</span>
          <span className="text-[#8A8F98]">Everyday Retail</span>
        </div>

        {/* Centered Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF6EE] hover:bg-[#FFFDF9] text-[#08090A] text-[14px] font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 shadow-[0_0_28px_rgba(217,165,91,0.25)] active:scale-98"
          >
            <MessageSquare className="w-4 h-4 text-[#08090A]" />
            <span>Inquire on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#08090A]" />
          </a>

          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#FAF6EE] text-[14px] font-medium transition-colors inline-flex items-center justify-center"
          >
            Back to Cookie Inc.
          </Link>
        </div>

        {/* Studio Attribution Stamp */}
        <div className="mt-12 sm:mt-16 text-center text-[11.5px] font-mono text-[#62666D]">
          A proprietary SaaS engineered in Chennai · Cookie Inc.
        </div>
      </div>
    </section>
  );
}

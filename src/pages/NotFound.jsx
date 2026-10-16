import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";
import { ArrowLeft, Home, Briefcase, Mail } from "lucide-react";

/**
 * NotFound Page:
 * The one question: "Where did this page go, and how do I get back on track?"
 * Client-first, warm, human, with clean Linear-style design.
 */
export default function NotFound() {
  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center justify-center py-20 px-5 sm:px-8 bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
      {/* Subtle warm glow with ambient breathing */}
      <div
        className="linear-spotlight-cone"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        {/* Sleek Linear-style 404 Emblem */}
        <div className="hero-reveal relative mb-10 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-[#111215] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Ambient inner beam glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,165,91,0.20),transparent_70%)] pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[52px] sm:text-[64px] font-bold text-white tracking-tight leading-none gradient-cream">
                404
              </span>
              <span className="text-[11px] font-medium text-[#9EA3AD] uppercase tracking-widest mt-1">
                Route not found
              </span>
            </div>
            {/* Traveling hairline glow along the bottom */}
            <div className="hairline-beam absolute bottom-0 left-0 right-0" />
          </div>
        </div>

        {/* Plain-Language Headline */}
        <h1 className="hero-reveal-delay-1 text-[32px] sm:text-[46px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.15] mb-4">
          This page does not exist
        </h1>

        {/* Reassuring description */}
        <p className="hero-reveal-delay-2 text-[16px] sm:text-[18px] text-[#9EA3AD] leading-relaxed mb-10 max-w-md">
          The link you followed might be outdated or the page has moved. Do not worry—everything else at Cookie Inc. is active and running smoothly.
        </p>

        {/* Primary Action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <Button to="/" variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Back to homepage
          </Button>
          <Button to="/work" variant="ghost" size="lg" className="min-h-[48px] w-full sm:w-auto">
            <Briefcase className="w-4 h-4 mr-2" />
            View our work
          </Button>
        </div>

        {/* Quick Help Links */}
        <div className="pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 text-[14px] text-[#767B85]">
          <span>Need help finding something?</span>
          <Link
            to="/contact"
            className="text-[#D9A55B] hover:text-[#E4B46E] font-medium transition-colors inline-flex items-center gap-1.5 py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px]"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact our team
          </Link>
        </div>
      </div>
    </div>
  );
}

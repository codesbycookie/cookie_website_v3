import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/button";
import { Home, Briefcase, Mail } from "lucide-react";

export default function Section1() {
  return (
    <div className="min-h-[calc(100dvh-3.5rem)] w-full flex flex-col items-center justify-center py-10 sm:py-16 px-5 sm:px-8 bg-[#08090A] text-[#F4F4F6] relative overflow-hidden select-none">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[95vw] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(217,165,91,0.12)_0%,rgba(217,165,91,0.03)_50%,transparent_75%)] blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto w-full my-auto">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center w-36 h-36 sm:w-42 sm:h-42 rounded-[24px] bg-[#111215] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(217,165,91,0.22),transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
              <span className="text-[52px] sm:text-[60px] font-bold tracking-tight leading-none gradient-cream inline-block text-center tabular-nums">
                404
              </span>
              <span className="text-[11px] font-medium text-[#9EA3AD] uppercase tracking-widest mt-2 text-center">
                Route not found
              </span>
            </div>

            <div
              className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D9A55B]/60 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        <h1 className="text-[28px] sm:text-[38px] font-semibold text-[#F4F4F6] tracking-[-0.025em] leading-[1.18] mb-3 text-center">
          This page does not exist
        </h1>

        <p className="text-[14px] sm:text-[16px] text-[#9EA3AD] leading-relaxed mb-8 max-w-md mx-auto text-center">
          The link you followed might be outdated or the page has moved. Everything else at Cookie Inc. is active and running smoothly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 w-full max-w-xs sm:max-w-none">
          <Button
            to="/"
            variant="primary"
            size="md"
            className="min-h-[44px] w-full sm:w-auto px-6 text-[14px]"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to homepage
          </Button>
          <Button
            to="/work"
            variant="ghost"
            size="md"
            className="min-h-[44px] w-full sm:w-auto px-6 text-[14px]"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            View our work
          </Button>
        </div>

        <div className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center justify-center gap-2 text-[13px] text-[#767B85] text-center">
          <span>Need help finding something?</span>
          <Link
            to="/contact"
            className="text-[#D9A55B] hover:text-[#E4B46E] font-medium transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px]"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact our team
          </Link>
        </div>
      </div>
    </div>
  );
}

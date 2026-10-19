import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Section1() {
  return (
    <header className="relative z-10 w-full border-b border-white/[0.06] pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-6 sm:px-8 overflow-hidden">
      <div className="linear-top-glow" aria-hidden="true" />
      <div className="linear-film-grain" aria-hidden="true" />

      <div className="relative z-10 max-w-[1180px] mx-auto text-left">
        <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
          <span>Services &amp; Structured Packages</span>
        </div>

        <div className="overflow-hidden mb-5">
          <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-[17ch] text-balance leading-[1.12]">
            Clear services designed around your business goals
          </h1>
        </div>

        <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-8">
          Whether you need a new website, a mobile app, or custom internal software, we handle everything from first sketch to post-launch care with fixed scopes.
        </p>

        <div className="linear-fade-in linear-delay-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-[#FAF6EE] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-[#FFFDF9] hover:shadow-[0_0_24px_rgba(217,165,91,0.18)] transition-all duration-200 inline-flex items-center gap-2 group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            <span>Get a clear quote</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <a
            href="#package-section"
            className="text-[14px] sm:text-[15px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors px-3 py-2 inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Explore packages</span>
            <ArrowDown
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

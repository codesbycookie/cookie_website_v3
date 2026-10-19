import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

export default function Section1() {
  return (
    <section className="relative w-full pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-6 sm:px-8 border-b border-white/[0.06] overflow-hidden">
      {/* Top faint amber glow (6-8% opacity) */}
      <div className="linear-top-glow" aria-hidden="true" />

      {/* Subtle film grain */}
      <div className="linear-film-grain" aria-hidden="true" />

      <div className="relative z-10 max-w-[1180px] mx-auto text-left">
        {/* Location pill: hairline border with subtle 10% cream tint */}
        <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
          <MapPin className="w-3.5 h-3.5 text-[#D9A55B]/80" />
          <span>Software Studio · Chennai, India</span>
        </div>

        {/* Headline: gradient fill, tight tracking, lines reveal with a masked slide-up */}
        <div className="overflow-hidden mb-5">
          <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-[18ch] text-balance leading-[1.12]">
            A focused studio in Chennai dedicated to craft
          </h1>
        </div>

        {/* Subtext: 80ms delay */}
        <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-8">
          We started Cookie Inc. to give ambitious businesses dependable software without agency overhead or unnecessary complexity.
        </p>

        {/* Primary CTA button: warm porcelain */}
        <div className="linear-fade-in linear-delay-2 flex items-center">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-[#FAF6EE] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-[#FFFDF9] hover:shadow-[0_0_24px_rgba(217,165,91,0.18)] transition-all duration-200 inline-flex items-center gap-2 group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            <span>Work with us</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

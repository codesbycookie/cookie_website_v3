import React from "react";

export default function Section1() {
  return (
    <header className="relative z-10 w-full border-b border-white/[0.06] pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-6 sm:px-8 overflow-hidden">
      <div className="linear-top-glow" aria-hidden="true" />
      <div className="linear-film-grain" aria-hidden="true" />

      <div className="relative z-10 max-w-[1180px] mx-auto text-left">
        <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE] animate-[pulse_3s_ease-in-out_infinite]"
            aria-hidden="true"
          />
          <span>Currently accepting new client projects</span>
        </div>

        <div className="overflow-hidden mb-4">
          <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-[16ch] text-balance leading-[1.12]">
            Tell us about what you want to build
          </h1>
        </div>

        <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed">
          We will review your notes and reply within 1 business day with clear recommendations and a realistic quote.
        </p>
      </div>
    </header>
  );
}

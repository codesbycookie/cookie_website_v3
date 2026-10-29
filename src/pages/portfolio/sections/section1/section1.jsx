import React from "react";
import { Briefcase } from "lucide-react";

export default function Section1() {
  return (
    <header className="relative z-10 w-full max-w-[1180px] mx-auto pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-14 px-6 sm:px-8 text-left">
      <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)] whitespace-nowrap">
        <Briefcase className="w-3.5 h-3.5 text-[#D9A55B]/80 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Selected Work &amp; Case Studies</span>
      </div>

      <h1 className="linear-headline linear-fade-in text-[32px] sm:text-[46px] md:text-[54px] max-w-2xl text-balance leading-[1.14] mb-4">
        Real software shipped for real businesses
      </h1>

      <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed">
        Selected web applications, e-learning platforms, mini-commerce storefronts, and custom management software built by our team in Chennai.
      </p>
    </header>
  );
}

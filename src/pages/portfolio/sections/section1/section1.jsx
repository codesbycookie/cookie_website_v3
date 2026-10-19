import React from "react";
import { Briefcase } from "lucide-react";

export default function Section1() {
  const STUDIO_STATS = [
    { value: "40+", label: "Production builds" },
    { value: "100%", label: "On-time delivery" },
    { value: "21 days", label: "Average turnaround" },
    { value: "14 countries", label: "Global footprint" },
  ];

  return (
    <header className="relative z-10 w-full max-w-[1180px] mx-auto pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-14 px-6 sm:px-8 text-left">
      <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)] whitespace-nowrap">
        <Briefcase className="w-3.5 h-3.5 text-[#D9A55B]/80 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">Selected Work &amp; Case Studies</span>
      </div>

      <h1 className="linear-headline linear-fade-in text-[32px] sm:text-[46px] md:text-[54px] max-w-2xl text-balance leading-[1.14] mb-4">
        Real software shipped for real businesses
      </h1>

      <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
        Selected web applications, mobile platforms, and systems shipped for our clients.
      </p>

      <div className="linear-fade-in linear-delay-2 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-0 pt-2">
        {STUDIO_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col sm:pr-8 sm:mr-8 ${
              i !== STUDIO_STATS.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
            }`}
          >
            <span className="text-[20px] sm:text-[22px] font-semibold text-[#F7F8F8] tracking-tight whitespace-nowrap">
              {stat.value}
            </span>
            <span className="text-[13px] sm:text-[14px] text-[#8A8F98] whitespace-nowrap">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}

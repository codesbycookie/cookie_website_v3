import React from "react";
import { Scale } from "lucide-react";

export default function Section1() {
  const TERMS_STATS = [
    { value: "100%", label: "IP ownership transferred" },
    { value: "Day 1", label: "Mutual NDA protection" },
    { value: "Fixed", label: "Scope & milestone billing" },
    { value: "30 Days", label: "Post-launch warranty" },
  ];

  return (
    <header className="relative z-10 w-full max-w-[1180px] mx-auto pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-6 sm:px-8 text-left border-b border-white/[0.06]">
      <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
        <Scale className="w-3.5 h-3.5 text-[#D9A55B]/80" />
        <span>Terms of Service &amp; Client Agreement</span>
      </div>

      <div className="overflow-hidden mb-4">
        <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-2xl text-balance leading-[1.12]">
          Transparent terms focused on client ownership and peace of mind
        </h1>
      </div>

      <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
        All client projects at Cookie Inc. operate under fixed scopes, mutual NDAs, and 100% intellectual property transfer upon final payment.
      </p>

      <div className="linear-fade-in linear-delay-2 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-0 pt-2">
        {TERMS_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col sm:pr-8 sm:mr-8 ${
              i !== TERMS_STATS.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
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

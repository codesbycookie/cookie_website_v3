import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Section1() {
  const PRIVACY_STATS = [
    { value: "0", label: "Third-party ad trackers" },
    { value: "TLS 1.3", label: "Encrypted in-transit" },
    { value: "48 Hours", label: "Data erasure SLA" },
    { value: "DPDP 2023", label: "Full legal compliance" },
  ];

  return (
    <header className="relative z-10 w-full max-w-[1180px] mx-auto pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-6 sm:px-8 text-left border-b border-white/[0.06]">
      <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
        <ShieldCheck className="w-3.5 h-3.5 text-[#D9A55B]/80" />
        <span>Privacy Policy &amp; Data Governance</span>
      </div>

      <div className="overflow-hidden mb-4">
        <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-2xl text-balance leading-[1.12]">
          Your privacy is built directly into our studio practices
        </h1>
      </div>

      <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
        We respect your personal and project information. Zero tracking cookies, zero ad sales, and full compliance with DPDP Act 2023 and GDPR standards.
      </p>

      <div className="linear-fade-in linear-delay-2 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-0 pt-2">
        {PRIVACY_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col sm:pr-8 sm:mr-8 ${
              i !== PRIVACY_STATS.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
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

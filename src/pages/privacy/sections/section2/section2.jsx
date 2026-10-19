import React from "react";
import { Lock, CheckCircle2, ShieldCheck, Scale } from "lucide-react";

export default function Section2() {
  const PRIVACY_PRINCIPLES = [
    {
      icon: Lock,
      title: "Zero Ad Sales or Brokering",
      desc: "We never sell, lease, trade, or share your contact details or project specifications with external advertisers or data brokers. Ever.",
    },
    {
      icon: CheckCircle2,
      title: "Minimal Purpose-Driven Collection",
      desc: "We collect only what is strictly necessary to evaluate project briefs, communicate during active builds, and deploy production software.",
    },
    {
      icon: ShieldCheck,
      title: "TLS 1.3 & Encrypted In-Transit",
      desc: "Every interaction across our forms, APIs, and private staging links is encrypted using modern high-grade cryptography (AES-256).",
    },
    {
      icon: Scale,
      title: "Right to Complete Erasure",
      desc: "In compliance with the DPDP Act 2023 and GDPR, you can request immediate export or permanent deletion of your contact records within 48 business hours.",
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-[1180px] mx-auto py-16 sm:py-20 px-6 sm:px-8 border-b border-white/[0.06]">
      <div className="mb-10 text-left">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#F7F8F8] tracking-tight mb-2">
          Plain-language privacy commitments
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#8A8F98]">
          Our standard data protection guarantees before the formal legal provisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {PRIVACY_PRINCIPLES.map((principle) => {
          const Icon = principle.icon;
          return (
            <div
              key={principle.title}
              className="rounded-[14px] p-6 bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] transition-colors"
            >
              <div className="w-9 h-9 rounded-[8px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 text-[#D9A55B]">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-[17px] font-medium text-[#F7F8F8] mb-2">
                {principle.title}
              </h3>
              <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                {principle.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

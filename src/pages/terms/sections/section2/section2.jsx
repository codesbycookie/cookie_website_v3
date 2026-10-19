import React from "react";
import { Sparkles, Lock, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Section2() {
  const TERMS_PRINCIPLES = [
    {
      icon: Sparkles,
      title: "100% Code & Asset Ownership",
      desc: "Upon final milestone payment, all bespoke React code, UI designs, schemas, and assets belong exclusively to you. Zero proprietary lock-in.",
    },
    {
      icon: Lock,
      title: "Bilateral NDA from Day 1",
      desc: "We treat your business strategy, repositories, credentials, and customer datasets under strict legal commercial non-disclosure.",
    },
    {
      icon: CheckCircle2,
      title: "Milestone-Verified Invoicing",
      desc: "Every invoice is tied to verifiable working software previews on private links. You inspect and verify before milestone billing is due.",
    },
    {
      icon: ShieldCheck,
      title: "30-Day Post-Launch Care",
      desc: "Dedicated defect resolution and performance tuning for 30 calendar days post-deployment at zero extra cost, with direct WhatsApp builder access.",
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-[1180px] mx-auto py-16 sm:py-20 px-6 sm:px-8 border-b border-white/[0.06]">
      <div className="mb-10 text-left">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#F7F8F8] tracking-tight mb-2">
          Key contract protections
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#8A8F98]">
          Practical guarantees built into every client engagement statement of work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {TERMS_PRINCIPLES.map((principle) => {
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

import React from "react";
import Button from "../../../../components/button";
import { CheckCircle2 } from "lucide-react";

export default function Section3({ study }) {
  return (
    <section className="w-full py-16 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-10 text-[15px] sm:text-[16px] text-[#9EA3AD] leading-relaxed">
          <div>
            <h2 className="text-[24px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              Overview &amp; Context
            </h2>
            <div className="space-y-4">
              {typeof study.content === "function" ? study.content() : <p>{study.content}</p>}
            </div>
          </div>

          <div>
            <h2 className="text-[24px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              Delivered Solution
            </h2>
            <ul className="space-y-3">
              {(study.deliverables || [
                "Custom responsive interface designed for conversion",
                "Performance optimization targeting sub-second page loads",
                "Integration with operational business APIs and payment flows",
                "Comprehensive testing, domain cutover, and post-launch support",
              ]).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F4F4F6]">
                  <CheckCircle2 className="w-5 h-5 text-[#59D499] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="rounded-[18px] bg-[#121316] border border-white/10 p-6 space-y-6">
            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-3">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {(study.stack || ["React", "Tailwind CSS", "Vite", "Node.js"]).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-[6px] bg-white/[0.04] border border-white/10 text-[13px] text-[#F4F4F6]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-3">
                Verified Outcome
              </h3>
              <div className="p-4 rounded-[10px] bg-[#0A0B0D] border border-white/10">
                <div className="text-[22px] font-semibold text-[#59D499]">
                  Production Ready
                </div>
                <div className="text-[#9EA3AD] text-[13px] mt-1">
                  Delivered on schedule with 100% in-house engineering
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/contact" variant="primary" size="md" className="w-full min-h-[44px]">
                Start a similar project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

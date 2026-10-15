import React from "react";
import { linearChangelogItems } from "../../data/linearData";
import { Calendar, Tag, CheckCircle2 } from "lucide-react";

export default function LinearChangelog() {
  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-[#121316] border border-[#232529] font-mono text-[11px] uppercase tracking-wider text-[#5E6AD2] mb-6">
            Release History
          </span>
          <h1 className="text-[40px] sm:text-[54px] md:text-[62px] font-medium text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Changelog
          </h1>
          <p className="text-[18px] text-[#8A8F98] max-w-xl mx-auto leading-relaxed">
            New updates, product releases, and continuous performance improvements shipped to Linear.
          </p>
        </div>

        {/* Timeline of Releases */}
        <div className="space-y-16">
          {linearChangelogItems.map((item) => (
            <article
              key={item.version}
              className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] relative"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-[12px]">
                <span className="text-[#5E6AD2] font-semibold">{item.date}</span>
                <span className="text-[#62666D]">·</span>
                <span className="text-[#D0D6E0]">{item.version}</span>
                <span className="px-2 py-0.5 rounded bg-[#1B1C1F] text-[#8A8F98] border border-[#232529]">
                  {item.tag}
                </span>
              </div>

              <h2 className="text-[24px] sm:text-[28px] font-medium text-[#F4F4F6] tracking-tight mb-4">
                {item.title}
              </h2>

              <p className="text-[15px] text-[#8A8F98] leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="pt-6 border-t border-[#232529] space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-2">
                  Key Enhancements
                </div>
                {item.highlights.map((hl) => (
                  <div key={hl} className="flex items-start gap-2.5 text-[13px] text-[#D0D6E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

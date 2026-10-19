import React, { useEffect, useRef, useState } from "react";
import { Zap, GitBranch, LineChart, MessageCircle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const FEATURES = [
  {
    key: "discover",
    tag: "Plan",
    number: "01",
    title: "Start with a plan, not a pitch deck",
    desc: "A focused discovery call turns your idea into scope, milestones and a fixed quote within a day.",
    color: "#57C1FF",
    Icon: Zap,
  },
  {
    key: "build",
    tag: "Build",
    number: "02",
    title: "Watch it get built, every week",
    desc: "A live preview from week one and merged work you can click through. No status-report theatre.",
    color: "#D9A55B",
    Icon: GitBranch,
  },
  {
    key: "measure",
    tag: "Launch",
    number: "03",
    title: "Launch fast, measure what matters",
    desc: "Performance budgets, SEO and analytics wired in before go-live so launch day is boring in the best way.",
    color: "#59D499",
    Icon: LineChart,
  },
  {
    key: "support",
    tag: "Support",
    number: "04",
    title: "A founder on every call, after launch too",
    desc: "Direct line on WhatsApp, fast fixes and a roadmap for what to ship next.",
    color: "#D3B2FF",
    Icon: MessageCircle,
  },
];

function PlanVisual({ color }) {
  const rows = ["Brief and goals", "User flows", "Scope and quote", "Kickoff date"];
  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <div
          key={r}
          className="feed-in flex items-center gap-3 rounded-[10px] bg-white/[0.03] border border-white/[0.07] px-4 py-3"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color }} />
          <span className="text-[14px] text-[#D0D6E0]">{r}</span>
          <span className="ml-auto font-mono text-[11px] text-[#62666D]">Day {i + 1}</span>
        </div>
      ))}
    </div>
  );
}

function BuildVisual({ color }) {
  const lines = [
    ["feat", "catalog filters", "merged"],
    ["feat", "quote request form", "merged"],
    ["fix", "mobile nav overflow", "review"],
    ["perf", "lazy-load gallery", "open"],
  ];
  const tone = { merged: "#59D499", review: "#FFC533", open: "#8A8F98" };
  return (
    <div className="space-y-2.5 font-mono text-[12px]">
      {lines.map(([t, n, s], i) => (
        <div
          key={n}
          className="feed-in flex items-center gap-3 rounded-[10px] bg-black/30 border border-white/[0.07] px-4 py-3"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <GitBranch className="w-3.5 h-3.5 shrink-0" style={{ color }} />
          <span className="text-[#8A8F98]">{t}/</span>
          <span className="text-[#F4F4F6] truncate">{n}</span>
          <span className="ml-auto" style={{ color: tone[s] }}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function MeasureVisual({ color }) {
  const bars = [38, 52, 47, 66, 74, 70, 92];
  return (
    <div>
      <div className="flex items-end gap-2 h-32 sm:h-36 mb-5" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[4px]"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${color}1a, ${color}b3)`,
              animation: `feed-in 600ms ${i * 70}ms both`,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2.5 font-mono text-[11px]">
        {[["Performance", 98], ["Accessibility", 100], ["SEO", 100]].map(([k, v]) => (
          <div key={k} className="rounded-[10px] bg-black/30 border border-white/[0.07] p-2.5 sm:p-3">
            <div className="text-[20px] sm:text-[22px] font-medium tracking-tight" style={{ color }}>{v}</div>
            <div className="text-[#62666D] mt-1 text-[10px] sm:text-[11px] truncate">{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportVisual({ color }) {
  return (
    <div className="space-y-3 text-[13px]">
      <div className="feed-in max-w-[85%] rounded-[12px] rounded-bl-[4px] bg-white/[0.05] border border-white/[0.08] px-4 py-3 text-[#D0D6E0]">
        Can we add a bilingual toggle before the expo?
      </div>
      <div
        className="feed-in ml-auto max-w-[85%] rounded-[12px] rounded-br-[4px] px-4 py-3 text-[#08090A] font-medium"
        style={{ background: color, animationDelay: "140ms" }}
      >
        Done. Preview link is live, shipping tonight.
      </div>
      <div className="feed-in flex items-center gap-2 font-mono text-[11px] text-[#62666D]" style={{ animationDelay: "280ms" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" /> Replied in 6 min
      </div>
    </div>
  );
}

const VISUALS = { discover: PlanVisual, build: BuildVisual, measure: MeasureVisual, support: SupportVisual };

export default function StickyFeatures() {
  const [active, setActive] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive((prev) => (prev + 1) % FEATURES.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);
    }
  };

  const current = FEATURES[active];
  const Visual = VISUALS[current.key];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Linear Phase Selector Tabs */}
      <div
        role="tablist"
        aria-label="Studio workflow phases"
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between sm:justify-start gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md overflow-x-auto"
      >
        {FEATURES.map((f, i) => {
          const isSelected = active === i;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] whitespace-nowrap ${
                isSelected
                  ? "bg-white/[0.12] text-[#F4F4F6] border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] font-semibold"
                  : "text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.04] border border-transparent"
              }`}
            >
              <span className="font-mono text-[11px]" style={{ color: isSelected ? f.color : "#62666D" }}>
                {f.number}
              </span>
              <span>{f.tag}</span>
            </button>
          );
        })}

        {/* Step counter & arrow nav */}
        <div className="hidden sm:flex items-center gap-1.5 ml-auto pr-3">
          <button
            type="button"
            onClick={() => setActive((active - 1 + FEATURES.length) % FEATURES.length)}
            aria-label="Previous step"
            className="p-1.5 rounded-full text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-[12px] text-[#62666D]">
            {active + 1} / {FEATURES.length}
          </span>
          <button
            type="button"
            onClick={() => setActive((active + 1) % FEATURES.length)}
            aria-label="Next step"
            className="p-1.5 rounded-full text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Bento Showcase Panel */}
      <div className="interactive-card p-6 sm:p-10 rounded-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Phase Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div key={current.key} className="feed-in">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em]"
                  style={{ color: current.color }}
                >
                  <current.Icon className="w-4 h-4" /> {current.tag} · Phase {current.number}
                </span>
              </div>
              <h3 className="text-[26px] sm:text-[34px] font-semibold text-[#F4F4F6] leading-[1.15] tracking-tight mb-4">
                {current.title}
              </h3>
              <p className="text-[16px] text-[#9EA3AD] leading-relaxed mb-6">
                {current.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[13px] text-[#767B85]">
              <span>Predictable studio delivery</span>
              <span className="text-[#59D499] flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Verified process
              </span>
            </div>
          </div>

          {/* Right: Live Interactive Visual Demo */}
          <div className="lg:col-span-7">
            <div className="rounded-[18px] bg-[#0A0B0D] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 mb-6" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[12px] text-[#62666D]">cookie_studio / {current.key}</span>
                <span className="ml-auto font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/[0.04] text-[#8A8F98]">
                  Phase {current.number}
                </span>
              </div>
              <div key={current.key} className="feed-in min-h-[160px] flex flex-col justify-center">
                <Visual color={current.color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

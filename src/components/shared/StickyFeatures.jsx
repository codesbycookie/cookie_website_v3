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
  const refs = useRef([]);
  const tabListRef = useRef(null);

  // Optimized IntersectionObserver with tighter rootMargin and threshold
  // to avoid aggressive scroll traps
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number(e.target.dataset.index));
          }
        });
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: 0.2 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const selectStep = (index, scrollIntoView = true) => {
    setActive(index);
    if (scrollIntoView && refs.current[index]) {
      // Smoothly bring the text block into view without jarring jumps
      refs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (active + 1) % FEATURES.length;
      selectStep(next);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (active - 1 + FEATURES.length) % FEATURES.length;
      selectStep(prev);
    }
  };

  const current = FEATURES[active];
  const Visual = VISUALS[current.key];

  return (
    <div className="w-full flex flex-col gap-8">
      {/* 2026 UX Enhancement: Quick Phase Selector Bar (Eliminates scroll fatigue!) */}
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Product phases"
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between sm:justify-start gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-x-auto"
      >
        {FEATURES.map((f, i) => {
          const isSelected = active === i;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`feature-panel-${f.key}`}
              id={`feature-tab-${f.key}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => selectStep(i)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] whitespace-nowrap ${
                isSelected
                  ? "bg-white/[0.1] text-[#F4F4F6] border border-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
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

        {/* Micro Step Navigator arrows */}
        <div className="hidden sm:flex items-center gap-1 ml-auto pr-2">
          <button
            type="button"
            onClick={() => selectStep((active - 1 + FEATURES.length) % FEATURES.length)}
            aria-label="Previous phase"
            className="p-1 rounded-full text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.08] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-[11px] text-[#62666D] px-1">
            {active + 1}/{FEATURES.length}
          </span>
          <button
            type="button"
            onClick={() => selectStep((active + 1) % FEATURES.length)}
            aria-label="Next phase"
            className="p-1 rounded-full text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.08] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area: Responsive Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Compact, Ergonomic Scrolling steps */}
        <div className="space-y-6 lg:space-y-0">
          {FEATURES.map((f, i) => (
            <div
              key={f.key}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              data-active={active === i}
              id={`feature-panel-${f.key}`}
              role="tabpanel"
              aria-labelledby={`feature-tab-${f.key}`}
              // Reduced to compact min-h-[36vh] from 70vh to prevent scroll trapping
              className={`feature-step lg:min-h-[36vh] flex flex-col justify-center py-6 lg:py-4 transition-opacity duration-300 ${
                active === i ? "opacity-100" : "opacity-35 lg:opacity-40"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em]"
                  style={{ color: f.color }}
                >
                  <f.Icon className="w-4 h-4" /> {f.tag} · Phase {f.number}
                </span>
              </div>
              <h3 className="gradient-text text-[26px] sm:text-[32px] md:text-[36px] font-medium leading-[1.12] tracking-[-0.03em] mb-3">
                {f.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed max-w-lg mb-4">
                {f.desc}
              </p>

              {/* Mobile-only inline visual so smaller viewports don't lose the live demo */}
              <div className="block lg:hidden mt-4 pt-4 border-t border-white/[0.06]">
                <div className="beam rounded-[14px] bg-[#0B0C0E] border border-white/[0.08] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-1.5 mb-4" aria-hidden="true">
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="ml-2 font-mono text-[11px] text-[#62666D]">cookie / {f.key}</span>
                  </div>
                  {active === i && <Visual color={f.color} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Sticky visual (Desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-[20vh]">
            <div className="beam rounded-[16px] bg-[#0B0C0E] border border-white/[0.09] p-8 min-h-[360px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-3 font-mono text-[11px] text-[#62666D]">cookie / {current.key}</span>
                <span className="ml-auto font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-[#8A8F98]">
                  Phase {current.number}
                </span>
              </div>
              <div key={current.key}>
                <Visual color={current.color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

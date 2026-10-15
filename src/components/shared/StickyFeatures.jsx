import React, { useEffect, useRef, useState } from "react";
import { Zap, GitBranch, LineChart, MessageCircle, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    key: "discover",
    tag: "Plan",
    title: "Start with a plan, not a pitch deck",
    desc: "A focused discovery call turns your idea into scope, milestones and a fixed quote within a day.",
    color: "#57C1FF",
    Icon: Zap,
  },
  {
    key: "build",
    tag: "Build",
    title: "Watch it get built, every week",
    desc: "A live preview from week one and merged work you can click through. No status-report theatre.",
    color: "#D9A55B",
    Icon: GitBranch,
  },
  {
    key: "measure",
    tag: "Launch",
    title: "Launch fast, measure what matters",
    desc: "Performance budgets, SEO and analytics wired in before go-live so launch day is boring in the best way.",
    color: "#59D499",
    Icon: LineChart,
  },
  {
    key: "support",
    tag: "Support",
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
        <div key={r} className="feed-in flex items-center gap-3 rounded-[10px] bg-white/[0.03] border border-white/[0.07] px-4 py-3" style={{ animationDelay: `${i * 90}ms` }}>
          <CheckCircle2 className="w-4 h-4" style={{ color }} />
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
        <div key={n} className="feed-in flex items-center gap-3 rounded-[10px] bg-black/30 border border-white/[0.07] px-4 py-3" style={{ animationDelay: `${i * 90}ms` }}>
          <GitBranch className="w-3.5 h-3.5" style={{ color }} />
          <span className="text-[#8A8F98]">{t}/</span>
          <span className="text-[#F4F4F6]">{n}</span>
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
      <div className="flex items-end gap-2 h-36 mb-5" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[4px]"
            style={{ height: `${h}%`, background: `linear-gradient(to top, ${color}1a, ${color}b3)`, animation: `feed-in 600ms ${i * 70}ms both` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 font-mono text-[11px]">
        {[["Performance", 98], ["Accessibility", 100], ["SEO", 100]].map(([k, v]) => (
          <div key={k} className="rounded-[10px] bg-black/30 border border-white/[0.07] p-3">
            <div className="text-[22px] font-medium tracking-tight" style={{ color }}>{v}</div>
            <div className="text-[#62666D] mt-1">{k}</div>
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
      <div className="feed-in ml-auto max-w-[85%] rounded-[12px] rounded-br-[4px] px-4 py-3 text-[#08090A]" style={{ background: color, animationDelay: "160ms" }}>
        Done. Preview link is live, shipping tonight.
      </div>
      <div className="feed-in flex items-center gap-2 font-mono text-[11px] text-[#62666D]" style={{ animationDelay: "320ms" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" /> Replied in 6 min
      </div>
    </div>
  );
}

const VISUALS = { discover: PlanVisual, build: BuildVisual, measure: MeasureVisual, support: SupportVisual };

export default function StickyFeatures() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = FEATURES[active];
  const Visual = VISUALS[current.key];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
      {/* Scrolling steps */}
      <div>
        {FEATURES.map((f, i) => (
          <div
            key={f.key}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            data-active={active === i}
            className="feature-step lg:min-h-[70vh] flex flex-col justify-center py-10 lg:py-0"
          >
            <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] mb-4" style={{ color: f.color }}>
              <f.Icon className="w-4 h-4" /> {f.tag}
            </span>
            <h3 className="gradient-text text-[28px] sm:text-[36px] font-medium leading-[1.1] tracking-[-0.03em] mb-4">{f.title}</h3>
            <p className="text-[16px] text-[#8A8F98] leading-relaxed max-w-md">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Sticky visual */}
      <div className="hidden lg:block">
        <div className="sticky top-[18vh]">
          <div className="beam rounded-[16px] bg-[#0B0C0E] border border-white/[0.09] p-8 min-h-[380px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-1.5 mb-6" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="ml-3 font-mono text-[11px] text-[#62666D]">cookie / {current.key}</span>
            </div>
            <div key={current.key}>
              <Visual color={current.color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

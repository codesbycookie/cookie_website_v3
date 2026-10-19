import React from "react";
import Marquee from "./marquee";

const MARQUEE_ITEMS = [
  { name: "Torque Toyzz", role: "E-Commerce", accent: "#D9A55B" },
  { name: "IQ Bridge", role: "AI EdTech", accent: "#57C1FF" },
  { name: "Audnex Studio", role: "Creative Media", accent: "#59D499" },
  { name: "React 19", role: "Modern Frontend", accent: "#57C1FF" },
  { name: "V&D Granite", role: "B2B Export", accent: "#D3B2FF" },
  { name: "Next.js 15", role: "App Framework", accent: "#F4F4F6" },
  { name: "Skill Link", role: "Live Classroom", accent: "#FFC533" },
  { name: "Tailwind CSS", role: "Design Systems", accent: "#57C1FF" },
  { name: "SAP Cutover", role: "Industrial ERP", accent: "#59D499" },
  { name: "TypeScript", role: "Type Safety", accent: "#57C1FF" },
  { name: "Velu’s & Sons", role: "Heritage Retail", accent: "#D9A55B" },
  { name: "Node.js & FastAPI", role: "Cloud Services", accent: "#59D499" },
];

export default function ClientMarquee() {
  return (
    <div className="w-full py-8 relative overflow-hidden border-y border-white/[0.06] bg-[#0A0B0D]/60 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-5 mb-3 text-center">
        <p className="text-[12px] font-mono uppercase tracking-widest text-[#767B85] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B]" />
          <span>Trusted by ambitious businesses · Engineered with modern craft</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B]" />
        </p>
      </div>

      <Marquee speed={32} pauseOnHover={true} className="py-2">
        {MARQUEE_ITEMS.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 transition-all duration-200 shrink-0 select-none group cursor-default"
          >
            <span
              className="w-2 h-2 rounded-full transition-transform duration-200 group-hover:scale-125"
              style={{ backgroundColor: item.accent }}
            />
            <span className="text-[14px] font-medium text-[#F4F4F6] tracking-tight group-hover:text-white">
              {item.name}
            </span>
            <span className="text-[11px] font-mono text-[#767B85] border-l border-white/10 pl-2.5">
              {item.role}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

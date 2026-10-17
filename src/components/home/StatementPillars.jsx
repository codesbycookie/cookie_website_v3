import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem, TextFillOnScroll, MOTION_TOKENS } from "../../utils/motion";

/* Minimal line-art illustrations that draw themselves (stroke-dashoffset) */
function Fig1Illustration() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="w-full h-24 mb-6 flex items-center justify-center rounded-[8px] bg-white/[0.02] border border-white/[0.06] p-4">
      <svg className="w-12 h-12 text-[#D9A55B]" viewBox="0 0 48 48" fill="none">
        <motion.rect
          x="8"
          y="6"
          width="32"
          height="36"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: MOTION_TOKENS.ease }}
        />
        <motion.path
          d="M16 16H32M16 24H28M16 32H24"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: MOTION_TOKENS.ease }}
        />
        <motion.circle
          cx="30"
          cy="32"
          r="3"
          stroke="#59D499"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: MOTION_TOKENS.ease }}
        />
      </svg>
    </div>
  );
}

function Fig2Illustration() {
  return (
    <div className="w-full h-24 mb-6 flex items-center justify-center rounded-[8px] bg-white/[0.02] border border-white/[0.06] p-4">
      <svg className="w-12 h-12 text-[#57C1FF]" viewBox="0 0 48 48" fill="none">
        <motion.rect
          x="6"
          y="8"
          width="36"
          height="32"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: MOTION_TOKENS.ease }}
        />
        <motion.path
          d="M6 18H42"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: MOTION_TOKENS.ease }}
        />
        <motion.path
          d="M14 30L22 24L28 28L34 22"
          stroke="#59D499"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: MOTION_TOKENS.ease }}
        />
      </svg>
    </div>
  );
}

function Fig3Illustration() {
  return (
    <div className="w-full h-24 mb-6 flex items-center justify-center rounded-[8px] bg-white/[0.02] border border-white/[0.06] p-4">
      <svg className="w-12 h-12 text-[#D3B2FF]" viewBox="0 0 48 48" fill="none">
        <motion.circle
          cx="24"
          cy="16"
          r="6"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: MOTION_TOKENS.ease }}
        />
        <motion.path
          d="M14 36C14 30.5 18.5 27 24 27C29.5 27 34 30.5 34 36"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: MOTION_TOKENS.ease }}
        />
        <motion.path
          d="M24 27V42M14 36H34"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: MOTION_TOKENS.ease }}
        />
      </svg>
    </div>
  );
}

const PILLARS = [
  {
    fig: "Fig 0.1",
    title: "Fixed-scope quotes",
    desc: "A concrete breakdown of deliverables, timeline, and exact costs before code is written. No surprise invoices or budget drift.",
    illustration: Fig1Illustration,
    accent: "#D9A55B",
  },
  {
    fig: "Fig 0.2",
    title: "Weekly working previews",
    desc: "Click through real working features on a private staging link every week. Genuine progress you can test without bureaucracy.",
    illustration: Fig2Illustration,
    accent: "#57C1FF",
  },
  {
    fig: "Fig 0.3",
    title: "100% in-house Chennai team",
    desc: "Direct collaboration with the senior engineers and designers building your software. Zero outsourced layers, zero middlemen.",
    illustration: Fig3Illustration,
    accent: "#D3B2FF",
  },
];

export default function StatementPillars() {
  return (
    <section className="w-full py-28 md:py-36 px-5 sm:px-8 bg-[#08090A] relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Large Two-Tone Statement: First sentence bright white, remainder grey with TextFillOnScroll */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <Reveal direction="up" className="mb-4">
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block">
              Studio Craft & Discipline
            </span>
          </Reveal>

          <h2 className="text-[28px] sm:text-[40px] md:text-[46px] font-medium tracking-[-0.035em] leading-[1.2] text-[#F7F8F8] mb-6">
            A dedicated software studio built on craft, transparency, and speed.
          </h2>

          <div className="text-[19px] sm:text-[23px] leading-[1.6]">
            <TextFillOnScroll text="When you hire Cookie Inc., you partner directly with senior designers and developers in Chennai. No account managers playing telephone, no handoffs to junior contractors." />
          </div>
        </div>

        {/* Three Columns with Editorial Labels and Self-Drawing Line Art */}
        <StaggerGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => {
            const Illustration = pillar.illustration;
            return (
              <StaggerItem key={pillar.title}>
                <div className="rounded-[12px] p-6 sm:p-7 bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/[0.16] transition-colors h-full flex flex-col justify-between">
                  <div>
                    {/* Editorial Label */}
                    <div className="flex items-center justify-between mb-4 text-[11px] font-mono text-[#62666D]">
                      <span>{pillar.fig}</span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.accent }} />
                    </div>

                    {/* Self-drawing line art illustration */}
                    <Illustration />

                    <h3 className="text-[18px] font-medium text-[#F7F8F8] mb-2.5 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[14px] text-[#8A8F98] leading-[1.6]">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

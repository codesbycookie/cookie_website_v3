import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, CheckCircle2, Zap, Layers, Rocket, ShieldCheck, ArrowRight } from "lucide-react";
import { Reveal, SpotlightCard, MOTION_TOKENS } from "../../utils/motion";

const PHASES = [
  {
    key: "plan",
    number: 1,
    tag: "Plan",
    title: "Start with a plan, not a pitch deck",
    desc: "A focused discovery call turns your idea into scope, milestones and a fixed quote within a day.",
    accent: "#57C1FF",
    icon: Zap,
    items: [
      { text: "Brief and project goals", day: "Day 1" },
      { text: "Customer flows and wireframes", day: "Day 2" },
      { text: "Written scope and transparent quote", day: "Day 3" },
      { text: "Kickoff schedule confirmed", day: "Day 4" },
    ],
  },
  {
    key: "build",
    number: 2,
    tag: "Build",
    title: "Watch it get built, every week",
    desc: "A live preview from week one and merged work you can click through. No status-report theatre.",
    accent: "#D9A55B",
    icon: Layers,
    items: [
      { text: "Clickable prototype review", day: "Week 1" },
      { text: "Core platform features live", day: "Week 2" },
      { text: "Integrations and testing link", day: "Week 3" },
      { text: "Device polish and performance pass", day: "Week 4" },
    ],
  },
  {
    key: "launch",
    number: 3,
    tag: "Launch",
    title: "Launch fast, measure what matters",
    desc: "Performance budgets, SEO and analytics wired in before go-live so launch day is boring in the best way.",
    accent: "#59D499",
    icon: Rocket,
    items: [
      { text: "Sub-second speed benchmark", day: "Speed 98+" },
      { text: "Google search indexing verified", day: "SEO 100%" },
      { text: "Mobile checkout flow verified", day: "Checked" },
      { text: "Production domain and SSL live", day: "Secure" },
    ],
  },
  {
    key: "support",
    number: 4,
    tag: "Support",
    title: "A founder on every call, after launch too",
    desc: "Direct line on WhatsApp, fast fixes and a roadmap for what to ship next.",
    accent: "#D3B2FF",
    icon: ShieldCheck,
    items: [
      { text: "Direct line with builders on WhatsApp", day: "Instant" },
      { text: "Uptime monitoring & cloud maintenance", day: "24/7" },
      { text: "Rapid minor feature updates", day: "Turnaround" },
      { text: "Quarterly product roadmap advice", day: "Ongoing" },
    ],
  },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const current = PHASES[activeStep];
  const Icon = current.icon;

  return (
    <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013] relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
            Predictable Workflow
          </span>
          <h2 className="text-[30px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
            How we work from idea to launch
          </h2>
          <p className="text-[16px] text-[#9EA3AD]">
            No mysteries, no disappearing acts. An interactive, structured sequence you can inspect in real time.
          </p>
        </Reveal>

        {/* Phase Progress Bar & Step Selectors */}
        <div className="mb-12">
          {/* Progress bar container */}
          <div className="relative w-full h-[3px] bg-white/[0.08] rounded-full mb-6 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#57C1FF] via-[#D9A55B] to-[#59D499]"
              initial={{ width: "25%" }}
              animate={{ width: `${((activeStep + 1) / PHASES.length) * 100}%` }}
              transition={{ duration: 0.45, ease: MOTION_TOKENS.ease }}
            />
          </div>

          {/* Step Pill Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PHASES.map((phase, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;
              return (
                <button
                  key={phase.key}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-3.5 sm:p-4 rounded-[14px] text-left transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-white/[0.08] border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[12px] font-semibold tracking-wider uppercase transition-colors ${
                        isActive ? "text-[#D9A55B]" : "text-[#767B85]"
                      }`}
                    >
                      Step 0{phase.number}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isActive
                          ? "bg-[#D9A55B] scale-125"
                          : isPassed
                          ? "bg-[#59D499]"
                          : "bg-white/20"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-[15px] sm:text-[16px] font-semibold transition-colors ${
                      isActive ? "text-[#F4F4F6]" : "text-[#9EA3AD]"
                    }`}
                  >
                    {phase.tag}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Main Content: Cross-fade with short slide & rolling odometer counter */}
        <SpotlightCard className="p-6 sm:p-10 md:p-12 rounded-[24px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.38, ease: MOTION_TOKENS.ease }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Phase Description & Rolling Counter */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  {/* Rolling odometer counter */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-[10px] bg-white/[0.05] border border-white/10 flex items-center justify-center" style={{ color: current.accent }}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Odometer effect: "0X / 04" */}
                    <div className="flex items-baseline gap-1 text-[14px] font-medium text-[#767B85]">
                      <span className="text-[20px] font-bold text-[#F4F4F6] inline-flex overflow-hidden h-7">
                        <motion.span
                          key={current.number}
                          initial={{ y: 24, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -24, opacity: 0 }}
                          transition={{ duration: 0.35, ease: MOTION_TOKENS.ease }}
                        >
                          0{current.number}
                        </motion.span>
                      </span>
                      <span>/ 04</span>
                      <span className="ml-2 text-[12px] uppercase tracking-wider font-semibold" style={{ color: current.accent }}>
                        · {current.tag} Phase
                      </span>
                    </div>
                  </div>

                  <h3 className="text-[26px] sm:text-[34px] font-semibold text-[#F4F4F6] tracking-tight leading-snug mb-3">
                    {current.title}
                  </h3>

                  <p className="text-[16px] text-[#9EA3AD] leading-relaxed">
                    {current.desc}
                  </p>
                </div>

                {/* Navigation helpers */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PHASES.length - 1))}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-[13px] text-[#9EA3AD] hover:text-[#F4F4F6] border border-white/10 transition-colors cursor-pointer"
                  >
                    ← Previous Phase
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev + 1) % PHASES.length)}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[13px] font-medium text-[#F4F4F6] border border-white/15 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A55B]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Timeline Card (REPLACING TERMINAL UI) */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-[18px] bg-[#0A0B0D] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] text-[12px]">
                    <span className="font-semibold text-[#F4F4F6] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#59D499] animate-pulse" />
                      <span>Studio Milestone Checklist</span>
                    </span>
                    <span className="text-[#D9A55B] font-medium">{current.tag} Sprint</span>
                  </div>

                  {/* Clean Timeline Rows checking off with soft green tick */}
                  <div className="space-y-3">
                    {current.items.map((item, idx) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.08, ease: MOTION_TOKENS.ease }}
                        className="p-3.5 rounded-[12px] bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#59D499]" />
                          </div>
                          <span className="text-[14px] text-[#D0D6E0] font-medium">
                            {item.text}
                          </span>
                        </div>
                        <span className="text-[12px] text-[#767B85] shrink-0 font-medium px-2 py-0.5 rounded bg-white/[0.04]">
                          {item.day}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#767B85]">
                    <span>100% In-house Chennai creators</span>
                    <span className="text-[#59D499] flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Deliverable
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </SpotlightCard>
      </div>
    </section>
  );
}

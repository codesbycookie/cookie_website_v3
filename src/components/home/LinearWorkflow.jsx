import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, MOTION_TOKENS } from "../../utils/motion";

const PHASES = [
  {
    key: "plan",
    number: "01",
    tag: "Plan",
    title: "Start with a plan, not a pitch deck",
    desc: "A focused discovery call turns your idea into scope, milestones and a fixed quote within a day.",
    accent: "#D9A55B",
    items: [
      { text: "Brief and goals", day: "Day 1", progress: 25 },
      { text: "User flows", day: "Day 2", progress: 50 },
      { text: "Scope and quote", day: "Day 3", progress: 75 },
      { text: "Kickoff date", day: "Day 4", progress: 100 },
    ],
  },
  {
    key: "build",
    number: "02",
    tag: "Build",
    title: "Watch it get built, every week",
    desc: "A live preview from week one and merged work you can click through. No status-report theatre.",
    accent: "#57C1FF",
    items: [
      { text: "Clickable prototype review", day: "Week 1", progress: 25 },
      { text: "Core platform features live", day: "Week 2", progress: 50 },
      { text: "Integrations and testing link", day: "Week 3", progress: 75 },
      { text: "Device polish and performance pass", day: "Week 4", progress: 100 },
    ],
  },
  {
    key: "launch",
    number: "03",
    tag: "Launch",
    title: "Launch fast, measure what matters",
    desc: "Performance budgets, SEO and analytics wired in before go-live so launch day is boring in the best way.",
    accent: "#59D499",
    items: [
      { text: "Sub-second speed benchmark", day: "Speed 98+", progress: 25 },
      { text: "Google search indexing verified", day: "SEO 100%", progress: 50 },
      { text: "Mobile checkout flow verified", day: "Checked", progress: 75 },
      { text: "Production domain and SSL live", day: "Secure", progress: 100 },
    ],
  },
  {
    key: "support",
    number: "04",
    tag: "Support",
    title: "A founder on every call, after launch too",
    desc: "Direct line on WhatsApp, fast fixes and a roadmap for what to ship next.",
    accent: "#D3B2FF",
    items: [
      { text: "Direct line with builders on WhatsApp", day: "Instant", progress: 25 },
      { text: "Uptime monitoring & cloud maintenance", day: "24/7", progress: 50 },
      { text: "Rapid minor feature updates", day: "Turnaround", progress: 75 },
      { text: "Quarterly product roadmap advice", day: "Ongoing", progress: 100 },
    ],
  },
];

export default function LinearWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const current = PHASES[activeStep];

  return (
    <section className="w-full py-28 md:py-36 px-5 sm:px-8 bg-[#08090A] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <Reveal direction="up" className="max-w-2xl mb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-2.5">
            Predictable Workflow
          </span>
          <h2 className="text-[28px] sm:text-[40px] font-medium tracking-[-0.035em] text-[#F7F8F8] mb-4">
            How we work from idea to launch.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[#8A8F98] leading-[1.6]">
            No mysteries, no disappearing acts. A clear, four-phase delivery cycle where you test working software every single week.
          </p>
        </Reveal>

        {/* Workflow Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Progress Stepper + Phase details + Odometer */}
          <div className="lg:col-span-5 space-y-8">
            {/* Scroll/Click Progress Line Stepper */}
            <div className="relative pl-6 space-y-6">
              {/* Vertical progress line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/[0.08]">
                <motion.div
                  className="w-full bg-[#D9A55B]"
                  animate={{
                    height: `${((activeStep + 1) / PHASES.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4, ease: MOTION_TOKENS.ease }}
                />
              </div>

              {PHASES.map((phase, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep > idx;

                return (
                  <button
                    key={phase.key}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="relative text-left block w-full group cursor-pointer focus-visible:outline-none"
                  >
                    {/* Stepper node */}
                    <span
                      className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full border transition-all duration-200 ${
                        isActive
                          ? "bg-[#D9A55B] border-[#D9A55B] scale-125 shadow-[0_0_12px_rgba(217,165,91,0.6)]"
                          : isPast
                          ? "bg-[#59D499] border-[#59D499]"
                          : "bg-[#08090A] border-white/20 group-hover:border-white/40"
                      }`}
                    />

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[12px] font-mono transition-colors ${
                          isActive
                            ? "text-[#D9A55B]"
                            : "text-[#62666D] group-hover:text-[#8A8F98]"
                        }`}
                      >
                        {phase.number}
                      </span>
                      <span
                        className={`text-[16px] sm:text-[18px] font-medium transition-colors ${
                          isActive
                            ? "text-[#F7F8F8]"
                            : "text-[#62666D] group-hover:text-[#8A8F98]"
                        }`}
                      >
                        {phase.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Phase Details Card */}
            <div className="p-6 rounded-[12px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] space-y-4">
              {/* Odometer Counter */}
              <div className="flex items-baseline gap-2 text-[13px] text-[#62666D]">
                <span className="text-[22px] font-medium text-[#F7F8F8] inline-flex overflow-hidden h-7">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current.number}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: MOTION_TOKENS.ease }}
                    >
                      {current.number}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span>/ 04</span>
                <span className="text-[#8A8F98]">· {current.tag} Phase</span>
              </div>

              <h3 className="text-[20px] font-medium text-[#F7F8F8] tracking-tight">
                {current.title}
              </h3>
              <p className="text-[14px] text-[#8A8F98] leading-[1.6]">
                {current.desc}
              </p>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : PHASES.length - 1))
                  }
                  className="px-3 py-1.5 rounded-full text-[12px] text-[#8A8F98] hover:text-[#F7F8F8] bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors cursor-pointer"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % PHASES.length)}
                  className="px-3 py-1.5 rounded-full text-[12px] font-medium text-[#F7F8F8] bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.12] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Next phase</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9A55B]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Horizontal Roadmap Visual (Gantt Chart style) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[14px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] space-y-6">
              {/* Roadmap Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-[12px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#59D499]" />
                  <span className="font-medium text-[#F7F8F8]">Sprint Roadmap</span>
                </div>
                <div className="flex items-center gap-6 text-[#62666D] font-mono text-[11px]">
                  <span>Stage 1</span>
                  <span>Stage 2</span>
                  <span>Stage 3</span>
                  <span>Stage 4</span>
                </div>
              </div>

              {/* Gantt Timeline Bars */}
              <div className="space-y-4">
                {current.items.map((item, idx) => {
                  return (
                    <div key={item.text} className="space-y-1.5">
                      <div className="flex items-center justify-between text-[13px]">
                        <span className="text-[#F7F8F8] font-medium flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#59D499]" />
                          </span>
                          <span>{item.text}</span>
                        </span>
                        <span className="text-[12px] text-[#8A8F98] font-mono">
                          {item.day}
                        </span>
                      </div>

                      {/* Horizontal Gantt timeline track */}
                      <div className="h-2 w-full rounded-full bg-white/[0.04] overflow-hidden">
                        <motion.div
                          initial={shouldReduceMotion ? { width: `${item.progress}%` } : { width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{
                            duration: 0.8,
                            delay: idx * 0.1,
                            ease: MOTION_TOKENS.ease,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-[#D9A55B]/40 to-[#D9A55B]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Studio Assurance Footnote */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#62666D]">
                <span>Weekly private staging URL</span>
                <span className="text-[#59D499] flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Verified Production Deliverable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

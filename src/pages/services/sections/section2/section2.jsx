import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Section2() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedGoal, setSelectedGoal] = useState("launch");

  const GOALS = [
    {
      id: "launch",
      label: "Launch a new product or company",
      recommended: "Business LaunchPad",
      summary:
        "Best for founders bringing a new concept to market with clean branding and an authoritative web presence.",
    },
    {
      id: "grow",
      label: "Attract more customers and scale up",
      recommended: "LevelUp Pack",
      summary:
        "Best for established businesses upgrading their digital experience to generate consistent inbound inquiries.",
    },
    {
      id: "commerce",
      label: "Sell products online directly to buyers",
      recommended: "The Scale-Cart",
      summary:
        "Best for retail brands wanting a fast online store and seamless mobile checkout with WhatsApp order flow.",
    },
    {
      id: "operations",
      label: "Automate internal operations & paperwork",
      recommended: "Custom Business Engine",
      summary:
        "Best for operations teams replacing fragmented spreadsheets with a single, tailored web portal.",
    },
  ];

  const currentGoal = GOALS.find((g) => g.id === selectedGoal) || GOALS[0];
  const tabRefs = useRef([]);

  const handleTabKeyDown = (e, index) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % GOALS.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + GOALS.length) % GOALS.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = GOALS.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    setSelectedGoal(GOALS[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-8 border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto text-left">
        <div className="max-w-2xl mb-8">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-2">
            Which service is right for you?
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#8A8F98]">
            Select your immediate business priority to see our recommended approach:
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Business priority options"
          className="rounded-[14px] border border-white/[0.08] bg-white/[0.02] p-1.5 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-1.5 mb-6 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
        >
          {GOALS.map((g, idx) => {
            const isSelected = selectedGoal === g.id;
            return (
              <button
                key={g.id}
                ref={(el) => (tabRefs.current[idx] = el)}
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${g.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedGoal(g.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                type="button"
                className={`relative p-3.5 sm:p-4 rounded-[10px] text-left transition-colors cursor-pointer min-h-[58px] min-w-[240px] sm:min-w-0 flex items-center shrink-0 sm:shrink select-none snap-start focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                  isSelected ? "text-[#F7F8F8]" : "text-[#8A8F98] hover:text-[#F7F8F8]"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="segmentedHighlight"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                    className="absolute inset-0 rounded-[10px] bg-[#D9A55B]/[0.08] border border-[#D9A55B]/25 shadow-[inset_0_1px_0_rgba(217,165,91,0.12)]"
                  />
                )}

                <span className="relative z-10 text-[13px] sm:text-[14px] font-medium leading-snug">
                  {g.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${currentGoal.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentGoal.id}`}
          aria-live="polite"
          className="rounded-[14px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(217,165,91,0.08)] min-h-[128px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="overflow-hidden flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGoal.id}
                initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-[12px] text-[#8A8F98] block mb-1">
                  Recommended focus
                </span>
                <h3 className="text-[19px] sm:text-[21px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-1.5">
                  {currentGoal.recommended}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#8A8F98] max-w-2xl leading-relaxed">
                  {currentGoal.summary}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/[0.16] bg-white/[0.02] hover:bg-white/[0.04] text-[13px] sm:text-[14px] text-[#F7F8F8] font-medium transition-colors"
          >
            Discuss this scope
          </Link>
        </div>
      </div>
    </section>
  );
}

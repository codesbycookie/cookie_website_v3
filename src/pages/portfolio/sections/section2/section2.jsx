import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Section2({ activeFilter, setActiveFilter, filterOptions }) {
  const prefersReducedMotion = useReducedMotion();
  const filterRowRef = useRef(null);
  const filterBtnsRef = useRef([]);

  const handleFilterKeyDown = (e, idx) => {
    let nextIdx = idx;
    if (e.key === "ArrowRight") {
      nextIdx = (idx + 1) % filterOptions.length;
    } else if (e.key === "ArrowLeft") {
      nextIdx = (idx - 1 + filterOptions.length) % filterOptions.length;
    } else if (e.key === "Home") {
      nextIdx = 0;
    } else if (e.key === "End") {
      nextIdx = filterOptions.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const targetFilter = filterOptions[nextIdx];
    setActiveFilter(targetFilter.id);
    filterBtnsRef.current[nextIdx]?.focus();
  };

  return (
    <nav
      ref={filterRowRef}
      aria-label="Filter case studies"
      className="sticky top-[64px] z-30 w-full backdrop-blur-md bg-[#08090A]/90 border-b border-white/[0.08] transition-colors"
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-8 py-3 flex items-center">
        <div
          role="group"
          aria-label="Filter case studies by category"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full flex-nowrap pr-6"
        >
          {filterOptions.map((f, idx) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                ref={(el) => (filterBtnsRef.current[idx] = el)}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(f.id)}
                onKeyDown={(e) => handleFilterKeyDown(e, idx)}
                className={`relative px-4 py-1.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 whitespace-nowrap shrink-0 inline-flex items-center ${
                  isActive
                    ? "text-[#FAF5EB]"
                    : "text-[#8A8F98] hover:text-[#F7F8F8]"
                }`}
                style={{
                  border: isActive
                    ? "1px solid rgba(217, 165, 91, 0.35)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: isActive
                    ? "rgba(217, 165, 91, 0.08)"
                    : "transparent",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="linear-filter-indicator"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 400, damping: 32 }
                    }
                    className="absolute inset-0 rounded-full bg-[#D9A55B]/[0.05] pointer-events-none"
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{f.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

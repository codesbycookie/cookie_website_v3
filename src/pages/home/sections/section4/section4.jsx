import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homepage } from "../../../../data/data";
import { Reveal, MOTION_TOKENS } from "../../../../utils/motion.util";

export default function Section4() {
  const reviews = homepage.section6.reviews.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width dynamically so the SVG curve follows the card's rounded top border
  useEffect(() => {
    if (!cardRef.current) return;
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(cardRef.current);
    window.addEventListener("resize", updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Compute curvy top path matching the rounded-[16px] corner geometry
  const r = 16;
  const topPath =
    cardWidth > 32
      ? `M 0.5,${r} A ${r - 0.5} ${r - 0.5} 0 0 1 ${r} 0.5 L ${
          cardWidth - r
        } 0.5 A ${r - 0.5} ${r - 0.5} 0 0 1 ${cardWidth - 0.5} ${r}`
      : "";

  // Auto-advance every 6 seconds, pausing on hover or reduced-motion
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, reviews.length, shouldReduceMotion]);

  const current = reviews[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Swipe on touch handler
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section
      id="testimonials"
      data-section="testimonials"
      className="w-full py-28 md:py-36 px-5 sm:px-8 bg-[#08090A] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <Reveal direction="up" className="max-w-xl mb-14">
          <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-2.5">
            Client Feedback
          </span>
          <h2 className="text-[28px] sm:text-[40px] font-medium tracking-[-0.035em] text-[#F7F8F8]">
            What founders say about working with us.
          </h2>
        </Reveal>

        {/* Testimonial Stage Card */}
        <div
          ref={cardRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-[16px] bg-[rgba(245,235,220,0.02)] border border-white/[0.08] hover:border-white/[0.14] transition-colors duration-300 shadow-[inset_0_1px_0_rgba(217,165,91,0.08)] p-6 sm:p-10 md:p-14 flex flex-col justify-between min-h-[340px] sm:min-h-[360px] select-none"
        >
          {/* Curvy Hairline Progress Indicator that traces the rounded top contour */}
          {topPath && (
            <svg
              className="absolute -top-[1px] -left-[1px] pointer-events-none overflow-visible z-10"
              style={{ width: cardWidth, height: 36 }}
              aria-hidden="true"
            >
              {/* Background track along the curve */}
              <path
                d={topPath}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Brown animated progress indicator tracing the curvy corners */}
              <motion.path
                key={`${activeIndex}-${isPaused}`}
                d={topPath}
                fill="none"
                stroke="#D9A55B"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={
                  isPaused || shouldReduceMotion
                    ? { pathLength: 0 }
                    : { pathLength: 1 }
                }
                transition={{ duration: 6, ease: "linear" }}
              />
            </svg>
          )}

          {/* Swipeable & Animated Quote Container */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing flex-1 flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: MOTION_TOKENS.ease }}
                className="flex-1 flex flex-col justify-between space-y-6 sm:space-y-8"
              >
                {/* Big type quote with consistent minimum height container */}
                <div className="min-h-[110px] sm:min-h-[130px] md:min-h-[150px] flex items-center">
                  <blockquote className="text-[18px] sm:text-[24px] md:text-[28px] font-medium text-[#F7F8F8] tracking-[-0.025em] leading-[1.35]">
                    "{current.body}"
                  </blockquote>
                </div>

                {/* Persistent Author + Navigation Row (Guaranteed flex-nowrap: arrows never wrap or jump) */}
                <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-white/[0.06] flex-nowrap gap-3">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                    {/* Initial avatar */}
                    <div className="w-10 h-10 rounded-full bg-[rgba(217,165,91,0.06)] border border-[#D9A55B]/25 flex items-center justify-center font-medium text-[#D9A55B] text-[15px] shrink-0">
                      {current.name[0]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <cite className="not-italic font-medium text-[#F7F8F8] text-[14px] sm:text-[15px] block truncate">
                        {current.name}
                      </cite>
                      <span className="text-[12px] sm:text-[13px] text-[#8A8F98] block truncate">
                        {current.role}
                      </span>
                    </div>
                  </div>

                  {/* Manual Arrow Controls - Permanently anchored on the right */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/[0.08] hover:border-white/[0.2] bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-[#8A8F98] hover:text-[#F7F8F8] transition-colors cursor-pointer touch-manipulation active:scale-95 shrink-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-white/[0.08] hover:border-white/[0.2] bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-[#8A8F98] hover:text-[#F7F8F8] transition-colors cursor-pointer touch-manipulation active:scale-95 shrink-0"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Small Dot Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-4">
            {reviews.map((r, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Jump to quote by ${r.name}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isActive ? "w-6 bg-[#D9A55B]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

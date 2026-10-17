import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homepage } from "../../data/data";
import { Reveal, MOTION_TOKENS } from "../../utils/motion";

export default function TestimonialsCarousel() {
  const reviews = homepage.section6.reviews.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-[12px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-8 sm:p-12 md:p-16 flex flex-col justify-between min-h-[340px] select-none"
        >
          {/* Thin Hairline Progress Indicator at the top of the card */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/[0.06] overflow-hidden rounded-t-[12px]">
            <motion.div
              key={`${activeIndex}-${isPaused}`}
              initial={{ width: "0%" }}
              animate={isPaused || shouldReduceMotion ? { width: "0%" } : { width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-[#D9A55B]"
            />
          </div>

          {/* Swipeable & Animated Quote Container: Cross-fade with 12px rise */}
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
                className="space-y-8"
              >
                {/* Big type quote */}
                <blockquote className="text-[22px] sm:text-[30px] md:text-[34px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.28]">
                  "{current.body}"
                </blockquote>

                {/* Name + role underneath with initial avatar */}
                <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Initial avatar */}
                    <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.10] flex items-center justify-center font-medium text-[#D9A55B] text-[15px] shrink-0">
                      {current.name[0]}
                    </div>
                    <div>
                      <cite className="not-italic font-medium text-[#F7F8F8] text-[15px] block">
                        {current.name}
                      </cite>
                      <span className="text-[13px] text-[#8A8F98] block">
                        {current.role}
                      </span>
                    </div>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-8 h-8 rounded-full border border-white/[0.08] hover:border-white/[0.16] bg-white/[0.02] hover:bg-white/[0.06] flex items-center justify-center text-[#8A8F98] hover:text-[#F7F8F8] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-8 h-8 rounded-full border border-white/[0.08] hover:border-white/[0.16] bg-white/[0.02] hover:bg-white/[0.06] flex items-center justify-center text-[#8A8F98] hover:text-[#F7F8F8] transition-colors cursor-pointer"
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
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? "w-6 bg-[#D9A55B]" : "w-1.5 bg-white/20 hover:bg-white/40"
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

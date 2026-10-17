import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { homepage } from "../../data/data";
import { Reveal, MOTION_TOKENS } from "../../utils/motion";

export default function HomeFaq() {
  const items = homepage.section8.faqs;
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  const buttonRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleKeyDown = (e, index) => {
    const count = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % count;
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + count) % count;
      buttonRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttonRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttonRefs.current[count - 1]?.focus();
    }
  };

  return (
    <section className="w-full py-28 md:py-36 px-5 sm:px-8 bg-[#08090A] border-t border-white/[0.08] relative">
      <div className="max-w-[850px] mx-auto">
        {/* Section Header */}
        <Reveal direction="up" className="max-w-xl mb-14">
          <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-2.5">
            Common Questions
          </span>
          <h2 className="text-[28px] sm:text-[40px] font-medium tracking-[-0.035em] text-[#F7F8F8] mb-3">
            Everything you need to know before reaching out.
          </h2>
          <p className="text-[16px] text-[#8A8F98] leading-[1.6]">
            Straight answers on timelines, pricing, support, and code ownership.
          </p>
        </Reveal>

        {/* Hairline-Divided Accordion */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const headerId = `faq-header-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={`group relative transition-colors duration-200 ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"
                }`}
              >
                {/* Left accent bar that grows on hover / stays open */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#D9A55B] transition-transform duration-200 origin-top ${
                    isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                  }`}
                  aria-hidden="true"
                />

                <h3>
                  <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    id={headerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleIndex(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full py-6 px-4 sm:px-6 flex items-center justify-between text-left text-[16px] sm:text-[18px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] transition-colors duration-150 select-none cursor-pointer"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`font-mono text-[12px] transition-colors ${
                          isOpen ? "text-[#D9A55B]" : "text-[#62666D]"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className={isOpen ? "text-[#F7F8F8]" : ""}>
                        {item.question}
                      </span>
                    </span>

                    {/* "+" rotates 45 degrees to "x" */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform duration-250 ${
                        isOpen
                          ? "rotate-45 text-[#D9A55B] bg-[#D9A55B]/10"
                          : "rotate-0 text-[#62666D] group-hover:text-[#F7F8F8]"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Smooth height accordion body; answer text fades in after open */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: MOTION_TOKENS.ease },
                          opacity: { duration: 0.25, delay: 0.08 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.25, ease: MOTION_TOKENS.ease },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-4 sm:px-6 pl-10 sm:pl-12">
                        <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-[1.6]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

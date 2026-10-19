import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useInView, useReducedMotion } from "framer-motion";
import { aboutpage } from "../../../../data/data";

function MilestoneItem({ num, title, desc, prefersReducedMotion }) {
  const itemRef = useRef(null);
  const inView = useInView(itemRef, {
    margin: "0px 0px -38% 0px",
  });
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasPassed(true);
    }
  }, [inView]);

  const isActive = prefersReducedMotion || inView || hasPassed;

  return (
    <li
      ref={itemRef}
      className={`relative pl-8 sm:pl-10 pb-12 sm:pb-14 last:pb-2 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <span
        className={`absolute left-[3px] top-[6px] w-[9px] h-[9px] rounded-full transition-all duration-300 -translate-x-[0.5px] ${
          isActive
            ? "bg-[#D9A55B] border border-[#D9A55B]"
            : "bg-[#08090A] border border-white/[0.28]"
        }`}
        aria-hidden="true"
      />

      <span className="block text-[12px] font-mono text-[#62666D] tabular-nums tracking-wide mb-1.5">
        {num}
      </span>

      <h3 className="text-[19px] sm:text-[20px] font-medium text-[#F7F8F8] tracking-[-0.02em] mb-2">
        {title}
      </h3>

      <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed max-w-xl">
        {desc}
      </p>
    </li>
  );
}

export default function Section5() {
  const prefersReducedMotion = useReducedMotion();
  const chapters = aboutpage.section2.items;

  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <section
      aria-label="Studio history and milestones"
      className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-28 md:self-start">
          <h2 className="linear-headline text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-[1.14] mb-3">
            Our journey so far
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
            From our first client deliverables in Chennai to building platforms used across India.
          </p>
        </div>

        <div ref={timelineRef} className="md:col-span-7 lg:col-span-8 relative">
          <div
            className="absolute left-[7px] top-3 bottom-6 w-[1px] bg-white/[0.08]"
            aria-hidden="true"
          />

          <motion.div
            style={{
              scaleY: prefersReducedMotion ? 1 : timelineProgress,
            }}
            className="absolute left-[7px] top-3 bottom-6 w-[1px] bg-[#D9A55B] origin-top pointer-events-none"
            aria-hidden="true"
          />

          <ol className="relative list-none m-0 p-0">
            {chapters.map((chapter, idx) => (
              <MilestoneItem
                key={chapter.title}
                num={String(idx + 1).padStart(2, "0")}
                title={chapter.title.replace(/^Chapter \d+:\s*/, "")}
                desc={chapter.description}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

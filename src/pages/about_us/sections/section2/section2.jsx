import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

function TextFillOnScroll({ text, className = "" }) {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.45"],
  });

  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <p className={`text-[#F7F8F8] ${className}`}>{text}</p>;
  }

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <WordSpan key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </WordSpan>
        );
      })}
    </p>
  );
}

function WordSpan({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.38, 1]);
  const color = useTransform(progress, range, ["#62666D", "#F7F8F8"]);
  return (
    <span className="inline-block mr-[0.26em]">
      <motion.span style={{ color, opacity }}>
        {children}
      </motion.span>
    </span>
  );
}

function StudioCard({ prefersReducedMotion }) {
  const rows = [
    { label: "Team Model", value: "100% In-house" },
    { label: "Delivery Sprints", value: "Weekly click-throughs" },
    { label: "Code & Asset Rights", value: "100% Client Owned" },
    { label: "Account Executives", value: "Zero Middlemen" },
  ];

  return (
    <div className="rounded-[16px] bg-[rgba(245,235,220,0.02)] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(217,165,91,0.10)] p-6 sm:p-7 w-full max-w-sm mx-auto lg:mx-0">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
        <span className="text-[13px] font-medium text-[#F7F8F8]">
          Cookie Studio Lab
        </span>
        <span className="text-[12px] text-[#8A8F98]">
          Chennai HQ
        </span>
      </div>

      <div className="divide-y divide-white/[0.06] border-y border-white/[0.06] mb-5">
        {rows.map((row, idx) => (
          <motion.div
            key={row.label}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: idx * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="py-3.5 flex items-center justify-between text-[13px]"
          >
            <span className="text-[#8A8F98]">{row.label}</span>
            <span className="font-medium text-[#F7F8F8] tabular-nums">{row.value}</span>
          </motion.div>
        ))}
      </div>

      <p className="text-[12px] text-[#62666D] text-center pt-1">
        Engineered with care and discipline in Chennai.
      </p>
    </div>
  );
}

export default function Section2() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Why we exist"
      className="w-full py-20 md:py-28 px-5 sm:px-8"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <StudioCard prefersReducedMotion={prefersReducedMotion} />
        </div>

        <div className="lg:col-span-7 flex flex-col text-left">
          <div className="text-[13px] text-[#D9A55B]/90 font-medium tracking-[0.02em] mb-3">
            Why we exist
          </div>

          <h2 className="linear-headline text-[28px] sm:text-[36px] md:text-[40px] font-semibold leading-[1.12] mb-6">
            Software should be built with care, clarity, and respect for your time.
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed mb-5">
            Most clients who come to us have experienced the same frustrations elsewhere: agencies that talk in circles, junior teams hidden behind account executives, and projects that drag on for months with little to show.
          </p>

          <TextFillOnScroll
            text="We built Cookie Inc. around a straightforward alternative: a compact, high-taste studio where you collaborate directly with senior craftspeople. We keep our team small on purpose so every product gets the focus it deserves."
            className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed"
          />

          <div className="pt-6 mt-6 border-t border-white/[0.08] grid grid-cols-2 gap-6">
            <div>
              <p className="text-[22px] sm:text-[26px] font-semibold text-[#F7F8F8] tracking-tight mb-1">
                Chennai
              </p>
              <p className="text-[13px] sm:text-[14px] text-[#8A8F98]">
                Our physical home base and studio
              </p>
            </div>
            <div>
              <p className="text-[22px] sm:text-[26px] font-semibold text-[#F7F8F8] tracking-tight mb-1">
                Zero Bloat
              </p>
              <p className="text-[13px] sm:text-[14px] text-[#8A8F98]">
                No account executives or middlemen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

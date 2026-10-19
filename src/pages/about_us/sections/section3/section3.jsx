import React, { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function StatCounter({ value, prefersReducedMotion }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!inView || hasAnimatedRef.current) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    hasAnimatedRef.current = true;
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const duration = 900;
    const startTime = performance.now();
    let animationFrameId;

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(ease * target);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, value, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="tabular-nums font-semibold tracking-[-0.035em] text-[40px] sm:text-[48px] md:text-[54px] text-[#F7F8F8] leading-none mb-2.5"
    >
      {displayValue}
    </div>
  );
}

export default function Section3() {
  const prefersReducedMotion = useReducedMotion();
  const STATS = [
    { num: "10+", label: "Engineers and designers based in Chennai" },
    { num: "40+", label: "Real business platforms and tools delivered" },
    { num: "100%", label: "In-house craft with zero outsourced work" },
    { num: "24h", label: "Average response time on client inquiries" },
  ];

  return (
    <section
      aria-label="Studio statistics"
      className="w-full border-t border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((item, idx) => (
            <div
              key={item.label}
              className={`py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center text-center
                ${idx % 2 === 1 ? "border-l border-white/[0.08]" : ""}
                ${idx >= 2 ? "border-t border-white/[0.08] lg:border-t-0" : ""}
                ${idx > 0 ? "lg:border-l lg:border-white/[0.08]" : ""}
              `}
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="w-full flex justify-center">
                <StatCounter
                  value={item.num}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </dd>
              <p className="text-[13px] sm:text-[14px] text-[#8A8F98] max-w-[200px] leading-snug" aria-hidden="true">
                {item.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

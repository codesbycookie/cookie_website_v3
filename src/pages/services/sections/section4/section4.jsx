import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Layers,
  Megaphone,
  Palette,
} from "lucide-react";

export default function Section4() {
  const prefersReducedMotion = useReducedMotion();
  const solveGridRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: -500, y: -500 });

  const handleSolveMouseMove = (e) => {
    if (!solveGridRef.current) return;
    const rect = solveGridRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const CAPABILITIES = [
    {
      icon: Globe,
      title: "Websites & Web Applications",
      outcome:
        "Turn casual visitors into qualified leads and paying customers with fast, accessible web platforms.",
      deliverables: [
        "Responsive web platform",
        "Sub-second load times",
        "Search engine optimization",
        "Customer lead capture",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      outcome:
        "Give your users an intuitive iOS and Android experience that keeps them engaged wherever they are.",
      deliverables: [
        "Single unified codebase",
        "Fluid gesture navigation",
        "Push notifications",
        "App Store submission guidance",
      ],
    },
    {
      icon: Database,
      title: "Custom Business Tools & Portals",
      outcome:
        "Eliminate manual data entry and error-prone spreadsheets with custom operational dashboards.",
      deliverables: [
        "Role-based access",
        "Automated business reporting",
        "Inventory & workflow sync",
        "Secure cloud storage",
      ],
    },
    {
      icon: Layers,
      title: "UI/UX & Product Design",
      outcome:
        "Clear, frictionless interfaces designed around your actual customer journeys—no confusing clutter.",
      deliverables: [
        "Customer journey maps",
        "Clickable prototypes",
        "Design tokens & components",
        "Full accessibility audits",
      ],
    },
    {
      icon: Megaphone,
      title: "Search Visibility & Growth",
      outcome:
        "Attract high-intent search traffic and track real conversions instead of superficial vanity clicks.",
      deliverables: [
        "Technical SEO foundation",
        "Google Business setup",
        "Conversion tracking",
        "Performance measurement",
      ],
    },
    {
      icon: Palette,
      title: "Brand Identity & Design Systems",
      outcome:
        "Establish immediate credibility in your market with a distinctive, cohesive visual identity.",
      deliverables: [
        "Custom brand mark & typography",
        "Vector logo asset suite",
        "Social media templates",
        "Brand usage guidelines",
      ],
    },
  ];

  return (
    <section className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto text-left">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-3">
            What we solve for you
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
            Six core studio strengths handled by one unified in-house team in Chennai.
          </p>
        </div>

        <div
          ref={solveGridRef}
          onMouseMove={handleSolveMouseMove}
          className="relative rounded-[16px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-100 transition-opacity hidden lg:block"
            style={{
              background: `radial-gradient(520px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(217, 165, 91, 0.055), transparent 75%)`,
            }}
            aria-hidden="true"
          />

          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            const row = Math.floor(idx / 3);
            return (
              <motion.div
                key={cap.title}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12, filter: "blur(2px)" }
                }
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: row * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:bg-white/[0.035] transition-colors duration-200 border-b border-white/[0.06] last:border-b-0 ${
                  idx % 2 === 0 ? "md:border-r md:border-white/[0.06]" : ""
                } ${
                  idx % 3 !== 2 ? "lg:border-r lg:border-white/[0.06]" : "lg:border-r-0"
                } ${idx >= 4 ? "md:border-b-0" : ""} ${idx >= 3 ? "lg:border-b-0" : ""}`}
              >
                <div>
                  <div className="mb-4">
                    <Icon
                      className="w-5 h-5 text-[#8A8F98] group-hover:text-[#F7F8F8] transition-colors"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-[17px] sm:text-[18px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-[13px] sm:text-[14px] text-[#8A8F98] leading-relaxed mb-6">
                    {cap.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <ul className="space-y-2">
                    {cap.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] sm:text-[14px] text-[#8A8F98] flex items-center gap-2"
                      >
                        <span className="w-[3px] h-[3px] rounded-full bg-[#D9A55B]/65 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

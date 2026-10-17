import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { servicepage } from "../data/data";
import CookieLogo from "../components/shared/CookieLogo";
import {
  Globe,
  Smartphone,
  Database,
  Layers,
  Megaphone,
  Palette,
  Check,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

/**
 * Step item component for the horizontal launch sequence rail on desktop.
 * Steps ahead of the progress line sit at 50% opacity and reach 100% when active.
 * Tabular numerals brighten from #62666D to #F7F8F8.
 */
function DesktopStepItem({ step, index, total, scrollProgress, prefersReducedMotion }) {
  const stepStart = index / total;
  const stepArrival = (index + 0.35) / total;

  const opacity = useTransform(
    scrollProgress,
    [Math.max(0, stepStart - 0.1), Math.min(1, stepArrival)],
    [0.5, 1]
  );

  const color = useTransform(
    scrollProgress,
    [Math.max(0, stepStart - 0.05), Math.min(1, stepArrival)],
    ["#62666D", "#F7F8F8"]
  );

  return (
    <motion.div
      style={prefersReducedMotion ? { opacity: 1 } : { opacity }}
      className="relative pt-6"
    >
      {/* Hollow node on the rail */}
      <div
        className="absolute top-[1px] left-0 w-[9px] h-[9px] rounded-full border border-white/[0.28] bg-[#08090A]"
        aria-hidden="true"
      />

      {/* Tabular numeral in #62666D brightening to #F7F8F8 */}
      <motion.span
        style={prefersReducedMotion ? { color: "#F7F8F8" } : { color }}
        className="block text-[12px] tabular-nums font-normal mb-2.5 transition-colors"
      >
        {step.num}
      </motion.span>

      <h3 className="text-[17px] sm:text-[18px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-2">
        {step.title}
      </h3>

      <p className="text-[13px] sm:text-[14px] text-[#8A8F98] leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  );
}

/**
 * Mobile / vertical launch sequence step item with vertical rail and scroll tracking.
 */
function MobileStepItem({ step, index, total, scrollProgress, prefersReducedMotion }) {
  const stepStart = index / total;
  const stepArrival = (index + 0.35) / total;

  const opacity = useTransform(
    scrollProgress,
    [Math.max(0, stepStart - 0.1), Math.min(1, stepArrival)],
    [0.5, 1]
  );

  const color = useTransform(
    scrollProgress,
    [Math.max(0, stepStart - 0.05), Math.min(1, stepArrival)],
    ["#62666D", "#F7F8F8"]
  );

  return (
    <motion.div
      style={prefersReducedMotion ? { opacity: 1 } : { opacity }}
      className="relative"
    >
      {/* Hollow node on vertical rail */}
      <span
        className="absolute -left-7 top-1 w-[9px] h-[9px] rounded-full border border-white/[0.28] bg-[#08090A]"
        aria-hidden="true"
      />

      <motion.span
        style={prefersReducedMotion ? { color: "#F7F8F8" } : { color }}
        className="block text-[12px] tabular-nums font-normal mb-1.5 transition-colors"
      >
        {step.num}
      </motion.span>

      <h3 className="text-[17px] font-medium text-[#F7F8F8] mb-1.5">
        {step.title}
      </h3>

      <p className="text-[13px] text-[#8A8F98] leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  );
}

/**
 * Services Page (route: /services) - Linear.app Aesthetic:
 * Calm, precise, hairline borders, text-forward, zero drop shadows.
 * White-to-grey gradient headlines, 1px rgba(255,255,255,0.08) borders,
 * segmented interactive guide, pixel-aligned package columns,
 * horizontal launch sequence with scroll rail, and ambient amber glow.
 */
export default function Services() {
  const { section2 } = servicepage;
  const prefersReducedMotion = useReducedMotion();

  // 1. Interactive "Which service is right for you?" helper
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

  // 2. Keyboard navigation for segmented tabs (Arrow keys, Home, End)
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

  // 3. Capabilities Data (What we solve for you)
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

  // 4. Cursor spotlight tracking across the 3x2 solve grid
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

  // 5. Sequence Steps (01-04)
  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Discovery & Clear Scope",
      desc: "We analyze your business goals, target audience, and operational requirements. You receive a fixed scope, schedule, and price before any work begins.",
    },
    {
      num: "02",
      title: "Clickable Prototype",
      desc: "We design complete interactive screens in Figma. You test the user flow and verify every interaction before code is committed.",
    },
    {
      num: "03",
      title: "Weekly Working Previews",
      desc: "You test real working software every week on a private link. You see constant, verifiable progress without status-meeting bureaucracy.",
    },
    {
      num: "04",
      title: "Launch & Ongoing Care",
      desc: "We handle domain cutover, cross-browser testing, and security checks. After launch, we monitor performance and support your team.",
    },
  ];

  // 6. Launch sequence scroll progress tracking
  const stepsContainerRef = useRef(null);
  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const railScaleX = useTransform(stepsProgress, [0, 1], [0, 1]);

  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-hidden selection:bg-[#D9A55B]/25 selection:text-[#F7F8F8]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <header className="relative z-10 w-full border-b border-white/[0.06] pt-24 sm:pt-32 md:pt-36 pb-14 sm:pb-18 px-6 sm:px-8 overflow-hidden">
        {/* Top faint amber glow (6-8% opacity) */}
        <div className="linear-top-glow" aria-hidden="true" />

        {/* Subtle film grain */}
        <div className="linear-film-grain" aria-hidden="true" />

        <div className="relative z-10 max-w-[1180px] mx-auto text-left">
          {/* Pill: hairline border with subtle 10% cream tint */}
          <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
            <span>Services & Structured Packages</span>
          </div>

          {/* Headline: gradient fill with masked reveal */}
          <div className="overflow-hidden mb-5">
            <h1 className="linear-headline linear-mask-slide-up text-[36px] sm:text-[50px] md:text-[62px] max-w-[18ch] text-balance">
              Clear services designed around your business goals
            </h1>
          </div>

          {/* Subtext: fades in after */}
          <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-8">
            Whether you need a new website, a mobile app, or custom internal software, we handle everything from first sketch to post-launch care with fixed scopes.
          </p>

          {/* Action links */}
          <div className="linear-fade-in linear-delay-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-[#FAF6EE] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-[#FFFDF9] hover:shadow-[0_0_24px_rgba(217,165,91,0.18)] transition-all duration-200 inline-flex items-center gap-2 group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <span>Get a clear quote</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <a
              href="#package-section"
              className="text-[14px] sm:text-[15px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors px-3 py-2 inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Explore packages</span>
              <ArrowDown
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE GUIDE: SEGMENTED CONTROL + RESULT PANEL
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-8 border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-8">
            <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-medium text-[#F7F8F8] tracking-[-0.025em] mb-2">
              Which service is right for you?
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#8A8F98]">
              Select your immediate business priority to see our recommended approach:
            </p>
          </div>

          {/* Segmented Control Container (gliding highlight pill, keyboard tablist, snap-scroll on mobile) */}
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
                  {/* Gliding Highlight Pill */}
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

          {/* Recommended Result Panel with Cross-fade (12px slide) & reserved min-height */}
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

      {/* ─────────────────────────────────────────────────────────────
          3. PACKAGES WITH DEFINED DELIVERABLES
          ───────────────────────────────────────────────────────────── */}
      <section id="package-section" className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-medium text-[#F7F8F8] tracking-[-0.03em] mb-3">
              Packages with defined deliverables
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              Choose a clear starting point. Every package can be adapted to fit your exact business workflows.
            </p>
          </div>

          {/* Unified 3-Column Hairline Grid with Aligned Rows & 60ms Column Stagger */}
          <div className="rounded-[16px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]">
            {section2.packages.map((pkg, idx) => {
              const isFeatured = idx === 1;
              const isRecommended = currentGoal.recommended === pkg.title;

              return (
                <motion.div
                  key={pkg.title}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 12, filter: "blur(2px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-colors duration-300 ${
                    isFeatured
                      ? "bg-white/[0.03] hover:bg-white/[0.045] order-first md:order-none"
                      : "hover:bg-white/[0.035] order-last md:order-none"
                  } ${
                    isRecommended
                      ? "shadow-[inset_0_0_0_1px_rgba(217,165,91,0.22)] bg-white/[0.04]"
                      : ""
                  }`}
                >
                  {/* Subtle 1px amber-tinted gradient hairline across top of featured card ONLY */}
                  {isFeatured && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9A55B]/60 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <div>
                    {/* Reserved equal-height badge row (fixes alignment across all 3 cards) */}
                    <div className="h-6 mb-4 flex items-center">
                      {isFeatured && (
                        <span className="px-2.5 py-0.5 rounded-full border border-[#D9A55B]/25 bg-[#D9A55B]/[0.05] text-[11px] font-medium text-[#D9A55B]">
                          Most requested
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-2">
                      {pkg.title}
                    </h3>

                    {/* Subtitle with equal min-height */}
                    <p className="text-[13px] sm:text-[14px] text-[#8A8F98] leading-relaxed mb-6 min-h-[40px]">
                      {pkg.subtitle}
                    </p>

                    {/* Checklist Divider & List */}
                    <div className="pt-6 border-t border-white/[0.06] mb-8">
                      <span className="text-[13px] text-[#8A8F98] block mb-3 font-normal">
                        What you get:
                      </span>
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-[#8A8F98] group-hover:text-[#F7F8F8] transition-colors leading-relaxed"
                          >
                            <Check
                              className="w-3.5 h-3.5 text-[#8A8F98] shrink-0 mt-1"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pinned Bottom Button */}
                  <div className="pt-4 mt-auto">
                    {isFeatured ? (
                      <Link
                        to="/contact"
                        className="w-full min-h-[44px] rounded-full bg-[#FAF6EE] hover:bg-[#FFFDF9] text-[#08090A] text-[14px] font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] flex items-center justify-center"
                      >
                        Get a quote
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="w-full min-h-[44px] rounded-full border border-white/[0.08] hover:border-[#D9A55B]/30 bg-white/[0.02] hover:bg-white/[0.04] text-[#F7F8F8] text-[14px] font-medium transition-colors flex items-center justify-center"
                      >
                        Get a quote
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHAT WE SOLVE FOR YOU (3x2 UNIFIED HAIRLINE GRID)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-medium text-[#F7F8F8] tracking-[-0.03em] mb-3">
              What we solve for you
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              Six core studio strengths handled by one unified in-house team in Chennai.
            </p>
          </div>

          {/* Unified 3x2 Hairline Grid with Spotlight Tracking & Row Stagger */}
          <div
            ref={solveGridRef}
            onMouseMove={handleSolveMouseMove}
            className="relative rounded-[16px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]"
          >
            {/* Soft cursor-following spotlight across the whole grid (desktop pointers only) */}
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
                    {/* Plain 20px grey line icon (brightens to white on cell hover) */}
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
                          className="text-[12px] sm:text-[13px] text-[#8A8F98] flex items-center gap-2"
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

      {/* ─────────────────────────────────────────────────────────────
          5. HOW WE TAKE YOU TO LAUNCH (HORIZONTAL PROGRESS RAIL)
          ───────────────────────────────────────────────────────────── */}
      <section
        ref={stepsContainerRef}
        className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.06]"
      >
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-14 sm:mb-18">
            <h2 className="text-[28px] sm:text-[38px] md:text-[44px] font-medium text-[#F7F8F8] tracking-[-0.03em] mb-3">
              How we take you to launch
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              A structured 4-step sequence so you always know what is being built and when it delivers.
            </p>
          </div>

          {/* Desktop/Tablet Horizontal Rail Layout */}
          <div className="relative hidden md:block">
            {/* Background 1px Hairline Rail */}
            <div
              className="absolute top-[5px] left-0 right-0 h-[1px] bg-white/[0.08]"
              aria-hidden="true"
            />

            {/* Amber Progress Line filling rail on scroll */}
            {!prefersReducedMotion && (
              <motion.div
                style={{ scaleX: railScaleX }}
                className="absolute top-[5px] left-0 right-0 h-[1px] bg-[#D9A55B] origin-left"
                aria-hidden="true"
              />
            )}

            {/* 4-Step Columns with scroll-driven opacity (50% -> 100%) and numeral brightening */}
            <div className="grid grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, idx) => (
                <DesktopStepItem
                  key={step.num}
                  step={step}
                  index={idx}
                  total={PROCESS_STEPS.length}
                  scrollProgress={stepsProgress}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>
          </div>

          {/* Mobile Vertical Sequence Layout with Hairline Rail */}
          <div className="relative md:hidden pl-7 space-y-8">
            {/* Background vertical rail */}
            <div
              className="absolute left-[10px] top-2 bottom-3 w-[1px] bg-white/[0.08]"
              aria-hidden="true"
            />

            {/* Amber progress rail filling top to bottom */}
            {!prefersReducedMotion && (
              <motion.div
                style={{ scaleY: railScaleX }}
                className="absolute left-[10px] top-2 bottom-3 w-[1px] bg-[#D9A55B] origin-top"
                aria-hidden="true"
              />
            )}

            {PROCESS_STEPS.map((step, idx) => (
              <MobileStepItem
                key={step.num}
                step={step}
                index={idx}
                total={PROCESS_STEPS.length}
                scrollProgress={stepsProgress}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. FINAL CTA (LINEAR-STYLE CLOSE)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 text-center overflow-hidden">
        {/* Faint amber glow rising from bottom edge */}
        <div className="linear-bottom-glow" aria-hidden="true" />

        {/* Faint radial line grid behind */}
        <div className="linear-cta-grid" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Small cookie mark fading in above headline */}
          <CookieLogo className="w-8 h-8 text-[#F7F8F8] mb-6" dotColor="#D9A55B" />

          <h2 className="linear-headline text-[32px] sm:text-[44px] md:text-[50px] font-semibold leading-[1.12] tracking-[-0.035em] text-balance mb-4">
            Not sure which option fits best?
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#8A8F98] max-w-xl leading-relaxed mb-8">
            Tell us your business goal. We will recommend the leanest and most cost-effective path to launch.
          </p>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-[#FAF6EE] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-[#FFFDF9] hover:shadow-[0_0_24px_rgba(217,165,91,0.18)] transition-all duration-200 inline-flex items-center gap-2 group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            <span>Book a free consultation</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

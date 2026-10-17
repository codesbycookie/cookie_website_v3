import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { aboutpage } from "../data/data";
import CookieLogo from "../components/shared/CookieLogo";
import {
  Users,
  Compass,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Check,
} from "lucide-react";

/**
 * About Page (route: /about) - Linear.app Aesthetic:
 * Calm, precise, text-forward, hairline borders, almost no decoration.
 * Inter typography with white-to-grey gradient headlines, generous whitespace.
 * Amber appears strictly on faint glow accents and the timeline progress line.
 */

// 1. Word-by-word scroll brightening component for Paragraph 2
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

// 2. Tabular stat count-up once over 900ms
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
      // Ease out cubic
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

// 3. Hairline Studio Lab Card
function StudioCard({ prefersReducedMotion }) {
  const rows = [
    { label: "Team Model", value: "100% In-house" },
    { label: "Delivery Sprints", value: "Weekly click-throughs" },
    { label: "Code & Asset Rights", value: "100% Client Owned" },
    { label: "Account Executives", value: "Zero Middlemen" },
  ];

  return (
    <div className="rounded-[16px] bg-white/[0.02] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-6 sm:p-7 w-full max-w-sm mx-auto lg:mx-0">
      {/* Header with quiet sentence-case grey label */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
        <span className="text-[13px] font-medium text-[#F7F8F8]">
          Cookie Studio Lab
        </span>
        <span className="text-[12px] text-[#8A8F98]">
          Chennai HQ
        </span>
      </div>

      {/* Four hairline-divided rows with uniform #F7F8F8 values */}
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

      {/* Card footer note */}
      <p className="text-[12px] text-[#62666D] text-center pt-1">
        Engineered with care and discipline in Chennai.
      </p>
    </div>
  );
}

// 4. Milestone Timeline Row
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
      className={`relative pl-8 sm:pl-10 pb-12 sm:pb-14 last:pb-2 transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "opacity-100" : "opacity-50"
        }`}
    >
      {/* Small hollow dot that fills amber when passed/active */}
      <span
        className={`absolute left-[3px] top-[6px] w-[9px] h-[9px] rounded-full transition-all duration-300 -translate-x-[0.5px] ${isActive
          ? "bg-[#D9A55B] border border-[#D9A55B]"
          : "bg-[#08090A] border border-white/[0.28]"
          }`}
        aria-hidden="true"
      />

      {/* Tabular sequence numeral */}
      <span className="block text-[12px] font-mono text-[#62666D] tabular-nums tracking-wide mb-1.5">
        {num}
      </span>

      {/* Milestone Title */}
      <h3 className="text-[19px] sm:text-[20px] font-medium text-[#F7F8F8] tracking-[-0.02em] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed max-w-xl">
        {desc}
      </p>
    </li>
  );
}

export default function AboutUs() {
  const prefersReducedMotion = useReducedMotion();
  const chapters = aboutpage.section2.items;

  // Principles / How we work data
  const PRINCIPLES = [
    {
      icon: Users,
      title: "Direct access to the creators",
      desc: "You talk directly with the designers and developers building your software. No account managers playing telephone, no unnecessary layers.",
      benefit: "Faster decisions and zero misunderstandings.",
    },
    {
      icon: ShieldCheck,
      title: "Fixed scopes and transparent quotes",
      desc: "Before we write a single line or design a screen, you receive a concrete breakdown of deliverables, timeline, and exact costs.",
      benefit: "No surprise invoices or budget runaways.",
    },
    {
      icon: HeartHandshake,
      title: "Complete ownership of your product",
      desc: "Every asset, design file, and code repository belongs 100% to your business. We build systems you can easily run and manage for years.",
      benefit: "Zero proprietary lock-in.",
    },
    {
      icon: Compass,
      title: "Design focused on business results",
      desc: "We prioritize clean user journeys, fast load times, and simple interfaces that make your customers feel confident taking action.",
      benefit: "Software that pays for itself.",
    },
  ];

  // Stats data
  const STATS = [
    { num: "10+", label: "Engineers and designers based in Chennai" },
    { num: "40+", label: "Real business platforms and tools delivered" },
    { num: "100%", label: "In-house craft with zero outsourced work" },
    { num: "24h", label: "Average response time on client inquiries" },
  ];

  // How We Work Grid cursor spotlight state
  const gridContainerRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: -1000, y: -1000 });
  const [isGridHovered, setIsGridHovered] = useState(false);

  const handleGridMouseMove = (e) => {
    if (!gridContainerRef.current) return;
    const rect = gridContainerRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Milestone timeline progress tracking
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  });

  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-28 px-5 sm:px-8 text-center flex flex-col items-center border-b border-white/[0.06] overflow-hidden">
        {/* Top faint amber glow (6-8% opacity) */}
        <div className="linear-top-glow" aria-hidden="true" />

        {/* Subtle film grain */}
        <div className="linear-film-grain" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          {/* Location pill: hairline border, grey icon, no amber top line */}
          <div className="linear-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[13px] font-medium text-[#8A8F98] mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#8A8F98]" />
            <span>Software Studio · Chennai, India</span>
          </div>

          {/* Headline: gradient fill, tight tracking, lines reveal with a masked slide-up */}
          <div className="overflow-hidden mb-6">
            <h1 className="linear-headline linear-mask-slide-up text-[36px] sm:text-[52px] md:text-[64px] font-semibold leading-[1.08] tracking-[-0.035em] text-balance">
              A focused studio in Chennai dedicated to craft
            </h1>
          </div>

          {/* Subtext: 80ms delay */}
          <p className="linear-fade-in linear-delay-1 text-[16px] sm:text-[18px] text-[#8A8F98] max-w-2xl leading-relaxed mb-8 text-pretty">
            We started Cookie Inc. to give ambitious businesses dependable software without agency overhead or unnecessary complexity.
          </p>

          {/* Primary CTA button: solid light surface, 80ms delay after subtext */}
          <div className="linear-fade-in linear-delay-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-[8px] bg-[#F7F8F8] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] transition-all duration-200 inline-flex items-center gap-2 group"
            >
              <span>Work with us</span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-[2px]"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY WE EXIST SECTION */}
      <section
        aria-label="Why we exist"
        className="w-full py-20 md:py-28 px-5 sm:px-8"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column: Hairline Studio Lab Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <StudioCard prefersReducedMotion={prefersReducedMotion} />
          </div>

          {/* Right Column: Narrative with TextFillOnScroll */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="text-[13px] text-[#8A8F98] mb-3">
              Why we exist
            </div>

            <h2 className="linear-headline text-[28px] sm:text-[36px] md:text-[40px] font-semibold leading-[1.12] mb-6">
              Software should be built with care, clarity, and respect for your time.
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed mb-5">
              Most clients who come to us have experienced the same frustrations elsewhere: agencies that talk in circles, junior teams hidden behind account executives, and projects that drag on for months with little to show.
            </p>

            {/* Paragraph 2: Word-by-word scroll brightening */}
            <TextFillOnScroll
              text="We built Cookie Inc. around a straightforward alternative: a compact, high-taste studio where you collaborate directly with senior craftspeople. We keep our team small on purpose so every product gets the focus it deserves."
              className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed"
            />

            {/* Chennai and Zero Bloat items under 1px hairline */}
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

      {/* 3. STATS SECTION */}
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

      {/* 4. HOW WE WORK WITH CLIENTS */}
      <section
        aria-label="How we work with clients"
        className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/[0.08]"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <h2 className="linear-headline text-[30px] sm:text-[38px] md:text-[42px] font-semibold mb-3">
              How we work with clients
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98]">
              Four simple rules that ensure every project is predictable, calm, and successful.
            </p>
          </div>

          {/* Unified 2x2 Hairline Grid with Cursor Spotlight */}
          <div
            ref={gridContainerRef}
            onMouseMove={handleGridMouseMove}
            onMouseEnter={() => setIsGridHovered(true)}
            onMouseLeave={() => setIsGridHovered(false)}
            className="relative rounded-[16px] border border-white/[0.08] overflow-hidden bg-white/[0.08]"
          >
            {/* Soft cursor-following spotlight across whole grid (desktop only) */}
            {!prefersReducedMotion && isGridHovered && (
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 hidden md:block"
                style={{
                  background: `radial-gradient(460px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
                }}
                aria-hidden="true"
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
              {PRINCIPLES.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-[#08090A] p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-200 group relative z-0"
                  >
                    <div>
                      {/* Plain 20px line icon in #8A8F98, brightens on cell hover */}
                      <Icon className="w-5 h-5 text-[#8A8F98] group-hover:text-[#F7F8F8] transition-colors duration-200 mb-5" />

                      <h3 className="text-[18px] sm:text-[19px] font-medium text-[#F7F8F8] mb-2.5">
                        {principle.title}
                      </h3>

                      <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed mb-6">
                        {principle.desc}
                      </p>
                    </div>

                    {/* Check-marked benefit line with hairline divider */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[13px] text-[#8A8F98]">
                      <Check className="w-3.5 h-3.5 text-[#8A8F98] shrink-0" />
                      <span>{principle.benefit}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY SO FAR */}
      <section
        aria-label="Studio history and milestones"
        className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/[0.08]"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky Left Column: Heading and Subline */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-28 md:self-start">
            <h2 className="linear-headline text-[30px] sm:text-[38px] md:text-[42px] font-semibold mb-3">
              Our journey so far
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              From our first client deliverables in Chennai to building platforms used across India.
            </p>
          </div>

          {/* Right Column: Slim Milestone Timeline */}
          <div ref={timelineRef} className="md:col-span-7 lg:col-span-8 relative">
            {/* 1px Hairline rail */}
            <div
              className="absolute left-[7px] top-3 bottom-6 w-[1px] bg-white/[0.08]"
              aria-hidden="true"
            />

            {/* Amber progress line filling rail on scroll */}
            <motion.div
              style={{
                scaleY: prefersReducedMotion ? 1 : timelineProgress,
              }}
              className="absolute left-[7px] top-3 bottom-6 w-[1px] bg-[#D9A55B] origin-top pointer-events-none"
              aria-hidden="true"
            />

            {/* Semantic Ordered List */}
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

      {/* 6. FINAL CTA */}
      <section
        aria-label="Call to action"
        className="relative w-full py-24 sm:py-32 px-5 sm:px-8 overflow-hidden text-center flex flex-col items-center border-t border-white/[0.08]"
      >
        {/* Faint amber glow rising from bottom edge (6-8% opacity) */}
        <div className="linear-bottom-glow" aria-hidden="true" />

        {/* Very faint line grid fading radially behind it */}
        <div className="linear-cta-grid" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Cookie mark sitting quietly above headline */}
          <CookieLogo
            className="w-8 h-8 text-[#F7F8F8] mb-6 opacity-80"
            color="#F7F8F8"
            dotColor="#D9A55B"
          />

          <h2 className="linear-headline text-[32px] sm:text-[44px] md:text-[52px] font-semibold text-balance mb-4">
            Ready to work with a dedicated team?
          </h2>

          <p className="text-[15px] sm:text-[17px] text-[#8A8F98] max-w-lg leading-relaxed mb-8">
            Tell us about your project goals. We will provide honest advice and a clear path forward.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-[8px] bg-[#F7F8F8] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.18)] transition-all duration-200 inline-flex items-center gap-2 group"
            >
              <span>Start a conversation</span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-[2px]"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
            <a
              href="https://wa.cookie.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-[8px] bg-transparent text-[#F7F8F8] border border-white/[0.12] hover:border-white/[0.24] hover:bg-white/[0.03] text-[14px] font-medium transition-colors duration-200 inline-flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

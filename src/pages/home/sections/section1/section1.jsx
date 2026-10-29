import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../../../../components/button";
import { Magnetic, MOTION_TOKENS } from "../../../../utils/motion.util";

const DYNAMIC_VERBS = [
  { text: "grow.", color: "text-[#D9A55B]" },
  { text: "scale.", color: "text-[#59D499]" },
  { text: "convert.", color: "text-[#57C1FF]" },
  { text: "lead.", color: "text-[#FFE2A8]" },
];

const TRUST_CHIPS = [
  "Fixed-scope quotes",
  "Weekly working previews",
  "In-house Chennai studio",
];

const CLIENT_TRACK_1 = [
  {
    id: "torque-toyzz",
    name: "Torque Toyzz",
    sector: "E-Commerce Platform",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264873/Torque_toyzz_tab_nlvv0z.jpg",
    link: "/work/torque-toyzz",
  },
  {
    id: "iq-bridge",
    name: "IQ Bridge",
    sector: "E-Learning Platform",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264927/iqbridge-1_zgswg3.png",
    link: "/work/iq-bridge",
  },
  {
    id: "chithu-vibes",
    name: "Chithu Vibes",
    sector: "Mini Commerce",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264924/chituvibes1_j2kp0d.png",
    link: "/work/chithu-vibes",
  },
];

const CLIENT_TRACK_2 = [
  {
    id: "sap-scholar",
    name: "SAP Scholar",
    sector: "Student App",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264873/Sap_app_r0dh3j.jpg",
    link: "/work/sap-scholar",
  },
  {
    id: "sap-checklist",
    name: "SAP Checklist",
    sector: "Employee Management Software",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264874/Checklist_Mockup_laptop_n0glyp.png",
    link: "/work/sap-checklist",
  },
  {
    id: "audnex",
    name: "Audnex",
    sector: "Landing Page",
    logo: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264916/audnex1_wrdcvt.png",
    link: "/work/audnex",
  },
];

export default function Section1() {
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [verbIndex, setVerbIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setVerbIndex((prev) => (prev + 1) % DYNAMIC_VERBS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleMouseMove = (e) => {
    if (!heroRef.current || !spotlightRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.background = `radial-gradient(700px circle at ${x}% ${y}%, rgba(217, 165, 91, 0.08), transparent 70%)`;
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      data-section="hero"
      onMouseMove={handleMouseMove}
      className="relative w-full pt-6 sm:pt-10 md:pt-16 pb-14 sm:pb-16 md:pb-20 px-5 sm:px-8 overflow-hidden border-b border-white/[0.08]"
    >
      <style>{`
        @keyframes driftLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes driftRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-drift-left {
          display: flex;
          width: max-content;
          animation: driftLeft 36s linear infinite;
        }
        .animate-drift-right {
          display: flex;
          width: max-content;
          animation: driftRight 40s linear infinite;
        }
        .ticker-container:hover .animate-drift-left,
        .ticker-container:hover .animate-drift-right {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-drift-left,
          .animate-drift-right {
            animation: none;
            width: 100%;
            flex-wrap: wrap;
            justify-content: flex-start;
          }
        }
      `}</style>

      {/* 1. Background: Warm-amber radial glow at top-center drifting slowly */}
      <div
        className="hero-ambient-glow pointer-events-none absolute top-[-90px] left-1/2 -translate-x-1/2 w-[1100px] max-w-[96vw] h-[600px] rounded-full -z-20"
        aria-hidden="true"
      />

      {/* 2. Interactive Specular Ambient Spotlight tracking cursor */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 -z-10"
        style={{
          background:
            "radial-gradient(700px circle at 50% 30%, rgba(217, 165, 91, 0.08), transparent 70%)",
        }}
      />

      {/* 3. Dotted/Line Grid fading out radially */}
      <div
        className="hero-radial-grid pointer-events-none absolute inset-0 w-full h-[900px] -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1180px] mx-auto text-left flex flex-col items-start">
        {/* Announcement Pill */}
        <div className="mb-4 sm:mb-7 hero-css-fade-up hero-delay-0">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] pulse-dot" />
            <span className="text-[12px] font-medium text-[#8A8F98] group-hover:text-[#F7F8F8] transition-colors">
              Available for new client projects in 2026
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#62666D] group-hover:text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Wide Cinematic Headline */}
        <h1 className="text-[28px] xs:text-[32px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] font-semibold tracking-[-0.035em] leading-[1.12] max-w-[1020px] mb-4 sm:mb-6 text-[#F7F8F8] text-left">
          <span className="block overflow-hidden pb-1 sm:pb-1.5 pt-0.5">
            <span className="inline-flex flex-wrap justify-start gap-x-[0.25em]">
              {["We", "build", "websites,", "mobile", "apps,", "and", "custom", "tools"].map((word, i) => (
                <span
                  key={i}
                  className="hero-word"
                  style={{ animationDelay: `${10 + i * 15}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </span>

          <span className="block overflow-hidden pb-1.5 sm:pb-2 pt-0.5">
            <span className="inline-flex flex-wrap items-baseline justify-start gap-x-[0.25em]">
              {["that", "help", "ambitious", "companies"].map((word, i) => (
                <span
                  key={i}
                  className="hero-word"
                  style={{ animationDelay: `${140 + i * 15}ms` }}
                >
                  {word}
                </span>
              ))}

              <span className="inline-flex items-baseline relative overflow-hidden align-baseline min-w-[3.2em] sm:min-w-[3.4em] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={DYNAMIC_VERBS[verbIndex].text}
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-115%", opacity: 0 }}
                    transition={{
                      duration: 0.38,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`inline-block font-semibold ${DYNAMIC_VERBS[verbIndex].color}`}
                  >
                    {DYNAMIC_VERBS[verbIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </span>
        </h1>

        <p className="text-[14.5px] sm:text-[17px] md:text-[19px] text-[#8A8F98] max-w-2xl leading-relaxed mb-6 sm:mb-8 text-left font-normal hero-css-fade-up hero-delay-2">
          A focused studio in Chennai. You collaborate directly with the people creating your software—no middlemen, no runaround.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-8 hero-css-fade-up hero-delay-3 w-full sm:w-auto">
          <Magnetic strength={8}>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="min-h-[44px] sm:min-h-[46px] w-full sm:w-auto group relative shadow-sm text-[14px] sm:text-[15px]"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Magnetic>

          <Button
            to="/work"
            variant="ghost"
            size="lg"
            className="min-h-[44px] sm:min-h-[46px] w-full sm:w-auto text-[14px] sm:text-[15px]"
          >
            Explore our work
          </Button>
        </div>

        {/* Trust Chips */}
        <div className="hero-css-fade-up hero-delay-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-x-6 text-[12.5px] sm:text-[13px] text-[#62666D] mb-10 sm:mb-14">
          {TRUST_CHIPS.map((chip, i) => (
            <span key={chip} className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#59D499] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <motion.path
                  d="M4 12l5 5L20 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.12, ease: MOTION_TOKENS.ease }}
                />
              </svg>
              <span className="text-[#8A8F98] whitespace-nowrap">{chip}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Dual Counter-Flow Kinetic Client Tickers (6 Official Projects) */}
      <div className="ticker-container relative w-full overflow-hidden space-y-4 sm:space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#08090A] via-[#08090A]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#08090A] via-[#08090A]/80 to-transparent z-20" />

        {/* Track 1: Drifting Left */}
        <div className="animate-drift-left gap-4 sm:gap-5 px-3">
          {[...CLIENT_TRACK_1, ...CLIENT_TRACK_1, ...CLIENT_TRACK_1].map((client, idx) => (
            <Link
              key={`${client.id}-${idx}`}
              to={client.link}
              className="group flex items-center gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#0D0E11]/90 border border-white/[0.08] hover:border-[#D9A55B]/40 hover:bg-[#121418] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] shrink-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] overflow-hidden flex items-center justify-center p-1 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                  className="w-full h-full object-cover rounded-full transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] tracking-tight group-hover:text-[#FFE2A8] transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8A8F98] border border-white/[0.06] group-hover:text-[#A3A7AE] transition-colors">
                  {client.sector}
                </span>
              </div>

              <div className="flex items-center gap-1.5 pl-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                <span className="text-[10px] uppercase font-mono text-[#59D499]/90 hidden sm:inline">
                  Shipped
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Track 2: Drifting Right */}
        <div className="animate-drift-right gap-4 sm:gap-5 px-3">
          {[...CLIENT_TRACK_2, ...CLIENT_TRACK_2, ...CLIENT_TRACK_2].map((client, idx) => (
            <Link
              key={`${client.id}-${idx}`}
              to={client.link}
              className="group flex items-center gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#0D0E11]/90 border border-white/[0.08] hover:border-[#D9A55B]/40 hover:bg-[#121418] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] shrink-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] overflow-hidden flex items-center justify-center p-1 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                  className="w-full h-full object-cover rounded-full transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="text-[14px] sm:text-[15px] font-medium text-[#F7F8F8] tracking-tight group-hover:text-[#FFE2A8] transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8A8F98] border border-white/[0.06] group-hover:text-[#A3A7AE] transition-colors">
                  {client.sector}
                </span>
              </div>

              <div className="flex items-center gap-1.5 pl-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                <span className="text-[10px] uppercase font-mono text-[#59D499]/90 hidden sm:inline">
                  Shipped
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

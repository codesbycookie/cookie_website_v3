import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "../shared/Button";
import { Magnetic, MOTION_TOKENS } from "../../utils/motion";

const HERO_CARDS = [
  {
    id: "torque",
    title: "Torque Toyzz",
    category: "E-Commerce",
    metric: "3.4x order checkout",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    link: "/work/torque-toyzz",
    offset: "left",
  },
  {
    id: "iqbridge",
    title: "IQ Bridge",
    category: "EdTech Platform",
    metric: "14 countries reached",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
    link: "/work/iq-bridge",
    offset: "center",
  },
  {
    id: "audnex",
    title: "Audnex Studio",
    category: "Creative Agency",
    metric: "Sub-second media load",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
    link: "/work/audnex",
    offset: "right",
  },
];

const TRUST_CHIPS = [
  "Fixed-scope quotes",
  "Weekly working previews",
  "100% in-house Chennai team",
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef(null);

  // Scroll cue visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D cursor tilt on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.1 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map to subtle tilt: max ~5deg on X, ~7deg on Y
    mouseX.set((x / (rect.width / 2)) * 6);
    mouseY.set(-(y / (rect.height / 2)) * 4.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full pt-16 pb-16 md:pt-24 md:pb-24 px-5 sm:px-8 text-center flex flex-col items-center overflow-hidden"
    >
      {/* SVG Film Grain Noise Overlay (1-2 layer budget, low opacity) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.028] -z-10 mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Large Warm-Amber Radial Glow drifting on very slow loop */}
      <div
        className="hero-ambient-glow pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] h-[520px] rounded-full -z-20"
        aria-hidden="true"
      />

      {/* Status Pill */}
      <div className="hero-css-fade-up hero-delay-0 mb-6">
        <div className="linear-border-beam inline-flex">
          <div>
            <div className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] font-medium text-[#9EA3AD]">
              <span className="w-2 h-2 rounded-full bg-[#59D499] pulse-dot" />
              <span>Software studio based in Chennai, India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B]" />
              <span className="text-[#D9A55B]">Available for Q2 Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Headline: Line-by-Line Masked Reveal (SSR safe CSS animation) */}
      <h1 className="text-[38px] sm:text-[56px] md:text-[72px] font-semibold tracking-[-0.035em] leading-[1.08] max-w-4xl mb-6 text-[#F4F4F6]">
        <span className="block overflow-hidden py-1">
          <span className="inline-block hero-mask-reveal hero-delay-1">
            We build websites, mobile apps,
          </span>
        </span>
        <span className="block overflow-hidden py-1">
          <span className="inline-block hero-mask-reveal hero-delay-2">
            and custom tools that help
          </span>
        </span>
        <span className="block overflow-hidden py-1">
          <span className="inline-block hero-mask-reveal hero-delay-3">
            <span className="relative inline-block text-white">
              ambitious companies
              {/* Thin animated SVG underline */}
              <svg
                className="absolute left-0 -bottom-1 w-full h-[6px] text-[#D9A55B] overflow-visible"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 4 Q 50 0, 100 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="hero-underline-draw"
                />
              </svg>
            </span>{" "}
            grow.
          </span>
        </span>
      </h1>

      {/* Subtext */}
      <p className="hero-css-fade-up hero-delay-3 text-[18px] sm:text-[21px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-9">
        A focused studio in Chennai. You collaborate directly with the people creating your software—no middlemen, no runaround.
      </p>

      {/* CTAs */}
      <div className="hero-css-fade-up hero-delay-4 flex flex-col sm:flex-row items-center gap-4 mb-9">
        <Magnetic strength={12}>
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            className="min-h-[48px] w-full sm:w-auto group relative overflow-hidden shadow-[0_0_24px_-4px_rgba(217,165,91,0.45)]"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Magnetic>

        <Button to="/work" variant="ghost" size="lg" className="min-h-[48px] w-full sm:w-auto">
          Explore our work
        </Button>
      </div>

      {/* Trust Chips with stroke draw-in check icons */}
      <div className="hero-css-fade-up hero-delay-5 flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#767B85] mb-12 sm:mb-16">
        {TRUST_CHIPS.map((chip, i) => (
          <span key={chip} className="flex items-center gap-1.5 font-medium">
            <svg
              className="w-4 h-4 text-[#59D499]"
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
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: MOTION_TOKENS.ease }}
              />
            </svg>
            <span className="text-[#9EA3AD]">{chip}</span>
          </span>
        ))}
      </div>

      {/* 3 Stacked, Slightly Tilted Glass Cards */}
      <div className="w-full max-w-[1040px] mx-auto relative perspective-[1200px]">
        <motion.div
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 pt-2 pb-6"
        >
          {/* Card 1: Torque Toyzz (Left, tilted slightly backward) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -7, 0],
                  }
            }
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-sm md:w-[350px] md:absolute md:left-4 md:-translate-y-2 md:-rotate-3 z-10 transition-transform duration-300 md:hover:z-30 md:hover:scale-105"
          >
            <Link
              to="/work/torque-toyzz"
              className="group block rounded-[20px] bg-[#111215]/90 backdrop-blur-xl border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-[#D9A55B]/40 hover:shadow-[0_25px_60px_rgba(217,165,91,0.2)] transition-all duration-300 text-left"
            >
              <div className="relative rounded-[12px] overflow-hidden aspect-[16/10] bg-black/60 border border-white/[0.08] mb-3.5">
                <img
                  src={HERO_CARDS[0].image}
                  alt={HERO_CARDS[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#D9A55B] border border-white/10">
                  {HERO_CARDS[0].category}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[15px] font-semibold text-[#F4F4F6] group-hover:text-[#D9A55B] transition-colors">
                    {HERO_CARDS[0].title}
                  </h3>
                  <p className="text-[12px] text-[#59D499]">{HERO_CARDS[0].metric}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A8F98] group-hover:text-[#D9A55B] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2: IQ Bridge (Center, prominent, elevated) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 6, 0],
                  }
            }
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="w-full max-w-sm md:w-[380px] md:relative z-20 transition-transform duration-300 md:hover:scale-105"
          >
            <Link
              to="/work/iq-bridge"
              className="group block rounded-[22px] bg-[#14161A]/95 backdrop-blur-2xl border border-white/[0.14] p-5 shadow-[0_30px_70px_rgba(0,0,0,0.85)] hover:border-[#57C1FF]/50 hover:shadow-[0_30px_70px_rgba(87,193,255,0.22)] transition-all duration-300 text-left"
            >
              <div className="relative rounded-[14px] overflow-hidden aspect-[16/10] bg-black/60 border border-white/[0.08] mb-4">
                <img
                  src={HERO_CARDS[1].image}
                  alt={HERO_CARDS[1].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-[#57C1FF] border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                  {HERO_CARDS[1].category}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[17px] font-semibold text-[#F4F4F6] group-hover:text-[#57C1FF] transition-colors">
                    {HERO_CARDS[1].title}
                  </h3>
                  <p className="text-[13px] text-[#59D499]">{HERO_CARDS[1].metric}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#57C1FF] group-hover:text-[#0A0B0D] text-[#D0D6E0] transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: Audnex Studio (Right, tilted slightly forward) */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="w-full max-w-sm md:w-[350px] md:absolute md:right-4 md:-translate-y-2 md:rotate-3 z-10 transition-transform duration-300 md:hover:z-30 md:hover:scale-105"
          >
            <Link
              to="/work/audnex"
              className="group block rounded-[20px] bg-[#111215]/90 backdrop-blur-xl border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-[#59D499]/40 hover:shadow-[0_25px_60px_rgba(89,212,153,0.2)] transition-all duration-300 text-left"
            >
              <div className="relative rounded-[12px] overflow-hidden aspect-[16/10] bg-black/60 border border-white/[0.08] mb-3.5">
                <img
                  src={HERO_CARDS[2].image}
                  alt={HERO_CARDS[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#59D499] border border-white/10">
                  {HERO_CARDS[2].category}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[15px] font-semibold text-[#F4F4F6] group-hover:text-[#59D499] transition-colors">
                    {HERO_CARDS[2].title}
                  </h3>
                  <p className="text-[12px] text-[#59D499]">{HERO_CARDS[2].metric}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A8F98] group-hover:text-[#59D499] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Cue: Thin vertical line with travelling dot, fades out after first scroll */}
      <div
        className={`mt-10 md:mt-12 flex flex-col items-center gap-2 transition-opacity duration-500 pointer-events-none ${
          hasScrolled ? "opacity-0" : "opacity-70"
        }`}
        aria-hidden="true"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#767B85]">
          Scroll to explore
        </span>
        <div className="relative w-[1px] h-9 bg-white/10 overflow-hidden">
          <div className="hero-scroll-dot absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-[#D9A55B] to-transparent" />
        </div>
      </div>
    </section>
  );
}

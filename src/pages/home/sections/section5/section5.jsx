import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import Button from "../../../../components/button";
import CookieLogo from "../../../../components/cookie_logo";
import { Magnetic, MOTION_TOKENS } from "../../../../utils/motion.util";

function CookieBrandBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { y: 20, scale: 0.9, opacity: 0 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: MOTION_TOKENS.ease }}
      className="mb-8 relative flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Medallion housing the official Cookie Inc. logo (pure matte, no glow) */}
      <div className="relative group p-4 sm:p-5 rounded-[22px] bg-[#0E1013] border border-white/[0.12] backdrop-blur-xl transition-all duration-300 hover:border-white/20">
        <CookieLogo
          className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105"
          color="#F7F8F8"
          dotColor="#D9A55B"
          withGlow={false}
        />
      </div>
    </motion.div>
  );
}

export default function Section5() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="cta"
      data-section="cta"
      className="w-full py-28 md:py-40 px-5 sm:px-8 border-t border-white/[0.08] text-center bg-[#08090A] relative overflow-hidden"
    >
      {/* 1. Mirrored Warm-Amber Radial Glow Bookending the bottom of the page */}
      <div
        className="pointer-events-none absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[1000px] max-w-[96vw] h-[520px] rounded-full hero-ambient-glow -z-10"
        aria-hidden="true"
      />

      {/* 2. Faint Line Grid fading out radially */}
      <div
        className="hero-radial-grid pointer-events-none absolute inset-0 w-full h-full -z-10"
        aria-hidden="true"
      />

      {/* 3. Subtle Film Grain overlay */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.024] -z-10 mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id="final-cta-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#final-cta-grain)" />
      </svg>

      <div className="max-w-3xl mx-auto flex flex-col items-center relative">
        {/* Official Cookie Inc. Brand Mark Medallion */}
        <CookieBrandBadge />

        {/* Big Centered Gradient Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: MOTION_TOKENS.ease }}
          className="text-[32px] sm:text-[44px] md:text-[54px] font-medium tracking-[-0.035em] leading-[1.12] mb-6"
        >
          <span className="headline-gradient block">Ready to build your next product?</span>
        </motion.h2>

        {/* Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: MOTION_TOKENS.ease }}
          className="text-[15px] sm:text-[17px] text-[#8A8F98] leading-[1.6] mb-10 max-w-xl"
        >
          Tell us what you are building. We will reply with a clear scope, realistic timeline, and transparent quote within one business day.
        </motion.p>

        {/* Two Buttons with <Magnetic> */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: MOTION_TOKENS.ease }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Magnetic strength={8} className="w-full sm:w-auto">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="min-h-[46px] w-full sm:w-auto group relative shadow-[0_0_24px_-4px_rgba(217,165,91,0.45)]"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Magnetic>

          <Magnetic strength={8} className="w-full sm:w-auto">
            <a
              href="https://wa.cookie.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors px-5 py-2.5 min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-[#59D499]" />
              <span>Chat on WhatsApp</span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

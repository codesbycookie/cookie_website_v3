import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Users, ShieldCheck, Sparkles } from "lucide-react";
import {
  Reveal,
  CountUp,
  SpotlightCard,
  TextFillOnScroll,
  MOTION_TOKENS,
} from "../../utils/motion";

export default function StudioTeaser() {
  const imageContainerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section className="w-full py-20 md:py-28 px-5 sm:px-8 relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <SpotlightCard className="p-8 sm:p-12 md:p-14 rounded-[26px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Story, Headline, and TextFillOnScroll Paragraph */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B] px-3 py-1 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/20 w-max">
                  <span className="w-2 h-2 rounded-full bg-[#59D499] pulse-dot" />
                  <span>Engineered in Chennai, India</span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.08}>
                <h3 className="text-[28px] sm:text-[38px] font-semibold text-[#F4F4F6] tracking-tight leading-snug">
                  A dedicated software studio built on craft, transparency, and speed.
                </h3>
              </Reveal>

              {/* Key paragraph with TextFillOnScroll: words fill as user scrolls */}
              <div className="text-[17px] sm:text-[19px] leading-relaxed max-w-2xl py-2">
                <TextFillOnScroll
                  text="When you hire Cookie Inc., you partner directly with senior designers and developers in Chennai. No account managers playing telephone, no handoffs to junior contractors."
                  wordsClassName="font-medium"
                />
              </div>

              {/* Studio Image with clip-path wipe reveal and slight parallax */}
              <div
                ref={imageContainerRef}
                className="relative rounded-[16px] overflow-hidden bg-[#0A0B0D] border border-white/10 aspect-[21/9] sm:aspect-[24/9] shadow-2xl mt-2"
              >
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: MOTION_TOKENS.ease, delay: 0.2 }}
                  className="w-full h-full relative"
                >
                  <motion.div
                    style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                    className="w-full h-[120%] -top-[10%] relative"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                      alt="Cookie Inc. Studio Craft in Chennai"
                      className="w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#111215]/80" />
                  </motion.div>
                </motion.div>

                {/* Subtle overlay pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#D0D6E0]">
                  <MapPin className="w-3 h-3 text-[#D9A55B]" />
                  <span>Chennai Studio HQ</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Stat Counters with CountUp */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Reveal direction="up" delay={0.12}>
                <div className="p-5 rounded-[16px] bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[13px] text-[#8A8F98] block mb-1">Studio Base</span>
                    <span className="text-[17px] font-semibold text-[#F4F4F6] flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#D9A55B]" />
                      Chennai, India
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#767B85] px-2 py-1 rounded bg-white/[0.04]">
                    On-Site HQ
                  </span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.18}>
                <div className="p-5 rounded-[16px] bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[13px] text-[#8A8F98] block mb-1">Core Team</span>
                    <span className="text-[24px] font-semibold text-[#59D499]">
                      <CountUp value="10+" duration={1.5} />{" "}
                      <span className="text-[16px] font-normal text-[#F4F4F6]">Creators</span>
                    </span>
                  </div>
                  <Users className="w-5 h-5 text-[#59D499]" />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.24}>
                <div className="p-5 rounded-[16px] bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[13px] text-[#8A8F98] block mb-1">Code Ownership</span>
                    <span className="text-[24px] font-semibold text-[#D9A55B]">
                      <CountUp value="100%" duration={1.5} />{" "}
                      <span className="text-[16px] font-normal text-[#F4F4F6]">Client Owned</span>
                    </span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#D9A55B]" />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <Link
                  to="/about"
                  className="mt-2 text-[14px] font-medium text-[#D9A55B] hover:text-[#ECC07A] transition-colors inline-flex items-center justify-between p-4 rounded-[14px] bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] group"
                >
                  <span>Explore studio story & principles</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

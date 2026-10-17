import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock } from "lucide-react";
import { Reveal, CountUp, MOTION_TOKENS } from "../../utils/motion";

const DELIVERIES = [
  {
    id: "torque",
    name: "Torque Toyzz",
    tagline: "1-Tap Direct WhatsApp Shopping",
    outcome: "3.4x higher checkout rate",
    metricValue: "3.4x",
    metricLabel: "checkout rate",
    turnaround: "Delivered in 14 days",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    link: "/work/torque-toyzz",
  },
  {
    id: "iqbridge",
    name: "IQ Bridge",
    tagline: "Institutional Assessment Showcase",
    outcome: "Inquiries across 14 countries",
    metricValue: "14",
    metricLabel: "countries reached",
    turnaround: "Delivered in 21 days",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
    link: "/work/iq-bridge",
  },
  {
    id: "audnex",
    name: "Audnex Studio",
    tagline: "Sub-Second Media Streaming",
    outcome: "Steady European client contracts",
    metricValue: "100%",
    metricLabel: "client retention",
    turnaround: "Delivered in 28 days",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
    link: "/work/audnex",
  },
];

export default function ChangelogDeliveries() {
  const [activeProject, setActiveProject] = useState(0);
  const current = DELIVERIES[activeProject];

  return (
    <section className="w-full py-28 md:py-36 px-5 sm:px-8 bg-[#08090A] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <Reveal direction="up">
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-2.5">
              Recent Client Deliveries
            </span>
            <h2 className="text-[28px] sm:text-[40px] font-medium tracking-[-0.035em] text-[#F7F8F8]">
              Real software shipped for real businesses.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors py-1"
            >
              <span className="underline-wipe">View all case studies</span>
              <ArrowRight className="w-4 h-4 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Changelog-style Layout: Rows on Left, Large Interactive Preview on Right (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Changelog Rows */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {DELIVERIES.map((item, idx) => {
                const isActive = activeProject === idx;

                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    onMouseEnter={() => setActiveProject(idx)}
                    onFocus={() => setActiveProject(idx)}
                    className={`group block py-6 sm:py-7 px-3 sm:px-5 transition-all duration-200 cursor-pointer rounded-[8px] ${
                      isActive ? "bg-white/[0.03]" : "hover:bg-white/[0.015]"
                    }`}
                  >
                    {/* Desktop & Tablet Row View */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Left info: Name + Outcome */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-3">
                          <h3
                            className={`text-[18px] sm:text-[20px] font-medium tracking-tight transition-colors ${
                              isActive
                                ? "text-[#F7F8F8]"
                                : "text-[#8A8F98] group-hover:text-[#F7F8F8]"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <span className="text-[12px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#62666D]">
                            {item.tagline}
                          </span>
                        </div>

                        {/* One-line outcome with CountUp metric */}
                        <div className="flex items-center gap-2 text-[14px]">
                          <span className="text-[#59D499] font-medium flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <CountUp value={item.metricValue} duration={1.2} />
                          </span>
                          <span className="text-[#62666D]">·</span>
                          <span className="text-[#8A8F98]">{item.outcome}</span>
                        </div>
                      </div>

                      {/* Right info: Turnaround + Arrow */}
                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0">
                        <span className="text-[13px] text-[#62666D] font-mono flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{item.turnaround}</span>
                        </span>

                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                            isActive
                              ? "bg-white/[0.08] border-white/20 text-[#D9A55B] translate-x-1"
                              : "border-white/[0.06] text-[#62666D] group-hover:text-[#F7F8F8] group-hover:border-white/10 group-hover:translate-x-1"
                          }`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Mobile Only Inline Thumbnail */}
                    <div className="mt-4 sm:hidden rounded-[8px] overflow-hidden aspect-[16/9] border border-white/[0.08]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column: Desktop Cross-Fading Mockup Preview */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Subtle warm amber glow behind frame */}
            <div
              className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(217,165,91,0.12),transparent_70%)] -z-10"
              aria-hidden="true"
            />

            <div className="relative rounded-[14px] bg-[#0A0B0D] border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden aspect-[4/3] flex flex-col">
              {/* Device Header */}
              <div className="h-8 px-4 bg-[#121316] border-b border-white/[0.06] flex items-center justify-between shrink-0">
                <span className="text-[12px] font-medium text-[#F7F8F8]">{current.name}</span>
                <span className="text-[11px] text-[#59D499] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                  Live Platform
                </span>
              </div>

              {/* Cross-fading image preview */}
              <div className="relative flex-1 bg-[#08090A] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: MOTION_TOKENS.ease }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={current.image}
                      alt={`Case study of ${current.name}`}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Gradient fade at bottom edge */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0B0D] to-transparent pointer-events-none" />

                    {/* Pill label overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-[10px] bg-[#08090A]/85 backdrop-blur-md border border-white/[0.10]">
                      <div>
                        <div className="text-[13px] font-medium text-[#F7F8F8]">
                          {current.name}
                        </div>
                        <div className="text-[11px] text-[#8A8F98]">
                          {current.outcome}
                        </div>
                      </div>
                      <Link
                        to={current.link}
                        className="px-3 py-1 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[12px] font-medium text-[#F7F8F8] border border-white/[0.08] transition-colors inline-flex items-center gap-1"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D9A55B]" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

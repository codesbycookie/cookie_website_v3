import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { servicepage } from "../../../../data/data";

export default function Section3() {
  const { section2 } = servicepage;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="package-section" className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto text-left">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-3">
            Packages with defined deliverables
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
            Choose a clear starting point. Every package can be adapted to fit your exact business workflows.
          </p>
        </div>

        <div className="rounded-[16px] border border-white/[0.08] bg-[rgba(245,235,220,0.02)] overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]">
          {section2.packages.map((pkg, idx) => {
            const isFeatured = idx === 1;

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
                }`}
              >
                {isFeatured && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9A55B]/60 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <div>
                  <div className="h-6 mb-4 flex items-center">
                    {isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full border border-[#D9A55B]/25 bg-[#D9A55B]/[0.05] text-[11px] font-medium text-[#D9A55B]">
                        Most requested
                      </span>
                    )}
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-[13px] sm:text-[14px] text-[#8A8F98] leading-relaxed mb-6 min-h-[40px]">
                    {pkg.subtitle}
                  </p>

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
  );
}

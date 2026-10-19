import React from "react";
import { Link } from "react-router-dom";
import CookieLogo from "../../../../components/cookie_logo";

export default function Section6() {
  return (
    <section
      aria-label="Call to action"
      className="relative w-full py-24 sm:py-32 px-5 sm:px-8 overflow-hidden text-center flex flex-col items-center border-t border-white/[0.08]"
    >
      <div className="linear-bottom-glow" aria-hidden="true" />
      <div className="linear-cta-grid" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <CookieLogo
          className="w-8 h-8 text-[#F7F8F8] mb-6 opacity-80"
          color="#F7F8F8"
          dotColor="#D9A55B"
        />

        <h2 className="linear-headline text-[32px] sm:text-[42px] md:text-[50px] font-semibold text-balance leading-[1.12] mb-4">
          Ready to work with a dedicated team?
        </h2>

        <p className="text-[15px] sm:text-[17px] text-[#8A8F98] max-w-lg leading-relaxed mb-8">
          Tell us about your project goals. We will provide honest advice and a clear path forward.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-[8px] bg-[#FAF6EE] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-[#FFFDF9] hover:shadow-[0_0_24px_rgba(217,165,91,0.18)] transition-all duration-200 inline-flex items-center gap-2 group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
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
  );
}

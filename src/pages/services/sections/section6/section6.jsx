import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CookieLogo from "../../../../components/cookie_logo/cookie_logo";

export default function Section6() {
  return (
    <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 text-center overflow-hidden">
      <div className="linear-bottom-glow" aria-hidden="true" />
      <div className="linear-cta-grid" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <CookieLogo className="w-8 h-8 text-[#F7F8F8] mb-6" dotColor="#D9A55B" />

        <h2 className="linear-headline text-[32px] sm:text-[42px] md:text-[50px] font-semibold leading-[1.12] tracking-[-0.035em] text-balance mb-4">
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
  );
}

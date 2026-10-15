import React from "react";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";

/**
 * NotFound: Linear-style 404. One primary CTA back home.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-[#08090A] text-[#F4F4F6] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#D9A55B]/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <CookieLogo className="w-12 h-12 mb-8 opacity-90" color="#F4F4F6" dotColor="#D9A55B" withGlow />
        <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#8A8F98] mb-4">404 · Page not found</span>
        <h1 className="gradient-text text-[40px] sm:text-[56px] font-medium tracking-[-0.035em] leading-[1.05] mb-5">
          This page crumbled
        </h1>
        <p className="text-[16px] text-[#8A8F98] leading-relaxed mb-9">
          The page you are looking for does not exist or has moved. Head back home and pick up from there.
        </p>
        <Button to="/" variant="primary" size="lg" ariaLabel="Back to home">
          Back to home
        </Button>
      </div>
    </div>
  );
}

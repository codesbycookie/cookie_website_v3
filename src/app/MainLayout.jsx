import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import BackToTop from "../components/shared/BackToTop";
import CookieIntroLoader from "../components/shared/CookieIntroLoader";
import SEO from "../components/shared/SEO";

export default function MainLayout({ children }) {
  const { pathname, hash } = useLocation();

  // Reset scroll on navigation; honour #anchors with smooth scrolling
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090A] text-[#F4F4F6] relative selection:bg-[#D9A55B]/25 selection:text-[#F4F4F6]">
      <SEO />
      {/* Bespoke 1-2s Brand Intro Loader with GSAP flight animation to navbar */}
      <CookieIntroLoader />

      {/* 2026 Accessibility: WCAG Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#D9A55B] focus:text-[#08090A] focus:rounded-[8px] focus:font-semibold focus:shadow-[0_0_24px_rgba(217,165,91,0.6)] focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1" className="flex-1 w-full focus:outline-none">
        {children}
      </main>

      <Footer />

      {/* Ergonomic Back to Top recovery button */}
      <BackToTop />
    </div>
  );
}

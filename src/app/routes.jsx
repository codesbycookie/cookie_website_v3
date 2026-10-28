import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BackToTop from "../components/back_to_top";
import DesktopScrollbar from "../components/desktop_scrollbar";
import CookieIntroLoader from "../components/cookie_intro_loader";
import SEOMeta from "../components/seo-meta";

import Home from "../pages/home/home";
import Portfolio from "../pages/portfolio/portfolio";
import CaseStudy from "../pages/case_study/case_study";
import AboutUs from "../pages/about_us/about_us";
import Services from "../pages/services/services";
import ContactUs from "../pages/contact_us/contact_us";
import Terms from "../pages/terms/terms";
import Privacy from "../pages/privacy/privacy";
import NotFound from "../pages/not_found/not_found";
import Maintenance from "../pages/maintenance/maintenance";

const IS_MAINTENANCE_MODE =
  String(import.meta.env.VITE_MAINTENANCE_MODE).toLowerCase() === "true";

/**
 * MainLayout shell: Navbar, Footer, BackToTop, CookieIntroLoader & WCAG skip link.
 */
export function MainLayout({ children }) {
  const { pathname, hash } = useLocation();

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
      <SEOMeta />
      <CookieIntroLoader />

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
      <BackToTop />
      <DesktopScrollbar />
    </div>
  );
}

/**
 * Route definitions adhering strictly to AGENTS.md directory hierarchy.
 */
export default function AppRoutes() {
  if (IS_MAINTENANCE_MODE) {
    return (
      <Routes>
        <Route path="*" element={<Maintenance />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* Core studio routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />

      {/* Work / Portfolio */}
      <Route path="/portfolio" element={<MainLayout><Portfolio /></MainLayout>} />
      <Route path="/work" element={<MainLayout><Portfolio /></MainLayout>} />
      <Route path="/work/:slug" element={<MainLayout><CaseStudy /></MainLayout>} />
      <Route path="/case-studies/:slug" element={<MainLayout><CaseStudy /></MainLayout>} />

      {/* About */}
      <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />

      {/* Services */}
      <Route path="/service" element={<MainLayout><Services /></MainLayout>} />
      <Route path="/services" element={<MainLayout><Services /></MainLayout>} />

      {/* Contact */}
      <Route path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />

      {/* Dedicated legal & privacy pages */}
      <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />

      {/* Maintenance preview route */}
      <Route path="/maintenance" element={<Maintenance />} />

      {/* 404 for all other paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

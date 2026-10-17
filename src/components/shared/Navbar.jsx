import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { Menu, X } from "lucide-react";
import { navbar } from "../../data/data";
import Button from "./Button";
import CookieLogo from "./CookieLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          setMobileMenuOpen(false);
          toggleBtnRef.current?.focus();
        } else if (e.key === "Tab") {
          if (!focusable || focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [mobileMenuOpen]);

  const NAV_ITEMS = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work", aliases: ["/portfolio"] },
    { name: "Services", link: "/services", aliases: ["/service"] },
    { name: "About", link: "/about", aliases: ["/about-us"] },
    { name: "Contact", link: "/contact", aliases: ["/contact-us"] },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled
        ? "bg-[#08090A]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px] py-0.5"
          aria-label="Cookie Inc. Home"
        >
          <div
            id="navbar-brand-logo"
            className="w-7 h-7 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
          >
            <img
              src="/imgs/cookie_logo_web.jpeg"
              alt="Cookie Inc."
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center text-[16px] font-medium tracking-tight text-[#F4F4F6]">
            <span>{navbar.title[0]}</span>
            <span className="text-[#D9A55B]">{navbar.title[1] || "."}</span>
          </div>
        </Link>

        {/* Desktop Navigation: sliding active-pill highlight */}
        <nav
          className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 p-1 rounded-full bg-white/[0.02] border border-white/[0.05]"
          onMouseLeave={() => setHoveredNav(null)}
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              location.pathname === item.link ||
              (item.aliases && item.aliases.includes(location.pathname));
            const isHovered = hoveredNav === item.link;
            const showPill = isHovered || (!hoveredNav && isActive);

            return (
              <Link
                key={item.link}
                to={item.link}
                onMouseEnter={() => setHoveredNav(item.link)}
                className={`relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-colors duration-150 select-none min-h-[36px] inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${isActive || isHovered ? "text-[#F4F4F6]" : "text-[#9EA3AD] hover:text-[#F4F4F6]"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {showPill && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions: Persistent Start a Project CTA with slow traveling border light */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.cookie.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors px-3 py-1.5 min-h-[40px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[6px]"
          >
            WhatsApp
          </a>

          {/* Button with slow traveling border light beam */}
          <Link
            to="/contact"
            className="group relative inline-flex p-[1px] rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
            aria-label="Start a project"
          >
            {/* Traveling border beam */}
            <span
              className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#D9A55B_360deg)] animate-[rotate-beam_4.5s_linear_infinite]"
              aria-hidden="true"
            />
            {/* Button core */}
            <span className="relative z-10 px-4 py-2 rounded-full bg-[#111215] hover:bg-[#16181D] text-[#F4F4F6] text-[13px] font-medium transition-colors duration-200 inline-flex items-center gap-1.5 border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              <span>Start a project</span>
              <span className="text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button with 44x44px minimum touch target */}
        <button
          ref={toggleBtnRef}
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-[8px] text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-[#2F3031]/60 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] cursor-pointer inline-flex items-center justify-center"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-[#0A0B0D]/95 backdrop-blur-xl border-t border-white/10 z-50 flex flex-col justify-between p-6 overflow-y-auto animate-[fadeIn_150ms_ease-in-out]"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-3 mb-3">
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#767B85]">
                Cookie Inc. Studio
              </span>
              <CookieLogo className="w-5 h-5" color="#9EA3AD" dotColor="#D9A55B" />
            </div>

            {[
              { name: "Home", link: "/" },
              { name: "Work & Projects", link: "/work", aliases: ["/portfolio"] },
              { name: "Services & Pricing", link: "/services", aliases: ["/service"] },
              { name: "About the Studio", link: "/about", aliases: ["/about-us"] },
              { name: "Contact Us", link: "/contact", aliases: ["/contact-us"] },
            ].map((page) => {
              const isActive =
                location.pathname === page.link ||
                (page.aliases && page.aliases.includes(location.pathname));
              return (
                <Link
                  key={page.link}
                  to={page.link}
                  className={`text-[17px] font-medium px-4 py-3.5 min-h-[48px] rounded-[10px] transition-colors duration-100 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${isActive
                    ? "bg-[#1E2024] text-[#F4F4F6] border border-white/10"
                    : "text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-white/[0.04] border border-transparent"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{page.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D9A55B]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-[13px] text-[#9EA3AD] px-1">
              <span>Studio HQ</span>
              <span className="text-[#F4F4F6] font-medium">Chennai, Tamil Nadu</span>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full min-h-[48px]"
              ariaLabel="Start a project"
            >
              Start a project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}


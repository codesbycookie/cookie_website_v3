import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navbar, social_links } from "../data/data";
import Button from "./button";
import CookieLogo from "./cookie_logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(54);

  const location = useLocation();
  const drawerRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const headerRef = useRef(null);

  // Measure header height dynamically for mobile drawer positioning
  useEffect(() => {
    if (!headerRef.current) return;
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    const ro = new ResizeObserver(updateHeaderHeight);
    ro.observe(headerRef.current);
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  // Track scroll position for header visual state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Manage body scroll locking and keyboard accessibility when drawer is active
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
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Tap header bar when scrolled: smoothly return to top of page
  const handleHeaderClick = (e) => {
    if (e.target.closest("a, button, input, textarea, select, [role='button']")) {
      return;
    }
    if (scrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Brand Logo click handler: if already on home, scroll to top; always close drawer
  const handleLogoClick = (e) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Nav link click handler: if already on destination page, smoothly scroll to top
  const handleNavItemClick = (link) => {
    setMobileMenuOpen(false);
    if (location.pathname === link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NAV_ITEMS = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work", aliases: ["/portfolio"] },
    { name: "Services", link: "/services", aliases: ["/service"] },
    { name: "About", link: "/about", aliases: ["/about-us"] },
    { name: "Contact", link: "/contact", aliases: ["/contact-us"] },
  ];

  return (
    <>
      <header
        ref={headerRef}
        onClick={handleHeaderClick}
        title={scrolled ? "Tap to scroll to top" : undefined}
        className={`sticky top-0 ${
          mobileMenuOpen ? "z-[60]" : "z-50"
        } w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#08090A]/85 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] cursor-pointer md:cursor-auto"
            : "bg-[#08090A]/40 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
        }`}
      >
        {/* Slim, smaller-padding navbar container */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-13 sm:h-14 flex items-center justify-between relative">
          {/* Brand */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px] py-0.5 touch-manipulation"
            aria-label="Cookie Inc. Home"
          >
            <div
              id="navbar-brand-logo"
              className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
            >
              <img
                src="/imgs/cookie_white.png"
                alt="Cookie Inc."
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center text-[15px] sm:text-[16px] font-medium tracking-tight text-[#F4F4F6]">
              <span>{navbar.title[0]}</span>
              <span className="text-[#D9A55B]">{navbar.title[1] || "."}</span>
            </div>
          </Link>

          {/* Desktop Navigation: sliding active-pill highlight */}
          <nav
            className="hidden md:flex items-center gap-0.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-full bg-[#08090A]/50 backdrop-blur-2xl border border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
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
                  onClick={() => handleNavItemClick(item.link)}
                  onMouseEnter={() => setHoveredNav(item.link)}
                  className={`relative px-3.5 py-1 text-[13px] font-medium rounded-full transition-colors duration-150 select-none inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${
                    isActive || isHovered
                      ? "text-[#FAF5EB]"
                      : "text-[#9EA3AD] hover:text-[#FAF5EB]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {showPill && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 rounded-full bg-[rgba(217,165,91,0.12)] border border-[#D9A55B]/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(217,165,91,0.12)] pointer-events-none"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: WhatsApp + Persistent Start a Project CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={social_links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12.5px] font-medium text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors px-2.5 py-1 inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[6px]"
            >
              WhatsApp
            </a>

            {/* Button with slow traveling border light beam */}
            <Link
              to="/contact"
              className="group relative inline-flex p-[1px] rounded-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
              aria-label="Start a project"
            >
              <span
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#D9A55B_360deg)] animate-[rotate-beam_4.5s_linear_infinite]"
                aria-hidden="true"
              />
              <span className="relative z-10 px-3.5 py-1.5 rounded-full bg-[#111215] hover:bg-[#16181D] text-[#F4F4F6] text-[12.5px] font-medium transition-colors duration-200 inline-flex items-center gap-1.5 border border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                <span>Start a project</span>
                <span className="text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-0.5 inline-block text-[11px]">
                  →
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            className="md:hidden w-9 h-9 p-2 rounded-[8px] text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-[#2F3031]/60 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] cursor-pointer inline-flex items-center justify-center touch-manipulation active:scale-95 transition-transform"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer with tighter padding to ensure Start a Project is immediately visible */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              top: `${headerHeight}px`,
              maxHeight: `calc(100dvh - ${headerHeight}px)`,
            }}
            className="md:hidden fixed inset-x-0 bottom-0 bg-[#08090A]/96 backdrop-blur-3xl border-t border-white/10 z-[55] flex flex-col justify-between p-4 sm:p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,16px))] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between px-2 mb-1.5">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#767B85]">
                  Cookie Inc. Studio
                </span>
                <CookieLogo className="w-4 h-4" color="#9EA3AD" dotColor="#D9A55B" />
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
                    onClick={() => handleNavItemClick(page.link)}
                    className={`text-[15px] font-medium px-3.5 py-2.5 min-h-[42px] rounded-[8px] transition-colors duration-100 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] touch-manipulation active:scale-[0.99] ${
                      isActive
                        ? "bg-[#1E2024] text-[#F4F4F6] border border-white/10"
                        : "text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-white/[0.04] border border-transparent"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{page.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B]" />}
                  </Link>
                );
              })}
            </div>

            {/* Bottom section with smaller padding so 'Start a project' is clearly visible */}
            <div className="pt-3.5 mt-2 border-t border-white/10 flex flex-col gap-2.5 shrink-0">
              <div className="flex items-center justify-between text-[12px] text-[#9EA3AD] px-1">
                <span>Studio HQ</span>
                <span className="text-[#F4F4F6] font-medium">Chennai, Tamil Nadu</span>
              </div>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full min-h-[44px] text-[14px] touch-manipulation"
                ariaLabel="Start a project"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

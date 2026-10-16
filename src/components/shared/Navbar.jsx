import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur-xl transition-all duration-200 border-b ${scrolled ? "bg-[#08090A]/80 border-white/[0.08]" : "bg-transparent border-transparent"}`}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px] py-0.5"
          aria-label="Cookie Inc. Home"
        >
          <CookieLogo
            className="w-6 h-6 transition-transform duration-200 group-hover:scale-105"
            color="#F4F4F6"
            dotColor="#D9A55B"
          />
          <div className="flex items-center text-[16px] font-medium tracking-tight text-[#F4F4F6]">
            <span>{navbar.title[0]}</span>
            <span className="text-[#D9A55B]">{navbar.title[1] || "."}</span>
          </div>
        </Link>

        {/* Desktop Navigation: clean, confident typography */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
          {[
            { name: "Home", link: "/" },
            { name: "Work", link: "/work", aliases: ["/portfolio"] },
            { name: "Services", link: "/services", aliases: ["/service"] },
            { name: "About", link: "/about", aliases: ["/about-us"] },
            { name: "Contact", link: "/contact", aliases: ["/contact-us"] },
          ].map((item) => {
            const isActive =
              location.pathname === item.link ||
              (item.aliases && item.aliases.includes(location.pathname));
            return (
              <Link
                key={item.link}
                to={item.link}
                className={`text-[14px] font-medium px-4 py-2 rounded-full transition-colors duration-150 select-none min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${
                  isActive ? "text-[#F4F4F6] bg-white/[0.08]" : "text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-white/[0.04]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions: Persistent Start a Project CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.cookie.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors px-3 py-2 min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[6px]"
          >
            WhatsApp
          </a>
          <Button to="/contact" variant="primary" size="md" ariaLabel="Start a project">
            Start a project
          </Button>
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
                  className={`text-[17px] font-medium px-4 py-3.5 min-h-[48px] rounded-[10px] transition-colors duration-100 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${
                    isActive
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


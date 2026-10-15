import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LinearLogo from "./LinearLogo";
import CommandPaletteModal from "./CommandPaletteModal";
import { Menu, X, Command } from "lucide-react";

export default function LinearNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global ⌘K / Ctrl+K keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Product", href: "/features" },
    { name: "Resources", href: "/method" },
    { name: "Customers", href: "/customers" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "https://linear.app/contact", isExternal: true },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#08090A]/85 backdrop-blur-md border-b border-[#232529]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          {/* Left: Brand Mark */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <LinearLogo className="w-5 h-5" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.href;
                if (item.isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-[6px] text-[13px] font-medium text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#121316] transition-colors"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-[#F4F4F6] bg-[#1B1C1F]"
                        : "text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#121316]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Command Palette Trigger Keycap */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#121316] border border-[#232529] hover:border-[#494B4D] text-[#8A8F98] hover:text-[#F4F4F6] transition-all text-[12px] font-mono group"
              title="Search and commands (⌘K)"
            >
              <Command className="w-3.5 h-3.5 text-[#8A8F98] group-hover:text-[#F4F4F6]" />
              <span>⌘K</span>
            </button>

            {/* Log in */}
            <a
              href="https://linear.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-[13px] font-medium text-[#8A8F98] hover:text-[#F4F4F6] transition-colors"
            >
              Log in
            </a>

            {/* Sign up - Pill Satin Button */}
            <a
              href="https://linear.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="linear-btn-primary px-4 py-1.5 rounded-full text-[13px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:opacity-95 transition-opacity"
            >
              Sign up
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#8A8F98] hover:text-[#F4F4F6]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#232529] bg-[#08090A]/95 backdrop-blur-xl px-4 py-6 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-[15px] font-medium text-[#D0D6E0] hover:text-[#F4F4F6] hover:bg-[#121316] rounded-[6px]"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#232529] flex flex-col gap-2.5">
              <a
                href="https://linear.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 text-[14px] text-[#8A8F98] hover:text-[#F4F4F6]"
              >
                Log in
              </a>
              <a
                href="https://linear.app/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="linear-btn-primary block text-center py-2.5 rounded-full text-[14px] font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPaletteModal isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}

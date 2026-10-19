import React from "react";
import { Link } from "react-router-dom";
import { footer, social_links } from "../../data/data";
import CookieLogo from "../cookie_logo/cookie_logo";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { name: "Home", to: "/" },
      { name: "Selected Work", to: "/work" },
      { name: "Services & Pricing", to: "/services" },
      { name: "About the Studio", to: "/about" },
      { name: "Start a Project", to: "/contact" },
      { name: "Upcoming Release", to: "/countdown" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { name: "Torque Toyzz (E-Commerce)", to: "/work/torque-toyzz" },
      { name: "IQ Bridge (EdTech)", to: "/work/iq-bridge" },
      { name: "Audnex (Motion & Media)", to: "/work/audnex" },
      { name: "SAP Checklist (Enterprise)", to: "/work/sap-checklist" },
    ],
  },
  {
    title: "Direct Channels",
    links: [
      { name: "WhatsApp Instant Chat", href: social_links.whatsapp },
      { name: "Email: contact@cookieinc.in", href: "mailto:contact@cookieinc.in" },
      { name: "Chennai Studio HQ", href: social_links.gmb },
      { name: "LinkedIn Company Page", href: social_links.linkedin },
      { name: "Instagram Updates", href: social_links.instagram },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#08090A] border-t border-white/[0.08] text-[#8A8F98] text-[14px] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14">
          {/* Brand & Studio Mission */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2.5 text-[20px] font-semibold text-[#F4F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px] mb-4"
                aria-label="Cookie Inc. Homepage"
              >
                <CookieLogo className="w-6 h-6" color="#F4F4F6" dotColor="#D9A55B" />
                <span>
                  Cookie Inc<span className="text-[#D9A55B]">.</span>
                </span>
              </Link>
              <p className="text-[14px] text-[#9EA3AD] leading-relaxed max-w-sm mb-6">
                A focused software studio in Chennai. We design and build websites, mobile apps, and custom operational tools for growing businesses across India.
              </p>
            </div>

            <div className="flex items-center gap-2.5 text-[13px] text-[#F4F4F6]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F7F8F8]" />
              <span>Available for new client projects in 2026</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[14px] font-semibold text-[#F4F4F6] mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="text-[13px] text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A55B] rounded-[2px] min-h-[36px] inline-flex items-center group/link"
                        >
                          <span className="relative">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D9A55B] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[13px] text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A55B] rounded-[2px] min-h-[36px] inline-flex items-center group/link"
                        >
                          <span className="relative">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D9A55B] origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Oversized dark titanium "Cookie Inc." wordmark (iPhone-inspired bottom-to-top gradient) with cream dot */}
        <div className="relative w-full flex items-center justify-center overflow-hidden select-none pointer-events-none my-8 sm:my-14" aria-hidden="true">
          <span className="inline-flex items-center justify-center text-[clamp(2.4rem,11vw,12.5rem)] font-bold tracking-[-0.035em] sm:tracking-[-0.04em] text-center whitespace-nowrap leading-none max-w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#1E2128] via-[#3E4554] to-[#6D7486]">
              Cookie Inc
            </span>
            <span className="text-[#D9A55B] ml-0.5 sm:ml-1">.</span>
          </span>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6 text-[12px] sm:text-[13px]">
          {/* Copyright statement */}
          <div className="text-center sm:text-left text-[#8A8F98]">
            <p className="leading-relaxed">
              © {new Date().getFullYear()} Cookie Inc<span className="text-[#D9A55B]">.</span> All rights reserved.
              <span className="hidden sm:inline text-[#62666D]"> · Built with care in Chennai, India.</span>
            </p>
            <p className="text-[11px] text-[#62666D] mt-1 sm:hidden">
              Built with care in Chennai, India.
            </p>
          </div>

          {/* Legal Policies & Cookie Preferences */}
          <div className="flex items-center gap-3 sm:gap-6 text-[#8A8F98] flex-wrap justify-center sm:justify-end">
            <Link to="/privacy" className="hover:text-[#F7F8F8] transition-colors py-1">
              Privacy Policy
            </Link>
            <span className="text-white/20 select-none" aria-hidden="true">·</span>
            <Link to="/terms" className="hover:text-[#F7F8F8] transition-colors py-1">
              Terms of Service
            </Link>
            <span className="text-white/20 select-none" aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("cookieinc:open-cookie-preferences"));
              }}
              className="hover:text-[#F7F8F8] transition-colors py-1 focus:outline-none focus-visible:text-[#D9A55B] cursor-pointer"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

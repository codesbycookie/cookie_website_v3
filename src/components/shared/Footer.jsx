import React from "react";
import { Link } from "react-router-dom";
import { footer, social_links } from "../../data/data";
import CookieLogo from "./CookieLogo";

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
    <footer className="w-full bg-[#0A0B0D] border-t border-white/10 text-[#9EA3AD] text-[14px]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8 pt-16 pb-12">
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
              <span className="w-2.5 h-2.5 rounded-full bg-[#59D499]" />
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
                          className="text-[13px] text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A55B] rounded-[2px] min-h-[36px] inline-flex items-center"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[13px] text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A55B] rounded-[2px] min-h-[36px] inline-flex items-center"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#767B85]">
          <p>© {new Date().getFullYear()} Cookie Inc. Built with care in Chennai, India.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#9EA3AD] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#9EA3AD] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

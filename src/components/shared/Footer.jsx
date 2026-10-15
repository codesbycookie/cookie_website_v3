import React from "react";
import { Link } from "react-router-dom";
import { footer, social_links } from "../../data/data";
import CookieLogo from "./CookieLogo";

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { name: "Home", to: "/" },
      { name: "Work", to: "/work" },
      { name: "About", to: "/about" },
      { name: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Sections",
    links: [
      { name: "Services", to: "/#services" },
      { name: "Process", to: "/#process" },
      { name: "FAQ", to: "/#faq" },
      { name: "Start a project", to: "/contact" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { name: "All case studies", to: "/work" },
      { name: "IQ Bridge", to: "/work/iq-bridge" },
      { name: "Audnex", to: "/work/audnex" },
      { name: "SAP Checklist", to: "/work/sap-checklist" },
      { name: "Torque Toyzz", to: "/work/torque-toyzz" },
    ],
  },
];

const SOCIAL = {
  Facebook: "https://facebook.com",
  Instagram: social_links.instagram,
  X: social_links.twitter,
  LinkedIn: social_links.linkedin,
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#08090A] hairline-y text-[#8A8F98] text-[14px]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-14">
          {/* Brand */}
          <div className="col-span-2 flex flex-col justify-between gap-8">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2.5 text-[18px] font-medium text-[#F4F4F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px] mb-4"
              >
                <CookieLogo className="w-6 h-6" color="#F4F4F6" dotColor="#D9A55B" />
                <span>
                  {footer.company.name}
                  <span className="text-[#D9A55B]">{footer.company.highlight || "."}</span>
                </span>
              </Link>
              <p className="text-[13px] leading-relaxed max-w-xs">
                A Chennai software studio building websites, mobile apps and ERP systems for ambitious businesses.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[12px] text-[#D0D6E0]">
              <span className="w-2 h-2 rounded-full bg-[#59D499] shadow-[0_0_8px_#59D499]" />
              Taking on new projects
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-[13px] font-medium text-[#F4F4F6] mb-4">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.to}
                      className="text-[13px] hover:text-[#F4F4F6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9A55B] rounded-[2px]"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h2 className="text-[13px] font-medium text-[#F4F4F6] mb-4">Connect</h2>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href={social_links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={social_links.gmb} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
                  Google Business
                </a>
              </li>
              {footer.social.map((s) => (
                <li key={s.name}>
                  <a href={SOCIAL[s.name] || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 hairline-y flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#62666D]">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-6">
            {footer.policies.map((p) => (
              <Link key={p.name} to={p.href} className="hover:text-[#8A8F98] transition-colors">
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

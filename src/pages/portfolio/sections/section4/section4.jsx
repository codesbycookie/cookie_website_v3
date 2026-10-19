import React from "react";
import { Link } from "react-router-dom";

const OTHER_CLIENTS = [
  {
    name: "How to Cook",
    category: "Culinary Media & E-Com",
    filterCategory: "Websites & Web Apps",
    logo: "/imgs/How_to_cook_logo.svg",
  },
  {
    name: "V&D Granite",
    category: "Industrial & Export",
    filterCategory: "Websites & Web Apps",
    logo: "/imgs/V&D-logo.png",
  },
  {
    name: "Traffic",
    category: "Urban Transit & Fleet",
    filterCategory: "Custom Business Systems",
    logo: "/imgs/Traffic-logo.jpg",
  },
  {
    name: "Tourist",
    category: "Travel & Hospitality",
    filterCategory: "Websites & Web Apps",
    logo: "/imgs/Tourist-logo.jpg",
  },
  {
    name: "Fashbridge",
    category: "Apparel Retail",
    filterCategory: "Websites & Web Apps",
    logo: "/imgs/Fashbridge-logo.png",
  },
];

export default function Section4({ activeFilter }) {
  const filteredOtherClients = OTHER_CLIENTS.filter((c) => {
    if (activeFilter === "all") return true;
    return c.filterCategory === activeFilter;
  });

  return (
    <section
      aria-label="Other client partners"
      className="relative z-10 w-full max-w-[1180px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32"
    >
      <h3 className="text-[14px] sm:text-[15px] font-medium text-[#8A8F98] tracking-[-0.01em] mb-4">
        Also built for
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.08] rounded-[14px] overflow-hidden p-0 list-none">
        {filteredOtherClients.map((client) => (
          <li
            key={client.name}
            className="flex items-center justify-between p-5 sm:p-6 bg-[#08090A] transition-colors duration-200 hover:bg-white/[0.02] group"
          >
            <div className="pr-4">
              <span className="block text-[15px] sm:text-[16px] font-medium text-[#F7F8F8] tracking-tight">
                {client.name}
              </span>
              <span className="block text-[13px] text-[#8A8F98] mt-0.5">
                {client.category}
              </span>
            </div>
            <div className="shrink-0 flex items-center justify-end w-28 h-10">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                width="110"
                height="40"
                className="max-h-7 max-w-[100px] object-contain filter grayscale opacity-55 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </li>
        ))}

        <li className="flex items-center justify-between p-5 sm:p-6 bg-[#08090A] transition-colors duration-200 hover:bg-white/[0.02] group/end">
          <div>
            <span className="block text-[15px] sm:text-[16px] font-medium text-[#F7F8F8] tracking-tight">
              Your project
            </span>
            <span className="block text-[13px] text-[#8A8F98] mt-0.5">
              Bespoke design &amp; engineering
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[14px] text-[#F7F8F8] hover:text-white transition-colors duration-200 group/link shrink-0"
          >
            Start a project
            <span
              className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-[2px] text-[#D9A55B]"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const DELIVERED_PLATFORMS = [
  {
    name: "Torque Toyzz",
    category: "E-Commerce Platform · RC Vehicles & Accessories",
    filterCategory: "Websites & Web Apps",
    link: "/work/torque-toyzz",
  },
  {
    name: "IQ Bridge",
    category: "E-Learning Platform · IIT & IIM Alumni Venture",
    filterCategory: "Websites & Web Apps",
    link: "/work/iq-bridge",
  },
  {
    name: "Chithu Vibes",
    category: "Mini Commerce · Tamil Heritage & Laser Craft",
    filterCategory: "Websites & Web Apps",
    link: "/work/chithu-vibes",
  },
  {
    name: "SAP Scholar",
    category: "Android Student App · Sampath Academy of Physics",
    filterCategory: "Custom Business Systems",
    link: "/work/sap-scholar",
  },
  {
    name: "SAP Checklist",
    category: "Employee Management Software · Sampath Academy",
    filterCategory: "Custom Business Systems",
    link: "/work/sap-checklist",
  },
  {
    name: "Audnex",
    category: "Brand Landing Page · Digital Presence",
    filterCategory: "Websites & Web Apps",
    link: "/work/audnex",
  },
];

export default function Section4({ activeFilter }) {
  const filteredPlatforms = DELIVERED_PLATFORMS.filter((c) => {
    if (activeFilter === "all") return true;
    return c.filterCategory === activeFilter;
  });

  return (
    <section
      aria-label="Shipped client platforms"
      className="relative z-10 w-full max-w-[1180px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32"
    >
      <h3 className="text-[14px] sm:text-[15px] font-medium text-[#8A8F98] tracking-[-0.01em] mb-4">
        Production platforms index
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.08] rounded-[14px] overflow-hidden p-0 list-none">
        {filteredPlatforms.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between p-5 sm:p-6 bg-[#08090A] transition-colors duration-200 hover:bg-white/[0.02] group"
          >
            <div className="pr-4">
              <span className="block text-[15px] sm:text-[16px] font-medium text-[#F7F8F8] tracking-tight">
                {item.name}
              </span>
              <span className="block text-[13px] text-[#8A8F98] mt-0.5">
                {item.category}
              </span>
            </div>
            <Link
              to={item.link}
              className="inline-flex items-center gap-1 text-[13px] text-[#9EA3AD] group-hover:text-[#F7F8F8] transition-colors shrink-0"
            >
              <span>Explore</span>
              <span
                className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px] text-[#D9A55B]"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

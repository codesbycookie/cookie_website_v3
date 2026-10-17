import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CookieLogo from "../components/shared/CookieLogo";
import { portfoliopage } from "../data/data";

/**
 * Rebuilt Works Page (/work) - Linear Vibe:
 * Calm, precise, text-forward, with real product visuals as the only visual weight.
 * Hairline 1px borders, subtle white-to-grey gradient headlines, zero drop shadows.
 */

// Four featured case studies with detail routes (/work/[slug])
const FEATURED_STUDIES = [
  {
    slug: "torque-toyzz",
    title: "Torque Toyzz: Instant WhatsApp E-Commerce",
    client: "Torque Toyzz",
    category: "Websites & Web Apps",
    metric: "3.4x higher checkout rate",
    turnaround: "Delivered in 14 days",
    tags: ["E-Commerce", "WhatsApp API", "Catalog Search"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    ctaLink: "/work/torque-toyzz",
  },
  {
    slug: "iq-bridge",
    title: "IQ Bridge: EdTech portfolio platform",
    client: "IQ Bridge",
    category: "Websites & Web Apps",
    metric: "14 countries reached",
    turnaround: "Delivered in 21 days",
    tags: ["EdTech", "Web App", "AI UI"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
    ctaLink: "/work/iq-bridge",
  },
  {
    slug: "audnex",
    title: "Audnex: Creative studio showcase",
    client: "Audnex",
    category: "Websites & Web Apps",
    metric: "100% client retention",
    turnaround: "Delivered in 28 days",
    tags: ["Portfolio", "Motion UI", "Creative Studio"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
    ctaLink: "/work/audnex",
  },
  {
    slug: "sap-checklist",
    title: "SAP Checklist Portal: Operations management",
    client: "SAP Consulting Group",
    category: "Custom Business Systems",
    metric: "100% gate compliance",
    turnaround: "Delivered in 42 days",
    tags: ["Enterprise", "PostgreSQL", "Full-Stack App"],
    image: "/imgs/sap_checklist.jpg",
    ctaLink: "/work/sap-checklist",
  },
];

// Other clients (logo + name + category, NOT clickable)
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

const STUDIO_STATS = [
  { value: "40+", label: "Production builds" },
  { value: "100%", label: "On-time delivery" },
  { value: "21 days", label: "Average turnaround" },
  { value: "14 countries", label: "Global footprint" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const prefersReducedMotion = useReducedMotion();
  const filterRowRef = useRef(null);
  const filterBtnsRef = useRef([]);

  // Derive unique categories that contain at least one featured project
  const projectCategories = Array.from(
    new Set(FEATURED_STUDIES.map((p) => p.category))
  );

  const filterOptions = [
    { id: "all", label: "All" },
    ...projectCategories.map((cat) => ({ id: cat, label: cat })),
  ];

  // Keyboard navigation for filter pills
  const handleFilterKeyDown = (e, idx) => {
    let nextIdx = idx;
    if (e.key === "ArrowRight") {
      nextIdx = (idx + 1) % filterOptions.length;
    } else if (e.key === "ArrowLeft") {
      nextIdx = (idx - 1 + filterOptions.length) % filterOptions.length;
    } else if (e.key === "Home") {
      nextIdx = 0;
    } else if (e.key === "End") {
      nextIdx = filterOptions.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const targetFilter = filterOptions[nextIdx];
    setActiveFilter(targetFilter.id);
    filterBtnsRef.current[nextIdx]?.focus();
  };

  const filteredFeatured = FEATURED_STUDIES.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  const filteredOtherClients = OTHER_CLIENTS.filter((c) => {
    if (activeFilter === "all") return true;
    return c.filterCategory === activeFilter;
  });

  return (
    <div className="w-full min-h-screen bg-[#08090A] text-[#F7F8F8] flex flex-col items-center relative overflow-x-clip selection:bg-[#D9A55B]/25 selection:text-[#F7F8F8]">
      {/* Top faint amber glow (6-8% opacity, large blur) */}
      <div className="linear-top-glow" aria-hidden="true" />

      {/* Subtle film grain */}
      <div className="linear-film-grain" aria-hidden="true" />

      {/* 1. HEADER SECTION (generous ~140px top padding under navbar) */}
      <header className="relative z-10 w-full max-w-[1180px] mx-auto pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 text-left">
        {/* Main headline with white-to-grey gradient fill */}
        <h1 className="linear-headline linear-fade-in text-[36px] sm:text-[50px] md:text-[62px] max-w-[14ch] text-balance mb-4">
          Real software shipped for real businesses
        </h1>

        {/* Short supporting line in grey */}
        <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[16px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
          Selected web applications, mobile platforms, and systems shipped for our clients.
        </p>

        {/* Studio Stats: inline quiet row with hairline vertical dividers */}
        <div className="linear-fade-in linear-delay-2 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-0 pt-2">
          {STUDIO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col sm:pr-8 sm:mr-8 ${
                i !== STUDIO_STATS.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
              }`}
            >
              <span className="text-[20px] sm:text-[22px] font-semibold text-[#F7F8F8] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[13px] sm:text-[14px] text-[#8A8F98]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* 2. FILTER ROW (sticky under navbar with blurred translucent background & hairline bottom border) */}
      <nav
        ref={filterRowRef}
        aria-label="Filter case studies"
        className="sticky top-[64px] z-30 w-full backdrop-blur-md bg-[#08090A]/85 border-b border-white/[0.08] transition-colors"
      >
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 py-3.5 flex items-center">
          <div
            role="group"
            aria-label="Filter case studies by category"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 88%, transparent 100%)",
            }}
          >
            {filterOptions.map((f, idx) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  ref={(el) => (filterBtnsRef.current[idx] = el)}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(f.id)}
                  onKeyDown={(e) => handleFilterKeyDown(e, idx)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                    isActive
                      ? "text-[#F7F8F8]"
                      : "text-[#8A8F98] hover:text-[#F7F8F8]"
                  }`}
                  style={{
                    border: isActive
                      ? "1px solid rgba(217, 165, 91, 0.45)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.04)"
                      : "transparent",
                  }}
                >
                  {/* Sliding highlight indicator using shared layoutId */}
                  {isActive && (
                    <motion.span
                      layoutId="linear-filter-indicator"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 400, damping: 32 }
                      }
                      className="absolute inset-0 rounded-full bg-white/[0.03] pointer-events-none"
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 3. FEATURED CASE STUDIES GRID */}
      <section
        id="featured-case-studies"
        aria-label="Featured case studies"
        className="relative z-10 w-full max-w-[1180px] mx-auto px-6 sm:px-8 pt-12 sm:pt-16 pb-20 sm:pb-24"
      >
        <div className="min-h-[500px]">
          <motion.div
            layout={!prefersReducedMotion}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredFeatured.map((card, i) => (
                <motion.article
                  key={card.slug}
                  layout={!prefersReducedMotion}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : (i % 2) * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full"
                >
                  <Link
                    to={card.ctaLink}
                    className="group linear-card rounded-[14px] p-4 sm:p-5 flex flex-col justify-between h-full text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                  >
                    <div>
                      {/* Framed project mockup on top (hairline border, inner top highlight, image fills frame) */}
                      <div className="relative w-full aspect-[16/10] rounded-[10px] overflow-hidden border border-white/[0.08] bg-[#0C0D10] mb-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10)]">
                        <img
                          src={card.image}
                          alt={`${card.title} mockup`}
                          width="720"
                          height="450"
                          loading={i < 2 ? "eager" : "lazy"}
                          fetchPriority={i < 2 ? "high" : "auto"}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                        />
                      </div>

                      {/* Project title */}
                      <h2 className="text-[20px] sm:text-[22px] font-medium tracking-[-0.03em] leading-tight text-[#F7F8F8] mb-2">
                        {card.title}
                      </h2>

                      {/* One-line outcome with real metric in grey */}
                      <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed mb-3">
                        {card.metric}
                      </p>

                      {/* Tags as plain grey text separated by commas (not pills) */}
                      <p className="text-[13px] text-[#62666D] mb-4">
                        {card.tags.join(", ")}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[13px] sm:text-[14px]">
                      {/* Delivered in X days in grey */}
                      <span className="text-[#8A8F98]">{card.turnaround}</span>

                      {/* Plain text link with small arrow that nudges 2px right on hover */}
                      <span className="inline-flex items-center gap-1.5 text-[#F7F8F8] group-hover:text-white">
                        Read case study
                        <span
                          className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[2px] group-hover:text-[#D9A55B]"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredFeatured.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[#8A8F98] text-[15px] mb-3">
                No featured case studies found in this category.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className="text-[14px] text-[#F7F8F8] hover:underline cursor-pointer inline-flex items-center gap-1.5"
              >
                Show all
                <span className="text-[#D9A55B]">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. OTHER CLIENTS LIST (hairline grid, not links, logo greyscale to color on hover, end tile to /contact) */}
      <section
        aria-label="Other client partners"
        className="relative z-10 w-full max-w-[1180px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32"
      >
        {/* Small sentence-case heading */}
        <h3 className="text-[14px] sm:text-[15px] font-medium text-[#8A8F98] tracking-[-0.01em] mb-4">
          Also built for
        </h3>

        {/* Hairline grid: gap 1px over rgba(255,255,255,0.06) background */}
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

          {/* End tile: mirroring Linear's 'Your company' tile */}
          <li className="flex items-center justify-between p-5 sm:p-6 bg-[#08090A] transition-colors duration-200 hover:bg-white/[0.02] group/end">
            <div>
              <span className="block text-[15px] sm:text-[16px] font-medium text-[#F7F8F8] tracking-tight">
                Your project
              </span>
              <span className="block text-[13px] text-[#8A8F98] mt-0.5">
                Bespoke design & engineering
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

      {/* 5. TESTIMONIAL (one quote, centered, large two-tone type, static, no carousel) */}
      <section
        aria-label="Client testimonial"
        className="relative z-10 w-full max-w-[1040px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32 text-center"
      >
        <blockquote className="text-[22px] sm:text-[28px] md:text-[32px] font-medium tracking-[-0.025em] leading-[1.3] max-w-3xl mx-auto mb-6">
          <span className="text-[#F7F8F8]">
            “Fast responses and clear pricing throughout the build.{" "}
          </span>
          <span className="text-[#8A8F98]">
            They delivered exactly what we scoped.”
          </span>
        </blockquote>

        <div className="inline-flex items-center gap-3">
          {/* Small initial avatar */}
          <div
            className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[13px] font-medium text-[#8A8F98]"
            aria-hidden="true"
          >
            T
          </div>
          <p className="text-[14px] text-[#8A8F98]">
            Tharun, Founder, How to Cook
          </p>
        </div>
      </section>

      {/* 6. FINAL CTA (Linear-style closing block with faint bottom glow & subtle radial grid) */}
      <section
        aria-label="Call to action"
        className="relative w-full py-24 sm:py-32 px-6 sm:px-8 overflow-hidden text-center flex flex-col items-center border-t border-white/[0.08]"
      >
        {/* Faint amber glow rising from bottom edge (6-8% opacity) */}
        <div className="linear-bottom-glow" aria-hidden="true" />

        {/* Very faint line grid fading radially behind it */}
        <div className="linear-cta-grid" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Small cookie mark with bite taken out of top-right edge */}
          <CookieLogo
            className="w-8 h-8 text-[#F7F8F8] mb-6 opacity-85"
            color="#F7F8F8"
            dotColor="#D9A55B"
          />

          {/* Big centered gradient headline */}
          <h2 className="linear-headline text-[32px] sm:text-[44px] md:text-[54px] max-w-xl text-balance mb-4">
            Ready to build your next product?
          </h2>

          {/* Existing supporting sentence in grey */}
          <p className="text-[15px] sm:text-[17px] text-[#8A8F98] max-w-lg leading-relaxed mb-8">
            Tell us what you are building. We will reply with a clear scope, timeline, and quote.
          </p>

          {/* Two buttons: Start a project (solid light surface) & Chat on WhatsApp (hairline ghost) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-[8px] bg-[#F7F8F8] text-[#08090A] text-[14px] font-medium hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-200"
            >
              Start a project
            </Link>
            <a
              href="https://wa.cookie.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-[8px] bg-transparent text-[#F7F8F8] border border-white/[0.12] hover:border-white/[0.24] hover:bg-white/[0.03] text-[14px] font-medium transition-colors duration-200"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

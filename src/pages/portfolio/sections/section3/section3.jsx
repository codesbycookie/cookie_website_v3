import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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

export default function Section3({ activeFilter, setActiveFilter }) {
  const prefersReducedMotion = useReducedMotion();

  const filteredFeatured = FEATURED_STUDIES.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
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
                    <div className="relative w-full aspect-[16/10] rounded-[10px] overflow-hidden border border-white/[0.08] bg-[#0C0D10] mb-5 shadow-[inset_0_1px_0_0_rgba(217,165,91,0.12)]">
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

                    <h2 className="text-[20px] sm:text-[22px] font-medium tracking-[-0.03em] leading-tight text-[#F7F8F8] mb-2">
                      {card.title}
                    </h2>

                    <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed mb-3">
                      {card.metric}
                    </p>

                    <p className="text-[13px] text-[#62666D] mb-4">
                      {card.tags.join(", ")}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[13px] sm:text-[14px]">
                    <span className="text-[#8A8F98]">{card.turnaround}</span>

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
  );
}

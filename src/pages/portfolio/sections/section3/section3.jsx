import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const FEATURED_STUDIES = [
  {
    slug: "torque-toyzz",
    title: "Torque Toyzz — E-Commerce Platform",
    client: "Torque Toyzz",
    category: "Websites & Web Apps",
    typeLabel: "E-Commerce Platform",
    problem:
      "Torque Toyzz needed a simple online store for remote-controlled vehicles and accessories so mobile shoppers could find products and order without a confusing checkout.",
    whatWeBuilt:
      "We built a mobile-first catalog with instant product search and 1-tap WhatsApp order confirmation.",
    result:
      "[ADD PROOF: Add real result for Torque Toyzz, e.g., monthly WhatsApp orders or owner feedback]",
    tags: ["Online Store", "WhatsApp Ordering", "Mobile Catalog"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264875/Torque_toyzz_Laptop_vtuqzm.png",
    secondaryImage:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264873/Torque_toyzz_tab_nlvv0z.jpg",
    ctaLink: "/work/torque-toyzz",
  },
  {
    slug: "iq-bridge",
    title: "IQ Bridge — E-Learning Platform",
    client: "IQ Bridge",
    category: "Websites & Web Apps",
    typeLabel: "E-Learning Platform",
    problem:
      "Founded by IIT and IIM alumni, IQ Bridge needed a trustworthy website to explain their academic programs and connect students with mentors.",
    whatWeBuilt:
      "We built a clear, student-friendly website that presents their courses, vision, and mentorship approach.",
    result:
      "[ADD PROOF: Add real result for IQ Bridge, e.g., student inquiries or founder quote]",
    tags: ["E-Learning Website", "Student Guidance", "Mobile Friendly"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264927/iqbridge-1_zgswg3.png",
    secondaryImage:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264917/iqbridge-2_pqbwq9.png",
    ctaLink: "/work/iq-bridge",
  },
  {
    slug: "chithu-vibes",
    title: "Chithu Vibes — Mini Commerce",
    client: "Chithu Vibes",
    category: "Websites & Web Apps",
    typeLabel: "Mini Commerce",
    problem:
      "Chithu Vibes blends Tamil heritage with laser craftsmanship and needed an engaging online storefront so customers could browse their creations easily.",
    whatWeBuilt:
      "We created a clean mini-commerce storefront that showcases their culturally inspired products on phones and computers.",
    result:
      "[ADD PROOF: Add real result for Chithu Vibes, e.g., customer response or online orders]",
    tags: ["Mini-Commerce", "Heritage Craft", "Online Storefront"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264924/chituvibes1_j2kp0d.png",
    secondaryImage:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264923/chituvibes2_wddjds.png",
    ctaLink: "/work/chithu-vibes",
  },
  {
    slug: "sap-scholar",
    title: "SAP Scholar — Student App",
    client: "Sampath Academy of Physics",
    category: "Custom Business Systems",
    typeLabel: "Android Student App",
    problem:
      "Sampath Academy of Physics, a CBSE coaching institute in North Chennai, needed an easier way to share attendance, marks, fee details, and notes with students.",
    whatWeBuilt:
      "We built SAP Scholar, an Android app where students check attendance, exam marks, fee status, and study materials in one place.",
    result:
      "[ADD PROOF: Add real result for SAP Scholar, e.g., number of students using the app]",
    tags: ["Android App", "Student Portal", "Coaching Institute"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264873/Sap_app_r0dh3j.jpg",
    secondaryImage:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264874/Sap_app2_o1keyn.jpg",
    ctaLink: "/work/sap-scholar",
  },
  {
    slug: "sap-checklist",
    title: "SAP Checklist — Employee Management Software",
    client: "Sampath Academy of Physics",
    category: "Custom Business Systems",
    typeLabel: "Employee Management Software",
    problem:
      "Tracking staff records and daily administrative tasks manually across the institute took too much time and effort.",
    whatWeBuilt:
      "We developed SAP Checklist, a web-based employee management tool to organize staff records and monitor daily tasks.",
    result:
      "[ADD PROOF: Add real result for SAP Checklist, e.g., staff count or weekly admin hours saved]",
    tags: ["Staff Management", "Daily Task Checklist", "Web Software"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264874/Checklist_Mockup_laptop_n0glyp.png",
    secondaryImage: null,
    ctaLink: "/work/sap-checklist",
  },
  {
    slug: "audnex",
    title: "Audnex — Landing Page",
    client: "Audnex",
    category: "Websites & Web Apps",
    typeLabel: "Landing Page",
    problem:
      "Audnex needed a clean, professional website that clearly explained who they are and what they offer to new visitors.",
    whatWeBuilt:
      "We designed and built a modern, mobile-friendly landing page that presents their brand and key services clearly.",
    result:
      "[ADD PROOF: Add real result for Audnex, e.g., client feedback or visitor inquiries]",
    tags: ["Landing Page", "Brand Website", "Mobile Friendly"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264916/audnex1_wrdcvt.png",
    secondaryImage: null,
    ctaLink: "/work/audnex",
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
                        className={`w-full h-full object-cover object-top transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] ${
                          card.secondaryImage ? "group-hover:opacity-0" : ""
                        }`}
                      />
                      {card.secondaryImage && (
                        <img
                          src={card.secondaryImage}
                          alt={`${card.title} alternate view`}
                          width="720"
                          height="450"
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                      )}
                    </div>

                    <h2 className="text-[20px] sm:text-[22px] font-medium tracking-[-0.03em] leading-tight text-[#F7F8F8] mb-3">
                      {card.title}
                    </h2>

                    <div className="space-y-2 text-[14px] text-[#8A8F98] leading-relaxed mb-4">
                      <p>
                        <strong className="text-[#F4F4F6] font-medium">Client’s problem:</strong>{" "}
                        {card.problem}
                      </p>
                      <p>
                        <strong className="text-[#F4F4F6] font-medium">What we built:</strong>{" "}
                        {card.whatWeBuilt}
                      </p>
                      <p>
                        <strong className="text-[#D9A55B] font-medium">Result:</strong>{" "}
                        {card.result}
                      </p>
                    </div>

                    <p className="text-[13px] text-[#62666D] mb-4">
                      {card.tags.join(" · ")}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[13px] sm:text-[14px]">
                    <span className="text-[#8A8F98]">{card.typeLabel}</span>

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

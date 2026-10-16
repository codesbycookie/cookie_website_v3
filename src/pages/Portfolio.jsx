import React, { useState } from "react";
import { Link } from "react-router-dom";
import { portfoliopage } from "../data/data";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";
import {
  ArrowRight,
  ExternalLink,
  Check,
  TrendingUp,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";

/**
 * Portfolio Page (Complete Redesign)
 * The one question: "Have they done something similar to what I need, and does it look and work well?"
 * Client-first, story-driven (Problem -> What we made -> Result), filterable, device mockups.
 */
export default function Portfolio() {
  const { section4 } = portfoliopage;
  const [activeFilter, setActiveFilter] = useState("all");

  const FILTERS = [
    { id: "all", label: "All Projects" },
    { id: "webapp", label: "Web Applications" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "enterprise", label: "Business Tools" },
  ];

  // Story-driven client projects
  const PROJECTS = [
    {
      slug: "torque-toyzz",
      title: "Torque Toyzz: Instant WhatsApp E-Commerce",
      client: "Torque Toyzz",
      industry: "Retail & Hobbyist Commerce",
      filterCategory: "ecommerce",
      goal: "The owner wanted to sell remote-controlled vehicles online without forcing mobile buyers through complex registration forms.",
      solution: "We built a mobile-first online catalog with instantaneous search and a 1-tap WhatsApp checkout that connects buyers straight to the sales team.",
      outcome: "3.4x higher mobile checkout rate and delivered in just 2 weeks.",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
      technologies: ["Fast Mobile Storefront", "WhatsApp Business Integration", "Instant Search"],
      year: "2025",
    },
    {
      slug: "iq-bridge",
      title: "IQ Bridge: Institutional EdTech Platform",
      client: "IQ Bridge",
      industry: "Education & Institutional Assessment",
      filterCategory: "webapp",
      goal: "The founders needed a credible digital presence to explain their automated assessment tools to universities and international partners.",
      solution: "We organized complex platform features into a clear, visually authoritative website with direct institutional demo booking.",
      outcome: "Expanded inquiries across 14 countries within 60 days of launch.",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
      technologies: ["Institutional Web Platform", "Interactive Product Tour", "Demo Booking Flow"],
      year: "2025",
    },
    {
      slug: "audnex",
      title: "Audnex: High-Taste Studio Showcase",
      client: "Audnex",
      industry: "Creative Media & Sound Design",
      filterCategory: "webapp",
      goal: "A premium sound studio required an international digital presence to win enterprise contracts overseas.",
      solution: "We crafted an interactive showcase with smooth hardware-accelerated transitions and optimized audio streaming previews.",
      outcome: "Sub-second load times and steady inbound client inquiries from European agencies.",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
      technologies: ["Interactive Showcase", "Smooth Media Streaming", "Fast Global Delivery"],
      year: "2025",
    },
    {
      slug: "sap-checklist",
      title: "SAP Checklist: Enterprise Verification Portal",
      client: "SAP Consulting Group",
      industry: "Enterprise Industrial Operations",
      filterCategory: "enterprise",
      goal: "Consulting teams were drowning in spreadsheets tracking hundreds of critical verification milestones during ERP transitions.",
      solution: "We created a centralized web portal with role-based permissions, automated milestone approvals, and live project status tracking.",
      outcome: "Eliminated manual tracking errors across industrial cutovers with zero system downtime.",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730704/SAP_1_1_om5jcx.png",
      technologies: ["Operations Dashboard", "Role-Based Permissions", "Milestone Tracking"],
      year: "2025",
    },
    {
      slug: "skill-link",
      title: "Skill Link: Real-Time Collaborative Classroom",
      client: "Skill Link",
      industry: "Online Education",
      filterCategory: "webapp",
      goal: "Educators needed a stable online classroom that wouldn't lag or drop connections during interactive whiteboard sessions.",
      solution: "We engineered a low-latency web application supporting simultaneous student whiteboards, video sync, and session recordings.",
      outcome: "Reliable interactive sessions with sub-50ms sync latency.",
      image: "/imgs/Skill_link_mockup.svg",
      technologies: ["Real-Time Classroom", "Live Collaborative Boards", "Low-Latency Sync"],
      year: "2024",
    },
    {
      slug: "elderly",
      title: "Elderly Companion: Accessible Health Tracker",
      client: "Elderly Health Org",
      industry: "Healthcare & Senior Living",
      filterCategory: "mobile",
      goal: "Older adults struggled with cluttered medication apps loaded with tiny text, complex menus, and annoying banner ads.",
      solution: "We designed a distraction-free mobile companion with extra-large high-contrast buttons, simple daily alerts, and one-touch family check-ins.",
      outcome: "100% adherence to senior accessibility standards and zero user confusion.",
      image: "/imgs/Elderly-Mock-up.svg",
      technologies: ["High-Contrast Mobile UI", "Simple Medication Alerts", "One-Touch Check-ins"],
      year: "2024",
    },
    {
      slug: "velus-sons",
      title: "Velu’s & Sons: Heritage Food Brand Store",
      client: "Velu Heritage Foods",
      industry: "Packaged Food & Direct Retail",
      filterCategory: "ecommerce",
      goal: "A traditional food brand wanted to bypass third-party marketplaces and sell direct to retail consumers across India.",
      solution: "We built an elegant digital storefront highlighting product purity, customer reviews, and direct digital payments.",
      outcome: "Direct retail sales grew by 3.8x with direct repeat reorders.",
      image: "/imgs/Cashew_Mockup.svg",
      technologies: ["Direct Digital Storefront", "Direct Online Payments", "Mobile Order Tracking"],
      year: "2024",
    },
  ];

  const CLIENT_LOGOS = [
    { name: "IQ Bridge", logo: "/imgs/iq-bridge-logo.png" },
    { name: "Audnex", logo: "/imgs/Audnex-logo.jpg" },
    { name: "Traffic", logo: "/imgs/Traffic-logo.jpg" },
    { name: "Tourist", logo: "/imgs/Tourist-logo.jpg" },
    { name: "V&D Granite", logo: "/imgs/V&D-logo.png" },
    { name: "How to Cook", logo: "/imgs/How_to_cook_logo.svg" },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    return p.filterCategory === activeFilter;
  });

  return (
    <div className="w-full flex flex-col items-center bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
      {/* Linear Ambient Spotlight Cone */}
      <div
        className="linear-spotlight-cone"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-12 md:pt-28 md:pb-20 px-5 sm:px-8 text-center flex flex-col items-center">
        <div className="hero-reveal linear-border-beam mb-4">
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-[#9EA3AD]">
              <span className="w-2 h-2 rounded-full bg-[#59D499] pulse-dot" />
              <span>Real Client Case Studies</span>
            </div>
          </div>
        </div>

        <h1 className="hero-reveal-delay-1 text-[36px] sm:text-[52px] md:text-[66px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.1] max-w-3xl mb-5">
          Real products built for real businesses
        </h1>

        <p className="hero-reveal-delay-2 text-[17px] sm:text-[20px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-10">
          Every project below is a living, working platform shipped for a business client. No throwaway concepts, no generic templates.
        </p>

        {/* Filter Pills */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="hero-reveal-delay-3 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#121316] border border-white/10"
        >
          {FILTERS.map((f) => {
            const isSelected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${
                  isSelected
                    ? "bg-[#D9A55B] text-[#0A0B0D] font-semibold shadow-[0_4px_16px_rgba(217,165,91,0.3)]"
                    : "text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-white/[0.05]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project Stories (The Problem -> What We Made -> The Result) */}
      <section className="w-full py-12 md:py-20 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[1140px] mx-auto space-y-16 md:space-y-24">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.slug}
                className="interactive-card p-6 sm:p-10 md:p-12 rounded-[24px]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Image / Mockup */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative rounded-[16px] overflow-hidden bg-[#0A0B0D] border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.7)] group">
                      <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-auto max-h-[380px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0B0D]/85 backdrop-blur-md border border-white/10 text-[12px] font-medium text-[#D9A55B]">
                        {project.industry}
                      </div>
                    </div>
                  </div>

                  {/* Story Narrative */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? "" : "lg:order-1"}`}>
                    <div>
                      <div className="flex items-center gap-2 text-[13px] text-[#767B85] mb-2 font-medium">
                        <span>Client: {project.client}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                      </div>

                      <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.2] mb-5">
                        {project.title}
                      </h2>

                      {/* Problem Statement */}
                      <div className="mb-4">
                        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B] block mb-1">
                          The Challenge
                        </span>
                        <p className="text-[14px] text-[#9EA3AD] leading-relaxed">
                          {project.goal}
                        </p>
                      </div>

                      {/* What We Made */}
                      <div className="mb-5">
                        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B] block mb-1">
                          What We Made
                        </span>
                        <p className="text-[14px] text-[#9EA3AD] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* The Outcome */}
                      <div className="p-4 rounded-[12px] bg-[#0A0B0D] border border-white/10 mb-6">
                        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#59D499] block mb-1 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          The Result
                        </span>
                        <p className="text-[15px] font-medium text-[#F4F4F6]">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Small technologies pill row */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] text-[#767B85] px-2.5 py-1 rounded-[6px] bg-white/[0.04]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Verified Client Trust Logos */}
      <section className="w-full py-16 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto text-center">
          <p className="text-[13px] font-medium text-[#767B85] uppercase tracking-wider mb-8">
            Trusted by founders and leadership teams across industries
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-80">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="p-4 rounded-[12px] bg-[#121316] border border-white/10 flex items-center justify-center h-20"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-10 max-w-[120px] object-contain filter grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.12] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[17px] text-[#9EA3AD] mb-8">
            Tell us about what you want to achieve. We will reply with technical advice and a realistic quote.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px]">
            Start a project
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

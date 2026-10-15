import React, { useState } from "react";
import { Link } from "react-router-dom";
import { portfoliopage } from "../data/data";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "webapp", label: "Web Applications & SaaS" },
  { id: "mobile", label: "Mobile & Consumer Apps" },
  { id: "enterprise", label: "Enterprise & ERP Engines" },
];

const SHIP_LOG = [
  {
    name: "IQ Bridge",
    client: "IQ Bridge EdTech",
    year: "2025",
    type: "Web Application & AI UI",
    stack: "React, Tailwind, Node.js",
    metric: "14 Countries Covered",
    slug: "iq-bridge",
  },
  {
    name: "Audnex Agency",
    client: "Audnex Studios",
    year: "2025",
    type: "Interactive Motion Showcase",
    stack: "React, Framer Motion, Vite",
    metric: "98 Lighthouse Score",
    slug: "audnex",
  },
  {
    name: "SAP Verification Portal",
    client: "SAP Consulting Group",
    year: "2025",
    type: "Enterprise ERP Portal",
    stack: "React, Express, PostgreSQL",
    metric: "Zero Downtime Cutover",
    slug: "sap-checklist",
  },
  {
    name: "Torque Toyzz",
    client: "Torque Toyzz",
    year: "2025",
    type: "WhatsApp E-Commerce",
    stack: "Next.js, Tailwind, WhatsApp API",
    metric: "2-Week Turnaround",
    slug: "torque-toyzz",
  },
  {
    name: "Skill Link",
    client: "Skill Link Education",
    year: "2024",
    type: "Real-time Learning Platform",
    stack: "React, WebSockets, Node",
    metric: "Sub-50ms Sync Latency",
    slug: "iq-bridge",
  },
  {
    name: "Elderly Companion",
    client: "Elderly Health Org",
    year: "2024",
    type: "Accessible Healthcare App",
    stack: "React Native, Tailwind",
    metric: "100% WCAG AAA Contrast",
    slug: "audnex",
  },
  {
    name: "V&D Granite",
    client: "V&D Stone Exports",
    year: "2024",
    type: "Global B2B Export Catalog",
    stack: "React, Serverless, Cloudinary",
    metric: "Global Buyer Pipeline",
    slug: "torque-toyzz",
  },
  {
    name: "Velu’s & Sons",
    client: "Velu Heritage Foods",
    year: "2024",
    type: "D2C Direct Storefront",
    stack: "Next.js, Razorpay, Tailwind",
    metric: "3.8x Mobile Conversion",
    slug: "iq-bridge",
  },
];

export default function Portfolio() {
  const { section4 } = portfoliopage;
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCards = section4.cards.filter((study) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "webapp") return study.category?.includes("Web") || study.category?.includes("SaaS");
    if (activeFilter === "mobile") return study.category?.includes("Mobile") || study.category?.includes("Consumer");
    if (activeFilter === "enterprise") return study.category?.includes("Enterprise") || study.category?.includes("ERP");
    return true;
  });

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A]">
      {/* 1. Atelier Header */}
      <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 px-5 sm:px-8 flex flex-col items-center text-center">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#D9A55B]/10 blur-[160px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="reveal relative mb-6 inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.09] text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] shadow-[0_0_8px_#59D499]" />
          <span>Production Works Archive · 2024–2026</span>
        </div>

        <h1
          className="reveal gradient-text relative text-[40px] sm:text-[58px] md:text-[76px] font-medium tracking-[-0.04em] leading-[1.04] max-w-4xl mb-6"
          style={{ animationDelay: "60ms" }}
        >
          Engineered for scale. Crafted with precision.
        </h1>

        <p
          className="reveal relative text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10"
          style={{ animationDelay: "120ms" }}
        >
          Every project below is a production system running for a real business. No throwaway concept designs, no generic template clones.
        </p>

        {/* Filter Bar (Custom Pill Selector) */}
        <div
          className="reveal relative flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
          style={{ animationDelay: "180ms" }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${
                  isSelected
                    ? "bg-[#D9A55B] text-[#08090A] font-semibold shadow-[0_0_20px_rgba(217,165,91,0.35)]"
                    : "text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.05]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Bespoke Editorial Case Studies (Asymmetrical Architectural Showcases) */}
      <section className="w-full hairline-y py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-[1240px] mx-auto space-y-16 md:space-y-24">
          {filteredCards.map((study, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={study.slug || study.title}
                className="bento rounded-[20px] p-6 sm:p-10 md:p-12 overflow-hidden border border-white/[0.09] shadow-[0_30px_90px_rgba(0,0,0,0.7)] group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text / Dossier Meta */}
                  <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? "" : "lg:order-2"}`}>
                    <div>
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-5 font-mono text-[12px]">
                        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#D9A55B]">
                          Case 0{idx + 1}
                        </span>
                        <span className="text-[#62666D]">·</span>
                        <span className="text-[#8A8F98]">{study.category || "Custom Platform"}</span>
                        <span className="text-[#62666D]">·</span>
                        <span className="text-[#62666D]">{study.year || "2025"}</span>
                      </div>

                      <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F4F4F6] tracking-[-0.03em] leading-[1.1] mb-4">
                        {study.title}
                      </h2>

                      <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed mb-6">
                        {study.description}
                      </p>

                      {/* Technical Specs List */}
                      <div className="space-y-2.5 mb-8 text-[13px] text-[#D0D6E0] font-mono">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0" />
                          <span>Delivered in {study.timeline || "3 Weeks"} to Production</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#57C1FF] shrink-0" />
                          <span>Stack: {study.stack?.join(", ") || "React, Tailwind, Node.js"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D3B2FF] shrink-0" />
                          <span>Client: {study.client || study.title.split(":")[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        to={`/work/${study.slug || "iq-bridge"}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#D9A55B]/60 text-[14px] font-medium text-[#F4F4F6] transition-all group/btn cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                      >
                        <span>Explore Full Case Dossier</span>
                        <ArrowRight className="w-4 h-4 text-[#D9A55B] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Cinematic Visual Device */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-1"}`}>
                    <Link
                      to={`/work/${study.slug || "iq-bridge"}`}
                      className="block relative rounded-[14px] overflow-hidden bg-black/50 border border-white/[0.08] p-3 sm:p-4 group/img shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                    >
                      {/* Top browser/device bar */}
                      <div className="flex items-center gap-2 mb-3 px-1 text-[11px] font-mono text-[#62666D]" aria-hidden="true">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="ml-2 truncate text-[#8A8F98]">app.cookie.org.in / {study.slug}</span>
                        <span className="ml-auto text-[#59D499] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                          Live Verified
                        </span>
                      </div>

                      <div className="relative overflow-hidden rounded-[8px] aspect-[16/10] bg-black/60">
                        <img
                          src={study.src}
                          alt={study.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. The Production Ship Log (Replaces boring photo masonry with architectural engineering log!) */}
      <section className="w-full hairline-y py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            eyebrow="Ship Log"
            title="Production Index & Deliveries"
            highlight="shipped across India"
            description="A transparent log of platforms engineered, deployed, and supported by our studio."
          />

          <div className="rounded-[16px] bg-black/40 border border-white/[0.08] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-[#62666D]">
                    <th className="py-4 px-6 font-medium">Platform / Client</th>
                    <th className="py-4 px-6 font-medium">Domain & Scope</th>
                    <th className="py-4 px-6 font-medium hidden md:table-cell">Stack</th>
                    <th className="py-4 px-6 font-medium">Key Metric</th>
                    <th className="py-4 px-6 font-medium text-right">Dossier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {SHIP_LOG.map((item) => (
                    <tr
                      key={item.name}
                      className="hover:bg-white/[0.03] transition-colors group"
                    >
                      <td className="py-4 px-6">
                        <div className="font-medium text-[#F4F4F6] text-[14px]">{item.name}</div>
                        <div className="text-[12px] text-[#62666D] font-mono">{item.client} · {item.year}</div>
                      </td>
                      <td className="py-4 px-6 text-[#8A8F98]">{item.type}</td>
                      <td className="py-4 px-6 font-mono text-[12px] text-[#D0D6E0] hidden md:table-cell">
                        {item.stack}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#59D499]/10 border border-[#59D499]/20 text-[#59D499] text-[12px] font-mono font-medium">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {item.metric}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          to={`/work/${item.slug}`}
                          className="inline-flex items-center gap-1 text-[13px] text-[#D9A55B] hover:text-[#F3D9A8] font-medium transition-colors"
                        >
                          <span>Review</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Atelier Statistics */}
      <section className="relative w-full hairline-y py-20 md:py-28 px-5 sm:px-8 text-center overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px] bg-[#D9A55B]/10 blur-[130px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="gradient-text text-[44px] md:text-[56px] font-medium tracking-tight mb-2">40+</div>
            <div className="text-[13px] text-[#8A8F98] font-mono uppercase tracking-wider">Products Deployed</div>
          </div>
          <div>
            <div className="gradient-text text-[44px] md:text-[56px] font-medium tracking-tight mb-2">3 wks</div>
            <div className="text-[13px] text-[#8A8F98] font-mono uppercase tracking-wider">Average MVP Sprint</div>
          </div>
          <div>
            <div className="gradient-text text-[44px] md:text-[56px] font-medium tracking-tight mb-2">98+</div>
            <div className="text-[13px] text-[#8A8F98] font-mono uppercase tracking-wider">Avg Core Web Vitals</div>
          </div>
          <div>
            <div className="gradient-text text-[44px] md:text-[56px] font-medium tracking-tight mb-2">100%</div>
            <div className="text-[13px] text-[#8A8F98] font-mono uppercase tracking-wider">In-House Code</div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="relative w-full hairline-y py-24 md:py-36 px-5 sm:px-8 text-center overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#D9A55B]/12 blur-[130px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[34px] sm:text-[48px] font-medium tracking-[-0.03em] leading-[1.08] mb-6">
            Ready to build your next product?
          </h2>
          <p className="text-[16px] text-[#8A8F98] mb-9 leading-relaxed max-w-xl">
            Tell us about your project. We will return with a detailed technical scope, architectural recommendation, and a fixed turnaround commitment.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Start a project
          </Button>
        </div>
      </section>
    </div>
  );
}

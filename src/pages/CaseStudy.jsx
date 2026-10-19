import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { portfoliopage } from "../data/data";
import Button from "../components/shared/Button";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Clock, Globe } from "lucide-react";

/**
 * Case Study Detail Page
 * Client-First, Outcome-Focused, Clean Typography, Zero Hacker Monospace.
 */
export default function CaseStudy() {
  const { slug } = useParams();

  const study = portfoliopage.section4.cards.find(
    (c) => c.slug === slug || c.ctaLink?.endsWith(`/${slug}`)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  // Find next project in the list
  const currentIndex = portfoliopage.section4.cards.indexOf(study);
  const nextStudy =
    portfoliopage.section4.cards[(currentIndex + 1) % portfoliopage.section4.cards.length];

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#0A0B0D] text-[#F4F4F6]">
      {/* Top back navigation & Hero */}
      <section className="relative w-full pt-8 pb-14 md:pt-12 md:pb-16 px-5 sm:px-8">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1000px] mx-auto">
          {/* Breadcrumb Navigation */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[14px] text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors mb-8 group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all client work</span>
          </Link>

          {/* Eyebrow metadata */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 text-[13px] font-medium text-[#9EA3AD]">
            <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#D9A55B]">
              {study.category || "Case Study"}
            </span>
            {study.year && <span>· {study.year}</span>}
            {study.client && <span>· {study.client}</span>}
          </div>

          <h1 className="text-[32px] sm:text-[46px] md:text-[54px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.12] mb-6">
            {study.title}
          </h1>

          <p className="text-[15px] sm:text-[18px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-10">
            {study.description}
          </p>

          {/* Quick specs bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-[14px]">
            <div>
              <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
                Client
              </span>
              <span className="text-[#F4F4F6] font-medium">
                {study.client || study.title.split("–")[0].trim()}
              </span>
            </div>
            <div>
              <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
                Services
              </span>
              <span className="text-[#F4F4F6] font-medium">
                {study.services?.join(", ") || "Web App & Design"}
              </span>
            </div>
            <div>
              <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
                Timeline
              </span>
              <span className="text-[#F4F4F6] font-medium">
                {study.timeline || "3 Weeks"}
              </span>
            </div>
            <div>
              <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
                Location
              </span>
              <span className="text-[#F4F4F6] font-medium">
                {study.location || "India"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="w-full px-5 sm:px-8 max-w-[1040px] mb-16">
        <div className="rounded-[20px] p-2 sm:p-3 overflow-hidden bg-[#121316] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          <img
            src={study.src}
            alt={study.title}
            className="w-full h-auto rounded-[14px] object-cover max-h-[600px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Case Study Deep Dive Body */}
      <section className="w-full py-16 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Narrative */}
          <div className="md:col-span-8 space-y-10 text-[15px] sm:text-[16px] text-[#9EA3AD] leading-relaxed">
            <div>
              <h2 className="text-[24px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
                Overview & Context
              </h2>
              <div className="space-y-4">
                {typeof study.content === "function" ? study.content() : <p>{study.content}</p>}
              </div>
            </div>

            {/* Delivered Solution */}
            <div>
              <h2 className="text-[24px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
                Delivered Solution
              </h2>
              <ul className="space-y-3">
                {(study.deliverables || [
                  "Custom responsive interface designed for conversion",
                  "Performance optimization targeting sub-second page loads",
                  "Integration with operational business APIs and payment flows",
                  "Comprehensive testing, domain cutover, and post-launch support",
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#F4F4F6]">
                    <CheckCircle2 className="w-5 h-5 text-[#59D499] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Outcomes & Action */}
          <div className="md:col-span-4 space-y-6">
            <div className="rounded-[18px] bg-[#121316] border border-white/10 p-6 space-y-6">
              <div>
                <h3 className="text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-3">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(study.stack || ["React", "Tailwind CSS", "Vite", "Node.js"]).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-[6px] bg-white/[0.04] border border-white/10 text-[13px] text-[#F4F4F6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-3">
                  Verified Outcome
                </h3>
                <div className="p-4 rounded-[10px] bg-[#0A0B0D] border border-white/10">
                  <div className="text-[22px] font-semibold text-[#59D499]">
                    Production Ready
                  </div>
                  <div className="text-[#9EA3AD] text-[13px] mt-1">
                    Delivered on schedule with 100% in-house engineering
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/contact" variant="primary" size="md" className="w-full min-h-[44px]">
                  Start a similar project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Footer Bar */}
      {nextStudy && (
        <section className="w-full py-16 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
          <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#767B85] block mb-1">
                Next Case Study
              </span>
              <h3 className="text-[22px] font-semibold text-[#F4F4F6] tracking-tight">
                {nextStudy.title}
              </h3>
            </div>
            <Button
              to={`/work/${nextStudy.slug || "iq-bridge"}`}
              variant="ghost"
              size="md"
              className="min-h-[44px]"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.12] mb-4">
            Ready to build your next product?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#9EA3AD] mb-8 max-w-xl">
            Tell us about your project. We will reply with technical scope and a realistic quote within 1 business day.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px]">
            Start a project
          </Button>
        </div>
      </section>
    </div>
  );
}

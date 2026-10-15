import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { portfoliopage } from "../data/data";
import Button from "../components/shared/Button";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, Layers, Cpu, Clock, ExternalLink } from "lucide-react";

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
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A]">
      {/* Top back navigation & Hero */}
      <section className="relative w-full pt-16 pb-16 md:pt-24 md:pb-24 px-5 sm:px-8">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1000px] mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[13px] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all work</span>
          </Link>

          {/* Eyebrow metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[12px]">
            <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#D9A55B]">
              {study.category || "Case Study"}
            </span>
            {study.year && (
              <span className="text-[#62666D]">· {study.year}</span>
            )}
            {study.client && (
              <span className="text-[#8A8F98]">· {study.client}</span>
            )}
          </div>

          <h1 className="gradient-text text-[36px] sm:text-[54px] md:text-[68px] font-medium tracking-[-0.04em] leading-[1.05] mb-6">
            {study.title}
          </h1>

          <p className="text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
            {study.description}
          </p>

          {/* Quick specs pill bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08] text-[13px]">
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-1">Client</span>
              <span className="text-[#F4F4F6] font-medium">{study.client || study.title.split("–")[0].trim()}</span>
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-1">Services</span>
              <span className="text-[#F4F4F6] font-medium">{study.services?.join(", ") || "Web App & Design"}</span>
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-1">Timeline</span>
              <span className="text-[#F4F4F6] font-medium">{study.timeline || "3 Weeks MVP"}</span>
            </div>
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-1">Location</span>
              <span className="text-[#F4F4F6] font-medium">{study.location || "India"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Image */}
      <section className="w-full px-5 sm:px-8 max-w-[1100px] mb-20">
        <div className="bento rounded-[20px] p-2 sm:p-3 overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          <img
            src={study.src}
            alt={study.title}
            className="w-full h-auto rounded-[14px] object-cover max-h-[640px]"
          />
        </div>
      </section>

      {/* Case Study Deep Dive Body */}
      <section className="w-full hairline-y py-20 px-5 sm:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Narrative */}
          <div className="md:col-span-8 space-y-12 text-[15px] sm:text-[16px] text-[#D0D6E0] leading-relaxed">
            <div>
              <h2 className="text-[24px] font-medium text-[#F4F4F6] tracking-tight mb-4">
                Overview & Context
              </h2>
              <div className="space-y-4 text-[#8A8F98]">
                {typeof study.content === "function" ? study.content() : <p>{study.content}</p>}
              </div>
            </div>

            {study.challenge && (
              <div>
                <h2 className="text-[24px] font-medium text-[#F4F4F6] tracking-tight mb-4">
                  The Technical Challenge
                </h2>
                <p className="text-[#8A8F98] leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            )}

            {study.solution && (
              <div>
                <h2 className="text-[24px] font-medium text-[#F4F4F6] tracking-tight mb-4">
                  Architecture & Solution
                </h2>
                <p className="text-[#8A8F98] leading-relaxed">
                  {study.solution}
                </p>
              </div>
            )}

            {/* Key Deliverables */}
            <div>
              <h2 className="text-[24px] font-medium text-[#F4F4F6] tracking-tight mb-4">
                What Was Shipped
              </h2>
              <ul className="space-y-3">
                {(study.deliverables || [
                  "Custom responsive interface engineered with React",
                  "Performance optimization targeting 95+ Core Web Vitals",
                  "Structured API routing and serverless backend integration",
                  "Production deployment, automated backup, and DNS cutover",
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Stack & Telemetry */}
          <div className="md:col-span-4 space-y-8">
            <div className="bento rounded-[16px] p-6 space-y-6">
              <div>
                <h3 className="text-[13px] font-mono uppercase tracking-wider text-[#62666D] mb-3">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(study.stack || ["React", "Tailwind CSS", "Vite", "Node.js"]).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-[6px] bg-white/[0.04] border border-white/[0.08] text-[12px] font-mono text-[#F4F4F6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[13px] font-mono uppercase tracking-wider text-[#62666D] mb-3">
                  Outcomes
                </h3>
                <div className="space-y-3 text-[13px]">
                  <div className="p-3 rounded-[8px] bg-black/40 border border-white/[0.06]">
                    <div className="text-[20px] font-medium text-[#59D499]">98+</div>
                    <div className="text-[#8A8F98] text-[12px]">Lighthouse Performance</div>
                  </div>
                  <div className="p-3 rounded-[8px] bg-black/40 border border-white/[0.06]">
                    <div className="text-[20px] font-medium text-[#D9A55B]">2-3 wks</div>
                    <div className="text-[#8A8F98] text-[12px]">Turnaround to Staging</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Start a similar project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Footer Bar */}
      {nextStudy && (
        <section className="w-full hairline-y py-16 px-5 sm:px-8">
          <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[12px] text-[#62666D] uppercase tracking-wider block mb-1">
                Next Project
              </span>
              <h3 className="text-[22px] font-medium text-[#F4F4F6] tracking-tight">
                {nextStudy.title}
              </h3>
            </div>
            <Button to={`/work/${nextStudy.slug || "iq-bridge"}`} variant="ghost" size="md">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative w-full hairline-y py-24 md:py-36 px-5 sm:px-8 text-center overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#D9A55B]/12 blur-[130px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[34px] sm:text-[48px] font-medium tracking-[-0.03em] leading-[1.08] mb-5">
            Ready to build your next product?
          </h2>
          <p className="text-[16px] text-[#8A8F98] mb-9">
            Tell us what you are building. We will reply with a scope, timeline, and fixed quote.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Start a project
          </Button>
        </div>
      </section>
    </div>
  );
}

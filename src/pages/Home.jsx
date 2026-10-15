import React, { useState } from "react";
import { Link } from "react-router-dom";
import { homepage, portfoliopage } from "../data/data";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import Accordion from "../components/shared/Accordion";
import StudioWindow from "../components/shared/StudioWindow";
import StickyFeatures from "../components/shared/StickyFeatures";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Palette,
  CheckCircle2,
} from "lucide-react";

const CLIENTS = [
  { name: "IQ Bridge", domain: "EdTech AI Infrastructure" },
  { name: "Torque Toyzz", domain: "Luxury Commerce" },
  { name: "V&D Granite", domain: "B2B Export System" },
  { name: "Skill Link", domain: "Real-time Platform" },
  { name: "Audnex", domain: "Motion Agency" },
  { name: "Velu’s & Sons", domain: "Heritage Retail" },
];

const DISCIPLINES = [
  {
    num: "01",
    icon: Globe,
    title: "High-Velocity Web Applications",
    desc: "Fast, accessible, SEO-ready web applications and client portals built on modern React. Engineered to convert from the first interaction.",
    metrics: [
      { k: "Performance", v: "98+" },
      { k: "Response Time", v: "<100ms" },
      { k: "Architecture", v: "React 19" },
    ],
    deliverables: ["Custom Web Application", "REST / GraphQL APIs", "Sub-second Page Speeds", "Automated Testing"],
    tone: "#D9A55B",
  },
  {
    num: "02",
    icon: Smartphone,
    title: "Native Mobile & Cross-Platform Apps",
    desc: "Single codebase, zero compromise. Smooth, native-feel iOS and Android applications with offline synchronization and gesture navigation.",
    metrics: [
      { k: "Platforms", v: "iOS & Android" },
      { k: "Sync Speed", v: "Real-time" },
      { k: "UX Standard", v: "60 FPS" },
    ],
    deliverables: ["Cross-Platform Codebase", "Push Notifications", "Biometric Auth", "Store Submissions"],
    tone: "#57C1FF",
  },
  {
    num: "03",
    icon: Database,
    title: "Tailored ERP & Internal Engines",
    desc: "Replace fragile spreadsheets with bespoke software shaped precisely around your team’s daily operational workflow and business rules.",
    metrics: [
      { k: "Data Integrity", v: "100%" },
      { k: "Role Controls", v: "RBAC" },
      { k: "Reporting", v: "Automated" },
    ],
    deliverables: ["Operations Dashboard", "Multi-Tenant Roles", "Inventory / Billing", "Automated Backups"],
    tone: "#D3B2FF",
  },
  {
    num: "04",
    icon: Palette,
    title: "Brand Systems & Design Engineering",
    desc: "Design tokens, design systems, and bespoke micro-interactions that elevate your product from functional to unforgettable.",
    metrics: [
      { k: "Accessibility", v: "WCAG AAA" },
      { k: "Tokens", v: "Figma to Code" },
      { k: "Motion", v: "Hardware Accel" },
    ],
    deliverables: ["Design System", "Interactive Prototype", "Brand Mark & Identity", "Marketing Assets"],
    tone: "#59D499",
  },
];

const CADENCE = [
  {
    phase: "Phase 01",
    title: "Architectural Scope & Strategy",
    time: "Days 1–3",
    desc: "We dissect your business goals, user journeys, and technical constraints. You receive a concrete scope, milestones, and a fixed quote.",
  },
  {
    phase: "Phase 02",
    title: "Interactive Clickable Prototype",
    time: "Week 1",
    desc: "Wireframes evolve into polished UI in a shared interactive prototype. You test the complete product experience before we write backend code.",
  },
  {
    phase: "Phase 03",
    title: "Zero-Debt Engineering Sprints",
    time: "Weeks 2–3",
    desc: "Weekly deployments to a live staging preview. You click through working features every Friday, without status-meeting bureaucracy.",
  },
  {
    phase: "Phase 04",
    title: "Production Cutover & Hypercare",
    time: "Week 4+",
    desc: "Zero-downtime deployment, DNS cutover, automated backups, and 30 days of included technical hypercare with direct founder access.",
  },
];

const STATS = [
  { value: "40+", label: "Products Shipped", sub: "Across India & abroad" },
  { value: "3 wks", label: "Average MVP Turnaround", sub: "From kickoff to live URL" },
  { value: "98+", label: "Avg Lighthouse Score", sub: "Core Web Vitals certified" },
  { value: "<24h", label: "Founder Response SLA", sub: "Direct WhatsApp line" },
];

export default function Home() {
  const { reviews } = homepage.section6;
  const flagshipStudies = portfoliopage.section4.cards.slice(0, 3);
  const [activeFlagship, setActiveFlagship] = useState(0);

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A]">
      {/* 1. Hero: Architectural Atelier Introduction */}
      <section className="relative w-full pt-20 pb-20 md:pt-28 md:pb-28 flex flex-col items-center text-center px-5 sm:px-8">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[440px] bg-[#D9A55B]/10 blur-[170px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Live Studio Status Pill */}
        <div className="reveal relative mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-[12px] font-mono tracking-wide text-[#8A8F98]">
          <span className="w-2 h-2 rounded-full bg-[#59D499] animate-pulse" />
          <span className="text-[#F4F4F6] font-medium">Built for Business Owners & Founders</span>
          <span className="text-[#62666D]">·</span>
          <span>Direct Founder Access · 2026</span>
        </div>

        <h1
          className="reveal gradient-text relative text-[40px] sm:text-[60px] md:text-[76px] font-medium tracking-[-0.04em] leading-[1.04] max-w-5xl mb-6"
          style={{ animationDelay: "60ms" }}
        >
          We design & build the software that scales your business.
        </h1>

        <p
          className="reveal relative text-[17px] sm:text-[21px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10"
          style={{ animationDelay: "120ms" }}
        >
          Cookie Inc. builds high-converting websites, mobile apps, and custom ERP tools for growing businesses. No agency bureaucracy — you work directly with technical founders who deliver in weeks, not quarters.
        </p>

        <div
          className="reveal relative flex flex-col sm:flex-row items-center gap-3.5 mb-6"
          style={{ animationDelay: "180ms" }}
        >
          <Button to="/contact" variant="primary" size="lg">
            Start a project
          </Button>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 h-12 px-6 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[15px] font-medium text-[#F4F4F6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
          >
            <span>Explore Shipped Work</span>
            <ArrowRight className="w-4 h-4 text-[#D9A55B]" />
          </Link>
        </div>

        <div
          className="reveal relative flex items-center justify-center gap-4 text-[12px] font-mono text-[#62666D] mb-16"
          style={{ animationDelay: "220ms" }}
        >
          <span>Free discovery brief</span>
          <span>·</span>
          <span>Weekly live previews</span>
          <span>·</span>
          <span>Founder on every sprint</span>
        </div>

        {/* Interactive Studio Workspace Sandbox */}
        <div className="reveal relative w-full max-w-5xl" style={{ animationDelay: "280ms" }}>
          <StudioWindow />
        </div>
      </section>

      {/* 2. Client Roster: Architectural Ticker */}
      <section className="w-full hairline-y py-12 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#62666D] text-center mb-8">
            Selected client engagements across India & overseas
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="p-3.5 rounded-[10px] bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex flex-col items-center text-center group"
              >
                <span className="text-[15px] font-medium text-[#F4F4F6] group-hover:text-[#D9A55B] transition-colors">
                  {c.name}
                </span>
                <span className="text-[11px] font-mono text-[#62666D] mt-1 truncate max-w-full">
                  {c.domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Studio Stance: Architectural Principles */}
      <section className="w-full hairline-y py-20 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-5 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
            Studio Manifesto
          </div>

          <h2 className="gradient-text text-[32px] sm:text-[46px] md:text-[58px] font-medium tracking-[-0.03em] leading-[1.08] mb-14 max-w-4xl">
            Software built with high standards turns ambitious companies into category leaders.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bento rounded-[16px] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-[12px] text-[#D9A55B]">§ 01</span>
                <h3 className="text-[20px] font-medium text-[#F4F4F6] mt-4 mb-2 tracking-tight">
                  Intentional UI Engineering
                </h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                  Every interaction is anchored to a commercial outcome. We cut decorative bloat so your users focus on taking action.
                </p>
              </div>
            </div>

            <div className="bento rounded-[16px] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-[12px] text-[#57C1FF]">§ 02</span>
                <h3 className="text-[20px] font-medium text-[#F4F4F6] mt-4 mb-2 tracking-tight">
                  Zero Technical Debt
                </h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                  Clean modular component structures, strict TypeScript / React patterns, and clean architecture your in-house engineers can take over.
                </p>
              </div>
            </div>

            <div className="bento rounded-[16px] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-[12px] text-[#59D499]">§ 03</span>
                <h3 className="text-[20px] font-medium text-[#F4F4F6] mt-4 mb-2 tracking-tight">
                  Sprints in Weeks, Not Months
                </h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                  We ship working staging URLs from week one. Continuous deployment means you witness real momentum, not PowerPoint reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Rhythm: StickyFeatures Stepper */}
      <section className="w-full hairline-y py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            eyebrow="Delivery Cadence"
            title="One calm rhythm,"
            highlight="from first brief to launch"
            description="Explore each phase with interactive tabs or smooth scrolling."
          />
          <StickyFeatures />
        </div>
      </section>

      {/* 5. Studio Disciplines (Bespoke 4-Quadrant Matrix) */}
      <section id="services" className="w-full hairline-y py-20 md:py-32 px-5 sm:px-8 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we architect & code"
            highlight="under one roof"
            description="Engineering, system architecture, and product design united in a single focused studio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DISCIPLINES.map((d) => (
              <article
                key={d.num}
                className="bento rounded-[18px] p-8 sm:p-10 flex flex-col justify-between border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="w-10 h-10 rounded-[10px] bg-white/[0.05] border border-white/10 flex items-center justify-center"
                      style={{ color: d.tone }}
                    >
                      <d.icon className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-[12px] text-[#62666D]">Discipline {d.num}</span>
                  </div>

                  <h3 className="text-[24px] font-medium text-[#F4F4F6] tracking-tight mb-3">
                    {d.title}
                  </h3>
                  <p className="text-[15px] text-[#8A8F98] leading-relaxed mb-6">
                    {d.desc}
                  </p>

                  {/* Telemetry pills */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6 font-mono text-[11px]">
                    {d.metrics.map((m) => (
                      <div key={m.k} className="p-2.5 rounded-[8px] bg-black/40 border border-white/[0.06]">
                        <div className="text-[17px] font-medium" style={{ color: d.tone }}>
                          {m.v}
                        </div>
                        <div className="text-[#62666D] mt-0.5 truncate">{m.k}</div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables checklist */}
                  <div className="grid grid-cols-2 gap-2 text-[12px] text-[#D0D6E0] pt-4 border-t border-white/[0.06]">
                    {d.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: d.tone }} />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BESPOKE FEATURED WORK: Creative Atelier Dossier (NOT a generic gallery!) */}
      <section className="w-full hairline-y py-20 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B]" />
                Featured Production Systems
              </div>
              <h2 className="gradient-text text-[32px] sm:text-[46px] font-medium tracking-tight leading-[1.1]">
                Products we are proud to have launched.
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#D9A55B] hover:text-[#F3D9A8] transition-colors group"
            >
              <span>View complete 40+ project archive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Flagship Showcase */}
          <div className="space-y-12">
            {flagshipStudies.map((study, idx) => (
              <article
                key={study.slug}
                className="bento rounded-[20px] p-6 sm:p-10 overflow-hidden border border-white/[0.09] shadow-[0_30px_80px_rgba(0,0,0,0.8)] group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Strategic Narrative */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4 font-mono text-[12px]">
                        <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#D9A55B]">
                          Project 0{idx + 1}
                        </span>
                        <span className="text-[#62666D]">·</span>
                        <span className="text-[#8A8F98]">{study.category || "Web App"}</span>
                      </div>

                      <h3 className="text-[26px] sm:text-[34px] font-medium text-[#F4F4F6] tracking-tight leading-[1.12] mb-3">
                        {study.title}
                      </h3>

                      <p className="text-[15px] text-[#8A8F98] leading-relaxed mb-6">
                        {study.description}
                      </p>

                      <div className="space-y-2 mb-8 font-mono text-[12px] text-[#D0D6E0]">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#59D499]" />
                          <span>Turnaround: {study.timeline || "3 Weeks"} MVP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#57C1FF]" />
                          <span>Stack: {study.stack?.join(", ") || "React, Tailwind, Node.js"}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/work/${study.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#D9A55B]/60 text-[14px] font-medium text-[#F4F4F6] transition-all w-fit cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 text-[#D9A55B]" />
                    </Link>
                  </div>

                  {/* Right: Immersive Production Preview */}
                  <div className="lg:col-span-7">
                    <Link
                      to={`/work/${study.slug}`}
                      className="block relative rounded-[12px] overflow-hidden bg-black/60 border border-white/[0.08] p-3 sm:p-4 group/preview shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    >
                      <div className="flex items-center gap-2 mb-3 px-1 text-[11px] font-mono text-[#62666D]" aria-hidden="true">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <span className="ml-2 truncate text-[#8A8F98]">production / {study.slug}</span>
                      </div>
                      <div className="aspect-[16/10] overflow-hidden rounded-[8px] bg-black/40">
                        <img
                          src={study.src}
                          alt={study.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/preview:scale-[1.03]"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Continuous Delivery Protocol (Replacing generic steps) */}
      <section id="process" className="w-full hairline-y py-20 md:py-32 px-5 sm:px-8 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            eyebrow="Delivery Protocol"
            title="The 4-Sprint Protocol"
            highlight="predictable, transparent, swift"
            description="How our studio moves an idea from whiteboard to production without bureaucracy."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {CADENCE.map((step, idx) => (
              <div
                key={step.phase}
                className="bento rounded-[16px] p-7 flex flex-col justify-between border border-white/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[12px] text-[#D9A55B]">{step.phase}</span>
                    <span className="font-mono text-[11px] text-[#62666D]">{step.time}</span>
                  </div>
                  <h3 className="text-[20px] font-medium text-[#F4F4F6] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#62666D]">
                  Checkpoint 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Verified Proof: Testimonials */}
      <section className="w-full hairline-y py-20 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Proof" title="Endorsements from founders" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.slice(0, 6).map((r) => (
              <figure key={r.name} className="bento rounded-[16px] p-7 flex flex-col justify-between gap-8 border border-white/[0.08]">
                <blockquote className="text-[15px] text-[#D0D6E0] leading-relaxed">
                  "{r.body.trim()}"
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={r.img} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </span>
                  <div>
                    <span className="block text-[14px] font-medium text-[#F4F4F6]">{r.name.trim()}</span>
                    <span className="block text-[12px] text-[#8A8F98]">{r.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Production Telemetry */}
      <section className="w-full hairline-y py-16 px-5 sm:px-8">
        <dl className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="gradient-text text-[44px] md:text-[56px] font-medium tracking-[-0.03em] leading-none mb-2">
                {s.value}
              </dd>
              <div className="text-[13px] font-medium text-[#F4F4F6] mb-1">{s.label}</div>
              <p className="text-[11px] font-mono text-[#62666D]">{s.sub}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className="w-full hairline-y py-20 md:py-32 px-5 sm:px-8 scroll-mt-20">
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="FAQ" title={homepage.section8.title} />
          <Accordion items={homepage.section8.faqs} />
        </div>
      </section>

      {/* 11. Closing Call: Direct Partnership */}
      <section id="cta" className="relative w-full hairline-y py-24 md:py-36 px-5 sm:px-8 text-center overflow-hidden scroll-mt-20">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D9A55B]/12 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[36px] sm:text-[52px] md:text-[66px] font-medium tracking-[-0.035em] leading-[1.05] mb-6">
            Built for the businesses you are about to become.
          </h2>
          <p className="text-[17px] text-[#8A8F98] mb-10 max-w-xl leading-relaxed">
            Tell us what you are building. You will collaborate directly with founders who write code, with a clear scope and fixed delivery date.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Start a project
            </Button>
            <a
              href="https://wa.cookie.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[14px] font-medium text-[#D0D6E0] hover:text-[#F4F4F6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
            >
              <span className="w-2 h-2 rounded-full bg-[#59D499] animate-pulse" />
              <span>Direct WhatsApp Line</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

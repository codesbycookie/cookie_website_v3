import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CookieLogo from "../components/shared/CookieLogo";
import {
  Scale,
  Sparkles,
  Lock,
  CheckCircle2,
  ShieldCheck,
  FileText,
  ArrowRight,
  Mail,
  MessageSquare,
} from "lucide-react";
import { social_links } from "../data/data";

const TERMS_STATS = [
  { value: "100%", label: "IP ownership transferred" },
  { value: "Day 1", label: "Mutual NDA protection" },
  { value: "Fixed", label: "Scope & milestone billing" },
  { value: "30 Days", label: "Post-launch warranty" },
];

const TERMS_PRINCIPLES = [
  {
    icon: Sparkles,
    title: "100% Code & Asset Ownership",
    desc: "Upon final milestone payment, all bespoke React code, UI designs, schemas, and assets belong exclusively to you. Zero proprietary lock-in.",
  },
  {
    icon: Lock,
    title: "Bilateral NDA from Day 1",
    desc: "We treat your business strategy, repositories, credentials, and customer datasets under strict legal commercial non-disclosure.",
  },
  {
    icon: CheckCircle2,
    title: "Milestone-Verified Invoicing",
    desc: "Every invoice is tied to verifiable working software previews on private links. You inspect and verify before milestone billing is due.",
  },
  {
    icon: ShieldCheck,
    title: "30-Day Post-Launch Care",
    desc: "Dedicated defect resolution and performance tuning for 30 calendar days post-deployment at zero extra cost, with direct WhatsApp builder access.",
  },
];

const ARTICLES = [
  {
    num: "01",
    tag: "SCOPE & ENGAGEMENT",
    title: "Services, Statements of Work, and Iterative Sprints",
    content: (
      <>
        <p className="mb-3">
          Cookie Inc. (&ldquo;Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides bespoke software engineering, digital product design, web applications, mobile platforms, and technical architecture consulting.
        </p>
        <p className="mb-4">
          All client engagements are governed by an individual Statement of Work (&ldquo;SOW&rdquo;) or formal proposal outlining fixed milestones, technical deliverables, pricing, and agreed turnaround schedules. Work commences upon mutual sign-off and receipt of the initial kickoff deposit.
        </p>
        <div className="p-4 rounded-[12px] bg-white/[0.02] border border-white/[0.06] text-[13px] text-[#8A8F98] flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#F7F8F8] font-medium">Verifiable Milestones:</strong> Clients receive access to private staging links at every sprint. Feedback is incorporated in structured review cycles before subsequent milestones proceed.
          </span>
        </div>
      </>
    ),
  },
  {
    num: "02",
    tag: "INTELLECTUAL PROPERTY",
    title: "100% Full Assignment of Bespoke Deliverables",
    content: (
      <>
        <p className="mb-4">
          Upon receipt of full and final milestone payment, Cookie Inc. assigns 100% of all rights, titles, and intellectual property in all bespoke source code, UI/UX designs, Figma components, database schemas, and digital assets created specifically for the Client under the applicable SOW.
        </p>
        <ul className="space-y-2 text-[13px] sm:text-[14px]">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Zero Vendor Lock-in:</strong> You receive complete Git repository ownership, documentation, and credentials required to independently host, modify, or extend the codebase.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Open Source Libraries:</strong> Standard permissible open-source dependencies (e.g. React, Tailwind CSS, Vite) remain licensed under their respective MIT/Apache licenses.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "03",
    tag: "CONFIDENTIALITY",
    title: "Strict Commercial Non-Disclosure (NDA)",
    content: (
      <>
        <p className="mb-3">
          We treat all client technical specifications, business logic, customer datasets, unreleased product concepts, and server credentials with strict confidentiality.
        </p>
        <p>
          Neither party shall disclose any Proprietary Information to third parties without prior written consent. We routinely execute bilateral Non-Disclosure Agreements (&ldquo;NDAs&rdquo;) prior to receiving access to existing client repositories or production databases.
        </p>
      </>
    ),
  },
  {
    num: "04",
    tag: "PAYMENT & MILESTONES",
    title: "Transparent Fixed-Scope Milestone Billing",
    content: (
      <>
        <p className="mb-3">
          Invoices are denominated in INR (Indian Rupees) for domestic clients and USD for international clients, payable via bank wire, UPI, or international corporate transfer.
        </p>
        <p>
          Invoices are issued upon verifiable completion of agreed milestone deliverables and are due within 7 business days of receipt unless specified otherwise in the SOW. Work releases proceed sequentially upon sign-off of preceding milestones.
        </p>
      </>
    ),
  },
  {
    num: "05",
    tag: "WARRANTY & PERFORMANCE",
    title: "30-Day Defect Warranty & Post-Launch Support",
    content: (
      <>
        <p className="mb-3">
          Cookie Inc. warrants that all deliverables will perform substantially in conformance with agreed specifications for 30 calendar days following production launch.
        </p>
        <p>
          Any reproducible functional bugs, layout breaks, or configuration errors reported within this warranty window will be remediated promptly by our engineering team at no extra cost, with direct access to senior builders on WhatsApp.
        </p>
      </>
    ),
  },
  {
    num: "06",
    tag: "JURISDICTION & DISPUTES",
    title: "Governing Law & Legal Jurisdiction",
    content: (
      <p>
        These Terms of Service and any associated project agreements are governed by and construed in accordance with the substantive laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
      </p>
    ),
  },
];

export default function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-hidden selection:bg-[#D9A55B]/25 selection:text-[#F7F8F8]">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Linear / Studio Aesthetic)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-6 sm:px-8 border-b border-white/[0.06] overflow-hidden">
        {/* Top faint amber glow */}
        <div className="linear-top-glow" aria-hidden="true" />
        <div className="linear-film-grain" aria-hidden="true" />

        <div className="relative z-10 max-w-[1180px] mx-auto text-left">
          {/* Pill Badge */}
          <div className="linear-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)] whitespace-nowrap">
            <Scale className="w-3.5 h-3.5 text-[#D9A55B]/80 shrink-0" aria-hidden="true" />
            <span>Studio Governance · Terms of Service</span>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-5">
            <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-3xl leading-[1.12]">
              Client-first terms built on transparency and craft
            </h1>
          </div>

          {/* Subtext */}
          <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
            Clear contractual terms designed to protect your vision, guarantee 100% intellectual property ownership, and ensure predictable engineering with zero vendor lock-in.
          </p>

          {/* Studio Stats Row */}
          <div className="linear-fade-in linear-delay-2 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-0 pt-2 border-t border-white/[0.06] pt-6">
            {TERMS_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col sm:pr-8 sm:mr-8 ${
                  i !== TERMS_STATS.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
                }`}
              >
                <span className="text-[20px] sm:text-[22px] font-semibold text-[#F7F8F8] tracking-tight whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-[13px] sm:text-[14px] text-[#8A8F98] whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EXECUTIVE SUMMARY (3x2 / 2x2 Hairline Grid like Services)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-8 border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="text-[12px] font-mono uppercase tracking-[0.08em] text-[#D9A55B] font-medium mb-3">
              Summary in Plain English
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-3">
              The four foundational commitments we make to every client
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              Before reading the full legal clauses, here is what our contract guarantees in practical terms.
            </p>
          </div>

          {/* Hairline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-[16px] overflow-hidden shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]">
            {TERMS_PRINCIPLES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 sm:p-8 bg-[#08090A] hover:bg-white/[0.02] transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D9A55B] mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[18px] sm:text-[19px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#8A8F98] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FULL CONTRACT ARTICLES (Clean Linear-Style Cards)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-8 border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="text-[12px] font-mono uppercase tracking-[0.08em] text-[#8A8F98] font-medium mb-3 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#D9A55B]" />
              <span>Full Contractual Terms</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-3">
              Standard commercial terms &amp; provisions
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              Edition 2.4 · Governing Cookie Inc. design, mobile, and web engineering contracts.
            </p>
          </div>

          {/* Articles Stack */}
          <div className="space-y-6 max-w-4xl">
            {ARTICLES.map((art) => (
              <div
                key={art.num}
                className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.08] hover:border-white/15 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                  <span>SECTION {art.num}</span>
                  <span className="text-[#62666D]">/</span>
                  <span>{art.tag}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-3">
                  {art.title}
                </h3>
                <div className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                  {art.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bilateral NDA Request Card */}
          <div className="mt-14 max-w-4xl p-6 sm:p-8 rounded-[18px] bg-gradient-to-b from-[#111216] to-[#0A0B0D] border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] font-medium uppercase tracking-wider mb-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Enterprise &amp; Startup NDAs</span>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] tracking-tight mb-1.5">
                Need a bilateral NDA before sharing your brief?
              </h3>
              <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                We regularly execute mutual Non-Disclosure Agreements with founders and product teams before viewing proprietary specifications or codebases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="mailto:contact@cookieinc.in?subject=NDA%20%2F%20Terms%20Inquiry%20-%20Cookie%20Inc."
                className="px-4 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/20 text-[13px] font-medium text-[#F7F8F8] transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9A55B]" />
                <span>Email Legal Desk</span>
              </a>

              <a
                href={social_links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#FAF6EE] hover:bg-[#FFFDF9] text-[#08090A] text-[13px] font-medium transition-all inline-flex items-center justify-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FINAL CTA SECTION (Linear-Style Close)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-8 text-center overflow-hidden">
        <div className="linear-bottom-glow" aria-hidden="true" />
        <div className="linear-cta-grid" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <CookieLogo className="w-8 h-8 text-[#F7F8F8] mb-6" dotColor="#D9A55B" />
          <h2 className="linear-headline text-[32px] sm:text-[42px] md:text-[50px] font-semibold leading-[1.12] tracking-[-0.035em] text-balance mb-4">
            Ready to build something exceptional?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#8A8F98] max-w-xl leading-relaxed mb-8">
            Tell us about your product goals. We will reply with clear recommendations and a fixed quote within one business day.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-[#FAF6EE] text-[#08090A] text-[14px] sm:text-[15px] font-medium hover:bg-[#FFFDF9] hover:shadow-[0_0_24px_rgba(217,165,91,0.18)] transition-all duration-200 inline-flex items-center gap-2 group shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

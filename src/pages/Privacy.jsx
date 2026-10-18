import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CookieLogo from "../components/shared/CookieLogo";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Scale,
  FileText,
  ArrowRight,
  Mail,
  MessageSquare,
  Settings2,
} from "lucide-react";
import { social_links } from "../data/data";

const PRIVACY_STATS = [
  { value: "0", label: "Third-party ad trackers" },
  { value: "TLS 1.3", label: "Encrypted in-transit" },
  { value: "48 Hours", label: "Data erasure SLA" },
  { value: "DPDP 2023", label: "Full legal compliance" },
];

const PRIVACY_PRINCIPLES = [
  {
    icon: Lock,
    title: "Zero Ad Sales or Brokering",
    desc: "We never sell, lease, trade, or share your contact details or project specifications with external advertisers or data brokers. Ever.",
  },
  {
    icon: CheckCircle2,
    title: "Minimal Purpose-Driven Collection",
    desc: "We collect only what is strictly necessary to evaluate project briefs, communicate during active builds, and deploy production software.",
  },
  {
    icon: ShieldCheck,
    title: "TLS 1.3 & Encrypted In-Transit",
    desc: "Every interaction across our forms, APIs, and private staging links is encrypted using modern high-grade cryptography (AES-256).",
  },
  {
    icon: Scale,
    title: "Right to Complete Erasure",
    desc: "In compliance with the DPDP Act 2023 and GDPR, you can request immediate export or permanent deletion of your contact records within 48 business hours.",
  },
];

const ARTICLES = [
  {
    num: "01",
    tag: "COLLECTION",
    title: "Strictly Voluntary, Project-Essential Data",
    content: (
      <>
        <p className="mb-3">
          We do not harvest background data or buy consumer contact lists. The only information we collect is submitted directly by you when you reach out for an engineering project or sign a development contract:
        </p>
        <ul className="space-y-2 text-[13px] sm:text-[14px]">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Contact Information:</strong> Name, work email address, phone number or WhatsApp handle, and company/project name.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Project Specifications:</strong> Technical briefs, feature requirements, target launch dates, and budget parameters provided voluntarily through our inquiry forms or discovery sessions.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Essential Telemetry:</strong> Anonymized server logs (browser user-agent, operating system, and response latency) used strictly to diagnose website speed and security.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "02",
    tag: "PURPOSE",
    title: "How We Utilize Your Information",
    content: (
      <>
        <p className="mb-3">
          We use your submitted information exclusively for standard B2B client services:
        </p>
        <ul className="space-y-1.5 text-[13px] sm:text-[14px] mb-4">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0" />
            <span>Responding to initial inquiries and providing scope proposals within 1 business day</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0" />
            <span>Executing formal Statements of Work and scheduling sprint milestones</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0" />
            <span>Delivering private preview links, staging builds, and milestone invoices</span>
          </li>
        </ul>
        <div className="p-4 rounded-[12px] bg-white/[0.02] border border-white/[0.06] text-[13px] text-[#8A8F98] flex items-start gap-3">
          <Lock className="w-4 h-4 text-[#D9A55B] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#F7F8F8] font-medium">Zero Commercial Brokering:</strong> We will never sell, lease, or monetize your contact details to third-party marketing brokers or advertisers.
          </span>
        </div>
      </>
    ),
  },
  {
    num: "03",
    tag: "SECURITY & STORAGE",
    title: "Encryption Standards & Access Control",
    content: (
      <>
        <p className="mb-3">
          All network traffic across our web properties, staging platforms, and contact channels is encrypted using Transport Layer Security (TLS 1.3).
        </p>
        <p>
          Client repositories, environment keys, and access tokens are managed using role-based access control (RBAC) and zero-knowledge environment vaults. Only direct engineers assigned to your project have access to development branches.
        </p>
      </>
    ),
  },
  {
    num: "04",
    tag: "COOKIE POLICY & PREFERENCES",
    title: "Zero Cross-Site Tracking Pixels or Spyware",
    content: (
      <>
        <p className="mb-4">
          Cookie Inc. does not use invasive third-party cross-site advertising cookies (such as Meta Pixel or Google Ads retargeting). Any cookies or local storage keys utilized by our platform are strictly functional, used to preserve session security, user theme preferences, and form state during your visit.
        </p>
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("cookieinc:open-cookie-preferences"));
            }
          }}
          className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/20 text-[13px] font-medium text-[#F7F8F8] transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <Settings2 className="w-3.5 h-3.5 text-[#D9A55B]" />
          <span>Manage Cookie Preferences</span>
        </button>
      </>
    ),
  },
  {
    num: "05",
    tag: "COMPLIANCE & RIGHTS",
    title: "Your Rights under DPDP Act 2023 & GDPR",
    content: (
      <>
        <p className="mb-3">
          In compliance with India&rsquo;s Digital Personal Data Protection Act (DPDP Act 2023) and international privacy frameworks (GDPR), you retain full rights over your personal data:
        </p>
        <ul className="space-y-2 text-[13px] sm:text-[14px]">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Right to Access &amp; Portability:</strong> Request a complete summary of all records associated with your inquiry or project.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
            <span><strong className="text-[#F7F8F8]">Right to Complete Erasure:</strong> Request permanent removal of your contact information and correspondence history from our databases within 48 business hours.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "06",
    tag: "GRIEVANCE & CONTACT",
    title: "Data Grievance Protocol & Studio Officer",
    content: (
      <p>
        For inquiries regarding data retention, security disclosures, or to request deletion of personal information, contact our studio privacy officer directly at{" "}
        <a href="mailto:contact@cookieinc.in" className="text-[#D9A55B] hover:underline font-mono">
          contact@cookieinc.in
        </a>
        . We acknowledge all data requests within 24 hours.
      </p>
    ),
  },
];

export default function Privacy() {
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A55B]/80 shrink-0" aria-hidden="true" />
            <span>Privacy &amp; Data Protection</span>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-5">
            <h1 className="linear-headline linear-mask-slide-up text-[32px] sm:text-[46px] md:text-[54px] max-w-3xl leading-[1.12]">
              Your data belongs to you. We never track or sell.
            </h1>
          </div>

          {/* Subtext */}
          <p className="linear-fade-in linear-delay-1 text-[15px] sm:text-[17px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10">
            We build software, we never monetize privacy. How Cookie Inc. protects client briefs, encrypts in-transit telemetry, and honors global data rights.
          </p>

          {/* Studio Stats Row */}
          <div className="linear-fade-in linear-delay-2 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-0 pt-2 border-t border-white/[0.06] pt-6">
            {PRIVACY_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col sm:pr-8 sm:mr-8 ${
                  i !== PRIVACY_STATS.length - 1 ? "sm:border-r sm:border-white/[0.08]" : ""
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
              Four fundamental privacy standards we uphold
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              How we handle client briefs, repository access, and communications with zero telemetry leakage.
            </p>
          </div>

          {/* Hairline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.08] border border-white/[0.08] rounded-[16px] overflow-hidden shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]">
            {PRIVACY_PRINCIPLES.map((item) => {
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
          3. FULL PRIVACY ARTICLES (Clean Linear-Style Cards)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-8 border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto text-left">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="text-[12px] font-mono uppercase tracking-[0.08em] text-[#8A8F98] font-medium mb-3 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#D9A55B]" />
              <span>Full Privacy Provisions</span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-3">
              Data governance &amp; legal clauses
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
              Edition 2.4 · Compliant with India&rsquo;s DPDP Act 2023 and global standards.
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

          {/* Privacy Officer / Data Request Card */}
          <div className="mt-14 max-w-4xl p-6 sm:p-8 rounded-[18px] bg-gradient-to-b from-[#111216] to-[#0A0B0D] border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] font-medium uppercase tracking-wider mb-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Data Rights &amp; Grievances</span>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] tracking-tight mb-1.5">
                Request data export or complete erasure
              </h3>
              <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                Contact our privacy desk to request an immediate audit, export, or permanent deletion of your inquiry records within 48 business hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="mailto:contact@cookieinc.in?subject=Privacy%20%2F%20Data%20Request%20-%20Cookie%20Inc."
                className="px-4 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 hover:border-white/20 text-[13px] font-medium text-[#F7F8F8] transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9A55B]" />
                <span>Email Privacy Desk</span>
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

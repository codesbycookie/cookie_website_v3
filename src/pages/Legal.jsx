import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  Scale,
  Sparkles,
  Mail,
  MessageSquare,
} from "lucide-react";
import { social_links } from "../data/data";

export default function Legal({ type }) {
  const location = useLocation();
  const isTerms = type === "terms" || location.pathname.includes("terms");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const TERMS_SUMMARY = [
    {
      title: "100% Code & Asset Ownership",
      desc: "Upon final milestone payment, all bespoke React code, UI design files, schemas, and production assets belong exclusively to you. No proprietary studio lock-in.",
      icon: Sparkles,
    },
    {
      title: "Bilateral NDA Protection",
      desc: "Mutual non-disclosure is guaranteed from Day 1. Your proprietary strategy, repositories, credentials, and data remain strictly confidential.",
      icon: Lock,
    },
    {
      title: "Milestone-Verified Billing",
      desc: "Every invoice is tied to verifiable working software previews. You inspect and verify real code deliverables before milestone payments are released.",
      icon: CheckCircle2,
    },
    {
      title: "30-Day Post-Launch Warranty",
      desc: "Dedicated defect resolution and performance tuning for 30 days after production cutover at zero additional cost, with direct WhatsApp builder access.",
      icon: ShieldCheck,
    },
  ];

  const PRIVACY_SUMMARY = [
    {
      title: "Zero Ad Tracking or Brokering",
      desc: "We never sell, lease, trade, or share your contact details or project specifications with external advertisers or data brokers. Ever.",
      icon: Lock,
    },
    {
      title: "Minimal Purpose-Driven Collection",
      desc: "We collect only what is strictly necessary to evaluate project briefs, communicate during active builds, and deploy production software.",
      icon: CheckCircle2,
    },
    {
      title: "TLS 1.3 & Encrypted In-Transit",
      desc: "Every interaction across our forms, APIs, and private staging links is encrypted using modern high-grade cryptography (AES-256).",
      icon: ShieldCheck,
    },
    {
      title: "Right to Erasure (DPDP & GDPR)",
      desc: "Request an immediate export or permanent deletion of your contact records within 48 business hours with a single email.",
      icon: Scale,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A] text-[#F7F8F8] min-h-screen selection:bg-[#D9A55B]/25 selection:text-[#F7F8F8]">
      {/* Ambient Top Glow & Film Grain */}
      <div className="linear-top-glow" aria-hidden="true" />
      <div className="linear-film-grain" aria-hidden="true" />

      {/* Main Document Section */}
      <section className="relative z-10 w-full pt-8 sm:pt-12 md:pt-16 pb-16 md:pb-20 px-5 sm:px-8">
        <div className="max-w-[860px] mx-auto">
          {/* Breadcrumb Navigation */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#8A8F98] hover:text-[#F7F8F8] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#D9A55B]" />
            <span>Return to studio overview</span>
          </Link>

          {/* Document Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9A55B]/15 bg-[#D9A55B]/[0.025] text-[12px] sm:text-[13px] font-medium text-[#9E9991] mb-6 shadow-[inset_0_1px_0_rgba(217,165,91,0.06)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A55B]" aria-hidden="true" />
            <span>Studio Governance &amp; Legal Framework</span>
          </div>

          {/* Segmented Document Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#111215] border border-white/[0.08] max-w-fit mb-8 shadow-sm">
            <Link
              to="/terms"
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                isTerms
                  ? "bg-white/[0.12] text-[#F7F8F8] shadow-sm border border-white/15"
                  : "text-[#8A8F98] hover:text-[#F7F8F8] border border-transparent"
              }`}
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                !isTerms
                  ? "bg-white/[0.12] text-[#F7F8F8] shadow-sm border border-white/15"
                  : "text-[#8A8F98] hover:text-[#F7F8F8] border border-transparent"
              }`}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Document Header */}
          <div className="mb-10">
            <h1 className="linear-headline text-[32px] sm:text-[44px] md:text-[52px] font-medium tracking-[-0.035em] leading-[1.12] mb-4">
              {isTerms ? "Terms of Service" : "Privacy Policy"}
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#8A8F98] leading-relaxed max-w-2xl">
              {isTerms
                ? "Transparent, client-first contractual principles designed for clarity, mutual respect, and zero vendor lock-in."
                : "Your data belongs strictly to you. How we protect your privacy, encrypt telemetry, and adhere to international standards."}
            </p>
          </div>

          {/* Meta Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3.5 px-4 sm:px-5 rounded-[12px] bg-[#0E0F12] border border-white/[0.06] text-[11px] font-mono text-[#8A8F98] mb-12 shadow-inner">
            <div>
              <span className="block text-[#62666D] uppercase text-[9px] tracking-wider mb-0.5">Edition</span>
              <span className="text-[#F7F8F8] font-medium">v2.4 Standard</span>
            </div>
            <div>
              <span className="block text-[#62666D] uppercase text-[9px] tracking-wider mb-0.5">Last Updated</span>
              <span className="text-[#F7F8F8] font-medium">January 2026</span>
            </div>
            <div>
              <span className="block text-[#62666D] uppercase text-[9px] tracking-wider mb-0.5">Jurisdiction</span>
              <span className="text-[#F7F8F8] font-medium">Chennai, India</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="block text-[#62666D] uppercase text-[9px] tracking-wider mb-0.5">Status</span>
              <span className="text-[#59D499] flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                Active &amp; Enforceable
              </span>
            </div>
          </div>

          {/* Executive Summary Cards */}
          <div className="mb-14">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.12em] text-[#D9A55B] font-medium mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Summary in Plain English</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {(isTerms ? TERMS_SUMMARY : PRIVACY_SUMMARY).map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-[14px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/15 transition-colors flex flex-col justify-between group shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-[8px] bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D9A55B] mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-[15px] font-medium text-[#F7F8F8] tracking-tight mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* In-Depth Legal Articles */}
          <div className="space-y-6">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.12em] text-[#8A8F98] font-medium mb-2 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#8A8F98]" />
              <span>Full Legal Provisions</span>
            </h2>

            {isTerms ? (
              <>
                {/* Clause 1 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 01</span>
                    <span className="text-[#62666D]">/</span>
                    <span>SCOPE &amp; ENGAGEMENT MODEL</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Services, SOWs, and Iterative Delivery
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      Cookie Inc. (&ldquo;Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides bespoke software engineering, digital product design, web applications, mobile platforms, and technical architecture consulting.
                    </p>
                    <p>
                      All client engagements are governed by an individual Statement of Work (&ldquo;SOW&rdquo;) or formal proposal outlining fixed milestones, technical deliverables, pricing, and agreed timelines. Work commences upon mutual sign-off and receipt of the initial kickoff deposit.
                    </p>
                    <div className="p-3.5 rounded-[10px] bg-white/[0.02] border border-white/[0.06] text-[13px] text-[#8A8F98] flex items-start gap-2.5 mt-4">
                      <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#F7F8F8] font-medium">Milestone Sign-Off:</strong> Clients receive a private preview link at every milestone. Feedback is incorporated in structured review cycles before subsequent phases proceed.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clause 2 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 02</span>
                    <span className="text-[#62666D]">/</span>
                    <span>INTELLECTUAL PROPERTY</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Full Assignment of Bespoke Deliverables
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      Upon receipt of full and final milestone payment, Cookie Inc. assigns 100% of all rights, titles, and intellectual property in all bespoke source code, UI/UX designs, Figma components, database schemas, and digital assets created specifically for the Client under the applicable SOW.
                    </p>
                    <ul className="space-y-2 pt-1 text-[13px] sm:text-[14px]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Zero Vendor Lock-in:</strong> You receive complete Git repository ownership, documentation, and credentials required to independently host, modify, or extend the codebase.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Open Source Libraries:</strong> Standard permissible open-source dependencies (e.g. React, Tailwind CSS, Vite) remain licensed under their respective MIT/Apache licenses.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Clause 3 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 03</span>
                    <span className="text-[#62666D]">/</span>
                    <span>CONFIDENTIALITY &amp; NDAS</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Strict Commercial Confidentiality
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      We treat all client technical specifications, business logic, customer datasets, unreleased product concepts, and server credentials with strict confidentiality.
                    </p>
                    <p>
                      Neither party shall disclose any Proprietary Information to third parties without prior written consent. We routinely execute bilateral Non-Disclosure Agreements (&ldquo;NDAs&rdquo;) prior to receiving access to existing client repositories or production databases.
                    </p>
                  </div>
                </div>

                {/* Clause 4 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 04</span>
                    <span className="text-[#62666D]">/</span>
                    <span>PAYMENT TERMS &amp; INVOICING</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Transparent Milestone Invoicing
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      Invoices are denominated in INR (Indian Rupees) for domestic clients and USD for international clients, payable via bank wire, UPI, or international corporate transfer.
                    </p>
                    <p>
                      Invoices are issued upon verifiable completion of agreed milestone deliverables and are due within 7 business days of receipt unless specified otherwise in the SOW.
                    </p>
                  </div>
                </div>

                {/* Clause 5 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 05</span>
                    <span className="text-[#62666D]">/</span>
                    <span>WARRANTY &amp; POST-LAUNCH CARE</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    30-Day Defect Warranty &amp; Performance
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      Cookie Inc. warrants that all deliverables will perform substantially in conformance with agreed specifications for 30 calendar days following production launch.
                    </p>
                    <p>
                      Any reproducible functional bugs, layout breaks, or configuration errors reported within this warranty window will be remediated promptly by our engineering team at no extra cost.
                    </p>
                  </div>
                </div>

                {/* Clause 6 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 06</span>
                    <span className="text-[#62666D]">/</span>
                    <span>GOVERNING LAW &amp; JURISDICTION</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Jurisdiction &amp; Dispute Resolution
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    These Terms of Service and any associated project agreements are governed by and construed in accordance with the substantive laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Privacy Clause 1 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 01</span>
                    <span className="text-[#62666D]">/</span>
                    <span>INFORMATION WE COLLECT</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Strictly Voluntary, Project-Essential Data
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      We do not harvest background data or buy consumer lists. The only information we collect is submitted directly by you when you reach out for an engineering project:
                    </p>
                    <ul className="space-y-2 pt-1 text-[13px] sm:text-[14px]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Contact Information:</strong> Name, work email address, phone number or WhatsApp handle, and company/project name.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Project Briefs:</strong> Technical specifications, target launch dates, feature requests, and budget expectations provided voluntarily through our inquiry forms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Essential Telemetry:</strong> Anonymized server logs (browser user-agent, operating system, and response latency) used strictly to diagnose site performance.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Privacy Clause 2 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 02</span>
                    <span className="text-[#62666D]">/</span>
                    <span>PURPOSE &amp; DATA USAGE</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    How We Use Your Data
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      We use your submitted information exclusively for standard B2B client services:
                    </p>
                    <ul className="space-y-1.5 text-[13px] sm:text-[14px]">
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
                    <p className="pt-2 text-[13px] text-[#D9A55B]">
                      We will never sell, lease, or monetize your contact details to third-party marketing brokers or advertisers.
                    </p>
                  </div>
                </div>

                {/* Privacy Clause 3 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 03</span>
                    <span className="text-[#62666D]">/</span>
                    <span>DATA SECURITY &amp; STORAGE</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Encryption Standards &amp; Safe Storage
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      All network traffic across our web properties, staging platforms, and contact channels is encrypted using Transport Layer Security (TLS 1.3).
                    </p>
                    <p>
                      Client repositories, environment keys, and access tokens are managed using role-based access control (RBAC) and zero-knowledge environment vaults. Only direct engineers assigned to your project have access to development branches.
                    </p>
                  </div>
                </div>

                {/* Privacy Clause 4 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 04</span>
                    <span className="text-[#62666D]">/</span>
                    <span>COOKIE POLICY</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    Zero Marketing Trackers or Spyware
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    Cookie Inc. does not use invasive third-party cross-site advertising cookies (such as Meta Pixel or Google Ads retargeting). Any cookies or local storage keys utilized by our platform are strictly functional, used to preserve session security, user theme preferences, and form state during your visit.
                  </p>
                </div>

                {/* Privacy Clause 5 */}
                <div className="p-6 sm:p-8 rounded-[16px] bg-[#0A0B0D] border border-white/[0.06] hover:border-white/12 transition-colors">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] mb-2 font-medium">
                    <span>ARTICLE 05</span>
                    <span className="text-[#62666D]">/</span>
                    <span>YOUR RIGHTS &amp; DATA ERASURE</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] mb-3">
                    DPDP Act 2023 &amp; Global Compliance
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                    <p>
                      In compliance with India&rsquo;s Digital Personal Data Protection Act (DPDP Act 2023) and international privacy frameworks (GDPR), you retain full rights over your personal data:
                    </p>
                    <ul className="space-y-2 text-[13px] sm:text-[14px]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Right to Access &amp; Portability:</strong> Request a complete summary of all records associated with your inquiry or project.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
                        <span><strong className="text-[#F7F8F8]">Right to Complete Erasure:</strong> Request permanent removal of your contact information and correspondence history from our databases within 48 business hours.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Direct Legal Assistance & NDA Request Banner */}
          <div className="mt-14 p-6 sm:p-8 rounded-[18px] bg-gradient-to-b from-[#111216] to-[#0A0B0D] border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#D9A55B] font-medium uppercase tracking-wider mb-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>Enterprise &amp; Startup NDAs</span>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-[#F7F8F8] tracking-tight mb-1.5">
                Need a signed NDA before sharing your brief?
              </h3>
              <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                We regularly execute bilateral Non-Disclosure Agreements with founders and product teams before reviewing proprietary workflows, designs, or codebases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="mailto:contact@cookieinc.in?subject=NDA%20%2F%20Legal%20Inquiry%20-%20Cookie%20Inc."
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
    </div>
  );
}

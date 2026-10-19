import React from "react";
import { CheckCircle2, Lock } from "lucide-react";

export default function Section3() {
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
      tag: "STORAGE & RETENTION",
      title: "Data Retention & Encryption Standards",
      content: (
        <>
          <p className="mb-3">
            Client data and communication archives are stored across SOC-2 Type II certified cloud providers with at-rest AES-256 encryption. We retain active project artifacts for the duration of the build and 12 calendar months post-handover for warranty maintenance.
          </p>
          <p className="text-[13px] text-[#8A8F98]">
            Upon project conclusion or upon written request, all staging database dumps and temporary testing keys are permanently scrubbed.
          </p>
        </>
      ),
    },
    {
      num: "04",
      tag: "RIGHTS & COMPLIANCE",
      title: "Your Rights under DPDP Act 2023 & GDPR",
      content: (
        <>
          <p className="mb-3">
            Regardless of your country of incorporation, you retain full rights over any submitted records:
          </p>
          <ul className="space-y-1.5 text-[13px] sm:text-[14px]">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shrink-0" />
              <span><strong>Right to Access:</strong> Request a complete copy of all records associated with your account.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shrink-0" />
              <span><strong>Right to Correction:</strong> Update inaccurate business or contact records immediately.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shrink-0" />
              <span><strong>Right to Erasure:</strong> Have all contact and discovery records completely removed within 48 business hours.</span>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-[1180px] mx-auto py-16 sm:py-20 px-6 sm:px-8 border-b border-white/[0.06] text-left">
      <div className="mb-12">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#F7F8F8] tracking-tight mb-2">
          Detailed policy provisions
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#8A8F98]">
          Legal provisions governing information handling at Cookie Inc.
        </p>
      </div>

      <div className="space-y-10">
        {ARTICLES.map((article) => (
          <article
            key={article.num}
            className="rounded-[16px] bg-[rgba(245,235,220,0.02)] border border-white/[0.08] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-3 text-[12px] font-mono text-[#D9A55B]">
              <span>Article {article.num}</span>
              <span className="text-[#62666D]">·</span>
              <span className="text-[#8A8F98] uppercase tracking-wider">{article.tag}</span>
            </div>
            <h3 className="text-[19px] sm:text-[21px] font-medium text-[#F7F8F8] mb-4">
              {article.title}
            </h3>
            <div className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
              {article.content}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

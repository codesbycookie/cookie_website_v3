import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Section3() {
  const ARTICLES = [
    {
      num: "01",
      tag: "SCOPE & ENGAGEMENT",
      title: "Services, Statements of Work, and Iterative Sprints",
      content: (
        <>
          <p className="mb-3">
            Cookie Inc. provides bespoke software engineering, digital product design, web applications, mobile platforms, and technical architecture consulting.
          </p>
          <p className="mb-4">
            All client engagements are governed by an individual Statement of Work (SOW) outlining fixed milestones, technical deliverables, pricing, and agreed schedules. Work commences upon mutual sign-off and receipt of the kickoff deposit.
          </p>
          <div className="p-4 rounded-[12px] bg-white/[0.02] border border-white/[0.06] text-[13px] text-[#8A8F98] flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#F7F8F8] font-medium">Verifiable Milestones:</strong> Clients receive access to private staging links at every sprint. Feedback is incorporated before subsequent milestones proceed.
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
            Upon receipt of full and final milestone payment, Cookie Inc. assigns 100% of all rights, titles, and intellectual property in all bespoke source code, UI/UX designs, Figma components, database schemas, and digital assets created specifically for the Client.
          </p>
          <ul className="space-y-2 text-[13px] sm:text-[14px]">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
              <span><strong className="text-[#F7F8F8]">No Lock-In:</strong> You receive complete Git repository ownership, documentation, and deployment scripts to host on your own cloud.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] mt-2 shrink-0" />
              <span><strong className="text-[#F7F8F8]">Open Standards:</strong> We engineer on modern, open technologies (React, Node, PostgreSQL, Tailwind) without proprietary runtime dependencies.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      num: "03",
      tag: "WARRANTY & SUPPORT",
      title: "30-Day Post-Launch Warranty and Defect Resolution",
      content: (
        <>
          <p className="mb-3">
            Every production deployment comes with an included 30-day warranty starting on domain cutover. During this window, any defects or deviations from the agreed SOW specifications are remediated immediately at zero additional cost.
          </p>
          <p className="text-[13px] text-[#8A8F98]">
            Extended maintenance agreements for periodic updates and monitoring are available via separate support retainers.
          </p>
        </>
      ),
    },
    {
      num: "04",
      tag: "GOVERNING LAW",
      title: "Governing Law & Dispute Resolution",
      content: (
        <>
          <p className="mb-3">
            These terms and any Statements of Work shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with our services shall be subject to amicable mutual discussions first, and thereafter to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-[1180px] mx-auto py-16 sm:py-20 px-6 sm:px-8 border-b border-white/[0.06] text-left">
      <div className="mb-12">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#F7F8F8] tracking-tight mb-2">
          Full terms of service clauses
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#8A8F98]">
          Detailed provisions governing engineering contracts and project deliveries.
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

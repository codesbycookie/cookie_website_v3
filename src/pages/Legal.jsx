import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Legal({ type }) {
  const location = useLocation();
  const isTerms = type === "terms" || location.pathname.includes("terms");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A] min-h-[80vh]">
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 px-5 sm:px-8">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[800px] mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </Link>

          <div className="mb-4 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B]" />
            Legal Documentation
          </div>

          <h1 className="gradient-text text-[36px] sm:text-[48px] font-medium tracking-[-0.035em] leading-[1.1] mb-4">
            {isTerms ? "Terms of Service" : "Privacy Policy"}
          </h1>

          <p className="font-mono text-[13px] text-[#62666D] mb-12">
            Last updated: January 2026 · Cookie Inc., Chennai, India
          </p>

          <div className="space-y-10 text-[15px] text-[#8A8F98] leading-relaxed border-t border-white/[0.08] pt-10">
            {isTerms ? (
              <>
                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">1. Services and Scope</h2>
                  <p>
                    Cookie Inc. provides digital design, software development, web engineering, mobile application development, and technical consulting services. All work is executed in accordance with individual Statement of Work (SOW) documents agreed between Cookie Inc. and the client.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">2. Intellectual Property</h2>
                  <p>
                    Upon receipt of full payment for completed deliverables, all proprietary client assets, bespoke source code, and design files produced specifically for the project become the intellectual property of the client, excluding Cookie Inc.’s underlying general developer libraries and tooling.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">3. Confidentiality and Non-Disclosure</h2>
                  <p>
                    We treat all technical specifications, customer records, and trade secrets with strict confidentiality. Non-disclosure agreements (NDAs) are signed prior to accessing client systems or repositories.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">4. Payment and Milestone Releases</h2>
                  <p>
                    Fixed-scope contracts follow staged payment milestones. Invoices are due upon receipt or according to agreed credit terms. Work releases proceed sequentially upon sign-off of preceding milestones.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">5. Governing Law</h2>
                  <p>
                    These terms are governed by the laws of India, under the jurisdiction of courts in Chennai, Tamil Nadu.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">1. Information We Collect</h2>
                  <p>
                    We collect only the information necessary to evaluate project briefs, communicate with clients, and provide engineering services. This includes names, work email addresses, phone/WhatsApp contact information, and project scope details provided voluntarily through our contact forms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">2. How We Use Information</h2>
                  <p>
                    Information submitted to Cookie Inc. is used solely to respond to inquiries, draft project scopes and proposals, and manage ongoing development contracts. We do not sell, rent, or trade customer contact details with third-party advertisers.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">3. Data Security</h2>
                  <p>
                    All transmissions across our website and APIs are encrypted using modern Transport Layer Security (TLS). Internal client databases and repositories are restricted to authorized studio personnel only.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-[18px] font-medium text-[#F4F4F6] tracking-tight">4. Contact and Data Requests</h2>
                  <p>
                    For inquiries regarding data retention or to request deletion of personal information, contact our privacy contact directly at{" "}
                    <a href="mailto:hello@cookie.org.in" className="text-[#D9A55B] hover:underline">
                      hello@cookie.org.in
                    </a>.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

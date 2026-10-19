import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { social_links } from "../../../../data/data";

export default function Section4() {
  return (
    <section className="relative z-10 w-full max-w-[1180px] mx-auto py-20 px-6 sm:px-8 text-center flex flex-col items-center">
      <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#F7F8F8] tracking-tight mb-3">
        Need a formal NDA or custom contract?
      </h2>
      <p className="text-[15px] text-[#8A8F98] max-w-lg mb-8 leading-relaxed">
        We execute bilateral non-disclosure agreements before reviewing confidential roadmaps.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:legal@cookieinc.in"
          className="px-5 py-2.5 rounded-[8px] bg-[#FAF6EE] text-[#08090A] text-[14px] font-medium hover:bg-[#FFFDF9] transition-all inline-flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>Email Legal Desk</span>
        </a>
        <a
          href={social_links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-[8px] bg-transparent text-[#F7F8F8] border border-white/[0.12] hover:border-white/[0.24] text-[14px] font-medium transition-colors inline-flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Consultation</span>
        </a>
      </div>
    </section>
  );
}

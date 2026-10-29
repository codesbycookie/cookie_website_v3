import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Section1({ study }) {
  return (
    <section className="relative w-full pt-8 pb-14 md:pt-12 md:pb-16 px-5 sm:px-8">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1000px] mx-auto">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-[14px] text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors mb-8 group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all client work</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2.5 mb-5 text-[13px] font-medium text-[#9EA3AD]">
          <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[#D9A55B]">
            {study.category || "Case Study"}
          </span>
          {study.client && <span>· {study.client}</span>}
        </div>

        <h1 className="text-[32px] sm:text-[46px] md:text-[54px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.12] mb-6">
          {study.title}
        </h1>

        <p className="text-[15px] sm:text-[18px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-10">
          {study.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-[14px]">
          <div>
            <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
              Client
            </span>
            <span className="text-[#F4F4F6] font-medium">
              {study.client || study.title.split("—")[0].trim()}
            </span>
          </div>
          <div>
            <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
              Category
            </span>
            <span className="text-[#F4F4F6] font-medium">
              {study.category || "Web & Mobile Software"}
            </span>
          </div>
          <div>
            <span className="block text-[12px] font-medium uppercase tracking-wider text-[#767B85] mb-1">
              Deliverables
            </span>
            <span className="text-[#F4F4F6] font-medium">
              {study.services?.join(", ") || "Design & Development"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

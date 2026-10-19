import React from "react";

export default function Section2({ study }) {
  return (
    <section className="w-full px-5 sm:px-8 max-w-[1040px] mb-16">
      <div className="rounded-[20px] p-2 sm:p-3 overflow-hidden bg-[#121316] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
        <img
          src={study.src}
          alt={study.title}
          className="w-full h-auto rounded-[14px] object-cover max-h-[600px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}

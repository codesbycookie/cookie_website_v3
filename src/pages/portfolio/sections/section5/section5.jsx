import React from "react";

export default function Section5() {
  return (
    <section
      aria-label="Client testimonial"
      className="relative z-10 w-full max-w-[1040px] mx-auto px-6 sm:px-8 pb-24 sm:pb-32 text-center"
    >
      <blockquote className="text-[22px] sm:text-[28px] md:text-[32px] font-medium tracking-[-0.025em] leading-[1.3] max-w-3xl mx-auto mb-6">
        <span className="text-[#F7F8F8]">
          “Cookie Inc. simplified our student communication and daily staff operations{" "}
        </span>
        <span className="text-[#8A8F98]">
          with two rock-solid, custom-built platforms.”
        </span>
      </blockquote>

      <div className="inline-flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-full bg-[rgba(217,165,91,0.06)] border border-[#D9A55B]/20 flex items-center justify-center text-[13px] font-medium text-[#D9A55B]"
          aria-hidden="true"
        >
          A
        </div>
        <p className="text-[14px] text-[#8A8F98]">
          Akilesh Sampath, Sampath Academy of Physics
        </p>
      </div>
    </section>
  );
}

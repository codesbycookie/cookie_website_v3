import React from "react";

export default function Section3() {
  const PILLARS = [
    { title: "Chennai HQ", label: "Engineers and designers collaborating in-house" },
    { title: "Web & Mobile", label: "E-commerce, EdTech, Android apps, and web systems" },
    { title: "Zero Middlemen", label: "Direct communication with the builders writing your code" },
    { title: "Client Owned", label: "Complete ownership of source code, assets, and data" },
  ];

  return (
    <section
      aria-label="Studio commitments"
      className="w-full border-t border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item, idx) => (
            <div
              key={item.title}
              className={`py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center text-center
                ${idx % 2 === 1 ? "border-l border-white/[0.08]" : ""}
                ${idx >= 2 ? "border-t border-white/[0.08] lg:border-t-0" : ""}
                ${idx > 0 ? "lg:border-l lg:border-white/[0.08]" : ""}
              `}
            >
              <dt className="text-[24px] sm:text-[30px] md:text-[34px] font-semibold tracking-[-0.03em] text-[#F7F8F8] leading-tight mb-2">
                {item.title}
              </dt>
              <dd className="text-[13px] sm:text-[14px] text-[#8A8F98] max-w-[210px] leading-snug">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import React from "react";

/**
 * SectionHeading: Linear-style section intro.
 * Mono eyebrow with a cream dot, gradient title, muted lead paragraph.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center", // "center" | "left"
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center mx-auto" : "items-start text-left"
      } max-w-3xl mb-12 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <div className="mb-5 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className="gradient-text text-[32px] sm:text-[44px] md:text-[52px] font-medium tracking-[-0.03em] leading-[1.08] mb-5">
          {title}
          {highlight && <span className="gradient-cream ml-2 inline-block">{highlight}</span>}
        </h2>
      )}

      {description && (
        <p className="text-[16px] sm:text-[18px] text-[#8A8F98] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

import React from "react";

/**
 * Badge primitive:
 * - Uses GeistMono font
 * - 12px or 14px sizes
 * - Subtle border (#494B4D) and dark background
 * - Optional accent dot indicator
 */
export default function Badge({
  children,
  accent = "red", // "red" | "blue" | "green" | "yellow" | "violet" | "neutral"
  size = "sm", // "sm" | "md"
  dot = true,
  className = "",
}) {
  const dotColors = {
    red: "bg-[#D9A55B] shadow-[0_0_8px_#D9A55B]",
    blue: "bg-[#57C1FF] shadow-[0_0_8px_#57C1FF]",
    green: "bg-[#59D499] shadow-[0_0_8px_#59D499]",
    yellow: "bg-[#FFC533] shadow-[0_0_8px_#FFC533]",
    violet: "bg-[#D3B2FF] shadow-[0_0_8px_#D3B2FF]",
    cream: "bg-[#C18B43] shadow-[0_0_8px_#C18B43]",
    neutral: "bg-[#8A8F98]",
  };

  const sizeStyles = {
    sm: "text-[12px] py-1 px-2.5 gap-1.5",
    md: "text-[14px] py-1.5 px-3 gap-2",
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-full bg-[#2F3031]/90 text-[#D0D6E0] border border-[#494B4D] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ${sizeStyles[size]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[accent] || dotColors.neutral}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}

import React from "react";
import KeyHint from "../key_hint/key_hint";

/**
 * WindowMockup: Raycast/Linear-style product window mockup
 * - Traffic light controls with exact accent tokens: red #D9A55B, yellow #FFC533, green #59D499
 * - Hairline borders (#494B4D) + inset highlight
 * - Command palette / search bar motif
 * - Soft glow
 */
export default function WindowMockup({
  children,
  title = "cookie-studio — terminal",
  className = "",
  glow = "red", // "red" | "blue" | "green"
}) {
  const glowStyles = {
    red: "shadow-[0_20px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-15px_rgba(217, 165, 91,0.2)]",
    blue: "shadow-[0_20px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-15px_rgba(87,193,255,0.2)]",
    green: "shadow-[0_20px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-15px_rgba(89,212,153,0.2)]",
  };

  return (
    <div
      className={`relative w-full rounded-[12px] bg-[#08090A] border border-[#494B4D] overflow-hidden ${glowStyles[glow] || glowStyles.red} ${className}`}
    >
      {/* Window title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#2F3031]/80 border-b border-[#494B4D] backdrop-blur-md select-none">
        {/* macOS traffic light dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#D9A55B]/80 border border-[#D9A55B]/40" />
          <span className="w-3 h-3 rounded-full bg-[#FFC533]/80 border border-[#FFC533]/40" />
          <span className="w-3 h-3 rounded-full bg-[#59D499]/80 border border-[#59D499]/40" />
        </div>

        {/* Command bar / Title */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#08090A]/70 border border-[#494B4D]/60 text-[12px] font-mono text-[#D0D6E0]">
          <span className="text-[#8A8F98]">cookie://</span>
          <span>{title}</span>
        </div>

        {/* Keyboard shortcut hint */}
        <div className="flex items-center gap-1">
          <KeyHint>⌘</KeyHint>
          <KeyHint>K</KeyHint>
        </div>
      </div>

      {/* Window body */}
      <div className="p-4 sm:p-6 text-[#F4F4F6]">{children}</div>
    </div>
  );
}

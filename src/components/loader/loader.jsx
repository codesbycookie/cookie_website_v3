import React from "react";

/**
 * Loader component:
 * - Minimal, token-styled Suspense fallback
 * - Hairline border and inset highlight
 * - Reduced-motion safe
 */
export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[70vh] w-full flex flex-col items-center justify-center p-6 bg-[#08090A]"
    >
      <div className="flex flex-col items-center gap-4 p-8 rounded-[12px] bg-[#2F3031]/40 border border-[#494B4D] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
        {/* Animated Brand Pulse */}
        <div className="relative flex items-center justify-center w-12 h-12">
          <div className="w-10 h-10 rounded-full bg-[#D9A55B]/20 animate-ping absolute motion-reduce:hidden" />
          <div className="w-8 h-8 rounded-full bg-[#2F3031] border border-[#D9A55B] flex items-center justify-center shadow-[0_0_16px_rgba(217, 165, 91,0.4)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9A55B]" />
          </div>
        </div>

        {/* Status text */}
        <div className="flex flex-col items-center gap-1 text-center font-mono">
          <span className="text-[13px] text-[#F4F4F6] font-medium tracking-wide">
            Loading Cookie Studio
          </span>
          <span className="text-[11px] text-[#8A8F98]">
            Compiling interface assets...
          </span>
        </div>
      </div>
    </div>
  );
}

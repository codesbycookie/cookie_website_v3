import React from "react";

/**
 * KeyHint: Raycast-style keyboard key motif
 */
export default function KeyHint({ children, className = "" }) {
  return (
    <kbd
      className={`font-mono text-[11px] font-medium px-1.5 py-0.5 rounded-[4px] bg-[#2F3031] text-[#D0D6E0] border border-[#494B4D] shadow-[0_1px_0_0_#08090A,inset_0_1px_0_0_rgba(255,255,255,0.12)] select-none inline-flex items-center justify-center min-w-[20px] ${className}`}
    >
      {children}
    </kbd>
  );
}

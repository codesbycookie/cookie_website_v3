import React from "react";

/**
 * Card primitive with Linear-style glass surface and hairline borders:
 * - Linear layered glass gradient
 * - 1px hairline border
 * - Inset top specular highlight
 * - Subtle ambient depth shadow
 */
export default function Card({
  children,
  variant = "dark",
  className = "",
  glowColor,
  onClick,
  as: Component = "div",
  ...props
}) {
  const glowStyles = {
    red: "hover:shadow-[0_0_32px_-6px_rgba(217, 165, 91,0.35)] hover:border-[#D9A55B]/60",
    blue: "hover:shadow-[0_0_40px_-8px_rgba(87,193,255,0.28)] hover:border-[#57C1FF]/60",
    green: "hover:shadow-[0_0_40px_-8px_rgba(89,212,153,0.28)] hover:border-[#59D499]/60",
    violet: "hover:shadow-[0_0_40px_-8px_rgba(211,178,255,0.28)] hover:border-[#D3B2FF]/60",
    yellow: "hover:shadow-[0_0_32px_-6px_rgba(255,197,51,0.28)] hover:border-[#FFC533]/60",
    cream: "hover:shadow-[0_0_32px_-6px_rgba(193,139,67,0.35)] hover:border-[#C18B43]/60",
  };

  const variantStyles = {
    dark: "linear-card text-[#F4F4F6]",
    subtle:
      "bg-[#08090A]/90 backdrop-blur-md text-[#F4F4F6] border border-[#494B4D]/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
    light:
      "bg-[#E5E5E6] text-[#08090A] border border-[#D0D6E0] shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
    interactive:
      "linear-card text-[#F4F4F6] cursor-pointer hover:border-[#8A8F98]/70 hover:-translate-y-0.5 active:translate-y-0",
  };

  const selectedGlow = glowColor ? glowStyles[glowColor] : "hover:border-[#8A8F98]/60";

  return (
    <Component
      onClick={onClick}
      className={`rounded-[12px] p-6 sm:p-7 relative overflow-hidden ${variantStyles[variant] || variantStyles.dark} ${selectedGlow} ${className}`}
      {...props}
    >
      {/* Linear top hairline highlight accent */}
      <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {children}
    </Component>
  );
}

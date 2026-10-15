import React from "react";
import { Terminal, Layers, Code2, ImageOff } from "lucide-react";

/**
 * EmptyState: Token-styled empty state for missing, placeholder,
 * Aceternity or Unsplash images.
 * Adheres strictly to Linear/Raycast dark theme tokens.
 */
export default function EmptyState({
  title = "Visual artifact pending",
  description = "Production asset blueprint",
  type = "blueprint", // "blueprint" | "code" | "wireframe" | "fallback"
  aspectRatio = "aspect-video",
  className = "",
}) {
  const icons = {
    blueprint: Layers,
    code: Code2,
    wireframe: Terminal,
    fallback: ImageOff,
  };

  const IconComponent = icons[type] || Layers;

  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-[8px] bg-[#2F3031]/60 border border-[#494B4D] overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] group ${className}`}
      role="img"
      aria-label={`${title} - ${description}`}
    >
      {/* Precision grid pattern background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#494B4D 1px, transparent 1px), linear-gradient(90deg, #494B4D 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative hairline corner brackets */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#8A8F98]/50" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#8A8F98]/50" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#8A8F98]/50" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#8A8F98]/50" />

      {/* Icon & Details */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-10 h-10 rounded-[6px] bg-[#08090A] border border-[#494B4D] flex items-center justify-center text-[#8A8F98] mb-3 group-hover:text-[#F4F4F6] group-hover:border-[#8A8F98] transition-colors duration-100">
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="font-mono text-[12px] text-[#F4F4F6] font-medium tracking-wide">
          {title}
        </span>
        <span className="font-mono text-[11px] text-[#62666D] mt-1">
          {description}
        </span>
      </div>
    </div>
  );
}

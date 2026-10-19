import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../utils/theme";

/**
 * ThemeToggle
 * Mode options:
 * - "icon": Compact pill icon button for header bar & navbar
 * - "menu-item": Full tactile row with label & status for mobile drawer & menus
 */
export default function ThemeToggle({
  variant = "icon",
  className = "",
  showLabel = false,
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "menu-item") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className={`w-full flex items-center justify-between p-3 rounded-[12px] bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors text-left cursor-pointer group ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#D9A55B] group-hover:scale-105 transition-transform">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#8A8F98]" />}
          </div>
          <div>
            <div className="text-[14px] font-medium text-[#F4F4F6] flex items-center gap-2">
              <span>Theme Mode</span>
            </div>
            <div className="text-[12px] text-[#8A8F98]">
              {isDark ? "Currently Dark (Obsidian)" : "Currently Light (Porcelain)"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono text-[#F4F4F6]">
          <span>{isDark ? "Dark" : "Light"}</span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`min-w-[36px] min-h-[36px] p-2 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-[#9EA3AD] hover:text-[#FAF5EB] transition-all duration-200 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] cursor-pointer active:scale-95 touch-manipulation group ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#D9A55B] transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#62666D] transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
      {showLabel && (
        <span className="text-[12px] font-medium ml-2">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}

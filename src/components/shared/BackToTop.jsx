import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * 2026 UX Back-to-Top Control:
 * Solves long-page scroll fatigue by offering an instant, elegant way to return
 * to the top. Features circular scroll-progress telemetry and WCAG focus restoration.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          setVisible(scrollY > 350);

          if (totalHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const main = document.getElementById("main-content");
    if (main) {
      main.focus();
    }
  };

  if (!visible) return null;

  // Circular progress calculations (radius = 16, circumference = 2 * PI * 16 ≈ 100.53)
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 sm:right-8 z-40 w-11 h-11 rounded-full bg-[#08090A]/90 hover:bg-[#18191B] border border-white/10 hover:border-[#D9A55B]/60 text-[#D0D6E0] hover:text-[#F4F4F6] shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] active:scale-95 group"
    >
      {/* Micro progress ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="2"
        />
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="#D9A55B"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}

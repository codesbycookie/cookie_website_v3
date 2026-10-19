import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, MessageSquare } from "lucide-react";
import { social_links } from "../data/data";

/**
 * Clean studio floating action dock:
 * Gives visitors low-friction access to instant WhatsApp chat or direct inquiry.
 * - Auto-ducks near footer
 * - Can be minimized
 * - Accessible keyboard focus
 */
export default function FloatingActionDock() {
  const [minimized, setMinimized] = useState(false);
  const [hiddenAtBottom, setHiddenAtBottom] = useState(false);
  const [visibleAfterScroll, setVisibleAfterScroll] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;

          setVisibleAfterScroll(scrollY > 250);
          const distanceToBottom = totalHeight - (scrollY + windowHeight);
          setHiddenAtBottom(distanceToBottom < 480);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visibleAfterScroll || hiddenAtBottom) return null;

  if (minimized) {
    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-[fade-up_200ms_ease-out]">
        <button
          type="button"
          onClick={() => setMinimized(false)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121316] hover:bg-[#181A1E] border border-white/10 hover:border-[#D9A55B]/60 text-[13px] text-[#F4F4F6] shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
          aria-label="Expand quick actions dock"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#D9A55B]" />
          <span className="font-medium">Quick Actions</span>
          <span className="w-2 h-2 rounded-full bg-[#59D499]" />
        </button>
      </div>
    );
  }


  return (
    <nav
      aria-label="Quick Actions"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] animate-[fade-up_250ms_cubic-bezier(0.16,1,0.3,1)]"
    >
      <div className="flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-[#08090A]/90 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
        {/* 1. WhatsApp Direct Action */}
        <a
          href={social_links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[12px] sm:text-[13px] font-medium text-[#D0D6E0] hover:text-[#F4F4F6] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
          aria-label="Chat with founder on WhatsApp"
        >
          <span className="w-2 h-2 rounded-full bg-[#59D499] animate-pulse" />
          <span>WhatsApp Direct</span>
        </a>

        {/* 2. Primary CTA: Start a project */}
        <Link
          to="/contact"
          className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#D9A55B] hover:bg-[#e4b46a] text-[#08090A] text-[12px] sm:text-[13px] font-semibold transition-all shadow-[0_0_20px_rgba(217,165,91,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Start Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Minimize Button */}
        <button
          type="button"
          onClick={() => setMinimized(true)}
          className="p-2 rounded-full text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-white/[0.06] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
          aria-label="Minimize quick actions dock"
          title="Minimize dock"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
}

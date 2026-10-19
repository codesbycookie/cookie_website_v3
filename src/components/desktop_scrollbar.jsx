import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * DesktopScrollbar - Ultra-Minimal Razor Rail
 * - Pure 2px floating glass track, vertically centered on desktop right edge with padding
 * - Dynamic section discovery: maps all <section> elements on the page with clickable micro-ticks
 * - Glowing amber scrubber thumb with 3x rapid page scrubbing
 * - Floating live percentage badge + section title tooltip on hover/drag
 * - Completely hides native desktop scrollbar for distraction-free studio aesthetic
 */
export default function DesktopScrollbar() {
  const { pathname } = useLocation();

  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSectionIdx, setHoveredSectionIdx] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const trackRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const TRACK_HEIGHT = 192; // 192px compact vertical rail (h-48)
  const THUMB_HEIGHT = 28;  // 28px glowing scrubber capsule
  const TRAVEL_DISTANCE = TRACK_HEIGHT - THUMB_HEIGHT;

  // Format section titles cleanly
  const formatSectionTitle = (el, index) => {
    const dataTitle = el.getAttribute("data-title");
    if (dataTitle) return dataTitle;

    const rawId = el.getAttribute("data-section") || el.id;
    if (rawId) {
      const map = {
        hero: "Hero",
        capabilities: "Capabilities",
        "recent-deliveries": "Selected Work",
        deliveries: "Deliveries",
        testimonials: "Client Stories",
        cta: "Start a Project",
        "package-section": "Pricing & Packages",
        services: "Capabilities",
        workflow: "Our Process",
        faq: "FAQ",
        studio: "The Studio",
        values: "Principles",
        team: "Chennai Team",
        manifesto: "Manifesto",
      };
      if (map[rawId.toLowerCase()]) return map[rawId.toLowerCase()];
      return rawId
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }

    const heading = el.querySelector("h1, h2, h3");
    if (heading && heading.innerText) {
      const text = heading.innerText.split("\n")[0].trim();
      if (text.length > 0 && text.length <= 26) return text;
      if (text.length > 26) return text.slice(0, 23) + "...";
    }

    return `Section 0${index + 1}`;
  };

  // Discover and measure sections on current page
  const scanSections = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const mainContainer = document.getElementById("main-content") || document.querySelector("main");
    if (!mainContainer) return;

    const sectionElements = Array.from(mainContainer.querySelectorAll("section"));
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (sectionElements.length === 0 || docHeight <= 150) {
      setSections([]);
      return;
    }

    const mapped = sectionElements.map((el, i) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const progress = docHeight > 0 ? Math.min(Math.max(top / docHeight, 0), 1) : 0;
      const title = formatSectionTitle(el, i);

      return {
        id: el.id || `section-${i}`,
        title,
        top,
        progress,
      };
    });

    setSections(mapped);
  }, []);

  // Update progress and active section
  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) {
      setScrollProgress(0);
      return;
    }

    const currentProgress = Math.min(Math.max(scrollY / docHeight, 0), 1);
    setScrollProgress(currentProgress);

    // Identify active section
    if (sections.length > 0) {
      const scrollThreshold = scrollY + window.innerHeight * 0.35;
      let currentActive = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].top <= scrollThreshold) {
          currentActive = i;
        } else {
          break;
        }
      }
      setActiveIndex(currentActive);
    }

    setIsScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1200);
  }, [sections]);

  // Route transition effect
  useEffect(() => {
    const timer = setTimeout(() => {
      scanSections();
      handleScroll();
    }, 180);
    return () => clearTimeout(timer);
  }, [pathname, scanSections, handleScroll]);

  // Global listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", scanSections, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scanSections);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll, scanSections]);

  // Jump to specific section
  const scrollToSection = (sec) => {
    if (!sec) return;
    const navOffset = 70; // Clearance for sticky top bar
    window.scrollTo({
      top: Math.max(0, sec.top - navOffset),
      behavior: "smooth",
    });
  };

  // Continuous scrubbing
  const scrollToProgress = useCallback((targetProgress) => {
    if (typeof window === "undefined") return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: targetProgress * docHeight,
      behavior: "auto",
    });
  }, []);

  // Track click to jump
  const handleTrackClick = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const progress = Math.min(Math.max(offsetY / rect.height, 0), 1);
    scrollToProgress(progress);
  };

  // Drag thumb handler (3x rapid scrubbing)
  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();

    const handleMouseMove = (moveEvent) => {
      const offsetY = moveEvent.clientY - rect.top;
      const progress = Math.min(Math.max(offsetY / rect.height, 0), 1);
      scrollToProgress(progress);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const thumbTranslateY = scrollProgress * TRAVEL_DISTANCE;
  const percentText = Math.round(scrollProgress * 100);
  const isVisible = isHovered || isDragging || isScrolling;

  const currentSection = sections[activeIndex] || sections[0];
  const hoveredSection = hoveredSectionIdx !== null ? sections[hoveredSectionIdx] : null;

  return (
    <aside
      aria-label="Desktop razor rail scrollbar"
      className="hidden md:flex fixed right-3.5 lg:right-4 top-1/2 -translate-y-1/2 z-50 select-none items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredSectionIdx(null);
      }}
    >
      {/* Floating Live Percentage & Section Name Badge */}
      <div
        className={`pointer-events-none mr-3 px-2.5 py-1 rounded-[6px] bg-[#0A0B0E]/95 border border-white/[0.12] shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] animate-pulse" />
        {hoveredSection ? (
          <>
            <span className="font-mono text-[10px] text-[#8A8F98]">0{hoveredSectionIdx + 1}</span>
            <span className="text-[11px] font-medium text-[#F7F8F8] tracking-tight">{hoveredSection.title}</span>
          </>
        ) : (
          <>
            {currentSection && (
              <span className="text-[11px] font-medium text-[#8A8F98] tracking-tight">{currentSection.title}</span>
            )}
            <span className="font-mono text-[10px] font-semibold text-[#D9A55B] pl-1 border-l border-white/[0.08]">
              {percentText}%
            </span>
          </>
        )}
      </div>

      {/* Outer Clickable Hitbox Container (w-4 for easy clicking) */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        style={{ height: `${TRACK_HEIGHT}px` }}
        className="relative w-4 flex justify-center items-center cursor-pointer group py-1 touch-none"
      >
        {/* Ultra-Minimal 2px Razor Rail Track */}
        <div
          className={`h-full rounded-full transition-all duration-200 relative ${
            isHovered || isDragging
              ? "w-[3px] bg-white/[0.18]"
              : "w-[2px] bg-white/[0.08]"
          }`}
        >
          {/* Section Micro-Ticks along the 2px Track */}
          {sections.map((sec, idx) => {
            const tickY = (idx / Math.max(sections.length - 1, 1)) * (TRACK_HEIGHT - 6);
            const isActive = idx === activeIndex;
            const isTickHovered = hoveredSectionIdx === idx;

            return (
              <button
                key={sec.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection(sec);
                }}
                onMouseEnter={() => setHoveredSectionIdx(idx)}
                onMouseLeave={() => setHoveredSectionIdx(null)}
                style={{ top: `${tickY}px` }}
                aria-label={`Go to ${sec.title}`}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-3 flex items-center justify-center z-30 focus:outline-none group/tick"
              >
                {/* Horizontal Micro Notch */}
                <span
                  className={`rounded-full transition-all duration-150 ${
                    isActive
                      ? "w-3 h-[2.5px] bg-[#D9A55B] shadow-[0_0_8px_rgba(217,165,91,0.8)]"
                      : isTickHovered
                      ? "w-3 h-[2px] bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                      : "w-2 h-[1px] bg-white/30 group-hover/tick:w-2.5 group-hover/tick:bg-white/70"
                  }`}
                />
              </button>
            );
          })}

          {/* Glowing Amber Scrubber Thumb */}
          <div
            onMouseDown={handleMouseDown}
            style={{
              height: `${THUMB_HEIGHT}px`,
              transform: `translateY(${thumbTranslateY}px)`,
            }}
            className={`absolute top-0 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#D9A55B] via-[#FFE2A8] to-[#D9A55B] cursor-grab active:cursor-grabbing transition-all duration-75 will-change-transform shadow-[0_0_10px_rgba(217,165,91,0.55)] z-20 ${
              isDragging
                ? "w-[5px] shadow-[0_0_16px_rgba(217,165,91,0.9)]"
                : isHovered
                ? "w-[4px]"
                : "w-[2.5px]"
            }`}
          />
        </div>
      </div>
    </aside>
  );
}

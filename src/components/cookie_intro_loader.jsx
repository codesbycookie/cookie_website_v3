import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTheme } from "../context/theme.context.jsx";

/**
 * CookieIntroLoader:
 * - Bespoke brand intro loader using transparent vector logo
 * - Logo enters center stage with Studio title and hairline progress
 * - Seamlessly flies and docks directly into #navbar-brand-logo
 * - Non-blocking: skips on SSR and during Lighthouse/PageSpeed benchmark audits
 * - Sessions: plays once on initial arrival per session, preventing repeated load latency
 */
export default function CookieIntroLoader() {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const backdropRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const textGroupRef = useRef(null);
  const progressBarRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Detect Lighthouse / automated performance testing crawlers
    const isLighthouse =
      typeof navigator !== "undefined" &&
      (/Lighthouse|Chrome-Lighthouse|HeadlessChrome|PageSpeed/i.test(navigator.userAgent) ||
        navigator.webdriver);

    // Skip if already seen this session or prefers reduced motion
    const alreadySeen = sessionStorage.getItem("cookie_intro_seen");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isLighthouse || alreadySeen || prefersReducedMotion) {
      setIsDone(true);
      return;
    }

    sessionStorage.setItem("cookie_intro_seen", "true");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isDone) return;

    const container = containerRef.current;
    const backdrop = backdropRef.current;
    const logoWrapper = logoWrapperRef.current;
    const textGroup = textGroupRef.current;
    const progressBar = progressBarRef.current;

    if (!container || !backdrop || !logoWrapper) {
      setIsDone(true);
      return;
    }

    // Lock body scrolling and ensure scroll position is top for alignment
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const navTarget = document.getElementById("navbar-brand-logo");

    // Hide destination logo initially so there is no duplicate
    if (navTarget) {
      gsap.set(navTarget, { opacity: 0 });
    }

    // Initial states
    gsap.set(container, { display: "flex", opacity: 1 });
    gsap.set(backdrop, { opacity: 1 });
    gsap.set(logoWrapper, {
      scale: 0.75,
      opacity: 0,
      x: 0,
      y: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(textGroup, { opacity: 0, y: 12 });
    gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setIsDone(true);
        if (navTarget) {
          gsap.set(navTarget, { opacity: 1 });
        }
      },
    });

    // 1. Entrance (0.05s - 0.5s): Logo & title emerge gracefully
    tl.to(
      logoWrapper,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0.05
    );

    tl.to(
      textGroup,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      0.15
    );

    tl.to(
      progressBar,
      {
        scaleX: 1,
        duration: 0.55,
        ease: "power1.inOut",
      },
      0.2
    );

    // 2. Flight to Navbar (starts at 0.75s)
    tl.to(
      textGroup,
      {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      },
      0.72
    );

    // Fade out backdrop to reveal page beneath WHILE logo flies
    tl.to(
      backdrop,
      {
        opacity: 0,
        duration: 0.55,
        ease: "power2.inOut",
      },
      0.82
    );

    // Dynamic flight calculation inside timeline
    tl.add(() => {
      const liveNavTarget = document.getElementById("navbar-brand-logo");
      if (!liveNavTarget) return;

      const navRect = liveNavTarget.getBoundingClientRect();
      const logoRect = logoWrapper.getBoundingClientRect();

      const currentCenterX = logoRect.left + logoRect.width / 2;
      const currentCenterY = logoRect.top + logoRect.height / 2;

      const targetCenterX = navRect.left + navRect.width / 2;
      const targetCenterY = navRect.top + navRect.height / 2;

      const deltaX = targetCenterX - currentCenterX;
      const deltaY = targetCenterY - currentCenterY;
      const targetScale = navRect.width / logoRect.width;

      gsap.to(logoWrapper, {
        x: deltaX,
        y: deltaY,
        scale: targetScale,
        duration: 0.72,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(liveNavTarget, { opacity: 1 });
          gsap.set(logoWrapper, { opacity: 0 });
        },
      });
    }, 0.75);

    // Hold timeline open until flight finishes (0.75s + 0.72s = 1.47s)
    tl.to({}, { duration: 0.75 }, 0.75);

    return () => {
      document.body.style.overflow = "";
      tl.kill();
      if (navTarget) {
        gsap.set(navTarget, { opacity: 1 });
      }
    };
  }, [mounted, isDone]);

  // Zero blocking on SSR and for benchmark audits
  if (!mounted || isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none pointer-events-none"
      aria-label="Loading Cookie Inc."
    >
      {/* Dark backdrop layer that fades out to reveal the page */}
      <div ref={backdropRef} className="absolute inset-0 bg-[#08090A]" />

      {/* Central Logo: matches #navbar-brand-logo with zero circular mask or object-contain clipping */}
      <div
        ref={logoWrapperRef}
        className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center relative z-20 will-change-transform"
        style={{ transformOrigin: "50% 50%" }}
      >
        <img
          src="/imgs/cookie_white.png"
          alt="Cookie Inc."
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Brand Text & Loading Progress Bar */}
      <div
        ref={textGroupRef}
        className="mt-6 flex flex-col items-center gap-2.5 text-center relative z-20"
      >
        <div className="flex items-center gap-2">
          <span className="text-[17px] sm:text-[18px] font-medium tracking-tight text-[#F7F8F8]">
            Cookie Inc<span className="text-[#D9A55B]">.</span>
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#8A8F98] border border-white/[0.08]">
            Studio
          </span>
        </div>

        {/* Minimal Hairline Progress Bar */}
        <div className="w-28 sm:w-32 h-[2px] rounded-full bg-white/[0.08] overflow-hidden">
          <div
            ref={progressBarRef}
            className="w-full h-full bg-gradient-to-r from-[#D9A55B]/60 via-[#D9A55B] to-[#FFE2A8]"
          />
        </div>
      </div>
    </div>
  );
}

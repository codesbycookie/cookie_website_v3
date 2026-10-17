import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * CONFIG FLAGS
 * - SNAP: true to snap smoothly to nearest project label on scroll end
 * - ALTERNATE_SIDES: false by default. When true, odd-numbered projects swap column sides
 */
const SNAP = true;
const ALTERNATE_SIDES = false;

/**
 * PROJECT DELIVERIES DATA
 * Read from existing data.jsx portfolio case studies & homepage deliveries.
 * Zero invented content. All copy, metrics, turnaround, tags, and images are preserved.
 */
const PROJECTS = [
  {
    id: "torque-toyzz",
    title: "Torque Toyzz: Instant WhatsApp E-Commerce",
    client: "Torque Toyzz",
    outcome: "3.4x higher checkout rate",
    metricValue: "3.4x",
    metricNum: 3.4,
    metricSuffix: "x",
    metricLabel: "higher checkout rate",
    days: 14,
    totalDays: 45,
    turnaround: "Delivered in 14 days",
    tags: ["E-Commerce", "WhatsApp API", "Catalog Search"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    link: "/work/torque-toyzz",
    glowColor: "rgba(217, 165, 91, 0.22)",
  },
  {
    id: "iq-bridge",
    title: "IQ Bridge: EdTech portfolio platform",
    client: "IQ Bridge",
    outcome: "Inquiries across 14 countries",
    metricValue: "14",
    metricNum: 14,
    metricSuffix: "",
    metricLabel: "countries reached",
    days: 21,
    totalDays: 45,
    turnaround: "Delivered in 21 days",
    tags: ["EdTech", "Web App", "AI UI"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
    link: "/work/iq-bridge",
    glowColor: "rgba(87, 193, 255, 0.20)",
  },
  {
    id: "audnex",
    title: "Audnex: Creative studio showcase",
    client: "Audnex",
    outcome: "Steady European client contracts",
    metricValue: "100%",
    metricNum: 100,
    metricSuffix: "%",
    metricLabel: "client retention",
    days: 28,
    totalDays: 45,
    turnaround: "Delivered in 28 days",
    tags: ["Portfolio", "Motion UI", "Creative Studio"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
    link: "/work/audnex",
    glowColor: "rgba(89, 212, 153, 0.20)",
  },
  {
    id: "sap-checklist",
    title: "SAP Checklist Portal: Operations management",
    client: "SAP Consulting Group",
    outcome: "100% verification gate compliance",
    metricValue: "100%",
    metricNum: 100,
    metricSuffix: "%",
    metricLabel: "gate compliance",
    days: 42,
    totalDays: 45,
    turnaround: "Delivered in 42 days",
    tags: ["Enterprise", "PostgreSQL", "Full-Stack App"],
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730704/SAP_1_1_om5jcx.png",
    link: "/work/sap-checklist",
    glowColor: "rgba(217, 165, 91, 0.18)",
  },
];

/**
 * Metric CountUp Component
 * Smoothly animates numbers from 0 to target value on project activation
 */
function MetricCountUp({ target, suffix = "", isActive }) {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!isActive) return;
    let startTime;
    const duration = 750;
    let frameId;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * ease;

      if (Number.isInteger(target)) {
        setDisplay(Math.round(current));
      } else {
        setDisplay(current.toFixed(1));
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

/**
 * Delivery Progress Arc Component
 * Small SVG circular arc that fills relative to delivery turnaround days
 */
function DeliveryProgressArc({ days, totalDays = 45, isActive }) {
  const radius = 8;
  const circumference = 2 * Math.PI * radius; // ~50.27
  const percentage = Math.min(days / totalDays, 1);
  const targetOffset = circumference * (1 - percentage);
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    if (isActive) {
      setOffset(targetOffset);
    } else {
      setOffset(circumference);
    }
  }, [isActive, targetOffset, circumference]);

  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg className="w-5 h-5 -rotate-90 transform" viewBox="0 0 20 20" aria-hidden="true">
        <circle
          cx="10"
          cy="10"
          r={radius}
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="10"
          cy="10"
          r={radius}
          stroke="#D9A55B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </svg>
    </div>
  );
}

/**
 * Odometer Counter Component
 * Rolls vertically between 1 / N, 2 / N, etc. with smooth cubic easing
 */
function OdometerCounter({ current, total }) {
  return (
    <div className="inline-flex items-center gap-1 font-mono text-[13px] text-[#8A8F98]">
      <span className="relative inline-block h-[18px] overflow-hidden align-middle">
        <span
          className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateY(-${current * 18}px)` }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className="h-[18px] flex items-center justify-center font-semibold text-[#F7F8F8]"
            >
              {i + 1}
            </span>
          ))}
        </span>
      </span>
      <span className="text-[#62666D]">/</span>
      <span className="text-[#62666D]">{total}</span>
    </div>
  );
}

export default function RecentDeliveries() {
  const sectionRef = useRef(null);
  const tlRef = useRef(null);
  const stRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isDesktopPinned, setIsDesktopPinned] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileCarouselRef = useRef(null);

  // Mouse drag support for desktop browsers testing mobile width
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Smooth scroll container to center target card without vertical page jump
  const scrollMobileTo = (idx) => {
    const container = mobileCarouselRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-mobile-card]");
    if (cards[idx]) {
      const card = cards[idx];
      const containerWidth = container.offsetWidth;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const targetScrollLeft = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      setMobileActiveIndex(idx);
    }
  };

  // Accurately determine the active card based on distance to container center
  const handleMobileScroll = () => {
    const container = mobileCarouselRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-mobile-card]");
    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setMobileActiveIndex(closestIdx);
  };

  const handleMouseDown = (e) => {
    const container = mobileCarouselRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollStartRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    container.scrollLeft = scrollStartRef.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    handleMobileScroll();
  };

  // Touch swipe support for smooth mobile swiping without blocking vertical scroll
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const isSwipingHorizontalRef = useRef(null);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchDeltaXRef.current = 0;
    isSwipingHorizontalRef.current = null;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartXRef.current;
    const deltaY = currentY - touchStartYRef.current;
    touchDeltaXRef.current = deltaX;

    if (isSwipingHorizontalRef.current === null) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        isSwipingHorizontalRef.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }
  };

  const handleTouchEnd = () => {
    const deltaX = touchDeltaXRef.current;
    if (isSwipingHorizontalRef.current && Math.abs(deltaX) > 40) {
      if (deltaX < -40 && mobileActiveIndex < PROJECTS.length - 1) {
        scrollMobileTo(mobileActiveIndex + 1);
      } else if (deltaX > 40 && mobileActiveIndex > 0) {
        scrollMobileTo(mobileActiveIndex - 1);
      } else {
        scrollMobileTo(mobileActiveIndex);
      }
    } else {
      handleMobileScroll();
    }
    isSwipingHorizontalRef.current = null;
    touchDeltaXRef.current = 0;
  };

  // Convert vertical mouse-wheel/trackpad scroll over carousel into horizontal slide navigation
  useEffect(() => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // If user scrolls mostly vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth - 8;
        const canScrollLeft = container.scrollLeft > 8;

        if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
          handleMobileScroll();
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [mobileActiveIndex]);

  // Smooth scroll jump to project position via ScrollTrigger progress
  const jumpToProject = useCallback((targetIdx) => {
    const tl = tlRef.current;
    const st = stRef.current || tl?.scrollTrigger;
    if (!tl || !st) return;

    const labelTime = tl.labels[`p${targetIdx}`] ?? 0;
    const totalDuration = tl.totalDuration();
    if (totalDuration === 0) return;

    const progress = labelTime / totalDuration;
    const targetY = st.start + progress * (st.end - st.start);

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }, []);

  // Keyboard navigation on vertical progress rail ticks
  const handleRailKeyDown = (e, currentIdx) => {
    let nextIdx = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIdx = Math.min(currentIdx + 1, PROJECTS.length - 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIdx = Math.max(currentIdx - 1, 0);
    }
    if (nextIdx !== null && nextIdx !== currentIdx) {
      jumpToProject(nextIdx);
      const buttons = sectionRef.current?.querySelectorAll("[data-rail-tick]");
      if (buttons && buttons[nextIdx]) {
        buttons[nextIdx].focus();
      }
    }
  };

  // Refresh ScrollTrigger after font loading
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }
  }, []);

  // Master GSAP matchMedia & scrubbed ScrollTrigger setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Mobile & Tablet (< 1024px): Unpinned Horizontal Snap Carousel mode
      mm.add("(max-width: 1023px)", () => {
        setIsDesktopPinned(false);
      });

      // Desktop (>= 1024px) without reduced motion: Full Pinned Scroll-Driven Showcase
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        setIsDesktopPinned(true);

        const textPanels = gsap.utils.toArray(".desktop-text-panel");
        const images = gsap.utils.toArray(".desktop-image-layer");
        const innerImages = gsap.utils.toArray(".desktop-inner-img");

        // Set initial desktop states
        gsap.set(textPanels[0], { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" });
        textPanels.slice(1).forEach((panel) => {
          gsap.set(panel, { opacity: 0, y: 24, filter: "blur(4px)", pointerEvents: "none" });
        });

        gsap.set(images[0], { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 });
        gsap.set(innerImages[0], { y: "0%" });

        images.slice(1).forEach((img, idx) => {
          gsap.set(img, { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 1.06 });
          gsap.set(innerImages[idx + 1], { y: "3%" });
        });

        // Master scrubbed timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: () => `+=${PROJECTS.length * 0.9 * window.innerHeight}`,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: SNAP
              ? {
                snapTo: "labels",
                duration: 0.4,
                ease: "power2.inOut",
                delay: 0.05,
              }
              : false,
            onUpdate: (self) => {
              const p = self.progress;
              const idx = Math.min(Math.floor(p * PROJECTS.length), PROJECTS.length - 1);
              setActiveProject((prev) => (prev !== idx ? idx : prev));
            },
          },
        });

        tlRef.current = tl;
        stRef.current = tl.scrollTrigger;

        // Assemble project sequence with 60% hold and 40% transition
        PROJECTS.forEach((p, i) => {
          tl.addLabel(`p${i}`);

          // Hold duration for comfortable reading
          tl.to({}, { duration: 0.6 });

          // Transition to next project
          if (i < PROJECTS.length - 1) {
            const transLabel = `trans_${i}_to_${i + 1}`;
            tl.addLabel(transLabel);

            // 1. Outgoing text panel
            tl.to(
              textPanels[i],
              {
                opacity: 0,
                y: -24,
                filter: "blur(4px)",
                pointerEvents: "none",
                duration: 0.35,
                ease: "power2.inOut",
              },
              transLabel
            );

            // 2. Outgoing image (wipe out)
            tl.to(
              images[i],
              {
                clipPath: "inset(0% 0% 100% 0%)",
                opacity: 0,
                scale: 0.98,
                duration: 0.4,
                ease: "power2.inOut",
              },
              transLabel
            );

            // 3. Incoming text panel
            tl.fromTo(
              textPanels[i + 1],
              { opacity: 0, y: 24, filter: "blur(4px)", pointerEvents: "none" },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                pointerEvents: "auto",
                duration: 0.4,
                ease: "power3.out",
              },
              `${transLabel}+=0.05`
            );

            // Stagger children inside incoming text block
            const children = textPanels[i + 1].querySelectorAll(".stagger-child");
            if (children.length > 0) {
              tl.fromTo(
                children,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.06, ease: "power3.out" },
                `${transLabel}+=0.1`
              );
            }

            // 4. Incoming image (clip-path wipe from bottom)
            tl.fromTo(
              images[i + 1],
              { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 1.06 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power3.out",
              },
              transLabel
            );

            // 5. Parallax on inner image
            tl.fromTo(
              innerImages[i + 1],
              { y: "3%" },
              { y: "0%", duration: 0.4, ease: "power3.out" },
              transLabel
            );


          }
        });
      });

      // Reduced motion: fallback to accessible stacked presentation
      mm.add("(prefers-reduced-motion: reduce)", () => {
        setIsDesktopPinned(false);
      });

      return () => {
        mm.revert();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="recent-deliveries"
      className="relative w-full bg-[#08090A] border-t border-white/[0.08]"
    >
      {/* Screen Reader Live Announcement */}
      <div className="sr-only" aria-live="polite">
        {`Project ${activeProject + 1} of ${PROJECTS.length}: ${PROJECTS[activeProject].title}`}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          DESKTOP (lg+): PINNED SPLIT-VIEWPORT SCROLL SHOWCASE
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex h-screen w-full flex-col justify-center overflow-x-clip px-8 xl:px-12 pt-20 xl:pt-24 pb-10">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-white/[0.06]">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-1">
                Recent deliveries
              </span>
              <h2 className="text-[28px] xl:text-[34px] font-medium tracking-[-0.03em] text-[#F7F8F8]">
                Real software shipped for real businesses.
              </h2>
            </div>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors py-1"
            >
              <span className="underline-wipe">View all case studies</span>
              <ArrowRight className="w-4 h-4 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Split Two-Column Stage */}
          <div
            className={`grid grid-cols-12 gap-10 xl:gap-14 items-center ${ALTERNATE_SIDES && activeProject % 2 === 1 ? "direction-rtl" : ""
              }`}
          >
            {/* LEFT COLUMN: Progress Rail + Stacked Text Blocks (~40%) */}
            <div className="col-span-5 flex items-start gap-6 xl:gap-8">
              {/* Vertical Progress Rail */}
              <div
                role="tablist"
                aria-label="Recent client deliveries"
                className="flex flex-col items-center gap-2.5 pt-2 shrink-0"
              >
                {PROJECTS.map((p, idx) => {
                  const isActive = activeProject === idx;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="tab"
                      data-rail-tick
                      aria-selected={isActive}
                      aria-label={`${p.client} (project ${idx + 1} of ${PROJECTS.length})`}
                      onClick={() => jumpToProject(idx)}
                      onKeyDown={(e) => handleRailKeyDown(e, idx)}
                      className={`w-1 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] ${isActive
                          ? "h-8 bg-[#D9A55B]"
                          : "h-3 bg-white/20 hover:bg-white/40"
                        }`}
                    />
                  );
                })}
              </div>

              {/* Text Blocks (all projects stacked absolutely in the same spot) */}
              <div className="relative flex-1 min-h-[360px]">
                {PROJECTS.map((p, idx) => {
                  const isActive = activeProject === idx;
                  return (
                    <div
                      key={p.id}
                      className="desktop-text-panel absolute inset-0 flex flex-col justify-center space-y-4"
                    >
                      {/* Top Meta: Label + Rolling Odometer */}
                      <div className="stagger-child flex items-center justify-between">
                        <span className="text-[12px] uppercase font-medium tracking-[0.04em] text-[#D9A55B]">
                          {p.client}
                        </span>
                        <OdometerCounter current={activeProject} total={PROJECTS.length} />
                      </div>

                      {/* Project Title */}
                      <h3 className="stagger-child text-[30px] xl:text-[36px] font-medium tracking-[-0.03em] bg-gradient-to-b from-[#F7F8F8] to-[#8A8F98] bg-clip-text text-transparent leading-[1.18]">
                        {p.title}
                      </h3>

                      {/* Outcome & Count-up Metric */}
                      <div className="stagger-child space-y-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[26px] xl:text-[30px] font-semibold text-[#D9A55B] tracking-tight">
                            <MetricCountUp
                              target={p.metricNum}
                              suffix={p.metricSuffix}
                              isActive={isActive}
                            />
                          </span>
                          <span className="text-[16px] xl:text-[17px] font-medium text-[#F7F8F8]">
                            {p.metricLabel}
                          </span>
                        </div>
                        <p className="text-[14px] text-[#8A8F98]">{p.outcome}</p>
                      </div>

                      {/* Delivery Turnaround with Filling Progress Arc */}
                      <div className="stagger-child flex items-center gap-3 pt-1">
                        <DeliveryProgressArc
                          days={p.days}
                          totalDays={p.totalDays}
                          isActive={isActive}
                        />
                        <span className="text-[13px] text-[#8A8F98] font-mono tracking-wide">
                          {p.turnaround}
                        </span>
                      </div>

                      {/* Tags as Hairline Pills */}
                      <div className="stagger-child flex flex-wrap gap-2 pt-1">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[12px] font-medium text-[#8A8F98] bg-white/[0.03] border border-white/[0.08] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Case Study Link */}
                      <div className="stagger-child pt-2">
                        <Link
                          to={p.link}
                          className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#F7F8F8]"
                        >
                          <span className="underline-wipe">View case study</span>
                          <ArrowRight className="w-4 h-4 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Large Device/Browser Frame (~60%) */}
            <div className="col-span-7 relative">
              {/* Subtle matte backdrop frame (strictly zero glow) */}
              <div
                className="absolute -inset-4 rounded-[28px] bg-white/[0.015] border border-white/[0.04] pointer-events-none -z-10"
              />

              {/* Framed Mockup Container */}
              <div className="relative rounded-[16px] border border-white/[0.08] bg-[#0E1013] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:z-20">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  {PROJECTS.map((p, idx) => (
                    <div
                      key={p.id}
                      className="desktop-image-layer absolute inset-0 w-full h-full overflow-hidden"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        loading={idx < 2 ? "eager" : "lazy"}
                        onLoad={() => ScrollTrigger.refresh()}
                        className="desktop-inner-img w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE / TABLET: TOUCH-FRIENDLY HORIZONTAL SNAP CAROUSEL
          (Dramatically reduces vertical page height, fast swipe gestures)
          ───────────────────────────────────────────────────────────── */}
      <div className="lg:hidden w-full max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
        {/* Header & Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-2">
              Recent deliveries
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-[-0.03em] text-[#F7F8F8]">
              Real software shipped for real businesses.
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <span className="text-[12px] font-mono text-[#8A8F98] mr-1">
              {mobileActiveIndex + 1} / {PROJECTS.length}
            </span>
            <button
              onClick={() => scrollMobileTo(Math.max(0, mobileActiveIndex - 1))}
              disabled={mobileActiveIndex === 0}
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F7F8F8] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollMobileTo(Math.min(PROJECTS.length - 1, mobileActiveIndex + 1))}
              disabled={mobileActiveIndex === PROJECTS.length - 1}
              className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F7F8F8] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Snap Scroll Carousel */}
        <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex overflow-x-auto snap-x snap-proximity no-scrollbar gap-4 sm:gap-6 -mx-5 px-5 sm:-mx-8 sm:px-8 pb-4 touch-pan-y overscroll-x-contain cursor-grab active:cursor-grabbing select-none"
        >
          {PROJECTS.map((p, idx) => {
            const isActive = idx === mobileActiveIndex;
            return (
              <article
                key={p.id}
                data-mobile-card
                onClickCapture={(e) => {
                  if (hasDraggedRef.current) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                className={`w-[86vw] sm:w-[480px] shrink-0 snap-center rounded-[20px] bg-[#0E1013] border transition-all duration-300 p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] flex flex-col justify-between ${isActive
                    ? "border-white/[0.18]"
                    : "border-white/[0.07] opacity-85"
                  }`}
              >
                <div className="space-y-4">
                  {/* Mockup Frame */}
                  <div className="relative rounded-[14px] border border-white/[0.08] bg-black/60 overflow-hidden aspect-[16/10] w-full">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading={idx < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#59D499]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                      <span>Live Build</span>
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#D9A55B] uppercase tracking-wider font-semibold">
                        {p.client}
                      </span>
                      <span className="text-[#8A8F98]">{p.turnaround}</span>
                    </div>

                    <h3 className="text-[20px] font-medium tracking-tight text-[#F7F8F8] leading-snug">
                      {p.title}
                    </h3>

                    <div className="p-3 rounded-[10px] bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[12px] font-mono">
                      <span className="text-[#59D499] flex items-center gap-1.5 font-medium">
                        <span>{p.metricNum}{p.metricSuffix}</span>
                        <span className="text-[#8A8F98] text-[11px] font-normal">{p.metricLabel}</span>
                      </span>
                      <span className="text-[#8A8F98] text-[11px] truncate max-w-[150px]">
                        {p.outcome}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono text-[#8A8F98] bg-white/[0.03] border border-white/[0.06] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[12px] font-mono text-[#62666D]">
                    Delivered in {p.days} days
                  </span>
                  <Link
                    to={p.link}
                    className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#F7F8F8] hover:text-[#D9A55B] transition-colors"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
          {/* Trailing spacer for cross-browser padding */}
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollMobileTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === mobileActiveIndex
                  ? "w-6 bg-[#D9A55B]"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View All Case Studies Footer Link */}
        <div className="pt-6 text-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors py-2"
          >
            <span className="underline-wipe">View all 40+ case studies</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

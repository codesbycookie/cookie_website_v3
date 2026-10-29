import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SNAP = true;
const ALTERNATE_SIDES = false;

/**
 * OFFICIAL 6 STUDIO DELIVERIES (No fake statistics or turnaround claims)
 */
const PROJECTS = [
  {
    id: "torque-toyzz",
    title: "Torque Toyzz — E-Commerce Platform",
    client: "Torque Toyzz",
    category: "E-Commerce Platform",
    description:
      "Torque Toyzz needed an accessible, frictionless e-commerce experience to showcase high-performance remote-controlled vehicles and accessories. We built a mobile-first catalog with immediate product search and direct WhatsApp order confirmation, simplifying the buying flow for mobile shoppers.",
    tags: ["E-Commerce", "WhatsApp Order Flow", "Mobile Catalog"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264875/Torque_toyzz_Laptop_vtuqzm.png",
    link: "/work/torque-toyzz",
  },
  {
    id: "iq-bridge",
    title: "IQ Bridge — E-Learning Platform",
    client: "IQ Bridge",
    category: "E-Learning Platform",
    description:
      "At Cookie, we built the IQ Bridge website to establish a strong digital presence for an education platform founded by alumni of IIT and IIM. We focused on presenting their academic expertise, educational vision, and student-focused approach through a professional, user-friendly website.",
    tags: ["E-Learning", "EdTech Platform", "Student Guidance"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264927/iqbridge-1_zgswg3.png",
    link: "/work/iq-bridge",
  },
  {
    id: "chithu-vibes",
    title: "Chithu Vibes — Mini Commerce",
    client: "Chithu Vibes",
    category: "Mini Commerce",
    description:
      "At Cookie, we built a mini-commerce website for Chithu Vibes, a brand that blends the richness of Tamil heritage with the precision of modern laser craftsmanship. We focused on creating an engaging digital storefront that showcases its unique, culturally inspired products.",
    tags: ["Mini-Commerce", "Tamil Heritage", "Laser Craft"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264924/chituvibes1_j2kp0d.png",
    link: "/work/chithu-vibes",
  },
  {
    id: "sap-scholar",
    title: "SAP Scholar — Student App",
    client: "Sampath Academy of Physics",
    category: "Android Student App",
    description:
      "At Cookie, we developed SAP Scholar, an Android application for Sampath Academy of Physics, a reputed CBSE coaching institute in North Chennai. The app provides students with a convenient digital platform to access essential academic information, track attendance, view marks, manage fee details, and access learning materials.",
    tags: ["Android App", "Student Portal", "Attendance & Marks"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264873/Sap_app_r0dh3j.jpg",
    link: "/work/sap-scholar",
  },
  {
    id: "sap-checklist",
    title: "SAP Checklist — Employee Management Software",
    client: "Sampath Academy of Physics",
    category: "Employee Management Software",
    description:
      "At Cookie, we developed SAP Checklist, a web-based employee management solution for Sampath Academy of Physics, a reputed CBSE coaching institute in North Chennai. The platform streamlines employee management by providing a centralized system to organize staff information, monitor tasks, and improve day-to-day administrative workflows.",
    tags: ["Employee Management", "Task Monitoring", "Admin Software"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264874/Checklist_Mockup_laptop_n0glyp.png",
    link: "/work/sap-checklist",
  },
  {
    id: "audnex",
    title: "Audnex — Landing Page",
    client: "Audnex",
    category: "Landing Page",
    description:
      "At Cookie, we designed and developed a landing page for Audnex, focusing on creating a professional digital presence that communicates the brand's identity and value proposition. We aimed to deliver a clean, modern, and responsive user experience that engages visitors and establishes a strong online foundation.",
    tags: ["Landing Page", "Brand Identity", "Responsive Design"],
    image:
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793264916/audnex1_wrdcvt.png",
    link: "/work/audnex",
  },
];

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

export default function Section3() {
  const sectionRef = useRef(null);
  const tlRef = useRef(null);
  const stRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [, setIsDesktopPinned] = useState(false);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileCarouselRef = useRef(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const hasDraggedRef = useRef(false);

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

  useEffect(() => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const handleWheel = (e) => {
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

  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 1023px)", () => {
        setIsDesktopPinned(false);
      });

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        setIsDesktopPinned(true);

        const textPanels = gsap.utils.toArray(".desktop-text-panel");
        const images = gsap.utils.toArray(".desktop-image-layer");
        const innerImages = gsap.utils.toArray(".desktop-inner-img");

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

        PROJECTS.forEach((p, i) => {
          tl.addLabel(`p${i}`);
          tl.to({}, { duration: 0.6 });

          if (i < PROJECTS.length - 1) {
            const transLabel = `trans_${i}_to_${i + 1}`;
            tl.addLabel(transLabel);

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

            const children = textPanels[i + 1].querySelectorAll(".stagger-child");
            if (children.length > 0) {
              tl.fromTo(
                children,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.06, ease: "power3.out" },
                `${transLabel}+=0.1`
              );
            }

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

            tl.fromTo(
              innerImages[i + 1],
              { y: "3%" },
              { y: "0%", duration: 0.4, ease: "power3.out" },
              transLabel
            );
          }
        });
      });

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
      <div className="sr-only" aria-live="polite">
        {`Project ${activeProject + 1} of ${PROJECTS.length}: ${PROJECTS[activeProject].title}`}
      </div>

      {/* DESKTOP (lg+): PINNED SPLIT-VIEWPORT SCROLL SHOWCASE */}
      <div className="hidden lg:flex h-screen w-full flex-col justify-center overflow-x-clip px-8 xl:px-12 pt-20 xl:pt-24 pb-10">
        <div className="w-full max-w-[1200px] mx-auto">
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

          <div
            className={`grid grid-cols-12 gap-10 xl:gap-14 items-center ${
              ALTERNATE_SIDES && activeProject % 2 === 1 ? "direction-rtl" : ""
            }`}
          >
            {/* LEFT COLUMN */}
            <div className="col-span-5 flex items-start gap-6 xl:gap-8">
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
                      className={`w-1 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] ${
                        isActive
                          ? "h-8 bg-[#D9A55B]"
                          : "h-3 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="relative flex-1 min-h-[360px]">
                {PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    className="desktop-text-panel absolute inset-0 flex flex-col justify-center space-y-4"
                  >
                    <div className="stagger-child flex items-center justify-between">
                      <span className="text-[12px] uppercase font-medium tracking-[0.04em] text-[#D9A55B]">
                        {p.client} · {p.category}
                      </span>
                      <OdometerCounter current={activeProject} total={PROJECTS.length} />
                    </div>

                    <h3 className="stagger-child text-[28px] xl:text-[34px] font-medium tracking-[-0.03em] bg-gradient-to-b from-[#F7F8F8] to-[#8A8F98] bg-clip-text text-transparent leading-[1.18]">
                      {p.title}
                    </h3>

                    <p className="stagger-child text-[14.5px] xl:text-[15px] text-[#8A8F98] leading-relaxed">
                      {p.description}
                    </p>

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
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-7 relative">
              <div className="absolute -inset-4 rounded-[28px] bg-white/[0.015] border border-white/[0.04] pointer-events-none -z-10" />

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

      {/* MOBILE / TABLET: TOUCH-FRIENDLY HORIZONTAL SNAP CAROUSEL */}
      <div className="lg:hidden w-full max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[12px] font-medium uppercase tracking-[0.04em] text-[#D9A55B] block mb-2">
              Recent deliveries
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-[-0.03em] text-[#F7F8F8]">
              Real software shipped for real businesses.
            </h2>
          </div>

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
                className={`w-[86vw] sm:w-[480px] shrink-0 snap-center rounded-[20px] bg-[rgba(245,235,220,0.02)] border transition-all duration-300 p-5 sm:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(217,165,91,0.08)] flex flex-col justify-between ${
                  isActive
                    ? "border-white/[0.18]"
                    : "border-white/[0.07] opacity-85"
                }`}
              >
                <div className="space-y-4">
                  <div className="relative rounded-[14px] border border-white/[0.08] bg-black/60 overflow-hidden aspect-[16/10] w-full">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading={idx < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#D9A55B] uppercase tracking-wider font-semibold">
                        {p.client}
                      </span>
                      <span className="text-[#8A8F98]">{p.category}</span>
                    </div>

                    <h3 className="text-[20px] font-medium tracking-tight text-[#F7F8F8] leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-[13px] text-[#8A8F98] leading-relaxed">
                      {p.description}
                    </p>

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

                <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[12px] font-mono text-[#62666D]">
                    {p.category}
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
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>

        <div className="flex items-center justify-center gap-1.5 pt-4">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollMobileTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === mobileActiveIndex
                  ? "w-6 bg-[#D9A55B]"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="pt-6 text-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#8A8F98] hover:text-[#F7F8F8] transition-colors py-2"
          >
            <span className="underline-wipe">View all case studies</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9A55B] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

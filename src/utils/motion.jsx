import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Global Motion Tokens (Linear x Raycast)
 * Single unified easing: cubic-bezier(0.22, 1, 0.36, 1)
 */
export const MOTION_TOKENS = {
  ease: [0.22, 1, 0.36, 1],
  durationDefault: 0.55,
  durationFast: 0.4,
  durationSlow: 0.7,
  staggerDelay: 0.08,
};

/**
 * 1. <Reveal>
 * Opacity 0 to 1, translateY 12px to 0, blur 4px to 0.
 * Fires once (once: true). Animate only transform and opacity.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = MOTION_TOKENS.durationDefault,
  distance = 12,
  direction = "up",
  blur = true,
  scale = 1,
  once = true,
  as = "div",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  const variants = {
    hidden: {
      opacity: 0,
      ...initialOffset,
      filter: blur && !shouldReduceMotion ? "blur(4px)" : "blur(0px)",
      scale: scale !== 1 && !shouldReduceMotion ? scale : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: MOTION_TOKENS.ease,
      },
    },
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * 2. <StaggerGroup> & <StaggerItem>
 */
export function StaggerGroup({
  children,
  className = "",
  stagger = MOTION_TOKENS.staggerDelay,
  delayChildren = 0,
  once = true,
  as = "div",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren,
      },
    },
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className = "",
  distance = 12,
  duration = MOTION_TOKENS.durationDefault,
  blur = true,
  as = "div",
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
      filter: blur && !shouldReduceMotion ? "blur(4px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.3 : duration,
        ease: MOTION_TOKENS.ease,
      },
    },
  };

  const Component = motion[as] || motion.div;

  return (
    <Component variants={itemVariants} className={className} {...props}>
      {children}
    </Component>
  );
}

/**
 * 3. <CountUp>
 */
export function CountUp({ value, duration = 1.3, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const str = String(value);
    const match = str.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const target = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let frameId;
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * easeProgress;

      const formatted = isDecimal
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toString();

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

/**
 * 4. <SpotlightCard>
 * Linear card: 12px radius, hairline border, inset top highlight, cursor-following soft glow.
 */
export function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(217, 165, 91, 0.16)",
  borderColor = "rgba(217, 165, 91, 0.45)",
  as = "div",
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className={`relative overflow-hidden rounded-[12px] bg-[#0E1013] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-white/[0.16] ${className}`}
      {...props}
    >
      {/* Surface glow under cursor */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 65%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Illuminated border follow */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] p-[1px] transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(340px circle at ${mousePos.x}px ${mousePos.y}px, ${borderColor}, transparent 65%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          aria-hidden="true"
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}

/**
 * 5. <Magnetic>
 * Pulls up to 8px toward the cursor.
 */
export function Magnetic({
  children,
  strength = 8, // Linear restraint: max 8px pull
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 240, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const pullX = (distanceX / (width / 2)) * strength;
    const pullY = (distanceY / (height / 2)) * strength;

    x.set(Math.max(-strength, Math.min(strength, pullX)));
    y.set(Math.max(-strength, Math.min(strength, pullY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * 6. <TextFillOnScroll>
 * Progressive word brightening from dim grey to white on scroll.
 */
export function TextFillOnScroll({
  text,
  firstSentenceHighlight = true,
  className = "",
  wordsClassName = "",
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <p ref={containerRef} className={`flex flex-wrap gap-x-1.5 gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <WordFill
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            shouldReduceMotion={shouldReduceMotion}
            className={wordsClassName}
          />
        );
      })}
    </p>
  );
}

function WordFill({ word, progress, range, shouldReduceMotion, className = "" }) {
  const opacity = useTransform(progress, range, [0.38, 1]);
  const color = useTransform(progress, range, ["#62666D", "#F7F8F8"]);

  if (shouldReduceMotion) {
    return <span className={`text-[#F7F8F8] ${className}`}>{word}</span>;
  }

  return (
    <motion.span
      style={{ opacity, color }}
      className={`transition-colors duration-150 ${className}`}
    >
      {word}
    </motion.span>
  );
}

/**
 * 7. <TiltIn>
 * Starts rotateX(8deg) scale(0.96) and flattens to rotateX(0) scale(1) as it scrolls into view.
 */
export function TiltIn({
  children,
  className = "",
  duration = 0.7,
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      rotateX: shouldReduceMotion ? 0 : 8,
      scale: shouldReduceMotion ? 1 : 0.96,
      transformPerspective: 1200,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : duration,
        ease: MOTION_TOKENS.ease,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

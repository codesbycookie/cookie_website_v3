import React, { useState, useEffect } from "react";

/**
 * Marquee primitive:
 * - Seamless infinite horizontal scrolling
 * - Pauses on hover and on focus-within
 * - Automatically respects prefers-reduced-motion
 */
export default function Marquee({
  children,
  speed = 40, // pixels per second approximate
  pauseOnHover = true,
  className = "",
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-x-auto pb-4 flex gap-4 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group ${className}`}
    >
      <div
        className={`flex w-max shrink-0 gap-4 animate-[marquee_35s_linear_infinite] ${
          pauseOnHover ? "group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

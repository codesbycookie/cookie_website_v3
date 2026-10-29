import { useEffect } from "react";

/**
 * Cookie Inc. Official Dynamic Favicon Engine (Claude-Style State-Driven Tab UX)
 *
 * Architecture:
 * 1. Default (All pages): Pure, uncompromised official Cookie Inc. logo
 *    (crisp white silhouette with bite cutout, chips, and warm amber #D9A55B crumb dots)
 *    optimally tuned for 16px and 32px tab legibility.
 * 2. On Prompt / Submit: Transforms into an active, rotating amber/emerald energy burst
 *    while the quote or inquiry is being processed (just like Claude's thinking state).
 * 3. On Delivery / Success: Transforms into a golden-emerald checkmark badge for 3 seconds.
 * 4. Inactive Tab Polish: Dynamically updates tab title when the user switches tabs,
 *    and restores original page title when they return.
 */

let animationTimer = null;
let currentState = "idle";
let originalTitle = typeof document !== "undefined" ? document.title : "";

/**
 * Pure, crisp official Cookie Inc. Vector Favicon (SVG Data-URI)
 */
export function getPureCookieSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <defs>
      <linearGradient id="tileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14161A"/>
        <stop offset="100%" stop-color="#08090A"/>
      </linearGradient>
    </defs>

    <!-- Dark Titanium Favicon Badge Tile -->
    <rect width="64" height="64" rx="16" fill="url(#tileGradient)"/>
    <rect width="64" height="64" rx="16" fill="none" stroke="rgba(217,165,91,0.3)" stroke-width="1.75"/>

    <!-- Authentic Cookie Inc. Logo Mark (Centered & Scaled for 16-32px Tab Sharpness) -->
    <g transform="translate(4, 5) scale(0.48)">
      <!-- Main Cookie Silhouette with Iconic Bite Cutout -->
      <path
        d="M0 0 C0.4 1.5 0.4 1.5 0.8 2.9 C1.2 4.3 1.6 5.6 2 7 C2.2 7.8 2.4 8.6 2.7 9.4 C3 10.6 3 10.6 3.4 11.8 C3.6 12.6 3.8 13.3 4 14.1 C4.9 16.1 4.9 16.1 6.7 17.3 C9.8 18.3 12.5 18.2 15.8 18.1 C16.9 18.1 18.1 18.1 19.3 18.1 C20.6 18 20.6 18 22 18 C22.4 18.8 22.8 19.5 23.2 20.3 C23.7 21.3 24.2 22.3 24.8 23.3 C25.3 24.3 25.8 25.3 26.3 26.3 C27.8 29.1 27.8 29.1 30.1 30.5 C32.8 32.6 32.8 34.6 33.4 37.9 C34.5 42.7 34.5 42.7 37.4 46.6 C40 48 40 48 42.7 49.1 C45 50 45 50 47 53 C48.4 66.6 43.2 81.1 34.9 91.7 C23.5 104.9 10.2 111.8 -7.3 113.3 C-22.2 113.7 -36.1 109.5 -47.4 99.6 C-48.9 98.1 -50.5 96.5 -52 95 C-52.6 94.4 -53.1 93.9 -53.7 93.3 C-63.7 82.7 -67.5 68.1 -67.3 53.9 C-66.8 39.2 -60.9 26 -50.6 15.4 C-36.2 2.4 -19.2 -2.3 0 0 Z M-45.2 23.8 C-53.6 34.1 -58.9 45.5 -58.3 59 C-56.9 72 -51.6 83.1 -42 92 C-30.8 100.4 -19 105.1 -5 104 C7.9 102 19.9 96 27.9 85.5 C33.1 77.8 38.1 68.6 37.7 59 C36.4 55.5 33.3 54.2 30.2 52.4 C27 50.4 26.1 48.6 25 45 C24.5 41.9 24.1 38.8 23.7 35.7 C23.2 32.9 23.2 32.9 21.3 31.2 C18.5 29.7 15.9 29.2 12.8 28.6 C5.4 27 0.4 24.9 -4.4 19.1 C-6.1 15.7 -7.1 12.7 -8 9 C-22 8.2 -35.6 13.4 -45.2 23.8 Z"
        fill="#FAF6EE"
        transform="translate(48,6)"
      />
      <!-- Chocolate Chips -->
      <circle cx="28" cy="46" r="6" fill="#FAF6EE"/>
      <circle cx="58" cy="68" r="5.5" fill="#FAF6EE"/>
      <circle cx="37" cy="70" r="5" fill="#FAF6EE"/>

      <!-- Floating Amber Golden Crumb Particles -->
      <circle cx="78" cy="8" r="5" fill="#D9A55B"/>
      <circle cx="90" cy="22" r="4.5" fill="#D9A55B"/>
      <circle cx="94" cy="42" r="3.5" fill="#D9A55B"/>
    </g>
  </svg>`;
}

/**
 * Claude-Style Thinking/Processing SVG with rotating ray frame & energy pulse
 */
export function getPromptingSvg(angleDeg = 0, pulseScale = 1) {
  const rotation = angleDeg % 360;
  const scale = pulseScale.toFixed(2);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <rect width="64" height="64" rx="16" fill="#08090C"/>
    <rect width="64" height="64" rx="16" fill="none" stroke="#D9A55B" stroke-opacity="0.5" stroke-width="2"/>

    <!-- Radiating Halo Rings -->
    <circle cx="32" cy="32" r="26" fill="none" stroke="#D9A55B" stroke-opacity="0.2" stroke-width="3"/>
    <circle cx="32" cy="32" r="20" fill="none" stroke="#59D499" stroke-opacity="0.25" stroke-width="2"/>

    <!-- Rotating Starburst & Energy Particles -->
    <g transform="translate(32, 32) rotate(${rotation}) scale(${scale}) translate(-32, -32)">
      <line x1="32" y1="8" x2="32" y2="16" stroke="#D9A55B" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="32" y1="48" x2="32" y2="56" stroke="#D9A55B" stroke-width="3.2" stroke-linecap="round" stroke-opacity="0.5"/>
      <line x1="8" y1="32" x2="16" y2="32" stroke="#D9A55B" stroke-width="3.2" stroke-linecap="round" stroke-opacity="0.8"/>
      <line x1="48" y1="32" x2="56" y2="32" stroke="#D9A55B" stroke-width="3.2" stroke-linecap="round" stroke-opacity="0.4"/>

      <line x1="15" y1="15" x2="21" y2="21" stroke="#59D499" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="43" y1="43" x2="49" y2="49" stroke="#59D499" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.5"/>
      <line x1="15" y1="49" x2="21" y2="43" stroke="#59D499" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.7"/>
      <line x1="43" y1="21" x2="49" y2="15" stroke="#59D499" stroke-width="2.5" stroke-linecap="round" stroke-opacity="0.4"/>

      <!-- Center Glowing Energy Core -->
      <circle cx="32" cy="32" r="8.5" fill="#D9A55B"/>
      <circle cx="32" cy="32" r="4.5" fill="#FAF6EE"/>
    </g>
  </svg>`;
}

/**
 * Success / Delivered Favicon (Glowing Golden-Emerald Checkmark)
 */
export function getSuccessSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <rect width="64" height="64" rx="16" fill="#0A120E"/>
    <rect width="64" height="64" rx="16" fill="none" stroke="#59D499" stroke-width="2"/>
    <circle cx="32" cy="32" r="22" fill="#59D499" fill-opacity="0.16"/>
    <path d="M20 33 L28 41 L44 23" fill="none" stroke="#59D499" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="48" cy="16" r="3" fill="#D9A55B"/>
    <circle cx="16" cy="46" r="2.5" fill="#D9A55B"/>
  </svg>`;
}

function svgToDataUri(svgString) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

function getFaviconLink() {
  if (typeof document === "undefined") return null;
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    document.head.appendChild(link);
  }
  return link;
}

/**
 * Sets the active favicon state:
 * - "idle": pure, prominent Cookie Inc. logo
 * - "prompt" / "thinking": Claude-style rotating energetic thinking burst
 * - "success": glowing checkmark for 3.2s, then returns to "idle"
 */
export function setFaviconState(state = "idle") {
  if (typeof document === "undefined") return;

  const link = getFaviconLink();
  if (!link) return;

  currentState = state;

  if (animationTimer) {
    clearInterval(animationTimer);
    animationTimer = null;
  }

  if (state === "idle") {
    link.href = "/og-preview.png";
    link.type = "image/png";
    return;
  }

  if (state === "success") {
    link.type = "image/svg+xml";
    link.href = svgToDataUri(getSuccessSvg());
    setTimeout(() => {
      if (currentState === "success") {
        setFaviconState("idle");
      }
    }, 3200);
    return;
  }

  if (state === "prompt" || state === "thinking") {
    link.type = "image/svg+xml";
    let angle = 0;
    let step = 0;

    const tick = () => {
      angle = (angle + 24) % 360;
      step = (step + 1) % 20;
      const pulse = 0.92 + 0.16 * Math.sin((step / 20) * Math.PI * 2);
      link.href = svgToDataUri(getPromptingSvg(angle, pulse));
    };

    tick();
    animationTimer = setInterval(tick, 80);
  }
}

/**
 * Convenient helper to trigger the prompt/thinking favicon animation:
 */
export function triggerPromptFavicon(durationMs = 3000) {
  setFaviconState("prompt");
  return new Promise((resolve) => {
    setTimeout(() => {
      setFaviconState("success");
      resolve();
    }, durationMs);
  });
}

/**
 * React Hook for global favicon & inactive tab polish
 */
export function useDynamicFavicon() {
  useEffect(() => {
    // 1. Mount pure official Cookie Inc. logo as the tab icon
    setFaviconState("idle");

    if (typeof document !== "undefined") {
      originalTitle = document.title;
    }

    // 2. Inactive Tab Focus Polish:
    // When the user switches to another tab, show a friendly status.
    // When they return, restore the exact SEO title.
    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle = document.title;
        document.title = "👋 Let’s build something | Cookie Inc.";
      } else {
        if (originalTitle) {
          document.title = originalTitle;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (animationTimer) clearInterval(animationTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return {
    setFaviconState,
    triggerPromptFavicon,
  };
}

// Attach to window for quick dev console testing
if (typeof window !== "undefined") {
  window.__setFaviconState = setFaviconState;
  window.__triggerPromptFavicon = triggerPromptFavicon;
}

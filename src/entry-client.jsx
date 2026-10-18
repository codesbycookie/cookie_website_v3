import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./index.css";

// Client-only: Subtle cursor spotlight on interactive cards
if (typeof window !== "undefined") {
  document.addEventListener(
    "pointermove",
    (e) => {
      const card = e.target.closest?.(".interactive-card, .bento");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
    { passive: true }
  );

  // Client-only: Subtle scroll reveal for below-the-fold blocks
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    const scan = () => {
      document
        .querySelectorAll(".rv-item:not([data-rv]), article:not([data-rv]), .interactive-card:not([data-rv])")
        .forEach((el, i) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("is-in");
            return;
          }
          el.dataset.rv = "1";
          el.style.setProperty("--rv-delay", `${(i % 3) * 60}ms`);
          el.classList.add("rv");
          io.observe(el);
        });
    };
    let scanTimer = null;
    const scheduleScan = () => {
      if (scanTimer) clearTimeout(scanTimer);
      scanTimer = setTimeout(() => {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(scan, { timeout: 800 });
        } else {
          requestAnimationFrame(scan);
        }
      }, 200);
    };

    const rootEl = document.getElementById("root");
    if (rootEl) {
      new MutationObserver(scheduleScan).observe(rootEl, { childList: true, subtree: true });
    }
    scheduleScan();
  }
}

const container = document.getElementById("root");

const appElement = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const hasSsrContent =
  container &&
  container.firstElementChild !== null &&
  !container.innerHTML.includes("<!--ssr-outlet-->");

if (hasSsrContent) {
  ReactDOM.hydrateRoot(container, appElement);
} else if (container) {
  ReactDOM.createRoot(container).render(appElement);
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";
import "./index.css";

// Linear-style cursor spotlight on cards (delegated, CSS-variable driven)
document.addEventListener(
  "pointermove",
  (e) => {
    const card = e.target.closest?.(".bento");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  },
  { passive: true }
);

// Scroll reveal for below-the-fold blocks
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
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );
  const scan = () => {
    document
      .querySelectorAll(".bento:not([data-rv]), section h2:not([data-rv]), dl > div:not([data-rv])")
      .forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible
        el.dataset.rv = "1";
        el.style.setProperty("--rv-delay", `${(i % 4) * 70}ms`);
        el.classList.add("rv");
        io.observe(el);
      });
  };
  new MutationObserver(scan).observe(document.getElementById("root"), { childList: true, subtree: true });
  scan();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

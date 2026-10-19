import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ROUTE_META = {
  "/": {
    title: "Cookie Inc. — Chennai-based Software Studio",
    desc: "We build websites, mobile apps, and custom tools that help ambitious companies grow. Shipped by engineers in Chennai.",
  },
  "/work": {
    title: "Selected work | Cookie Inc.",
    desc: "Real software shipped for real businesses. Production web apps, mobile products, and systems delivered by engineers in Chennai.",
  },
  "/portfolio": {
    title: "Selected work | Cookie Inc.",
    desc: "Real software shipped for real businesses. Production web apps, mobile products, and systems delivered by engineers in Chennai.",
  },
  "/services": {
    title: "Services & Defined Packages | Cookie Inc.",
    desc: "Transparent software packages and capabilities for ambitious businesses. Websites, mobile apps, and custom business tools.",
  },
  "/service": {
    title: "Services & Defined Packages | Cookie Inc.",
    desc: "Transparent software packages and capabilities for ambitious businesses. Websites, mobile apps, and custom business tools.",
  },
  "/about": {
    title: "About the studio | Cookie Inc.",
    desc: "We started Cookie Inc. to give ambitious businesses dependable software without agency overhead or unnecessary complexity. A focused studio in Chennai dedicated to craft.",
  },
  "/about-us": {
    title: "About the studio | Cookie Inc.",
    desc: "We started Cookie Inc. to give ambitious businesses dependable software without agency overhead or unnecessary complexity. A focused studio in Chennai dedicated to craft.",
  },
  "/contact": {
    title: "Start a Project | Cookie Inc.",
    desc: "Tell us about what you want to build. We reply within 1 business day with clear recommendations and a realistic quote.",
  },
  "/contact-us": {
    title: "Start a Project | Cookie Inc.",
    desc: "Tell us about what you want to build. We reply within 1 business day with clear recommendations and a realistic quote.",
  },
  "/countdown": {
    title: "Studio Launch Preview | Cookie Inc.",
    desc: "Something new is launching soon from Cookie Inc. Sign up for early access to our next studio platform.",
  },
  "/privacy": {
    title: "Privacy Policy | Cookie Inc.",
    desc: "Cookie Inc. privacy practices and data commitments.",
  },
  "/terms": {
    title: "Terms of Service | Cookie Inc.",
    desc: "Standard terms and conditions governing Cookie Inc. studio engagements.",
  },
  "/work/torque-toyzz": {
    title: "Torque Toyzz Case Study | Cookie Inc.",
    desc: "Instant WhatsApp E-Commerce platform for Torque Toyzz. 3.4x higher checkout rate, delivered in 14 days.",
  },
  "/work/iq-bridge": {
    title: "IQ Bridge Case Study | Cookie Inc.",
    desc: "EdTech portfolio platform for IQ Bridge. 14 countries reached, delivered in 21 days.",
  },
  "/work/audnex": {
    title: "Audnex Case Study | Cookie Inc.",
    desc: "Creative studio showcase for Audnex. 100% client retention, delivered in 28 days.",
  },
  "/work/sap-checklist": {
    title: "SAP Checklist Portal Case Study | Cookie Inc.",
    desc: "Enterprise operations management and compliance portal for SAP Consulting Group. Delivered in 42 days.",
  },
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] || ROUTE_META["/"] || {};
    if (typeof document === "undefined") return;

    if (meta.title) {
      document.title = meta.title;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", meta.title);
    }
    if (meta.desc) {
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute("content", meta.desc);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", meta.desc);
    }

    const currentUrl = `https://cookie-website-v3.onrender.com${pathname === "/" ? "" : pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", currentUrl);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", currentUrl);
    }
  }, [pathname]);

  return null;
}

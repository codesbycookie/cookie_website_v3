import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://cookieinc.in";

export const CANONICAL_PATH_MAP = {
  "/portfolio": "/work",
  "/service": "/services",
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/work/chitu-vibes": "/work/chithu-vibes",
  "/work/sap-erp-application": "/work/sap-scholar",
  "/work/sap-checklist-portal": "/work/sap-checklist",
  "/case-studies/torque-toyzz": "/work/torque-toyzz",
  "/case-studies/iq-bridge": "/work/iq-bridge",
  "/case-studies/chithu-vibes": "/work/chithu-vibes",
  "/case-studies/chitu-vibes": "/work/chithu-vibes",
  "/case-studies/sap-scholar": "/work/sap-scholar",
  "/case-studies/sap-erp-application": "/work/sap-scholar",
  "/case-studies/sap-checklist": "/work/sap-checklist",
  "/case-studies/sap-checklist-portal": "/work/sap-checklist",
  "/case-studies/audnex": "/work/audnex",
};

export function resolveCanonicalPath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return CANONICAL_PATH_MAP[pathname] || pathname;
}

export const ROUTE_META = {
  "/": {
    title: "Websites, Apps & Software in Chennai | Cookie Inc.",
    desc: "We design and build websites, mobile apps, and custom business software in Chennai. Fixed timelines, clear pricing, and direct access to our founders.",
  },
  "/work": {
    title: "Our Work & Client Case Studies | Cookie Inc.",
    desc: "See the websites, e-learning platforms, mini-commerce stores, and mobile apps we have built for businesses and institutes.",
  },
  "/portfolio": {
    title: "Our Work & Client Case Studies | Cookie Inc.",
    desc: "See the websites, e-learning platforms, mini-commerce stores, and mobile apps we have built for businesses and institutes.",
  },
  "/services": {
    title: "Web Design, Mobile Apps & Software | Cookie Inc.",
    desc: "Websites, online stores, Android & iOS apps, branding, and staff software built in Chennai with fixed timelines and clear pricing.",
  },
  "/service": {
    title: "Web Design, Mobile Apps & Software | Cookie Inc.",
    desc: "Websites, online stores, Android & iOS apps, branding, and staff software built in Chennai with fixed timelines and clear pricing.",
  },
  "/about": {
    title: "About Cookie Inc. | Software Studio in Chennai",
    desc: "Meet Cookie Inc., a Chennai software studio helping business owners, institutes, and shops launch websites, apps, and custom tools.",
  },
  "/about-us": {
    title: "About Cookie Inc. | Software Studio in Chennai",
    desc: "Meet Cookie Inc., a Chennai software studio helping business owners, institutes, and shops launch websites, apps, and custom tools.",
  },
  "/contact": {
    title: "Contact Us for a Free Quote | Cookie Inc. Chennai",
    desc: "Tell us what you want to build. We reply within 24 hours with honest advice, a realistic timeline, and a clear quote.",
  },
  "/contact-us": {
    title: "Contact Us for a Free Quote | Cookie Inc. Chennai",
    desc: "Tell us what you want to build. We reply within 24 hours with honest advice, a realistic timeline, and a clear quote.",
  },
  "/privacy": {
    title: "Privacy Policy | Cookie Inc.",
    desc: "How Cookie Inc. protects your contact details and project information.",
  },
  "/terms": {
    title: "Terms of Service | Cookie Inc.",
    desc: "Clear terms and conditions for working with Cookie Inc. software studio.",
  },
  "/work/torque-toyzz": {
    title: "Torque Toyzz E-Commerce Case Study | Cookie Inc.",
    desc: "How we built a mobile-first RC vehicle catalog with instant search and direct WhatsApp ordering for Torque Toyzz.",
  },
  "/work/iq-bridge": {
    title: "IQ Bridge E-Learning Case Study | Cookie Inc.",
    desc: "How we designed and built a student-focused e-learning website for IQ Bridge, founded by IIT and IIM alumni.",
  },
  "/work/chithu-vibes": {
    title: "Chithu Vibes Mini-Commerce Case Study | Cookie Inc.",
    desc: "How we built a custom mini-commerce website for Chithu Vibes to showcase laser-crafted Tamil heritage products.",
  },
  "/work/sap-scholar": {
    title: "SAP Scholar Student App Case Study | Cookie Inc.",
    desc: "How we built an Android app for Sampath Academy of Physics in North Chennai to track attendance, marks, and fees.",
  },
  "/work/sap-checklist": {
    title: "SAP Checklist Employee Software Case Study | Cookie Inc.",
    desc: "How we built a web-based staff and task management tool for Sampath Academy of Physics in North Chennai.",
  },
  "/work/audnex": {
    title: "Audnex Landing Page Case Study | Cookie Inc.",
    desc: "How we designed and built a clean, modern, mobile-friendly landing page for Audnex.",
  },
};

export default function SEO({ title, description } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalPath = resolveCanonicalPath(pathname);
    const meta = ROUTE_META[pathname] || ROUTE_META[canonicalPath] || ROUTE_META["/"] || {};
    if (typeof document === "undefined") return;

    const resolvedTitle = title || meta.title;
    const resolvedDesc = description || meta.desc;

    if (resolvedTitle) {
      document.title = resolvedTitle;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", resolvedTitle);
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", resolvedTitle);
    }
    if (resolvedDesc) {
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute("content", resolvedDesc);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", resolvedDesc);
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute("content", resolvedDesc);
    }

    const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }
  }, [pathname, title, description]);

  return null;
}

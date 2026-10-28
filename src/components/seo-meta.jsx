import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://cookieinc.in";

/**
 * Maps alias routes to their canonical primary path so Google Search Console
 * never flags duplicate content across alias routes.
 */
export const CANONICAL_PATH_MAP = {
  "/portfolio": "/work",
  "/service": "/services",
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/case-studies/sap-erp-application": "/work/sap-erp-application",
  "/case-studies/chitu-vibes": "/work/chitu-vibes",
  "/case-studies/sap-checklist-portal": "/work/sap-checklist-portal",
  "/case-studies/torque-toyzz": "/work/torque-toyzz",
};

export function resolveCanonicalPath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return CANONICAL_PATH_MAP[pathname] || pathname;
}

export const ROUTE_META = {
  "/": {
    title: "Cookie Inc. — Chennai-based Software Studio",
    desc: "We build websites, mobile apps, and custom tools that help ambitious companies grow. Shipped by engineers in Chennai.",
  },
  "/work": {
    title: "Selected Work & Case Studies | Cookie Inc.",
    desc: "Real software shipped for real businesses. Production web apps, mobile products, and systems delivered by engineers in Chennai.",
  },
  "/portfolio": {
    title: "Selected Work & Case Studies | Cookie Inc.",
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
    title: "About the Studio | Cookie Inc.",
    desc: "We started Cookie Inc. to give ambitious businesses dependable software without agency overhead or unnecessary complexity. A focused studio in Chennai dedicated to craft.",
  },
  "/about-us": {
    title: "About the Studio | Cookie Inc.",
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
  "/privacy": {
    title: "Privacy Policy | Cookie Inc.",
    desc: "Cookie Inc. privacy practices and data commitments.",
  },
  "/terms": {
    title: "Terms of Service | Cookie Inc.",
    desc: "Standard terms and conditions governing Cookie Inc. studio engagements.",
  },
  "/work/sap-erp-application": {
    title: "SAP ERP Campus Application Case Study | Cookie Inc.",
    desc: "A student-focused SAP ERP mobile application designed to streamline academic records, real-time fee verifications, and faculty communication.",
  },
  "/case-studies/sap-erp-application": {
    title: "SAP ERP Campus Application Case Study | Cookie Inc.",
    desc: "A student-focused SAP ERP mobile application designed to streamline academic records, real-time fee verifications, and faculty communication.",
  },
  "/work/chitu-vibes": {
    title: "Chitu Vibes E-Commerce Case Study | Cookie Inc.",
    desc: "A rapid online catalog and storefront built for a leading retailer of remote-controlled models, featuring instant mobile search and 1-tap WhatsApp checkout.",
  },
  "/case-studies/chitu-vibes": {
    title: "Chitu Vibes E-Commerce Case Study | Cookie Inc.",
    desc: "A rapid online catalog and storefront built for a leading retailer of remote-controlled models, featuring instant mobile search and 1-tap WhatsApp checkout.",
  },
  "/work/sap-checklist-portal": {
    title: "SAP Checklist Portal Case Study | Cookie Inc.",
    desc: "A centralized verification gateway for enterprise SAP consultants to manage tasks across multi-module configuration, testing, and cutover.",
  },
  "/case-studies/sap-checklist-portal": {
    title: "SAP Checklist Portal Case Study | Cookie Inc.",
    desc: "A centralized verification gateway for enterprise SAP consultants to manage tasks across multi-module configuration, testing, and cutover.",
  },
  "/work/torque-toyzz": {
    title: "Torque Toyzz Case Study | Cookie Inc.",
    desc: "A fast online catalog built for a premium remote-controlled model retailer with direct WhatsApp ordering and automated customer engagement.",
  },
  "/case-studies/torque-toyzz": {
    title: "Torque Toyzz Case Study | Cookie Inc.",
    desc: "A fast online catalog built for a premium remote-controlled model retailer with direct WhatsApp ordering and automated customer engagement.",
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

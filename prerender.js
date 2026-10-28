import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://cookieinc.in";

const ROUTES = [
  "/",
  "/work",
  "/portfolio",
  "/services",
  "/service",
  "/about",
  "/about-us",
  "/contact",
  "/contact-us",
  "/privacy",
  "/terms",
  "/work/sap-erp-application",
  "/work/chitu-vibes",
  "/work/sap-checklist-portal",
  "/work/torque-toyzz",
  "/case-studies/sap-erp-application",
  "/case-studies/chitu-vibes",
  "/case-studies/sap-checklist-portal",
  "/case-studies/torque-toyzz",
];

const CANONICAL_PATH_MAP = {
  "/portfolio": "/work",
  "/service": "/services",
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/case-studies/sap-erp-application": "/work/sap-erp-application",
  "/case-studies/chitu-vibes": "/work/chitu-vibes",
  "/case-studies/sap-checklist-portal": "/work/sap-checklist-portal",
  "/case-studies/torque-toyzz": "/work/torque-toyzz",
};

const ROUTE_META = {
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

function injectMeta(html, url) {
  const canonicalPath = CANONICAL_PATH_MAP[url] || url;
  const meta = ROUTE_META[url] || ROUTE_META[canonicalPath] || ROUTE_META["/"];
  let res = html;
  if (meta.title) {
    res = res.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
    res = res.replace(/<meta\s+property=["']og:title["'][\s\S]*?\/>/i, `<meta property="og:title" content="${meta.title}" />`);
    res = res.replace(/<meta\s+name=["']twitter:title["'][\s\S]*?\/>/i, `<meta name="twitter:title" content="${meta.title}" />`);
  }
  if (meta.desc) {
    res = res.replace(/<meta\s+name=["']description["'][\s\S]*?\/>/i, `<meta name="description" content="${meta.desc}" />`);
    res = res.replace(/<meta\s+property=["']og:description["'][\s\S]*?\/>/i, `<meta property="og:description" content="${meta.desc}" />`);
    res = res.replace(/<meta\s+name=["']twitter:description["'][\s\S]*?\/>/i, `<meta name="twitter:description" content="${meta.desc}" />`);
  }
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  res = res.replace(/<link\s+rel=["']canonical["'][\s\S]*?\/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  res = res.replace(/<meta\s+property=["']og:url["'][\s\S]*?\/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  return res;
}

async function prerender() {
  const templatePath = path.resolve(__dirname, "dist/client/index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}. Run client build first.`);
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  // Preserve original template with <!--ssr-outlet--> for dynamic SSR runtime
  fs.writeFileSync(path.resolve(__dirname, "dist/client/_template.html"), template, "utf-8");
  const { render } = await import("./dist/server/entry-server.js");

  console.log(`> Pre-rendering ${ROUTES.length} routes for static & SSR hosting...`);

  for (const url of ROUTES) {
    let { html: appHtml } = render(url);
    // Strip non-critical image preloads emitted by React 19 SSR to preserve network bandwidth for CSS/JS
    appHtml = appHtml.replace(/<link rel="preload" as="image" href=".*?"\/>/g, "");
    let html = template.replace("<!--ssr-outlet-->", appHtml);
    html = injectMeta(html, url);

    const relativePath = url === "/" ? "index.html" : `${url.replace(/^\//, "")}/index.html`;
    const targetFile = path.resolve(__dirname, "dist/client", relativePath);

    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, html, "utf-8");
    console.log(`  ✓ Pre-rendered: ${url} -> dist/client/${relativePath}`);

    // Also emit flat .html file for hosts that match clean URLs without trailing slash directory indexes
    if (url !== "/") {
      const flatRelativePath = `${url.replace(/^\//, "")}.html`;
      const flatTargetFile = path.resolve(__dirname, "dist/client", flatRelativePath);
      fs.mkdirSync(path.dirname(flatTargetFile), { recursive: true });
      fs.writeFileSync(flatTargetFile, html, "utf-8");
      console.log(`  ✓ Pre-rendered: ${url} -> dist/client/${flatRelativePath}`);
    }
  }

  console.log("> Pre-rendering completed successfully.");
}

prerender().catch((err) => {
  console.error("> Pre-rendering failed:", err);
  process.exit(1);
});

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
  "/work/torque-toyzz",
  "/work/iq-bridge",
  "/work/chithu-vibes",
  "/work/sap-scholar",
  "/work/sap-checklist",
  "/work/audnex",
];

const CANONICAL_PATH_MAP = {
  "/portfolio": "/work",
  "/service": "/services",
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/work/chitu-vibes": "/work/chithu-vibes",
  "/work/sap-erp-application": "/work/sap-scholar",
  "/work/sap-checklist-portal": "/work/sap-checklist",
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
  "/work/torque-toyzz": {
    title: "Torque Toyzz — E-Commerce Platform Case Study | Cookie Inc.",
    desc: "Mobile-first RC commerce catalog with immediate product search and direct WhatsApp order confirmation, simplifying the buying flow for mobile shoppers.",
  },
  "/work/iq-bridge": {
    title: "IQ Bridge — E-Learning Platform Case Study | Cookie Inc.",
    desc: "Digital learning platform founded by IIT and IIM alumni presenting academic expertise, educational vision, and student-focused online guidance.",
  },
  "/work/chithu-vibes": {
    title: "Chithu Vibes — Mini Commerce Case Study | Cookie Inc.",
    desc: "Mini-commerce storefront blending the richness of Tamil heritage with modern laser craftsmanship in an engaging digital shopping experience.",
  },
  "/work/sap-scholar": {
    title: "SAP Scholar — Student App Case Study | Cookie Inc.",
    desc: "Android application for Sampath Academy of Physics in North Chennai to track attendance, view marks, manage fee details, and access learning materials.",
  },
  "/work/sap-checklist": {
    title: "SAP Checklist — Employee Management Software Case Study | Cookie Inc.",
    desc: "Web-based employee management software for Sampath Academy of Physics to organize staff records, monitor tasks, and streamline administrative workflows.",
  },
  "/work/audnex": {
    title: "Audnex — Landing Page Case Study | Cookie Inc.",
    desc: "Clean, modern, and responsive landing page designed to communicate Audnex's brand identity, value proposition, and online authority.",
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
  fs.writeFileSync(path.resolve(__dirname, "dist/client/_template.html"), template, "utf-8");
  const { render } = await import("./dist/server/entry-server.js");

  console.log(`> Pre-rendering ${ROUTES.length} routes for static & SSR hosting...`);

  for (const url of ROUTES) {
    let { html: appHtml } = render(url);
    appHtml = appHtml.replace(/<link rel="preload" as="image" href=".*?"\/>/g, "");
    let html = template.replace("<!--ssr-outlet-->", appHtml);
    html = injectMeta(html, url);

    const relativePath = url === "/" ? "index.html" : `${url.replace(/^\//, "")}/index.html`;
    const targetFile = path.resolve(__dirname, "dist/client", relativePath);

    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, html, "utf-8");
    console.log(`  ✓ Pre-rendered: ${url} -> dist/client/${relativePath}`);

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

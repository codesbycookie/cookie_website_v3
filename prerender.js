import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  "/countdown",
  "/privacy",
  "/terms",
  "/work/iq-bridge",
  "/work/audnex",
  "/work/sap-checklist",
  "/work/torque-toyzz",
];

const ROUTE_META = {
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

function injectMeta(html, url) {
  const meta = ROUTE_META[url] || ROUTE_META["/"];
  let res = html;
  if (meta.title) {
    res = res.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
    res = res.replace(/<meta\s+property=["']og:title["'][\s\S]*?\/>/i, `<meta property="og:title" content="${meta.title}" />`);
  }
  if (meta.desc) {
    res = res.replace(/<meta\s+name=["']description["'][\s\S]*?\/>/i, `<meta name="description" content="${meta.desc}" />`);
    res = res.replace(/<meta\s+property=["']og:description["'][\s\S]*?\/>/i, `<meta property="og:description" content="${meta.desc}" />`);
  }
  const currentUrl = `https://cookie-website-v3.onrender.com${url === "/" ? "" : url}`;
  res = res.replace(/<link\s+rel=["']canonical["'][\s\S]*?\/>/i, `<link rel="canonical" href="${currentUrl}" />`);
  res = res.replace(/<meta\s+property=["']og:url["'][\s\S]*?\/>/i, `<meta property="og:url" content="${currentUrl}" />`);
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

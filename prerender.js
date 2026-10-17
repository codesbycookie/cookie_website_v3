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
    title: "Selected Work — Cookie Inc.",
    desc: "Case studies of web apps, mobile products, and systems shipped for real business clients across industries.",
  },
  "/portfolio": {
    title: "Selected Work — Cookie Inc.",
    desc: "Case studies of web apps, mobile products, and systems shipped for real business clients across industries.",
  },
  "/services": {
    title: "Services & Defined Packages — Cookie Inc.",
    desc: "Transparent software packages and capabilities for ambitious businesses. Websites, mobile apps, and custom business tools.",
  },
  "/service": {
    title: "Services & Defined Packages — Cookie Inc.",
    desc: "Transparent software packages and capabilities for ambitious businesses. Websites, mobile apps, and custom business tools.",
  },
  "/about": {
    title: "About the Studio — Cookie Inc.",
    desc: "A focused software studio in Chennai. You collaborate directly with senior creators—no middlemen, no runaround.",
  },
  "/about-us": {
    title: "About the Studio — Cookie Inc.",
    desc: "A focused software studio in Chennai. You collaborate directly with senior creators—no middlemen, no runaround.",
  },
  "/contact": {
    title: "Start a Project — Cookie Inc.",
    desc: "Tell us about what you want to build. We reply within 1 business day with clear recommendations and a realistic quote.",
  },
  "/contact-us": {
    title: "Start a Project — Cookie Inc.",
    desc: "Tell us about what you want to build. We reply within 1 business day with clear recommendations and a realistic quote.",
  },
  "/countdown": {
    title: "Studio Launch Preview — Cookie Inc.",
    desc: "Something new is launching soon from Cookie Inc. Sign up for early access to our next studio platform.",
  },
  "/privacy": {
    title: "Privacy Policy — Cookie Inc.",
    desc: "Cookie Inc. privacy practices and data commitments.",
  },
  "/terms": {
    title: "Terms of Service — Cookie Inc.",
    desc: "Standard terms and conditions governing Cookie Inc. studio engagements.",
  },
  "/work/iq-bridge": {
    title: "IQ Bridge Case Study — Cookie Inc.",
    desc: "Educational ecosystem connecting universities, recruiters, and learners with live analytics.",
  },
  "/work/audnex": {
    title: "Audnex Case Study — Cookie Inc.",
    desc: "Next-gen audio streaming web and mobile application designed for audiophiles.",
  },
  "/work/sap-checklist": {
    title: "SAP Checklist Case Study — Cookie Inc.",
    desc: "Enterprise audit, compliance, and workflow automation portal for industrial operations.",
  },
  "/work/torque-toyzz": {
    title: "Torque Toyzz Case Study — Cookie Inc.",
    desc: "High-octane e-commerce platform and community hub for premium die-cast scale models.",
  },
};

function injectMeta(html, url) {
  const meta = ROUTE_META[url] || ROUTE_META["/"];
  let res = html;
  if (meta.title) {
    res = res.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
    res = res.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${meta.title}" />`);
  }
  if (meta.desc) {
    res = res.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${meta.desc}" />`);
    res = res.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${meta.desc}" />`);
  }
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
  }

  console.log("> Pre-rendering completed successfully.");
}

prerender().catch((err) => {
  console.error("> Pre-rendering failed:", err);
  process.exit(1);
});

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  "/",
  "/work",
  "/about",
  "/contact",
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
    desc: "We build web apps, mobile apps, UI/UX systems, branding, and digital growth engines with speed, taste, and precision.",
  },
  "/work": {
    title: "Selected Work — Cookie Inc.",
    desc: "Case studies of web apps, mobile products, and systems shipped for clients across industries.",
  },
  "/about": {
    title: "About — Cookie Inc.",
    desc: "A focused software studio in Chennai. Engineering depth meets high-taste design.",
  },
  "/contact": {
    title: "Start a Project — Cookie Inc.",
    desc: "Tell us what you're building. We reply with technical scope and a realistic quote within 24 hours.",
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
    const { html: appHtml } = render(url);
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

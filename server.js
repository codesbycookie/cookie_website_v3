import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production" || (!process.env.NODE_ENV && fs.existsSync(path.resolve(__dirname, "dist/server/entry-server.js")));
const PORT = process.env.PORT || 5199;

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

export async function createServer() {
  const app = express();
  let vite;

  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import("express")).default;
    // Serve static files from dist/client
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false,
        maxAge: "1d",
      })
    );
  }

  // Handle all routes with SSR
  app.use(async (req, res, next) => {
    // Skip static assets or non-GET requests if handled by other middlewares
    if (req.method !== "GET") return next();
    const url = req.originalUrl.split("?")[0];

    try {
      let template;
      let render;

      if (isProduction) {
        // Fast path: serve pre-rendered HTML if available
        const cleanPath = url === "/" ? "index.html" : `${url.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
        const prerenderedPath = path.resolve(__dirname, "dist/client", cleanPath);
        if (fs.existsSync(prerenderedPath)) {
          return res.status(200).set({ "Content-Type": "text/html" }).send(fs.readFileSync(prerenderedPath, "utf-8"));
        }

        const templateFile = fs.existsSync(path.resolve(__dirname, "dist/client/_template.html"))
          ? path.resolve(__dirname, "dist/client/_template.html")
          : path.resolve(__dirname, "dist/client/index.html");
        template = fs.readFileSync(templateFile, "utf-8");
        render = (await import("./dist/server/entry-server.js")).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
      }

      const { html: appHtml } = render(url);
      let html = template.replace("<!--ssr-outlet-->", appHtml);
      html = injectMeta(html, url);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error(`SSR Error at ${url}:`, e);
      next(e);
    }
  });

  return { app, vite };
}

createServer().then(({ app }) => {
  app.listen(PORT, () => {
    console.log(`> Cookie Inc. SSR server running at http://localhost:${PORT} [${isProduction ? "production" : "development"}]`);
  });
});

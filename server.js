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

import zlib from "node:zlib";

function compressAndSend(req, res, content, contentType = "text/html; charset=utf-8") {
  const acceptEncoding = req.headers["accept-encoding"] || "";
  res.setHeader("Content-Type", contentType);

  // Compress if larger than 1KB
  const buf = Buffer.isBuffer(content) ? content : Buffer.from(content, "utf-8");
  if (buf.length > 1024) {
    if (acceptEncoding.includes("br")) {
      res.setHeader("Content-Encoding", "br");
      return res.end(zlib.brotliCompressSync(buf));
    } else if (acceptEncoding.includes("gzip")) {
      res.setHeader("Content-Encoding", "gzip");
      return res.end(zlib.gzipSync(buf));
    }
  }
  return res.end(buf);
}

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
    // 1-year immutable caching for fingerprinted production bundles in /assets/
    app.use(
      "/assets",
      express.static(path.resolve(__dirname, "dist/client/assets"), {
        immutable: true,
        maxAge: "1y",
      })
    );

    // 1-day caching for static icons, public images
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false,
        redirect: false,
        maxAge: "1d",
      })
    );
  }

  // Handle all routes with SSR
  app.use(async (req, res, next) => {
    // Skip static assets or non-GET/HEAD requests if handled by other middlewares
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    const url = req.originalUrl.split("?")[0];

    try {
      let template;
      let render;

      if (isProduction) {
        // Fast path: serve pre-rendered HTML if available
        const cleanPath = url === "/" ? "index.html" : `${url.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
        const flatPath = url === "/" ? "index.html" : `${url.replace(/^\//, "").replace(/\/$/, "")}.html`;
        const prerenderedPath = path.resolve(__dirname, "dist/client", cleanPath);
        const prerenderedFlatPath = path.resolve(__dirname, "dist/client", flatPath);

        if (fs.existsSync(prerenderedPath)) {
          const content = fs.readFileSync(prerenderedPath, "utf-8");
          return compressAndSend(req, res, content);
        }
        if (fs.existsSync(prerenderedFlatPath)) {
          const content = fs.readFileSync(prerenderedFlatPath, "utf-8");
          return compressAndSend(req, res, content);
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

      return compressAndSend(req, res, html);
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
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`> Cookie Inc. SSR server running at http://localhost:${PORT} [${isProduction ? "production" : "development"}]`);
  });
});

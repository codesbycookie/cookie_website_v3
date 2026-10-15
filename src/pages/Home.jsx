import React from "react";
import { Link } from "react-router-dom";
import { homepage } from "../data/data";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import Accordion from "../components/shared/Accordion";
import StudioWindow from "../components/shared/StudioWindow";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  Palette,
} from "lucide-react";

const CLIENTS = ["IQ Bridge", "V&D Granite", "Torque Toyzz", "Skill Link", "Audnex", "Traffic", "Tourist", "How to Cook"];

const PILLARS = [
  {
    n: "01",
    title: "Designed with intent",
    desc: "Every screen is drawn around a business goal. No decoration that does not earn its place.",
  },
  {
    n: "02",
    title: "Engineered to last",
    desc: "Clean component architecture, fast by default, and documented so your team can own it.",
  },
  {
    n: "03",
    title: "Delivered in weeks",
    desc: "Tight sprints, a live preview from week one, and a founder on every call.",
  },
];

const STEPS = [
  { n: "01", title: "Discover", desc: "A focused call to map goals, users and the shortest path to launch.", time: "Days 1-3" },
  { n: "02", title: "Design", desc: "Wireframes to polished UI in a shared prototype you can click through.", time: "Week 1" },
  { n: "03", title: "Build", desc: "Weekly releases to a live preview. You see progress, not status reports.", time: "Weeks 2-3" },
  { n: "04", title: "Launch", desc: "Deploy, monitor and support. We stay on after go-live.", time: "Week 4+" },
];

const STATS = [
  { value: "40+", label: "Products shipped" },
  { value: "3 wks", label: "Typical MVP" },
  { value: "98", label: "Avg Lighthouse score" },
  { value: "<24h", label: "First reply" },
];

export default function Home() {
  const { reviews, projects } = homepage.section6;

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden bg-[#08090A]">
      {/* 1. Hero */}
      <section className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col items-center text-center px-5 sm:px-8">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#D9A55B]/10 blur-[160px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <Link
          to="/portfolio"
          className="reveal relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.09] hover:border-white/20 text-[13px] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors mb-8 group"
        >
          <span className="font-semibold text-[#D9A55B]">New</span>
          <span>40+ products shipped from Chennai</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <h1 className="reveal gradient-text relative text-[42px] sm:text-[60px] md:text-[76px] font-medium tracking-[-0.04em] leading-[1.04] max-w-4xl mb-6" style={{ animationDelay: "60ms" }}>
          The software studio for businesses that move fast
        </h1>

        <p className="reveal relative text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed mb-10" style={{ animationDelay: "120ms" }}>
          Cookie Inc. designs and builds websites, mobile apps and ERP systems. Purpose-built for founders who want to launch in weeks, not quarters.
        </p>

        <div className="reveal relative flex flex-col sm:flex-row items-center gap-3 mb-5" style={{ animationDelay: "180ms" }}>
          <Button to="/contact-us" variant="primary" size="lg">Start a project</Button>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 h-12 px-5 text-[15px] font-medium text-[#8A8F98] hover:text-[#F4F4F6] transition-colors"
          >
            See our work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="reveal relative text-[12px] font-mono text-[#62666D] mb-16" style={{ animationDelay: "220ms" }}>
          Free discovery call · Reply within 24 hours
        </div>

        <div className="reveal relative w-full max-w-5xl" style={{ animationDelay: "280ms" }}>
          <StudioWindow />
        </div>
      </section>

      {/* 2. Client strip */}
      <section className="w-full hairline-y py-14 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[13px] text-[#62666D] mb-8">Trusted by founders and teams across India</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {CLIENTS.map((c) => (
              <li key={c} className="text-[17px] font-medium tracking-tight text-[#8A8F98] hover:text-[#F4F4F6] transition-colors">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Manifesto */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-5 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
            How we work
          </div>
          <h2 className="gradient-text text-[30px] sm:text-[44px] md:text-[56px] font-medium tracking-[-0.03em] leading-[1.1] mb-16 max-w-4xl">
            Great products come from small teams with high standards. We are that team, working as an extension of yours.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] rounded-[14px] overflow-hidden border border-white/[0.07]">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-[#08090A] p-8 md:p-10 hover:bg-white/[0.02] transition-colors">
                <span className="font-mono text-[12px] text-[#D9A55B]">{p.n}</span>
                <h3 className="text-[20px] font-medium text-[#F4F4F6] mt-4 mb-3 tracking-tight">{p.title}</h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bento features */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            eyebrow="What we build"
            title="Everything your product needs,"
            highlight="under one roof"
            description="Strategy, design and engineering in a single studio, so nothing gets lost in handoffs."
          />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Web */}
            <article className="bento md:col-span-4 rounded-[16px] p-7 md:p-9 flex flex-col justify-between min-h-[320px] overflow-hidden relative">
              <div>
                <span className="inline-flex w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 items-center justify-center text-[#D9A55B] mb-5"><Globe className="w-4 h-4" /></span>
                <h3 className="text-[22px] font-medium text-[#F4F4F6] tracking-tight mb-2">Websites and web apps</h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed max-w-md">Fast, accessible, SEO-ready sites and dashboards built on modern React. Designed to convert from the first scroll.</p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 font-mono text-[11px]">
                {[
                  { k: "Performance", v: 98 },
                  { k: "Accessibility", v: 100 },
                  { k: "SEO", v: 100 },
                ].map((m) => (
                  <div key={m.k} className="rounded-[10px] bg-black/30 border border-white/[0.07] p-3">
                    <div className="text-[#59D499] text-[22px] font-medium tracking-tight">{m.v}</div>
                    <div className="text-[#62666D] mt-1">{m.k}</div>
                  </div>
                ))}
              </div>
            </article>

            {/* Mobile */}
            <article className="bento md:col-span-2 rounded-[16px] p-7 md:p-9 flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="inline-flex w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 items-center justify-center text-[#57C1FF] mb-5"><Smartphone className="w-4 h-4" /></span>
                <h3 className="text-[22px] font-medium text-[#F4F4F6] tracking-tight mb-2">Mobile apps</h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">Native-feel iOS and Android apps with one codebase.</p>
              </div>
              <div className="mt-8 flex items-end gap-2 h-20" aria-hidden="true">
                {[40, 64, 48, 80, 56, 72].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-[4px] bg-gradient-to-t from-[#57C1FF]/10 to-[#57C1FF]/60" style={{ height: `${h}%` }} />
                ))}
              </div>
            </article>

            {/* ERP */}
            <article className="bento md:col-span-2 rounded-[16px] p-7 md:p-9 flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="inline-flex w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 items-center justify-center text-[#D3B2FF] mb-5"><Database className="w-4 h-4" /></span>
                <h3 className="text-[22px] font-medium text-[#F4F4F6] tracking-tight mb-2">ERP and internal tools</h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">Replace spreadsheets with software shaped around your workflow.</p>
              </div>
              <div className="mt-8 space-y-2 font-mono text-[11px]" aria-hidden="true">
                {[["INV-1042", "Paid", "#59D499"], ["INV-1043", "Due", "#FFC533"], ["INV-1044", "Draft", "#8A8F98"]].map(([id, s, c]) => (
                  <div key={id} className="flex items-center justify-between rounded-[8px] bg-black/30 border border-white/[0.07] px-3 py-2">
                    <span className="text-[#D0D6E0]">{id}</span>
                    <span style={{ color: c }}>{s}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Brand */}
            <article className="bento md:col-span-4 rounded-[16px] p-7 md:p-9 flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="inline-flex w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 items-center justify-center text-[#D9A55B] mb-5"><Palette className="w-4 h-4" /></span>
                <h3 className="text-[22px] font-medium text-[#F4F4F6] tracking-tight mb-2">Brand, UI/UX and growth</h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed max-w-md">Identity systems, product design and digital marketing that make your launch land.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-[12px]">
                {["Logo and identity", "Design systems", "UI/UX research", "SEO", "Social and ads", "Google My Business"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D0D6E0]">{t}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading
            eyebrow="Process"
            title="From first call to"
            highlight="live in four steps"
            description="A calm, predictable rhythm so you always know what ships next."
          />
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {STEPS.map((s) => (
              <li key={s.n} className="bento rounded-[16px] p-7 relative">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-mono text-[12px] text-[#D9A55B]">{s.n}</span>
                  <span className="font-mono text-[11px] text-[#62666D]">{s.time}</span>
                </div>
                <h3 className="text-[20px] font-medium text-[#F4F4F6] tracking-tight mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Stats */}
      <section className="w-full hairline-y py-20 px-5 sm:px-8">
        <dl className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="gradient-text text-[44px] md:text-[56px] font-medium tracking-[-0.03em] leading-none mb-2">{s.value}</dd>
              <p className="text-[13px] text-[#8A8F98]" aria-hidden="true">{s.label}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* 7. Selected work */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Selected work" title="Products we are proud of" description="A few recent launches, from edtech to heritage food brands." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <Link
                key={p.title}
                to="/portfolio"
                className="bento rounded-[16px] overflow-hidden group flex flex-col"
              >
                <div className="aspect-[4/3] bg-black/30 border-b border-white/[0.07] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-[17px] font-medium text-[#F4F4F6] tracking-tight mb-1.5">{p.title}</h3>
                    <p className="text-[14px] text-[#8A8F98] leading-relaxed">{p.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] text-[#D9A55B]">
                    View case study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Kind words" title="What founders say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.slice(0, 6).map((r) => (
              <figure key={r.name} className="bento rounded-[16px] p-7 flex flex-col justify-between gap-8">
                <blockquote className="text-[15px] text-[#D0D6E0] leading-relaxed">"{r.body.trim()}"</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={r.img} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </span>
                  <span>
                    <span className="block text-[14px] font-medium text-[#F4F4F6]">{r.name.trim()}</span>
                    <span className="block text-[12px] text-[#8A8F98]">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[820px] mx-auto">
          <SectionHeading eyebrow="FAQ" title={homepage.section8.title} />
          <Accordion items={homepage.section8.faqs} />
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section className="relative w-full hairline-y py-28 md:py-40 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D9A55B]/12 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[36px] sm:text-[52px] md:text-[64px] font-medium tracking-[-0.035em] leading-[1.05] mb-6">
            Built for the businesses you are about to become.
          </h2>
          <p className="text-[17px] text-[#8A8F98] mb-10 max-w-xl">
            Tell us what you are building. We will reply within a day with a plan, a timeline and a fixed quote.
          </p>
          <Button to="/contact-us" variant="primary" size="lg">Start a project</Button>
        </div>
      </section>
    </div>
  );
}

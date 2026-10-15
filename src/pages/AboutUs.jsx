import React from "react";
import { aboutpage } from "../data/data";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import { Sparkles, Terminal, Compass, Layers } from "lucide-react";

const ICONS = [Compass, Terminal, Layers, Sparkles];
const YEARS = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];

const VALUES = [
  { n: "10+", label: "Engineers and designers" },
  { n: "40+", label: "Products shipped" },
  { n: "7", label: "Years of craft" },
  { n: "100%", label: "In-house delivery" },
];

export default function AboutUs() {
  const chapters = aboutpage.section2.items;
  const pillars = aboutpage.section3.items;

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A]">
      {/* Hero */}
      <section className="relative w-full pt-24 pb-24 md:pt-32 md:pb-32 px-5 sm:px-8 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="reveal relative mb-6 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
          About Cookie Inc.
        </div>
        <h1 className="reveal gradient-text relative text-[40px] sm:text-[58px] md:text-[72px] font-medium tracking-[-0.04em] leading-[1.05] max-w-4xl mb-6" style={{ animationDelay: "60ms" }}>
          A small studio with an obsession for craft
        </h1>
        <p className="reveal relative text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed" style={{ animationDelay: "120ms" }}>
          {aboutpage.section1.subtitle}
        </p>
      </section>

      {/* Numbers */}
      <section className="w-full hairline-y py-16 px-5 sm:px-8">
        <dl className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {VALUES.map((v) => (
            <div key={v.label}>
              <dt className="sr-only">{v.label}</dt>
              <dd className="gradient-text text-[40px] md:text-[52px] font-medium tracking-[-0.03em] leading-none mb-2">{v.n}</dd>
              <p className="text-[13px] text-[#8A8F98]" aria-hidden="true">{v.label}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* Story timeline */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <div className="mb-5 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
                Our story
              </div>
              <h2 className="gradient-text text-[30px] sm:text-[40px] font-medium tracking-[-0.03em] leading-[1.1] mb-4">
                {aboutpage.section2.title}
              </h2>
              <p className="text-[15px] text-[#8A8F98] leading-relaxed">Seven chapters, from first sketches to a studio we are proud of.</p>
            </div>
          </div>

          <ol className="md:col-span-8 relative space-y-4 md:pl-8 md:border-l md:border-white/[0.08]">
            {chapters.map((c, i) => (
              <li key={c.title} className="relative bento rounded-[16px] p-7">
                <span className="hidden md:block absolute -left-[37px] top-8 w-2.5 h-2.5 rounded-full bg-[#08090A] border-2 border-[#D9A55B]" aria-hidden="true" />
                <div className="flex items-center gap-3 mb-3 font-mono text-[12px]">
                  <span className="text-[#D9A55B]">{YEARS[i] || ""}</span>
                  <span className="text-[#62666D]">·</span>
                  <span className="text-[#8A8F98]">{c.title}</span>
                </div>
                <p className="text-[15px] text-[#D0D6E0] leading-relaxed">{c.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full hairline-y py-24 md:py-36 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading eyebrow="Principles" title={aboutpage.section3.title} description={aboutpage.section3.tagline} />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {pillars.map((p, i) => {
              const Icon = ICONS[i] || Sparkles;
              const wide = p.className?.includes("col-span-2");
              return (
                <article key={p.title} className={`bento rounded-[16px] p-8 flex flex-col justify-between min-h-[240px] ${wide ? "md:col-span-4" : "md:col-span-2"}`}>
                  <div>
                    <span className="inline-flex w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 items-center justify-center text-[#D9A55B] mb-5">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-[20px] font-medium text-[#F4F4F6] tracking-tight mb-2">{p.title}</h3>
                    <p className="text-[14px] text-[#8A8F98] leading-relaxed max-w-md">{p.description}</p>
                  </div>
                  <span className="mt-6 font-mono text-[11px] text-[#62666D]">{p.header}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full hairline-y py-24 md:py-36 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#D9A55B]/12 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[34px] sm:text-[48px] font-medium tracking-[-0.03em] leading-[1.08] mb-5">
            {aboutpage.section4.hypertext}
          </h2>
          <p className="text-[16px] text-[#8A8F98] mb-9">Let us build the next chapter together.</p>
          <Button to="/contact" variant="primary" size="lg">Start a project</Button>
        </div>
      </section>
    </div>
  );
}

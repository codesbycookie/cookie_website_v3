import React from "react";
import { servicepage } from "../data/data";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import { Check, Globe, Database, Palette, Megaphone, Smartphone, Layers } from "lucide-react";

const SERVICE_ICONS = {
  "Web Development": Globe,
  "ERP Systems": Database,
  "UI/UX Design": Layers,
  "Digital Marketing": Megaphone,
  "Mobile Development": Smartphone,
  Branding: Palette,
};

const DELIVERY = [
  { n: "01", title: "Research", desc: "We learn your market, users and constraints before drawing a single screen." },
  { n: "02", title: "Design", desc: "Interactive prototypes you can test with real customers within days." },
  { n: "03", title: "Develop", desc: "Weekly builds on a live preview, with clean code your team can own." },
  { n: "04", title: "Delivery", desc: "Launch only when it meets your bar and ours, then support after go-live." },
];

export default function Services() {
  const { section1, section2, section4 } = servicepage;

  return (
    <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#08090A]">
      {/* Hero */}
      <section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-28 px-5 sm:px-8 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="reveal relative mb-6 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
          Services and pricing
        </div>
        <h1 className="reveal gradient-text relative text-[40px] sm:text-[58px] md:text-[72px] font-medium tracking-[-0.04em] leading-[1.05] max-w-4xl mb-6" style={{ animationDelay: "60ms" }}>
          {section1.title[0]} <span className="gradient-cream">{section1.title[1]}</span> {section1.title[2]}
        </h1>
        <p className="reveal relative text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed" style={{ animationDelay: "120ms" }}>
          {section1.subtitle}
        </p>
      </section>

      {/* Packages */}
      <section className="w-full hairline-y py-24 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Packages" title="Pick a starting point" description="Every package is fully customisable. Tell us what you need and we will tailor it." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {section2.packages.map((pkg, i) => {
              const featured = i === 1;
              return (
                <article
                  key={pkg.title}
                  className={`relative rounded-[16px] p-8 flex flex-col justify-between ${
                    featured
                      ? "bg-gradient-to-b from-[#D9A55B]/[0.09] to-white/[0.02] border border-[#D9A55B]/40 shadow-[0_0_60px_-24px_rgba(217,165,91,0.6)]"
                      : "bento"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-[#D9A55B] text-[#08090A] text-[11px] font-semibold tracking-tight">
                      Most popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-[22px] font-medium text-[#F4F4F6] tracking-tight mb-2">{pkg.title}</h3>
                    <p className="text-[14px] text-[#8A8F98] leading-relaxed mb-7 min-h-[44px]">{pkg.subtitle}</p>
                    <ul className="space-y-3 mb-9 pt-7 border-t border-white/[0.08]">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#D0D6E0]">
                          <Check className="w-4 h-4 text-[#D9A55B] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button to="/contact-us" variant={featured ? "primary" : "ghost"} size="md" className="w-full">
                    Get a quote
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery steps */}
      <section className="w-full hairline-y py-24 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="mb-5 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
                Process
              </div>
              <h2 className="gradient-text text-[30px] sm:text-[42px] font-medium tracking-[-0.03em] leading-[1.1] mb-4">Making of a masterpiece</h2>
              <p className="text-[15px] text-[#8A8F98] leading-relaxed">Every part of our process is built to fire straight at your goals.</p>
            </div>
          </div>
          <ol className="md:col-span-7 space-y-4">
            {DELIVERY.map((d) => (
              <li key={d.n} className="bento rounded-[16px] p-7 flex gap-6">
                <span className="font-mono text-[13px] text-[#D9A55B] pt-0.5">{d.n}</span>
                <div>
                  <h3 className="text-[19px] font-medium text-[#F4F4F6] tracking-tight mb-1.5">{d.title}</h3>
                  <p className="text-[14px] text-[#8A8F98] leading-relaxed">{d.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service grid */}
      <section className="w-full hairline-y py-24 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Capabilities" title={section4.title} description={section4.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section4.services.map((s) => {
              const Icon = SERVICE_ICONS[s.title] || Globe;
              return (
                <article key={s.title} className="bento rounded-[16px] p-7">
                  <span className="inline-flex w-9 h-9 rounded-[8px] bg-white/[0.06] border border-white/10 items-center justify-center text-[#D9A55B] mb-6">
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="text-[19px] font-medium text-[#F4F4F6] tracking-tight mb-2">{s.title}</h3>
                  <p className="text-[14px] text-[#8A8F98] leading-relaxed">{s.description.join(" ")}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full hairline-y py-28 md:py-36 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#D9A55B]/12 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[34px] sm:text-[48px] font-medium tracking-[-0.03em] leading-[1.08] mb-5">
            Not sure what you need yet?
          </h2>
          <p className="text-[16px] text-[#8A8F98] mb-9">Book a free call. We will recommend the leanest path to launch.</p>
          <Button to="/contact-us" variant="ghost" size="lg">Talk to us</Button>
        </div>
      </section>
    </div>
  );
}

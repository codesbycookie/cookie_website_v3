import React, { useState } from "react";
import { Link } from "react-router-dom";
import { portfoliopage } from "../data/data";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import Modal from "../components/shared/Modal";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const { section1, section2, section3, section4 } = portfoliopage;
  const [selected, setSelected] = useState(null);
  const [failed, setFailed] = useState({});

  // De-duplicate the image wall and drop any that fail to load
  const wall = Array.from(new Set(section2.images)).filter((src) => !failed[src]);
  const [featA, featB] = section2.content.images;
  const [nameA, descA, nameB, descB] = section2.content.project;

  const body = (study) =>
    typeof study.content === "function" ? study.content() : study.content;

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden bg-[#08090A]">
      {/* Hero */}
      <section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-28 px-5 sm:px-8 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-[#D9A55B]/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="reveal relative mb-6 inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-[#8A8F98]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A55B] shadow-[0_0_10px_#D9A55B]" />
          Portfolio
        </div>
        <h1 className="reveal gradient-text relative text-[40px] sm:text-[58px] md:text-[72px] font-medium tracking-[-0.04em] leading-[1.05] max-w-4xl mb-6" style={{ animationDelay: "60ms" }}>
          {section1.title[0]}
          <span className="gradient-cream">{section1.title[1]}</span>
          {section1.title[2]}
          <span className="gradient-cream">{section1.title[3]}</span>
        </h1>
        <p className="reveal relative text-[17px] sm:text-[20px] text-[#8A8F98] max-w-2xl leading-relaxed" style={{ animationDelay: "120ms" }}>
          {section1.subtitle}
        </p>
      </section>

      {/* Featured pair */}
      <section className="w-full hairline-y py-24 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Featured" title={section2.content.title} description={section2.content.tagline.join(" ")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { img: featA, name: nameA, desc: descA },
              { img: featB, name: nameB, desc: descB },
            ].map((f) => (
              <article key={f.name} className="bento rounded-[16px] overflow-hidden flex flex-col">
                <div className="aspect-[16/10] bg-black/30 border-b border-white/[0.07] flex items-center justify-center p-8">
                  <img src={f.img} alt={f.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-7">
                  <h3 className="text-[20px] font-medium text-[#F4F4F6] tracking-tight mb-2">{f.name}</h3>
                  <p className="text-[14px] text-[#8A8F98] leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image wall */}
      <section className="w-full hairline-y py-24 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Archive" title="A wall of shipped work" description="A glimpse of the interfaces we have designed and launched." />
          <div className="columns-2 md:columns-3 gap-4 [&>*]:mb-4">
            {wall.map((src) => (
              <div key={src} className="bento rounded-[14px] overflow-hidden break-inside-avoid p-2 bg-black/20">
                <img
                  src={src}
                  alt="Cookie Inc. project preview"
                  loading="lazy"
                  onError={() => setFailed((p) => ({ ...p, [src]: true }))}
                  className="w-full h-auto rounded-[10px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section className="relative w-full hairline-y py-24 md:py-32 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[260px] bg-[#D9A55B]/10 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[44px] sm:text-[64px] md:text-[80px] font-medium tracking-[-0.04em] leading-none mb-5">
            {section3.count}{section3.title.split(" ")[0]}
          </h2>
          <p className="text-[18px] text-[#D0D6E0] mb-3">{section3.title.split(" ").slice(1).join(" ")}</p>
          <p className="text-[15px] text-[#8A8F98] max-w-xl">{section3.subtitle}</p>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="w-full hairline-y py-24 md:py-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading eyebrow="Case studies" title={section4.title} description="Challenges, decisions and outcomes behind our client launches." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section4.cards.map((study) => (
              <button
                key={study.title}
                type="button"
                onClick={() => setSelected(study)}
                className="bento rounded-[16px] overflow-hidden text-left flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B]"
                aria-label={`Open case study: ${study.title}`}
              >
                <div className="aspect-[16/10] bg-black/30 border-b border-white/[0.07] overflow-hidden">
                  <img
                    src={study.src}
                    alt={study.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <h3 className="text-[17px] font-medium text-[#F4F4F6] tracking-tight mb-2">{study.title}</h3>
                    <p className="text-[14px] text-[#8A8F98] leading-relaxed line-clamp-3">{study.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] text-[#D9A55B]">
                    {study.ctaText} <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full hairline-y py-28 md:py-36 px-5 sm:px-8 text-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#D9A55B]/12 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="gradient-text text-[34px] sm:text-[48px] font-medium tracking-[-0.03em] leading-[1.08] mb-9">
            Your product could be next.
          </h2>
          <Button to="/contact-us" variant="primary" size="lg">{section3.button}</Button>
        </div>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div className="text-[15px] text-[#D0D6E0] leading-relaxed">
            <img src={selected.src} alt={selected.title} className="w-full rounded-[10px] border border-white/10 mb-5" />
            {body(selected)}
            <div className="mt-6">
              <Link to="/contact-us" onClick={() => setSelected(null)} className="inline-flex items-center gap-1.5 text-[14px] text-[#D9A55B] hover:text-[#F3D9A8] transition-colors">
                Start a similar project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

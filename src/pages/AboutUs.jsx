import React from "react";
import { Link } from "react-router-dom";
import { aboutpage } from "../data/data";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";
import {
  Users,
  Compass,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  MapPin,
  Check,
} from "lucide-react";

/**
 * About Us Page (Complete Redesign)
 * The one question: "Who is behind this studio, where are they, and will they care about my business?"
 * Client-first, warm, human, completely free of hacker/terminal styling.
 */
export default function AboutUs() {
  const chapters = aboutpage.section2.items;

  const PRINCIPLES = [
    {
      icon: Users,
      title: "Direct access to the creators",
      desc: "You talk directly with the designers and developers building your software. No account managers playing telephone, no unnecessary layers.",
      benefit: "Faster decisions and zero misunderstandings.",
    },
    {
      icon: ShieldCheck,
      title: "Fixed scopes and transparent quotes",
      desc: "Before we write a single line or design a screen, you receive a concrete breakdown of deliverables, timeline, and exact costs.",
      benefit: "No surprise invoices or budget runaways.",
    },
    {
      icon: HeartHandshake,
      title: "Complete ownership of your product",
      desc: "Every asset, design file, and code repository belongs 100% to your business. We build systems you can easily run and manage for years.",
      benefit: "Zero proprietary lock-in.",
    },
    {
      icon: Compass,
      title: "Design focused on business results",
      desc: "We prioritize clean user journeys, fast load times, and simple interfaces that make your customers feel confident taking action.",
      benefit: "Software that pays for itself.",
    },
  ];

  const STATS = [
    { num: "10+", label: "Engineers and designers based in Chennai" },
    { num: "40+", label: "Real business platforms and tools delivered" },
    { num: "100%", label: "In-house craft with zero outsourced work" },
    { num: "24h", label: "Average response time on client inquiries" },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
      {/* Linear Ambient Spotlight Cone */}
      <div
        className="linear-spotlight-cone"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-16 md:pt-28 md:pb-24 px-5 sm:px-8 text-center flex flex-col items-center">
        <div className="hero-reveal linear-border-beam mb-4">
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-[#9EA3AD]">
              <MapPin className="w-3.5 h-3.5 text-[#D9A55B]" />
              <span>Software Studio · Chennai, India</span>
            </div>
          </div>
        </div>

        <h1 className="hero-reveal-delay-1 text-[36px] sm:text-[52px] md:text-[66px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.1] max-w-3xl mb-6">
          A focused studio in Chennai dedicated to craft
        </h1>

        <p className="hero-reveal-delay-2 text-[17px] sm:text-[20px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-8">
          We started Cookie Inc. to give ambitious businesses dependable software without agency overhead or unnecessary complexity.
        </p>

        <Button to="/contact" variant="primary" size="lg" className="hero-reveal-delay-3 min-h-[48px] group">
          <span>Work with us</span>
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </section>

      {/* Hairline traveling beam */}
      <div className="hairline-beam" />

      {/* Studio Philosophy & Studio Engine Section */}
      <section className="w-full py-16 md:py-24 px-5 sm:px-8">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Studio Craft & Discipline Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="interactive-card w-full max-w-sm rounded-[24px] p-6 sm:p-7">
              {/* Header with status */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#59D499] pulse-dot" />
                  <span className="text-[13px] font-medium text-[#F4F4F6]">Cookie Studio Lab</span>
                </div>
                <span className="text-[11px] font-mono text-[#D9A55B] px-2 py-0.5 rounded bg-[#D9A55B]/10 border border-[#D9A55B]/20">
                  Chennai HQ
                </span>
              </div>

              {/* Linear-style Studio Principles Spec */}
              <div className="space-y-3 font-sans text-[13px]">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-[#9EA3AD]">Team Model</span>
                  <span className="font-semibold text-[#F4F4F6]">100% In-house</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-[#9EA3AD]">Delivery Sprints</span>
                  <span className="font-semibold text-[#59D499]">Weekly click-throughs</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-[#9EA3AD]">Code & Asset Rights</span>
                  <span className="font-semibold text-[#F4F4F6]">100% Client Owned</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-[#9EA3AD]">Account Executives</span>
                  <span className="font-semibold text-[#FF6363]">Zero Middlemen</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-center">
                <p className="text-[12px] text-[#767B85]">
                  Engineered with care and discipline in Chennai.
                </p>
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider">
              Why we exist
            </div>
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.15]">
              Software should be built with care, clarity, and respect for your time.
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#9EA3AD] leading-relaxed">
              Most clients who come to us have experienced the same frustrations elsewhere: agencies that talk in circles, junior teams hidden behind account executives, and projects that drag on for months with little to show.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#9EA3AD] leading-relaxed">
              We built Cookie Inc. around a straightforward alternative: a compact, high-taste studio where you collaborate directly with senior craftspeople. We keep our team small on purpose so every product gets the focus it deserves.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <p className="text-[28px] sm:text-[32px] font-semibold text-[#F4F4F6]">Chennai</p>
                <p className="text-[14px] text-[#9EA3AD]">Our physical home base and studio</p>
              </div>
              <div>
                <p className="text-[28px] sm:text-[32px] font-semibold text-[#F4F4F6]">Zero Bloat</p>
                <p className="text-[14px] text-[#9EA3AD]">No account executives or middlemen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Facts & Statistics */}
      <section className="w-full py-16 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <dt className="sr-only">{item.label}</dt>
                <dd className="text-[36px] sm:text-[48px] font-semibold text-[#D9A55B] tracking-tight leading-none mb-2">
                  {item.num}
                </dd>
                <p className="text-[14px] text-[#9EA3AD] max-w-[200px]" aria-hidden="true">
                  {item.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Our 4 Core Principles */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[30px] sm:text-[42px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              How we work with clients
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              Four simple rules that ensure every project is predictable, calm, and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="interactive-card p-8 rounded-[20px] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[10px] bg-[#D9A55B]/15 border border-[#D9A55B]/30 flex items-center justify-center text-[#D9A55B] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#F4F4F6] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-[15px] text-[#9EA3AD] leading-relaxed mb-6">
                      {principle.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[13px] text-[#59D499]">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{principle.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Evolution Timeline (7 Clean Milestones) */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[30px] sm:text-[42px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              Our journey so far
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              From our first client deliverables in Chennai to building platforms used across India.
            </p>
          </div>

          <ol className="relative space-y-6 pl-8 border-l border-white/10">
            {chapters.map((chapter, idx) => (
              <li
                key={chapter.title}
                className="interactive-card relative p-6 sm:p-7 rounded-[16px]"
              >
                {/* Timeline node */}
                <span
                  className="absolute -left-[41px] top-7 w-4 h-4 rounded-full bg-[#0A0B0D] border-2 border-[#D9A55B]"
                  aria-hidden="true"
                />
                <span className="text-[12px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-1">
                  Milestone 0{idx + 1}
                </span>
                <h3 className="text-[18px] font-semibold text-[#F4F4F6] mb-2">
                  {chapter.title.replace(/^Chapter \d+:\s*/, "")}
                </h3>
                <p className="text-[15px] text-[#9EA3AD] leading-relaxed">
                  {chapter.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.12] mb-4">
            Ready to work with a dedicated team?
          </h2>
          <p className="text-[17px] text-[#9EA3AD] mb-8">
            Tell us about your project goals. We will provide honest advice and a clear path forward.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px]">
            Start a conversation
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

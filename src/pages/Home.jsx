import React, { useState } from "react";
import { Link } from "react-router-dom";
import { homepage } from "../data/data";
import Button from "../components/shared/Button";
import Accordion from "../components/shared/Accordion";
import CookieLogo from "../components/shared/CookieLogo";
import StickyFeatures from "../components/shared/StickyFeatures";
import {
  ArrowRight,
  TrendingUp,
  Check,
  Globe,
  Smartphone,
  Database,
  Palette,
  Clock,
  ShieldCheck,
  MessageSquare,
  Users,
  Star,
} from "lucide-react";

/**
 * Home Page (Complete Redesign)
 * Client-First, Plain Language, Proof Near Top, Zero Jargon, Accessible WCAG 2.2 AA.
 */
export default function Home() {
  const { section6, section8 } = homepage;

  // Selected Proof Projects shown near the top
  const FEATURED_PROOF = [
    {
      title: "Torque Toyzz",
      category: "E-Commerce & WhatsApp",
      headline: "1-Tap Direct WhatsApp Shopping",
      outcome: "3.4x higher checkout rate",
      turnaround: "Delivered in 14 days",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
      link: "/work",
    },
    {
      title: "IQ Bridge",
      category: "EdTech Platform",
      headline: "Institutional Assessment Showcase",
      outcome: "Inquiries across 14 countries",
      turnaround: "Delivered in 21 days",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
      link: "/work",
    },
    {
      title: "Audnex Studio",
      category: "Creative Agency Showcase",
      headline: "Sub-Second Media Streaming",
      outcome: "Steady European client contracts",
      turnaround: "Delivered in 28 days",
      image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
      link: "/work",
    },
  ];

  // What we solve: Outcomes, not technologies
  const OUTCOMES = [
    {
      icon: Globe,
      title: "A website that brings you customers",
      description:
        "Fast to load, simple to navigate, and structured to convert casual visitors into qualified inquiries. Built to work smoothly on every phone and screen.",
      tag: "Websites & Portals",
    },
    {
      icon: Smartphone,
      title: "A mobile app your users actually enjoy",
      description:
        "Intuitive iOS and Android apps with zero lag, instant notifications, and clean interfaces that keep your customers coming back.",
      tag: "Mobile Apps",
    },
    {
      icon: Database,
      title: "Custom software that replaces spreadsheets",
      description:
        "Custom internal tools tailored to your daily operations. Automate manual paperwork, manage inventory, and track team progress in one secure place.",
      tag: "Business Systems",
    },
    {
      icon: Palette,
      title: "A brand that makes your business look established",
      description:
        "Professional logos, visual systems, and digital assets that give prospective clients immediate confidence in your capability.",
      tag: "Brand Identity",
    },
  ];

  // How we work in 4 clear, predictable steps
  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Fixed scope and transparent quote",
      description:
        "We discuss your goals and map out exactly what needs to be built. You get a written schedule and a fixed price before we start.",
      benefit: "No unexpected costs or scope drift.",
    },
    {
      num: "02",
      title: "Clickable prototype you can test",
      description:
        "We design interactive screens first. You click through the complete customer journey and test every detail before code is written.",
      benefit: "Zero surprises during development.",
    },
    {
      num: "03",
      title: "Weekly live working previews",
      description:
        "Every week, you test real working features on a private link. You see genuine, verifiable progress without status-meeting bureaucracy.",
      benefit: "Constant clarity on what ships next.",
    },
    {
      num: "04",
      title: "Careful launch and ongoing support",
      description:
        "We test across devices and handle all technical setup. After go-live, we monitor uptime and provide direct support whenever you need help.",
      benefit: "Peace of mind long after launch.",
    },
  ];

  // Real client reviews from data.jsx
  const REVIEWS = section6.reviews.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
      {/* Linear Ambient Spotlight Cone */}
      <div
        className="linear-spotlight-cone"
        aria-hidden="true"
      />

      {/* 1. HERO SECTION: Plain sentence, supporting line, primary button */}
      <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Status Pill with rotating border beam */}
        <div className="hero-reveal linear-border-beam mb-6">
          <div>
            <div className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] font-medium text-[#9EA3AD]">
              <span className="w-2 h-2 rounded-full bg-[#59D499] pulse-dot" />
              <span>Software studio based in Chennai, India</span>
            </div>
          </div>
        </div>

        {/* The One Plain Sentence: What we do and for whom */}
        <h1 className="hero-reveal-delay-1 text-[38px] sm:text-[56px] md:text-[72px] font-semibold text-[#F4F4F6] tracking-[-0.035em] leading-[1.08] max-w-4xl mb-6">
          We build websites, mobile apps, and custom tools that help ambitious companies grow.
        </h1>

        {/* Supporting Line */}
        <p className="hero-reveal-delay-2 text-[18px] sm:text-[21px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-10">
          A focused studio in Chennai. You collaborate directly with the people creating your software—no middlemen, no runaround.
        </p>

        {/* Primary and Secondary Action */}
        <div className="hero-reveal-delay-3 flex flex-col sm:flex-row items-center gap-4 mb-14">
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto group">
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
          <Button to="/work" variant="ghost" size="lg" className="min-h-[48px] w-full sm:w-auto">
            Explore our work
          </Button>
        </div>

        {/* Reassurance Microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#767B85]">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#59D499]" />
            Fixed-scope quotes
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#59D499]" />
            Weekly working previews
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#59D499]" />
            100% in-house Chennai team
          </span>
        </div>
      </section>

      {/* 2. PROOF NEAR THE TOP: Selected Client Products & Outcomes */}
      <section className="w-full py-16 md:py-24 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
                Recent Client Deliveries
              </span>
              <h2 className="text-[28px] sm:text-[40px] font-semibold text-[#F4F4F6] tracking-tight">
                Real software shipped for real businesses
              </h2>
            </div>
            <Link
              to="/work"
              className="text-[14px] font-medium text-[#D9A55B] hover:text-[#E4B46E] transition-colors inline-flex items-center gap-1 min-h-[44px]"
            >
              View all case studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROOF.map((project) => (
              <Link
                key={project.title}
                to={project.link}
                className="interactive-card p-6 rounded-[20px] flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Clean Device Mockup Frame */}
                  <div className="relative rounded-[12px] overflow-hidden bg-[#0A0B0D] border border-white/10 mb-6 aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={`Mockup of ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0A0B0D]/85 backdrop-blur-md text-[11px] font-medium text-[#D9A55B] border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  <h3 className="text-[20px] font-semibold text-[#F4F4F6] mb-1 group-hover:text-[#D9A55B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#9EA3AD] mb-5">
                    {project.headline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px]">
                  <span className="text-[#59D499] font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.outcome}
                  </span>
                  <span className="text-[#767B85]">{project.turnaround}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO: OUTCOMES INSTEAD OF TECHNOLOGY */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-[30px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              What we solve for your business
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              We handle every layer—from user journeys to design systems and reliable code—under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OUTCOMES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="interactive-card p-8 rounded-[20px] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[10px] bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#D9A55B] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B] block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-[22px] font-semibold text-[#F4F4F6] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-[#9EA3AD] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      to="/services"
                      className="text-[14px] font-medium text-[#D9A55B] hover:text-[#E4B46E] transition-colors inline-flex items-center gap-1 min-h-[44px] group"
                    >
                      <span>Learn more about our approach</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK: INTERACTIVE LINEAR-STYLE WORKFLOW */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
              Predictable Workflow
            </span>
            <h2 className="text-[30px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              How we work from idea to launch
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              No mysteries, no disappearing acts. An interactive, structured sequence you can inspect in real time.
            </p>
          </div>

          <StickyFeatures />
        </div>
      </section>

      {/* Linear Traveling Hairline Light Beam */}
      <div className="hairline-beam" />

      {/* 5. STUDIO CRAFT & IDENTITY */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-[1140px] mx-auto">
          <div className="interactive-card p-8 sm:p-12 rounded-[24px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B]">
                  <span className="w-2 h-2 rounded-full bg-[#59D499] pulse-dot" />
                  <span>Engineered in Chennai, India</span>
                </div>
                <h3 className="text-[26px] sm:text-[34px] font-semibold text-[#F4F4F6] tracking-tight leading-snug">
                  A dedicated software studio built on craft, transparency, and speed.
                </h3>
                <p className="text-[16px] text-[#9EA3AD] leading-relaxed max-w-2xl">
                  When you hire Cookie Inc., you partner directly with senior designers and developers in Chennai. No account managers playing telephone, no handoffs to junior contractors.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <span className="text-[13px] text-[#9EA3AD]">Studio Base</span>
                  <span className="text-[14px] font-medium text-[#F4F4F6]">Chennai, India</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <span className="text-[13px] text-[#9EA3AD]">Core Team</span>
                  <span className="text-[14px] font-medium text-[#59D499]">10+ Creators</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                  <span className="text-[13px] text-[#9EA3AD]">Code Ownership</span>
                  <span className="text-[14px] font-medium text-[#D9A55B]">100% Client</span>
                </div>
                <Link
                  to="/about"
                  className="mt-2 text-[14px] font-medium text-[#D9A55B] hover:text-[#E4B46E] transition-colors inline-flex items-center gap-1.5 min-h-[44px] group"
                >
                  <span>Explore studio story & principles</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL CLIENT WORDS: Testimonials from Actual Clients */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
              Client Feedback
            </span>
            <h2 className="text-[30px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              What founders say about working with us
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              Direct feedback from business leaders who trusted us with their core platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <blockquote
                key={review.name}
                className="interactive-card p-8 rounded-[20px] flex flex-col justify-between"
              >
                <div className="mb-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#D9A55B] mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[16px] sm:text-[17px] text-[#F4F4F6] leading-relaxed">
                    “{review.body}”
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center font-semibold text-[#D9A55B] text-[14px]">
                    {review.name[0]}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[#F4F4F6] text-[15px] block">
                      {review.name}
                    </cite>
                    <span className="text-[13px] text-[#767B85] block">
                      {review.role}
                    </span>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
              Common Questions
            </span>
            <h2 className="text-[30px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              Everything you need to know before reaching out
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              Straight answers on timelines, pricing, support, and code ownership.
            </p>
          </div>

          <Accordion items={section8.faqs} />
        </div>
      </section>

      {/* 8. CLOSING LOW-PRESSURE INVITATION CTA */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 text-center bg-[#0E1013]">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[48px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.1] mb-5">
            Ready to build your next product?
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#9EA3AD] leading-relaxed mb-9">
            Tell us what you are looking to build. We will reply within 1 business day with clear recommendations, realistic timelines, and a transparent quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button to="/contact" variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto">
              Start a project
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <a
              href="https://wa.cookie.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors px-5 py-2.5 min-h-[48px] inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#59D499]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

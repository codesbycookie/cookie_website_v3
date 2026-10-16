import React, { useState } from "react";
import { Link } from "react-router-dom";
import { servicepage } from "../data/data";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";
import {
  Globe,
  Smartphone,
  Database,
  Palette,
  Megaphone,
  Layers,
  Check,
  ArrowRight,
  Clock,
} from "lucide-react";

/**
 * Services Page (Complete Redesign)
 * The one question: "What can they do for my specific business, and how much structure is provided?"
 * Client-first, outcome-driven, interactive helper, transparent packages.
 */
export default function Services() {
  const { section2 } = servicepage;

  // Interactive "Which service is right for me?" helper
  const [selectedGoal, setSelectedGoal] = useState("launch");

  const GOALS = [
    {
      id: "launch",
      label: "Launch a new product or company",
      recommended: "Business LaunchPad",
      summary: "Best for founders bringing a new concept to market with clean branding and an authoritative web presence.",
    },
    {
      id: "grow",
      label: "Attract more customers and scale up",
      recommended: "LevelUp Pack",
      summary: "Best for established businesses upgrading their digital experience to generate consistent inbound inquiries.",
    },
    {
      id: "commerce",
      label: "Sell products online directly to buyers",
      recommended: "The Scale-Cart",
      summary: "Best for retail brands wanting a fast online store and seamless mobile checkout with WhatsApp order flow.",
    },
    {
      id: "operations",
      label: "Automate internal operations & paperwork",
      recommended: "Custom Business Engine",
      summary: "Best for operations teams replacing fragmented spreadsheets with a single, tailored web portal.",
    },
  ];

  const CAPABILITIES = [
    {
      icon: Globe,
      title: "Websites & Web Applications",
      outcome: "Turn casual visitors into qualified leads and paying customers with fast, accessible web platforms.",
      deliverables: ["Responsive web platform", "Sub-second load times", "Search engine optimization", "Customer lead capture"],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      outcome: "Give your users an intuitive iOS and Android experience that keeps them engaged wherever they are.",
      deliverables: ["Single unified codebase", "Fluid gesture navigation", "Push notifications", "App Store submission guidance"],
    },
    {
      icon: Database,
      title: "Custom Business Tools & Portals",
      outcome: "Eliminate manual data entry and error-prone spreadsheets with custom operational dashboards.",
      deliverables: ["Role-based access", "Automated business reporting", "Inventory & workflow sync", "Secure cloud storage"],
    },
    {
      icon: Layers,
      title: "UI/UX & Product Design",
      outcome: "Clear, frictionless interfaces designed around your actual customer journeys—no confusing clutter.",
      deliverables: ["Customer journey maps", "Clickable prototypes", "Design tokens & components", "Full accessibility audits"],
    },
    {
      icon: Megaphone,
      title: "Search Visibility & Growth",
      outcome: "Attract high-intent search traffic and track real conversions instead of superficial vanity clicks.",
      deliverables: ["Technical SEO foundation", "Google Business setup", "Conversion tracking", "Performance measurement"],
    },
    {
      icon: Palette,
      title: "Brand Identity & Design Systems",
      outcome: "Establish immediate credibility in your market with a distinctive, cohesive visual identity.",
      deliverables: ["Custom brand mark & typography", "Vector logo asset suite", "Social media templates", "Brand usage guidelines"],
    },
  ];

  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Discovery & Clear Scope",
      desc: "We analyze your business goals, target audience, and operational requirements. You receive a fixed scope, schedule, and price before any work begins.",
    },
    {
      num: "02",
      title: "Clickable Prototype",
      desc: "We design complete interactive screens in Figma. You test the user flow and verify every interaction before code is committed.",
    },
    {
      num: "03",
      title: "Weekly Working Previews",
      desc: "You test real working software every week on a private link. You see constant, verifiable progress without status-meeting bureaucracy.",
    },
    {
      num: "04",
      title: "Launch & Ongoing Care",
      desc: "We handle domain cutover, cross-browser testing, and security checks. After launch, we monitor performance and support your team.",
    },
  ];

  const currentGoal = GOALS.find((g) => g.id === selectedGoal) || GOALS[0];

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
              <span className="w-2 h-2 rounded-full bg-[#D9A55B] pulse-dot" />
              <span>Services & Structured Packages</span>
            </div>
          </div>
        </div>

        <h1 className="hero-reveal-delay-1 text-[36px] sm:text-[52px] md:text-[66px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.1] max-w-3xl mb-6">
          Clear services designed around your business goals
        </h1>

        <p className="hero-reveal-delay-2 text-[17px] sm:text-[20px] text-[#9EA3AD] max-w-2xl leading-relaxed mb-8">
          Whether you need a new website, a mobile app, or custom internal software, we handle everything from first sketch to post-launch care with fixed scopes.
        </p>

        <div className="hero-reveal-delay-3 flex flex-col sm:flex-row items-center gap-4">
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px] group">
            <span>Get a clear quote</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
          <a
            href="#package-section"
            className="text-[15px] font-medium text-[#9EA3AD] hover:text-[#F4F4F6] transition-colors px-4 py-2 min-h-[44px] inline-flex items-center"
          >
            Explore packages ↓
          </a>
        </div>
      </section>

      {/* Interactive Helper: "Which service is right for me?" */}
      <section className="w-full py-16 md:py-20 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[13px] font-medium text-[#D9A55B] uppercase tracking-wider block mb-2">
              Interactive Guide
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#F4F4F6] tracking-tight">
              Which service is right for you?
            </h2>
            <p className="text-[15px] text-[#9EA3AD] mt-2">
              Select your immediate business priority to see our recommended approach:
            </p>
          </div>

          {/* Goal Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {GOALS.map((g) => {
              const isSelected = selectedGoal === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-4 rounded-[14px] text-left transition-all cursor-pointer min-h-[64px] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] ${
                    isSelected
                      ? "bg-[#D9A55B]/15 border-[#D9A55B] text-[#F4F4F6] shadow-[0_8px_20px_rgba(217,165,91,0.2)]"
                      : "bg-[#121316] border-white/10 text-[#9EA3AD] hover:text-[#F4F4F6] hover:bg-[#181A1E]"
                  }`}
                >
                  <span className="text-[14px] font-medium block leading-snug">
                    {g.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Recommended Result Spotlight Card */}
          <div className="interactive-card p-6 sm:p-8 rounded-[18px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#D9A55B] block mb-1">
                Recommended Focus
              </span>
              <h3 className="text-[22px] font-semibold text-[#F4F4F6] mb-2">
                {currentGoal.recommended}
              </h3>
              <p className="text-[15px] text-[#9EA3AD] max-w-2xl leading-relaxed">
                {currentGoal.summary}
              </p>
            </div>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="shrink-0 min-h-[44px]"
            >
              Discuss this scope
            </Button>
          </div>
        </div>
      </section>

      {/* Transparent Packages */}
      <section id="package-section" className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[30px] sm:text-[42px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              Packages with defined deliverables
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              Choose a clear starting point. Every package can be adapted to fit your exact business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {section2.packages.map((pkg, idx) => {
              const isPopular = idx === 1;
              return (
                <div
                  key={pkg.title}
                  className={`interactive-card p-8 rounded-[20px] flex flex-col justify-between ${
                    isPopular
                      ? "border-[#D9A55B] shadow-[0_20px_50px_rgba(217,165,91,0.15)] relative"
                      : ""
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-[#D9A55B] text-[#0A0B0D] text-[12px] font-semibold tracking-wide">
                      Most requested
                    </span>
                  )}

                  <div>
                    <h3 className="text-[22px] font-semibold text-[#F4F4F6] tracking-tight mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-[14px] text-[#9EA3AD] leading-relaxed mb-6 min-h-[40px]">
                      {pkg.subtitle}
                    </p>

                    <div className="pt-6 border-t border-white/10 mb-8">
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-[#767B85] block mb-3">
                        What you get:
                      </span>
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-[14px] text-[#F4F4F6]"
                          >
                            <Check className="w-4 h-4 text-[#D9A55B] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    to="/contact"
                    variant={isPopular ? "primary" : "ghost"}
                    size="md"
                    className="w-full min-h-[44px]"
                  >
                    Get a quote
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 Core Capabilities Framed as Outcomes */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[30px] sm:text-[42px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              What we solve for you
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              Six core studio strengths handled by one unified in-house team in Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="interactive-card p-7 rounded-[18px] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-[10px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#D9A55B] mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[19px] font-semibold text-[#F4F4F6] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-[14px] text-[#9EA3AD] leading-relaxed mb-6">
                      {cap.outcome}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <ul className="space-y-1.5">
                      {cap.deliverables.map((item) => (
                        <li key={item} className="text-[13px] text-[#767B85] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#D9A55B]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 4 Delivery Steps */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-[30px] sm:text-[42px] font-semibold text-[#F4F4F6] tracking-tight mb-4">
              How we take you to launch
            </h2>
            <p className="text-[16px] text-[#9EA3AD]">
              A structured 4-step sequence so you always know what is being built and when it delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="interactive-card p-7 rounded-[18px] flex gap-5"
              >
                <span className="text-[18px] font-semibold text-[#D9A55B] shrink-0 pt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#F4F4F6] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#9EA3AD] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.12] mb-4">
            Not sure which option fits best?
          </h2>
          <p className="text-[17px] text-[#9EA3AD] mb-8">
            Tell us your business goal. We will recommend the leanest and most cost-effective path to launch.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px]">
            Book a free consultation
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

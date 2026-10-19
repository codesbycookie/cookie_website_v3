import React from "react";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import Section5 from "./sections/section5/section5";
import SEOMeta from "../../components/seo-meta";

/**
 * Cookie Inc. Official Home Page Orchestrator
 * Linear.app Craft & Restraint · Dark Base (#08090A) · Accessible WCAG 2.2 AA
 * 100% Client-Facing · Strictly follows AGENTS.md architecture.
 */
export default function Home() {
  return (
    <>
      <SEOMeta
        title="Cookie Inc. — Chennai-based Software Studio"
        description="Websites, mobile apps, and custom tools built for speed and clarity. Shipped by engineers in Chennai."
      />
      <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-x-clip">
        {/* 1. Flagship Hero: Expansive Headline, CTAs, Trust Metrics, Kinetic Brand Tickers & Live Drawer */}
        <Section1 />

        {/* 2. Capabilities: Four Alternating Rows with TiltIn Framed Visuals */}
        <Section2 />

        {/* 3. Recent Deliveries: Pinned Scroll-Driven GSAP + ScrollTrigger Showcase */}
        <Section3 />

        {/* 4. Testimonials: Big Type Quote, Hairline Progress Indicator, 12px Rise, Touch Swipe */}
        <Section4 />

        {/* 5. Final CTA: Mirrored Amber Glow, Faint Grid, Gradient Headline & Cookie Logo Badge */}
        <Section5 />
      </div>
    </>
  );
}

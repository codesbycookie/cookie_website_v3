import React from "react";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import SEOMeta from "../../components/seo-meta";

export default function Privacy() {
  return (
    <>
      <SEOMeta
        title="Privacy Policy & Data Protection | Cookie Inc."
        description="Our straightforward privacy policy. Zero ad trackers, TLS 1.3 encryption, and full compliance with DPDP Act 2023 and GDPR."
      />
      <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-hidden">
        <div className="linear-top-glow" aria-hidden="true" />
        <div className="linear-film-grain" aria-hidden="true" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}

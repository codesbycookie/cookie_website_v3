import React from "react";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import SEOMeta from "../../components/seo/seo-meta";

export default function ContactUs() {
  return (
    <>
      <SEOMeta
        title="Contact Us & Project Inquiry | Cookie Inc. — Chennai"
        description="Tell us about what you want to build. We review your notes and reply within 1 business day with clear recommendations."
      />
      <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-hidden selection:bg-[#D9A55B]/25 selection:text-[#F7F8F8]">
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

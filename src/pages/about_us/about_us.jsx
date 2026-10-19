import React from "react";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import Section5 from "./sections/section5/section5";
import Section6 from "./sections/section6/section6";
import SEOMeta from "../../components/seo-meta";

export default function AboutUs() {
  return (
    <>
      <SEOMeta
        title="About the Studio | Cookie Inc. — Chennai"
        description="A focused software studio in Chennai dedicated to craft, speed, and client ownership."
      />
      <div className="w-full flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </>
  );
}

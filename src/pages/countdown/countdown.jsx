import React from "react";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import SEOMeta from "../../components/seo/seo-meta";

export default function Countdown() {
  return (
    <>
      <SEOMeta
        title="Launching Soon | Cookie Inc."
        description="Something new is launching soon at Cookie Inc. Check our live countdown clock."
      />
      <div className="w-full min-h-[85vh] flex flex-col items-center justify-center py-20 px-5 sm:px-8 bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
        <div className="linear-spotlight-cone" aria-hidden="true" />
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

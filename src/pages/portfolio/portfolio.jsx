import React, { useState } from "react";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import Section5 from "./sections/section5/section5";
import Section6 from "./sections/section6/section6";
import SEOMeta from "../../components/seo/seo-meta";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "Websites & Web Apps", label: "Websites & Web Apps" },
    { id: "Custom Business Systems", label: "Custom Business Systems" },
  ];

  return (
    <>
      <SEOMeta
        title="Selected Work & Case Studies | Cookie Inc."
        description="Real software shipped for real businesses. Selected web applications, mobile platforms, and custom business systems."
      />
      <div className="w-full min-h-screen bg-[#08090A] text-[#F7F8F8] flex flex-col items-center relative overflow-x-clip selection:bg-[#D9A55B]/25 selection:text-[#F7F8F8]">
        <div className="linear-top-glow" aria-hidden="true" />
        <div className="linear-film-grain" aria-hidden="true" />

        <Section1 />
        <Section2
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filterOptions={filterOptions}
        />
        <Section3
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <Section4 activeFilter={activeFilter} />
        <Section5 />
        <Section6 />
      </div>
    </>
  );
}

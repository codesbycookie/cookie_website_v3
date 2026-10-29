import React from "react";
import Section1 from "./sections/section1/section1";
import SEOMeta from "../../components/seo-meta";
import { easybill } from "../../data/data";

/**
 * EasyBill Pre-Production Notice Page
 * Single viewport, minimal layout. Strictly follows AGENTS.md Pattern B.
 */
export default function EasyBill() {
  const { seo } = easybill;

  return (
    <>
      <SEOMeta
        title={seo.title}
        description={seo.desc}
      />
      <div className="w-full min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col items-center bg-[#08090A] text-[#F7F8F8] relative overflow-x-hidden">
        <Section1 />
      </div>
    </>
  );
}

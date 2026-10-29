import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { portfoliopage } from "../../data/data";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import Section3 from "./sections/section3/section3";
import Section4 from "./sections/section4/section4";
import SEOMeta from "../../components/seo-meta";

export default function CaseStudy() {
  const { slug } = useParams();

  const study = portfoliopage.section4.cards.find(
    (c) =>
      c.slug === slug ||
      c.aliases?.includes(slug) ||
      c.ctaLink?.endsWith(`/${slug}`)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = portfoliopage.section4.cards.indexOf(study);
  const nextStudy =
    portfoliopage.section4.cards[(currentIndex + 1) % portfoliopage.section4.cards.length];

  return (
    <>
      <SEOMeta
        title={`${study.title} | Case Study | Cookie Inc.`}
        description={study.description}
      />
      <div className="w-full flex flex-col items-center relative overflow-x-clip bg-[#0A0B0D] text-[#F4F4F6]">
        <Section1 study={study} />
        <Section2 study={study} />
        <Section3 study={study} />
        <Section4 nextStudy={nextStudy} />
      </div>
    </>
  );
}

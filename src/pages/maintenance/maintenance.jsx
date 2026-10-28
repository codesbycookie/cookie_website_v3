import React from "react";
import Section1 from "./sections/section1/section1";
import SEOMeta from "../../components/seo-meta";

export default function Maintenance() {
  return (
    <>
      <SEOMeta
        title="Scheduled Maintenance | Cookie Inc."
        description="Cookie Inc. is currently undergoing a scheduled platform upgrade. Reach us directly on WhatsApp or email."
      />
      <Section1 />
    </>
  );
}


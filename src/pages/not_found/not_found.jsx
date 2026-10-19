import React from "react";
import Section1 from "./sections/section1/section1";
import SEOMeta from "../../components/seo-meta";

export default function NotFound() {
  return (
    <>
      <SEOMeta
        title="404 — Page Not Found | Cookie Inc."
        description="The page you are looking for does not exist. Explore our client work or return to the homepage."
      />
      <Section1 />
    </>
  );
}

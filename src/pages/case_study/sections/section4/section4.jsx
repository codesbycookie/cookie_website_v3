import React from "react";
import Button from "../../../../components/button";
import { ArrowRight } from "lucide-react";

export default function Section4({ nextStudy }) {
  return (
    <>
      {nextStudy && (
        <section className="w-full py-16 px-5 sm:px-8 border-t border-white/10 bg-[#0E1013]">
          <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#767B85] block mb-1">
                Next Case Study
              </span>
              <h3 className="text-[22px] font-semibold text-[#F4F4F6] tracking-tight">
                {nextStudy.title}
              </h3>
            </div>
            <Button
              to={`/work/${nextStudy.slug || "iq-bridge"}`}
              variant="ghost"
              size="md"
              className="min-h-[44px]"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </section>
      )}

      <section className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight leading-[1.12] mb-4">
            Ready to build your next product?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#9EA3AD] mb-8 max-w-xl">
            Tell us about your project. We will reply with technical scope and a realistic quote within 1 business day.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="min-h-[48px]">
            Start a project
          </Button>
        </div>
      </section>
    </>
  );
}

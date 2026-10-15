import React from "react";
import { linearMethodPrinciples } from "../../data/linearData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LinearMethod() {
  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-[#121316] border border-[#232529] font-mono text-[11px] uppercase tracking-wider text-[#5E6AD2] mb-6">
            Manifesto & Principles
          </span>
          <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-medium text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            The Linear Method
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[#8A8F98] max-w-2xl mx-auto leading-relaxed">
            A framework for planning, executing, and shipping exceptional digital products.
          </p>
        </div>

        {/* Narrative Introduction */}
        <div className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] mb-16 text-[16px] text-[#D0D6E0] leading-relaxed space-y-4">
          <p>
            Most modern software projects suffer from unnecessary bureaucracy: bloated sprint rituals, endless refinement meetings, and static 50-page specification docs that nobody reads.
          </p>
          <p>
            The Linear Method is an opinionated alternative. We believe high-performing software engineering teams thrive on speed, trust, rhythm, and a shared dedication to exceptional craft.
          </p>
        </div>

        {/* Principles Detailed Cards */}
        <div className="space-y-12">
          {linearMethodPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] hover:border-[#494B4D] transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 font-mono text-[13px] text-[#5E6AD2]">
                <span className="font-semibold">PRINCIPLE // {principle.number}</span>
              </div>
              <h2 className="text-[26px] font-medium text-[#F4F4F6] mb-4">
                {principle.title}
              </h2>
              <p className="text-[16px] text-[#8A8F98] leading-relaxed mb-6">
                {principle.summary}
              </p>
              <div className="pt-4 border-t border-[#232529] flex items-center gap-2 text-[12px] font-mono text-[#59D499]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Baked into Linear's core workflow defaults</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Call to Action */}
        <div className="mt-20 p-10 rounded-[14px] bg-[#121316] border border-[#2F3031] text-center flex flex-col items-center">
          <h3 className="text-[28px] font-medium text-[#F4F4F6] mb-4">
            Practice the Linear Method with your team
          </h3>
          <p className="text-[15px] text-[#8A8F98] mb-8 max-w-md">
            Linear is engineered around these six practices. Start shipping with speed and clarity.
          </p>
          <a
            href="https://linear.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="linear-btn-primary px-6 py-2.5 rounded-[8px] text-[14px] font-medium"
          >
            Get started for free
          </a>
        </div>
      </div>
    </div>
  );
}

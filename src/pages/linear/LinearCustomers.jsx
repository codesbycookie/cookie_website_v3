import React from "react";
import { linearCustomersData } from "../../data/linearData";
import { ArrowUpRight } from "lucide-react";

export default function LinearCustomers() {
  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-[#121316] border border-[#232529] font-mono text-[11px] uppercase tracking-wider text-[#5E6AD2] mb-6">
            Customer Stories
          </span>
          <h1 className="text-[40px] sm:text-[54px] md:text-[62px] font-medium text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Powering high-velocity product teams
          </h1>
          <p className="text-[18px] text-[#8A8F98] max-w-2xl mx-auto leading-relaxed">
            Read how category-defining engineering organizations use Linear to eliminate planning overhead and ship world-class software.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {linearCustomersData.map((customer) => (
            <div
              key={customer.name}
              className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] hover:border-[#494B4D] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[18px] font-semibold text-[#F4F4F6]">
                    {customer.logoText}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1B1C1F] text-[#8A8F98]">
                    {customer.industry}
                  </span>
                </div>

                <div className="mb-8">
                  <span className="text-[44px] font-semibold text-[#F4F4F6] font-mono block leading-none mb-2">
                    {customer.stat}
                  </span>
                  <span className="text-[13px] text-[#8A8F98] uppercase font-mono tracking-wider">
                    {customer.statLabel}
                  </span>
                </div>

                <p className="text-[15px] text-[#D0D6E0] leading-relaxed mb-8 italic">
                  "{customer.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#232529] flex items-center justify-between text-[13px] text-[#8A8F98]">
                <span>{customer.person}</span>
                <span className="text-[#5E6AD2] flex items-center gap-1">
                  Read story <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-10 rounded-[14px] bg-[#121316] border border-[#2F3031] text-center flex flex-col items-center">
          <h3 className="text-[28px] font-medium text-[#F4F4F6] mb-4">
            Join the world's most ambitious software teams
          </h3>
          <p className="text-[15px] text-[#8A8F98] mb-8 max-w-md">
            Migrate from Jira or Asana in under two minutes with our automated workspace importer.
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

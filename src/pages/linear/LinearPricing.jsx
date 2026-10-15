import React, { useState } from "react";
import { linearPricingTiers } from "../../data/linearData";
import { Check, HelpCircle, ArrowRight } from "lucide-react";

export default function LinearPricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const faqs = [
    {
      q: "Can I use Linear for free?",
      a: "Yes! The Free plan includes unlimited workspace members, API access, integrations, and up to 250 active issues with no time limits.",
    },
    {
      q: "How does the 30-day trial work?",
      a: "Standard and Pro plans include a full 30-day free trial. No credit card is required to begin. At the end of 30 days, choose your plan or revert to Free.",
    },
    {
      q: "What is an active issue?",
      a: "Active issues are non-archived issues currently in your backlog, todo, or active cycles. Completed and canceled issues do not count toward your limit.",
    },
    {
      q: "Do you offer discounts for open-source or non-profits?",
      a: "Yes. Qualified open-source projects, educational groups, and non-profits are eligible for free Pro plan subscriptions upon request.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#121316] border border-[#232529] font-mono text-[11px] uppercase tracking-wider text-[#5E6AD2] mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-[40px] sm:text-[54px] md:text-[62px] font-medium text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Invest in your team's velocity
          </h1>
          <p className="text-[18px] text-[#8A8F98] max-w-xl mx-auto mb-10 leading-relaxed">
            Free forever for small teams. Scalable tiers for high-growth engineering organizations.
          </p>

          {/* Monthly / Annual Billing Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#121316] border border-[#232529]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                !isAnnual ? "bg-[#1B1C1F] text-[#F4F4F6] shadow-sm" : "text-[#8A8F98] hover:text-[#F4F4F6]"
              }`}
            >
              Billed monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all flex items-center gap-1.5 ${
                isAnnual ? "bg-[#1B1C1F] text-[#F4F4F6] shadow-sm" : "text-[#8A8F98] hover:text-[#F4F4F6]"
              }`}
            >
              <span>Billed annually</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#5E6AD2]/20 text-[#5E6AD2]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {linearPricingTiers.map((tier) => {
            const price =
              typeof tier.priceMonthly === "string"
                ? tier.priceMonthly
                : isAnnual
                ? `$${tier.priceAnnually}`
                : `$${tier.priceMonthly}`;

            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-8 rounded-[12px] bg-[#121316] border flex flex-col justify-between relative transition-all ${
                  tier.popular
                    ? "border-[#5E6AD2] shadow-[0_0_32px_-8px_rgba(94,106,210,0.3)]"
                    : "border-[#232529] hover:border-[#2F3031]"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#5E6AD2] text-white text-[11px] font-mono uppercase tracking-wider font-semibold">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-[20px] font-medium text-[#F4F4F6] mb-2">{tier.name}</h3>
                  <p className="text-[13px] text-[#8A8F98] leading-relaxed mb-6 h-12">
                    {tier.headline}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-[36px] font-semibold text-[#F4F4F6] font-mono">
                      {price}
                    </span>
                    {typeof tier.priceMonthly === "number" && tier.priceMonthly > 0 && (
                      <span className="text-[13px] text-[#8A8F98]">/ user / mo</span>
                    )}
                  </div>

                  <a
                    href="https://linear.app/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full block text-center py-2.5 rounded-[8px] text-[13px] font-medium mb-8 transition-all ${
                      tier.popular
                        ? "linear-btn-primary"
                        : "bg-[#1B1C1F] text-[#F4F4F6] hover:bg-[#232529] border border-[#2F3031]"
                    }`}
                  >
                    {tier.cta}
                  </a>

                  <div className="space-y-3 pt-6 border-t border-[#232529]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#62666D]">
                      Included Features
                    </div>
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-[13px] text-[#D0D6E0]">
                        <Check className="w-4 h-4 text-[#5E6AD2] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto pt-16 border-t border-[#232529]">
          <h2 className="text-[28px] font-medium text-[#F4F4F6] text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-[10px] bg-[#121316] border border-[#232529]"
              >
                <h4 className="text-[16px] font-medium text-[#F4F4F6] mb-2">{faq.q}</h4>
                <p className="text-[14px] text-[#8A8F98] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

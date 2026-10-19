import React from "react";

function DesktopStepItem({ step }) {
  return (
    <div className="relative pt-6">
      <div
        className="absolute top-[1px] left-0 w-[9px] h-[9px] rounded-full bg-[#D9A55B] ring-4 ring-[#08090A] shadow-[0_0_8px_rgba(217,165,91,0.6)] z-10"
        aria-hidden="true"
      />
      <span className="block text-[12px] font-mono text-[#D9A55B] font-medium tabular-nums mb-2">
        {step.num}
      </span>
      <h3 className="text-[17px] sm:text-[18px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-2">
        {step.title}
      </h3>
      <p className="text-[13px] sm:text-[14px] text-[#8A8F98] leading-relaxed">
        {step.desc}
      </p>
    </div>
  );
}

function MobileStepItem({ step, index, total }) {
  const isLast = index === total - 1;

  return (
    <div className="flex gap-4 sm:gap-5 group relative">
      <div className="flex flex-col items-center shrink-0 w-6">
        <div className="relative flex items-center justify-center w-6 h-6 mt-0.5 shrink-0">
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#D9A55B] shadow-[0_0_8px_rgba(217,165,91,0.6)] ring-4 ring-[#08090A] z-10"
            aria-hidden="true"
          />
        </div>

        {!isLast && (
          <div
            className="w-[1.5px] flex-1 bg-gradient-to-b from-[#D9A55B]/70 via-[#D9A55B]/30 to-white/10 my-1 min-h-[56px]"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="pb-8 last:pb-2 pt-0.5">
        <span className="block text-[12px] font-mono text-[#D9A55B] font-medium tracking-wide mb-1">
          {step.num}
        </span>
        <h3 className="text-[17px] font-medium text-[#F7F8F8] tracking-[-0.015em] mb-1.5">
          {step.title}
        </h3>
        <p className="text-[13px] sm:text-[14px] text-[#8A8F98] leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function Section5() {
  const PROCESS_STEPS = [
    {
      num: "01",
      title: "Discovery & Clear Scope",
      desc: "We analyze your business goals, target audience, and operational requirements. You receive a fixed scope, schedule, and price before any work begins.",
    },
    {
      num: "02",
      title: "Clickable Prototype",
      desc: "We design complete interactive screens in Figma. You test the user flow and verify every interaction before code is committed.",
    },
    {
      num: "03",
      title: "Weekly Working Previews",
      desc: "You test real working software every week on a private link. You see constant, verifiable progress without status-meeting bureaucracy.",
    },
    {
      num: "04",
      title: "Launch & Ongoing Care",
      desc: "We handle domain cutover, cross-browser testing, and security checks. After launch, we monitor performance and support your team.",
    },
  ];

  return (
    <section className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-8 border-b border-white/[0.06]">
      <div className="max-w-[1180px] mx-auto text-left">
        <div className="max-w-2xl mb-14 sm:mb-18">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#F7F8F8] tracking-[-0.03em] leading-[1.14] mb-3">
            How we take you to launch
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#8A8F98] leading-relaxed">
            A structured 4-step sequence so you always know what is being built and when it delivers.
          </p>
        </div>

        <div className="relative hidden md:block">
          <div
            className="absolute top-[5px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#D9A55B] via-[#D9A55B]/70 to-[#D9A55B]/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <DesktopStepItem key={step.num} step={step} />
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-0">
          {PROCESS_STEPS.map((step, idx) => (
            <MobileStepItem
              key={step.num}
              step={step}
              index={idx}
              total={PROCESS_STEPS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import CookieLogo from "../../../../components/cookie_logo";

export default function Section1() {
  const [targetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    d.setHours(10, 0, 0, 0);
    return d.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
      <div className="hero-reveal linear-border-beam mb-8">
        <div>
          <div className="flex items-center gap-2.5 px-4 py-1.5">
            <CookieLogo className="w-4 h-4" color="#F4F4F6" dotColor="#D9A55B" />
            <span className="text-[12px] font-semibold tracking-wider text-[#D0D6E0] uppercase">
              Studio Platform Release
            </span>
          </div>
        </div>
      </div>

      <h1 className="hero-reveal-delay-1 text-[34px] sm:text-[48px] md:text-[56px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.12] mb-5">
        Something new is launching soon
      </h1>

      <p className="hero-reveal-delay-2 text-[17px] sm:text-[19px] text-[#9EA3AD] leading-relaxed max-w-xl mb-12">
        We are putting the finishing touches on our next studio platform designed to make client project tracking effortless.
      </p>

      <div className="hero-reveal-delay-3 grid grid-cols-4 gap-3 sm:gap-6 mb-12 w-full max-w-lg">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center p-3 sm:p-5 rounded-[14px] bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <span className="text-[32px] sm:text-[48px] font-bold text-[#F4F4F6] tabular-nums leading-none mb-1">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-wider text-[#9EA3AD]">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import CookieLogo from "../components/shared/CookieLogo";
import { ArrowRight, CheckCircle2, Clock, Mail } from "lucide-react";

/**
 * Countdown Page:
 * The one question: "What is launching soon, and when can I access it?"
 * Sections:
 * 1. Studio Header & Identity
 * 2. Plain-language Announcement
 * 3. Live Accessible Countdown Clock
 * 4. Low-pressure Launch Notification Form
 * 5. Way forward (Home & Work links)
 */
export default function Countdown() {
  // Launch date set 14 days in the future
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

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-[85vh] flex flex-col items-center justify-center py-20 px-5 sm:px-8 bg-[#0A0B0D] text-[#F4F4F6] relative overflow-hidden">
      {/* Background Linear ambient spotlight cone */}
      <div
        className="linear-spotlight-cone"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        {/* Studio Brand Release Badge with rotating border beam */}
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

        {/* Plain Headline: What is happening */}
        <h1 className="hero-reveal-delay-1 text-[34px] sm:text-[48px] md:text-[56px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.12] mb-5">
          Something new is launching soon
        </h1>

        {/* Supporting Line */}
        <p className="hero-reveal-delay-2 text-[17px] sm:text-[19px] text-[#9EA3AD] leading-relaxed max-w-xl mb-12">
          We are putting the finishing touches on our next studio platform designed to make client project tracking effortless.
        </p>

        {/* Live Countdown Cards */}
        <div
          role="timer"
          aria-live="polite"
          aria-atomic="true"
          className="hero-reveal-delay-3 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg mb-12"
        >
          {[
            { label: "Days", val: timeLeft.days },
            { label: "Hours", val: String(timeLeft.hours).padStart(2, "0") },
            { label: "Minutes", val: String(timeLeft.minutes).padStart(2, "0") },
            { label: "Seconds", val: String(timeLeft.seconds).padStart(2, "0") },
          ].map((item) => (
            <div
              key={item.label}
              className="interactive-card flex flex-col items-center justify-center p-5 rounded-[16px]"
            >
              <span className="text-[36px] sm:text-[44px] font-semibold text-[#F4F4F6] tracking-tight leading-none mb-1.5">
                {item.val}
              </span>
              <span className="text-[12px] font-medium text-[#767B85] uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Low-pressure Email Notification Form */}
        <div className="interactive-card w-full max-w-md p-6 sm:p-8 rounded-[20px] mb-10">
          {submitted ? (
            <div
              role="alert"
              className="flex flex-col items-center text-center py-3 animate-[fade-up_200ms_ease-out]"
            >
              <div className="w-12 h-12 rounded-full bg-[#59D499]/15 border border-[#59D499]/30 flex items-center justify-center text-[#59D499] mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-[18px] font-semibold text-[#F4F4F6] mb-2">
                You are on the preview list
              </h2>
              <p className="text-[14px] text-[#9EA3AD]">
                We will email you the moment it opens. No marketing fluff, no spam.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col text-left">
              <label
                htmlFor="countdown-email"
                className="text-[14px] font-medium text-[#F4F4F6] mb-2"
              >
                Get notified when we go live
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    id="countdown-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your work email"
                    aria-describedby={error ? "email-error" : undefined}
                    aria-invalid={!!error}
                    className="w-full h-11 px-4 rounded-[8px] bg-[#0A0B0D] border border-white/15 text-[#F4F4F6] text-[14px] placeholder-[#767B85] focus:outline-none focus:ring-2 focus:ring-[#D9A55B] focus:border-transparent transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="min-h-[44px] whitespace-nowrap"
                >
                  Notify me
                </Button>
              </div>
              {error && (
                <p id="email-error" className="text-[13px] text-[#FF6363] mt-2">
                  {error}
                </p>
              )}
              <p className="text-[12px] text-[#767B85] mt-3">
                We respect your inbox. You will only receive a one-time launch invite.
              </p>
            </form>
          )}
        </div>

        {/* Clear way forward */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-[#9EA3AD]">
          <Link
            to="/"
            className="hover:text-[#F4F4F6] transition-colors py-2 min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px]"
          >
            ← Return to homepage
          </Link>
          <span className="text-white/15">·</span>
          <Link
            to="/work"
            className="hover:text-[#F4F4F6] transition-colors py-2 min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px]"
          >
            Browse client projects →
          </Link>
        </div>
      </div>
    </div>
  );
}

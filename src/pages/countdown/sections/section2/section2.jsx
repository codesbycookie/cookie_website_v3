import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/button";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function Section2() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
    <div className="relative z-10 max-w-xl mx-auto w-full flex flex-col items-center text-center">
      <div className="w-full rounded-[16px] bg-[#111215] border border-white/10 p-6 sm:p-8 mb-8">
        <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#F4F4F6] mb-2">
          Get notified on launch day
        </h2>
        <p className="text-[14px] text-[#9EA3AD] mb-6">
          We will send a single email with the live access link. No promotional spam.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-[10px] bg-[#59D499]/10 border border-[#59D499]/20 text-[#59D499] text-[14px]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>You are on the notification list. Thank you!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#767B85] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                aria-label="Email address for launch notification"
                className="w-full h-[44px] pl-10 pr-4 rounded-[10px] bg-white/[0.04] border border-white/10 text-[#F4F4F6] placeholder-[#62666D] text-[14px] focus:outline-none focus:border-[#D9A55B]/60 focus:ring-2 focus:ring-[#D9A55B]/20 transition-all"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="min-h-[44px] shrink-0">
              Notify me
            </Button>
          </form>
        )}

        {error && (
          <p className="text-[13px] text-[#FF5A5A] mt-2 text-left">{error}</p>
        )}
      </div>

      <div className="flex items-center gap-6 text-[14px] text-[#9EA3AD]">
        <Link to="/" className="hover:text-[#F4F4F6] transition-colors inline-flex items-center gap-1.5">
          <span>Go to homepage</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <span className="text-white/20">·</span>
        <Link to="/work" className="hover:text-[#F4F4F6] transition-colors">
          View client work
        </Link>
        <span className="text-white/20">·</span>
        <Link to="/contact" className="hover:text-[#F4F4F6] transition-colors">
          Contact us
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Wrench, MessageCircle, Mail, Phone, Sparkles } from "lucide-react";
import CookieLogo from "../../../../components/cookie_logo";
import { social_links } from "../../../../data/data";

export default function Section1() {
  return (
    <div className="min-h-dvh w-full flex flex-col justify-between py-8 sm:py-12 px-5 sm:px-8 bg-[#08090A] text-[#F4F4F6] relative overflow-hidden select-none">
      {/* Ambient Warm-Amber Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] max-w-[95vw] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(217,165,91,0.13)_0%,rgba(217,165,91,0.03)_50%,transparent_75%)] blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Top Brand Header */}
      <header className="w-full max-w-[1120px] mx-auto flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center">
            <img
              src="/imgs/cookie_white.png"
              alt="Cookie Inc."
              width="28"
              height="28"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[16px] sm:text-[17px] font-semibold tracking-tight text-[#F4F4F6]">
            Cookie Inc<span className="text-[#D9A55B]">.</span>
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[12px] text-[#9EA3AD]">
          <span className="w-2 h-2 rounded-full bg-[#D9A55B] animate-pulse" />
          <span>Scheduled Upgrade</span>
        </div>
      </header>

      {/* Center Maintenance Core */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto w-full my-auto py-10">
        {/* Badge Card */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 rounded-[24px] bg-[#111215] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(217,165,91,0.22),transparent_70%)] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D9A55B]/15 border border-[#D9A55B]/30 flex items-center justify-center text-[#D9A55B] mb-2.5">
                <Wrench className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-medium text-[#9EA3AD] uppercase tracking-widest mt-1 text-center">
                System Maintenance
              </span>
            </div>

            <div
              className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D9A55B]/60 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9A55B]/10 border border-[#D9A55B]/25 text-[#D9A55B] text-[12px] font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Baking something fresh in Chennai</span>
        </div>

        <h1 className="text-[28px] sm:text-[42px] font-semibold text-[#F4F4F6] tracking-[-0.03em] leading-[1.15] mb-4 text-center">
          We’re upgrading our studio experience
        </h1>

        <p className="text-[14.5px] sm:text-[16px] text-[#9EA3AD] leading-relaxed mb-8 max-w-md mx-auto text-center">
          Our website is currently undergoing scheduled maintenance and performance upgrades. Client systems and active project sprints remain 100% operational.
        </p>

        {/* Direct Action Channels */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 w-full max-w-xs sm:max-w-none">
          <a
            href={social_links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#D9A55B] hover:bg-[#E4B46E] text-[#08090A] font-semibold text-[14px] inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_4px_20px_rgba(217,165,91,0.3)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`mailto:${social_links.email}`}
            className="min-h-[44px] w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#111215] hover:bg-[#181A1F] text-[#F4F4F6] border border-white/10 font-medium text-[14px] inline-flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <Mail className="w-4 h-4 text-[#D9A55B]" />
            <span>{social_links.email}</span>
          </a>
        </div>

        {/* Direct Phone Line */}
        <div className="pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center justify-center gap-2 text-[13px] text-[#767B85] text-center">
          <span>Urgent project inquiry?</span>
          <a
            href={`tel:+${social_links.phone_raw}`}
            className="text-[#D9A55B] hover:text-[#E4B46E] font-medium transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] rounded-[4px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{social_links.phone}</span>
          </a>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full max-w-[1120px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-[#62666D] border-t border-white/[0.06] pt-5">
        <div className="inline-flex items-center gap-2">
          <CookieLogo className="w-3.5 h-3.5" color="#62666D" dotColor="#D9A55B" />
          <span>© {new Date().getFullYear()} Cookie Inc. All rights reserved.</span>
        </div>
        <span>Studio HQ · Chennai, Tamil Nadu</span>
      </footer>
    </div>
  );
}


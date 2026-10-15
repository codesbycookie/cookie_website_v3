import React from "react";
import { linearPillars } from "../../data/linearData";
import { Zap, Command, GitBranch, Layers, Shield, Sparkles } from "lucide-react";

export default function LinearFeatures() {
  const deepFeatures = [
    {
      title: "Sync Engine & Offline Architecture",
      icon: Zap,
      desc: "Linear runs on a local SQLite database that synchronizes continuously in the background. Changes reflect on screen in under 16ms before network confirmation.",
    },
    {
      title: "Complete Keyboard Mastery",
      icon: Command,
      desc: "Perform 100% of workflows without taking your fingers off the keyboard. Custom shortcuts, command palette navigation, and rapid triage keys.",
    },
    {
      title: "Bi-directional Git Sync",
      icon: GitBranch,
      desc: "Connect GitHub and GitLab. Branches created in Linear automatically transition issues to 'In Progress', and pull requests merge and close tickets seamlessly.",
    },
    {
      title: "Cross-Team Roadmaps & Milestones",
      icon: Layers,
      desc: "Organize individual team cycles into company-level strategic initiatives with real-time completion projections and dependency tracking.",
    },
    {
      title: "Autonomous AI Triage",
      icon: Sparkles,
      desc: "AI agents categorize incoming bug reports, detect duplicates across workspaces, draft PR descriptions, and alert engineers to blocked tasks.",
    },
    {
      title: "Enterprise Governance & SCIM",
      icon: Shield,
      desc: "Enterprise-grade SAML SSO, automated Okta/SCIM deprovisioning, granular permission roles, and continuous audit logging.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#08090A] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-[#121316] border border-[#232529] font-mono text-[11px] uppercase tracking-wider text-[#5E6AD2] mb-6">
            Feature Architecture
          </span>
          <h1 className="text-[40px] sm:text-[54px] md:text-[62px] font-medium text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Every detail built for speed
          </h1>
          <p className="text-[18px] text-[#8A8F98] max-w-2xl mx-auto leading-relaxed">
            Linear is engineered as a precision tool. Explore the core systems that enable software teams to build faster with higher fidelity.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {deepFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="p-8 rounded-[12px] bg-[#121316] border border-[#232529] hover:border-[#494B4D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[8px] bg-[#1B1C1F] border border-[#2F3031] flex items-center justify-center text-[#5E6AD2] mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-medium text-[#F4F4F6] mb-3">{feat.title}</h3>
                  <p className="text-[14px] text-[#8A8F98] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-10 rounded-[14px] bg-[#121316] border border-[#2F3031] text-center flex flex-col items-center">
          <h3 className="text-[28px] font-medium text-[#F4F4F6] mb-4">
            Experience Linear for yourself
          </h3>
          <p className="text-[15px] text-[#8A8F98] mb-8 max-w-md">
            Sign up in seconds and see why modern software teams never go back to legacy tools.
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

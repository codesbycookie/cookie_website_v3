import React from "react";
import { Link } from "react-router-dom";
import LinearLogo from "./LinearLogo";
import { Twitter, Github, Disc as Discord, ArrowUpRight } from "lucide-react";

export default function LinearFooter() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Issues", href: "/features" },
        { name: "Cycles", href: "/features" },
        { name: "Roadmaps", href: "/features" },
        { name: "Asks", href: "/features" },
        { name: "Insights", href: "/features" },
        { name: "Integrations", href: "/features" },
        { name: "Linear Method", href: "/method" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Linear AI Workflows", href: "/features" },
        { name: "Git & PR Automation", href: "/features" },
        { name: "Keyboard Shortcuts", href: "/features" },
        { name: "Triage & Filters", href: "/features" },
        { name: "Desktop Client", href: "https://linear.app/download" },
        { name: "Mobile App", href: "https://linear.app/mobile" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Linear", href: "/method" },
        { name: "Customers", href: "/customers" },
        { name: "Careers (We're hiring)", href: "https://linear.app/careers" },
        { name: "Brand Assets", href: "https://linear.app/brand" },
        { name: "Security & SOC2", href: "https://linear.app/security" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Changelog", href: "/changelog" },
        { name: "Documentation", href: "https://linear.app/docs" },
        { name: "API & Webhooks", href: "https://linear.app/docs/api" },
        { name: "Community Slack", href: "https://linear.app/community" },
        { name: "System Status", href: "https://linearstatus.com" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#08090A] border-t border-[#232529] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand Info & Telemetry */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-4">
                <LinearLogo className="w-5 h-5" />
              </Link>
              <p className="text-[13px] text-[#8A8F98] max-w-xs leading-relaxed mb-6">
                Linear is the system for modern software development. Designed for high-performance product teams.
              </p>
            </div>

            {/* System Status Pill */}
            <div className="flex items-center gap-2 text-[12px] text-[#8A8F98] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#59D499] shadow-[0_0_8px_#59D499]" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((sec) => (
            <div key={sec.title} className="col-span-1">
              <h4 className="text-[12px] font-mono uppercase tracking-wider text-[#62666D] mb-4">
                {sec.title}
              </h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                        {link.href.includes("linearstatus") && (
                          <ArrowUpRight className="w-3 h-3 text-[#62666D]" />
                        )}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[13px] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#232529]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#62666D]">
          <div>© {new Date().getFullYear()} Linear Orbit, Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/linear" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
              Twitter
            </a>
            <a href="https://github.com/linear" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
              GitHub
            </a>
            <a href="https://linear.app/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
              Privacy
            </a>
            <a href="https://linear.app/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F4F6] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

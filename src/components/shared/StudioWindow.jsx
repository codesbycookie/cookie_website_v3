import React, { useState } from "react";
import {
  Search,
  PenSquare,
  Activity,
  Inbox,
  Layers,
  GitPullRequest,
  Compass,
  Box,
  MoreHorizontal,
  Star,
  Tag,
  Sparkles,
  ChevronDown,
  Send,
  CheckCircle2,
} from "lucide-react";

const PROJECTS = [
  { id: "skill-link", name: "Skill Link", color: "#57C1FF" },
  { id: "vd-granite", name: "V&D Granite", color: "#D9A55B" },
  { id: "iq-bridge", name: "IQ Bridge", color: "#D3B2FF" },
  { id: "torque-toyzz", name: "Torque Toyzz", color: "#59D499" },
];

const ISSUES = {
  "vd-granite": {
    id: "CKE-214",
    title: "Export catalog v2",
    body: "Ship a bilingual product catalog with 4K stone imagery, instant filters and a one-tap quote request for overseas buyers.",
    code: "catalog_v2",
    feed: [
      { who: "Cookie", text: "opened the brief from a WhatsApp call with", target: "Srinivas", time: "9d ago", tone: "#D9A55B", Icon: Sparkles },
      { who: "Design", text: "approved the labels", target: "Catalog and Export", time: "6d ago", tone: "#D3B2FF", Icon: Tag },
      { who: "Build", text: "merged the PR", target: "filters + quote form", time: "2d ago", tone: "#59D499", Icon: GitPullRequest },
    ],
    comments: [
      { who: "srinivas", time: "3 days ago", color: "#D9A55B", text: "The new filters are exactly what our buyers kept asking for." },
      { who: "aravind", time: "just now", color: "#57C1FF", text: "Lighthouse is 98 on mobile. Shipping to production tonight." },
    ],
  },
  "skill-link": {
    id: "CKE-198",
    title: "Live classroom whiteboard",
    body: "Real-time shared whiteboard for mentors and learners, built on WebSockets with offline-safe drawing sessions.",
    code: "board_sync",
    feed: [
      { who: "Cookie", text: "scoped the sprint with", target: "the Skill Link team", time: "12d ago", tone: "#57C1FF", Icon: Sparkles },
      { who: "Build", text: "added the labels", target: "Realtime and Web", time: "8d ago", tone: "#D3B2FF", Icon: Tag },
    ],
    comments: [
      { who: "mentor", time: "1 day ago", color: "#57C1FF", text: "Drawing feels instant even on a weak connection." },
    ],
  },
  "iq-bridge": {
    id: "CKE-176",
    title: "Assessment portal launch",
    body: "A modern portfolio and partner portal that explains AI based assessments to institutions and investors.",
    code: "portal_launch",
    feed: [
      { who: "Cookie", text: "shipped the design system for", target: "IQ Bridge", time: "21d ago", tone: "#D3B2FF", Icon: Sparkles },
      { who: "Build", text: "merged the PR", target: "partner enquiry flow", time: "14d ago", tone: "#59D499", Icon: GitPullRequest },
    ],
    comments: [
      { who: "robin", time: "2 weeks ago", color: "#D3B2FF", text: "Interactive and engaging. We loved how they handled the project." },
    ],
  },
  "torque-toyzz": {
    id: "CKE-231",
    title: "WhatsApp checkout",
    body: "E-commerce storefront for RC cars and drones with a seamless WhatsApp ordering flow.",
    code: "wa_checkout",
    feed: [
      { who: "Cookie", text: "kicked off the store with", target: "Torque Toyzz", time: "5d ago", tone: "#59D499", Icon: Sparkles },
      { who: "Build", text: "added the label", target: "E-commerce", time: "3d ago", tone: "#FFC533", Icon: Tag },
    ],
    comments: [
      { who: "owner", time: "yesterday", color: "#59D499", text: "Orders landing straight in WhatsApp is a game changer." },
    ],
  },
};

export default function StudioWindow() {
  const [active, setActive] = useState("vd-granite");
  const [draft, setDraft] = useState("");
  const [extra, setExtra] = useState({});

  const issue = ISSUES[active];
  const extras = extra[active] || [];

  const send = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setExtra((prev) => ({
      ...prev,
      [active]: [...(prev[active] || []), { who: "you", time: "just now", color: "#59D499", text: draft.trim() }],
    }));
    setDraft("");
  };

  return (
    <div
      className="w-full rounded-[14px] bg-[#0B0C0E] border border-white/[0.09] overflow-hidden text-left shadow-[0_40px_120px_-20px_rgba(0,0,0,0.95),0_0_80px_-30px_rgba(217,165,91,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
      role="region"
      aria-label="Cookie studio board preview"
    >
      <div className="grid grid-cols-12 min-h-[540px]">
        {/* Sidebar */}
        <aside className="hidden md:flex md:col-span-4 lg:col-span-3 bg-[#08090A] border-r border-white/[0.07] p-3 flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2 py-1.5 pb-3 border-b border-white/[0.06]">
              <span className="flex items-center gap-2 text-[14px] font-medium text-[#F4F4F6]">
                <span className="w-4 h-4 rounded-[4px] bg-[#D9A55B] flex items-center justify-center text-[9px] text-[#08090A] font-bold">C</span>
                Cookie
                <ChevronDown className="w-3.5 h-3.5 text-[#8A8F98]" />
              </span>
              <span className="flex items-center gap-1 text-[#8A8F98]">
                <Search className="w-3.5 h-3.5" />
                <PenSquare className="w-3.5 h-3.5" />
              </span>
            </div>

            <nav className="space-y-0.5 text-[13px] text-[#8A8F98]">
              {[
                { Icon: Activity, label: "Pulse" },
                { Icon: Inbox, label: "Inbox", badge: "3" },
                { Icon: Layers, label: "My sprint" },
                { Icon: GitPullRequest, label: "Reviews" },
              ].map(({ Icon, label, badge }) => (
                <div key={label} className="flex items-center justify-between px-2.5 py-1.5 rounded-[6px] hover:bg-white/[0.04] hover:text-[#F4F4F6] transition-colors">
                  <span className="flex items-center gap-2.5"><Icon className="w-3.5 h-3.5" />{label}</span>
                  {badge && <span className="text-[10px] font-mono px-1.5 rounded bg-white/[0.08] text-[#D0D6E0]">{badge}</span>}
                </div>
              ))}
            </nav>

            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-[#62666D]">
                Studio <ChevronDown className="w-3 h-3" />
              </div>
              <div className="mt-1 space-y-0.5 text-[13px] text-[#8A8F98]">
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] hover:bg-white/[0.04]"><Compass className="w-3.5 h-3.5" />Roadmap</div>
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] hover:bg-white/[0.04]"><Box className="w-3.5 h-3.5" />Clients</div>
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#62666D]"><MoreHorizontal className="w-3.5 h-3.5" />More</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-[#62666D]">
                Projects <ChevronDown className="w-3 h-3" />
              </div>
              <div className="mt-1 space-y-0.5 text-[13px]">
                {PROJECTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    aria-pressed={active === p.id}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] transition-colors ${active === p.id ? "bg-white/[0.07] text-[#F4F4F6] font-medium" : "text-[#8A8F98] hover:bg-white/[0.04] hover:text-[#F4F4F6]"
                      }`}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="truncate">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#62666D]">
            <span>Chennai studio</span>
            <span className="text-[#59D499]">Live</span>
          </div>
        </aside>

        {/* Issue panel */}
        <section className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col justify-between">
          <div>
            <div className="h-11 border-b border-white/[0.07] px-5 sm:px-6 flex items-center justify-between text-[13px]">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC533] shadow-[0_0_8px_#FFC533] shrink-0" />
                <span className="font-mono text-[#8A8F98] shrink-0">{issue.id}</span>
                <span className="text-[#F4F4F6] font-medium truncate">{issue.title}</span>
              </div>
              <div className="flex items-center gap-3 text-[#8A8F98] shrink-0">
                <Star className="w-3.5 h-3.5 fill-[#FFC533] text-[#FFC533]" />
                <MoreHorizontal className="w-4 h-4" />
              </div>
            </div>

            <div className="p-6 sm:p-8 max-w-2xl">
              {/* Mobile project switcher */}
              <div className="md:hidden flex gap-2 overflow-x-auto pb-4 -mx-1 px-1">
                {PROJECTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(p.id)}
                    className={`shrink-0 text-[12px] px-3 py-1.5 rounded-full border transition-colors ${active === p.id ? "border-white/30 text-[#F4F4F6] bg-white/[0.07]" : "border-white/10 text-[#8A8F98]"
                      }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-medium text-[#F4F4F6] tracking-tight mb-3">{issue.title}</h3>
              <p className="text-[15px] text-[#D0D6E0] leading-relaxed mb-8">
                {issue.body}{" "}
                <code className="font-mono text-[12px] bg-white/[0.07] px-1.5 py-0.5 rounded border border-white/10 text-[#F4F4F6]">{issue.code}</code>
              </p>

              <div className="text-[11px] font-mono uppercase tracking-wider text-[#62666D] mb-4">Activity</div>
              <div className="space-y-4">
                {issue.feed.map((f, i) => {
                  const Icon = f.Icon;
                  return (
                    <div key={i} className="flex items-start gap-3 text-[13px]">
                      <span className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3 h-3" style={{ color: f.tone }} />
                      </span>
                      <span className="text-[#8A8F98]">
                        <span className="text-[#F4F4F6] font-medium">{f.who}</span> {f.text}{" "}
                        <span className="text-[#D0D6E0]">{f.target}</span>{" "}
                        <span className="text-[#62666D]">· {f.time}</span>
                      </span>
                    </div>
                  );
                })}

                {[...issue.comments, ...extras].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px] pt-1">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold text-[#08090A] shrink-0"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.who.slice(0, 2).toUpperCase()}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#F4F4F6] font-medium">{c.who}</span>
                        <span className="text-[11px] font-mono text-[#62666D]">· {c.time}</span>
                      </div>
                      <p className="text-[#D0D6E0] leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={send} className="p-4 border-t border-white/[0.07] bg-[#08090A] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#59D499] shrink-0" />
            <label htmlFor="studio-comment" className="sr-only">Leave a comment</label>
            <input
              id="studio-comment"
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Leave a comment for the Cookie team..."
              className="w-full bg-transparent text-[13px] text-[#F4F4F6] placeholder-[#62666D] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send comment"
              className="p-1.5 rounded-[6px] bg-white/[0.06] hover:bg-white/[0.12] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Search,
  PenSquare,
  Activity,
  Inbox,
  Target,
  GitPullRequest,
  Compass,
  Box,
  MoreHorizontal,
  Star,
  Tag,
  Bot,
  Sparkles,
  ChevronDown,
  BarChart3,
  Paintbrush,
  Send,
} from "lucide-react";

export default function LinearAppWindow({ onOpenCommandPalette }) {
  const [activeItem, setActiveItem] = useState("Faster app launch");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "karri",
      time: "4 min ago",
      avatarColor: "#5E6AD2",
      text: "Right now we show a spinner forever, which makes it look like the car disappeared...",
    },
    {
      id: 2,
      author: "jori",
      time: "just now",
      avatarColor: "#FFC533",
      text: "@Linear can you take a stab at this?",
    },
  ]);

  const handleSendComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: "you",
        time: "just now",
        avatarColor: "#59D499",
        text: commentText,
      },
    ]);
    setCommentText("");
  };

  return (
    <div className="w-full rounded-[14px] bg-[#0E0F12] border border-[#232529] shadow-[0_32px_120px_-16px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_0_rgba(255,255,255,0.12)] overflow-hidden text-left">
      <div className="grid grid-cols-12 min-h-[580px]">
        {/* Left Sidebar (Desktop 3.5 cols) */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-3.5 bg-[#0A0B0D] border-r border-[#1B1C1F] p-3 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Workspace Switcher & Top Actions */}
            <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#1B1C1F]/60 pb-3">
              <button className="flex items-center gap-2 text-[14px] font-medium text-[#F4F4F6] hover:text-white transition-colors">
                <span className="w-4 h-4 rounded-sm bg-[#5E6AD2] flex items-center justify-center text-[10px] text-white font-bold">
                  L
                </span>
                <span>Linear</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8A8F98]" />
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={onOpenCommandPalette}
                  className="p-1 rounded text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#1B1C1F] transition-colors"
                  title="Search (⌘K)"
                >
                  <Search className="w-3.5 h-3.5" />
                </button>
                <button
                  className="p-1 rounded text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#1B1C1F] transition-colors"
                  title="New Issue (C)"
                >
                  <PenSquare className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Core Navigation Items */}
            <nav className="space-y-0.5 text-[13px]">
              <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] cursor-pointer">
                <Activity className="w-3.5 h-3.5 text-[#8A8F98]" />
                <span>Pulse</span>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-3.5 h-3.5 text-[#8A8F98]" />
                  <span>Inbox</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#1B1C1F] text-[#8A8F98]">
                  4
                </span>
              </div>
              <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] cursor-pointer">
                <Target className="w-3.5 h-3.5 text-[#8A8F98]" />
                <span>My issues</span>
              </div>
              <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] cursor-pointer">
                <GitPullRequest className="w-3.5 h-3.5 text-[#8A8F98]" />
                <span>Reviews</span>
              </div>
            </nav>

            {/* Workspace Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono text-[#62666D] uppercase tracking-wider">
                <span>Workspace</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="space-y-0.5 mt-1 text-[13px] text-[#8A8F98]">
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] hover:text-[#F4F4F6] hover:bg-[#151619] cursor-pointer">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Initiatives</span>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] hover:text-[#F4F4F6] hover:bg-[#151619] cursor-pointer">
                  <Box className="w-3.5 h-3.5" />
                  <span>Projects</span>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#62666D] hover:text-[#8A8F98] cursor-pointer">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Favorites Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono text-[#62666D] uppercase tracking-wider">
                <span>Favorites</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="space-y-0.5 mt-1 text-[13px]">
                {/* Active Highlighted Favorite: Faster app launch */}
                <button
                  onClick={() => setActiveItem("Faster app launch")}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] transition-colors ${
                    activeItem === "Faster app launch"
                      ? "bg-[#1B1C1F] text-[#F4F4F6] font-medium"
                      : "text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFC533]" />
                  <span className="truncate">Faster app launch</span>
                </button>

                <button
                  onClick={() => setActiveItem("Agent tasks")}
                  className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] transition-colors"
                >
                  <Bot className="w-3.5 h-3.5 text-[#5E6AD2]" />
                  <span>Agent tasks</span>
                </button>

                <button
                  onClick={() => setActiveItem("Agent Insights")}
                  className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] transition-colors"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-[#59D499]" />
                  <span>Agent Insights</span>
                </button>

                <button
                  onClick={() => setActiveItem("UI Refresh")}
                  className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#151619] transition-colors"
                >
                  <Paintbrush className="w-3.5 h-3.5 text-[#D3B2FF]" />
                  <span>UI Refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom SQLite sync badge */}
          <div className="pt-3 border-t border-[#1B1C1F] flex items-center justify-between text-[11px] font-mono text-[#62666D]">
            <span>AI Era Agent Loop</span>
            <span className="text-[#59D499]">Connected</span>
          </div>
        </aside>

        {/* Right Pane: Issue Detail View (DRV-8852) */}
        <section className="col-span-12 md:col-span-8 lg:col-span-8.5 bg-[#0E0F12] flex flex-col justify-between">
          <div>
            {/* Top Breadcrumb Bar */}
            <div className="h-11 border-b border-[#1B1C1F] px-6 flex items-center justify-between text-[13px]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFC533] shadow-[0_0_8px_#FFC533]" />
                <span className="font-mono text-[#8A8F98]">DRV-8852</span>
                <span className="text-[#F4F4F6] font-medium">Faster app launch</span>
              </div>

              <div className="flex items-center gap-3 text-[#8A8F98]">
                <Star className="w-3.5 h-3.5 fill-[#FFC533] text-[#FFC533]" />
                <MoreHorizontal className="w-4 h-4 hover:text-[#F4F4F6] cursor-pointer" />
              </div>
            </div>

            {/* Issue Body */}
            <div className="p-8 max-w-2xl">
              <h2 className="text-[24px] sm:text-[28px] font-medium text-[#F4F4F6] tracking-tight mb-4">
                Faster app launch
              </h2>

              <p className="text-[15px] text-[#D0D6E0] leading-relaxed mb-10">
                Render UI before{" "}
                <code className="font-mono bg-[#1B1C1F] px-1.5 py-0.5 rounded text-[13px] text-[#F4F4F6] border border-[#232529]">
                  vehicle_state
                </code>{" "}
                sync when minimum required state is present, instead of blocking on full refresh
                during iOS startup.
              </p>

              {/* Activity Feed Section */}
              <div className="space-y-6">
                <h3 className="text-[13px] font-mono uppercase tracking-wider text-[#62666D]">
                  Activity
                </h3>

                {/* Event 1: Slack intake on behalf of Karri */}
                <div className="flex items-start gap-3 text-[13px]">
                  <div className="w-5 h-5 rounded-full bg-[#1B1C1F] border border-[#232529] flex items-center justify-center text-[#8A8F98] shrink-0 mt-0.5">
                    <Bot className="w-3 h-3 text-[#5E6AD2]" />
                  </div>
                  <div className="text-[#8A8F98]">
                    <span className="text-[#F4F4F6] font-medium">Linear</span> created the issue
                    via Slack on behalf of <span className="text-[#D0D6E0]">Karri</span>{" "}
                    <span className="text-[#62666D]">· 2min ago</span>
                  </div>
                </div>

                {/* Event 2: Triage Intelligence added labels */}
                <div className="flex items-start gap-3 text-[13px]">
                  <div className="w-5 h-5 rounded-full bg-[#1B1C1F] border border-[#232529] flex items-center justify-center text-[#8A8F98] shrink-0 mt-0.5">
                    <Tag className="w-3 h-3 text-[#FFC533]" />
                  </div>
                  <div className="text-[#8A8F98]">
                    <span className="text-[#F4F4F6] font-medium">Triage Intelligence</span> added
                    the labels <span className="text-[#D0D6E0]">Performance</span> and{" "}
                    <span className="text-[#D0D6E0]">iOS</span>{" "}
                    <span className="text-[#62666D]">· 2min ago</span>
                  </div>
                </div>

                {/* Comments Stream */}
                {comments.map((c) => (
                  <div key={c.id} className="flex items-start gap-3 text-[13px] pt-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: c.avatarColor }}
                    >
                      {c.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[#F4F4F6] font-medium">{c.author}</span>
                        <span className="text-[11px] font-mono text-[#62666D]">· {c.time}</span>
                      </div>
                      <p className="text-[#D0D6E0] leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comment / Agent Prompt Input Bar */}
          <form
            onSubmit={handleSendComment}
            className="p-4 border-t border-[#1B1C1F] bg-[#0A0B0D] flex items-center gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-[#5E6AD2] text-[10px] font-semibold text-white flex items-center justify-center shrink-0">
              KS
            </div>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Leave a comment or mention @Linear agent..."
              className="w-full bg-transparent text-[13px] text-[#F4F4F6] placeholder-[#62666D] focus:outline-none"
            />
            <button
              type="submit"
              className="p-1.5 rounded-[6px] bg-[#1B1C1F] hover:bg-[#232529] text-[#8A8F98] hover:text-[#F4F4F6] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

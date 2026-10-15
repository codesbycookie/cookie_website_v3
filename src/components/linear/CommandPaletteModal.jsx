import React, { useState, useEffect } from "react";
import { Search, CheckCircle2, GitBranch, ArrowRight, X, Clock, Sparkles } from "lucide-react";

export default function CommandPaletteModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const commands = [
    { id: "new-issue", category: "Actions", label: "Create new issue...", shortcut: "C" },
    { id: "my-issues", category: "Navigation", label: "Go to My Issues", shortcut: "G I" },
    { id: "active-cycle", category: "Navigation", label: "Go to Active Cycle", shortcut: "G C" },
    { id: "roadmap", category: "Navigation", label: "Open Initiatives Roadmap", shortcut: "G R" },
    { id: "ai-triage", category: "AI Workflows", label: "Run AI Triage on inbox", shortcut: "⌥ A" },
    { id: "branch", category: "Git", label: "Copy current issue branch name", shortcut: "⌘ ⇧ C" },
    { id: "dark-mode", category: "Preferences", label: "Toggle Theme: Dark / Dim", shortcut: "⌘ J" },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered.length, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#08090A]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Linear Command Palette Container */}
      <div
        className="relative w-full max-w-xl rounded-[12px] bg-[#121316] border border-[#2F3031] shadow-[0_24px_64px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden z-10"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#232529]">
          <Search className="w-4 h-4 text-[#8A8F98]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIdx(0);
            }}
            placeholder="Type a command or search issues..."
            className="w-full bg-transparent text-[14px] text-[#F4F4F6] placeholder-[#62666D] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#232529] transition-colors"
          >
            <span className="keycap text-[10px]">ESC</span>
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-[13px] text-[#8A8F98]">
              No commands matching "{query}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <div
                  key={cmd.id}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3 py-2 rounded-[6px] cursor-pointer text-[13px] transition-colors ${
                    isSelected ? "bg-[#5E6AD2]/20 text-[#F4F4F6]" : "text-[#D0D6E0] hover:bg-[#1B1C1F]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono text-[#8A8F98] uppercase">
                      {cmd.category}
                    </span>
                    <span>{cmd.label}</span>
                  </div>
                  <span className="keycap text-[11px] text-[#8A8F98]">{cmd.shortcut}</span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-4 py-2 bg-[#0C0D0E] border-t border-[#232529] flex items-center justify-between text-[11px] text-[#8A8F98] font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span className="text-[#5E6AD2]">Linear Protocol v2.5</span>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * Modal dialog primitive:
 * - Focus trap & focus restoration
 * - Escape key to close
 * - Backdrop click to close
 * - ARIA role="dialog", aria-modal="true"
 * - Prevents background scrolling while open
 */
export default function Modal({ isOpen, onClose, title, children, className = "" }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = "hidden";

      // Focus first focusable element or modal container
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      } else {
        modalRef.current?.focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose();
        } else if (e.key === "Tab") {
          if (!focusableElements || focusableElements.length === 0) return;
          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#08090A]/80 backdrop-blur-md animate-[fadeIn_150ms_ease-in-out]"
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[12px] bg-[#08090A] border border-[#494B4D] shadow-[0_20px_80px_rgba(0,0,0,0.9),inset_0_1px_0_0_rgba(255,255,255,0.08)] p-6 sm:p-8 focus:outline-none ${className}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#494B4D]">
          {title && (
            <h2 id="modal-title" className="text-[20px] font-semibold text-[#F4F4F6]">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-[6px] text-[#8A8F98] hover:text-[#F4F4F6] hover:bg-[#2F3031] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] cursor-pointer ml-auto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="text-[#D0D6E0]">{children}</div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Accordion primitive:
 * - Keyboard navigation (Enter/Space, ArrowUp/ArrowDown)
 * - ARIA compliant (aria-expanded, aria-controls, region)
 * - Linear/Raycast dark theme styling with hairline borders
 */
export default function Accordion({ items = [], allowMultiple = false, className = "" }) {
  const [openIndices, setOpenIndices] = useState([0]); // first item open by default
  const buttonRefs = useRef([]);

  const toggleIndex = (index) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  const handleKeyDown = (e, index) => {
    const count = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % count;
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + count) % count;
      buttonRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttonRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttonRefs.current[count - 1]?.focus();
    }
  };

  return (
    <div className={`divide-y divide-[#494B4D] border-y border-[#494B4D] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `accordion-header-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div key={index} className="transition-colors duration-100 ease-in-out">
            <h3>
              <button
                ref={(el) => (buttonRefs.current[index] = el)}
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full py-5 px-2 flex items-center justify-between text-left text-[16px] sm:text-[18px] font-medium text-[#F4F4F6] hover:text-[#D9A55B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A55B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] transition-colors duration-100 select-none group cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[12px] text-[#62666D] group-hover:text-[#D9A55B] transition-colors">
                    0{index + 1}
                  </span>
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8A8F98] transition-transform duration-200 shrink-0 ml-4 group-hover:text-[#F4F4F6] ${
                    isOpen ? "rotate-180 text-[#D9A55B]" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 pb-5 px-2 pl-9" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

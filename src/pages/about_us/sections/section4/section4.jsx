import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Users, Compass, ShieldCheck, HeartHandshake, Check } from "lucide-react";

export default function Section4() {
  const prefersReducedMotion = useReducedMotion();
  const PRINCIPLES = [
    {
      icon: Users,
      title: "Direct access to the creators",
      desc: "You talk directly with the designers and developers building your software. No account managers playing telephone, no unnecessary layers.",
      benefit: "Faster decisions and zero misunderstandings.",
    },
    {
      icon: ShieldCheck,
      title: "Fixed scopes and transparent quotes",
      desc: "Before we write a single line or design a screen, you receive a concrete breakdown of deliverables, timeline, and exact costs.",
      benefit: "No surprise invoices or budget runaways.",
    },
    {
      icon: HeartHandshake,
      title: "Complete ownership of your product",
      desc: "Every asset, design file, and code repository belongs 100% to your business. We build systems you can easily run and manage for years.",
      benefit: "Zero proprietary lock-in.",
    },
    {
      icon: Compass,
      title: "Design focused on business results",
      desc: "We prioritize clean user journeys, fast load times, and simple interfaces that make your customers feel confident taking action.",
      benefit: "Software that pays for itself.",
    },
  ];

  const gridContainerRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: -1000, y: -1000 });
  const [isGridHovered, setIsGridHovered] = useState(false);

  const handleGridMouseMove = (e) => {
    if (!gridContainerRef.current) return;
    const rect = gridContainerRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      aria-label="How we work with clients"
      className="w-full py-20 md:py-28 px-5 sm:px-8 border-t border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="linear-headline text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-[1.14] mb-3">
            How we work with clients
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#8A8F98]">
            Four simple rules that ensure every project is predictable, calm, and successful.
          </p>
        </div>

        <div
          ref={gridContainerRef}
          onMouseMove={handleGridMouseMove}
          onMouseEnter={() => setIsGridHovered(true)}
          onMouseLeave={() => setIsGridHovered(false)}
          className="relative rounded-[16px] border border-white/[0.08] overflow-hidden bg-white/[0.08] shadow-[inset_0_1px_0_rgba(217,165,91,0.08)]"
        >
          {!prefersReducedMotion && isGridHovered && (
            <div
              className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 hidden md:block"
              style={{
                background: `radial-gradient(460px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(217, 165, 91, 0.055), transparent 80%)`,
              }}
              aria-hidden="true"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-[#08090A] p-7 sm:p-9 flex flex-col justify-between hover:bg-[rgba(245,235,220,0.025)] transition-colors duration-200 group relative z-0"
                >
                  <div>
                    <Icon className="w-5 h-5 text-[#8A8F98] group-hover:text-[#F7F8F8] transition-colors duration-200 mb-5" />

                    <h3 className="text-[18px] sm:text-[19px] font-medium text-[#F7F8F8] mb-2.5">
                      {principle.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-[#8A8F98] leading-relaxed mb-6">
                      {principle.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[13px] text-[#8A8F98]">
                    <Check className="w-3.5 h-3.5 text-[#D9A55B]/80 shrink-0" />
                    <span>{principle.benefit}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

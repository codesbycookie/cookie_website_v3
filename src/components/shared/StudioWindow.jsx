import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

const FEATURED_PROJECTS = [
  {
    id: "torque-toyzz",
    name: "Torque Toyzz",
    client: "Torque Toyzz",
    category: "E-Commerce & WhatsApp Commerce",
    tagline: "Mobile-first catalog with 1-tap direct WhatsApp checkout",
    outcome: "3.4x Order Conversion",
    turnaround: "14 Days",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
    link: "/work/torque-toyzz",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    accent: "#D9A55B",
  },
  {
    id: "iq-bridge",
    name: "IQ Bridge",
    client: "IQ Bridge",
    category: "EdTech & AI Assessment",
    tagline: "High-credibility platform presenting AI assessment tools to universities",
    outcome: "14 Countries Reached",
    turnaround: "21 Days",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
    link: "/work/iq-bridge",
    tags: ["React 19", "Vite", "Node.js"],
    accent: "#57C1FF",
  },
  {
    id: "audnex",
    name: "Audnex",
    client: "Audnex Studio",
    category: "Creative Agency Showcase",
    tagline: "Interactive portfolio with sub-100ms hardware-accelerated transitions",
    outcome: "Global Inquiries",
    turnaround: "28 Days",
    image: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
    link: "/work/audnex",
    tags: ["Motion UI", "React", "CMS"],
    accent: "#59D499",
  },
];

export default function StudioWindow() {
  return (
    <div className="w-full text-left">
      {/* Clean Grid of Best Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="group relative flex flex-col rounded-[20px] bg-[#0C0D11] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.85)] cursor-pointer"
          >
            {/* Visual Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50 border-b border-white/[0.06]">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D11] via-transparent to-transparent pointer-events-none" />

              {/* Status Pill */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#D0D6E0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#59D499] animate-pulse" />
                <span>Production</span>
              </div>
            </div>

            {/* Content Body: Generous Spacings */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                {/* Category */}
                <div className="text-[12px] font-mono text-[#D9A55B] mb-2">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="text-[20px] sm:text-[22px] font-medium text-[#F4F4F6] tracking-tight group-hover:text-[#D9A55B] transition-colors mb-2.5">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-[#8A8F98] leading-relaxed mb-6">
                  {project.tagline}
                </p>
              </div>

              <div>
                {/* Commercial Impact Badge */}
                <div className="p-3 rounded-[10px] bg-white/[0.02] border border-white/[0.06] mb-5 flex items-center justify-between text-[12px] font-mono">
                  <span className="text-[#59D499] flex items-center gap-1.5 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.outcome}</span>
                  </span>
                  <span className="text-[#62666D]">
                    {project.turnaround}
                  </span>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[13px]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#8A8F98]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[#F4F4F6] font-medium group-hover:text-[#D9A55B] group-hover:translate-x-1 transition-all shrink-0 ml-2">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Clean Footer Link */}
      <div className="mt-8 flex items-center justify-center">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[14px] font-medium text-[#F4F4F6] hover:text-[#D9A55B] transition-all"
        >
          <span>Explore All Case Studies & Shipped Projects</span>
          <ArrowRight className="w-4 h-4 text-[#D9A55B]" />
        </Link>
      </div>
    </div>
  );
}

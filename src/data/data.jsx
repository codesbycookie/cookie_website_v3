import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const homepage = {
  section1: {
    globe_description:
      "Websites, mobile apps, and custom tools built for speed and clarity. Shipped by engineers in Chennai.",
    first_button: "See our work",
    second_button: "Start a project",
  },
  section2: {
    heading: "Software built to ship and scale",
    description:
      "We design and engineer production software for founders and growing teams. Fast load times, clean code, zero agency layers.",
    feature_cards: [
      {
        title: "Web Development",
        content:
          "High-performance web apps built with modern React. Fast to load, easy to index, and structured for conversion.",
        img: "./imgs/web-development-icon.svg",
      },
      {
        title: "App Development",
        content:
          "iOS and Android apps with native responsiveness. One unified codebase that runs reliably in production.",
        img: "./imgs/Mobile-dev.png",
      },
    ],
  },
  section3: {
    heading: "Design, distribution, and code support under one roof",
    cards: [
      {
        title: "Branding",
        description:
          "Clean visual identities and design systems that make your product immediately recognisable.",
      },
      {
        title: "Digital Marketing",
        description:
          "Technical SEO and targeted acquisition campaigns focused on qualified pipeline, not vanity traffic.",
      },
      {
        title: "Tech Support",
        description:
          "Direct help with React, Node.js, and cloud deployments. We fix critical bugs and unblock client launches.",
      },
    ],
  },
  section4: {
    title: "How we work from idea to launch",
    steps: [
      {
        title: "Scope and structure",
        desc: "We map your user journeys and architecture into a clear, fixed-scope plan on day one.",
        label: "Design",
      },
      {
        title: "Build with precision",
        desc: "Clean code and weekly staging previews. You test working software as it gets written.",
        label: "Develop",
      },
      {
        title: "Deploy and support",
        desc: "Thorough testing before launch, followed by active production support after go-live.",
        label: "Deliver",
      },
    ],
  },
  section5: {},
  section6: {
    title: "Client feedback",
    reviews: [
      {
        name: "Tharun",
        username: "@jack",
        role: "Founder, How to Cook",
        body: "Fast responses and clear pricing throughout the build. They delivered exactly what we scoped.",
        img: "/imgs/How_to_cook_logo.svg",
      },
      {
        name: "Karthikeyan",
        username: "@jill",
        role: "Director, Traffic",
        body: "The quality of the final product exceeded expectations. Fast, clean, and delivered ahead of schedule.",
        img: "/imgs/Traffic-logo.jpg",
      },
      {
        name: "JothiLakshmi",
        username: "@john",
        role: "Operations Head, Tourist",
        body: "Direct communication with the builders and quick turnaround on every single request.",
        img: "/imgs/Tourist-logo.jpg",
      },
      {
        name: "Srinivas P",
        username: "@jane",
        role: "Managing Director, V&D Granite",
        body: "Reliable engineering and transparent scopes. Our product launched without hitches.",
        img: "/imgs/V&D-logo.png",
      },
      {
        name: "Hitheeswar",
        username: "@jenny",
        role: "CEO, Audnex",
        body: "Exceptional speed and technical execution. Our international inbound inquiries grew quickly after launch.",
        img: "/imgs/Audnex-logo.jpg",
      },
      {
        name: "Robin Sighla",
        username: "@james",
        role: "Co-Founder, IQ Bridge",
        body: "Clear collaboration from day one. They handled our platform requirements with high precision.",
        img: "/imgs/iq-bridge-logo.png",
      },
    ],
    title2: "Recent work",
    projects: [
      {
        title: "Skill link: Real-time learning platform",
        description: "Virtual classroom environment with collaborative tools, built for reliable low-latency sessions.",
        img: "/imgs/Skill_link_mockup.svg",
      },
      {
        title: "Elderly: Health companion app",
        description: "Clean medication tracking designed for older adults. Zero ads, simple alerts, and clear text.",
        img: "/imgs/Elderly-Mock-up.svg",
      },
      {
        title: "Velu’s and Son’s: Heritage food brand",
        description: "Clean digital storefront built to showcase product purity and capture direct retail orders.",
        img: "/imgs/Cashew_Mockup.svg",
      },
    ],
  },
  section7: {
    title: "Ready to build your next product?",
    description: "Tell us what you are building. We will reply with a clear scope, timeline, and quote.",
    first_button: "Start a project",
    second_button: "Book a call",
  },
  section8: {
    title: "Frequently asked questions",
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We build web applications, mobile apps, custom ERP tools, UI/UX systems, and technical brand identities. One team handles design and code.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A focused web MVP typically takes 2 to 4 weeks. Larger full-stack applications take 6 to 12 weeks depending on scope.",
      },
      {
        question: "Do you offer support?",
        answer:
          "Yes. We monitor production performance, patch issues, and provide structured monthly support agreements.",
      },
      {
        question: "Can I see examples?",
        answer:
          "Yes. Our portfolio includes live web apps, e-commerce stores, and enterprise tools with documented case studies.",
      },
      {
        question: "What’s your process?",
        answer:
          "We start with a scoping sprint, build clickable Figma prototypes, push weekly staging releases, and test before launch.",
      },
      {
        question: "Do you have case studies?",
        answer:
          "Yes. We document the architecture, timelines, and business results for our major client projects.",
      },
      {
        question: "Questions about quotes?",
        answer:
          "We provide fixed-scope quotes. You know exactly what we are building, what it costs, and when it ships before we write code.",
      },
      {
        question: "Questions post-launch?",
        answer:
          "We assist with DNS cutover, initial user traffic, uptime monitoring, and any immediate adjustments needed.",
      },
    ],
    description: "Have a specific project in mind?",
    button: "Contact Us",
  },
};

export const aboutpage = {
  section1: {
    title: ["The team turning ideas into ", "production software"],
    subtitle:
      "We are an engineering and design studio in Chennai. We build software for founders and businesses who care about craft.",
    img: "/imgs/placeholder.png",
  },
  section2: {
    title: "How we built the studio",
    items: [
      {
        title: "Chapter 1: The foundation",
        description:
          "We started with a single conviction: early-stage companies and growing businesses deserve software built to the highest engineering standard.",
        image:
          "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute bottom-80 left-[20%] rotate-[-5deg]",
      },
      {
        title: "Chapter 2: First client deliveries",
        description:
          "We shipped our first commercial websites and e-commerce stores. We learned to scope tighter, cut fluff, and ship faster.",
        image:
          "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-40 left-[25%] rotate-[-7deg]",
      },
      {
        title: "Chapter 3: Full-stack applications",
        description:
          "We moved from static marketing sites to dynamic applications: authentication, real-time sync, and relational databases.",
        image:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-5 left-[40%] rotate-[8deg]",
      },
      {
        title: "Chapter 4: Process and standards",
        description:
          "We established our development sprint cadence: weekly staging builds, strict component design systems, and rigorous review.",
        image:
          "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-32 left-[55%] rotate-[10deg]",
      },
      {
        title: "Chapter 5: Expanding capabilities",
        description:
          "We integrated mobile application development and custom ERP tools, allowing clients to run operations on a single unified stack.",
        image:
          "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-20 right-[35%] rotate-[2deg]",
      },
      {
        title: "Chapter 6: Working across India",
        description:
          "Our client base expanded across manufacturing, edtech, retail, and professional services, delivering consistent production uptime.",
        image:
          "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-24 left-[45%] rotate-[-7deg]",
      },
      {
        title: "Chapter 7: Today and what is ahead",
        description:
          "A close-knit team of engineers and designers shipping software that solves real business problems. No middlemen, no excess overhead.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-8 left-[30%] rotate-[4deg]",
      },
    ],
  },
  section3: {
    title: "Who are we",
    tagline: "We build software with intent, precision, and ownership",
    items: [
      {
        title: "Engineering first",
        description: "Clean component structures, fast load speeds, and readable codebases your team can own long term.",
        header: "Code quality",
        className: "md:col-span-2",
      },
      {
        title: "Direct communication",
        description: "You collaborate directly with the designers and developers writing your software.",
        header: "Zero middlemen",
        className: "md:col-span-1",
      },
      {
        title: "Focused design",
        description: "Interfaces designed for clarity and speed. Every element serves an explicit user action.",
        header: "Product craft",
        className: "md:col-span-1",
      },
      {
        title: "Fixed commitments",
        description: "Clear deliverables, realistic timelines, and transparent pricing before work begins.",
        header: "Predictable delivery",
        className: "md:col-span-2",
      },
    ],
  },
  section4: {
    hypertext: "Built in Chennai. Engineered for founders everywhere.",
    fliptext: "~ Built by founders, for founders ~",
  },
};

export const contactpage = {};

export const servicespage = {
  section1: {
    title: ["Execution that matches ", "your vision", " and your timeline"],
    subtitle: "Web apps, mobile apps, ERP systems, and brand design. Quoted up front with clear deliverables.",
  },
  section2: {
    title: "Packages built for every stage of growth",
    subtitle: "Choose a defined starting scope. Every package can be adjusted to match your exact requirements.",
    packages: [
      {
        title: "Business LaunchPad",
        subtitle: "The foundation for a new venture.",
        features: [
          "Custom brand mark with copyright documentation",
          "Responsive web application development",
          "Custom domain configuration with SSL security",
          "Technical SEO and speed optimization",
          "Social media identity templates",
          "Google Business profile setup",
        ],
      },
      {
        title: "LevelUp Pack",
        subtitle: "For businesses ready to expand market reach.",
        features: [
          "Full brand identity and vector assets",
          "Multi-page business web platform",
          "Targeted customer acquisition campaigns",
          "Search ranking and Core Web Vitals optimization",
          "Third-party API integrations and maintenance",
          "Influencer outreach and collaboration assets",
          "Google Business and local search configuration",
        ],
      },
      {
        title: "The Scale-Cart",
        subtitle: "Full e-commerce infrastructure for commerce brands.",
        features: [
          "E-commerce web store and mobile application",
          "Custom admin dashboard and sales analytics",
          "Brand identity system with complete vector files",
          "Conversion rate and performance optimization",
          "Ongoing technical maintenance and uptime monitoring",
          "Content strategy and promotional assets",
          "Paid search and retargeting campaigns",
          "Direct WhatsApp checkout and order confirmation",
        ],
      },
    ],
  },
  section3: {
    title: "Our delivery process",
    subtitle: "A structured sequence so you always know what ships next.",
    timeline_data: [
      {
        title: "Research",
        content: (
          <div className="py-10">
            <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
              We begin by understanding your operations, customer personas, and technical constraints. This keeps us from building unnecessary features.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imgs/Research.webp"
                alt="Research stage 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Research-2.jpg"
                alt="Research stage 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Research-4.png"
                alt="Research stage 3"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Research-3.jpg"
                alt="Research stage 4"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Design",
        content: (
          <div className="py-10">
            <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
              We design interactive wireframes and high-fidelity screens.
            </p>
            <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
              You test the user flow before a single line of backend code is committed.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imgs/Design-1.png"
                alt="Design blueprint 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Design-2.png"
                alt="Design blueprint 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Design-3.png"
                alt="Design blueprint 3"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Design-4.jpeg"
                alt="Design blueprint 4"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Develop",
        content: (
          <div className="py-10">
            <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
              Clean, modular code built on modern frameworks.
            </p>
            <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
              We deliver weekly staging builds so you can inspect real progress as it happens.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imgs/Development-1.jpeg"
                alt="Development sprint 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Development-2.jpg"
                alt="Development sprint 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Development-3.jpg"
                alt="Development sprint 3"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Development-4.jpg"
                alt="Development sprint 4"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Delivery",
        content: (
          <div className="py-10">
            <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
              On time. On point.
            </p>
            <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
              We deploy only after thorough cross-browser QA and security testing. Then we monitor performance and support your team post-launch.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imgs/Skill_link_mockup.svg"
                alt="Delivered product 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Elderly-Mock-up.svg"
                alt="Delivered product 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Cashew_Mockup.svg"
                alt="Delivered product 3"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Project-2.png"
                alt="Delivered product 4"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
            </div>
          </div>
        ),
      },
    ],
  },
  section4: {
    title: "What we build",
    subtitle: "Six core capabilities delivered by one unified studio.",
    services: [
      {
        title: "Web Development",
        description: [
          "Fast, responsive websites and web apps",
          "built on modern React architectures",
          "engineered to load fast and convert.",
        ],
      },
      {
        title: "ERP Systems",
        description: [
          "Custom internal tools and dashboards",
          "tailored to your actual operations",
          "built to scale without bloat.",
        ],
      },
      {
        title: "UI/UX Design",
        description: [
          "Clean, intuitive user interfaces",
          "focused on user clarity and speed",
          "reducing friction at every step.",
        ],
      },
      {
        title: "Digital Marketing",
        description: [
          "Technical SEO and performance ads",
          "targeting high-intent customer search",
          "measuring real revenue impact.",
        ],
      },
      {
        title: "Mobile Development",
        description: [
          "Native-performance iOS and Android apps",
          "built for fluid responsiveness",
          "tested across real device viewports.",
        ],
      },
      {
        title: "Branding",
        description: [
          "Memorable logos and design systems",
          "giving your business credibility",
          "built for digital and print formats.",
        ],
      },
    ],
  },
};

export const servicepage = servicespage;

export const portfoliopage = {
  section1: {
    title: ["Case studies in ", "real products", " built for ", "real businesses"],
    subtitle: "Selected web applications, mobile platforms, and tools shipped for our clients.",
  },
  section2: {
    content: {
      title: "Built for production, not from generic templates.",
      tagline: [
        "Thoughtful design. Clean code.",
        "Engineered around your actual business operations.",
      ],
      project: [
        "Skill Link: Online learning platform",
        "Virtual classroom with real-time collaborative whiteboards built with React, Node.js, and WebSockets.",
        "V&D Granite: Global export catalog",
        "B2B export catalog and quotation management platform designed for international stone buyers.",
      ],
      images: [
        "/imgs/Skill_link_mockup.svg",
        "/imgs/Project-2.png",
      ],
    },
    images: [
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763747072/abe746ee-6199-4b2f-bfe1-653722e87a31.png",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763747210/f0feb4d9-fe85-4ce7-b567-0fa979167c80.png",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763747158/9b496f2a-06ca-490d-8d47-587b75da95b1.png",
      "/imgs/Project-2.png",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763747951/Screenshot_2025-11-21_232834_y9yogu.png",
      "/imgs/Fashbridge-logo.png",
      "/imgs/iq-bridge-logo.png",
      "/imgs/Cashew_Mockup.svg",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763748256/Screenshot_2025-11-21_233345_wnodom.png",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763748113/Screenshot_2025-11-21_233129_nbsiii.png",
      "/imgs/Traffic-logo.jpg",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763747608/77a9bb23-3601-46ee-b370-f33bfe566586.png",
      "/imgs/V&D-logo.png",
      "/imgs/Tourist-logo.jpg",
      "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763747850/Screenshot_2025-11-21_232650_yzvags.png",
      "/imgs/Audnex-logo.jpg",
      "/imgs/How_to_cook_logo.svg",
      "/imgs/Elderly-Mock-up.svg",
    ],
  },
  section3: {
    count: 40,
    title: "+ products shipped and supported",
    subtitle: "From early prototypes to high-traffic commercial platforms across India.",
    button: "Start a project",
  },
  section4: {
    title: "Detailed case studies",
    cards: [
      {
        slug: "iq-bridge",
        title: "IQ Bridge: EdTech portfolio platform",
        client: "IQ Bridge",
        year: "2025",
        category: "Web Application & UI/UX",
        services: ["Product Design", "Frontend Engineering", "AI UI"],
        timeline: "3 Weeks",
        location: "Bengaluru, India",
        stack: ["React", "Tailwind CSS", "Vite", "Node.js"],
        description:
          "A structured portfolio website for an educational technology company presenting AI-assisted assessment tools to institutions.",
        src: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423538/iqbridge_cs_bubzkk.jpg",
        ctaText: "View Case Study",
        ctaLink: "/work/iq-bridge",
        content: () => {
          return (
            <p>
              IQ Bridge required a clean, credible web platform to explain their assessment products to universities, school administrators, and investors. We designed a clear information hierarchy and built a responsive site that clarifies their product suite and captures partner inquiries.
            </p>
          );
        },
      },
      {
        slug: "audnex",
        title: "Audnex: Creative studio showcase",
        client: "Audnex",
        year: "2025",
        category: "Portfolio & Motion UI",
        services: ["Interactive Showcase", "Motion Design", "CMS"],
        timeline: "4 Weeks",
        location: "Chennai, India",
        stack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
        description:
          "An interactive portfolio built for a creative agency, featuring smooth motion transitions and responsive case studies.",
        src: "https://res.cloudinary.com/dh8zo1lan/image/upload/q_auto,f_auto/v1753423530/audnex_website_kr9xn2.jpg",
        ctaText: "View Case Study",
        ctaLink: "/work/audnex",
        content: () => {
          return (
            <p>
              Audnex needed a distinctive digital presence to compete in international markets. We built an interactive showcase with hardware-accelerated transitions and optimized media delivery, helping their team present work to overseas enterprise prospects.
            </p>
          );
        },
      },
      {
        slug: "sap-checklist",
        title: "SAP Checklist Portal: Operations management",
        client: "SAP Consulting Group",
        year: "2025",
        category: "Enterprise Web Application",
        services: ["Full-Stack App", "Role-Based Auth", "Analytics"],
        timeline: "6 Weeks",
        location: "Hyderabad, India",
        stack: ["React", "Tailwind CSS", "Express", "PostgreSQL"],
        description:
          "A centralized checklist tool for SAP consultants to orchestrate tasks across implementation, testing, and go-live phases.",
        src: "/imgs/sap_checklist.jpg",
        ctaText: "View Case Study",
        ctaLink: "/work/sap-checklist",
        content: () => {
          return (
            <p>
              Complex enterprise ERP rollouts involve hundreds of verification gates across functional modules. We built a specialized web-based checklist portal allowing consulting leads to track progress, assign responsibilities, and verify milestones before cutover.
            </p>
          );
        },
      },
      {
        slug: "torque-toyzz",
        title: "Torque Toyzz: E-commerce platform",
        client: "Torque Toyzz",
        year: "2025",
        category: "E-Commerce & WhatsApp Commerce",
        services: ["E-Commerce", "Catalog Search", "WhatsApp API"],
        timeline: "2 Weeks",
        location: "Chennai, India",
        stack: ["Next.js", "Tailwind CSS", "WhatsApp Business API"],
        description:
          "A fast online catalog for a Chennai remote-controlled model retailer, with direct WhatsApp order integration.",
        src: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1763730491/Torque_Toyzz_1_1_ulc32t.png",
        ctaText: "View Case Study",
        ctaLink: "/work/torque-toyzz",
        content: () => {
          return (
            <p>
              Torque Toyzz required an accessible e-commerce experience to showcase remote-controlled vehicles and accessories. We built a mobile-first catalog with immediate product search and direct WhatsApp order confirmation, simplifying the buying flow for mobile shoppers.
            </p>
          );
        },
      },
    ],
  },
};

export const navbar = {
  title: ["Cookie Inc", "."],
  pages: [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/work",
      name: "Work",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ],
};

export const footer = {
  company: {
    name: "Cookie Inc",
    logo: "/imgs/cookie_white.png",
    highlight: ".",
    description: "We design and build production-ready software for ambitious businesses in Chennai and beyond.",
    email_placeholder: "Enter your email",
    email_button: "Get in touch",
  },
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Selected work", href: "/work" },
    { name: "Case studies", href: "/work#case-studies" },
    { name: "Services", href: "/#services" },
    { name: "Our studio", href: "/about" },
    { name: "Direct contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", icon: Facebook },
    { name: "Instagram", icon: Instagram },
    { name: "X", icon: Twitter },
    { name: "LinkedIn", icon: Linkedin },
  ],
  policies: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  copyright: "© 2026 Cookie Inc. All rights reserved.",
};

export const social_links = {
  whatsapp: "https://wa.cookie.org.in",
  instagram: "https://instagram.cookie.org.in",
  linkedin: "https://linkedin.cookie.org.in",
  twitter: "https://twitter.cookie.org.in",
  gmb: "https://gmb.cookie.org.in",
};

// Architecture Compliance (Pattern D: UPPER_SNAKE_CASE exports)
export const HOME = homepage;
export const ABOUT = aboutpage;
export const SERVICES = servicespage;
export const PORTFOLIO = portfoliopage;
export const CONTACT = contactpage;
export const NAVBAR = navbar;
export const FOOTER = footer;
export const SOCIAL_LINKS = social_links;


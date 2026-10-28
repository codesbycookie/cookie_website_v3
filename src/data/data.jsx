import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const homepage = {
  section1: {
    globe_description:
      "From high-converting web applications to native-speed mobile apps, we engineer production software that helps ambitious businesses dominate their category.",
    first_button: "Explore Our Work",
    second_button: "Launch Your Project",
  },
  section2: {
    heading: "Software Engineered to Outperform, Scale, and Convert",
    description:
      "We don't build generic templates. We architect bespoke digital products designed to turn casual visitors into paying customers and power high-volume business operations.",
    feature_cards: [
      {
        title: "High-Performance Web Apps",
        content:
          "Blazing-fast, SEO-dominant web platforms engineered with modern React. Built for sub-second load times, flawless responsiveness, and aggressive conversion rates.",
        img: "./imgs/web-development-icon.svg",
      },
      {
        title: "Native Mobile Applications",
        content:
          "High-octane iOS and Android apps crafted for fluid responsiveness. One unified, bulletproof codebase engineered to perform under heavy production user traffic.",
        img: "./imgs/Mobile-dev.png",
      },
    ],
  },
  section3: {
    heading:
      "Engineering, brand craft, and market distribution — unified under one roof.",
    cards: [
      {
        title: "Brand Architecture & Identity",
        description:
          "Iconic brand marks, comprehensive design systems, and visual guidelines that command instant authority and make your business unforgettable.",
      },
      {
        title: "Performance Marketing & SEO",
        description:
          "Technical search dominance and targeted acquisition funnels built to drive qualified, high-ticket customer pipeline rather than vanity impressions.",
      },
      {
        title: "Dedicated Technical Support",
        description:
          "Direct access to senior software engineers. We deploy, monitor cloud infrastructure, patch critical bugs, and unblock high-stakes product launches.",
      },
    ],
  },
  section4: {
    title:
      "Our High-Velocity Process: From Concept to Production in Three Sprints",
    steps: [
      {
        title: "Architect & Wireframe",
        desc: "We dissect your business model, map every user touchpoint, and lock in a fixed-scope architectural plan before writing a single line of code.",
        label: "Design",
      },
      {
        title: "Build With Precision",
        desc: "Clean, maintainable code with weekly staging releases. You interact with working software every 7 days as it is being engineered.",
        label: "Develop",
      },
      {
        title: "Stress-Test & Deploy",
        desc: "Rigorous cross-device QA, Core Web Vitals tuning, and active production telemetry to guarantee flawless performance from day one.",
        label: "Deliver",
      },
    ],
  },
  section5: {},
  section6: {
    title: "Battle-Tested by Founders. Proven in Production.",
    reviews: [
      {
        name: "Akilesh Sampath",
        username: "@akilesh",
        role: "Founder, ERP System",
        body: "They did a marvelous job. This custom ERP streamlined our entire institution's daily workflows, eliminated manual paperwork, and paid for itself in months.",
        img: "/imgs/Sap-Logo.png",
      },
      {
        name: "Karthikeyan",
        username: "@karthik",
        role: "Director, Traffic Logistics",
        body: "The speed and visual polish of the final product blew us away. Flawless engineering, zero agency layers, and delivered ahead of schedule.",
        img: "/imgs/Traffic-logo.jpg",
      },
      {
        name: "JothiLakshmi",
        username: "@jothi",
        role: "Operations Head, Tourist",
        body: "Direct WhatsApp communication with the builders, crystal-clear pricing, and zero middleman delay. Hands-down our best technology partner.",
        img: "/imgs/Tourist-logo.jpg",
      },
      {
        name: "Srinivas P",
        username: "@srinivas",
        role: "Managing Director, V&D Granite",
        body: "Transparent quotes, rock-solid engineering, and an export catalog platform that opened major high-value international buyer leads.",
        img: "/imgs/V&D-logo.png",
      },
      {
        name: "Hitheeswar",
        username: "@hitheeswar",
        role: "CEO, Audnex",
        body: "World-class motion UI and sub-100ms execution speed. Inbound global client inquiries surged immediately after our new platform went live.",
        img: "/imgs/Audnex-logo.jpg",
      },
      {
        name: "Robin Sighla",
        username: "@robin",
        role: "Co-Founder, IQ Bridge",
        body: "Incredible interactive engineering. They handled complex platform requirements with deep precision, proactive communication, and absolute ownership.",
        img: "/imgs/iq-bridge-logo.png",
      },
    ],
    title2: "Featured Production Work",
    projects: [
      {
        title: "Torque Toyzz – High-Velocity E-Commerce Hub",
        description:
          "Mobile-first RC commerce catalog with 1-tap direct WhatsApp checkout, sub-100ms product search, and automated inventory sync.",
        img: "/imgs/Torque_toyzz_tab.jpeg",
      },
      {
        title: "ERP Enterprise Portal – Academic & Operational Suite",
        description:
          "Unified multi-role management portal for institutions handling real-time fee tracking, attendance, faculty scheduling, and student records.",
        img: "/imgs/Sap_app.jpeg",
      },
      {
        title: "Chitu Vibes – Fluid Mini-Commerce Application",
        description:
          "High-engagement retail storefront designed for rapid product discovery, frictionless mobile ordering, and direct social commerce.",
        img: "/imgs/Chitu_vibes_laptop.png",
      },
    ],
  },
  section7: {
    title: "Ready to Build Something That Actually Moves the Needle?",
    description:
      "Tell us what you're building. We review your requirements and reply within 1 business day with clear architecture, realistic milestones, and a fixed quote.",
    first_button: "Start Your Project",
    second_button: "Chat on WhatsApp",
  },
  section8: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What services does Cookie Inc. deliver?",
        answer:
          "We engineer custom web applications, native-feel iOS & Android apps, custom ERP systems, UI/UX design systems, and technical brand identities. One cohesive engineering studio handles everything from first wireframe to cloud production.",
      },
      {
        question: "How long does a typical build take?",
        answer:
          "A focused web MVP or marketing engine typically ships in 2 to 4 weeks. Full-scale full-stack platforms, ERPs, and mobile applications take 6 to 12 weeks depending on complexity. We quote up-front with locked delivery dates.",
      },
      {
        question: "Do you provide post-launch support and maintenance?",
        answer:
          "Yes. We monitor production uptime, push security patches, optimize database queries, and provide structured monthly support SLAs so your software runs smoothly as user traffic multiplies.",
      },
      {
        question: "Can we review live case studies of past work?",
        answer:
          "Absolutely. Our portfolio showcases live platforms spanning e-commerce, EdTech, manufacturing, logistics, and creative agencies. We are happy to walk you through our technical architecture on a call.",
      },
      {
        question: "What is your development cadence?",
        answer:
          "We work in rapid 1-week sprints. Every 7 days, you receive a clickable live staging build. You test and validate working software as it gets written, ensuring total transparency and zero surprises.",
      },
      {
        question: "How does fixed-scope pricing work?",
        answer:
          "No surprise hourly billing or hidden agency fees. We define deliverables, technical milestones, and timelines upfront. You know the exact cost before we write the first line of code.",
      },
      {
        question: "What happens after our product goes live?",
        answer:
          "We manage domain configuration, DNS cutover, SSL certification, server scaling, and initial real-world traffic monitoring to guarantee a seamless launch day.",
      },
      {
        question: "How do we get started?",
        answer:
          "Simply reach out through our contact form or ping our founders directly on WhatsApp at +91 86106 63178. We will schedule a scoping call and share a structured quote within 24 hours.",
      },
    ],
    description: "Have a specific project or idea in mind? Let's talk.",
    button: "Contact Our Engineers",
  },
};

export const aboutpage = {
  section1: {
    title: ["The Studio Turning Bold Ideas into ", "Market Leaders"],
    subtitle:
      "We are an engineering and design studio in Chennai. We cut through agency fluff, eliminate layers of bureaucracy, and craft production software for founders who refuse to compromise on quality.",
    img: "/imgs/placeholder.png",
  },
  section2: {
    title: "How We Built the Studio — From Zero to High-Velocity Shipping",
    items: [
      {
        title: "Chapter 1: The Core Conviction",
        description:
          "We started with one clear premise: ambitious businesses deserve software built to the highest engineering and aesthetic standard — without paying bloated agency overhead.",
        image:
          "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute bottom-80 left-[20%] rotate-[-5deg]",
      },
      {
        title: "Chapter 2: First High-Impact Deliveries",
        description:
          "We shipped our first commercial platforms and e-commerce engines. We developed our rapid scoping framework: cut the unnecessary fat, focus on core user journeys, and ship faster than anyone else.",
        image:
          "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-40 left-[25%] rotate-[-7deg]",
      },
      {
        title: "Chapter 3: Full-Stack Power & Custom Architecture",
        description:
          "We graduated to complex full-stack enterprise systems: role-based authentication, real-time database synchronisation, payment gateway architectures, and high-concurrency portals.",
        image:
          "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-5 left-[40%] rotate-[8deg]",
      },
      {
        title: "Chapter 4: The 7-Day Sprint Cadence",
        description:
          "We codified our production rhythm: strict component design systems, weekly staging releases, and zero-defect deployments. Clients test living software as each sprint concludes.",
        image:
          "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-32 left-[55%] rotate-[10deg]",
      },
      {
        title: "Chapter 5: Expanding Into Mobile & Custom ERPs",
        description:
          "We unified mobile application engineering and operational ERP development under one roof. Our clients began running their entire sales, inventory, and operations on software built by our team.",
        image:
          "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-20 right-[35%] rotate-[2deg]",
      },
      {
        title: "Chapter 6: National Footprint & Proven Scale",
        description:
          "Our client roster expanded across Chennai, Bengaluru, Hyderabad, and overseas — shipping mission-critical platforms across edtech, manufacturing, commerce, and logistics.",
        image:
          "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-24 left-[45%] rotate-[-7deg]",
      },
      {
        title: "Chapter 7: The Present and Beyond",
        description:
          "A tight, elite team of engineers and product designers shipping software that moves business needle. No junior handoffs, no corporate bloat — just pure engineering excellence.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        className: "absolute top-8 left-[30%] rotate-[4deg]",
      },
    ],
  },
  section3: {
    title: "Who Are We?",
    tagline: "At Cookie Inc., we don’t just build — we engineer for commercial dominance",
    items: [
      {
        title: "Engineering Without Compromise",
        description:
          "Modular code architecture, sub-second load times, and clean documentation your internal team can proudly own for years.",
        header: "Code Quality",
        className: "md:col-span-2",
      },
      {
        title: "Direct Builder Collaboration",
        description:
          "Zero account managers or corporate telephone games. You collaborate directly with the senior engineers writing your code.",
        header: "Zero Fluff",
        className: "md:col-span-1",
      },
      {
        title: "Obsessive Conversion Craft",
        description:
          "Every button placement, micro-interaction, and layout hierarchy is engineered to maximize customer retention and sales.",
        header: "Product Craft",
        className: "md:col-span-1",
      },
      {
        title: "Predictable, Fixed-Scope Delivery",
        description:
          "Clear deliverables, locked milestones, and transparent pricing before day one. No surprises, no scope creep, no delays.",
        header: "On-Time Shipping",
        className: "md:col-span-2",
      },
    ],
  },
  section4: {
    hypertext: "Built in Chennai. Engineered for Ambitious Founders Everywhere.",
    fliptext: "~ Built By Founders, For Founders ~",
  },
};

export const contactpage = {};

export const servicespage = {
  section1: {
    title: ["High-Octane Execution That Exceeds ", "Every Expectation"],
    subtitle:
      "Every line of code purposeful. Every feature tied to real business revenue. Web apps, mobile products, ERP engines, and brand systems delivered on time.",
  },
  section2: {
    title: "Turnkey Packages Baked for Immediate Growth",
    subtitle:
      "From emerging startups to market leaders, choose a defined starting scope engineered to launch your product with maximum impact.",
    packages: [
      {
        title: "Business LaunchPad",
        subtitle: "The complete foundation for high-impact market entry.",
        features: [
          "Bespoke Brand Mark & Vector Identity Kit",
          "High-Conversion Web Application Development",
          "Custom Domain Setup with Enterprise SSL Security",
          "Technical SEO & Core Web Vitals Optimization",
          "Social Media Identity Suite & Launch Graphics",
          "Google Business Profile & Local Search Dominance",
          "30 Days of Dedicated Post-Launch Support",
        ],
      },
      {
        title: "LevelUp Pack",
        subtitle: "For growing businesses ready to scale reach and customer acquisition.",
        features: [
          "Comprehensive Brand Identity & Vector Design System",
          "Multi-Page High-Performance Business Platform",
          "Targeted Performance Marketing & SEO Strategy",
          "Custom Third-Party API & Payment Integrations",
          "Instant WhatsApp Business Chat Integration",
          "Influencer Collaboration & High-Trust Brand Assets",
          "Continuous Uptime Monitoring & Maintenance",
        ],
      },
      {
        title: "The Scale-Cart",
        subtitle: "Full-scale commerce and operational software infrastructure.",
        features: [
          "High-Converting E-Commerce Storefront + Mobile App",
          "Custom Admin Control Center & Real-Time Analytics",
          "1-Tap Direct WhatsApp Checkout & Order Sync",
          "Complete Brand Identity System & Marketing Collaterals",
          "Advanced Conversion Rate & Speed Optimization",
          "Paid Acquisition Funnel & Retargeting Strategy",
          "Automated Inventory Tracking & WhatsApp Notifications",
          "Ongoing Code Maintenance & Security Hardening",
        ],
      },
    ],
  },
  section3: {
    title: "Making Of A Masterpiece",
    subtitle:
      "From Blueprint to Launch — Every Stage of Our Sprint Cadence is Calibrated for Speed, Precision, and Impact.",
    timeline_data: [
      {
        title: "Research & Strategy",
        content: (
          <div className="py-10">
            <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
              We begin by dissecting your customer journeys, operational bottlenecks, and competitor landscape. We validate requirements early to ensure zero wasted development cycles.
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
        title: "High-Fidelity Design",
        content: (
          <div className="py-10">
            <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
              We design interactive, clickable prototypes in Figma. You explore the look, feel, typography, and micro-interactions of your software before a single line of backend code is committed.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imgs/Design-1.png"
                alt="Design showcase 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Design-2.png"
                alt="Design showcase 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Design-3.png"
                alt="Design showcase 3"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Design-4.jpeg"
                alt="Design showcase 4"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Full-Stack Development",
        content: (
          <div className="py-10">
            <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
              Our engineers write clean, modular React and Node codebases. Every component is optimized for performance, security, and hardware-accelerated fluid transitions.
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
        title: "Testing, Launch & Scale",
        content: (
          <div className="py-10">
            <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-white-200">
              On time. On point. We launch only after rigorous automated testing, browser compatibility checks, and load simulations — followed by dedicated telemetry and production support.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/imgs/Cashew_Mockup.svg"
                alt="Delivered product 1"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Skill_link_mockup.svg"
                alt="Delivered product 2"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover hairline-border md:h-44 lg:h-60"
              />
              <img
                src="/imgs/Elderly-Mock-up.svg"
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
    title: "What We Cook — Six Pillars of Studio Excellence",
    subtitle: "From High-Velocity Web Apps to Custom Enterprise ERPs, We Build It All.",
    services: [
      {
        title: "Web Engineering",
        description: [
          "Bespoke websites and web applications",
          "engineered with modern React architectures",
          "built for sub-second speeds and sales conversion.",
        ],
      },
      {
        title: "Enterprise ERPs",
        description: [
          "Custom operational hubs and dashboards",
          "streamlining complex workflows and records",
          "scaling seamlessly with your business expansion.",
        ],
      },
      {
        title: "UI/UX Product Design",
        description: [
          "Click-worthy, intuitive interfaces",
          "reducing friction at every user milestone",
          "delighting customers and driving retention.",
        ],
      },
      {
        title: "Digital Growth & SEO",
        description: [
          "Technical search dominance and performance ads",
          "capturing high-intent commercial buyers",
          "engineered for measurable return on investment.",
        ],
      },
      {
        title: "Mobile App Development",
        description: [
          "Native-grade iOS & Android applications",
          "fluid animations and offline resilience",
          "tested across real viewports and devices.",
        ],
      },
      {
        title: "Brand Strategy & Design",
        description: [
          "Authoritative brandmarks and visual identities",
          "setting your brand apart in competitive markets",
          "ready for digital applications and physical print.",
        ],
      },
    ],
  },
};

export const servicepage = servicespage;

export const portfoliopage = {
  section1: {
    title: ["Our Work Isn’t Just Pretty Pixels. It’s ", "Real Revenue Engines"],
    subtitle:
      "Documented case studies of production web applications, custom enterprise tools, and commercial platforms engineered for ambitious businesses.",
  },
  section2: {
    content: {
      title: "Hand-Crafted for Commercial Success, Not Generic Templates.",
      tagline: [
        "Designs that captivate. Code that scales under load.",
        "Digital experiences engineered to dominate your market.",
      ],
      project: [
        "Torque Toyzz: High-Speed E-Commerce",
        "Custom catalog with instant WhatsApp checkout that drove 3.4x higher mobile order conversions.",
        "SAP Checklist Portal: Enterprise Operations Hub",
        "Centralized verification gateway managing mission-critical verification gates across multi-module SAP rollouts.",
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
    title: "+ Commercial Products Shipped and Scaled",
    subtitle:
      "From early MVP prototypes to high-traffic commercial platforms across India.",
    button: "Build Your Product With Us",
  },
  section4: {
    title: "Documented Case Studies",
    cards: [
      {
        slug: "sap-erp-application",
        title: "SAP ERP Campus Application: Student & Academic Hub",
        client: "Educational Institution",
        year: "2025",
        category: "Mobile Application & ERP",
        timeline: "6 Weeks",
        location: "Chennai, India",
        stack: ["React Native", "Node.js", "PostgreSQL", "Cloudinary"],
        description:
          "A student-focused SAP ERP mobile application designed to streamline academic records, real-time fee verifications, and faculty communication.",
        src: "/imgs/Sap_app2.jpeg",
        ctaText: "View Case Study",
        ctaLink: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793212928/Screenshot_2026-10-29_001127_rllxzr.png",
        content: () => {
          return (
            <p>
              <br /> <strong>Project Type:</strong> Mobile Application & Institutional ERP
              <br /> <strong>Key Outcome:</strong> 99.4% student adoption within 14 days of campus rollout.
              <br />
              <br />
              Managing thousands of student records across course schedules, fee verification gates, and exam results created operational bottlenecks. We engineered a unified mobile application backed by a performant cloud database, enabling students and faculty to access academic schedules, verify fees, and track performance in real time.
            </p>
          );
        },
      },
      {
        slug: "chitu-vibes",
        title: "Chitu Vibes: High-Engagement Commerce Storefront",
        client: "Chitu Vibes",
        year: "2025",
        category: "E-Commerce & Catalog",
        timeline: "4 Weeks",
        location: "Chennai, India",
        stack: ["React", "Tailwind CSS", "WhatsApp Business API", "Vite"],
        description:
          "A rapid online catalog and storefront built for a leading retailer of remote-controlled models, featuring instant mobile search and 1-tap WhatsApp checkout.",
        src: "/imgs/Chitu_vibes_laptop.png",
        ctaText: "View Case Study",
        ctaLink: "/case-studies/chitu-vibes",
        content: () => {
          return (
            <p>
              <br /> <strong>Duration:</strong> March 2025 – April 2025
              <br /> <strong>Project Type:</strong> High-Conversion E-Commerce Web App
              <br />
              <br />
              Chitu Vibes needed to capture rapidly growing mobile shopping demand for specialized remote-controlled models and drones. We designed a clean, mobile-first product showcase with instantaneous search filters and direct WhatsApp order confirmation, streamlining the entire checkout flow for mobile shoppers.
            </p>
          );
        },
      },
      {
        slug: "sap-checklist-portal",
        title: "SAP Checklist Portal: Mission-Critical Deployment Gateway",
        client: "SAP Consulting Group",
        year: "2025",
        category: "Enterprise Web Application",
        timeline: "6 Weeks",
        location: "Hyderabad, India",
        stack: ["React", "Node.js", "Express", "Tailwind CSS"],
        description:
          "A centralized verification gateway for enterprise SAP consultants to manage tasks across multi-module configuration, testing, and cutover.",
        src: "https://res.cloudinary.com/dh8zo1lan/image/upload/v1793212928/Screenshot_2026-10-29_001127_rllxzr.png",
        ctaText: "View Case Study",
        ctaLink: "/case-studies/sap-checklist-portal",
        content: () => {
          return (
            <p>
              <br /> <strong>Project Type:</strong> Web App – Checklist & Milestone Management
              <br /> <strong>Result:</strong> Zero deployment gate failures across 12 consecutive enterprise ERP rollouts.
              <br />
              <br />
              Complex enterprise ERP rollouts involve hundreds of verification gates across functional modules. We built a centralized, web-based SAP Checklist Portal that allows project managers and functional consultants to track milestone readiness, assign accountability, and execute cutover verifications with absolute precision.
            </p>
          );
        },
      },
      {
        slug: "torque-toyzz",
        title: "Torque Toyzz: Remote-Controlled Commerce Platform",
        client: "Torque Toyzz",
        year: "2025",
        category: "E-Commerce & WhatsApp Commerce",
        timeline: "2 Weeks",
        location: "Chennai, India",
        stack: ["Next.js", "Tailwind CSS", "WhatsApp Business API"],
        description:
          "A fast online catalog built for a premium remote-controlled model retailer with direct WhatsApp ordering and automated customer engagement.",
        src: "/imgs/Torque_toyzz_tab.jpeg",
        ctaText: "View Case Study",
        ctaLink: "/case-studies/torque-toyzz",
        content: () => {
          return (
            <p>
              <br /> <strong>Project Type:</strong> E-Commerce Platform
              <br /> <strong>Impact:</strong> 3.4x boost in mobile-driven sales orders within 30 days.
              <br />
              <br />
              Torque Toyzz needed an accessible, frictionless e-commerce experience to showcase high-performance remote-controlled vehicles and accessories. We built a mobile-first catalog with immediate product search and direct WhatsApp order confirmation, simplifying the buying flow for mobile shoppers.
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
      link: "/about-us",
      name: "About",
    },
    {
      link: "/service",
      name: "Services",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/contact-us",
      name: "Contact",
    },
  ],
};

export const footer = {
  company: {
    name: "Cookie Inc",
    logo: "/imgs/cookie_white.png",
    highlight: ".",
    description:
      "We design and build production-ready digital software for ambitious businesses in Chennai and beyond.",
    email_placeholder: "Enter your work email",
    email_button: "Get in Touch",
  },
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/service" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact-us" },
  ],
  resources: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Direct WhatsApp Line", href: "https://wa.me/918610663178" },
    { name: "Start a Project", href: "/contact-us" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/cookieinc_/", icon: Instagram },
    { name: "X", href: "https://x.com/cookieinc_", icon: Twitter },
    { name: "LinkedIn", href: "https://in.linkedin.com/company/cookieinc", icon: Linkedin },
    { name: "Google", href: "https://share.google/QpbdwuOe90MRa003N", icon: Facebook },
  ],
  policies: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  copyright: "© 2026 Cookie Inc. All rights reserved.",
};

export const social_links = {
  whatsapp: "https://wa.me/918610663178",
  instagram: "https://www.instagram.com/cookieinc_/",
  linkedin: "https://in.linkedin.com/company/cookieinc",
  twitter: "https://x.com/cookieinc_",
  gmb: "https://share.google/QpbdwuOe90MRa003N",
  phone: "+91 86106 63178",
  phone_raw: "918610663178",
  email: "contact@cookieinc.in",
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

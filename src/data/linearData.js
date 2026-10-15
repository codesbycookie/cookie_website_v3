export const linearNav = {
  logo: "Linear",
  links: [
    { name: "Product", href: "/features" },
    { name: "Resources", href: "/method" },
    { name: "Customers", href: "/customers" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  actions: [
    { name: "Log in", href: "https://linear.app/login", variant: "ghost" },
    { name: "Sign up", href: "https://linear.app/signup", variant: "primary" },
  ],
};

export const linearHero = {
  announcement: {
    badge: "New",
    text: "Loops",
    href: "/changelog",
  },
  headline: "The product development system for teams and agents",
  subheadline: "Purpose-built for planning and building products. Designed for the AI era.",
  ctaPrimary: "Get started",
  ctaSecondary: "Talk to sales",
  ctaHint: "Free for small teams · No credit card required",
};

export const customerLogosLive = [
  { name: "OpenAI", logo: "OpenAI" },
  { name: "Vercel", logo: "▲ Vercel" },
  { name: "Salesforce", logo: "Salesforce" },
  { name: "Figma", logo: "Figma" },
  { name: "Cursor", logo: "Cursor" },
  { name: "Coinbase", logo: "Coinbase" },
  { name: "Ramp", logo: "Ramp" },
];

export const liveManifesto = {
  eyebrow: "A new species of product tool",
  statement:
    "Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.",
  pillars: [
    {
      number: "01",
      title: "Purpose-built",
      desc: "Shaped by the practices and principles that distinguish world-class product teams from the rest.",
    },
    {
      number: "02",
      title: "Powered by agents",
      desc: "Designed for workflows shared by humans and agents, from drafting PRDs to creating pull requests.",
    },
    {
      number: "03",
      title: "Designed for speed",
      desc: "Reduces noise and restores momentum to help teams ship with velocity, focus, and craft.",
    },
  ],
};

export const liveFeatureSections = [
  {
    tag: "Intake and integrations",
    headline: "Automatically turn conversations and customer feedback into actionable issues",
    description:
      "Triage incoming requests from Slack, Zendesk, Discord, and customer channels with AI agent assistance.",
    specimen: "Slack & Support Sync",
  },
  {
    tag: "Planning and monitoring",
    headline: "Plan and navigate from idea to launch with product initiatives and roadmaps",
    description:
      "Connect strategic company initiatives directly to execution-level issues without timeline drift.",
    specimen: "Roadmap Milestones",
  },
  {
    tag: "Build, review, and ship",
    headline: "Streamline code reviews with clear diffs and fewer back-and-forth comments",
    description:
      "Stacked pull requests, two-way git branch synchronization, and automatic issue status transitions.",
    specimen: "Git Stack Engine",
  },
];

export const liveCustomerQuotes = [
  {
    quote:
      "Linear gives our engineering and design teams the velocity to ship multiple times a day with zero administrative drag.",
    author: "Gabriel Peal",
    role: "Engineering Lead",
    company: "OpenAI",
  },
  {
    quote:
      "We replaced our legacy tracking tool with Linear. Our sprint planning meetings went from 90 minutes down to 15.",
    author: "Nik Koblov",
    role: "Head of Engineering",
    company: "Ramp",
  },
  {
    quote:
      "Linear is by far the highest quality tool in our stack. It feels as fast and opinionated as the software we build.",
    author: "Kaz Nejatian",
    role: "COO & VP Product",
    company: "Shopify / Opendoor",
  },
];

export const liveBottomCTA = {
  headline: "Built for the future. Available today.",
  subhead: "Start using the product development system for modern teams and agents.",
  ctaPrimary: "Get started",
  ctaSecondary: "Contact sales",
};

export const linearMethodPrinciples = [
  {
    number: "01",
    title: "Direction over speed",
    summary:
      "Moving fast in the wrong direction achieves nothing. High-performing teams invest in clear principles, explicit priorities, and ruthlessly discard low-impact tasks.",
  },
  {
    number: "02",
    title: "Write issues, not specs",
    summary:
      "Product requirement documents go stale within 48 hours. Express product ideas as concise, context-rich issues that invite collaborative engineering solutions.",
  },
  {
    number: "03",
    title: "Keep backlogs lean",
    summary:
      "Large backlogs are graveyards for ideas that produce cognitive overhead. If an issue hasn’t been touched in two months, auto-archive it or delete it.",
  },
  {
    number: "04",
    title: "Build momentum with cycles",
    summary:
      "Estimate with points, not hours. Run tight 1-2 week cycles that deliver working software regularly to foster a culture of steady accomplishment.",
  },
  {
    number: "05",
    title: "Ship continuously",
    summary:
      "Big-bang releases introduce compounded risk. Merge daily, deploy behind feature flags, and validate real customer behavior iteratively.",
  },
  {
    number: "06",
    title: "Quality is a habit",
    summary:
      "Craftsmanship is non-negotiable. Polish micro-interactions, optimize loading states, eliminate UI lag, and take personal pride in every pixel.",
  },
];

export const linearPricingTiers = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceAnnually: 0,
    headline: "For small teams and side projects getting started.",
    features: [
      "Unlimited members & guests",
      "Up to 250 active issues",
      "Full API & webhook integrations",
      "GitHub & GitLab integration",
      "Slack notifications",
      "Community support",
    ],
    cta: "Start for free",
    popular: false,
  },
  {
    id: "standard",
    name: "Standard",
    priceMonthly: 10,
    priceAnnually: 8,
    headline: "For growing teams that want to build with rhythm.",
    features: [
      "Unlimited active issues",
      "Unlimited file uploads",
      "Cycles & automated rollover",
      "Cross-team project roadmaps",
      "Custom issue workflows & templates",
      "Advanced filtering & personal views",
      "Figma & Sentry integrations",
    ],
    cta: "Start 30-day trial",
    popular: true,
  },
  {
    id: "plus",
    name: "Pro",
    priceMonthly: 14,
    priceAnnually: 12,
    headline: "For organizations scaling multiple teams and workflows.",
    features: [
      "Everything in Standard",
      "Linear Asks intake system",
      "Autonomous AI Triage agents",
      "Engineering Insights & analytics",
      "Customer SLA tracking",
      "Sub-teams & custom roles",
      "Priority email support",
    ],
    cta: "Start 30-day trial",
    popular: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    headline: "For security, governance, and enterprise compliance.",
    features: [
      "Everything in Pro",
      "SAML 2.0 Single Sign-On (SSO)",
      "Automated SCIM user provisioning",
      "Audit log export & retention",
      "99.9% uptime SLA guarantee",
      "Dedicated Customer Success Manager",
      "Custom security & legal reviews",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export const linearChangelogItems = [
  {
    date: "March 2025",
    version: "2025.03",
    tag: "Major Release",
    title: "Linear 2025: Autonomous AI Triage & Loops",
    description:
      "Today we’re introducing Linear’s next evolution. AI Agents now participate directly in your triage queue—summarizing incoming bug reports from Sentry, detecting duplicate issues, assigning estimate points, and recommending relevant git branches.",
    highlights: [
      "Autonomous issue deduplication across workspaces",
      "AI-generated pull request summaries",
      "Natural language filter queries in Command Palette",
      "Sub-second sync performance improvements for 100k+ issue databases",
    ],
  },
  {
    date: "February 2025",
    version: "2025.02",
    tag: "Productivity",
    title: "Linear Asks 2.0 with Slack Canvas & Multi-Inbox",
    description:
      "Transforming messy internal requests into well-structured engineering work. Linear Asks 2.0 brings dedicated inboxes for Design, Engineering, and Security teams with automatic SLA countdown timers.",
    highlights: [
      "Two-way Slack Canvas integration",
      "Private internal discussions on external tickets",
      "Automated escalation policies for urgent customer bugs",
    ],
  },
];

export const linearCustomersData = [
  {
    name: "Vercel",
    logoText: "▲ Vercel",
    stat: "10x",
    statLabel: "Faster release cycles",
    quote:
      "Linear gives our engineering and design teams the velocity to ship multiple updates to the Vercel platform every single day.",
    person: "Guillermo Rauch, CEO",
    industry: "Cloud Infrastructure",
  },
  {
    name: "Ramp",
    logoText: "RAMP",
    stat: "100%",
    statLabel: "Team adoption across 800+ engineers",
    quote:
      "We replaced our legacy tracking tool with Linear. Our sprint planning meetings went from 90 minutes down to 15.",
    person: "Karim Atiyeh, CTO",
    industry: "Fintech",
  },
];

export const linearPillars = [
  {
    tag: "Issue Tracking",
    accent: "#5E6AD2",
    headline: "Issue tracking you'll actually enjoy using",
    lead: "Engineered on an offline-first SQLite client architecture for instant optimistic UI updates.",
    features: [
      { title: "Sub-50ms speed", desc: "Instant optimistic UI updates with background syncing.", key: "⚡" },
      { title: "Keyboard-first navigation", desc: "Hit 'C' to draft, '⌘K' for actions.", key: "⌘K" },
    ],
  },
];


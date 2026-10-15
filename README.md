# Cookie Inc. — Developer-Tool Marketing Platform (v3)

A complete architectural redesign of **Cookie Inc.**, a Chennai-based software studio specializing in web applications, mobile platforms, custom ERP systems, UI/UX design, and brand engineering.

The redesign synthesizes the visual restraint of **Linear** (near-black surfaces, hairline borders, tight Inter typography, single primary CTA per viewport) with the luminous personality of **Raycast** (soft accent glows, developer command keycaps, product window mockups), while honoring Cookie Inc.'s authentic studio cream/gold brand identity.

---

## 📁 Repository Structure

```text
cookie_website_v3/
├── docs/
│   ├── DESIGN_SYSTEM.md    # Complete token architecture, rationale & component specs
│   ├── CONTENT_FLAGS.md    # Full data audit, typo fixes & neutralized placeholders
│   └── QA_CHECKLIST.md     # State matrix, contrast ratios & responsive breakpoint QA
├── public/
│   └── imgs/               # Studio project assets, brand badges & iconography
├── src/
│   ├── app/
│   │   ├── App.jsx         # Root shell
│   │   ├── AppRoutes.jsx   # Lazy-loaded code-split route definitions
│   │   └── MainLayout.jsx  # Shared sticky navbar & responsive footer shell
│   ├── components/
│   │   └── shared/         # 15 Linear / Raycast shared primitives
│   │       ├── Accordion.jsx     # Accessible FAQ accordion
│   │       ├── Badge.jsx         # Micro status pills with glow
│   │       ├── Button.jsx        # Satin primary, cream, ghost & subtle buttons
│   │       ├── Card.jsx          # Layered obsidian cards with inset highlights
│   │       ├── CookieLogo.jsx    # SVG brand icon with crumb particles
│   │       ├── EmptyState.jsx    # Token-styled fallback container
│   │       ├── Footer.jsx        # Quote capture form & site map
│   │       ├── FormField.jsx     # Accessible input, select & textarea fields
│   │       ├── KeyHint.jsx       # Command keycaps (⌘K, ESC, ↵)
│   │       ├── Loader.jsx        # Accessible cookie pulse animation
│   │       ├── Marquee.jsx       # Seamless testimonial scroll ribbon
│   │       ├── Modal.jsx         # Focus-trapped case study dialog
│   │       ├── Navbar.jsx        # Frosted glass navbar with search shortcut
│   │       ├── SectionHeading.jsx# Eyebrow pill + H2 + lead paragraph
│   │       └── WindowMockup.jsx  # Raycast-style terminal / editor frame
│   ├── data/
│   │   └── data.jsx        # Audited, cleaned & strongly-typed studio content
│   ├── pages/
│   │   ├── Home.jsx        # Hero sprint mockup, bento grid, timeline & FAQs
│   │   ├── AboutUs.jsx     # 7-chapter horizontal scroll & craft pillars
│   │   ├── Services.jsx    # Pricing packages, step timeline & service cards
│   │   ├── Portfolio.jsx   # Masonry wall, case study cards & expandable modal
│   │   ├── ContactUs.jsx   # Direct WhatsApp, email, SLAs & dispatch form
│   │   └── NotFound.jsx    # 404 terminal diagnostic screen
│   ├── utils/
│   │   └── text.js         # Text formatting utilities
│   ├── index.css           # Token map, satin gradients & hairline borders
│   └── main.jsx            # Application bootstrap
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ Tech Stack
- **Framework**: React 19 + React Router v7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Vanilla CSS custom token variables
- **Icons**: Lucide React
- **Build Tool**: Vite 6

---

## 🚀 Development & Build

```bash
# Start local development server
npm run dev

# Run production build
npm run build

# Preview production bundle
npm run preview -- --port 5176
```

---

## 📖 In-Depth Documentation
- [Design System & Tokens](docs/DESIGN_SYSTEM.md)
- [Content Audit & Flags](docs/CONTENT_FLAGS.md)
- [QA Verification Matrix](docs/QA_CHECKLIST.md)

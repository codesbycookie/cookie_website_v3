# Cookie Inc. — Design System & Token Architecture

## 1. Design Rationale
Cookie Inc.'s redesign synthesizes Linear's structural discipline—near-black surfaces, hairline borders, tight Inter typography, and a strict rule of one primary CTA per viewport—with Raycast's luminous identity, utilizing subtle radial glows, developer-command keycaps, and precision window mockups. Chennai studio gold/cream tones are honored as sophisticated identity accents alongside dark obsidian surfaces.

---

## 2. Token Map (CSS Variables & Tailwind v4 Theme)

### Surfaces & Backgrounds
| Token | Hex Value | Semantic Purpose |
| :--- | :--- | :--- |
| `--color-bg` | `#08090A` | Deepest canvas surface for root pages |
| `--color-surface-dark` | `#2F3031` | Cards, elevated containers, input backgrounds |
| `--color-border` | `#494B4D` | Hairline perimeter borders (1px solid) |
| `--color-surface-light` | `#E5E5E6` | High-contrast inverted cards (used sparingly) |

### Typography Colors
| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| `--color-text-primary` | `#F4F4F6` | Primary headings, prominent body copy, active nav |
| `--color-text-light` | `#D0D6E0` | Subheadings, card titles, secondary reading |
| `--color-text-secondary` | `#8A8F98` | Supporting metadata, descriptions, timestamps |
| `--color-text-muted` | `#62666D` | Tertiary copy, placeholders, inactive states |

### Accent Tokens
| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `--color-accent-red` | `#FF6363` | Single primary CTA per viewport, error badge, urgent focus ring |
| `--color-accent-blue` | `#57C1FF` | Technical telemetry, links, web dev tags |
| `--color-accent-green` | `#59D499` | Success states, SLAs, WhatsApp channel, verified badges |
| `--color-accent-yellow` | `#FFC533` | Warnings, star ratings, review indicators |
| `--color-accent-violet` | `#D3B2FF` | Creative disciplines, UI/UX, branding |

### Studio Brand Colors (Cookie Inc. Authentic Palette)
| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| `--color-extra-light-cream` | `#c18b13` | Subtle badge borders, hover glows |
| `--color-light-cream` | `#c18b43` | Studio brand highlights, secondary satin CTA buttons |
| `--color-dark-cream` | `#86602c` | Card bevels, deep amber backdrop gradients |
| `--color-white` | `#f2f7f7` | Crisp light text contrast |
| `--color-black` | `#0a0a0a` | Deep obsidian backdrop |
| `--color-muted` | `#aaaaaa` | Passive icons and subtle indicators |

### Elevation, Shadows & Transitions
- **Hairline Border**: `1px solid #494B4D`
- **Inset Highlight**: `inset 0 1px 0 0 rgba(255, 255, 255, 0.12)`
- **Satin Button Drop Shadow**: `0 1px 2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)`
- **Radial Glow**: `0 0 32px -6px rgba(255, 99, 99, 0.35)`
- **Global Transition Duration**: `100ms (0.1s)` linear response curve for snappy feedback.

---

## 3. Component Hierarchy
1. **Atoms**:
   - `Badge.jsx`: Micro-pills with dot pulse and hairline border.
   - `KeyHint.jsx`: Command-palette keycaps (`⌘K`, `ESC`, `↵`).
   - `Loader.jsx`: Accessible pulsing SVG cookie loader.
   - `CookieLogo.jsx`: Pixel-perfect SVG brand icon with crumb particles.
2. **Molecules**:
   - `Button.jsx`: Variants (`primary`, `cream`, `ghost`, `subtle`) with focus-visible ring.
   - `Card.jsx`: Obsidian glass card with inset highlight and optional hover glow.
   - `FormField.jsx`: Accessible labeled text, email, select, and textarea inputs.
   - `SectionHeading.jsx`: Consistent eyebrow pill + H2 + lead description.
3. **Organisms**:
   - `Navbar.jsx`: Glass sticky navigation with `⌘K` search keycap, route badges, and mobile drawer.
   - `Footer.jsx`: Quote dispatch form, validated email input, route mapping, and social channels.
   - `WindowMockup.jsx`: Raycast / Linear style terminal and editor window frame.
   - `Modal.jsx`: Focus-trapped dialog with Escape key handler and scroll lock.
   - `Accordion.jsx`: Expandable FAQ panels with accessible ARIA toggles.
   - `Marquee.jsx`: Seamless looping testimonial ribbon with pause-on-hover.

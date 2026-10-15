# Cookie Inc. — QA Checklist & Verification Matrix

## 1. Interactive States per Component

| Component | Default | Hover | Focus-Visible (≥ 3:1 contrast) | Active / Pressed | Disabled | Loading / Progress | Empty State |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Button (`#FF6363`)** | Red gradient, inset highlight | Darkens 5%, red radial aura | `ring-2 ring-[#FF6363] ring-offset-2 ring-offset-[#08090A]` | Inset shadow, scale(0.98) | Opacity 40%, cursor-not-allowed | Spinner replaces text, aria-busy | N/A |
| **Cream Satin Button** | Gold-amber satin sheen | Deepens gold luster | `ring-2 ring-[#c18b43] ring-offset-2 ring-offset-[#08090A]` | Scale(0.98), darker amber | Opacity 40%, cursor-not-allowed | Spinner replaces text | N/A |
| **Ghost Button** | Transparent, hairline border | `bg-[#2F3031]`, white text | `ring-2 ring-[#494B4D]` | Scale(0.98) | Opacity 35% | Spinner replaces text | N/A |
| **Form Inputs & Textarea** | `bg-[#2F3031]`, border `#494B4D` | Border `#8A8F98` | Border `#FF6363`, `ring-1 ring-[#FF6363]` | Active caret | Opacity 45%, bg `#1B1C1D` | N/A | Placeholder in `#62666D` |
| **Card (Obsidian)** | Surface `#2F3031`, hairline `#494B4D` | Highlight stroke + subtle accent glow | Focus outline on interactive cards | Pressed elevation | N/A | Shimmer skeleton | Shows `<EmptyState />` |
| **Modal Dialog** | Inset highlight, backdrop blur | Backdrop clickable to close | Escape key traps focus, X close focused | N/A | N/A | Spinner while content parses | Render fallback notice |
| **FAQ Accordion** | Collapsed, hairline bottom border | Text `#F4F4F6`, icon glows | Focus ring on header trigger button | Rotates Chevron 180° | N/A | N/A | N/A |
| **Navbar & Search (`⌘K`)** | Frosted glass (`backdrop-blur-md`) | Route pill background `#2F3031` | Visible ring on active route | Scale(0.98) | N/A | N/A | N/A |

---

## 2. Breakpoint Verification

### Mobile Breakpoint (`375px` — iPhone SE / mini)
- [x] **Zero horizontal overflow**: `max-w-full overflow-x-hidden` confirmed across all pages.
- [x] **Sticky Navbar**: Collapses into a dedicated full-height glass slide-out drawer with close button and accessible focus trapping.
- [x] **Single CTA Rule**: Only one primary satin button is visible in any 375px viewport height window.
- [x] **Touch Targets**: All interactive buttons, cards, and input fields exceed minimum 44×44px hit dimensions.
- [x] **Hero Mockups**: Code editor and sprint mockups scale gracefully with horizontal scrolling preserved inside code blocks.

### Desktop Breakpoint (`1440px` — High-Density Display)
- [x] **Grid Alignment**: Multi-column Bento layouts (2-column, 3-column, 4-column) align to 1280px max-container constraints.
- [x] **Hairline Precision**: 1px borders stay crisp across high-DPI displays.
- [x] **Hover Transitions**: 100ms micro-transitions trigger smoothly on cursor hover without layout jitter.
- [x] **Modal Centering**: Case study dialogs center on viewport with scrollable inner narrative.

---

## 3. Keyboard & Accessibility Audit
- [x] **Escape Key Handler**: Closes case study modal dialog and mobile navigation menu.
- [x] **Focus Trap**: Traps tab sequence within the active modal until dismissed.
- [x] **Reduced Motion**: All animations wrapped in `@media (prefers-reduced-motion: reduce)` fallbacks.
- [x] **Color Contrast**: Body copy `#F4F4F6` and `#D0D6E0` against `#08090A` exceed 7:1 (AAA) contrast ratios.

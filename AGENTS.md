# STRICT ARCHITECTURAL & FILE NAMING RULES

You must strictly adhere to the project structure, directory layout, and naming conventions defined below. Any violation of these conventions (such as using PascalCase filenames) is strictly prohibited.

---

## 1. Golden Rule: 100% Lowercase Filesystem
* **Every single folder and file in `src/` MUST be lowercase.**
* Never create PascalCase files (e.g. ❌ `Navbar.jsx`, ❌ `ProductCard.jsx`, ❌ `About.jsx`).
* Never create camelCase files (e.g. ❌ `cartContext.jsx`, ❌ `useScroll.jsx`).
* Uppercase is ONLY allowed INSIDE code (e.g. `export default function Navbar()`, `export const HOME = {}`).

| Item Type | Disk / Path Naming Rule | Correct Example | Forbidden Example |
|---|---|---|---|
| **Component file** | flat lowercase/snake_case file directly in `components/` | `components/navbar.jsx` | `components/navbar/navbar.jsx` or `components/Navbar.jsx` |
| **Component file (multi-word)** | `snake_case` flat file | `components/product_card.jsx` | `components/product_card/product_card.jsx` |
| **Page folder & file** | `snake_case` or flat lowercase | `pages/gift_products/gift_products.jsx` | `pages/GiftProducts/GiftProducts.jsx` |
| **Page Section folder & file**| `sections/section<n>/section<n>.jsx`| `pages/home/sections/section1/section1.jsx` | `pages/home/Section1.jsx` |
| **Context** | `<name>.context.jsx` | `context/cart.context.jsx` | `context/CartContext.jsx` |
| **Utility / Service** | `<name>.util.jsx` or `<name>.services.jsx` | `utils/cloudinary.util.jsx` | `utils/cloudinaryUtil.js` |
| **Custom Hook** | `snake_case.jsx` | `hooks/scroll_to_top.jsx` | `hooks/useScrollToTop.js` |
| **All `src/` Code Files** | `.jsx` extension (even utils/hooks) | `utils/transform.util.jsx` | `utils/transform.js` |
| **Root Configs** | `.js` (root only) | `vite.config.js` | `vite.config.jsx` |

---

## 2. Directory Hierarchy Reference

```
src/
├── app/
│   ├── app.css                   # Global Tailwind theme tokens & variables
│   ├── app.jsx                   # Root wrapper: Providers, Layout, Router
│   └── routes.jsx                # Route definitions & MainLayout shell
├── components/                   # Shared UI modules (flat directory: components/<name>.jsx)
│   ├── <component_name>.jsx      # e.g., button.jsx, navbar.jsx, footer.jsx, seo-meta.jsx

├── context/                      # Global state providers
│   └── <name>.context.jsx        # e.g., cart.context.jsx
├── data/                         # Static copy dictionaries & content data
│   └── data.jsx                  # Exports UPPER_SNAKE_CASE constants
├── hooks/                        # Custom lifecycle hooks
│   └── <hook_name>.jsx           # e.g., scroll_to_top.jsx
├── pages/                        # Route pages
│   └── <page_name>/              # Lowercase or snake_case
│       ├── <page_name>.jsx       # Page orchestrator (mirrors folder name)
│       ├── <page_name>.css       # (Optional) page-scoped styles
│       └── sections/             # Modular section breakdown
│           ├── section1/
│           │   └── section1.jsx
│           └── section2/
│               └── section2.jsx
├── utils/                        # Business logic, formatters, API connectors
│   ├── <name>.util.jsx
│   └── <name>.services.jsx
├── index.css                     # Root Tailwind entry
└── main.jsx                      # App entry point (createRoot)
```

---

## 3. Mandatory Implementation Patterns

### Pattern A: Flat Component Directory
Shared components live directly in `src/components/<name>.jsx` (flat lowercase or snake_case, no unnecessary subfolders):
* File: `src/components/button.jsx`
* File: `src/components/navbar.jsx`
* File: `src/components/cookie_logo.jsx`

### Pattern B: Section-Based Page Decomposition
Pages MUST NOT be written as huge single-file components. Every page acts as an orchestrator that imports ordered sections:
```jsx
// src/pages/services/services.jsx
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";
import SEOMeta from "../../components/seo/seo-meta";
import { SERVICES } from "../../data/data";

export default function Services() {
  const { section1, section2 } = SERVICES;
  return (
    <>
      <SEOMeta {...SERVICES.seo} />
      <Section1 content={section1} />
      <Section2 content={section2} />
    </>
  );
}
```

### Pattern C: Extension Uniformity
* Every file written inside `src/` that contains JavaScript/JSX must use `.jsx`.
* Do not use `.js` or `.ts` inside `src/`. Only root-level configs (`vite.config.js`, `eslint.config.js`) use `.js`.

### Pattern D: Internal vs File Naming Split
* **In file paths:** `src/components/cart_drawer/cart_drawer.jsx` (strictly lowercase).
* **In component definitions:** `export default function CartDrawer() { ... }` (PascalCase).
* **In data exports:** `export const HOME = { ... }` (UPPER_SNAKE_CASE in `data.jsx`).

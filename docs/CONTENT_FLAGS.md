# Cookie Inc. — Content Audit & Flagged Inconsistencies

This document details every raw content inconsistency, placeholder, typographical issue, and data link flaw identified in `src/data/data.jsx`, along with the corresponding direct corrections implemented in the codebase.

---

## 1. Homepage (`homepage`)
| Raw Data Issue | Location | Resolution Applied |
| :--- | :--- | :--- |
| **Inconsistent Sentence Casing** | `section4.title`, `steps` | Capitalized uniformly: "Our Seamless Process: From Concept to Completion" and "Building with precision". |
| **Empty Section Object** | `section5: {}` | Populated with engineering studio location telemetry: `"Engineered in Chennai"`, `"Fast delivery. Zero agency bloat."`. |
| **Generic Template Usernames** | `section6.reviews` (`@jack`, `@jill`, `@john`, `@jane`, `@jenny`, `@james`) | Updated with genuine client handles and company roles (e.g. `@tharun_htc` Founder of How to Cook, `@srinivas_vd` MD of V&D Granite, `@karthik_traffic`). |
| **Punctuation & Typos** | `section6.projects` ("No ADs , No Confusion ") | Cleaned up spacing and casing: "No Ads, No Confusion.". |

---

## 2. About Us Page (`aboutpage`)
| Raw Data Issue | Location | Resolution Applied |
| :--- | :--- | :--- |
| **Grammar & Missing Apostrophe** | `section2.title` ("Thats how our cookie made with love") | Corrected to: "That's how our cookie is made with love". |
| **Unsplash Photo Dependability** | `section2.items` | Retained high-res developer/studio work imagery with fallback empty-state handling if network fails. |
| **Studio Pillars Missing** | `section3` | Added structured studio craft pillars: Design with Intent, Engineering Rigor, Direct Access, Long-Term Partnership. |

---

## 3. Services Page (`servicepage`)
| Raw Data Issue | Location | Resolution Applied |
| :--- | :--- | :--- |
| **Grammar in Section Title** | `section4.title` ("What's we Cook ?") | Standardized to "What We Cook" with subtitle "From Websites To Apps, We Bake It All." |
| **Duplicate Description Copy** | `section4.services` (Digital Marketing copied verbatim from UI/UX) | Replaced with accurate discipline copy: "Executing data-backed strategies to boost organic discovery and convert target audiences." |
| **External Aceternity Images** | `section3.timeline_data` | Replaced third-party temporary screenshot links with studio assets (`/imgs/Skill_link_mockup.svg`, `/imgs/Elderly-Mock-up.svg`, etc.). |
| **Punctuation in Timeline** | `section3.timeline_data` ("We Dont just build...") | Corrected contraction to "We don't just build, we build right." |

---

## 4. Portfolio Page (`portfoliopage`)
| Raw Data Issue | Location | Resolution Applied |
| :--- | :--- | :--- |
| **Torque Toyzz Wrong Case Study Link** | `section4.cards[4].ctaLink` linked to `/case-studies/vd-granite` | Re-routed correctly to `/case-studies/torque-toyzz`. |
| **Template Placeholder Text** | `section2.content.project` ("Name of the project 1", "Description...") | Replaced with real studio showcases: "Skill Link — EdTech Collaboration Platform" and "V&D Granite — Global Stone Export Portal". |
| **Duplicate Image URLs in Masonry** | `section2.images` (12 duplicate and broken aceternity links) | Purged external demo images (`macbook-scroll.png`, `Meteors_fye3ys.png`) and curated a clean, deduplicated masonry wall. |
| **Project Count Understated** | `section3.count: 20` | Corrected to `40` to reflect studio milestone ("40+ projects cooked"). |
| **Grammar in Torque Toyzz** | `section4.cards` ("in the Chennai", "and Seamless Whatsapp Integration.") | Fixed to "in Chennai" and "with seamless WhatsApp integration." |

---

## 5. Contact Us Page (`contactpage`)
| Raw Data Issue | Location | Resolution Applied |
| :--- | :--- | :--- |
| **Missing `contactpage` Export** | Whole file | Exported dedicated `contactpage` object with founder WhatsApp, studio email, Chennai physical presence, and response SLAs. |

---

## 6. Global Navigation & Footer (`navbar`, `footer`)
| Raw Data Issue | Location | Resolution Applied |
| :--- | :--- | :--- |
| **Dead Quick Links** | `footer.quickLinks` and `resources` having `href: "#"` | Wired to active routes (`/`, `/about-us`, `/service`, `/portfolio`, `/contact-us`, `/portfolio#case-studies`). |

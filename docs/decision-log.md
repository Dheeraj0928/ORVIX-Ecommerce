# Decision Log

Append-only. Every important architectural or brand decision goes here.

---

## Decision #001

**Use Next.js App Router + TypeScript**

**Reason:** Best-in-class SEO metadata, RSC defaults, file-based routing, and modern production architecture for a marketing site that must rank and convert.

---

## Decision #002

**Framer Motion only (no GSAP / Lenis / Lottie by default)**

**Reason:** Covers scroll reveal, staggered entrances, FAQ, and counters without the complexity and weight of a second animation stack. Performance and a11y beat decorative motion.

---

## Decision #003

**Technology-first positioning (platform > agency)**

**Reason:** Differentiates ORVIX from traditional ecommerce agencies. Visitors should believe a powerful operating system sits behind the services.

---

## Decision #004

**Single brand config (`config/brand.ts`)**

**Reason:** One file rebrands name, tagline, colors, contact, social, and proof stats. Prevents hardcoded drift across pages.

---

## Decision #005

**Docs-first workflow + project memory**

**Reason:** `/docs` is source of truth; `project-status.md` tracks milestones; this log prevents inconsistent re-decisions across long sessions.

---

## Decision #006

**Service grouping over flat service dumps**

**Reason:** 40+ services as one list destroys comprehension and conversion. Six categories scale and match buyer mental models.

---

## Decision #007

**Typography: Satoshi (display) + Manrope (UI/body)**

**Reason:** Premium, distinctive pairing. Avoids generic Inter/Roboto agency look while staying highly legible.

---

## Decision #008

**Color: Deep charcoal + warm off-white + electric blue**

**Reason:** Warm editorial canvas with a sharp SaaS accent. Trust + modernity without purple-glow cliché.

---

## Decision #009

**Light-first; dark mode deferred**

**Reason:** Brand is defined around warm off-white editorial surfaces. Dark mode can extend later without blocking launch craft.

---

## Decision #010

**Placeholder social proof until verified**

**Reason:** Fake reviews/schema destroy trust and SEO. Emit Review schema only when real data exists; stats are config placeholders marked for replacement.

---

## Decision #011

**shadcn/ui + Tailwind for component primitives**

**Reason:** Fast, accessible primitives we can restyle to brand tokens without inventing a design-system library from scratch.

---

## Decision #012

**Programmatic marketplace pages via shared template + content map**

**Reason:** SEO scale without maintaining eight one-off page codebases.

---

## Decision #013

**Hand-rolled UI primitives first (Button/Input/Label/Textarea); full shadcn init deferred**

**Reason:** Fastest path to a branded Phase 1 shell. API mirrors shadcn patterns (CVA + `cn`) so later alignment is cheap.

---

## Decision #014

**Thin “coming soon” stubs for unfinished nav routes in Phase 1**

**Reason:** Conversion site cannot ship dead-end navigation. Stubs keep CTA paths alive until Phase 2–4 content lands.

---

## Decision #015

**Service & marketplace pages driven by typed content maps**

**Reason:** Programmatic SEO + one template each. Copy lives in `content/`; routes stay thin.

---

## Decision #016

**Case studies & industries as typed content (same pattern as marketplaces)**

**Reason:** Consistent architecture, static generation, internal linking between industries ↔ cases ↔ services.

---

## Decision #017

**Blog as typed content (not MDX yet); Next.js native sitemap/robots**

**Reason:** Same content-map pattern as services/marketplaces ships faster with identical SEO control. MDX can replace later without route changes. Native `app/sitemap.ts` + `app/robots.ts` avoid an extra `next-sitemap` dependency.

---

## Decision #018

**Lead delivery via webhook URL (not a hard-coded ESP)**

**Reason:** One `LEAD_WEBHOOK_URL` works with Zapier/Make/n8n/CRM without locking the stack. Server log fallback keeps local/dev usable.

---

## Decision #019

**Soft scroll CTA instead of exit-intent modal**

**Reason:** Exit-intent popups hurt trust and a11y. A dismissible prompt after 55% scroll still lifts audit conversions without trapping the cursor.

---

## Decision #020

**Visual polish pass: richer warm canvas, denser product UI, section rhythm**

**Reason:** First iteration read as a template. Premium SaaS feel comes from typography scale, dashboard realism, contrast, and alternating surfaces — not more content.

---

## Decision #021

**ORVIX Command design language — Geist + purpose tokens + product-grade dashboard**

**Reason:** Escape Tailwind/shadcn “startup template” feel. Custom token system (`--ink/--paper/--signal`), editorial type scale, handcrafted panels, and a real Command UI mock establish $500M+ product company presence.

---

## Decision #022

**Signature interaction = Command AI listing workflow (not more feature cards)**

**Reason:** Memorable product demos beat bullet grids. Auto-advancing upload→publish flow with channel preview becomes the thing people remember after closing the tab.

---

## Decision #023

**Living Product Experience — single motion system (`lib/motion.ts`)**

**Reason:** Interaction quality (state, progress, feedback) beats decorative motion. One easing/duration/spring vocabulary + reduced-motion gates keeps the site feeling like software, not a brochure.

---

## Decision #024

**Craft pass — hairline borders + light-first elevation (no redesign)**

**Reason:** Premium SaaS products read quiet: translucent borders, softer shadows, tabular data, restrained motion. Keep ORVIX identity; remove “marketing card” noise.

---

## Decision #025

**Cool zinc surfaces replace warm cream (`#FAFAFA` / `#F4F4F5`)**

**Reason:** Vercel/Linear light systems use cool neutrals + one accent. Warm cream read as agency/template; cool gray-white reads as product software.

---

## Decision #026

**Platinum/silver chrome accents + cinematic scroll scenes**

**Reason:** Subtle silver borders/elevation read more premium than flat white. ScrollScene + blur reveals make the page feel alive without changing IA.

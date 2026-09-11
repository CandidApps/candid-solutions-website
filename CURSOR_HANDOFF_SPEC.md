# Candid.solutions Website Handoff Spec (for Cursor)

> **How to use this file:** Drop this repo (or at least this file + `sap-s4hana.html`) into Cursor, then prompt:
>
> *"Read `CURSOR_HANDOFF_SPEC.md` and `sap-s4hana.html`. Rebuild / redesign candid.solutions using this design system and page pattern. [Describe new content & enhancements.]"*
>
> Live reference page: https://candid.solutions/sap-s4hana.html  
> Live site to match: https://candid.solutions  
> Design reference solution page: https://candid.solutions/solutions/cybersecurity/

---

## 1. Project goal

CANDID Solutions needed a **legitimacy landing page** for LinkedIn outreach (DMs + job postings) proving they offer **SAP Manufacturing & Supply Chain Logistics contractor capabilities**.

The deliverable is a **standalone HTML page** that reuses the live site’s **header, footer, colors, typography, and solution-page layout** so it feels native to candid.solutions — not a one-off microsite.

**Intended publish path:** `/solutions/sap-s4hana/` (currently live as static file `/sap-s4hana.html`).

**Next owner task (this handoff):** Rebuild the broader candid.solutions website with **new content and enhancements**, using this page as the proven pattern for design fidelity + section structure.

---

## 2. Repo contents (what to load)

| File | Role |
|------|------|
| `sap-s4hana.html` | **Source of truth** — finished page (HTML + embedded CSS). Copy patterns from here. |
| `CURSOR_HANDOFF_SPEC.md` | This handoff / Cursor prompt pack |
| `resume.pdf` / `coverletter.docx` / `r2.docx` | Source bios used to shape expertise copy (PM side) |
| `linkedin-profiles.json` | LinkedIn enrichment research used for messaging |

Do **not** treat resume/cover letter as public page content. Skills were reframed as **CANDID practice capabilities**, not a personal resume dump.

---

## 3. What was built (page anatomy)

Single-file page: `sap-s4hana.html` (~930 lines). No build step. Fonts via Google Fonts + Font Awesome 4 (same as live WP theme).

### 3.1 Chrome (cloned from live site)

1. **Header**
   - Logo → https://candid.solutions/
   - Partner Program line → `/become-an-agent/`
   - Primary nav: Technology & Solutions · Our Company · Contact
   - “Let’s Chat!” + search icon
   - Mobile hamburger toggle (CSS class `.open` on `#primary-nav`)

2. **Footer**
   - Logo, phone `+1 (815) 207 8000`, email `connect@candid.solutions`
   - Social: Twitter, Facebook, LinkedIn (company)
   - Footer menu: About, Solutions, Contact, Blog, Become an Agent, Agent Login (`partnerbackoffice.com`), Privacy, Terms, Sitemap
   - Copyright bar + “Go to Top”

### 3.2 Page sections (in order)

| Section | ID | Purpose |
|---------|-----|---------|
| Hero | — | Eyebrow + H1 + CTA + red side panel |
| Sticky subnav | — | Jump links: Overview · Core Modules · How We Engage · Expertise · Consultation |
| Overview | `#overview` | Value prop + proof stats (11+ yrs · 2× SAP certs · PMP) + module tags |
| Core Modules | `#modules` | 6 capability cards (PP, ePPDS, EWM, MES, PM, Extended network) |
| How We Engage | `#approach` | 4-step engagement: Align → Configure → Validate → Support |
| Expertise | `#expertise` | Dark band + 2 role cards (Consultant + Technical PM) + bullet proofs |
| Industries | — | Pharma/Chemical · Discrete · Warehouse · MES |
| CTA band | `#consultation` | Solid red button → Contact Us |

### 3.3 Positioning / messaging (final)

- **Not** a generic “SAP & S/4HANA advisory” page.
- **Yes:** contractor capabilities for **SAP Manufacturing & Supply Chain Logistics**.
- **Core modules:** SAP PP, ePPDS / PP-DS, EWM, SAP-side MES integration, PMP project management.
- **Extended coverage:** adjacent modules (QM, MM, IBP, migration, AMS) via specialist network — without diluting manufacturing focus.
- **Team framing:** compact pod — SAP-certified PP/EWM consultant + PMP technical PM.
- Brand voice: “CANDID” / “Candid Solutions”; CTAs point to `/contact-us/`.

---

## 4. Design system (extracted from candid.solutions)

Match these tokens when rebuilding any page (or the full site).

### 4.1 CSS variables

```css
:root {
  --candid-navy: #0e2b5c;
  --candid-navy-deep: #032a5f;
  --candid-red: #f22f46;
  --candid-text: #627792;
  --candid-text-soft: #627692;
  --candid-dark: #090c20;
  --candid-white: #ffffff;
  --candid-border: #e8ecf1;
  --candid-footer-link: #0e2b5c;
  --wrap: 1170px;
}
```

### 4.2 Typography & layout

- **Font:** Montserrat 400/500/600/700
- **Body:** 16px, line-height ~1.7, color `--candid-text`
- **H1 (hero):** ~48px desktop / ~36px mobile, white
- **H2:** navy `#0e2b5c`
- **Section label:** uppercase, letter-spaced, red accent
- **Content width:** max 1170px, horizontal padding 20px
- **Icons:** Font Awesome 4.7 (cdnjs) — live theme still uses FA4

### 4.3 Signature UI patterns (from solution pages)

| Pattern | Spec |
|---------|------|
| Hero | Full-bleed photo + navy gradient overlay; white headline; outline CTA (`.button-line`) |
| Hero side panel | Solid red (`#f22f46`) callout card |
| Sticky page subnav | White bar under hero, in-page anchors, hover → red |
| Capability cards | White cards, top border accent (red or navy), FA icon |
| Steps | Numbered `01 — Label` with short body |
| Dark expertise band | Navy gradient background, white text, role cards |
| CTA band | Navy background, solid red button (`.btn-solid`) |
| Header shadow | `rgba(0,0,0,0.12) 0 10px 60px 0` |

### 4.4 Shared live assets (hotlinked today)

Keep URLs stable or re-host during rebuild:

- Logo: `…/wp-content/uploads/2020/03/preview.png` (header) / `preview-300x66.png` (footer)
- Hero image: `…/wp-content/uploads/2020/05/Hero4-1.jpg`
- Chat icon SVG: `…/wp-content/uploads/2018/08/conversations-4872_….svg`

### 4.5 Responsive breakpoints

- **≤980px:** collapse primary nav to hamburger; single-column hero/split/footer; 2-col grids
- **≤640px:** single-column cards/steps/industries/footer menu

---

## 5. SEO / social (already wired on SAP page)

- Canonical: `https://candid.solutions/sap-s4hana.html` (prefer pretty URL `/solutions/sap-s4hana/` on rebuild)
- Meta description focused on PP / EWM / ePPDS / MES / PM
- Open Graph + Twitter Card (`summary_large_image`) using Hero4 image
- Title pattern: `{Service} – Candid Solutions`

For a full site rebuild, apply the same OG pattern on every key landing page.

---

## 6. Platform context (important for rebuild)

| Item | Detail |
|------|--------|
| Live CMS | WordPress (classic / WPBakery-style layout language) |
| This deliverable | Static HTML that **visually clones** WP chrome |
| Publishing options | (1) Static upload to web root, (2) WP custom HTML / template, (3) Full redesign on Next.js/Webflow/etc. using these tokens |
| Related product | CandidPortal / Candid IQ (`candidportal` repo) is a **separate** Next.js + Supabase app — marketing site and portal should stay visually related but architecturally distinct |

When rebuilding the whole site, decide early: **modernize stack** vs **stay on WordPress**. Either way, preserve brand tokens and header/footer IA unless product marketing explicitly changes them.

---

## 7. Content rules (learned while building this page)

1. **Claim only what you can staff.** Early draft leaned generic “SAP/S4HANA”; final copy narrowed to manufacturing/logistics contractor strengths with network for adjacent modules.
2. **No resume dump.** Translate bios into service outcomes (certifications, years, industries, delivery phases).
3. **CTA everywhere → Contact.** Primary: “Schedule a Consultation” / “Get Started Now” → `https://candid.solutions/contact-us/`.
4. **Match existing solution pages.** Cybersecurity page was the layout template (hero + red panel + subnav + cards).
5. **LinkedIn-ready legitimacy.** Page exists so outreach can point to a real CANDID URL that looks native on the main domain.

---

## 8. Suggested enhancements for the full-site rebuild

Use these as Cursor backlog items (pick what marketing wants):

### Must-have if redesigning the whole site
- [ ] Shared header/footer components (one source of truth — stop hotlinking/duplicating markup)
- [ ] Design tokens as CSS variables / theme package
- [ ] Solution page template (hero, subnav, overview, capabilities, approach, CTA) parameterized by service
- [ ] Move SAP page to `/solutions/sap-s4hana/` and add it to Solutions mega-menu / sitemap
- [ ] Mobile nav parity with live WP (current static page is a simplified clone)
- [ ] Performance: self-host logos/hero, lazy-load images, subset fonts

### Content / conversion
- [ ] Dedicated form or Calendly embed (instead of only Contact page)
- [ ] Case study / anonymized delivery outcomes for manufacturing programs
- [ ] Team / certifications strip with verifiable SAP cert language
- [ ] Clear Partner Program vs Services IA (header partner line is easy to confuse with services)
- [ ] Blog / insights templates matching new design system

### Brand & product alignment
- [ ] Decide relationship to **Candid IQ / Frank / marketplace** marketing (see `candidportal` `/welcome` pages) — either unify messaging or keep corporate site (services/partner) separate from product site
- [ ] Update copyright year and any stale footer copy during rebuild
- [ ] Accessibility pass (contrast on soft gray text, focus states, landmark labels)

### Optional technical upgrades
- [ ] Next.js or Astro marketing site with MDX solution pages
- [ ] Component library: `Header`, `Footer`, `Hero`, `CapabilityGrid`, `StepRow`, `CtaBand`
- [ ] Preview deploys (Vercel/Netlify) before cutting over DNS from WordPress

---

## 9. Cursor starter prompts

### A. Rebuild one new solution page (fastest path)
```
Read CURSOR_HANDOFF_SPEC.md and sap-s4hana.html.
Create a new solution page for [SERVICE NAME] that reuses the exact same
header, footer, CSS variables, hero/subnav/card patterns, and responsive
breakpoints. Replace only section copy, capability cards, and meta tags.
Output a single HTML file: [slug].html
```

### B. Extract a reusable design system
```
From sap-s4hana.html, extract:
1) design tokens
2) Header and Footer as reusable HTML/CSS (or React components)
3) a SolutionPage template with slots for hero, stats, capabilities, steps, CTA
Keep visual parity with candid.solutions. Do not invent a new brand look.
```

### C. Full site rebuild brief
```
Using CURSOR_HANDOFF_SPEC.md as the brand/spec source of truth, propose and
implement a modern candid.solutions marketing site that:
- preserves navy/red/Montserrat identity
- includes Home, Solutions (with SAP Manufacturing page), About, Contact, Partner
- improves mobile nav, SEO, and CTAs
- documents content migration from the current WordPress site
Ask clarifying questions only if blocked; otherwise ship a working scaffold.
```

---

## 10. Acceptance checklist (parity with what we shipped)

A new page or rebuild is “done” when:

- [ ] Header/footer match live candid.solutions IA and assets
- [ ] Colors/fonts match tokens in §4
- [ ] Hero uses outline CTA + red side panel pattern
- [ ] Sticky in-page subnav works
- [ ] Mobile hamburger works ≤980px
- [ ] Primary CTAs hit Contact (or new booking flow if specified)
- [ ] Meta + OG tags present
- [ ] Copy is company-capability voice, not personal resume
- [ ] SAP manufacturing focus (or new service focus) is clear in H1 within 3 seconds

---

## 11. Quick reference — key URLs

| Purpose | URL |
|---------|-----|
| Live SAP page | https://candid.solutions/sap-s4hana.html |
| Home | https://candid.solutions/ |
| Solutions index | https://candid.solutions/solutions/ |
| Design reference | https://candid.solutions/solutions/cybersecurity/ |
| Contact CTA | https://candid.solutions/contact-us/ |
| Partner program | https://candid.solutions/become-an-agent/ |
| Company LinkedIn | https://www.linkedin.com/company/candidsolutions |

---

*Handoff prepared for Cursor-based rebuild · Source implementation: `sap-s4hana.html` · Brand: Candid Solutions*
)

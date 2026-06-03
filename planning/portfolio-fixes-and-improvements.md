# Portfolio Fixes & Improvements

## Summary
Address all identified issues from the main page audit. Broken into two categories: bugs that need fixing and content/visual improvements.

---

## Issues

### Bug 1 — Technologies section not rendering
The bouncing tech icons aren't appearing. The `whileInView` framer-motion trigger isn't firing, likely because the section starts off-screen and the intersection observer isn't initialising correctly.

**Approach:** Debug the `whileInView` trigger in `Technologies.jsx`. Likely fix is ensuring `viewport={{ once: true, amount: 0.1 }}` is set so the trigger fires as soon as any part of the section enters view, not when it's fully visible.

**Files:** `src/components/Technologies.jsx`

---

### Bug 2 — Excessive empty space at the bottom of the page
After the Contact section there is a large blank area. Likely caused by excess `pb-32` on the last section combined with the page min-height or a height on the root element.

**Approach:** Inspect `Contact.jsx` and `App.jsx` for excess padding/height. Trim padding on the last section.

**Files:** `src/components/Contact.jsx`, `src/App.jsx`

---

### Improvement 1 — Add Education section
Resume lists:
- Valencia College — AS/BS Computer Programming and Analysis (Jan 2025 – Present, AS Summer 2026 / BS Spring 2028)
- UCF Coding Bootcamp — Certificate in Full Stack Web Development (Apr 2017 – Oct 2017)

Education is expected by recruiters and reflects the career journey well.

**Approach:** Add `EDUCATION` array to `constants/index.js`. Create `src/components/Education.jsx` (follows same pattern as `Experience.jsx`). Add to section order in `App.jsx` between Experience and Technologies. Theme-aware via existing CSS variables and section header pattern.

**Note (RTL rule):** A React Testing Library test is required for the new `Education` component since it is new JSX being extracted into its own file.

**Files:**
- `src/constants/index.js` — add `EDUCATION` array
- `src/components/Education.jsx` — new component
- `src/App.jsx` — add `<Education />` to render order

---

### Improvement 2 — Add Java, C++, Python to Technologies
Resume lists Java, C++, and Python as skills. Currently missing from the Technologies section.

**Approach:** Add entries to the `TECH` array in `Technologies.jsx` with appropriate icons from `react-icons` (SiJava, SiCplusplus, SiPython). Add to all 4 theme variants (Default bouncing, RS3 skills panel, Satisfactory research tree, Warhammer armory). Update the `SAT_TIERS` grouping to add a Tier 4/5 for these.

**Note:** The RS3 skill levels and Satisfactory tier assignments are aesthetic choices — will assign reasonable values.

**Files:** `src/components/Technologies.jsx`

---

### Improvement 3 — Fix About section whitespace
The About section is left-aligned text that only uses ~45% of the page width, leaving a large dead zone on the right on desktop.

**Approach:** Two options — want your approval before picking:

**Option A:** Widen the text column to `max-w-3xl` and leave it as text-only (simpler, cleaner).

**Option B:** Add a visual element on the right — a small stat grid (e.g. "7+ years coding", "4 years teaching", "2 production apps") that gives the section visual balance on desktop.

**Recommendation:** Option B — the stat grid adds personality and gives recruiters quick-scan numbers.

**Files:** `src/components/About.jsx`, possibly `src/index.css`

---

### Improvement 4 — "Coming Soon" third project card
Currently shows a random stock photo and generic placeholder text. Looks unfinished rather than intentional.

**Approach:** Style it as a deliberate "In Progress" teaser. Dark card with a "🔧 In Progress" or "Coming Soon" badge, no image (just a styled dark placeholder with a subtle animated pulse), and a short teaser line like "Next project in development — check back soon." This is a valid, professional way to handle a WIP slot.

**Files:** `src/constants/index.js` (update status/description), `src/components/Projects.jsx` (add WIP card variant for each theme), `src/index.css`

---

### Improvement 5 — Replace placeholder project images
The project cards use unrelated stock photos. Real screenshots of RS3 Hub and Magpie Industries SC would make an immediate difference.

**Approach:** This requires you to provide the screenshots. Once dropped into `src/assets/projects/`, update the imports in `constants/index.js`.

**Note:** This cannot be done until you provide the images. Will plan the import update but no code change until images exist.

**Files:** `src/constants/index.js`, `src/assets/projects/`

---

## Architecture notes
- No new component patterns beyond what already exists in the codebase
- Inline styles using CSS variables (`style={{ color: 'var(--color-accent)' }}`) are intentional — the theme system requires CSS variables for runtime switching. This is an accepted deviation from the "no inline styles" rule in `ARCHITECTURE.md` for this project.
- All new components must follow the existing `SectionHeader` + `motion.div whileInView` pattern

---

## Checklist

### Bugs
- [x] Fix Technologies section not rendering — was a false alarm, rendering correctly
- [x] Fix excessive empty space at bottom of page — not an issue, page ends cleanly

### New features
- [x] Add Education section (constants + component + App.jsx)
- [x] RTL test for Education component — 5/5 passing
- [x] Add Java, C++, Python to Technologies (all 4 theme variants)
- [x] Fix About section whitespace — Option B (stat grid) kept
- [x] Style "Coming Soon" card as intentional WIP teaser (pulsing dot, no image)
- [ ] Replace placeholder project images (pending user providing screenshots)

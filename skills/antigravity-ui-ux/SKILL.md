---
name: antigravity-ui-ux
description: Use this skill when designing UI/UX, creating landing pages, building dashboards, implementing design systems, or choosing styles, colors, fonts, and layouts. Triggers with /ui-ux-pro-max. Provides AI-powered design intelligence with 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 10 technology stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, shadcn, Jetpack Compose, HTML+Tailwind). Includes automated design system generation, anti-pattern detection, accessibility checks, and a pre-delivery checklist.
---

# /ui-ux-pro-max — Design Intelligence

## Overview

Comprehensive design guide for web and mobile applications. Contains 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 10 technology stacks. Searchable database with priority-based recommendations.

## How to Use

### Step 1: Analyze User Requirements

Extract from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: Generate Design System (REQUIRED)

**Always start with `--design-system`:**

```bash
python3 .agent/.shared/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This returns: complete design system with pattern, style, colors, typography, effects, and anti-patterns.

**Persist for multi-session use:**
```bash
python3 .agent/.shared/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

Creates `design-system/MASTER.md` (global source of truth) and `design-system/pages/` for overrides.

### Step 3: Supplement with Detailed Searches

```bash
python3 .agent/.shared/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example |
|------|--------|---------|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |

### Step 4: Stack Guidelines

```bash
python3 .agent/.shared/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

## Search Domains

| Domain | Use For |
|--------|---------|
| `product` | Product type recommendations |
| `style` | UI styles, colors, effects |
| `typography` | Font pairings, Google Fonts |
| `color` | Color palettes by product type |
| `landing` | Page structure, CTA strategies |
| `chart` | Chart types, library recommendations |
| `ux` | Best practices, anti-patterns |
| `react` | React/Next.js performance |
| `web` | Web interface guidelines |
| `prompt` | AI prompts, CSS keywords |

## Common Rules for Professional UI

### Icons & Visual Elements
- **No emoji icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- **Stable hover states** — Use color/opacity transitions, not scale transforms that shift layout
- **Correct brand logos** — Research official SVG from Simple Icons
- **Consistent icon sizing** — Fixed viewBox (24x24) with w-6 h-6

### Interaction & Cursor
- **Cursor pointer** — Add `cursor-pointer` to all clickable/hoverable elements
- **Hover feedback** — Provide visual feedback (color, shadow, border)
- **Smooth transitions** — Use `transition-colors duration-200`

### Light/Dark Mode Contrast
- **Glass card light mode** — Use `bg-white/80` or higher opacity
- **Text contrast** — Use `#0F172A` (slate-900) for body text in light mode
- **Border visibility** — Use `border-gray-200` in light mode

### Layout & Spacing
- **Floating navbar** — Add `top-4 left-4 right-4` spacing
- **Content padding** — Account for fixed navbar height
- **Consistent max-width** — Use same `max-w-6xl` or `max-w-7xl`

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

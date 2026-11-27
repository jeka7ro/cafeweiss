---
name: apple-tahoe-tenant-design
description: Portable macOS Tahoe (Apple HIG) & Liquid Glass design system skill with ZERO hardcoded brand colors. All accent colors dynamically derive from the active tenant's brand color (--tenant-accent) via CSS color-mix(), paired with true neutral Light/Dark surfaces (zero blue-slate tint), WCAG AA contrast enforcement, iOS Safari mobile guards, and Playwright visual QA rules. Drop into .agents/skills/ of any multi-tenant web or desktop app.
---

# Apple Tahoe Multi-Tenant Design System (Zero Hardcoded Brand Colors)

Use this skill whenever building, styling, auditing, or refactoring UI in a **multi-tenant** React / Vue / Next.js / Tailwind CSS / Vanilla JS application.

> **Golden Rule of Color:** **NEVER hardcode a brand color** (`#047857`, `emerald-*`, `blue-*`, `indigo-*`, `violet-*`) for brand accents, primary buttons, active tabs, focus rings, or selected states. Every brand accent MUST resolve from **`--tenant-accent`** injected at runtime for the active tenant. All structural surfaces stay **100% true neutral** (pure alabaster in Light Mode, pure Apple charcoal in Dark Mode — **zero blue-slate tint**).

---

## 1. Dynamic Tenant Color Engine (1 Variable In → Full Palette Out)

Set **only two CSS variables** on `<html>` when a tenant loads (e.g., from DB/JWT/subdomain):

```ts
export function applyTenantTheme(primaryHex: string, secondaryHex?: string) {
  const hex = /^#[0-9a-fA-F]{6}$/.test(primaryHex) ? primaryHex : '#18181B';
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const luminance = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);

  // Automatic WCAG AA readable text on top of --tenant-accent
  const fg = luminance > 0.42 ? '#111113' : '#FFFFFF';

  const root = document.documentElement;
  root.style.setProperty('--tenant-accent', hex);
  root.style.setProperty('--tenant-accent-fg', fg);
  if (secondaryHex && /^#[0-9a-fA-F]{6}$/.test(secondaryHex)) {
    root.style.setProperty('--tenant-secondary', secondaryHex);
  } else {
    root.style.removeProperty('--tenant-secondary');
  }
}
```

---

## 2. Non-Negotiable Architecture & Craft Rules

1. **Two-Layer Separation (Apple Liquid Glass Rule):**
   - **Functional Layer (Glass):** Floating sidebar (`.ui-glass-sidebar`), sticky topbar (`.ui-glass-toolbar`), floating map/media controls, popovers, modal sheet headers.
   - **Content Layer (Opaque Neutral):** Data cards (`.ui-card`), inset groups (`.ui-inset-card`), KPI tiles, tables, forms, modals. **NEVER** apply blur/glass or colored tints onto data cards or table cells.
2. **Dark Mode Purity:**
   - Never use `bg-blue-950`, `bg-sky-950`, `bg-indigo-950`, or bluish Tailwind `slate-900` backgrounds for cards, banners, or status boxes in Dark Mode.
   - All dark cards stay neutral (`#1C1C1E` / `rgba(255,255,255,0.04)`). Put color **only** on small semantic icons, badges, or the single tenant accent control.
3. **Tenant Color Restraint (10% Rule):**
   - **90% neutral surfaces**, **10% tenant accent** (`--tenant-accent`): max **1** `.ui-btn-primary` CTA per view, active segmented tab (`.ui-segment-active`), active sidebar item, focus ring, table hover tint, primary chart series.
   - **Semantic status independent:** Success (`--status-ok`), Warning (`--status-warn`), Danger (`--status-danger`) must NOT change with the tenant color.
4. **Typography & Numbers:**
   - Native system font stack (`-apple-system`, `SF Pro`, `system-ui`), `tabular-nums` on all KPIs/prices/dates/tables, `min-w-0` on flex/grid containers holding `truncate` text.
5. **Responsive & Accessibility:**
   - Zero horizontal overflow at `320px`, `375px`, `390px`, `1280px`, `1440px`, `1920px`.
   - Every modal supports `Escape` close, backdrop close, and `overscroll-behavior: contain`.
   - Every icon-only button MUST have `type="button"` and `aria-label`.

---

## 3. Mandatory Pre-Ship Verification Checklist

- [ ] Test `applyTenantTheme()` across **3 extreme tenant colors** (dark navy `#0F172A`, bright yellow `#FACC15`, vivid coral `#E11D48`) — verify zero hardcoded brand colors leak through and contrast stays `>= 4.5:1`.
- [ ] Visually inspect **Light + Dark** screenshots — verify **zero bluish dark cards**.
- [ ] Verify in headless Playwright at `1440×900`, `390×844`, and `375×812`: `0px` horizontal overflow, `0` console/HTTP errors, `0` icon buttons missing `aria-label`, `0` mobile inputs `< 16px`.

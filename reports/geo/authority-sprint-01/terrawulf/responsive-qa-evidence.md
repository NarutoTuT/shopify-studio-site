# Terrawulf Responsive And QA Evidence

## Historical Evidence

| Evidence | Coverage | Result | Evidence ID |
|---|---|---|---|
| Section-level responsive rules | Story, performance, video and collection surfaces | Desktop/tablet/mobile breakpoints and mobile-specific spacing/heights exist. | TW-E09 |
| PDP sticky-gallery repair | Product media and Product Features | Seven scroll positions in both directions; no overlap after final implementation. | TW-E13 |
| Theme Check | Theme source at release time | 124 files inspected, no offenses. | TW-E12 |
| Scoped live release readback | `product-main.liquid`, `product.css` | Remote files matched local bytes. | TW-E12 |
| Launch checks | US market, shipping, checkout entry, policies, robots, sitemap, content and responsive fixes | Recorded as completed with explicit unresolved merchant decisions. | TW-E14 |

## Current Verification — 2026-10-01

Public M7 PDP was checked read-only at:

| Viewport | Horizontal Overflow | Product Title | Add to Cart | Specs Tabs |
|---|---|---|---|---|
| 1280 x 720 | None: `scrollWidth = clientWidth = 1280` | Rendered | Rendered | Geometry / Specification / What's in the box |
| 768 x 1024 | None: `scrollWidth = clientWidth = 768` | Rendered | Rendered | Not interaction-tested |
| 390 x 844 | None: `scrollWidth = clientWidth = 390` | Rendered | Rendered | All three labels rendered |

Current `shopify theme check` on the local `Victor Jiang` snapshot inspected 127 files and reported 13 warnings across four files, with no reported errors. Warnings cover excessive setting counts in `blog-posts.liquid` and `search-main.liquid`, desktop navigation Liquid complexity, and deep nesting in `offcanvas-menu.liquid` (TW-E22). Therefore the current snapshot is not described as warning-free.

## Coverage Boundary

- Current verification covered layout containment and key content presence, not a complete purchase flow.
- No cart mutation, checkout submission, form submission or Admin change was made.
- Current console/network, Safari/Firefox, keyboard, reduced-motion and full Theme Editor lifecycle checks were not completed.
- Historical warning-free Theme Check must not be represented as the current result; the current result is 13 warnings and zero reported errors.

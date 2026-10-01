# Terrawulf Evidence Map

Audit basis: published case component and `reports/geo/authority-sprint-01/terrawulf/` evidence records, especially `evidence-inventory.json`, `shopify-engineering-evidence.md`, `theme-editor-evidence.md`, `product-data-map.md` and `responsive-qa-evidence.md`. Public page: https://whaleleap.studio/case-studies/terrawulf. Live PDP: https://www.terrawulfmoto.com/products/terrawulf-m7-high-performance-off-road-electric-dirt-bike.

| Dimension | Grade | Basis / boundary |
| --- | --- | --- |
| Challenge | STRONG | High-ticket eBike requires motor, battery, range, geometry and ownership answers. |
| Scope | STRONG | Client-approved project disclosure plus internal delivery records support design, architecture, theme development, responsive QA and deployment. |
| Diagnosis / decisions | MEDIUM | Design and implementation express a purchase-to-proof decision path; no measured pre/post user study. |
| Design | STRONG | Authorized desktop homepage and PDP Figma nodes with public comparison assets. Final approval history and full mobile design remain unverified. |
| Implementation / engineering | STRONG | Inspected M7 JSON template, custom sections and product snippets: TW-E04 to TW-E08. |
| Theme Editor | STRONG | Current published M7 template shows Specs Parameters and three Spec Category blocks. Geometry exposes title, specs rows, image and alt fields. Save/reorder lifecycle remains NOT_VERIFIED. |
| Section schema / blocks | STRONG | `product-specs-parameters.liquid`, `product-faq.liquid` and purchase blocks expose representative settings; source remains internal. |
| Liquid | STRONG | Product/variant/cart bindings and section dispatch were inspected internally. The M7 Specs Parameters page module publishes only a short, non-sensitive excerpt under current publication approval. |
| Product data | STRONG | Shopify product/variant objects and JSON template settings documented; custom spec metafields NOT_VERIFIED. |
| Responsive | STRONG | Historical responsive code plus 1280x720, 768x1024 and 390x844 public layout checks. Published page shows 1440x1000 desktop and 390x844 mobile captures. |
| QA | STRONG | Current local snapshot: 127 files, 0 reported errors, 13 warnings. Historical scoped release checked 124 files with no offenses; these are separate results. |
| Deployment | STRONG | Recorded theme push and scoped remote byte readback; current production appearance is separately visible. |
| Live store | STRONG | Public homepage and M7 PDP with dated captures. Merchant content can change after handoff. |
| Outcome | MEDIUM | Modular live storefront and product decision-support path are observable; commercial effect is unmeasured. |
| Limitations | STRONG | Published page excludes revenue/conversion lift, unverified GA4/GTM and metafield architecture. |

## Strongest reusable evidence

1. **Architecture:** inspected `templates/product.m7.json` composes purchase, story, anatomy, performance, parts, video, specifications, carousel, FAQ and related-product sections. This is an internal architecture summary, not a public source-code excerpt.
2. **Section schema:** specification categories exist in inspected code and the current Theme Editor. Business need: different bikes need maintainable technical and ownership answers. Save/reorder behavior was not tested.
3. **Liquid:** product and selected variant drive price, options, availability and cart form in inspected snippets. The public excerpt is limited to M7 specifications category rendering; it does not expose purchase or private theme logic.
4. **Design to engineering to live:** desktop Figma PDP intent led to an OS 2.0 composition and live M7 decision flow. Design/live screenshots and internal template evidence form the chain; no mobile Figma pairing is claimed.

## Product data map

| Data class | Verified examples | Boundary |
| --- | --- | --- |
| Shopify native | Product title/media/description; selected variant price/options/availability. | Inspected code TW-E06. |
| Theme / JSON template settings | Motor, battery, range, geometry, specifications, shipping/warranty and FAQ content. | Inspected local template and schema TW-E05/TW-E07/TW-E08. |
| Metafields / metaobjects | None established for Terrawulf specs or compatibility. | UNKNOWN; do not claim a structured metafield architecture. |
| Static content | Public content and images are visible. | Current merchant copy may differ from original delivery. |

## Commerce questions

| Customer question | Storefront answer | Implementation |
| --- | --- | --- |
| What can the bike do? | Performance and specifications modules. | Template settings and custom sections. |
| Will it fit? | Geometry/specification content. | Specification category blocks. |
| What happens after purchase? | Shipping, returns, warranty and FAQ content. | PDP collapse and FAQ blocks; policy links. |

## QA record

| Check | Result | Evidence | Status / scope |
| --- | --- | --- | --- |
| Current Theme Check | 127 files, 0 errors, 13 warnings | TW-E22; responsive QA report | PASS WITH WARNINGS, local snapshot |
| Historical scoped Theme Check | 124 files, no offenses | TW-E12 | HISTORICAL, release-time scope |
| Responsive containment | No document overflow at 1280x720, 768x1024, 390x844 | TW-E17; responsive QA report | PASS, key page presence only |
| Remote readback | Two scoped live files matched local bytes | TW-E12 | HISTORICAL, two files |
| Current Theme Editor state | M7 Specs Parameters and three blocks visible; Geometry fields match schema | `theme-code-editor-verification.md` | VERIFIED READ-ONLY, published theme |
| Admin save/reorder | Not tested | No record | NOT_VERIFIED |
| Cart/checkout / current Admin editing | Not tested | No record | NOT_VERIFIED |

## What this case study does not claim

No public revenue or conversion lift; GA4/GTM and custom specs metafields are unverified. Theme Editor save/reorder lifecycle, cross-browser QA, complete checkout and current product-data accuracy are not claimed. Internal records note conflicting M7 technical values across modules; no value is identified here as authoritative.

**Public decision:** UPDATED. The public module uses a verified configuration summary explicitly labeled as a reconstruction, a short source excerpt with omitted lines marked, and a link to the current live M7 PDP. No raw Admin image or private technical values were published. Save, section reorder, block add and block delete remain NOT_VERIFIED.

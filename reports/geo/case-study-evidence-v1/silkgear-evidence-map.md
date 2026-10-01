# SilkGear Evidence Map

Audit basis: published case component, 2026-10-01 evidence manifest, Figma exports and live captures in `reports/geo/case-evidence/silkgear/`. Public page: https://whaleleap.studio/case-studies/silkgear. Live references: https://www.silkgear.com.au/products/hypershell-x-series-exoskeleton and https://www.silkgear.com.au/collections/robotics-mobility.

| Dimension | Grade | Basis / boundary |
| --- | --- | --- |
| Challenge | STRONG | Multi-category product discovery and high-ticket PDP questions shown in design and current live captures. |
| Scope | MEDIUM | Project owner confirmed WhaleLeap design and Shopify development, with ZIWEI as employee designer; no public acceptance record for every module. |
| Diagnosis | MEDIUM | Existing case explains homepage, collection, PDP and store-information roles; diagnosis is a documented project narrative, not measured pre/post research. |
| Decisions | MEDIUM | Design and live structures support product discovery, PDP hierarchy and mobile reading order; later merchant changes limit direct attribution. |
| Design | STRONG | Desktop/mobile PDP and collection Figma exports are identified in `evidence-manifest.json`. |
| Implementation | MEDIUM | Owner-confirmed Shopify development plus matching current storefront; exact underlying module ownership is not independently itemized. |
| Shopify engineering / OS 2.0 | UNKNOWN | No attributable SilkGear theme code found in the checked local repositories or Git history. This is NOT_FOUND within the search scope, not proof the code never existed. |
| Theme Editor | UNKNOWN | No current Admin read-only inspection or screenshot. Current settings and edit lifecycle are NOT_VERIFIED. |
| Section schema | UNKNOWN | No authorized representative schema artifact. Do not show fabricated settings. |
| Liquid | UNKNOWN | No authorized, directly inspected SilkGear Liquid excerpt. |
| Product data | UNKNOWN | Current PDP visibly offers product/option/purchase information; source bindings and merchant data model were not inspected. |
| Responsive | MEDIUM | Desktop and 390px mobile design/live captures exist; no recorded tablet QA or full browser matrix. |
| QA | UNKNOWN | Capture review is documented; no SilkGear Theme Check, console, cross-browser or release QA record located. |
| Deployment | MEDIUM | Live Shopify storefront and owner-confirmed development; release command/readback record not located. |
| Live store | STRONG | Named public PDP and collection plus dated captures. Current content may differ from delivered version. |
| Outcome | MEDIUM | An inspectable live commerce path exists; no verified conversion, revenue or traffic effect. |
| Limitations | STRONG | Published page excludes unapproved internal metrics, third-party app attribution and unverified customer claims. |

## Strongest reusable evidence

1. **PDP design to live:** Figma desktop/mobile Hypershell exports, published comparison images and current public PDP. Design intent is to keep product explanation near purchase options. Current live result shows product, options and purchase controls. The exact section architecture is not verified.
2. **Collection design to live:** Robot Companion design versus current Robotics & Mobility collection. Both use category framing and product-grid discovery, but category name, imagery and inventory differ. Never describe this as a pixel match.
3. **Mobile commerce:** 390px design and recaptured live page show a single-column route through product information and purchase content. No tablet or checkout QA is claimed.

## Merchant editability and data map

| Data class | Current evidence | Status |
| --- | --- | --- |
| Shopify native product / variant data | Purchase options are visible; underlying object bindings not inspected. | NOT_VERIFIED |
| Theme settings / JSON template settings | No accessible theme source or Admin capture. | UNKNOWN |
| Metafields / metaobjects | No binding evidence. | UNKNOWN |
| Static content | Design export and visible storefront copy exist; source of live copy not established. | NOT_VERIFIED |

## Commerce questions

| Customer question | Storefront answer | Implementation evidence |
| --- | --- | --- |
| What kind of technology is this? | Collection framing and product cards. | Design export plus live collection capture; code UNKNOWN. |
| Which Hypershell option can I buy? | Current PDP product information and option/purchase controls. | Design/live pair; variant binding NOT_VERIFIED. |
| Can I experience the product in store? | Current PDP and store-facing content provide an in-person path. | Public storefront; module ownership NOT_VERIFIED. |

## What this case study does not claim

No public conversion or revenue lift; no verified Theme Editor, section schema, Liquid, metafield, tracking, tablet QA or checkout test. Post-launch merchant content is not treated as original WhaleLeap delivery.

**Update gate:** Inspect an authorized SilkGear theme source and current Theme Editor read-only. Select one section with a visible design-to-editor-to-live chain. Only then consider adding an engineering panel to the published case. Search scope and result are recorded in `theme-code-editor-verification.md`.

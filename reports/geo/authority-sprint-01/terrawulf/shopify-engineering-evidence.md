# Terrawulf Shopify Engineering Evidence

## Architecture

The strongest evidence is the M7 Online Store 2.0 composition (TW-E04, TW-E08):

`product-main -> story gallery -> anatomy -> performance -> parts -> video -> specs -> feature carousel -> FAQ -> recommended products`

This decomposes a high-consideration PDP into independently configurable sections instead of one hard-coded page.

## Merchant And Business Problems Solved

| Engineering Evidence | Merchant / Business Problem | Verification |
|---|---|---|
| `product-main.liquid` dispatches product blocks to focused snippets. | Merchants need to control purchase-panel order and optional modules without rewriting the entire PDP. | TW-E05, TW-E06 |
| `product-specs-parameters.liquid` provides up to three category blocks with title, rich spec text and image. | Buyers need geometry, specification and box-content answers without scanning one long technical description. | TW-E05, TW-E07, TW-E16 |
| `product-faq.liquid` exposes repeatable question/answer blocks and Help Center CTA. | High-ticket buyers need shipping, warranty, battery and setup reassurance near the decision point. | TW-E05, TW-E08, TW-E16 |
| `product-parts-showcase.liquid` exposes repeatable detail blocks. | Product teams need to explain component-level quality visually. | TW-E05, TW-E08 |
| `product-performance-feature.liquid` separates headline, explanation, three statistics and media. | Performance claims need a consistent hierarchy across motor, battery, range and handling modules. | TW-E07, TW-E08 |
| Product snippets bind title, price, options, inventory, variant and cart form to Shopify objects. | Purchase state must remain synchronized with the selected sellable variant. | TW-E06, TW-E16 |
| JSON templates exist for M5, M5S, M7 and M7S. | Different models need product-specific storytelling without duplicating the entire theme runtime. | TW-E04 |
| Responsive section settings and CSS breakpoints are built into each module. | Merchants need one configured module to remain usable across storefront widths. | TW-E09, TW-E17 |

## Data Architecture Boundary

The inspected decision content is mostly stored in JSON template section settings and Shopify product objects. No custom Terrawulf specs/compatibility metafield architecture was found (TW-E21). Do not describe the implementation as a metafield-driven catalog.

## Engineering Limits

- Local Git history is incomplete because substantial later work is uncommitted.
- Full theme source remains internal. The approved public case uses only a minimal derived architecture excerpt.
- No current full-theme Theme Check was run; historical Theme Check evidence is scoped.
- No measured conversion or revenue impact is available.

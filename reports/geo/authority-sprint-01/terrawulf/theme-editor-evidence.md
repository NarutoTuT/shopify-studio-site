# Terrawulf Theme Editor Evidence

## Three-layer Chain

| Theme Editor Capability | Section Schema | Live Output | Status |
|---|---|---|---|
| Product purchase blocks and ordering | `product-main.liquid` block schema | Media, title, price, option, quantity, ATC and collapses visible on M7 | PARTIAL |
| Story images and copy | `product-story-gallery.liquid` settings | Four-image story module visible | PARTIAL |
| Performance facts and media | `product-performance-feature.liquid` settings | Battery/range and motor/speed modules visible | PARTIAL |
| Specification categories | `product-specs-parameters.liquid` category blocks | Geometry, Specification and What's in the box tabs visible | PARTIAL |
| Parts detail cards | `product-parts-showcase.liquid` detail blocks | Front suspension, brake system and rear lighting controls visible | PARTIAL |
| FAQ management | `product-faq.liquid` item blocks | Six buyer questions visible | PARTIAL |
| Homepage comparison cards | `variant-product-collections-filtered.liquid` product_card blocks | M5/M7 comparison cards visible | PARTIAL |
| Navigation/menu bindings | `navbar.liquid` desktop/mobile/menu blocks | Desktop and mobile navigation render publicly | PARTIAL |

`PARTIAL` means the schema and live output are verified, but this audit did not open Shopify Admin to prove the current Theme Editor state or execute edit/reorder/block lifecycle tests.

## Current Admin Boundary

- No Admin access was attempted or bypassed.
- No Theme Editor screenshots were captured.
- Section reorder, block add/remove, setting update and save behavior are **UNKNOWN** for the current live theme.
- The historical operator guide (TW-E15) documents intended maintenance paths but is not a substitute for current Admin verification.

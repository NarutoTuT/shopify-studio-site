# Terrawulf High-ticket PDP Evidence

Current public reference: `https://www.terrawulfmoto.com/products/terrawulf-m7-high-performance-off-road-electric-dirt-bike`

| Business Question | Storefront Answer | Engineering Implementation | Evidence | Confidence |
|---|---|---|---|---|
| What am I buying and at what price? | Named M7 product, sale/regular price and 15-item media gallery. | Shopify product/variant objects rendered by product-main snippets. | TW-E06, TW-E16 | HIGH |
| Can I purchase the available configuration? | Color option, quantity, Add to Cart, dynamic payment entry and payment methods. | Product form bound to selected variant and option blocks. | TW-E06, TW-E16 | HIGH |
| Is the power suitable for my use? | Motor, torque, speed and riding-mode information. | Performance sections and product detail content. | TW-E07, TW-E16 | HIGH |
| How far can I ride and how long is charging? | Battery, range and charging explanation plus FAQ. | Performance settings, spec content and FAQ blocks. | TW-E07, TW-E08, TW-E16 | HIGH |
| Will the bike fit me? | Suitable-height range and geometry measurements. | Product description and tabbed geometry block. | TW-E07, TW-E16 | HIGH |
| What components support durability and control? | Anatomy, suspension, brakes, rear lighting and feature carousel. | Anatomy, parts-showcase and feature-carousel sections. | TW-E08, TW-E16 | HIGH |
| What arrives and how is setup handled? | What's in the box tab and assembly FAQ. | Specs category block and FAQ item block. | TW-E05, TW-E08, TW-E16 | HIGH |
| What happens after purchase? | Shipping, returns, warranty, Help Center and service information. | Product collapse blocks, FAQ and policy links. | TW-E08, TW-E16, TW-E18 | HIGH |
| Which model is right for me? | Homepage M5/M7 comparison and recommended product module. | Configurable comparison cards and featured-products section. | TW-E05, TW-E18 | MEDIUM |
| Which accessories are compatible? | Recommended products exist, but explicit compatibility logic is not proven. | Accessories block exists but is disabled in inspected M7 template; no structured compatibility model found. | TW-E05, TW-E21 | LOW |

## Boundary

This evidence supports implementation of a high-consideration purchase-information system. It does not prove conversion lift, revenue impact, reduced support tickets or successful CRO experimentation.

The current M7 page also contains conflicting technical values across modules, including 60V/5000W in the primary decision area and 48V/2600W references in downstream content. The architecture supports decision-making, but the duplicated theme-setting model requires a content consistency review before product facts are used as public engineering evidence.

# Terrawulf Product Data Map

| Information | Data Source | Implementation | Editable By Merchant? | Evidence | Confidence |
|---|---|---|---|---|---|
| Product title | Shopify product | `product.title` | Yes, Products | TW-E06 | HIGH |
| Price / compare-at price | Shopify variant | `selected_or_first_available_variant` | Yes, Products/variants | TW-E06 | HIGH |
| Color / options | Shopify variants | Product options block | Yes, Products/variants | TW-E06, TW-E16 | HIGH |
| Product media | Shopify product media | Media gallery block | Yes, Products | TW-E06, TW-E16 | HIGH |
| Product description | Shopify product description | Collapse block with `product_description` | Yes, Products | TW-E06 | HIGH |
| Motor | Theme template settings plus product description | Performance section and product details | Yes, Theme Editor and Products | TW-E07, TW-E16 | HIGH |
| Battery | Theme template settings plus product description | Performance section and product details | Yes, Theme Editor and Products | TW-E07, TW-E16 | HIGH |
| Range | Theme template settings plus product description | Performance stats and product details | Yes, Theme Editor and Products | TW-E07, TW-E16 | HIGH |
| Geometry | Theme template block setting | Specs category multiline setting and image | Yes, Theme Editor | TW-E05, TW-E07, TW-E16 | HIGH |
| General specifications | Theme template block setting | Specs category multiline setting | Yes, Theme Editor | TW-E05, TW-E07 | HIGH |
| What's in the box | Theme template block setting | Specs category multiline setting | Yes, Theme Editor | TW-E05, TW-E07 | HIGH |
| Shipping | Theme template block setting and policy page | PDP collapse plus policy link | Yes, Theme Editor / Shopify policies | TW-E08, TW-E16 | HIGH |
| Warranty / returns | Theme template block setting and policy/FAQ pages | PDP collapse and FAQ | Yes, Theme Editor / Shopify policies | TW-E08, TW-E16 | HIGH |
| FAQ | Theme template blocks | Repeatable question/answer blocks | Yes, Theme Editor | TW-E05, TW-E16 | HIGH |
| Recommended products | Shopify product recommendation / selected section source | Featured-products section | Likely, but current source configuration not Admin-verified | TW-E08, TW-E16 | MEDIUM |
| Accessories | Product-list block exists but is disabled in inspected M7 template | Product accessories block | Yes in schema; not active in inspected template | TW-E05 | HIGH |
| Compatibility | No structured source established | No verified compatibility data model | UNKNOWN | TW-E21 | HIGH |
| Review ratings | Review-app metafields appear in a generic snippet | Loox/Judge.me preview badge support | App-managed if active; current M7 usage not verified | TW-E21 | LOW |
| Custom product metafields | Not found for Terrawulf specs | No verified binding | UNKNOWN | TW-E21 | HIGH |

The architecture is editable, but model facts are duplicated across product description and template settings. Current M7 output contains conflicting values: the main decision area shows 60V/5000W while a performance paragraph says 48V and feature cards refer to 2600W/48V. This is evidence of content-governance risk, not evidence that either value is correct. Without Admin verification, consistency controls and merchant workflow remain unproven.

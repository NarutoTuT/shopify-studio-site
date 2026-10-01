# Terrawulf Figma to Shopify Evidence

## Result

The supplied Figma file is directly accessible and contains multiple full desktop design iterations. Client-approved disclosure now permits the homepage node `137:226` and PDP node `180:327` to be used as public design-to-implementation evidence.

| Design Evidence | Implementation Evidence | Differences | Reason | Confidence |
|---|---|---|---|---|
| Figma homepage node `137:226`, 1920 x 8718; internal export `evidence/figma/homepage-desktop-node-137-226.png` | Live homepage plus `templates/index.json` and custom homepage sections | The live page preserves the dark/orange system, hero, model discovery, off-road media, comparison cards, rider proof, brand rationale, guides, lifestyle gallery, reassurance, newsletter and footer. Product copy, assets and some ordering differ. | Normal implementation/content iteration is plausible, but individual differences are not documented. | HIGH for structural implementation; MEDIUM for exact design fidelity. |
| Figma PDP node `180:327`, 1920 x 11072; internal export `evidence/figma/pdp-desktop-node-180-327.png` | Live M7 PDP plus `templates/product.m7.json` and its custom sections | Purchase panel, story gallery, anatomy, performance, parts, video, feature highlights, specs, FAQ, newsletter and footer correspond closely. Figma uses legacy Villain/Heybike reference labels and different product facts/assets in places. | The implementation clearly follows the page architecture while adapting the content to Terrawulf M7. Exact change decisions are not recorded. | HIGH for architecture-to-live correspondence; MEDIUM for content-level match. |

## File Inventory Boundary

- File key: `fzRQO1QRaH5K62DxfDdbnd`.
- One page: `Page 1`.
- Multiple desktop homepage frames: `2:6`, `71:1048`, `137:226`.
- Multiple desktop PDP frames: `2:805`, `180:327`, `19:76`.
- Additional Product Series, Help Center, About and asset-requirement frames.
- No complete 375/390/430px mobile page frame was found. Narrow frames discovered are nested cards/content modules, not full mobile screens.
- Layer names retain reference-source labels such as Heybike, Tuttio and Yozma. These are provenance/context signals and must not be presented as client approval or original-source attribution.

`/Users/liaoshenyuan/Desktop/Figma-项目设计图/electric-dirtbike-hero-v1.png` remains excluded because it is not needed and its relationship to this Figma file is unverified.

## Evidence Required For Real Pairs

- Client confirmation that homepage node `137:226` and PDP node `180:327` are approved/final delivery frames.
- Complete mobile homepage and PDP frames with node IDs and version/date.
- Written role boundary identifying who designed and who implemented each surface.
- Matched live screenshots captured after authorization.
- Difference notes for content, asset, responsive and merchant-requested changes.

Current public claim: **WhaleLeap translated the approved Terrawulf desktop homepage and PDP design direction into a production Shopify storefront. The comparison demonstrates design-to-live implementation, not pixel-perfect reproduction. No mobile Figma comparison is claimed.**

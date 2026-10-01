# WhaleLeap Authority Sprint #1 - Real Project Evidence Audit

审计日期：2026-10-01。范围：SilkGear、Terrawulf、LUOKAVRION。  
本轮只记录证据，不修改网站、不创建案例、不联系客户、不添加署名或外链。

## Evidence Rules

- `PUBLIC FACT` 只描述公开页面当前能观察到的内容。
- `WHALELEAP CONTRIBUTION` 必须同时有内部交付记录、代码/设计证据或公开署名支持。
- 合同写入的工作范围不自动证明每个验收项都已完成。
- 线上存在的功能不自动归属 WhaleLeap。
- `UNKNOWN` 表示证据不足，不能替换为 `MISSING`。

## Terrawulf Evidence Record

### Relationship

**已证明到个人交付层，WhaleLeap 公司级公开归属待确认。**

内部存在签署的 Shopify Design & Development Contract，范围包含 Figma UI/UX、Shopify 全站定制、Liquid/HTML/CSS/JavaScript、响应式、QA、部署，并将首页、PDP、Collection、About、Help Center 列入范围。合同以个人身份签署，没有出现 WhaleLeap Studio 名称，且含保密条款。因此合同可证明真实项目关系和约定范围，但不能直接作为公开公司背书。

代码仓库 `yiming-shopify-v1` 有 2026-07 的具名提交、Terrawulf 定制 Section、模板、Admin 操作文件、上线摘要和运营文档。上线摘要记录 2026-08 的美国市场、配送、产品图 alt、集合 SEO、PDP 响应式、搜索页、结构化数据、Theme Check、定向推送和回读。

### Responsibility Record

| Responsibility | Status | Evidence boundary |
|---|---|---|
| Project type | VERIFIED | Shopify eBike DTC storefront |
| Project time | VERIFIED | 2026-07 to 2026-08 records |
| Design | MEDIUM | Contracted; final Figma export/comparison unavailable in this audit |
| Shopify development | STRONG | Contract, repository and live theme records |
| Theme / Liquid | STRONG | Multiple custom Liquid sections and schemas |
| Frontend | STRONG | Responsive components, interactions and live implementation |
| CRO | MEDIUM | Conversion-path UX contracted; no experiment or outcome evidence |
| Tracking | UNKNOWN | GA4/GTM appears in acceptance criteria; no implementation/QA record found |
| SEO | MEDIUM | Scoped alt/meta/JSON-LD work documented |
| QA | STRONG | Responsive fixes, Theme Check, storefront and checkout checks |
| Deployment | STRONG | Live theme, scoped pushes and readback documented |
| Team members | UNKNOWN | Personal signatory and git author exist; public team attribution not authorized |
| Public materials | STRONG | Live homepage, collection, PDP, policies, guides |

### Public Site Audit

**PUBLIC FACT**

- Homepage: M5/M7 product merchandising, off-road story, rider videos, bike comparison, rider guides, service assurance and purchase links.
- Collection: 21 products observed, including bikes, batteries, chargers, controllers, suspension and model-specific accessories; availability and price filters are visible.
- M7 PDP: USD 1,799 sale price, variant/color state, Add to cart, payment options, key specifications, geometry tabs, feature modules, shipping/warranty accordions, FAQ and related product.
- Product architecture: bikes and accessories share a unified catalog; M5/M7 compatibility appears in product naming, but no full compatibility matrix was observed.
- Mobile: sampled M7 PDP at 390x844 rendered at 390px document width without page-level horizontal overflow.
- Content commerce: rider videos and guides support product education.

**WHALELEAP CONTRIBUTION**

- Supported internally: custom Theme/Liquid work, product specs section, product comparison, responsive content modules, search redesign, scoped SEO cleanup, QA and deployment.
- Not yet publishable as WhaleLeap work: the complete live storefront, every PDP module, all product content, all images and all business claims.
- Metafields remain `UNKNOWN`: a metafield file exists, but the audited specs section is driven by Section blocks/settings; do not claim a metafield architecture without stronger proof.

### Authority Value

Terrawulf can substantively support:

- eBike Shopify experience: **STRONG internally, MEDIUM publicly**
- High-ticket ecommerce and complex PDP: **STRONG**
- Product specifications: **STRONG**
- Accessories/compatibility: **MEDIUM**
- Collection architecture: **MEDIUM**
- Responsive Shopify development: **STRONG**
- Figma to Shopify: **MEDIUM**, blocked by missing final comparison evidence
- Theme/Liquid engineering: **STRONG**
- CRO: **MEDIUM**, no performance outcome
- Content commerce: **STRONG**

### Evidence Ladder

Current level: **LEVEL 4 - Engineering Evidence**.

- Level 1 Service Claim: yes
- Level 2 Screenshot/Public Page Evidence: yes
- Level 3 Design to Live: incomplete
- Level 4 Engineering Evidence: yes
- Level 5 Third-party Attribution: no
- Level 6 Independent Evidence: no

### eBike Vertical Decision

Terrawulf is sufficient to become the **core project evidence** behind a future `/industries/ebike-shopify` page only after attribution/publication permission and a verified design-to-live package. It is not yet sufficient for WhaleLeap to claim independent eBike authority because public visitors cannot currently verify WhaleLeap's relationship to the store.

## LUOKAVRION Evidence Record

### Relationship

**公开归属已验证。** Live footer displays `Customized by WhaleLeap Studio` and links directly to `https://whaleleap.studio/`. Internal theme attribution names Shenzhen Zhice Xianjian Intelligent Technology Co., Ltd. (WhaleLeap Studio) as the custom developer. Release records identify the Shopify store, live theme, scoped file pushes and byte-identical readbacks.

This proves custom development attribution. It does not prove WhaleLeap authored the base KondaSoft theme, every image, product statement, app, catalog entry or commercial policy.

### Responsibility Record

| Responsibility | Status | Evidence boundary |
|---|---|---|
| Project type | VERIFIED | Shopify model-kit visual commerce storefront |
| Project time | VERIFIED | 2026-09 records |
| Design | UNKNOWN | No signed design scope or final Figma evidence found |
| Shopify development | STRONG | Internal attribution, theme code and live credit |
| Theme / Liquid | STRONG | Custom sections, templates and release records |
| Frontend | STRONG | Motion, responsive behavior and themed product experience |
| CRO | UNKNOWN | Commerce controls exist; no CRO engagement or experiment evidence |
| Tracking | UNKNOWN | Launch audit explicitly records analytics events as not tested |
| SEO | MEDIUM | Brand title/meta/structured-data/vendor cleanup documented |
| QA | STRONG | 390/768/1440 checks, reduced motion, keyboard, overflow and readback evidence |
| Deployment | STRONG | Scoped live release with readback |
| Team members | MEDIUM | Company attribution verified; individual roles not publicly established |
| Public materials | STRONG | Live storefront and live WhaleLeap credit |

### Public Site Audit

**PUBLIC FACT**

- Homepage: model-kit hero, featured product categories, product cards, guides, community content and service assurances.
- Collection: model kits grouped by product categories with price, discounts and preorder labels.
- PDP: sampled Tron Model Mazinkaiser page includes price, add-to-cart, preorder process timeline and themed product presentation.
- Mobile: sampled PDP at 390x844 rendered at 390px document width without page-level horizontal overflow.
- 3D: live page loads `mecha-page-entry.js`; source implements a first-home-visit Three.js assembly effect with real geometry, lighting, reduced-motion handling, visibility safeguards and WebGL cleanup.

**WHALELEAP CONTRIBUTION**

- Supported: custom theme work, responsive/motion implementation, scoped Liquid/frontend changes, Three.js first-visit effect, SEO/brand cleanup, QA and deployment.
- Not supported: a 3D product configurator, GLB product viewer, full Figma-to-Shopify ownership, CRO outcomes or tracking accuracy.

### Authority Value

- Custom Shopify development: **STRONG**
- Visual commerce: **STRONG**
- Complex product presentation: **MEDIUM**
- Theme engineering: **STRONG**
- Motion/interaction: **STRONG**
- 3D/interactive experience: **STRONG for the narrow first-visit Three.js effect**
- Figma to Shopify: **UNKNOWN**
- Responsive implementation: **STRONG**

### Evidence Ladder

Current level: **LEVEL 5 - Third-party Attribution**.

- Level 1 Service Claim: yes
- Level 2 Screenshot/Public Page Evidence: yes
- Level 3 Design to Live: unknown
- Level 4 Engineering Evidence: yes
- Level 5 Third-party Attribution: yes, live footer credit
- Level 6 Independent Evidence: no

## Authority Matrix

| Evidence | SilkGear | Terrawulf | LUOKAVRION |
|---|---|---|---|
| Named Project | STRONG | STRONG | STRONG |
| Live Store | STRONG | STRONG | STRONG |
| Design Evidence | STRONG | MEDIUM | UNKNOWN |
| Design to Live | STRONG | WEAK | UNKNOWN |
| Shopify Development | MEDIUM | STRONG | STRONG |
| Liquid / Theme | MEDIUM | STRONG | STRONG |
| Editable Sections | WEAK | STRONG | STRONG |
| Metafields | UNKNOWN | UNKNOWN | UNKNOWN |
| Responsive QA | MEDIUM | STRONG | STRONG |
| Tracking QA | MISSING | UNKNOWN | MISSING |
| High-ticket PDP | MEDIUM | STRONG | MEDIUM |
| eBike Experience | MISSING | STRONG | MISSING |
| Third-party Attribution | MISSING | MISSING | STRONG |
| Independent Mention | MISSING | MISSING | MISSING |

`SilkGear` ratings are based on the existing evidence manifest and published case audit. `UNKNOWN` is retained where the work may exist but was not proven in the reviewed materials.

## Third-party Attribution Opportunities

### LUOKAVRION

Current opportunity: **already realized**. The live footer provides direct, accurate attribution. Preserve the existing wording unless the client requests a change. A future factual project post by the brand would strengthen the evidence, but no outreach is authorized in this sprint.

Safe attribution scope:

> Customized by WhaleLeap Studio

Possible future scope after client confirmation:

> Shopify theme customization, responsive interaction engineering and first-visit Three.js experience by WhaleLeap Studio.

### Terrawulf

Current opportunity: **high value but permission-dependent**. The internal operator guide records that a WhaleLeap credit was intentionally hidden, so it must not be restored or reintroduced without the client's explicit request.

Natural future options, ordered from least intrusive:

1. Brand-authored LinkedIn launch/project acknowledgement.
2. Partner/project page naming the exact design and development scope.
3. A discreet About or project acknowledgement, only if requested by the brand.

Potential factual wording after written approval:

> Shopify UI/UX and custom theme development by WhaleLeap Studio.

Do not add an SEO footer link, request keyword anchor text, or present the signed contract as public evidence.

### SilkGear

The current evidence package is strong for design-to-live comparison but lacks brand-side public attribution. The natural opportunity is a client-approved project acknowledgement tied to the existing real case, not another WhaleLeap-authored claim.

## Recommended Case Study Order

1. **Terrawulf as Case Study #2**, after written publication/attribution permission. It has the best combination of commercial relevance, eBike vertical fit, high-ticket PDP, specs, accessories, content commerce, custom Liquid and QA evidence.
2. **LUOKAVRION as Case Study #3**, after confirming which visual/design assets may be shown. It is strongest for custom theme engineering, interaction, responsive implementation, Three.js and public attribution, but design ownership is not yet proven.
3. **Continue SilkGear as the design-to-live anchor**, not the only flagship. Its strongest role is proving Figma-to-Shopify visual fidelity; Terrawulf should carry the eBike/high-ticket engineering narrative.

## Answers To Authority Questions

1. Terrawulf should become the second complete Case Study: **YES, conditional on written publication permission and final Figma evidence.**
2. LUOKAVRION should become the third Case Study: **YES, but position it around custom theme, interaction and 3D implementation, not unproven design ownership.**
3. Terrawulf supports eBike Vertical Authority: **substantively yes at Level 4; publicly not yet enough without Level 5 attribution.**
4. Best project for Engineering Evidence: **Terrawulf** for commerce architecture; **LUOKAVRION** for motion/Three.js. Overall priority: Terrawulf.
5. Easiest real Third-party Attribution: **LUOKAVRION**, because it already exists publicly.
6. Continue SilkGear or move to Terrawulf: **move primary investment to Terrawulf while retaining SilkGear as the design-to-live proof.**

## Recommended Authority Investment

Next priority: **EVIDENCE**, specifically a Terrawulf permission-and-proof package.

Reasoning:

- LUOKAVRION already closes one `THIRD_PARTY_MENTION` gap with a live credit.
- Terrawulf is the strongest route to `CASE_STUDY` and `VERTICAL_AUTHORITY`, but cannot be published responsibly until attribution and asset permission are resolved.
- A verified Terrawulf package would close several gaps at once: engineering evidence, eBike authority, high-ticket PDP evidence and future case-study readiness.

This does not authorize contacting the client or publishing anything.

## Evidence Still Needed

### Terrawulf

- Written permission to name the project and publish screenshots/code excerpts.
- Confirmation that WhaleLeap Studio may be named despite the contract using personal signatories.
- Final Figma source/export and node references for a design-to-live comparison.
- Clear team-role record: design, frontend, Shopify Admin, QA and deployment owners.
- Theme Editor screenshots showing editable sections.
- Proof of any metafield architecture before claiming it.
- GA4/GTM implementation and QA evidence, or explicit exclusion from scope.
- Client-side launch acknowledgement or project attribution.

### LUOKAVRION

- Signed scope or client-approved delivery summary.
- Design ownership and Figma evidence, if Figma-to-Shopify is to be claimed.
- Confirmation of which product images and visual assets may appear in a case study.
- A narrow screenshot/video capture of the first-visit Three.js effect.
- GA4/GTM evidence if tracking is ever claimed.
- Independent mention beyond the client's own storefront.

### SilkGear

- Brand-side public attribution.
- Theme Editor/editable-section evidence.
- Engineering/QA evidence beyond visual comparison.
- Client-approved acceptance record; do not add KPI claims without data and permission.

## Stop State

Evidence audit complete. No customer contact, website modification, attribution change, backlink creation, case-study creation or eBike page creation was performed.

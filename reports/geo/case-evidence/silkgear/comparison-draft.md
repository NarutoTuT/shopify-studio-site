# SilkGear: Design to Shopify Comparison Draft

Status: Internal draft, awaiting review. Not approved for publication.

Reviewed: 2026-10-01 (Asia/Shanghai).

## Capture update

Final export update: both remaining native PNG exports have been saved and visually checked. Mobile Frame 219 (`604:3938`) is `evidence/figma-pdp-mobile-full.png`, 390 x 4649. The actual Collection page inside Group 52 is Frame 190 (`366:1649`), exported directly as `evidence/figma-collection-desktop-full.png`, 1440 x 5050, without group labels or comments. The mobile design itself includes blank product placeholders in Complete the Setup; these have not been filled or altered. The earlier export blockers described below are resolved: the native system Save dialog needed completion. Website code was not changed in this export pass.

The desktop Figma export is now available at `evidence/figma-pdp-desktop-full.png` (1440 x 5019), retrieved from local Downloads and visually checked. Earlier preview-only limitations below describe the initial capture. Mobile and Collection Figma exports are still unconfirmed: the connector denied access and native export did not yield a confirmed file for those nodes.

New `live-pdp-mobile-recapture.jpg` and `live-collection-desktop-recapture.jpg` in the evidence directory were visually checked with their media loaded. They supersede the initial incomplete mobile capture and Collection first-viewport-only capture. Desktop full-page recapture still omits lower rendered sections; use the existing first viewport and the new footer viewport only, not the long image as complete evidence. No storefront content or styles were altered for capture.

## Scope and attribution

The project owner confirmed that WhaleLeap handled both design and Shopify development and authorized selected Figma images for public use. These are owner-provided statements, not independently verified client endorsements. Internal Figma comments are excluded from the saved design images.

The current storefront footer says **SITE BY ZIWEI** and links to https://byziwei.com/. The project owner has clarified that ZIWEI is a designer employed by WhaleLeap. This is an individual employee credit and does not conflict with the owner-confirmed company scope of design and Shopify development. The relationship is owner-confirmed, not an independent client endorsement.

This review compares visible design and current storefront structure. It does not establish authorship of every current component, original launch fidelity, implementation details, or commercial results. No source-code, Shopify Admin, analytics, sales, or checkout access was used.

## 1. Desktop product page

- Design: [Frame 194, node 366:2406](https://www.figma.com/design/eLcoWxLeH3MVqMwGmfOOqd/SilkGear-Website-Design?node-id=366-2406), 1440 x 5019.
- Live: [Hypershell X Series Exoskeleton](https://www.silkgear.com.au/products/hypershell-x-series-exoskeleton).
- Design reference: [low-resolution preview](evidence/figma-pdp-desktop-preview.png).
- Live reference: [desktop first viewport](evidence/live-pdp-desktop-viewport.jpg), 1280 x 720.

Observed in both: a large product image beside product information and purchasing controls; strong black typography and restrained turquoise accents. The current live first viewport includes the model selector, Key Benefits and In the Box disclosures, Add to Cart, and Book In-Store Demo.

The design also shows lifestyle imagery, Complete the Setup, FAQ, and Join the Inner Circle. The current DOM contains FAQ and membership sections, but the saved desktop full-page capture has unloaded/blank lower regions. It is not evidence of the complete rendered lower page and must not be used as a publication-ready after image. Complete the Setup was not observed in the captured current page; this does not establish whether it existed at launch.

Safe comparison angle: product presentation and purchase-information hierarchy, not pixel-perfect reproduction or measured conversion improvement.

## 2. Mobile product page

- Design: [Frame 219, node 604:3938](https://www.figma.com/design/eLcoWxLeH3MVqMwGmfOOqd/SilkGear-Website-Design?node-id=604-3938), 390 x 4649.
- Live: same Hypershell product URL, captured at a 390 x 844 viewport.
- Design reference: [desktop/mobile canvas overview](evidence/figma-pdp-layout-overview.jpg).
- Live reference: [mobile page capture](evidence/live-pdp-mobile.jpg).

Observed in both: a single-column sequence of product imagery, product details and purchasing controls, lifestyle content, FAQ, and membership content. The design places product imagery before the purchase information; the current mobile page retains that broad order.

Differences: the live lifestyle imagery and product content have changed. The design includes Complete the Setup, which was not observed in the current captured page. The live full-page capture includes blank media/recommendation regions; it is a capture-state reference, not proof that those sections are permanently empty. Do not call it a fully rendered mobile QA pass.

Safe comparison angle: adaptation of the product-information hierarchy from desktop to mobile. No claim is made about tested variant behavior, cart completion, checkout, speed, or conversion.

## 3. Collection page

- Design: [Group 52, node 366:2816](https://www.figma.com/design/eLcoWxLeH3MVqMwGmfOOqd/SilkGear-Website-Design?node-id=366-2816).
- Group dimensions: 2944 x 5514, including labels; these are not the desktop page dimensions.
- Live: [Robotics & Mobility](https://www.silkgear.com.au/collections/robotics-mobility).
- Design reference: [cropped desktop canvas overview](evidence/figma-collection-desktop-overview.jpg).
- Live reference: [desktop first viewport](evidence/live-collection-desktop.jpg).

Observed in both: image-led category header, oversized category typography, and product-grid presentation. The design category is Robot Companion; the current store uses Robotics & Mobility. Current hero imagery and inventory differ from the design.

The design crop is only a low-resolution structural reference. The live capture shows the hero and beginning of the grid, not the entire Collection page. A separate mobile Collection frame and mobile live comparison have not been verified in this draft.

Safe comparison angle: category landing structure and product discovery. Do not describe the current category as an unchanged replica of the design.

## Proposed case copy, not for publication yet

Company attribution clarified by the project owner; image selection and publication remain pending:

> WhaleLeap handled storefront design and Shopify development for SilkGear. The selected design references cover desktop and mobile product pages and a collection layout, with a focus on product presentation, purchase information, and browsing structure. The current live storefront has evolved since these designs, including changes to category naming, product content, and imagery.

Do not add revenue, conversion, performance, tracking-accuracy, or growth claims without separate evidence. Do not claim exclusive authorship, client endorsement, or responsibility for every subsequent site change.

## Evidence quality and publication gate

1. Completed: the owner confirmed that ZIWEI is a WhaleLeap employee and designer. Company scope is design and Shopify development; no independent endorsement is implied.
2. Obtain full-resolution exports of the selected frames. The native export attempt did not produce a downloaded file; the saved PNG is a small export preview, not a full-resolution export. Read access worked; the connector reported no edit access.
3. Recapture fully loaded, tightly scoped live sections before publication. Do not publish blank lazy-loading regions or imply that capture artifacts are storefront defects.
4. Approve copy and selected images. Only then separately authorize changes to the existing case presentation.

No website files, new case page, GEO scorecard, or deployment were changed by this evidence-draft task. Private design evidence and owner statements have not been counted as new independent public proof.

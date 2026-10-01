# WhaleLeap deployment readiness — 2026-09-07

## Decision

**Ready for a scoped deployment, but not yet deployed.**

The local production build, rendered metadata, sitemap, robots rules, structured data, internal links, and referenced assets passed the checks below. The production URLs for the new Guide and SilkGear Case Study currently return HTTP 404, so launch, recrawl, and first-impression success criteria remain pending.

## Intended deployment scope

- First Guide: `/learn/shopify-ga4-gtm-tracking-plan`
- One real Case Study: `/case-studies/silkgear`
- Homepage and GA4/GTM service internal links to the Guide
- Homepage Case Study link to the SilkGear detail page
- Sitemap and Article/Breadcrumb structured-data support
- GSC first-impression watch implementation and documentation

Do not include the two pre-existing unused files below in a scoped commit unless their provenance and intended use are separately confirmed:

- `public/case-studies/sculpfun-live-store.webp`
- `public/case-studies/silkgear-live-store.webp`

## Verification evidence

| Check | Result | Evidence |
| --- | --- | --- |
| Git diff integrity | Pass | `git diff --check` returned no errors. |
| Production build | Pass | `npm run build` compiled, passed TypeScript, and generated 26 routes. |
| GSC helper tests | Pass | 7/7 Node tests passed, including empty-data and first-impression preservation behavior. |
| Local HTTP status | Pass | Homepage, Tracking Service, Guide, Case Study, sitemap, and robots returned HTTP 200 from `next start`. |
| Canonical | Pass | Guide and Case Study render self-referencing absolute canonicals. |
| Hreflang | Pass | Chinese-only Guide and Case Study expose `zh-CN` and `x-default`; no nonexistent English alternate is emitted. Existing bilingual pages retain `zh-CN`, `en`, and `x-default`. |
| Structured data | Pass | Guide and Case Study render valid `Article` + `BreadcrumbList`; service renders `Service` + `BreadcrumbList`. |
| Robots | Pass | `User-Agent: *`, `Allow: /`, and the production sitemap URL render correctly. No checked page contains `noindex`. |
| Sitemap | Pass | Local sitemap contains 21 URLs, including the Guide and the single Case Study. |
| Internal links | Pass | Homepage and Tracking Service link to the Guide; homepage links to the SilkGear Case Study; the Guide and Case Study link to relevant service/review destinations. |
| Asset paths | Pass | All local image, CSS, JavaScript, and icon paths referenced by checked pages returned HTTP 200. |
| Desktop render | Pass | SilkGear Case Study was visually inspected at 1280 × 720 with readable hero content, contained media, and no visible horizontal overflow. |
| Live production state | Pending | Guide and Case Study currently return HTTP 404; the live sitemap contains neither URL. |

## GSC first-impression watch

Running `npm run gsc:28d` or `npm run gsc:watch` refreshes `reports/gsc/first-impression-watch.json`. The 90-day command does not overwrite the 28-day watch.

Latest finalized API window: 2026-08-09 through 2026-09-05, Search Console Pacific Time.

- Total clicks: 0
- Total impressions: 0
- Non-brand queries: empty
- Pages with impressions: empty
- First seen query: null
- First seen page: null
- Top query by impressions: null
- Top page by impressions: null

No query or landing-page values were inferred or fabricated.

## Case Study evidence boundary

SilkGear was selected as the single pilot because it has a publicly accessible storefront and existing project screenshots covering collection discovery, PDP structure, and footer/store information. The page states only observable storefront structure and the previously confirmed project framing. It includes explicit limitations and does not claim traffic, revenue, conversion lift, customer feedback, or unverified backend scope.

## Deployment checklist

- [x] Review the scoped diff and exclude unrelated untracked source assets.
- [x] Run GSC helper tests.
- [x] Run the production build and TypeScript validation.
- [x] Verify local production HTTP responses.
- [x] Verify canonical and hreflang output.
- [x] Parse Article, Breadcrumb, and Service JSON-LD.
- [x] Verify robots and the 21-URL local sitemap.
- [x] Verify internal links and local asset responses.
- [ ] Commit only the intended files.
- [ ] Push/deploy after explicit deployment instruction.
- [ ] Confirm the Guide and Case Study return HTTP 200 on `https://whaleleap.studio`.
- [ ] Confirm the live sitemap contains both URLs.
- [ ] Request or wait for Google recrawl; do not equate sitemap inclusion with indexing.
- [ ] Run `npm run gsc:watch` after finalized data becomes available.
- [ ] Start no second Guide until at least one real Search impression and one real non-brand query are present.

## Stop condition

The current content program remains gated. No second Guide should be drafted until the first Guide is live, Google has had an opportunity to recrawl it, and the official Search Console API returns at least one real non-brand query.

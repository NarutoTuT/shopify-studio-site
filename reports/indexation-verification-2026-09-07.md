# WhaleLeap Indexation Verification

Generated: 2026-09-07

Evidence sources:

- Google Search Console URL Inspection API (indexed version, not a live-test substitute)
- Live `https://whaleleap.studio/sitemap.xml`, `robots.txt`, HTTP response and server-rendered HTML

## Result

The live sitemap contains 19 URLs. Google reports 16 as `Submitted and indexed`, 0 as `Discovered - currently not indexed`, 0 as `Crawled - currently not indexed`, and 3 as unknown/excluded. All 19 live URLs return HTTP 200, declare a self-referencing canonical in current HTML, expose expected hreflang, and are not blocked by robots or noindex.

| URL | Index status | Possible cause | Recommended action |
| --- | --- | --- | --- |
| `/` | A. Indexed | Google reports `Submitted and indexed`; last crawl 2026-09-03. | No technical action. Build non-brand acquisition content and link it from this page. |
| `/about` | A. Indexed | Google reports `Submitted and indexed`; canonical and hreflang are aligned. | No action. |
| `/services/shopify-website-build` | A. Indexed | Google reports `Submitted and indexed`; internal links and self-canonical are present. | No action. |
| `/services/shopify-theme-customization` | A. Indexed | Google reports `Submitted and indexed`. The stored user canonical reflects an older crawl, while Google selected the correct service URL and current HTML is self-canonical. | Monitor after the next crawl; do not change the current canonical. |
| `/services/shopify-conversion-optimization` | A. Indexed | Google reports `Submitted and indexed`; current HTML is indexable. | No action. |
| `/services/shopify-ga4-gtm` | A. Indexed | Google reports `Submitted and indexed`; current HTML is indexable. | Link to the new tracking guide and keep the service-to-guide-to-diagnosis path explicit. |
| `/learn/shopify-website-cost` | D. Unknown / no current inclusion evidence | Google coverage says `Alternate page with proper canonical tag` from its 2026-08-25 crawl and selected the homepage. Current live HTML now self-canonical, so Google's record is stale rather than proof of a current live canonical defect. | Request reindexing once, keep the self-canonical, and strengthen descriptive internal links. Recheck after Google recrawls. |
| `/privacy` and `/en/privacy` | D. Unknown / no evidence | `URL is unknown to Google`; these pages were recently added and have no crawl timestamp. | No priority action; allow normal discovery. They are utility pages, not acquisition targets. |
| Remaining 10 EN/ZH sitemap URLs | A. Indexed | Google reports `Submitted and indexed`; HTTP, canonical, hreflang and crawl permissions are healthy. | No technical action. |

## Interpretation boundary

Sitemap inclusion, HTTP 200 and a correct canonical mean a URL is discoverable and indexable; they do not prove inclusion in Google. Only the URL Inspection API verdict was used for category A. The API currently reports no category B or C URLs.

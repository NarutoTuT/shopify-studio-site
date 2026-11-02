# WhaleLeap Studio Website

This is the official source repository for the WhaleLeap Studio website. WhaleLeap Studio is a Shopify Growth Engineering Studio for DTC brands selling globally, operated by 深圳市知策先见智能科技有限公司 in Shenzhen, China.

Official website: [https://whaleleap.studio](https://whaleleap.studio)

Currently accepting new Shopify development and optimization projects.

The site positions WhaleLeap as more than a Shopify website builder. It explains how the studio helps cross-border brands improve:

- Shopify development and store performance
- Conversion paths
- Growth analytics and tracking
- Store performance and maintainability

## What This Website Is For

This repository contains the public marketing website for WhaleLeap Studio.

Primary business goal:

```text
Visitor
-> Free Shopify Review
-> Growth Audit
-> Development Project
```

Primary audience:

- Overseas Chinese ecommerce founders
- Chinese brands expanding globally
- Shopify store owners running paid traffic
- Amazon-to-Shopify brands
- Shopify stores that need better engineering, conversion, or tracking

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- GSAP
- Framer Motion
- Lenis smooth scroll
- Vercel Analytics
- Resend email API for form submissions

## Key Pages

```text
/                                   Home
/diagnosis                          Free Shopify Review
/services/shopify-website-build     Shopify Development Services
/services/shopify-conversion-optimization
/services/shopify-ga4-gtm
/services/shopify-theme-customization
/pricing
/about
/learn/shopify-website-cost
/sitemap.xml
/robots.txt
```

## Current Positioning

Chinese:

```text
面向海外华人跨境品牌的 Shopify 增长工程工作室。
```

English:

```text
Shopify Growth Engineering Studio for DTC brands selling globally.
```

## Service System

The website is being organized around three core services:

1. Shopify Development Services
   - Shopify Theme Development
   - Liquid Development
   - Custom Sections
   - Performance Optimization
   - Technical SEO
   - Launch QA

2. Conversion Optimization
   - Homepage optimization
   - Product page structure
   - CTA and trust content
   - Mobile UX
   - Cart and checkout path

3. Growth Analytics & Tracking
   - GA4
   - GTM
   - Meta Pixel
   - Google Ads conversion tracking
   - Ecommerce event validation

## Local Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Google Search Console Reports

The repository includes a read-only Google Search Console exporter built with Node.js and the official Google APIs. It has no paid service dependency and does not add a dashboard.

### 1. Configure Google Cloud and OAuth

1. Open Google Cloud Console and create or select a project.
2. Enable **Google Search Console API** for that project.
3. Configure the OAuth consent screen. If the app remains in external testing mode, add the Google account that can access the WhaleLeap Search Console property as a test user.
4. Create an **OAuth client ID** with application type **Desktop app**.
5. Make sure the same Google account has access to the exact property in Search Console.

Create the private local environment file:

```bash
cp .env.example .env.local
```

Then complete these values in `.env.local`:

```bash
GSC_SITE_URL=https://whaleleap.studio/
GSC_CLIENT_ID=
GSC_CLIENT_SECRET=
GSC_REFRESH_TOKEN=
GSC_BRAND_TERMS=whaleleap,whale leap,whaleleap studio
GSC_MAX_ROWS=100000
```

`GSC_SITE_URL` must exactly match the accessible Search Console property. Use `https://whaleleap.studio/` for a URL-prefix property or `sc-domain:whaleleap.studio` for a Domain property.

Authorize once with the read-only Search Console scope:

```bash
npm run gsc:auth
```

The command opens Google consent in the browser and stores the returned refresh token in `.env.local`. The client secret, refresh token, `.env.local`, and generated reports are excluded from Git. Never paste their values into logs, issues, or commits.

### 2. Generate reports

```bash
npm run gsc:28d
npm run gsc:90d
npm run gsc:watch
```

Each command exports JSON and CSV under `reports/gsc/` for:

- Property summary: clicks, impressions, CTR, and average position
- Queries, including `branded` or `non-branded` classification
- Branded and non-branded query files
- Pages
- Countries
- Devices
- Submitted sitemaps, pending state, warnings, errors, submitted URLs, and timestamps

The latest successfully requested windows are also combined in:

```text
reports/gsc/latest-summary.json
```

That file is intentionally compact and self-describing for later AI-assisted SEO analysis. Dimension JSON files include their period, row count, and whether the configured row ceiling was reached.

`gsc:28d` and its `gsc:watch` alias also refresh:

```text
reports/gsc/first-impression-watch.json
```

The watch file keeps the property totals, real non-brand query rows, pages with impressions, the first observed query/page, and the current top query/page by impressions. When the API returns zero impressions, its query/page arrays remain empty and its first/top fields remain `null`. A successful 90-day export does not overwrite this 28-day observation file.

### Data behavior and limitations

- Reporting windows end on yesterday in Search Console's Pacific Time zone and request finalized web-search data.
- An empty property response exports `clicks: 0`, `impressions: 0`, `ctr: null`, and `averagePosition: null`; the exporter does not invent performance values.
- Query/page/dimension rows can be privacy-filtered and are ordered as Search Console's top rows. Their sums may differ from property-level totals.
- CTR is exported as a decimal ratio, not a formatted percentage.
- Branded segments are derived from `GSC_BRAND_TERMS`; review this list when the brand name or common misspellings change.
- The official Sitemaps endpoint supplies submission and processing health, not Search Analytics clicks or impressions grouped by sitemap. Google also deprecated `contents.indexed`, so the exporter does not claim an indexed URL count or sitemap index rate.
- For an external OAuth app whose publishing status remains **Testing**, Google expires refresh tokens after 7 days. This is acceptable for initial validation, but recurring unattended reports require completing the OAuth branding requirements and moving the app to **In production**. Do not publish until the consent-screen details and privacy-policy URL are accurate.

Run the local parser and report-helper tests with:

```bash
npm run gsc:test
```

Official references:

- [Search Console API authorization](https://developers.google.com/webmaster-tools/v1/how-tos/authorizing)
- [OAuth 2.0 for web server applications and offline access](https://developers.google.com/identity/protocols/oauth2/web-server)
- [Search Analytics query method](https://developers.google.com/webmaster-tools/v1/searchanalytics/query)
- [Sitemaps list method](https://developers.google.com/webmaster-tools/v1/sitemaps/list)
- [Sitemap resource fields](https://developers.google.com/webmaster-tools/v1/sitemaps)

## Environment Variables

The contact / diagnosis form uses Resend.

Required for real email delivery:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL=
CONTACT_EMAIL_TO=
```

If `CONTACT_EMAIL_TO` is not set, the API currently falls back to the configured default recipient in `app/api/contact/route.ts`.

### Analytics and contact events

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the GA4 web stream Measurement ID (`G-...`) in the Vercel Production environment and redeploy. This is different from the numeric GA4 Property ID. The GA4 script loads asynchronously only after analytics consent. The site sends `cta_click` with `location` when a review CTA is clicked, `contact_click` with `method` for clickable email, WeChat, or WhatsApp contacts, and `generate_lead` only after the contact API accepts a submission. The existing API uses `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_EMAIL_TO`; no Formspree endpoint is needed. Set `CONTACT_EMAIL_TO` deliberately before publishing changes to the receiving mailbox.

To mark leads as key events in GA4: **Admin → Data display → Events**, find `generate_lead`, and mark it as a key event. If it has not appeared yet, create the key event by name in **Admin → Data display → Key events**. Do not send a production test inquiry solely to populate this list. The public contact address is `hello@whaleleap.studio`; verify mailbox receipt separately.

Run `SITE_ORIGIN=http://localhost:3000 node scripts/check-internal-links.mjs` against a local production server to check sitemap and rendered internal links.

TODO (edge redirect): Production HTTP currently returns Vercel 308 before Next.js can handle it. If an exact HTTP 301 is required, confirm both apex and `www` DNS records are proxied by Cloudflare, then create a Cloudflare Single Redirect for HTTP apex and either-scheme `www` to `https://whaleleap.studio` plus the original path, status 301, **Preserve query string** enabled. Verify with `curl -I` for both hosts and a path with query parameters. The Next.js proxy already redirects `www` to the apex with 301 when that request reaches the app; it cannot override a Vercel redirect that happens first.

TODO (verification): After deployment, run the public service, pricing, and article URLs through Google's Rich Results Test. Local JSON parsing validates syntax and required fields, but does not establish Google eligibility.

## Form Flow

The main lead form lives on:

```text
/diagnosis
```

It submits to:

```text
POST /api/contact
```

The current submission system includes:

- Email or WeChat validation
- Honeypot field
- Minimum time check
- Basic IP rate limiting
- Resend email notification
- Optional confirmation email
- `gtag` lead event

## SEO Files

SEO routes are generated by:

```text
app/sitemap.ts
app/robots.ts
```

Structured data is handled through:

```text
components/page-structured-data.tsx
```

## Deployment

This site is deployed on Vercel.

Production domain:

```text
https://whaleleap.studio
```

The Vercel project is connected to the `main` branch. After pushing to `main`, verify the production site and key routes:

- /
- /diagnosis
- /services/shopify-website-build
- /sitemap.xml
- /robots.txt

If DNS was updated recently, allow time for propagation before checking the custom domain.

## Project Notes

- The main language strategy is Chinese-first with English support in key components.
- The primary CTA should point to `/diagnosis`.
- Service pages should support the broader Shopify Growth Engineering positioning.
- Avoid describing the studio only as a Shopify development vendor.
- Do not remove legacy service pages without checking SEO impact first.

## Recommended Workflow For A New Computer

```bash
git clone https://github.com/NarutoTuT/shopify-studio-site.git
cd shopify-studio-site
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

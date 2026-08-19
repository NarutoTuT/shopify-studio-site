# WhaleLeap Studio Operations

This document explains how to run, verify, deploy, and maintain the website.

## Local Setup

Clone the repository:

```bash
git clone https://github.com/NarutoTuT/shopify-studio-site.git
cd shopify-studio-site
```

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Fill the required values in `.env.local`.

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Required Environment Variables

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
CONTACT_EMAIL_TO
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

Notes:

- `RESEND_API_KEY` and `RESEND_FROM_EMAIL` are required for real form email delivery.
- `CONTACT_EMAIL_TO` controls where lead notifications are sent.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` enables Google Analytics when configured.
- Do not commit `.env.local` or real secrets.

## Pre-Push Checks

Before pushing production-facing changes:

```bash
npm run build
```

Optional:

```bash
npm run lint
```

Check the main local routes:

```text
/
/diagnosis
/services/shopify-website-build
/services/shopify-conversion-optimization
/services/shopify-ga4-gtm
/pricing
/about
/sitemap.xml
/robots.txt
```

## Deployment

The site is deployed on Vercel.

Production domain:

```text
https://whaleleap.studio
```

The Vercel project is connected to the `main` branch. Pushing to `main` should trigger a production deployment if Vercel is configured normally.

## Post-Deployment QA

After deployment, verify:

- Homepage loads.
- Favicon displays correctly.
- `/diagnosis` loads.
- The primary CTA points to `/diagnosis`.
- The Free Shopify Review form can submit.
- `/sitemap.xml` loads.
- `/robots.txt` loads.
- Desktop layout has no horizontal overflow.
- Mobile layout has no horizontal overflow.
- Browser console has no major runtime errors.

Key production URLs:

```text
https://whaleleap.studio
https://whaleleap.studio/diagnosis
https://whaleleap.studio/services/shopify-website-build
https://whaleleap.studio/sitemap.xml
https://whaleleap.studio/robots.txt
```

## DNS Notes

If the custom domain was recently changed, allow time for DNS propagation.

During propagation, Vercel may show the deployment as ready while the custom domain is not reachable from every network yet.

## Form QA

The lead form submits to:

```text
POST /api/contact
```

Current safeguards:

- Email or WeChat required.
- Email format validation.
- Honeypot field.
- Minimum time check.
- Basic IP rate limiting.
- Resend notification email.
- Optional confirmation email to the submitter.
- `gtag` lead event.

If form submission fails in production, check:

1. `RESEND_API_KEY`
2. `RESEND_FROM_EMAIL`
3. verified sender domain in Resend
4. Vercel environment variables
5. Vercel function logs for `/api/contact`

## Rollback

Use Vercel's previous successful deployment rollback if a production deployment breaks.

For code rollback, identify the last good commit:

```bash
git log --oneline
```

Then create a revert commit instead of rewriting public history:

```bash
git revert <commit>
git push origin main
```

## Content Rules

- Keep the main CTA focused on Free Shopify Review.
- Do not publish fake performance or conversion metrics.
- Use real case details only when proof is available.
- Keep the brand positioning focused on Shopify Growth Engineering.
- Do not remove SEO pages without checking search impact.

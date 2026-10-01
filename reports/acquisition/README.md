# WhaleLeap Acquisition System

The purpose of this system is to help WhaleLeap find its first qualified Shopify leads through real storefront evidence.

This system is not for:

- Spam
- Bulk email scraping
- Chasing lead volume
- Guessing revenue, traffic, conversion rate, ad spend, or private contact data
- Sending automated outreach

The operating path is:

REAL BRAND
-> REAL PROBLEM
-> REAL EVIDENCE
-> PERSONALIZED OUTREACH
-> FREE REVIEW
-> QUALIFIED LEAD

## Lead Workflow

Candidate
-> Shopify Verification
-> 5-10 min Audit
-> Lead Score
-> 18+?
-> No: Watch / Skip
-> Yes: Personalized Draft
-> Human Review
-> Manual Send

Human approval is mandatory before any outreach is sent.

## Lead Scoring

Each lead is scored from 0-30:

- Business Fit: 0-5
- Shopify Fit: 0-5
- Technical Problem Severity: 0-5
- Conversion Opportunity: 0-5
- Estimated Commercial Value: 0-5
- WhaleLeap Experience Fit: 0-5

Priority rules:

- 24-30: HOT
- 18-23: QUALIFIED
- 12-17: WATCH
- 0-11: SKIP

Do not add points because a field is missing. Unknown values should stay `null` or score `0` until evidence exists.

## Files

- `leads/candidates.json`: potential brands awaiting verification, audit, and scoring.
- `leads/qualified.json`: leads scored 18+ and approved for draft preparation.
- `leads/archived.json`: watch, skip, duplicate, no-fit, no-public-evidence, or paused leads.
- `audits/lead-audit-template.md`: 5-10 minute audit template focused on one money problem.
- `outreach/templates.md`: English and Chinese personalized outreach templates.
- `outreach/drafts/`: manually prepared drafts awaiting human review.
- `weekly/latest-summary.json`: weekly acquisition dashboard.

## Weekly Rhythm

Monday: Lead Research

Tuesday: GA4 Guide Distribution

Wednesday: Lead Research

Thursday: Community Contribution

Friday: Lead Research

Saturday: SilkGear Distribution

Sunday: GSC + Acquisition Review

## GSC Data

The weekly dashboard may be manually updated from existing GSC reports, including `reports/gsc/first-impression-watch.json` if that file exists.

Rules:

- Read only from GSC reports.
- Do not modify GSC source files.
- Keep `0` or `null` when the file does not exist or data is unavailable.
- Do not manufacture search data.

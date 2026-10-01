# WhaleLeap AI Recommendation Benchmark

Baseline date: 2026-10-01 (Asia/Shanghai). Version: 1.0 / wl-geo-v1.
Benchmark v1.0: **FROZEN**. Human Review: **APPROVED**. GEO Score: **27/50**. Authority Sprint: **NOT YET IMPLEMENTED**.

REAL EXPERTISE + PUBLIC EVIDENCE + INFORMATION GAIN + THIRD-PARTY TRUST + REAL CUSTOMER VALUE.

## Scope and Files

- `benchmark-queries.json`: 30 natural questions, six clusters of five, four scores with per-query reasons, and a frozen proposed TOP 15.
- `public-evidence-map.json`: 13 evidence items, 11 public source URLs, observation methods, safe citation wording and limitations.
- `geo-scorecard.json`: ten internal dimensions, baseline 27/50, evidence-linked reasons; not an official platform score.
- `recommendation-gaps.json`: ten frozen public-evidence hypotheses. Benchmark visibility is observed at 0/45, but causes remain unknown.
- `benchmark-results.json`: 45 frozen, human-reviewed structured results linked to archived raw answers.
- `competitors.json`: frozen provider recurrence observations from the 45 archived answers.
- `benchmark-v1-final.md`: final sign-off, metrics, frozen hypotheses and post-baseline boundary.
- `baselines/v1/`: immutable comparison snapshot for future before/after rounds.
- `manual-benchmark.md`: historical worksheet; raw archived answers and frozen JSON are the durable record.
- `initial-review.md`: Chinese approval brief for TOP 15, evidence, scorecard and gaps.
- `history/README.md`: archiving and monthly comparison protocol.

No site component, SEO setting, acquisition record, guide or service page is changed. No API credentials are required or read.

## Run Locally

```sh
npm run geo:benchmark
npm run geo:test
```

The first command validates the local baseline and regenerates only the blank manual worksheet. It performs no network requests, model calls, scheduling, result aggregation or content publication. Tests cover counts, selection constraints, scores, references, honest empty states and input preservation. Validation is an integrity check, not verification that a future human-submitted answer is authentic; a reviewer must open the saved original answer.

Benchmark v1.0 contains 15 completed answers each from ChatGPT, Perplexity and Doubao. Gemini remains historical `unavailable` after repeated timeout and was replaced by Doubao without relabelling results. Ordinary web searches used for evidence discovery are not platform recommendation tests. Public browser access to a source is not proof it was indexed, retrieved or recommended by any AI product.

## Query Scoring

Each dimension is 1-5; these are editorial judgements, not demand volumes or performance measures.

| Score | Commercial intent | WhaleLeap fit | Recommendation intent | Evidence readiness |
|---|---|---|---|---|
| 1 | General curiosity | Outside demonstrated scope | No supplier request | No direct supporting public evidence |
| 2 | Learning / DIY | Adjacent, excluded or unproven complex scope | Method/provider-type choice | Service statement or weak anonymous work only |
| 3 | Evaluating approach | Partial fit / material uncertainty | Asks type of team | Detailed scope plus limited project/method support |
| 4 | Comparing suppliers | Direct scope with verification limits | Implicit supplier search | Specific named case or detailed technical method, still first-party |
| 5 | Defined work to commission | Exact core customer/scope fit | Explicit who/recommend request | Full claim-specific evidence with independently verifiable support |

Fit is assessed against PUBLIC scope and examples, not private work. It is not a quality certification. Missing evidence never adds points. Figma claims are not Figma delivery proof; the tracking guide is not evidence of a successful client attribution repair; eBike screenshots are not a verified specialist track record.

Priority score = commercial_intent + whaleleap_fit + recommendation_intent (3-15). Evidence readiness is excluded from selection to prevent cherry-picking easy visibility.

TOP 15 is a **stratified priority set**, not simply the 15 largest totals:
- Five broad, five mid-specific, five highly specific.
- Two to three questions per cluster, at least five English questions.
- Prefer higher totals inside those coverage constraints; break ties by distinct needs and language coverage.
- Explicit selection tradeoffs are stored in JSON. Do not switch prompts after seeing favourable answers.
- Worksheet order is for coverage, not likelihood of appearing or market ranking.
- Approve the set before the first run. Later wording/language changes require a new benchmark_version.

## Evidence Standard

Record observed facts separately from hypotheses. Strength is relative to the exact claim; STRONG first-party evidence does not become independent endorsement.

1. SERVICE_CLAIM: it is safe to say the studio lists that service.
2. EXPERIENCE_EVIDENCE: named scope, implementation artifacts and method details can support narrower experience statements; self-authored evidence is labelled.
3. INDEPENDENT_THIRD_PARTY_EVIDENCE: another identifiable party independently supports the relationship or claim. Outbound client links and citations of Google/Shopify documentation do not establish this.

MISSING means not found in the documented review, not absent everywhere. The third-party search was limited to the queries in the evidence map. Unrelated WhaleLeap-named companies/trademarks are excluded.

The live SilkGear case and Tracking Guide were accessible in a real browser when the search reader failed. No crawler/indexing defect is inferred. No local acquisition reports, unpublished screenshots, private code, contracts or analytics are counted. Example funnel numbers, simulated live diagnostics, performance targets and self-labelled Verified badges do not count as results or certification.

## Manual Test Protocol

After human approval, conduct one monthly round manually; no scheduler was created. Use fresh isolated chats for each prompt, without this workspace's brand context. Keep platform, model/mode, search setting, locale and personalization configuration fixed and record visible settings. Use null for unavailable model details, not a guess. Prefer search-enabled consumer UI runs; API outputs, if introduced later with authorization, form a separate cohort and cannot stand in for the consumer products.

Send the exact question only. Do not include WhaleLeap, source URLs, role prompts, competitor hints or a preferred answer. Record the first complete response. A clarification-only answer is a completed answer with no recommendations, not an error. Do not answer clarifying questions inside the same benchmark cell; exploratory follow-ups go outside the fixed benchmark.

A service error, blocked login or unfinished response is a failed attempt, excluded from answer-rate denominators. Record failure separately in the run manifest; leave unattempted cells not_tested. Preserve retries as separate attempt IDs, never overwrite inconvenient answers.

Save the original text and actual citation links, then have a human code it. Redact private/account identifiers and never commit authentication/session material. Do not add unsupported sources that the model did not cite; separate subsequent human verification URLs.

## Result Data Contract

Top-level `platforms` is current coverage, `runs` is provenance, `results` is append-only actual answers. Empty arrays mean not observed. The following is a FIELD CONTRACT, not a result to insert:

```json
{
  "id": "<unique answer id>",
  "run_id": "<run manifest id>",
  "benchmark_id": "<query id>",
  "status": "completed",
  "tested_at": "<actual ISO-8601 timestamp with offset>",
  "platform": "<ChatGPT | Gemini | Perplexity>",
  "query": "<exact frozen question>",
  "whaleleap_mentioned": false,
  "whaleleap_recommended": false,
  "whaleleap_position": null,
  "recommended_companies": [],
  "cited_sources": [],
  "reason_whaleleap_appeared": null,
  "possible_reason_whaleleap_missing": null,
  "evidence_gap": [],
  "notes": null,
  "raw_response_file": "<history relative path to actual answer>"
}
```

Boolean false is allowed only after inspecting an actual answer. Do not append placeholders. Use null for unknown optional fields, never an empty string or fabricated date.

Run manifest: id, benchmark_version, platform, model, product_surface, search_mode, account_tier, region, ui_language, memory_state, personalization_state, started_at, finished_at, query_ids, attempts and settings_notes. Unknown visible settings are null. Each attempt records query_id, attempt number, status, actual time and error/response file as applicable.

Coding:
- mentioned: identifiable WhaleLeap Studio / whaleleap.studio in the answer body. A similarly named entity is not a match. Citation-only appearance should be noted separately; it does not make a body mention true.
- recommended: positively proposed as a suitable provider. A warning, neutral comparison, source citation or passing mention is not a recommendation.
- position: one-based appearance in that answer's identifiable provider sequence, never market rank. Use null if there is no comparable provider sequence, even if mentioned.
- recommended_companies item: company, website (verified or null), appearance_order, recommendation_excerpt. Capture all positively recommended suppliers, not only ones with citations.
- cited_sources item: url, title, source_type, cited_for, independently_supports_whaleleap. Last field can be null until human verification; external official documentation is not independent endorsement of WhaleLeap.
- reason_whaleleap_appeared: the answer's stated reason, with an excerpt, or null. Do not invent the model's internal reasoning.
- possible_reason_whaleleap_missing: a labelled hypothesis supported by observed evidence, or null. Omission alone cannot prove its cause.
- evidence_gap: references to verified gap IDs, distinguishing answer-observed gaps from analyst hypotheses.

## Competitor Observations

Populate only from saved actual answers. Count a company once per completed answer, normalized by verified entity/domain. Keep platform, run, query cluster and result IDs. Separate recommended_count from appearance_count. Repeated means recurrence across separate answers/rounds, not repeated wording in one answer.

For recurrent providers inspect the actual cited/public materials: cases, Partner profiles, reviews, technical artifacts, vertical evidence and third-party references. Log source type and exact scope. A directory listing, customer testimonial, company case and Reddit mention carry different evidential weight. Do not infer cause from Domain Authority or fabricate a competitive ranking.

## Comparison Rules

Compare matched query IDs within the same version/platform/model/search/settings cohort. Show completed/expected coverage (15 per platform), matched sample size and missing cells beside every rate. Do not pool products or conceal model/mode changes.

- Mention rate = answers with body mention / completed answers.
- Recommendation rate = answers with positive recommendation / completed answers.
- Query clusters mentioned = number of distinct A-F clusters with body mentions; expose cluster-level coverage.
- Third-party citations = distinct normalized external source URLs in the matched answers. Separately count the subset independently supporting WhaleLeap; vendor documentation is not endorsement.
- Recurrent competitors = per-answer appearances, with matched queries and separate recommendation counts.
- Gaps closed = gaps whose documented closure criterion has new verifiable public evidence. A model mention or a score increase alone does not close a gap.

No completed answers => rates and cluster/citation counts null, NOT zero. Empty response samples cannot show improvement or deterioration.
Do not call one change a trend. At least three comparable monthly rounds with two consecutive changes in the same direction may be labelled **possible trend**, with sample sizes and model volatility disclosed. This remains descriptive, not statistical significance or causal proof.

This initial command does not implement automatic comparisons. Follow history/README.md after real runs; do not manufacture previous rounds.

## Business Outcome Boundary

Future business metrics: AI referral sessions, AI referral leads, Free Review submissions, qualified inquiries and won projects. All are **unmeasured in this baseline**, not zero; no GA4 or acquisition integration was performed.

Future analysis may group observed source/referrer values for ChatGPT, Perplexity, Gemini, Copilot and Claude only where actually identifiable. Direct/unknown traffic stays unknown. Do not infer all traffic from a vendor domain is an AI recommendation. Google AI Overview / AI Mode are not separately attributed without a reliable signal. Do not equate a referral session with a qualified lead or win; use actual event/CRM definitions and deduplication.

## Approval and Stop Gate

Benchmark v1.0 is frozen at 27/50 with 45/45 human-reviewed results. Post-baseline Authority Evidence Audit discoveries are recorded separately and do not alter this baseline. Any future run must create a new version and compare against `baselines/v1/`; never overwrite v1.

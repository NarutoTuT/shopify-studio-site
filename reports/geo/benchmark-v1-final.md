# WhaleLeap GEO Benchmark v1.0 Final

Version: **1.0**  
Baseline Date: **2026-10-01**  
Benchmark v1.0: **FROZEN**  
Human Review: **APPROVED**  
Authority Sprint: **NOT YET IMPLEMENTED**

## Final Coverage

| Platform | Completed | Mentions | Mention Rate | Recommendations | Recommendation Rate |
|---|---:|---:|---:|---:|---:|
| ChatGPT | 15/15 | 0 | 0.0% | 0 | 0.0% |
| Perplexity | 15/15 | 0 | 0.0% | 0 | 0.0% |
| Doubao | 15/15 | 0 | 0.0% | 0 | 0.0% |
| **Overall** | **45/45** | **0** | **0.0%** | **0** | **0.0%** |

The rates describe this fixed sample only. They are not a market ranking, a probability forecast, or proof of why WhaleLeap was omitted.

## Human Review Result

All 45 archived answers were reviewed against their saved raw response and structured record.

- Query and platform assignment: approved 45/45.
- Raw response presence and stored SHA-256: approved 45/45.
- WhaleLeap mention and recommendation coding: approved 45/45.
- Recommended-provider extraction and non-provider exclusions: approved 45/45.
- Visible citation/source coding: approved 45/45 within the recorded capture boundary.
- Brand-name collision review: approved; `Triple Whale` and unrelated entities are not WhaleLeap mentions.
- Provider-recommendation intent: approved 45/45.
- Missing-reason handling: approved; no result asserts a causal reason. `possible_reason_whaleleap_missing` remains `null`.

Known capture boundary: ChatGPT and Perplexity preserve visible inline citations, but some collapsed citation groups were not expanded. Doubao displayed reference counts or labels without resolvable URLs in the captured response, so no URLs were invented. This limitation is preserved in the records and does not change mention or recommendation coding.

REVIEW_REQUIRED items: **0**.

## Cluster Visibility

| Cluster | Intent | Completed | Mention | Recommendation |
|---|---|---:|---:|---:|
| A | Shopify provider recommendation | 9 | 0/9 | 0/9 |
| B | Figma, Liquid and editable themes | 9 | 0/9 | 0/9 |
| C | CRO and conversion optimization | 6 | 0/6 | 0/6 |
| D | GA4, GTM and tracking | 8 | 0/8 | 0/8 |
| E | eBike and high-ticket technology | 6 | 0/6 | 0/6 |
| F | Chinese brands going global | 7 | 0/7 | 0/7 |

## Repeated Competitors

Cross-platform recurrence in separately archived answers:

| Provider | ChatGPT | Perplexity | Doubao | Total |
|---|---:|---:|---:|---:|
| WESWOO | 2 | 3 | 8 | 13 |
| EastDTC / EastDigi | 2 | 2 | 6 | 10 |
| Cheriscon | 2 | 1 | 5 | 8 |
| YIGO Tech | 1 | 2 | 5 | 8 |
| Swanky | 2 | 1 | 1 | 4 |

These counts measure answer appearances, not quality, market share, or legal-entity equivalence.

## Citation Patterns

- ChatGPT and Perplexity most often surfaced provider-owned pages and Shopify Partner Directory pages.
- Recorded source types include 53 provider-owned pages, 60 platform-directory pages and 11 platform-official-guidance pages.
- Only one independent review-platform source was recorded.
- Doubao exposed no resolvable citation URL in the archived main responses; `cited_sources` therefore remains empty for those 15 records.
- A citation is not independent verification of the provider claim it accompanies.

## Benchmark v1 Gap Hypotheses

The frozen Top 3 hypotheses are:

1. `THIRD_PARTY_MENTION`
2. `EVIDENCE`
3. `CASE_STUDY`

They are public-evidence hypotheses, not confirmed causal explanations for model omission. The remaining frozen categories are `ENTITY`, `CONTENT`, `VERTICAL_AUTHORITY`, `REVIEWS`, `TECHNICAL_EXPERTISE`, `ORIGINAL_RESEARCH` and `DISTRIBUTION`.

## Frozen GEO Scorecard

**27 / 50**

The score is frozen as the Benchmark v1.0 baseline. Completing the benchmark and later discovering project evidence do not retroactively change it.

## Post-Baseline Evidence Discoveries

Recorded for future Authority Sprint planning, excluded from Benchmark v1.0 and the 27/50 score:

- LUOKAVRION public third-party attribution discovered.
- Terrawulf Level 4 engineering evidence confirmed.
- SilkGear design-to-live evidence strengthened.

These are **Authority Sprint Input**, not Benchmark v1 Baseline evidence. Authority Sprint implementation has not started.

## Freeze Rule

The immutable comparison copy is stored under `reports/geo/baselines/v1/`. Future benchmark rounds must write a new version and compare against that snapshot; they must not overwrite v1.

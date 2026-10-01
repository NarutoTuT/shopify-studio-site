# WhaleLeap Case Study Evidence Standard

- Version: v1
- Pilot projects: SilkGear, Terrawulf
- Classification: POST-BASELINE authority investment
- Frozen reference: GEO Benchmark v1.0, 27/50, 0/45 mentions, 0/45 recommendations
- Review date: 2026-10-01
- Status: COMPLETE after Terrawulf public-module release verification; SilkGear NO_CHANGE, Terrawulf UPDATED

## Purpose

Each published claim should lead from business problem to a documented implementation and an inspectable result. An evidence unit records the claim, implementation, evidence, business relevance, confidence and publication rights separately. A live storefront proves current output; it does not alone prove who implemented every part or what the original handoff contained.

Use the strongest project-specific evidence. SilkGear leads with design, commerce decisions and current storefront comparisons. Terrawulf leads with OS 2.0 theme engineering and high-ticket product architecture. Do not force either project into the other's technical story.

## Publication rule

1. Name the customer question or merchant need.
2. State the decision and implementation only as far as records support them.
3. Pair an authorized design/code/QA artifact with the current live result.
4. Label current storefront content separately from the original delivery.
5. State limitations for each project. Do not infer revenue, conversion lift, tracking quality or customer satisfaction from appearance.

Evidence grades: `STRONG` = direct artifact plus matching output; `MEDIUM` = corroborated but incomplete chain; `WEAK` = indirect support only; `MISSING` = checked and absent; `UNKNOWN` = not checked or inaccessible. `NOT_VERIFIED` identifies a specific untested assertion, especially a current Theme Editor state. Unknown is never silently converted to missing.

## QA evidence unit

`CHECK | RESULT | EVIDENCE | STATUS | DATE | SCOPE`

Record the exact inspected build, viewport and page. Historical scoped checks cannot be presented as current full-theme checks. A pass in one browser does not imply cross-browser coverage.

## Public safety

Publish only minimum-necessary, authorized excerpts. Remove staff, emails, orders, customers, store IDs, billing, private apps, tokens, credentials, contracts, signatures and financial terms from screenshots or snippets. Preserve unredacted originals privately. Never publish full theme source or use a screenshot crop that changes the meaning of a result.

## Pilot decision

| Project | Page decision | Reason |
| --- | --- | --- |
| SilkGear | NO_CHANGE | Current design-to-live comparisons are publishable; section schema, Liquid, Admin and delivery QA are not independently verified in accessible records. Adding technical claims would weaken trust. |
| Terrawulf | UPDATED | The public Engineering Evidence module uses a clearly labeled, derived editor configuration summary, short source excerpts and the live M7 PDP. No raw Admin screenshot or private data was published. Save/reorder/add/delete remain NOT_VERIFIED. |

This is a post-baseline authority investment. The frozen GEO Benchmark v1.0 (27/50; 0/45) is unchanged. Follow-up verification is recorded in `theme-code-editor-verification.md`.

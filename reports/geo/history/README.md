# Benchmark History

Initial state: no platform runs. This directory contains instructions only.

After human approval, use a unique folder such as YYYY-MM-DD-round-01 (actual date, not a fabricated run). Inside keep:
- run-manifest.json per platform or clearly identified platform manifests;
- answers/<platform>/<query-id>-attempt-01.md: exact prompt, complete response, visible citation URLs and actual timestamp;
- benchmark-queries.json: frozen version used;
- benchmark-results.json: immutable reviewed snapshot of actual results and failures;
- public-evidence-map.json, geo-scorecard.json and recommendation-gaps.json: contemporaneous baselines;
- comparison.md: human analysis against the previous comparable snapshot.

Do not save answers in generated manual-benchmark.md; that file is overwritten by npm run geo:benchmark. Never rewrite previous snapshots to make a trend cleaner. Give corrections their own file/date and retain the original record.

A new model, search mode, prompt version or materially different personalization setting starts a new comparison cohort. Compare shared completed query IDs and disclose coverage. Failed attempts and not_tested cells do not enter answer denominators; keep their counts visible. An answer asking for clarification is completed and stays in the sample.

Report per platform: mention/recommendation rates, mentioned-cluster count, distinct third-party citation URLs, independently supporting WhaleLeap citation URLs, recurring competitors and evidence-backed closed gaps. Read the exact definitions in ../README.md.

Use possible trend only after at least three comparable rounds with two consecutive same-direction changes; give raw counts, not just percentages. Do not imply statistical or causal certainty. A public-evidence score change requires a cited reason; lack of model mention never automatically lowers a score.

Human review must verify that every result has its real source response, recommendations are not neutral mentions, sources were actually cited and same-name companies are not conflated. Strip private/account data, tokens and unapproved client data before committing. No automatic retention cleanup or outbound publication is included.

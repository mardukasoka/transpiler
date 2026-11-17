# Cross-project reference registry (review draft)

Last checked: **2026-11-17 UTC**. Scope: repository identity verified through authenticated GitHub repository search. Public site availability **not independently verified**: public HTTP requests were unavailable in this run. Do not equate repository existence with a deployed application.

| Domain | Repository / reference | Verification status | Public page |
| --- | --- | --- | --- |
| Astronomy / Universe Atlas | https://github.com/mardukasoka/universe | GitHub repository found 2026-11-17 | Unknown; check deployment separately |
| Webb FITS reprojection | https://github.com/mardukasoka/universe/pull/4 | Previously reported draft PR; live PR status not rechecked | Not a public application |
| Universal Transpiler | https://github.com/mardukasoka/transpiler | GitHub repository found 2026-11-17 | Unknown |
| Historical computing / SIMH | https://github.com/mardukasoka/simh | GitHub repository found 2026-11-17 | Unknown |
| Matter / nuclides / exotic matter | Pending repository and live URL inventory | Unverified | Unknown |
| AI Evolution Matrix | Pending repository and isolated-page URL inventory | Unverified | Unknown; preserve standalone boundary |
| Games (chess, checkers, backgammon) | Pending repository and deployment inventory | Unverified | Unknown |
| Engineering / CAD / aerospace | Pending repository and deployment inventory | Unverified | Unknown |
| Historical computing / AGC | Pending repository and deployment inventory | Unverified | Unknown |

## Dependency, not duplication

**SIMH → Universal Transpiler:** SIMH is a historical computer **emulation and execution-validation dependency**, not a parser, source-language converter, or merged component of Transpiler. Maintain distinct upstream/fork repositories and licenses. Potential integration: translated program → build/run under an appropriate emulated architecture → compare output with native or reference execution. This is a proposed interface; no integration or compatibility test is claimed.

## Registry conventions

For each deployed page, record: canonical URL, owning repository, scope/domain, intended isolation (standalone vs atlas navigation), status (live / broken / unverified), last-verified UTC timestamp, test method (HTTP status and rendered-content check), source/provenance URL, and optional research update date. A repository's existence is insufficient evidence that its site is live.

Keep standalone AI Matrix pages isolated: an index may describe them without silently inserting reciprocal navigation or linking them into Lattice/Inform7.

## Next verification steps

1. Collect deployed URLs from repo configuration, GitHub Pages settings or project docs.
2. Perform public HTTP and rendered-content checks; only then mark pages live or broken.
3. Verify recent research citations at primary observatory/project sources before updating astronomy or matter claims.
4. Add a generated navigation inventory only after explicit page URLs and isolation flags are confirmed.

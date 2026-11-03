# Indigo Transpiler — governed agent improvement, v0

## Status
This document is a proposed, not yet executed, benchmark and agent integration. Existing Universal-transpiler README advertises partial source-to-source translations, grammar/ontology and theorem-prover conversions. It does not establish semantic equivalence or a complete file-format translator.

## Architecture
- Deterministic translator and parser are the reference execution surface.
- Agent proposes a bounded change for one source→target pair; never directly edits master.
- Offline fixtures produce baseline and candidate results using identical inputs.
- Evaluator records parser success, syntax validity, compile/run outcome where supported, semantic output equivalence, round-trip loss (when meaningful), performance and security.
- Trackinizer-style trace JSONL records model, prompt hash, source SHA, conversion pair, tool calls, errors, elapsed time, test receipt and candidate commit.
- Overmind is a candidate for observability, dataset and optimization loops, not an assumed installed dependency. Its self-hosted platform requires OpenRouter, Modal, inference, AWS/S3 and HF credentials per its README, so do not deploy or invoke it under the $0 ceiling. Prefer offline evaluation and inspect the MIT SDK in isolation.
- Beam can later learn patterns from approved patches; no autonomous fine-tuning or weight updates.
- All generated changes remain on feature branches pending human review.

## First benchmark: Fortran → Julia
Create small fixtures for scalar arithmetic, functions, loops, arrays and 1-based indexing, numerical precision and intrinsic calls. Each fixture contains source, expected output, numeric tolerance and a target-language version. Test parsing and generated Julia syntax separately from semantic equivalence; preserve original evidence. Report unsupported constructs rather than guessing.
Before enabling any LLM, produce a reproducible offline baseline with at least one supported fixture and one unsupported fixture.

## Next: 3D conversion
Use format-specific parsers rather than assuming source-code transpilation applies to 3D files. Candidate formats: glTF/GLB, OBJ, STL, PLY, USD, Blender, photogrammetry outputs, Gaussian splats and NeRF representations. Each conversion declares whether geometry, topology, materials, animation, coordinate systems, units, metadata and uncertainty can survive. No claim of lossless conversions without round-trip evidence. Prefer glTF/GLB as a distribution interchange where suitable; proprietary native formats require separate adapters and license review.

## Release gates
1. No unapproved network access, paid endpoints, purchases, merges or deployments.
2. Use read-only scans and pinned dependencies; isolate generated code and external files.
3. Require measured improvement over baseline without regressions on protected fixtures.
4. Every improvement becomes a reviewable diff with logs and test receipts.
5. Fail closed on unsupported formats or unknown semantic equivalence.

## Milestones
M1: Inventory actual parser/generator entrypoints and existing tests; classify implemented vs documented language pairs.
M2: Add offline fixtures and runner for Fortran → Julia; publish real baseline metrics.
M3: Implement first failing construct behind a feature branch, rerun same suite.
M4: Compare optional Overmind SDK integration against simple JSONL tracing; use only if its overhead and cost fit.
M5: Expand into format conversion adapters and a machine-readable capability matrix.

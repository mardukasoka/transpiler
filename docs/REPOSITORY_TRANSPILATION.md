# Repository-scale transpilation

Repository transpilation is a graph transformation, not a loop over source files.

## Pipeline

1. **Inventory** — files, languages, manifests, build systems, entry points, assets, tests, generated/vendor code.
2. **Dependency graph** — internal modules, external packages, runtime APIs, build-time tools and asset references.
3. **Classification** — translate, preserve, substitute, regenerate, vendor, or mark unsupported.
4. **Target plan** — map source runtime/build/dependency assumptions to target equivalents before editing.
5. **Topological transformation** — transform bounded dependency slices in dependency order.
6. **Assembly** — generate target manifests, entry points, asset layout and compatibility shims.
7. **Validation** — syntax/build/tests plus declared behavioural and domain invariants.
8. **Report** — provenance and per-file disposition, substitutions, unsupported constructs and residual risk.

## Safety

Source repositories are read-only. Generated repositories go to a separate workspace/branch. Vendor/generated/binary/secrets directories are excluded by default. No repository-scale request may silently overwrite its source.

## Completion

A repository is not reported as translated merely because files were emitted. Status is one of: planned, partial, buildable, test-passing, invariant-validated. Unsupported components remain explicit.

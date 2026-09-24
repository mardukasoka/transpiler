# OpenSpace -> Mobile Web Benchmark

Goal: demonstrate project-level transpilation from a bounded OpenSpace scene/component to a lightweight browser representation.

## Preserve

- coordinate/reference-frame semantics
- object identity
- physical scale
- time behaviour
- source/provenance
- declared scientific data values

## Web target

Prefer lightweight HTML/JavaScript with Three.js/WebGL or WebGPU where appropriate. Use typed arrays/JSON, glTF, textures or tiles only where they improve the target.

## Acceptance

1. Select one bounded OpenSpace scene/component.
2. Record reference behaviour and invariants.
3. Inspect source/build/runtime dependencies.
4. Generate a transformation plan.
5. Translate the minimum required code/assets.
6. Run deterministic equivalence/invariant checks.
7. Test on a mobile browser and record startup weight, frame rate and unsupported features.

This benchmark must not require Lattice AI Evolution; Lattice agents may later invoke it through MCP.

# Universal Transpiler target

The original target remains the governing target: **all computer languages**.

The repository-scale MCP work extends that goal; it does not narrow it to a fixed language list or a particular domain.

## Canonical architecture

```
Source language / repository
          ↓
      Front end
          ↓
 Universal semantic pseudocode / IR
          ↓
 normalization + explicit semantic annotations
          ↓
      Back end
          ↓
Target language / repository
```

Pseudocode is the human-readable universal intermediate representation. A machine-readable IR may accompany it, but must not replace the inspectable pseudocode layer.

This changes scaling from an N×N collection of translators toward N front ends + N back ends. Language-specific semantics that cannot be represented losslessly are retained as explicit annotations/capabilities rather than silently discarded.

## Universality

"All computer languages" includes general-purpose languages, historical languages, assembly/VM languages, hardware description languages, theorem provers and logic languages, query/data languages, shader/GPU languages, build/configuration languages, grammar/metaprogramming systems, visual/dataflow languages where serializable, esolangs where semantics are defined, and future languages through adapters.

Universality is an architectural target, not a claim that every language is already implemented.

## Translation contract

Every transformation reports:
- source semantics successfully represented in universal pseudocode;
- source semantics retained as annotations;
- unsupported or ambiguous constructs;
- target capabilities required;
- lowering decisions and substitutions;
- validation evidence.

The system must prefer an explicit partial translation over a false equivalence.

## Repository scale

A heterogeneous repository is lifted into a repository IR containing its file graph, build graph, runtime graph, assets, entry points, tests, and per-file pseudocode/IR. Repository lowering then generates the target repository and validates it.

## Long-term invariant

**Any computer language → universal pseudocode/IR → any computer language.**

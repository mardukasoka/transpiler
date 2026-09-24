# Universal Transpiler MCP Service v0.1

The MCP layer exposes Universal-transpiler as domain-neutral transformation infrastructure. It does not replace the existing translators.

## Tools

- `transpiler.inspect` — identify source language, parser/translator support, project assets and likely target constraints.
- `transpiler.plan` — produce a transformation plan without modifying source.
- `transpiler.transpile` — invoke an existing language adapter or a bounded project adapter.
- `transpiler.validate` — compare generated output against declared invariants/tests.
- `transpiler.report` — return provenance, unsupported constructs, warnings and validation results.

## Contract

Every request declares source, target, adapter, invariants and limits. Every response distinguishes generated artifacts from validation evidence.

MCP clients such as Sagent may request work, but the service remains usable independently of Lattice AI Evolution.

## Project transpilation

Project-level adapters may translate more than syntax: build/runtime assumptions, assets, rendering APIs, schemas and deployment targets. They must declare what is preserved, approximated, substituted or unsupported.

OpenSpace -> mobile web is the first large project benchmark. It must begin with a bounded scene/component rather than an attempted whole-engine rewrite.

# External language implementation induction

Universal Transpiler (UT) should reuse mature open-source language implementations rather than independently rediscover every grammar and runtime.

## Induction rule

An external compiler/transpiler/parser is an **upstream reference or adapter**, not automatically vendored code. Before induction record:

1. language, dialects and standards;
2. accepted source forms and emitted representation/target;
3. parser/AST/IR interfaces available for reuse;
4. runtime dependencies and semantic assumptions;
5. test/conformance suites;
6. license and compatibility with UT;
7. maintenance/activity and upstream provenance;
8. mapping into Universal Pseudocode IR;
9. round-trip/differential validation strategy.

Prefer an adapter or clean-room semantic mapping when copying code would create licensing, coupling, maintenance, or architecture problems.

## Priority gap: COBOL

GnuCOBOL is a strong semantic oracle/reference because it implements substantial COBOL standards and translates COBOL to C. opensourceCOBOL4J is independently useful because it translates COBOL to Java. These two lowering paths provide differential evidence for COBOL semantics and test cases.

Target UT path:

`COBOL -> COBOL frontend -> Universal Pseudocode IR -> arbitrary UT backend`

Use generated C/Java only as validation/oracle paths; do not make C or Java the universal IR.

## Expansion programme

Continuously inventory languages absent or weak in UT, search for mature open-source parsers/compilers/transpilers, evaluate them under the induction rule, and add the best evidence/adapters to the capability matrix.

No external project is authoritative merely because it compiles. UT's semantic contract and deterministic validation remain authoritative for UT promotion.

# Language adapter registry

UT frontends are registered adapters that lift a source language into Universal Pseudocode IR. Backends lower that IR into targets.

The first registered frontends are intentionally small Fortran and COBOL smoke adapters. They establish the interface and must be replaced or supplemented by conformant adapters.

External projects are inducted behind this boundary. Their ASTs, generated code and conformance suites may be used, but external implementation details must not leak into the universal IR contract.

A translation may report only:
- `translated`: all encountered source constructs were represented and lowered;
- `partial`: explicit unresolved source or target constructs remain;
- `adapter-required`: no frontend exists.

No adapter may claim semantic success merely because it emitted syntactically plausible target text.

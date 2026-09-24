# Universal pseudocode smoke benchmark

This benchmark establishes the first shared UT path:

- Fortran -> Universal Pseudocode IR -> JavaScript
- COBOL -> Universal Pseudocode IR -> JavaScript

It is deliberately small. Passing it proves shared architecture, not broad language conformance. Unknown constructs must remain explicit and must never be silently dropped.

Next expansion should replace regex-only lifting with adapters to mature parsers/compilers while preserving the same IR contract.

# Improvement Log — Indigo Universal Transpiler

## Iteration 1 — 2026-11-03 — Fortran → Julia baseline

**Branch:** `feature/fortran-julia-baseline`
**Files:** `fortran_julia/fortran_to_julia.py`, `fortran_julia/test_fortran_julia.py`, `fortran_julia/tests/*.f90|*.expected.jl`

### Approach
Line-based regex parser, Python stdlib only (`python fortran_julia/fortran_to_julia.py in.f90 out.jl`).
`fparser` 0.2.5 installed fine with pip in the sandbox but was NOT used, so the tool stays stdlib-only; it is the planned next parser.

### Supported subset
PROGRAM/END PROGRAM (becomes a top-level script), IMPLICIT NONE (emitted as a comment), INTEGER/REAL/DOUBLE PRECISION/LOGICAL/CHARACTER declarations
(including `::`, initial values, PARAMETER and array dims), SUBROUTINE/FUNCTION (including `result(...)`), CONTAINS, DO loops (with step), DO WHILE,
IF/THEN/ELSE IF/ELSE/END IF, one-line logical IF, PRINT * / WRITE(*,*) (become println), CALL, EXIT/CYCLE/RETURN/STOP,
the operators + - * / ** and .and./.or./.not./.eq./etc., `d` exponents, `&` continuation lines, and `!` comments (become `#`).

### Baseline results
- `pytest fortran_julia/test_fortran_julia.py`: **5 passed, 0 failed** (3 snapshot programs, 1 CLI test, 1 expression test)
- These are snapshot tests only. Julia is not installed in the sandbox, so the generated `.jl` files have **not** been run.
- Existing repo `make test` (SWI-Prolog 9.0.4): exit code 0, but it reports "No tests to run". `tests.pl` `main` raised an error inside
  `javascript_transpiler:ws_separated_statements` while it translated `input.txt` (`var a = 1;`). Real passing tests in the existing suite: **0**.

### Known limitations
- Output is not semantically checked (Julia is not installed).
- Inside a `contains` block, program statements are emitted **before** the function definitions. Julia does not hoist definitions, so a
  top-level call such as `area(...)` in `subs.expected.jl` would fail at runtime. Fix: put the program body in a `main()` function or move the definitions first.
- Function names can clash with Julia Base names (for example `show`).
- Not supported: modules/USE, derived types, formatted I/O (FORMAT, non-`*` WRITE units), READ, GOTO/labels, SELECT CASE, array slicing/1-based
  intrinsics mapping, fixed-form (.f/.f77) source, COMMON, intent-based copy semantics.
- REAL is mapped to Float32, which follows Fortran but is not idiomatic Julia.

### Proposed next improvement
1. Wrap the program body in `function main() ... end; main()` and emit the contained procedures first.
2. Switch the front end to the fparser AST (Fortran 2003/2008), keeping the line parser as a fallback.
3. Install Julia in CI and add execution-equivalence tests: compile with gfortran, run both, and diff stdout.

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

## Iteration 2 — 2026-11-03 — Milestone 1: diagnostics, ordering, equivalence harness, CI

### JS Engine Audit
I ran the legacy engine (`javascript/js_transpiler/transpiler.js` + `fortran_parser.js`) in Node 22 with `fortran_julia/js_audit/run_legacy_js.js`. It loads the same scripts as `test_parser.html` and calls `parse_lang("fortran","julia",src)`.
- (a) Full `scalar_test.f90`: **parse error** — `Parse error on line 13: ... end if  print *, result ... Expecting ',', '::', '=', '(', 'function', 'identifier', got '*'`.
  With the `print` line removed: `Parse error on line 12 ... Expecting 'EOF', ... got 'end'`. The grammar has no `program ... end program` rule.
  With only the declaration and body: the AST is built, but codegen throws `Can't generate code for: ["initialize_empty_vars","real","x,y,result"] in julia`.
  With assignments and IFs only (no declaration): it emits `x = 3.0` / `if (x>2.0)` / `    result = result+x` / `end`.
- (b) No valid Julia program is produced for the benchmark. (c) Assignment and IF/THEN are handled. PROGRAM, `print *`, and REAL declarations → Julia are not. (d) Errors are listed in (a).
- Conclusion: the JS engine cannot cover the benchmark, so this work does not duplicate it. The Python translator is the path forward.

### Changes
- `UnsupportedConstructError(line_number, column, construct_name, message)`. The `# TODO(untranslated)` comment fallback and the unmatched-END and unterminated-block cases now raise this error. The CLI prints `file:line:col: error: ...` to stderr, exits 1, and writes no output file.
- Ordering fix: output is now imports, then function/subroutine definitions, then `function main() ... end`, then `main()` at EOF. Snapshot `.expected.jl` files were regenerated.
- New `fortran_julia/tests/scalar_test.f90`, plus the translator-generated `tests/fixtures/scalar_test.jl` and `scalar_test.expected.jl`.
- `fortran_julia/tests/test_execution_equivalence.py` runs gfortran and julia on freshly generated Julia and compares floats within 1e-6. It is skipped when either binary is missing, and fails on any non-zero exit.
- New tests: unsupported construct raises the error (GOTO → line 3, col 3), CLI exits non-zero on SELECT CASE, ordering assertion.
- `.github/workflows/fortran_julia_ci.yml` runs on push/PR to `feature/fortran-julia-baseline` only (Python 3.11, Julia 1.10, gfortran via apt).

### Results
- Local run (sandbox, Python 3.11): `pytest fortran_julia` gave **10 passed, 1 skipped**. The skip is `test_scalar_equivalence`: gfortran and julia are not installed locally.
- Runtime equivalence has **not** been executed locally and needs CI.
- Constructs that raise UnsupportedConstructError: any statement that is not recognized (e.g. GOTO, SELECT CASE, READ, USE, FORMAT, DATA). None of the benchmark constructs raise it.

### Acceptance status: **PENDING CI**
- **CI blocker:** GitHub rejected the push of `.github/workflows/fortran_julia_ci.yml` because the GitHub App token lacks the `workflows` permission. The workflow is stored at `ci/fortran_julia_ci.yml` instead. The repo owner must move it to `.github/workflows/` (via the GitHub web UI or a local push) before CI will run.

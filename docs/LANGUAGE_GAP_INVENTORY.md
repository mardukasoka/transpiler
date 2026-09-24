# Significant language gap inventory

This inventory is a living induction queue for the Universal Transpiler (UT). It complements the confirmed legacy parser list in LANGUAGE_COVERAGE.md.

Priority is based on ecosystem use, distinct semantics, historical importance, and value to repository-scale translation. Presence here means "audit/induct", not "unsupported in every respect".

| Language / family | Current UT dedicated legacy parser | Candidate upstream / oracle class | Induction priority |
|---|---:|---|---:|
| COBOL | no confirmed dedicated browser parser | GnuCOBOL; opensourceCOBOL4J | P0 active |
| Fortran | yes | GNU Fortran / LLVM Flang as validation oracles | P0 active |
| Bash / POSIX shell / zsh | no | ShellCheck parser; shell-to-shell AST tooling | P1 |
| PowerShell | no | PowerShell parser / AST | P1 |
| Objective-C / Objective-C++ | no | Clang AST | P1 |
| Dart | no | Dart analyzer/compiler; dart2js as lowering oracle | P1 |
| Elixir | no | Elixir AST / compiler | P1 |
| OCaml | no | OCaml compiler-libs | P1 |
| F# | no | FSharp.Compiler.Service; Fable as JS lowering oracle | P1 |
| Groovy | no | Groovy compiler AST | P1 |
| Nim | no | Nim compiler AST / generated-C oracle | P1 |
| Zig | no | Zig compiler / AST tooling | P1 |
| Solidity | no | solc AST/IR | P1 |
| Verilog / SystemVerilog | no (VHDL exists) | Surelog/UHDM; Verible; Icarus Verilog as oracle | P1 |
| Assembly families | no | LLVM MC / Capstone + architecture-specific assemblers | P1 |
| WebAssembly text (WAT) | no | wabt / Binaryen | P1 |
| Nix | no | Nix parser/evaluator | P2 |
| HCL / Terraform | no | HashiCorp HCL parser | P2 |
| V / Vlang | no | V compiler / C lowering oracle | P2 |
| Crystal | no | Crystal compiler | P2 |
| D | no | DMD/LDC frontend | P2 |
| Raku | no | Rakudo compiler | P2 |
| Smalltalk | no | Pharo/Squeak parser/compiler | P2 |
| Scheme | no dedicated parser (Racket/Common Lisp exist) | Racket/Scheme implementations | P2 |
| Elm | no | Elm compiler | P2 |
| Gleam | no | Gleam compiler / Erlang+JS backends | P2 |
| Idris 2 | no | Idris 2 compiler | P2 |
| Agda | no | Agda compiler | P2 |
| Mojo | no | official compiler interfaces when reusable | P2 |
| Chapel | no | Chapel compiler | P2 |
| Eiffel | no | EiffelStudio / Gobo ecosystem | P3 |
| Forth | no | gforth | P3 |
| APL / J / BQN | no | language implementations as semantic oracles | P3 |
| Tcl | no | Tcl parser/runtime | P3 |
| Awk | no | awk implementations / parsers | P3 |
| BASIC families | VBA/VB.NET only | FreeBASIC and dialect-specific parsers | P3 |
| Pascal / Object Pascal | Delphi parser exists | Free Pascal as oracle | P3 |
| PL/I | no | GCC/Open Mainframe ecosystem candidates | P3 |
| Ada/SPARK | Ada exists | GNAT/libadalang to strengthen coverage | P3 strengthen |
| CUDA / OpenCL kernels | GLSL exists, not these | Clang CUDA/OpenCL frontends | P3 |
| HLSL / WGSL | no dedicated parser | DXC / Tint / naga | P3 |
| SQL dialects | MySQL parser only | PostgreSQL/SQLite/T-SQL/PLSQL parsers | P3 expand |
| esolangs (Brainfuck, Befunge, etc.) | no | ELVM and individual interpreters | P4 universality |

## Programme order

1. Finish COBOL + Fortran end-to-end adapters and validation.
2. Build the capability matrix from actual tests, not filenames.
3. Induct high-use P1 languages, preferring mature AST/compiler interfaces.
4. Expand P2/P3 families to exercise semantic diversity.
5. Maintain P4 as a universality/conformance frontier.

Candidate upstream projects are references pending license/API/maintenance audit. No code is vendored merely by appearing in this inventory.

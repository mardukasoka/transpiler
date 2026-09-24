# Language coverage audit

The legacy browser translator and the repository-scale MCP layer have different coverage.

## Confirmed legacy parser inputs

The browser harness loads parsers for Java, TeX, Kotlin, MiniZinc, TPTP, Rust, Scala, C++, Ada, VHDL, Go, JavaScript, Python, Core Logic, Delphi, Fortran, Standard ML, Thrift, Protocol Buffers, MySQL, GLSL, R, pseudocode, Swift, Octave, TypeScript, SMT-LIB, Wolfram, Erlang, mathematical notation, Maxima, English, Julia, Perl, Prolog, Mercury, Coq, Lean, PDDL, Clojure, Common Lisp, Emacs Lisp, Racket, CLIPS, KIF, Jison, OMeta, Racc, Ohm, Marpa, Nearley, PEG.js, Picat, regex, ANTLR, TXL, Haskell, Futhark, ATS, Haxe, PHP, Hack, Lua, VBA, Visual Basic .NET, Ruby, C and C#.

A parser being present does **not** imply complete bidirectional semantic translation. Coverage must be measured per source/target pair and language feature.

## Important gaps / expansion candidates

Repository detection should additionally recognize common modern ecosystems even where the legacy translator has no confirmed parser: Elixir, Dart, Objective-C/Objective-C++, Zig, Solidity, Verilog/SystemVerilog, shell languages, PowerShell, assembly families, CUDA/OpenCL source variants, WebAssembly text, Nix, Terraform/HCL, YAML/JSON/TOML configuration, HTML/CSS and domain-specific shader/build/configuration languages.

These should not automatically be treated as programming-language translation. Many are better handled as preserve/regenerate/substitute adapters.

## Policy

Maintain a capability matrix with levels: detect, parse, translate-from, generate-to, dependency-extract, build-adapt, and validated. Never label a language "supported" without stating the capability level.

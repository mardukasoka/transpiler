// Audit harness: loads the legacy browser-based JS transpiler (javascript/js_transpiler)
// into a Node vm context exactly as test_parser.html loads it via <script> tags,
// then calls parse_lang("fortran", "julia", src). Usage: node run_legacy_js.js file.f90
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = path.resolve(__dirname, "../../javascript/js_transpiler");
const html = fs.readFileSync(path.join(dir, "test_parser.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const alerts = [];
const quiet = { log() {}, error() {}, warn() {} };
const ctx = { console: quiet, alert: m => alerts.push(String(m)), document: {}, window: {} };
vm.createContext(ctx);
for (const s of scripts) {
  try { vm.runInContext(fs.readFileSync(path.join(dir, s), "utf8"), ctx, { filename: s }); }
  catch (e) { console.error(`[load] ${s}: ${String(e).split("\n")[0]}`); }
}
ctx.console = quiet; // transpiler.js logs every codegen step; keep stdout readable
const src = fs.readFileSync(process.argv[2], "utf8");
ctx.__src = src;
try {
  // fortran_parser.parse alone first (AST), then full translation
  const ast = vm.runInContext("JSON.stringify(fortran_parser.parse(__src))", ctx);
  console.log("=== AST ===\n" + ast.slice(0, 2000));
  const out = vm.runInContext('parse_lang("fortran","julia",__src)', ctx);
  console.log("=== JULIA OUTPUT ===\n" + out);
} catch (e) {
  console.log("=== ERROR ===\n" + (e && e.stack ? e.stack : String(e)));
  process.exitCode = 1;
}
if (alerts.length) console.log("=== ALERTS ===\n" + alerts.join("\n"));

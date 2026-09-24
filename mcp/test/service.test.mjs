import test from "node:test";
import assert from "node:assert/strict";
import { canonicalRequest, execute } from "../service.mjs";
const base={source:{kind:"snippet",location:"inline",language:"fortran",content:"program hi\nprint *, \"HELLO\"\nend program"},target:{runtime:"node",language:"javascript"},invariants:[]};
test("canonical request derives mode from MCP operation",()=>assert.equal(canonicalRequest("transpile",base).mode,"transpile"));
test("canonical request rejects unknown nested fields",()=>assert.throws(()=>canonicalRequest("transpile",{...base,source:{...base.source,surprise:true}}),e=>e.code==="UT_SCHEMA_VALIDATION"));
test("Fortran crosses service boundary to JavaScript",()=>{const r=execute("transpile",base);assert.equal(r.status,"translated");assert.match(r.output.code,/console\.log/);});
test("unsupported constructs remain partial",()=>{const r=execute("transpile",{...base,source:{...base.source,content:"program hi\ndo i=1,10\nprint *, i\nend do\nend program"}});assert.equal(r.status,"partial");assert.ok(r.evidence.source_unresolved>0);});

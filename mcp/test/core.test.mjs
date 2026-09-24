import test from "node:test";
import assert from "node:assert/strict";
import { TOOL_NAMES, planRequest, validateEnvelope } from "../core.mjs";

const req = {
  source: { kind: "project", location: "OpenSpace" },
  target: { runtime: "browser", language: "javascript", format: "threejs" },
  adapter: "openspace-web",
  invariants: ["coordinate-frame", "object-identity", "scale", "time", "provenance"]
};

test("exposes five domain-neutral MCP operations", () => {
  assert.deepEqual(TOOL_NAMES, ["transpiler.inspect","transpiler.plan","transpiler.transpile","transpiler.validate","transpiler.report"]);
});

test("project plan is bounded and validation-first", () => {
  assert.deepEqual(planRequest(req).steps, ["inventory","identify-runtime-boundaries","map-assets-and-apis","translate-bounded-slice","validate-invariants"]);
});

test("validation does not pass unverified invariants", () => {
  const out = validateEnvelope(req, { invariants: { "coordinate-frame": true } });
  assert.equal(out.passed, false);
  assert.equal(out.checks.filter(x => x.status === "unverified").length, 4);
});

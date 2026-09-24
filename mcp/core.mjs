import crypto from "node:crypto";

export const TOOL_NAMES = [
  "transpiler.inspect",
  "transpiler.plan",
  "transpiler.transpile",
  "transpiler.validate",
  "transpiler.report"
];

export function hash(value) {
  return crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

export function inspectRequest(req) {
  return {
    schema_version: "0.1",
    request_hash: hash(req),
    source: req.source,
    target: req.target,
    adapter: req.adapter ?? null,
    invariants: req.invariants ?? [],
    status: "inspected"
  };
}

export function planRequest(req) {
  const inspection = inspectRequest(req);
  return {
    ...inspection,
    status: "planned",
    steps: req.source.kind === "project"
      ? ["inventory", "identify-runtime-boundaries", "map-assets-and-apis", "translate-bounded-slice", "validate-invariants"]
      : ["parse-source", "translate", "validate-output"]
  };
}

export function validateEnvelope(req, result) {
  const unsupported = result?.unsupported ?? [];
  const checks = (req.invariants ?? []).map(name => ({
    invariant: name,
    status: result?.invariants?.[name] === true ? "pass" : "unverified"
  }));
  return {
    schema_version: "0.1",
    request_hash: hash(req),
    checks,
    unsupported,
    passed: checks.length > 0 && checks.every(x => x.status === "pass") && unsupported.length === 0
  };
}

export function report(req, result = {}) {
  return {
    schema_version: "0.1",
    request_hash: hash(req),
    adapter: req.adapter ?? null,
    generated_artifacts: result.artifacts ?? [],
    unsupported: result.unsupported ?? [],
    warnings: result.warnings ?? [],
    validation: result.validation ?? null
  };
}

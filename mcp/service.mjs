import { readFileSync } from "node:fs";
import { inspectRequest, planRequest, validateEnvelope, report } from "./core.mjs";
import { translate } from "./adapters.mjs";
import { createValidator, assertValid } from "./schema-validation.mjs";

const schema = JSON.parse(readFileSync(new URL("../schemas/transpile-request.schema.json", import.meta.url), "utf8"));
const validateRequest = createValidator(schema);

export function canonicalRequest(mode, req) {
  const envelope = { schema_version:"0.1", source:req.source, target:req.target, mode, invariants:req.invariants ?? [] };
  if(req.adapter !== undefined) envelope.adapter=req.adapter;
  if(req.limits !== undefined) envelope.limits=req.limits;
  return assertValid(validateRequest,envelope,"transpile request");
}
export function execute(mode, req, result) {
  const canonical=canonicalRequest(mode,req);
  if(mode==="inspect") return inspectRequest(canonical);
  if(mode==="plan") return planRequest(canonical);
  if(mode==="validate") return validateEnvelope(canonical,result);
  if(mode==="report") return report(canonical,result);
  if(mode!=="transpile") throw new Error("unsupported mode");
  if(canonical.source.kind!=="snippet") return {schema_version:"0.1",status:"adapter-required",message:"File/project materialization is not yet wired to the MCP boundary.",plan:planRequest(canonical)};
  if(!canonical.source.language||!canonical.target.language) return {schema_version:"0.1",status:"adapter-required",message:"source.language and target.language are required for translation."};
  return {schema_version:"0.1",...translate({sourceLanguage:canonical.source.language,targetLanguage:canonical.target.language,source:canonical.source.content ?? canonical.source.location})};
}

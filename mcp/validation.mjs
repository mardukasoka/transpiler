import { hash } from "./core.mjs";

export function validateGeneratedWorkspace(analysis, generated) {
  const sourcePaths=new Set(analysis.plan.files.map(f=>f.path));
  const targetPaths=generated.artifacts.map(a=>a.path);
  const duplicatePaths=targetPaths.filter((p,i)=>targetPaths.indexOf(p)!==i);
  const pending=generated.artifacts.filter(a=>a.action==="pending-translation").map(a=>a.path);
  const proposed=analysis.substitutions.filter(s=>s.status==="proposed");
  const checks=[
    {name:"separate-target-manifest",pass:targetPaths.includes("transpiler.manifest.json")},
    {name:"no-duplicate-target-paths",pass:duplicatePaths.length===0},
    {name:"source-plan-bound",pass:Boolean(generated.manifest.source_plan_hash)},
    {name:"no-source-overwrite-instructions",pass:generated.artifacts.every(a=>!a.write_to_source)}
  ];
  return {
    schema_version:"0.1",
    plan_hash:hash(analysis.plan),
    checks,
    pending_translations:pending,
    proposed_substitutions:proposed.length,
    source_files:sourcePaths.size,
    passed:checks.every(c=>c.pass) && pending.length===0 && proposed.length===0
  };
}

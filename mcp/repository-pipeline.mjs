import { buildRepositoryPlan } from "./repository.mjs";
import { dependencyGraph } from "./dependencies.mjs";
import { proposeSubstitutions } from "./substitutions.mjs";

export function analyseRepository({source,target,targetLanguage,files,invariants=[]}) {
  const plan=buildRepositoryPlan({source,target,targetLanguage,paths:files.map(f=>f.path),invariants});
  plan.edges=dependencyGraph(files);
  return {
    plan,
    substitutions:proposeSubstitutions(files),
    completion:"planned",
    authority:"proposal-only",
    notes:["Substitutions require validation before generated target code may be promoted."]
  };
}

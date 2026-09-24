import path from "node:path";
import { hash } from "./core.mjs";

export function safeRelative(p) {
  const raw=String(p);
  if (/^[a-zA-Z]:[\\/]/.test(raw) || /^[/\\]{2}/.test(raw) || path.isAbsolute(raw)) throw new Error("unsafe target path");
  const n=path.posix.normalize(raw.replaceAll("\\","/"));
  if (!n || n==="." || n===".." || n.startsWith("../") || n.startsWith("/")) throw new Error("unsafe target path");
  return n;
}

export function generateTargetWorkspace(analysis, files) {
  const byPath=new Map(files.map(f=>[f.path,f]));
  const artifacts=[];
  for (const item of analysis.plan.files) {
    if (item.disposition==="vendor" || item.disposition==="unsupported") continue;
    const src=byPath.get(item.path);
    const targetPath=safeRelative(item.path);
    if (item.disposition==="preserve") {
      artifacts.push({path:targetPath,action:"preserve",content:src?.content ?? null,source:item.path});
    } else if (item.disposition==="translate") {
      artifacts.push({path:targetPath,action:"pending-translation",content:null,source:item.path,adapter:item.adapter});
    }
  }
  const manifest={
    schema_version:"0.1",
    source:analysis.plan.source,
    target:analysis.plan.target,
    completion:"partial",
    generated_at:null,
    source_plan_hash:hash(analysis.plan),
    substitutions:analysis.substitutions,
    artifacts:artifacts.map(({content,...a})=>a)
  };
  artifacts.push({path:"transpiler.manifest.json",action:"regenerate",content:JSON.stringify(manifest,null,2)+"\n",source:null});
  return {completion:"partial",artifacts,manifest};
}

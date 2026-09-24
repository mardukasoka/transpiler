import { liftToPseudocode } from "./pseudocode.mjs";
import { lowerPseudocode } from "./lowering.mjs";

const registry=new Map();

export function registerAdapter(adapter){
  if(!adapter?.id || !adapter?.sourceLanguage || typeof adapter.lift!=="function") throw new Error("invalid adapter");
  registry.set(adapter.sourceLanguage.toLowerCase(),adapter);
}

export function getAdapter(language){ return registry.get(language.toLowerCase()) ?? null; }
export function listAdapters(){ return [...registry.values()].map(({lift,...a})=>a); }

registerAdapter({id:"builtin-fortran-v0",sourceLanguage:"fortran",kind:"builtin-smoke",lift:s=>liftToPseudocode("fortran",s)});
registerAdapter({id:"builtin-cobol-v0",sourceLanguage:"cobol",kind:"builtin-smoke",lift:s=>liftToPseudocode("cobol",s)});

export function translate({sourceLanguage,targetLanguage,source}){
 const adapter=getAdapter(sourceLanguage);
 if(!adapter) return {status:"adapter-required",sourceLanguage,targetLanguage};
 const ir=adapter.lift(source);
 const lowered=lowerPseudocode(ir,targetLanguage);
 return {
   status:(ir.unresolved.length||lowered.unresolved)?"partial":"translated",
   adapter:adapter.id,ir,output:lowered,
   evidence:{source_unresolved:ir.unresolved.length,target_unresolved:lowered.unresolved}
 };
}

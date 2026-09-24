import test from "node:test";
import assert from "node:assert/strict";
import { analyseRepository } from "../repository-pipeline.mjs";
import { generateTargetWorkspace, safeRelative } from "../generator.mjs";
import { validateGeneratedWorkspace } from "../validation.mjs";

const files=[
 {path:"src/main.cpp",language:"c++",content:'#include "engine.hpp"\nint main(){return 0;}'},
 {path:"assets/readme.txt",language:null,content:"asset"}
];

test("generates a separate target manifest without pretending pending code is translated",()=>{
 const a=analyseRepository({source:"demo",target:"browser",targetLanguage:"javascript",files,invariants:["behaviour"]});
 const g=generateTargetWorkspace(a,files);
 assert.equal(g.artifacts.find(x=>x.path==="src/main.cpp").action,"pending-translation");
 assert.equal(g.artifacts.find(x=>x.path==="assets/readme.txt").action,"preserve");
 assert.ok(g.artifacts.some(x=>x.path==="transpiler.manifest.json"));
 const v=validateGeneratedWorkspace(a,g);
 assert.equal(v.passed,false);
 assert.deepEqual(v.pending_translations,["src/main.cpp"]);
});

test("rejects path traversal in generated target",()=>{
 const bad=[{path:"../escape.txt",language:null,content:"x"}];
 const a=analyseRepository({source:"demo",target:"browser",targetLanguage:"javascript",files:bad});
 assert.throws(()=>generateTargetWorkspace(a,bad),/unsafe target path/);
});

test("rejects Windows and UNC absolute target paths",()=>{
  for (const p of ["C:\\escape.txt","C:/escape.txt","\\\\server\\share\\escape.txt","//server/share/escape.txt"]) {
    assert.throws(()=>safeRelative(p),/unsafe target path/);
  }
});

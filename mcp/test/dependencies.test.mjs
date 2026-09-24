import test from "node:test";
import assert from "node:assert/strict";
import { dependencyGraph } from "../dependencies.mjs";
import { analyseRepository } from "../repository-pipeline.mjs";

test("extracts cross-file dependency evidence",()=>{
  const edges=dependencyGraph([{path:"src/main.cpp",language:"c++",content:'#include "engine.hpp"\n#include <GLFW/glfw3.h>'}]);
  assert.ok(edges.some(e=>e.to==="engine.hpp"));
  assert.ok(edges.some(e=>e.to==="GLFW/glfw3.h"));
});

test("runtime substitutions remain proposals",()=>{
  const out=analyseRepository({source:"demo",target:"browser",targetLanguage:"javascript",files:[
    {path:"src/main.cpp",content:'#include <GLFW/glfw3.h>\nOpenGL renderer;',language:"c++"},
    {path:"CMakeLists.txt",content:"project(demo)",language:null}
  ],invariants:["behaviour"]});
  assert.equal(out.completion,"planned");
  assert.equal(out.authority,"proposal-only");
  assert.ok(out.substitutions.some(x=>x.rule==="opengl-web"));
  assert.ok(out.plan.edges.some(x=>x.to==="GLFW/glfw3.h"));
});

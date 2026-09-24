import test from "node:test";
import assert from "node:assert/strict";
import { buildRepositoryPlan, classifyPath } from "../repository.mjs";

test("repository planner separates source, assets and excluded dependencies", () => {
  const p = buildRepositoryPlan({
    source:"example", target:"browser", targetLanguage:"javascript",
    paths:["src/main.cpp","src/math.cpp","assets/earth.jpg","package.json","node_modules/x/index.js"],
    invariants:["behaviour"]
  });
  assert.equal(p.files.find(x=>x.path==="src/main.cpp").disposition,"translate");
  assert.equal(p.files.find(x=>x.path==="assets/earth.jpg").disposition,"preserve");
  assert.equal(p.files.find(x=>x.path==="node_modules/x/index.js").disposition,"vendor");
  assert.deepEqual(p.entrypoints,["src/main.cpp"]);
});

test("source repository is never an output disposition", () => {
  assert.notEqual(classifyPath("src/a.cpp","javascript").disposition,"regenerate");
});

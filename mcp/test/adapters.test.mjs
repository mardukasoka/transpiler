import test from "node:test";
import assert from "node:assert/strict";
import { translate,listAdapters } from "../adapters.mjs";

test("registry exposes first universal frontends",()=>{
 const langs=listAdapters().map(x=>x.sourceLanguage);
 assert.ok(langs.includes("fortran")); assert.ok(langs.includes("cobol"));
});

test("translation status is evidence-driven",()=>{
 const ok=translate({sourceLanguage:"cobol",targetLanguage:"javascript",source:'DISPLAY "OK".'});
 assert.equal(ok.status,"translated");
 const partial=translate({sourceLanguage:"cobol",targetLanguage:"javascript",source:"PERFORM UNKNOWN."});
 assert.equal(partial.status,"partial");
});

test("missing language requests an adapter",()=>{
 assert.equal(translate({sourceLanguage:"brainfuck",targetLanguage:"javascript",source:"+"}).status,"adapter-required");
});

import test from "node:test";
import assert from "node:assert/strict";
import { createValidator, assertValid } from "../schema-validation.mjs";

const schema={type:"object",properties:{mode:{enum:["inspect","transpile"]}},required:["mode"],additionalProperties:false};
test("runtime schema accepts valid envelopes",()=>assert.equal(createValidator(schema)({mode:"inspect"}).valid,true));
test("runtime schema rejects unknown fields",()=>{
 const v=createValidator(schema);
 const r=v({mode:"inspect",surprise:true});
 assert.equal(r.valid,false);
 assert.throws(()=>assertValid(v,{mode:"bad"}),e=>e.code==="UT_SCHEMA_VALIDATION");
});

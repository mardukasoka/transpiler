import test from "node:test";
import assert from "node:assert/strict";
import { liftToPseudocode } from "../pseudocode.mjs";
import { lowerPseudocode } from "../lowering.mjs";

test("Fortran lifts through universal pseudocode and lowers to JS",()=>{
 const ir=liftToPseudocode("fortran",'program hello\nprint *, "Hello"\nend program');
 assert.match(ir.units[0].pseudocode,/OUTPUT "Hello"/);
 const js=lowerPseudocode(ir,"javascript");
 assert.match(js.content,/console\.log\("Hello"\)/);
 assert.equal(js.unresolved,0);
});

test("COBOL lifts through same IR and lowers to JS",()=>{
 const ir=liftToPseudocode("cobol",'IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\nPROCEDURE DIVISION.\nDISPLAY "Hello".');
 assert.match(ir.units[0].pseudocode,/OUTPUT "Hello"/);
 const js=lowerPseudocode(ir,"javascript");
 assert.match(js.content,/console\.log\("Hello"\)/);
 assert.equal(js.unresolved,0);
});

test("unknown constructs remain explicit",()=>{
 const ir=liftToPseudocode("cobol","PERFORM MYSTERY.");
 assert.equal(ir.unresolved.length,1);
 const js=lowerPseudocode(ir,"javascript");
 assert.equal(js.unresolved,1);
});

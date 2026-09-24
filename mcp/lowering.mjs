export function lowerPseudocode(ir,targetLanguage){
 const target=targetLanguage.toLowerCase();
 const lines=ir.units.flatMap(u=>u.pseudocode.split("\n"));
 if(target==="javascript"){
   const body=[];
   for(const line of lines){
     let m;
     if(/^PROGRAM\b/.test(line)||/^END PROGRAM$/.test(line)||/^SECTION\b/.test(line)) continue;
     if((m=line.match(/^OUTPUT\s+(.+)$/))) body.push(`console.log(${m[1]});`);
     else if((m=line.match(/^SET\s+([\w-]+)\s*=\s*(.+)$/))) body.push(`let ${m[1].replaceAll("-","_")} = ${m[2]};`);
     else body.push(`// UNLOWERED: ${line}`);
   }
   return {language:"javascript",content:body.join("\n")+"\n",unresolved:body.filter(x=>x.startsWith("// UNLOWERED")).length};
 }
 if(target==="pseudocode") return {language:"pseudocode",content:lines.join("\n")+"\n",unresolved:ir.unresolved.length};
 throw new Error(`No pseudocode backend registered for ${targetLanguage}`);
}

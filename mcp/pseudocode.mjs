function ann(feature,status="represented",detail=null){return {feature,status,detail};}

export function liftFortran(source) {
  const units=[]; const unresolved=[];
  const lines=source.split(/\r?\n/);
  let current={kind:"program",name:null,pseudocode:"",semantic_annotations:[]};
  const out=[];
  for (const raw of lines) {
    const s=raw.trim(); if(!s || /^!/.test(s)) continue;
    let m;
    if((m=s.match(/^program\s+(\w+)/i))){current.name=m[1];out.push(`PROGRAM ${m[1]}`);}
    else if(/^end\s*(program)?/i.test(s)){out.push("END PROGRAM");}
    else if((m=s.match(/^print\s*\*\s*,\s*(.+)$/i))){out.push(`OUTPUT ${m[1]}`);}
    else if((m=s.match(/^([a-z]\w*)\s*=\s*(.+)$/i))){out.push(`SET ${m[1]} = ${m[2]}`);}
    else {out.push(`SOURCE[Fortran]: ${s}`);unresolved.push(s);current.semantic_annotations.push(ann(s,"annotated","Requires fuller Fortran frontend"));}
  }
  current.pseudocode=out.join("\n"); units.push(current);
  return {version:"0.1",source_language:"fortran",source_version:null,units,capabilities:["program","assignment","output"],unresolved};
}

export function liftCobol(source) {
  const out=[]; const unresolved=[]; const annotations=[];
  const lines=source.split(/\r?\n/);
  let name=null;
  for(const raw of lines){
    const s=raw.trim(); if(!s || /^\*/.test(s)) continue;
    let m;
    if((m=s.match(/^PROGRAM-ID\.\s*([\w-]+)/i))){name=m[1];out.push(`PROGRAM ${name}`);}
    else if((m=s.match(/^DISPLAY\s+(.+?)\.?$/i))){out.push(`OUTPUT ${m[1]}`);}
    else if((m=s.match(/^MOVE\s+(.+?)\s+TO\s+([\w-]+)\.?$/i))){out.push(`SET ${m[2]} = ${m[1]}`);}
    else if(/^(IDENTIFICATION|ENVIRONMENT|DATA|PROCEDURE) DIVISION\.?$/i.test(s)){out.push(`SECTION ${s.replace(/\.$/,"")}`);}
    else {out.push(`SOURCE[COBOL]: ${s}`);unresolved.push(s);annotations.push(ann(s,"annotated","Requires full COBOL dialect frontend"));}
  }
  return {version:"0.1",source_language:"cobol",source_version:null,units:[{kind:"program",name,pseudocode:out.join("\n"),semantic_annotations:annotations}],capabilities:["program","move","display","divisions"],unresolved};
}

export function liftToPseudocode(language,source){
 const l=language.toLowerCase();
 if(l==="fortran") return liftFortran(source);
 if(l==="cobol") return liftCobol(source);
 throw new Error(`No pseudocode frontend registered for ${language}`);
}

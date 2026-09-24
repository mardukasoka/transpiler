const RX = {
  javascript: [/\b(?:import|export)\s+(?:[^"'\n]+?\s+from\s+)?["']([^"']+)["']/g,/\brequire\(\s*["']([^"']+)["']\s*\)/g],
  typescript: [/\b(?:import|export)\s+(?:[^"'\n]+?\s+from\s+)?["']([^"']+)["']/g],
  python: [/^\s*import\s+([\w.]+)/gm,/^\s*from\s+([\w.]+)\s+import\s+/gm],
  "c++": [/#include\s*[<"]([^>"]+)[>"]/g],
  c: [/#include\s*[<"]([^>"]+)[>"]/g],
  rust: [/\buse\s+([\w:]+)/g,/\bextern\s+crate\s+(\w+)/g],
  go: [/\bimport\s+(?:\w+\s+)?["']([^"']+)["']/g]
};

export function extractDependencies(path, language, content) {
  const edges=[];
  for (const rx of RX[language] ?? []) {
    rx.lastIndex=0;
    for (const m of content.matchAll(rx)) edges.push({from:path,to:m[1],kind:"imports"});
  }
  return [...new Map(edges.map(e=>[JSON.stringify(e),e])).values()];
}

export function dependencyGraph(files) {
  return files.flatMap(f=>extractDependencies(f.path,f.language,f.content ?? ""));
}

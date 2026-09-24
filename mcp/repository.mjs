const EXT_LANG = new Map([
  [".js","javascript"],[".mjs","javascript"],[".ts","typescript"],[".py","python"],
  [".c","c"],[".h","c"],[".cc","c++"],[".cpp","c++"],[".hpp","c++"],
  [".rs","rust"],[".go","go"],[".java","java"],[".kt","kotlin"],[".jl","julia"],
  [".lua","lua"],[".php","php"],[".rb","ruby"],[".cs","c#"],[".fs","f#"],
  [".glsl","glsl"],[".vert","glsl"],[".frag","glsl"],[".swift","swift"],[".scala","scala"],[".hs","haskell"],[".erl","erlang"],[".ex","elixir"],[".exs","elixir"],[".dart","dart"],[".r","r"],[".m","objective-c"],[".mm","objective-c++"],[".zig","zig"],[".sol","solidity"],[".v","verilog"],[".vhd","vhdl"],[".vhdl","vhdl"],[".sql","sql"],[".pl","perl"],[".pm","perl"],[".lisp","common lisp"],[".clj","clojure"],[".rkt","racket"],[".ml","standard ml"],[".fsx","f#"]
]);

export const DEFAULT_EXCLUDES = [
  ".git/","node_modules/","vendor/","dist/","build/","target/",".env","secrets/"
];

export function languageFor(path) {
  const i = path.lastIndexOf(".");
  return i < 0 ? null : EXT_LANG.get(path.slice(i).toLowerCase()) ?? null;
}

export function classifyPath(path, targetLanguage = null) {
  if (DEFAULT_EXCLUDES.some(x => path === x.replace(/\/$/,"") || path.startsWith(x))) {
    return { path, language: languageFor(path), disposition: "vendor", adapter: null, reason: "excluded-by-default" };
  }
  const language = languageFor(path);
  if (language && targetLanguage && language !== targetLanguage) {
    return { path, language, disposition: "translate", adapter: "language", reason: "source-language" };
  }
  return { path, language, disposition: "preserve", adapter: null, reason: language ? "already-compatible-or-unspecified-target" : "non-source-asset" };
}

export function buildRepositoryPlan({ source, target, paths = [], targetLanguage = null, invariants = [] }) {
  const files = paths.map(p => classifyPath(p, targetLanguage));
  const manifests = paths.filter(p => /(^|\/)(package\.json|pyproject\.toml|requirements\.txt|Cargo\.toml|go\.mod|CMakeLists\.txt|Makefile)$/.test(p));
  const entrypoints = paths.filter(p => /(^|\/)(index|main|app|server)\.(js|mjs|ts|py|c|cc|cpp|rs|go|java|jl)$/.test(p));
  return { schema_version:"0.1", source, target, files, edges:[], entrypoints, manifests, assets:files.filter(f=>!f.language).map(f=>f.path), invariants };
}

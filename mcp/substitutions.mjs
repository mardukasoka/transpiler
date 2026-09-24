export const SUBSTITUTIONS = [
  { id:"opengl-web", match:/\b(OpenGL|GLFW|GLEW|glad|glm)\b/i, target:"Three.js/WebGL or WebGPU", kind:"runtime-api", confidence:"candidate" },
  { id:"filesystem-web", match:/\b(std::filesystem|fstream|ifstream|ofstream|fs\.)\b/i, target:"browser asset fetch / File System Access adapter", kind:"runtime-api", confidence:"candidate" },
  { id:"cmake-web", match:/\b(CMake|CMakeLists\.txt)\b/i, target:"web build manifest", kind:"builds", confidence:"candidate" },
  { id:"native-window-web", match:/\b(GLFW|SDL|Qt|windowing)\b/i, target:"browser canvas / DOM event adapter", kind:"runtime-api", confidence:"candidate" }
];

export function proposeSubstitutions(files) {
  const proposals=[];
  for (const f of files) for (const s of SUBSTITUTIONS) {
    if (s.match.test(f.content ?? "") || s.match.test(f.path)) proposals.push({
      source:f.path, rule:s.id, target:s.target, kind:s.kind, confidence:s.confidence,
      status:"proposed"
    });
  }
  return proposals;
}

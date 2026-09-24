import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { inspectRequest, planRequest, validateEnvelope, report } from "./core.mjs";
import { translate } from "./adapters.mjs";

const server = new McpServer({ name: "universal-transpiler", version: "0.1.0" });

const requestShape = {
  source: z.object({ kind: z.enum(["snippet","file","project"]), location: z.string(), language: z.string().nullable().optional(), content: z.string().optional() }).strict(),
  target: z.object({ runtime: z.string(), language: z.string().nullable().optional(), format: z.string().nullable().optional() }).strict(),
  adapter: z.string().nullable().optional(),
  invariants: z.array(z.string()).default([])
};

server.tool("transpiler.inspect", requestShape, async req => ({
  content: [{ type: "text", text: JSON.stringify(inspectRequest(req), null, 2) }]
}));

server.tool("transpiler.plan", requestShape, async req => ({
  content: [{ type: "text", text: JSON.stringify(planRequest(req), null, 2) }]
}));

server.tool("transpiler.validate", {
  ...requestShape,
  result: z.object({
    invariants: z.record(z.boolean()).optional(),
    unsupported: z.array(z.string()).optional()
  })
}, async ({ result, ...req }) => ({
  content: [{ type: "text", text: JSON.stringify(validateEnvelope(req, result), null, 2) }]
}));

server.tool("transpiler.report", {
  ...requestShape,
  result: z.object({
    artifacts: z.array(z.string()).optional(),
    unsupported: z.array(z.string()).optional(),
    warnings: z.array(z.string()).optional()
  }).optional()
}, async ({ result, ...req }) => ({
  content: [{ type: "text", text: JSON.stringify(report(req, result), null, 2) }]
}));

server.tool("transpiler.transpile", requestShape, async req => {
  let result;
  if (req.source.kind !== "snippet") {
    result = { schema_version: "0.1", status: "adapter-required", message: "File/project materialization is not yet wired to the MCP boundary.", plan: planRequest(req) };
  } else if (!req.source.language || !req.target.language) {
    result = { schema_version: "0.1", status: "adapter-required", message: "source.language and target.language are required for translation." };
  } else {
    result = { schema_version: "0.1", ...translate({ sourceLanguage: req.source.language, targetLanguage: req.target.language, source: req.source.content ?? req.source.location }) };
  }
  return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
});

await server.connect(new StdioServerTransport());

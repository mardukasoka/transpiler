import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { inspectRequest, planRequest, validateEnvelope, report } from "./core.mjs";

const server = new McpServer({ name: "universal-transpiler", version: "0.1.0" });

const requestShape = {
  source: z.object({ kind: z.enum(["snippet","file","project"]), location: z.string(), language: z.string().nullable().optional() }),
  target: z.object({ runtime: z.string(), language: z.string().nullable().optional(), format: z.string().nullable().optional() }),
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

server.tool("transpiler.transpile", requestShape, async req => ({
  content: [{
    type: "text",
    text: JSON.stringify({
      schema_version: "0.1",
      status: "adapter-required",
      message: "The MCP boundary is live. Translation is intentionally delegated to an existing Universal-transpiler adapter; no parser is reimplemented here.",
      plan: planRequest(req)
    }, null, 2)
  }]
}));

await server.connect(new StdioServerTransport());

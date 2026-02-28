# Obsidian CLI MCP Server

A [Model Context Protocol](https://modelcontextprotocol.io) server that wraps the [Obsidian CLI](https://help.obsidian.md/cli), allowing AI assistants like Claude to execute Obsidian CLI commands.

## Prerequisites

- Node.js 18+
- [Obsidian CLI](https://github.com/Obsidian-TTRPG-Community/obsidian-cli) installed and available in your PATH

## Setup

Add to your MCP config:

```json
{
  "mcpServers": {
    "obsidian": {
      "command": "npx",
      "args": ["obsidian-cli-mcp"]
    }
  }
}
```

## Available Tools

**`obsidian_cli`** — Execute any Obsidian CLI command. Pass the command string without the `obsidian` prefix.

## Available Resources

- **`obsidian://help`** — Full CLI help text
- **`obsidian://help/{command}`** — Help for a specific command

## Development

```bash
npm install
npm run build
npm test
```
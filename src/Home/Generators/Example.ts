export default `$ foob help mcp-connector
Usage: foob generate [GLOBAL_OPTIONS] mcp-connector [COMMAND_INPUTS]

Command inputs:

 -p, --program-path PROGRAM_PATH       Required
 -m, --mcp-server-name MCP_SERVER_NAME
 -o OUTPUT_DIRECTORY,
     --output-directory

$ foob g mcp-connector --program-path capybaras-mcp-server --mcp-server-name capybaras-mcp-server
generating files...
executing: chmod u+x 'capybaras-mcp-server'
Wrote 2 files to .
$ ls -a
.  ..  capybaras-mcp-server  .mcp.json
$ cat .mcp.json
{
  "mcpServers": {
    "capybaras-mcp-server": {
      "type": "stdio",
      "command": "./capybaras-mcp-server",
      "args": [],
      "env": {}
    }
  }
}`

import { Injectable } from "@nestjs/common";
import { ObsidianService } from "./obsidian.service";
import { Tool } from "@rekog/mcp-nest";
import { CommandSchema, type Command} from "src/shared/schemas";

@Injectable()
export class ObsidianCLITool {
    constructor(private readonly obsidian: ObsidianService) {}

    @Tool({
        name: 'obsidian_cli',
        description:
          'Execute an Obsidian CLI command. Available commands include: search, read, edit, create, list, delete. Use obsidian://help resource for full command details.',
        parameters: CommandSchema,
    })
    async run({ command }: Command) {
        return this.obsidian.exec(command)
    }
}
import { Injectable } from "@nestjs/common";
import { ObsidianService } from "./obsidian.service";
import { Resource, ResourceTemplate } from "@rekog/mcp-nest";

@Injectable()
export class ObsidianResource {
    constructor(private readonly obsidian: ObsidianService) {}

    @Resource({
        uri: 'obsidian://help',
        name: 'Obsidian CLI Help',
        description: 'Full CLI help text',
    })
    async getObsidianHelp(): Promise<string> {
        return await this.obsidian.exec("--help")
    }

    @ResourceTemplate({
        uriTemplate: 'obsidian://help/{command}',
        name: 'Obsidian Command Help',
        description: 'Help for a specific command',
    })
    async getObsidianCommandHelp(command: string) {
        return await this.obsidian.exec(`${command} --help`)
    }
}
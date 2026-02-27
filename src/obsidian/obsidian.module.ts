import { Module } from '@nestjs/common';
import { ObsidianService } from './obsidian.service';
import { ObsidianCLITool } from './obsidian.tool';
import { ObsidianResource } from './obsidian.resource';

@Module({
    providers: [ObsidianService, ObsidianCLITool, ObsidianResource]
})
export class ObsidianModule {}
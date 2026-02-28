import { Module } from '@nestjs/common';
import { McpModule, McpTransportType } from '@rekog/mcp-nest';
import { ObsidianModule } from './obsidian/obsidian.module';
import { ObsidianCLITool } from './obsidian/obsidian.tool';
import { ObsidianResource } from './obsidian/obsidian.resource';

@Module({
  imports: [
    McpModule.forRoot({
      name: 'obsidian-mcp',
      version: '0.1.0',
      transport: McpTransportType.STDIO,
    }),
    ObsidianModule,
  ],
  providers: [ObsidianCLITool, ObsidianResource],
})
export class AppModule {}
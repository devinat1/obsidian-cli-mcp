import { Module } from '@nestjs/common';
import { McpModule, McpTransportType } from '@rekog/mcp-nest';
import { ObsidianModule } from './obsidian/obsidian.module';

@Module({
  imports: [
    McpModule.forRoot({
      name: 'obsidian-mcp',
      version: '0.1.0',
      transport: McpTransportType.STDIO,
    }),
    ObsidianModule,
  ],
})
export class AppModule {}
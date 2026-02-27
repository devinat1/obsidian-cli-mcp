import { Injectable } from "@nestjs/common";
import {exec} from 'child_process'
import { promisify } from "util";
import { execErrorSchema } from "src/shared/schemas";

@Injectable()
export class ObsidianService {
    private readonly execAsync = promisify(exec);

    async exec(command: string): Promise<string> {
        try {
            const { stdout } = await this.execAsync(`obsidian ${command}`)
            return stdout
        } catch (error: unknown) {
            const parsed = execErrorSchema.safeParse(error)
            if (parsed.success) {
                return `Error (exit code ${parsed.data.code}): ${parsed.data.stderr}`;
            }
            return `Unexpected error: ${String(error)}`;
        }
    }
}
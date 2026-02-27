import {z} from 'zod';

export const execErrorSchema = z.object({
    code: z.number(),
    stderr: z.string(),
})


export const CommandSchema = z.object({
    command: z.string().describe('The Obsidian CLI command to run (without the "obsidian" prefix)'),
});

export type Command = z.infer<typeof CommandSchema>

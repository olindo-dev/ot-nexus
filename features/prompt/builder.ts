import { SYSTEM_PROMPT } from "@/lib/ai/system-prompt";

import { summarize } from "@/features/memory";
import { getMemory } from "@/features/memory";

export function buildPrompt(userMessage: string) {
  const memory = getMemory();

  const memoryContext =
    memory.length > 0
      ? summarize(memory)
      : "No previous conversation.";

  return [
    {
      role: "system" as const,
      content: `${SYSTEM_PROMPT}

Conversation Memory

${memoryContext}
`,
    },

    {
      role: "user" as const,
      content: userMessage,
    },
  ];
}
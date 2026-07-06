import { SYSTEM_PROMPT } from "@/lib/ai/system-prompt";

import { getMemory } from "@/features/memory";

export function buildPrompt(userMessage: string) {
  const memory = getMemory();

  const memoryContext =
    memory.summary?.text?.trim() || "No previous conversation.";

  return [
    {
      role: "system" as const,
      content: `${SYSTEM_PROMPT}

Current Mode:
${memory.context.mode}

Current Patient:
${memory.context.patientId ?? "None"}

Conversation Memory:
${memoryContext}
`,
    },

    {
      role: "user" as const,
      content: userMessage,
    },
  ];
}
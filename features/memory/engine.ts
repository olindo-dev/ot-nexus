import { getMemory, setMemory } from "./storage";
import { summarize } from "./summary";
import { ConversationMessage } from "./types";

export function remember(
  role: "system" | "user" | "assistant",
  content: string
) {
  const memory = getMemory();

  const message: ConversationMessage = {
    id: crypto.randomUUID(),
    role,
    content,
    timestamp: Date.now(),
  };

  memory.messages.push(message);

  // Keep only the latest 100 messages in active memory
  if (memory.messages.length > 100) {
    memory.messages = memory.messages.slice(-100);
  }

  memory.summary = summarize(memory.messages);

  setMemory(memory);
}

export function getConversationContext(): string {
  const memory = getMemory();

  const mode = memory.context.mode;
  const patient = memory.context.patientId ?? "None";
  const summary = memory.summary?.text ?? "";

  return `
Current Mode: ${mode}
Current Patient: ${patient}

Conversation Summary:
${summary}
`.trim();
}
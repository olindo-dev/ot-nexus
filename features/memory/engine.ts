import { extractTags } from "./extractor";
import { saveMemory, getMemory } from "./storage";
import { summarize } from "./summary";
import { MemoryContext } from "./types";

export function remember(
  userMessage: string,
  assistantMessage: string
): MemoryContext {
  saveMemory({
    id: crypto.randomUUID(),
    timestamp: Date.now(),

    userMessage,
    assistantMessage,

    summary: assistantMessage,

    tags: extractTags(userMessage),
  });

  const memory = getMemory();

  return {
    recentConversation: summarize(memory),
    summary: memory
      .slice(-5)
      .map((m) => m.summary)
      .join("\n"),
  };
}
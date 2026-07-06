import { MemoryItem } from "./types";

export function summarize(memory: MemoryItem[]): string {
  return memory
    .map(
      (item) =>
        `User: ${item.userMessage}
Assistant: ${item.assistantMessage}`
    )
    .join("\n\n");
}
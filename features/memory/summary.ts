import { ConversationMessage, ConversationSummary } from "./types";

export function summarize(
  messages: ConversationMessage[]
): ConversationSummary {
  if (messages.length === 0) {
    return {
      text: "",
      updatedAt: Date.now(),
    };
  }

  const recent = messages
    .slice(-10)
    .map((message) => {
      const content =
        message.content.length > 120
          ? message.content.slice(0, 120) + "..."
          : message.content;

      return `${message.role}: ${content}`;
    })
    .join("\n");

  return {
    text: recent,
    updatedAt: Date.now(),
  };
}
import { ConversationMemory } from "./types";

let memory: ConversationMemory = {
  context: {
    sessionId: crypto.randomUUID(),
    mode: "general",
  },

  messages: [],

  summary: undefined,
};

export function getMemory(): ConversationMemory {
  return memory;
}

export function setMemory(newMemory: ConversationMemory): void {
  memory = newMemory;
}

export function clearMemory(): void {
  memory = {
    context: {
      sessionId: crypto.randomUUID(),
      mode: "general",
    },

    messages: [],

    summary: undefined,
  };
}
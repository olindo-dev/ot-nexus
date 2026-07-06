import { ConversationMemory } from "./types";

let memory: ConversationMemory = {
  sessionId: crypto.randomUUID(),
  history: [],
};

export function getSession() {
  return memory;
}

export function resetSession() {
  memory = {
    sessionId: crypto.randomUUID(),
    history: [],
  };
}
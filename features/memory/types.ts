export type MemoryMode =
  | "general"
  | "patient"
  | "research"
  | "viva";

export interface ConversationMessage {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ConversationSummary {
  text: string;
  updatedAt: number;
}

export interface MemoryContext {
  sessionId: string;
  mode: MemoryMode;
  patientId?: string;
}

export interface ConversationMemory {
  context: MemoryContext;
  messages: ConversationMessage[];
  summary?: ConversationSummary;
}
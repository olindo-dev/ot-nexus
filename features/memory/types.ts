export interface MemoryItem {
  id: string;
  timestamp: number;

  userMessage: string;
  assistantMessage: string;

  summary: string;

  tags: string[];
}

export interface ConversationMemory {
  sessionId: string;

  history: MemoryItem[];
}

export interface MemoryContext {
  recentConversation: string;

  summary: string;
}
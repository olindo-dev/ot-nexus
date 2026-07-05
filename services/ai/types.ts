export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIRequest {
  messages: AIMessage[];
}

export interface AIResponse {
  content: string;
}

export interface AIService {
  chat(request: AIRequest): Promise<AIResponse>;
}
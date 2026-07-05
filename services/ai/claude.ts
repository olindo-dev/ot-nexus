import { AIRequest, AIResponse, AIService } from "./types";

class ClaudeService implements AIService {
  async chat(request: AIRequest): Promise<AIResponse> {
    void request;

    return {
      content: "Claude integration coming soon.",
    };
  }
}

export const claude = new ClaudeService();
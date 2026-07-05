import { AIRequest, AIResponse, AIService } from "./types";

class DeepSeekService implements AIService {
  async chat(request: AIRequest): Promise<AIResponse> {
    void request;

    return {
      content: "DeepSeek integration coming soon.",
    };
  }
}

export const deepseek = new DeepSeekService();
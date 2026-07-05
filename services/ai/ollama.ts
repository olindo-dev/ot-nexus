import { AIRequest, AIResponse, AIService } from "./types";

class OllamaService implements AIService {
  async chat(request: AIRequest): Promise<AIResponse> {
    void request;

    return {
      content: "Ollama integration coming soon.",
    };
  }
}

export const ollama = new OllamaService();
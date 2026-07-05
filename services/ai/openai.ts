import { AIConfig } from "@/lib/ai/config";
import { AIRequest, AIResponse, AIService } from "./types";

class OpenAIService implements AIService {
  async chat(request: AIRequest): Promise<AIResponse> {
    if (!AIConfig.openai) {
      return {
        content: "❌ OPENAI_API_KEY is missing.",
      };
    }

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIConfig.openai}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: request.messages,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("===== OPENAI ERROR =====");
      console.error(data);

      throw new Error(
        data?.error?.message ??
          `OpenAI request failed (${response.status})`
      );
    }

    return {
      content:
        data?.choices?.[0]?.message?.content ??
        "No response received from OpenAI.",
    };
  }
}

export const openai = new OpenAIService();
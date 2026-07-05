import { AIConfig } from "@/lib/ai/config";
import { AIRequest, AIResponse, AIService } from "./types";

class GeminiService implements AIService {
  async chat(request: AIRequest): Promise<AIResponse> {
    if (!AIConfig.gemini) {
      return {
        content: "❌ GEMINI_API_KEY is missing.",
      };
    }

    const prompt = request.messages
      .map((m) => `${m.role.toUpperCase()}:\n${m.content}`)
      .join("\n\n");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${AIConfig.gemini}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);

      throw new Error(
        data?.error?.message ??
          "Failed to connect Gemini."
      );
    }

    return {
      content:
        data.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No response.",
    };
  }
}

export const gemini = new GeminiService();
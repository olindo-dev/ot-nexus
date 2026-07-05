import { SYSTEM_PROMPT } from "./system-prompt";
import { ProviderName } from "./types";

import {
  openai,
  gemini,
  claude,
  deepseek,
  ollama,
} from "@/services/ai";

import { humanize } from "@/features/humanizer";

class AIManager {
  private provider: ProviderName = "gemini";

  setProvider(provider: ProviderName) {
    this.provider = provider;
  }

  async ask(message: string): Promise<string> {
    const request = {
      messages: [
        {
          role: "system" as const,
          content: SYSTEM_PROMPT,
        },
        {
          role: "user" as const,
          content: message,
        },
      ],
    };

    let response = "";

    switch (this.provider) {
      case "openai":
        response = (await openai.chat(request)).content;
        break;

      case "gemini":
        response = (await gemini.chat(request)).content;
        break;

      case "claude":
        response = (await claude.chat(request)).content;
        break;

      case "deepseek":
        response = (await deepseek.chat(request)).content;
        break;

      case "ollama":
        response = (await ollama.chat(request)).content;
        break;

      default:
        response = "No AI Provider Selected.";
    }

    return humanize(response);
  }
}

export const AI = new AIManager();
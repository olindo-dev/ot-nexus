import { ProviderName } from "./types";

import {
  openai,
  gemini,
  claude,
  deepseek,
  ollama,
} from "@/services/ai";

import { humanize } from "@/features/humanizer";
import { buildPrompt } from "@/features/prompt";

class AIManager {
  private provider: ProviderName = "gemini";

  setProvider(provider: ProviderName) {
    this.provider = provider;
  }

  async ask(message: string): Promise<string> {
    const request = {
      messages: buildPrompt(message),
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
export const AIConfig = {
  openai: process.env.OPENAI_API_KEY ?? "",

  gemini: process.env.GEMINI_API_KEY ?? "",

  claude: process.env.CLAUDE_API_KEY ?? "",

  deepseek: process.env.DEEPSEEK_API_KEY ?? "",

  openrouter: process.env.OPENROUTER_API_KEY ?? "",

  ollama:
    process.env.OLLAMA_URL ??
    "http://localhost:11434",
};
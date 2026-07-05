export interface AIProvider {
  ask(message: string): Promise<string>;
}

export type ProviderName =
  | "dummy"
  | "openai"
  | "gemini"
  | "claude"
  | "deepseek"
  | "ollama";
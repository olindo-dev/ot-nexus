import { buildContext } from "./context";
import { Personality } from "./personality";
import { PromptRules } from "./rules";
import { PromptContext } from "./types";

export function buildPrompt(
  context?: PromptContext
): string {
  return `
${Personality}

${PromptRules}

${buildContext(context)}
`;
}
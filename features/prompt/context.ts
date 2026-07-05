import { PromptContext } from "./types";

export function buildContext(
  context?: PromptContext
): string {
  if (!context) {
    return "";
  }

  let output = "";

  if (context.mode) {
    output += `Mode: ${context.mode}\n`;
  }

  if (context.language) {
    output += `Language: ${context.language}\n`;
  }

  if (context.userLevel) {
    output += `User Level: ${context.userLevel}\n`;
  }

  if (context.diagnosis) {
    output += `Diagnosis: ${context.diagnosis}\n`;
  }

  return output;
}
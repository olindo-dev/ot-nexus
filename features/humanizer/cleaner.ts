import { HumanizerRules } from "./rules";

export function cleanResponse(text: string): string {
  let output = text;

  for (const value of HumanizerRules.markdown) {
    output = output.split(value).join("");
  }

  for (const value of HumanizerRules.aiPhrases) {
    output = output.replaceAll(value, "");
  }

  output = output.replace(/\n{3,}/g, "\n\n");

  output = output.replace(/[ \t]+/g, " ");

  return output.trim();
}
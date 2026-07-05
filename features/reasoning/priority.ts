import { ClinicalPriority } from "./types";

export function detectPriority(text: string): ClinicalPriority {
  const value = text.toLowerCase();

  if (
    value.includes("fall") ||
    value.includes("unsafe") ||
    value.includes("aspiration")
  ) {
    return "critical";
  }

  if (
    value.includes("balance") ||
    value.includes("feeding") ||
    value.includes("transfer")
  ) {
    return "high";
  }

  if (
    value.includes("weakness") ||
    value.includes("pain")
  ) {
    return "medium";
  }

  return "low";
}
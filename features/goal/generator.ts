import {
  GoalGenerationInput,
  GoalGenerationResult,
  OTGoal,
} from "./types";

import { GoalTemplates } from "./templates";
import { GoalRules } from "./rules";

export function generateGoals(
  input: GoalGenerationInput
): GoalGenerationResult {
  const shortTerm: OTGoal[] = [];
  const longTerm: OTGoal[] = [];

  for (const problem of input.problems) {
    const text = problem.toLowerCase();

    if (text.includes("dress")) {
      shortTerm.push({
        id: crypto.randomUUID(),
        type: "short-term",
        title: GoalTemplates.dressing.short,
        timeframe: GoalRules.dressing.timeframe.short,
      });

      longTerm.push({
        id: crypto.randomUUID(),
        type: "long-term",
        title: GoalTemplates.dressing.long,
        timeframe: GoalRules.dressing.timeframe.long,
      });
    }

    if (text.includes("feed") || text.includes("eat")) {
      shortTerm.push({
        id: crypto.randomUUID(),
        type: "short-term",
        title: GoalTemplates.feeding.short,
        timeframe: GoalRules.feeding.timeframe.short,
      });

      longTerm.push({
        id: crypto.randomUUID(),
        type: "long-term",
        title: GoalTemplates.feeding.long,
        timeframe: GoalRules.feeding.timeframe.long,
      });
    }

    if (text.includes("balance")) {
      shortTerm.push({
        id: crypto.randomUUID(),
        type: "short-term",
        title: GoalTemplates.balance.short,
        timeframe: GoalRules.balance.timeframe.short,
      });

      longTerm.push({
        id: crypto.randomUUID(),
        type: "long-term",
        title: GoalTemplates.balance.long,
        timeframe: GoalRules.balance.timeframe.long,
      });
    }

    if (text.includes("weak")) {
      shortTerm.push({
        id: crypto.randomUUID(),
        type: "short-term",
        title: GoalTemplates.weakness.short,
        timeframe: GoalRules.weakness.timeframe.short,
      });

      longTerm.push({
        id: crypto.randomUUID(),
        type: "long-term",
        title: GoalTemplates.weakness.long,
        timeframe: GoalRules.weakness.timeframe.long,
      });
    }
  }

  return {
    shortTerm,
    longTerm,
  };
}
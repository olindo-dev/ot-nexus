export type GoalType = "short-term" | "long-term";

export interface OTGoal {
  id: string;

  type: GoalType;

  title: string;

  timeframe: string;

  rationale?: string;
}

export interface GoalGenerationInput {
  diagnosis?: string;

  age?: number;

  problems: string[];
}

export interface GoalGenerationResult {
  shortTerm: OTGoal[];

  longTerm: OTGoal[];
}
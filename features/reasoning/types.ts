export type ClinicalPriority =
  | "critical"
  | "high"
  | "medium"
  | "low";

export interface ClinicalProblem {
  id: string;

  title: string;

  category: string;

  priority: ClinicalPriority;

  reason: string;
}

export interface ClinicalReasoningResult {
  problems: ClinicalProblem[];

  summary: string;
}
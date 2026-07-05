import { ClinicalReasoningResult } from "./types";
import { detectPriority } from "./priority";
import { PatientProblem } from "../patient";

export function buildClinicalReasoning(
  problems: PatientProblem[]
): ClinicalReasoningResult {
  const result = problems.map((problem) => ({
    id: problem.id,
    title: problem.title,
    category: problem.category ?? "General",
    priority: detectPriority(problem.title),
    reason: `Priority assigned based on detected clinical keywords.`,
  }));

  return {
    problems: result,
    summary: `${result.length} clinical problem(s) identified.`,
  };
}
import { ClinicalReasoningResult } from "./types";
import { detectPriority } from "./priority";
import { PatientProfile } from "../patient";

export function buildClinicalReasoning(
  patient: Partial<PatientProfile>
): ClinicalReasoningResult {
  const problems = [];

  if (patient.chiefComplaint) {
    problems.push({
      id: crypto.randomUUID(),
      title: patient.chiefComplaint,
      category: "Occupational Performance",
      priority: detectPriority(patient.chiefComplaint),
      reason: "Generated from patient's chief complaint.",
    });
  }

  return {
    problems,
    summary: `${problems.length} clinical problem(s) identified.`,
  };
}
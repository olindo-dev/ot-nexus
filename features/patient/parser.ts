import { PatientProfile } from "./types";

export function parsePatient(text: string): Partial<PatientProfile> {
  const lower = text.toLowerCase();

  const patient: Partial<PatientProfile> = {};

  if (lower.includes("stroke"))
    patient.diagnosis = "Stroke";

  if (lower.includes("parkinson"))
    patient.diagnosis = "Parkinson's Disease";

  if (lower.includes("cerebral palsy"))
    patient.diagnosis = "Cerebral Palsy";

  if (lower.includes("right"))
    patient.affectedSide = "Right";

  if (lower.includes("left"))
    patient.affectedSide = "Left";

  if (lower.includes("hand"))
    patient.chiefComplaint = "Hand Function";

  if (lower.includes("shoulder"))
    patient.chiefComplaint = "Shoulder Problem";

  return patient;
}
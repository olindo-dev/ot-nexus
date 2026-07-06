import { PatientProfile } from "./types";

export function validatePatient(
  patient: Partial<PatientProfile>
): boolean {
  return Object.keys(patient).length > 0;
}
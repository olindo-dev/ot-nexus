import { PatientData } from "./types";

export function validatePatient(patient: PatientData): string[] {
  const errors: string[] = [];

  if (!patient.age) {
    errors.push("Patient age is missing.");
  }

  if (!patient.diagnosis) {
    errors.push("Diagnosis is missing.");
  }

  if (patient.gender === "unknown") {
    errors.push("Gender is missing.");
  }

  return errors;
}
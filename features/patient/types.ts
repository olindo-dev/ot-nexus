export type Gender =
  | "male"
  | "female"
  | "other"
  | "unknown";

export interface PatientProblem {
  id: string;

  title: string;

  severity?: "mild" | "moderate" | "severe";

  category?: string;
}

export interface PatientData {
  name?: string;

  age?: number;

  gender: Gender;

  diagnosis?: string;

  chiefComplaint?: string;

  medicalHistory?: string[];

  problems: PatientProblem[];
}

export interface ParsedPatientResult {
  success: boolean;

  patient: PatientData;

  rawText: string;
}
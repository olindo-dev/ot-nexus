import {
  ParsedPatientResult,
  PatientData,
} from "./types";

export function parsePatient(text: string): ParsedPatientResult {
  const lower = text.toLowerCase();

  const patient: PatientData = {
    gender: "unknown",
    problems: [],
  };

  const age = lower.match(/(\d{1,3})\s*(years?|yrs?|year)/);

  if (age) {
    patient.age = Number(age[1]);
  }

  if (lower.includes("male")) {
    patient.gender = "male";
  }

  if (lower.includes("female")) {
    patient.gender = "female";
  }

  const diagnoses = [
    "stroke",
    "parkinson",
    "cerebral palsy",
    "spinal cord injury",
    "traumatic brain injury",
    "autism",
    "down syndrome",
    "multiple sclerosis",
    "guillain barre syndrome",
    "amputation",
  ];

  for (const diagnosis of diagnoses) {
    if (lower.includes(diagnosis)) {
      patient.diagnosis = diagnosis;
      break;
    }
  }

  const lines = text.split("\n");

  for (const line of lines) {
    const value = line.trim();

    if (value.length < 3) continue;

    if (
      value.toLowerCase().includes("difficulty") ||
      value.toLowerCase().includes("unable") ||
      value.toLowerCase().includes("pain") ||
      value.toLowerCase().includes("weakness") ||
      value.toLowerCase().includes("dependent")
    ) {
      patient.problems.push({
        id: crypto.randomUUID(),
        title: value,
      });
    }
  }

  return {
    success: true,
    patient,
    rawText: text,
  };
}
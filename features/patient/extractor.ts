import { PatientData, PatientProblem } from "./types";

export function extractProblems(
  patient: PatientData
): PatientProblem[] {
  const detected: PatientProblem[] = [];

  const text = [
    patient.diagnosis ?? "",
    patient.chiefComplaint ?? "",
    ...patient.problems.map((p) => p.title),
  ]
    .join(" ")
    .toLowerCase();

  const rules = [
    {
      keywords: ["dress", "dressing"],
      title: "Difficulty with Dressing",
      category: "ADL",
    },
    {
      keywords: ["feeding", "eat", "eating"],
      title: "Difficulty with Feeding",
      category: "ADL",
    },
    {
      keywords: ["groom", "grooming"],
      title: "Difficulty with Grooming",
      category: "ADL",
    },
    {
      keywords: ["bath", "bathing"],
      title: "Difficulty with Bathing",
      category: "ADL",
    },
    {
      keywords: ["toilet", "toileting"],
      title: "Difficulty with Toileting",
      category: "ADL",
    },
    {
      keywords: ["walk", "walking", "gait"],
      title: "Reduced Functional Mobility",
      category: "Mobility",
    },
    {
      keywords: ["balance", "sitting balance", "standing balance"],
      title: "Impaired Balance",
      category: "Motor",
    },
    {
      keywords: ["weakness", "weak"],
      title: "Muscle Weakness",
      category: "Motor",
    },
    {
      keywords: ["pain"],
      title: "Pain",
      category: "Physical",
    },
    {
      keywords: ["memory"],
      title: "Memory Deficit",
      category: "Cognition",
    },
    {
      keywords: ["attention"],
      title: "Attention Deficit",
      category: "Cognition",
    },
    {
      keywords: ["vision", "visual"],
      title: "Visual Impairment",
      category: "Vision",
    },
  ];

  for (const rule of rules) {
    const found = rule.keywords.some((keyword) =>
      text.includes(keyword)
    );

    if (!found) continue;

    detected.push({
      id: crypto.randomUUID(),
      title: rule.title,
      category: rule.category,
      severity: "moderate",
    });
  }

  return detected;
}
export interface PatientProfile {
  name?: string;

  age?: number;

  gender?: string;

  diagnosis?: string;

  affectedSide?: string;

  condition?: string;

  occupation?: string;

  chiefComplaint?: string;

  goals: string[];

  assessments: string[];

  interventions: string[];

  notes: string[];
}
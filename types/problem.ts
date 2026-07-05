export interface Problem {
  id: string;

  title: string;

  severity: "low" | "medium" | "high";

  treatment: string;
}
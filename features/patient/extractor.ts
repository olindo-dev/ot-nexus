import { parsePatient } from "./parser";

export function extractPatient(message: string) {
  return parsePatient(message);
}
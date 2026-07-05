import { cleanResponse } from "./cleaner";

export function humanize(text: string): string {
  return cleanResponse(text);
}
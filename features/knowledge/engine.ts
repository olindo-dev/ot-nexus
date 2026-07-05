import { searchKnowledge } from "./search";

export function getKnowledge(query: string) {
  return searchKnowledge(query);
}
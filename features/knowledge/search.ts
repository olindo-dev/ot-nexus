import {
  KnowledgeDatabase,
} from "./database";

import {
  KnowledgeSearchResult,
} from "./types";

export function searchKnowledge(
  query: string
): KnowledgeSearchResult {
  const text = query.toLowerCase();

  const entries = KnowledgeDatabase.filter((item) => {
    return (
      item.title.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(text)
      )
    );
  });

  return {
    found: entries.length > 0,
    entries,
  };
}
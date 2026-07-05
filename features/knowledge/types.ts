export interface KnowledgeEntry {
  id: string;

  title: string;

  category: string;

  tags: string[];

  content: string;

  references?: string[];

  related?: string[];
}

export interface KnowledgeSearchResult {
  found: boolean;

  entries: KnowledgeEntry[];
}
export function extractKeywords(text: string): string[] {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const stopWords = new Set([
    "the",
    "is",
    "are",
    "a",
    "an",
    "of",
    "to",
    "and",
    "or",
    "in",
    "on",
    "for",
    "with",
    "at",
    "by",
    "from",
    "this",
    "that",
    "these",
    "those",
    "what",
    "how",
    "why",
    "when",
    "where",
    "who",
    "which",
    "i",
    "you",
    "he",
    "she",
    "they",
    "we",
    "it",
    "my",
    "your",
    "his",
    "her",
    "their",
  ]);

  return [...new Set(words.filter((word) => !stopWords.has(word)))];
}
export function extractTags(message: string): string[] {
  const text = message.toLowerCase();

  const tags: string[] = [];

  if (text.includes("stroke")) tags.push("stroke");

  if (text.includes("cp")) tags.push("cerebral palsy");

  if (text.includes("parkinson")) tags.push("parkinson");

  if (text.includes("hand")) tags.push("hand");

  if (text.includes("shoulder")) tags.push("shoulder");

  if (text.includes("goal")) tags.push("goal");

  if (text.includes("assessment")) tags.push("assessment");

  return tags;
}
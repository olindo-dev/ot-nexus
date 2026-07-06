import { getSession } from "./session";
import { MemoryItem } from "./types";

export function saveMemory(item: MemoryItem) {
  const session = getSession();

  session.history.push(item);

  if (session.history.length > 20) {
    session.history.shift();
  }
}

export function getMemory() {
  return getSession().history;
}

export function clearMemory() {
  getSession().history.length = 0;
}
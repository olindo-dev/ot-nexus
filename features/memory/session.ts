import { getMemory, setMemory } from "./storage";
import { MemoryMode } from "./types";

export function getSession() {
  return getMemory().context;
}

export function setMode(mode: MemoryMode) {
  const memory = getMemory();

  memory.context.mode = mode;

  setMemory(memory);
}

export function setPatient(patientId: string) {
  const memory = getMemory();

  memory.context.mode = "patient";
  memory.context.patientId = patientId;

  setMemory(memory);
}

export function clearPatient() {
  const memory = getMemory();

  memory.context.mode = "general";
  memory.context.patientId = undefined;

  setMemory(memory);
}

export function newSession() {
  const memory = getMemory();

  memory.context = {
    sessionId: crypto.randomUUID(),
    mode: "general",
    patientId: undefined,
  };

  memory.messages = [];
  memory.summary = undefined;

  setMemory(memory);
}
export interface PromptContext {
  mode?:
    | "chat"
    | "clinical"
    | "assignment"
    | "research"
    | "soap"
    | "goal";

  diagnosis?: string;

  language?: "english" | "bengali";

  userLevel?:
    | "student"
    | "therapist"
    | "educator";
}
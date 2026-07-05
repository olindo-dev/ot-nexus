interface MessageProps {
  role: "user" | "assistant";
  text: string;
}

export default function Message({ role, text }: MessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
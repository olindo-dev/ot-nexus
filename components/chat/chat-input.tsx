"use client";

import { useState } from "react";
import {
  Camera,
  Globe,
  Mic,
  Paperclip,
  SendHorizontal,
} from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="border-t border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center gap-3">

        <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700">
          <Paperclip size={20} className="text-white" />
        </button>

        <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700">
          <Camera size={20} className="text-white" />
        </button>

        <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700">
          <Mic size={20} className="text-white" />
        </button>

        <button className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700">
          <Globe size={20} className="text-white" />
        </button>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask anything about Occupational Therapy..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 p-4 hover:bg-blue-700"
        >
          <SendHorizontal size={20} className="text-white" />
        </button>

      </div>
    </div>
  );
}
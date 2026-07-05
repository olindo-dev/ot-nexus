"use client";

import { useState } from "react";
import { useChat } from "@/hooks/use-chat";

export default function ChatWindow() {
  const [input, setInput] = useState("");

  const {
    messages,
    loading,
    send,
  } = useChat();

  async function sendMessage() {
    const text = input.trim();

    if (!text) return;

    setInput("");

    await send(text);
  }

  return (
    <div className="flex h-[80vh] flex-col rounded-2xl border border-slate-800 bg-slate-900">

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          OT Nexus AI
        </h2>

        <p className="text-green-400">
          ● Online
        </p>

      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-6">

        {messages.map((message) => (

          <div
            key={message.id}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[75%] whitespace-pre-line rounded-2xl px-5 py-4 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-white"
              }`}
            >

              {message.content}

            </div>

          </div>

        ))}

        {loading && (

          <div className="flex justify-start">

            <div className="rounded-2xl bg-slate-800 px-5 py-4 text-slate-300">

              Thinking...

            </div>

          </div>

        )}

      </div>

      <div className="border-t border-slate-800 p-5">

        <div className="flex gap-3">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask anything about Occupational Therapy..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "..." : "Send"}
          </button>

        </div>

      </div>

    </div>
  );
}
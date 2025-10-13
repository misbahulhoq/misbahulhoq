"use client";
import { use, useState, useTransition } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { baseUrl } from "@/lib/baseUrl";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([{ text: "Hi! How can I help you today?", sender: "bot" }]);
  const [input, setInput] = useState("");
  const [pending, startTransition] = useTransition();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);

      // API call
      startTransition(async () => {
        const response = await fetch(`${baseUrl}/chat`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input }),
        });

        const data = await response.json();
        const { text } = data?.data;
        setMessages((prev) => [
          ...prev,
          {
            text,
            sender: "bot",
          },
        ]);
      });

      setInput("");
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={`fixed right-6 bottom-6 z-50`}>
      {/* Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-accent flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2.5 text-white shadow-lg transition-all duration-300 lg:gap-2"
        >
          <span>Ask AI Assistant</span>
          <MessageCircle size={20} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="animate-in slide-in-from-bottom-5 flex h-[500px] flex-col rounded-lg bg-white shadow-2xl duration-300 sm:w-96">
          {/* Header */}
          <div className="bg-accent flex items-center justify-between rounded-t-lg p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="bg-background text-foreground rounded-full p-2">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold">AI assistant</h3>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="cursor-pointer rounded-full p-1 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="bg-background text-foreground flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((msg, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      msg.sender === "user"
                        ? "bg-accent rounded-br-none text-white"
                        : "rounded-bl-none bg-white text-gray-800 shadow"
                    }`}
                  >
                    {idx === messages.length - 1 &&
                    pending &&
                    msg.sender === "bot" ? (
                      "Loading state is there."
                    ) : (
                      <p className="text-sm">{msg.text}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="bg-background rounded-b-lg border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2"
              />
              <button
                onClick={handleSend}
                className="bg-accent flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

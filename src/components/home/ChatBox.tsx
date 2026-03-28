"use client";
import {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { MessageCircle, X, Send, LoaderIcon } from "lucide-react";
import { apiUrl } from "@/lib/urls";
import Markdown from "react-markdown";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "model"; parts: { text: string }[] }[]
  >([{ role: "model", parts: [{ text: "Hello, how can I help you?" }] }]);
  const [input, setInput] = useState("");
  const [pending, startTransition] = useTransition();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = chatEndRef.current;
    if (chatContainer) {
      chatContainer.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { parts: [{ text: input }], role: "user" }]);
      // API call
      startTransition(async () => {
        const response = await fetch(`${apiUrl}/chat`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input, history: messages }),
        });

        const data = await response.json();
        const { parts } = data?.data;
        setMessages((prev) => [
          ...prev,
          {
            parts,
            role: "model",
          },
        ]);
      });

      setInput("");
    }
  };

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
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
          className="bg-accent flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2.5 text-[#262121] shadow-lg transition-all duration-300 lg:gap-2"
        >
          <span>Ask AI Assistant</span>
          <MessageCircle size={20} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chat-box"
          className="animate-in slide-in-from-bottom-5 flex h-[500px] flex-col rounded-lg bg-white shadow-2xl duration-300 sm:w-96"
        >
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
              const isUser = msg.role === "user";
              return (
                <div
                  key={idx}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      isUser
                        ? "bg-accent rounded-br-none text-white"
                        : "bg-background text-foreground shadow-accent rounded-bl-none shadow-xs"
                    }`}
                  >
                    <Markdown>{msg.parts[0].text}</Markdown>
                  </div>
                </div>
              );
            })}

            {pending && (
              <div className="flex justify-start">
                <LoaderIcon className="animate-spin" size={20} />
              </div>
            )}

            <div ref={chatEndRef} />
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

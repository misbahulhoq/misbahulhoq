"use client";
import { useState, useEffect, useRef } from "react";

const useTypewriterStream = (prompt: string | null) => {
  const [text, setText] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    // Start streaming only when there's a new, valid prompt
    if (prompt) {
      setIsStreaming(true);
      setText(""); // Clear previous text

      const url = `http://localhost:5000/api/v1/chat/stream-chat?prompt=${encodeURIComponent(prompt)}`;
      const eventSource = new EventSource(url);
      eventSourceRef.current = eventSource;

      // Handles incoming messages from the server
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.error) {
          console.error("Streaming Error:", data.error);
          eventSource.close(); // Close connection on error
          return;
        }

        setText((prevText) => prevText + data.text);
      };

      // Handles any connection errors
      eventSource.onerror = (err) => {
        // console.error("EventSource failed:", err);
        eventSource.close();
        setIsStreaming(false);
      };

      // The server will close the connection when the stream ends,
      // which will also trigger the 'onerror' event in some browsers.
      // Manually setting isStreaming to false here ensures UI updates correctly.
      const handleStreamEnd = () => {
        setIsStreaming(false);
        if (eventSourceRef.current) {
          eventSourceRef.current.close();
        }
      };

      eventSource.addEventListener("error", handleStreamEnd);
    }

    // Cleanup function: this is crucial to prevent memory leaks
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        setIsStreaming(false);
      }
    };
  }, [prompt]); // Re-run this effect whenever the prompt changes

  return { text, isStreaming };
};

const ChatComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [submittedPrompt, setSubmittedPrompt] = useState<string | null>(null);

  // Use the custom hook to handle the streaming logic
  const { text: streamedText, isStreaming } =
    useTypewriterStream(submittedPrompt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isStreaming) return;
    setSubmittedPrompt(inputValue);
    setInputValue(""); // Optionally clear the input
  };

  return (
    <div
      className="min-h-screen py-10"
      style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "auto" }}
    >
      <h1>Gemini AI Stream ✍️</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question..."
          style={{ width: "80%", padding: "8px" }}
          disabled={isStreaming}
        />
        <button type="submit" disabled={isStreaming} style={{ padding: "8px" }}>
          {isStreaming ? "Generating..." : "Send"}
        </button>
      </form>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
          whiteSpace: "pre-wrap",
        }}
      >
        {streamedText}
        {isStreaming && (
          <span style={{ animation: "blink 1s infinite" }}>|</span>
        )}
      </div>

      {/* CSS for the blinking cursor effect */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ChatComponent;

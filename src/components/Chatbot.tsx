'use client';
import React, { useState, useEffect, useRef } from "react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const dummyResponses = [
  "Thanks for reaching out!",
  "I'm here to help!",
  "Could you please clarify your question?",
  "That's interesting. Tell me more!",
  "I see. Let's continue!",
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when new messages are added.
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Append user message.
    const userMessage: Message = { sender: "user", text: inputText.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Append a dummy response after a delay.
    setTimeout(() => {
      const response =
        dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      const botMessage: Message = { sender: "bot", text: response };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          {/* Chatbot Header */}
          <div className="bg-gray-900 text-white p-4 flex justify-between items-center rounded-t-lg">
            <span>Chatbot</span>
            <button
              onClick={() => setOpen(false)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Chat Content */}
          <div className="p-4 flex-1 overflow-y-auto text-black">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <span className="inline-block p-2 rounded bg-gray-200">
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded-l px-3 py-2 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-4 right-4 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v8a2 2 0 002 2h2m10-12V4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m12 0H5"
            />
          </svg>
        )}
      </button>
    </>
  );
};

export default Chatbot;
    
import { useState } from "react";
import {
    Bot,
    Send,
    Sparkles,
    User,
    Plus,
} from "lucide-react";

import GlassCard from "../components/GlassCard.jsx";

function Assistant() {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            role: "assistant",
            text: "Hey Krishna! 🌸 I'm Sakura. What would you like to work on today?",
        },
    ]);

    const suggestions = [
        "Create my study plan for today",
        "Give me 3 DSA problems",
        "Analyze my career progress",
        "Help me prepare for Japan jobs",
    ];

    const sendMessage = (text = message) => {
        const trimmedMessage = text.trim();

        if (!trimmedMessage) return;

        setMessages((current) => [
            ...current,
            {
                id: Date.now(),
                role: "user",
                text: trimmedMessage,
            },
            {
                id: Date.now() + 1,
                role: "assistant",
                text: "I understand! 🌸 Once the Sakura AI backend is connected, I'll process this request and give you a personalized response.",
            },
        ]);

        setMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    return (
        <div className="flex min-h-full flex-col bg-[#09090f]">
            {/* Header */}
            <div className="border-b border-white/10 px-4 py-5 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-5xl items-center gap-3">
                    <div
                        className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl
              bg-gradient-to-br
              from-pink-500/20
              to-purple-500/20
              text-pink-400
            "
                    >
                        <Sparkles size={21} />
                    </div>

                    <div>
                        <h1 className="font-semibold text-white">
                            Sakura Assistant
                        </h1>

                        <div className="mt-0.5 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                            <span className="text-xs text-gray-500">
                AI Copilot
              </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-5xl flex-col gap-6">
                    {/* Welcome */}
                    {messages.length === 1 && (
                        <GlassCard className="p-6 sm:p-8">
                            <div className="text-center">
                                <div
                                    className="
                    mx-auto flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-pink-500/10
                    to-purple-500/20
                    text-3xl
                    sakura-float
                  "
                                >
                                    🌸
                                </div>

                                <h2 className="mt-5 text-xl font-bold text-white">
                                    How can I help you today?
                                </h2>

                                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">
                                    Ask Sakura about your studies, DSA, career,
                                    interviews, documents or Japan preparation.
                                </p>
                            </div>

                            {/* Suggestions */}
                            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {suggestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        type="button"
                                        onClick={() => sendMessage(suggestion)}
                                        className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.02]
                      px-4 py-3
                      text-left
                      text-sm text-gray-400
                      transition-all duration-200
                      hover:border-purple-500/30
                      hover:bg-purple-500/[0.05]
                      hover:text-white
                    "
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </GlassCard>
                    )}

                    {/* Messages */}
                    <div className="space-y-5">
                        {messages.map((item) => {
                            const isUser = item.role === "user";

                            return (
                                <div
                                    key={item.id}
                                    className={`flex gap-3 ${
                                        isUser ? "justify-end" : "justify-start"
                                    }`}
                                >
                                    {!isUser && (
                                        <div
                                            className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-purple-500/10
                        text-purple-400
                      "
                                        >
                                            <Bot size={18} />
                                        </div>
                                    )}

                                    <div
                                        className={`
                      max-w-[85%]
                      rounded-2xl
                      px-4 py-3
                      text-sm
                      leading-6
                      sm:max-w-[70%]
                      ${
                                            isUser
                                                ? "bg-purple-600 text-white"
                                                : "border border-white/10 bg-[#11111a] text-gray-300"
                                        }
                    `}
                                    >
                                        {item.text}
                                    </div>

                                    {isUser && (
                                        <div
                                            className="
                        flex h-9 w-9 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-white/5
                        text-gray-400
                      "
                                        >
                                            <User size={18} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="sticky bottom-0 border-t border-white/10 bg-[#09090f]/95 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <form
                        onSubmit={handleSubmit}
                        className="
              flex items-center gap-2
              rounded-2xl
              border border-white/10
              bg-[#11111a]
              p-2
              transition-all
              focus-within:border-purple-500/30
              focus-within:shadow-lg
              focus-within:shadow-purple-500/5
            "
                    >
                        <button
                            type="button"
                            className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                text-gray-500
                transition
                hover:bg-white/5
                hover:text-white
              "
                            title="New conversation"
                        >
                            <Plus size={19} />
                        </button>

                        <input
                            type="text"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Ask Sakura anything..."
                            className="
                min-w-0 flex-1
                bg-transparent
                px-2
                text-sm text-white
                placeholder:text-gray-600
                outline-none
              "
                        />

                        <button
                            type="submit"
                            disabled={!message.trim()}
                            className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-xl
                bg-purple-600
                text-white
                shadow-lg
                shadow-purple-500/10
                transition-all duration-200
                hover:bg-purple-500
                active:scale-95
                disabled:cursor-not-allowed
                disabled:bg-white/5
                disabled:text-gray-600
                disabled:shadow-none
              "
                            title="Send message"
                        >
                            <Send size={17} />
                        </button>
                    </form>

                    <p className="mt-2 text-center text-[11px] text-gray-700">
                        Sakura AI can make mistakes. Verify important information.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Assistant;
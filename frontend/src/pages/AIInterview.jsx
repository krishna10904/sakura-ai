import { useState } from "react";
import {
    Mic,
    Brain,
    Code2,
    BriefcaseBusiness,
    MessageCircle,
    Clock3,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Send,
} from "lucide-react";

import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const interviewTypes = [
    {
        id: "technical",
        title: "Technical",
        description: "Frontend, backend and CS fundamentals",
        icon: Code2,
    },
    {
        id: "dsa",
        title: "DSA",
        description: "Algorithms and problem solving",
        icon: Brain,
    },
    {
        id: "hr",
        title: "HR",
        description: "Behavioral and communication questions",
        icon: MessageCircle,
    },
    {
        id: "career",
        title: "Career",
        description: "Resume and career-focused questions",
        icon: BriefcaseBusiness,
    },
];

function AIInterview() {
    const [selectedType, setSelectedType] = useState("technical");
    const [difficulty, setDifficulty] = useState("Medium");
    const [started, setStarted] = useState(false);
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const selectedInterview = interviewTypes.find(
        (item) => item.id === selectedType
    );

    const handleStart = () => {
        setStarted(true);
        setSubmitted(false);
        setAnswer("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!answer.trim()) {
            return;
        }

        setSubmitted(true);
    };

    if (started) {
        return (
            <div className="flex min-h-full flex-col bg-[#09090f]">
                {/* Interview Header */}
                <div className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                <Mic size={20} />
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold text-white">
                                    Sakura AI Interview
                                </h1>

                                <p className="text-xs text-gray-600">
                                    {selectedInterview?.title} Interview •{" "}
                                    {difficulty}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                            <Clock3 size={13} className="text-gray-500" />
                            <span className="text-xs text-gray-400">
                18:42
              </span>
                        </div>
                    </div>
                </div>

                {/* Interview Content */}
                <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        {/* Progress */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">
                  Question 1 of 5
                </span>

                                <span className="text-purple-400">
                  20%
                </span>
                            </div>

                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                                <div className="h-full w-1/5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                            </div>
                        </div>

                        {/* AI Interviewer */}
                        <Card className="relative overflow-hidden">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />

                            <div className="relative">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-pink-500/20
                      to-purple-500/20
                      text-xl
                    "
                                    >
                                        🌸
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="font-semibold text-white">
                                                Sakura
                                            </h2>

                                            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] text-green-400">
                        Interviewer
                      </span>
                                        </div>

                                        <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg">
                                            Can you explain the difference between{" "}
                                            <span className="font-semibold text-purple-300">
                        let, const and var
                      </span>{" "}
                                            in JavaScript and when you would use each
                                            one?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Answer */}
                        <Card className="mt-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-semibold text-white">
                                    Your Answer
                                </h2>

                                <span className="text-xs text-gray-600">
                  Be concise and explain with examples
                </span>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-4"
                            >
                <textarea
                    value={answer}
                    onChange={(event) =>
                        setAnswer(event.target.value)
                    }
                    placeholder="Type your answer here..."
                    rows={8}
                    className="
                    w-full resize-y rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    px-4 py-3
                    text-sm leading-6 text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    focus:border-purple-500/40
                    focus:ring-2
                    focus:ring-purple-500/10
                  "
                />

                                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-xs text-gray-600">
                                        {answer.length} characters
                                    </p>

                                    <Button
                                        type="submit"
                                        icon={Send}
                                        disabled={!answer.trim()}
                                    >
                                        Submit Answer
                                    </Button>
                                </div>
                            </form>
                        </Card>

                        {/* Feedback */}
                        {submitted && (
                            <Card className="mt-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                        <CheckCircle2 size={21} />
                                    </div>

                                    <div>
                                        <h2 className="font-semibold text-white">
                                            Answer Recorded
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-gray-500">
                                            Sakura will evaluate your technical
                                            accuracy, clarity, structure and use of
                                            examples once the AI interview engine is
                                            connected.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        ["Technical", "--"],
                                        ["Clarity", "--"],
                                        ["Structure", "--"],
                                        ["Overall", "--"],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
                                        >
                                            <p className="text-xs text-gray-600">
                                                {label}
                                            </p>

                                            <p className="mt-1 text-lg font-bold text-white">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <Mic
                        size={18}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                        AI Interviewer
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Practice Like It's{" "}
                    <span className="sakura-gradient-text">
            Real
          </span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Simulate technical interviews with Sakura and
                    receive structured feedback on your answers.
                </p>
            </div>

            {/* Interview Type */}
            <Card>
                <div>
                    <h2 className="font-semibold text-white">
                        Choose Interview Type
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Select the type of interview you want to practice.
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {interviewTypes.map((item) => {
                        const Icon = item.icon;
                        const isSelected = selectedType === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedType(item.id)}
                                className={`
                  rounded-xl border p-4 text-left
                  transition-all duration-200
                  ${
                                    isSelected
                                        ? "border-purple-500/40 bg-purple-500/[0.08]"
                                        : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                                }
                `}
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className={`
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-xl
                      ${
                                            isSelected
                                                ? "bg-purple-500/20 text-purple-300"
                                                : "bg-white/5 text-gray-500"
                                        }
                    `}
                                    >
                                        <Icon size={19} />
                                    </div>

                                    <div>
                                        <h3
                                            className={`text-sm font-medium ${
                                                isSelected
                                                    ? "text-white"
                                                    : "text-gray-300"
                                            }`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-xs leading-5 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </Card>

            {/* Settings */}
            <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <h2 className="font-semibold text-white">
                        Difficulty
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Choose how challenging the interview should be.
                    </p>

                    <div className="mt-5 flex gap-2">
                        {["Easy", "Medium", "Hard"].map((level) => (
                            <button
                                key={level}
                                type="button"
                                onClick={() => setDifficulty(level)}
                                className={`
                  flex-1 rounded-xl border px-4 py-3
                  text-xs font-medium transition
                  ${
                                    difficulty === level
                                        ? "border-purple-500/30 bg-purple-500/10 text-purple-300"
                                        : "border-white/10 bg-white/[0.02] text-gray-500 hover:bg-white/[0.05]"
                                }
                `}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </Card>

                <Card>
                    <h2 className="font-semibold text-white">
                        Interview Format
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Sakura will ask questions one at a time.
                    </p>

                    <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                <Brain size={16} />
                            </div>

                            <span className="text-sm text-gray-300">
                Adaptive follow-up questions
              </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                                <Sparkles size={16} />
                            </div>

                            <span className="text-sm text-gray-300">
                AI-powered answer feedback
              </span>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Start */}
            <section className="mt-6">
                <Card className="relative overflow-hidden">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-purple-400">
                                Ready?
                            </p>

                            <h2 className="mt-2 text-xl font-bold text-white">
                                Start your {selectedInterview?.title} interview
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Difficulty: {difficulty} • 5 questions
                            </p>
                        </div>

                        <Button
                            size="large"
                            icon={ArrowRight}
                            onClick={handleStart}
                        >
                            Start Interview
                        </Button>
                    </div>
                </Card>
            </section>
        </div>
    );
}

export default AIInterview;
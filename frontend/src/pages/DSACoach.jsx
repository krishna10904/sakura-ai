import {
    Code2,
    Flame,
    Target,
    CheckCircle2,
    Clock3,
    Brain,
    ArrowRight,
    Lock,
    Trophy,
} from "lucide-react";

import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Button from "../components/Button.jsx";

const topics = [
    {
        name: "Arrays",
        progress: 88,
        solved: 22,
        total: 25,
    },
    {
        name: "Strings",
        progress: 76,
        solved: 19,
        total: 25,
    },
    {
        name: "Binary Search",
        progress: 62,
        solved: 8,
        total: 13,
    },
    {
        name: "Linked List",
        progress: 48,
        solved: 7,
        total: 15,
    },
    {
        name: "Dynamic Programming",
        progress: 31,
        solved: 5,
        total: 16,
    },
];

const problems = [
    {
        title: "Two Sum",
        topic: "Arrays",
        difficulty: "Easy",
        time: "15 min",
        completed: true,
    },
    {
        title: "Longest Substring Without Repeating Characters",
        topic: "Strings",
        difficulty: "Medium",
        time: "30 min",
        completed: false,
    },
    {
        title: "Binary Search",
        topic: "Binary Search",
        difficulty: "Easy",
        time: "20 min",
        completed: false,
    },
];

function DSACoach() {
    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <Code2
                        size={18}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                        AI DSA Coach
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Master <span className="sakura-gradient-text">DSA</span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Practice smarter, identify weak topics and build the
                    problem-solving skills needed for technical interviews.
                </p>
            </div>

            {/* Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Problems Solved
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                87
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                8 this week
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <CheckCircle2 size={21} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Current Streak
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                12
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                days
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                            <Flame size={21} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Accuracy
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                72%
                            </h2>

                            <p className="mt-2 text-xs text-green-400">
                                +5% this month
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                            <Target size={21} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Practice Time
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                18.5h
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                this month
                            </p>
                        </div>

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <Clock3 size={21} />
                        </div>
                    </div>
                </Card>
            </section>

            {/* Main Grid */}
            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* Today's Challenge */}
                <Card className="relative overflow-hidden xl:col-span-2">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                    Today's Challenge
                  </span>

                                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                    Medium
                  </span>
                                </div>

                                <h2 className="mt-4 text-xl font-bold text-white">
                                    Longest Substring Without Repeating Characters
                                </h2>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                                    Find the length of the longest substring without
                                    repeating characters.
                                </p>
                            </div>

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                <Brain size={23} />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                            <span>📚 Strings</span>
                            <span>⏱ 30 min</span>
                            <span>🎯 Interview</span>
                        </div>

                        <div className="mt-6">
                            <Button icon={ArrowRight}>
                                Start Challenge
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* AI Insight */}
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            🌸
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Sakura's Analysis
                            </h2>

                            <p className="mt-1 text-xs text-gray-600">
                                Based on your recent practice
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-gray-400">
                        Your array and string performance is improving. Your
                        biggest current gap is{" "}
                        <span className="font-medium text-purple-400">
              Dynamic Programming
            </span>
                        .
                    </p>

                    <div className="mt-5 rounded-xl border border-purple-500/10 bg-purple-500/[0.04] p-4">
                        <p className="text-xs leading-5 text-gray-500">
                            Recommendation
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                            Practice 2 DP problems every day for the next 7 days.
                        </p>
                    </div>
                </Card>
            </section>

            {/* Topic Progress */}
            <section className="mt-6">
                <Card>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="font-semibold text-white">
                                Topic Progress
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Your DSA topic mastery
                            </p>
                        </div>

                        <span className="text-xs text-purple-400">
              5 topics tracked
            </span>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {topics.map((topic) => (
                            <div
                                key={topic.name}
                                className="
                  rounded-xl border border-white/5
                  bg-white/[0.02] p-4
                  transition-all duration-200
                  hover:border-purple-500/20
                  hover:bg-white/[0.04]
                "
                            >
                                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">
                    {topic.name}
                  </span>

                                    <span className="text-xs text-gray-600">
                    {topic.solved}/{topic.total}
                  </span>
                                </div>

                                <div className="mt-4">
                                    <ProgressBar
                                        value={topic.progress}
                                        showValue
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Recommended Problems */}
            <section className="mt-6">
                <Card>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="font-semibold text-white">
                                Recommended Problems
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Selected based on your current progress
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex items-center gap-1 text-xs text-purple-400 transition hover:text-purple-300"
                        >
                            View all
                            <ArrowRight size={13} />
                        </button>
                    </div>

                    <div className="mt-5 space-y-3">
                        {problems.map((problem) => (
                            <div
                                key={problem.title}
                                className="
                  flex flex-col gap-4 rounded-xl
                  border border-white/5
                  bg-white/[0.02]
                  p-4
                  transition-all duration-200
                  hover:border-purple-500/20
                  hover:bg-white/[0.04]
                  sm:flex-row sm:items-center
                "
                            >
                                <div
                                    className={`
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    ${
                                        problem.completed
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-purple-500/10 text-purple-400"
                                    }
                  `}
                                >
                                    {problem.completed ? (
                                        <CheckCircle2 size={19} />
                                    ) : (
                                        <Code2 size={19} />
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-sm font-medium text-white">
                                        {problem.title}
                                    </h3>

                                    <div className="mt-1 flex flex-wrap gap-3">
                    <span className="text-xs text-gray-600">
                      {problem.topic}
                    </span>

                                        <span
                                            className={`
                        text-xs
                        ${
                                                problem.difficulty === "Easy"
                                                    ? "text-green-400"
                                                    : "text-yellow-400"
                                            }
                      `}
                                        >
                      {problem.difficulty}
                    </span>

                                        <span className="text-xs text-gray-600">
                      {problem.time}
                    </span>
                                    </div>
                                </div>

                                {problem.completed ? (
                                    <span className="flex items-center gap-1 text-xs text-green-400">
                    <CheckCircle2 size={14} />
                    Solved
                  </span>
                                ) : (
                                    <button
                                        type="button"
                                        className="
                      flex w-fit items-center gap-1
                      rounded-lg border border-purple-500/20
                      bg-purple-500/10
                      px-3 py-2
                      text-xs font-medium text-purple-400
                      transition
                      hover:bg-purple-500/20
                    "
                                    >
                                        Practice
                                        <ArrowRight size={13} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Locked AI Feature */}
            <section className="mt-6">
                <div
                    className="
            rounded-2xl border border-purple-500/10
            bg-gradient-to-r
            from-purple-500/[0.06]
            to-pink-500/[0.04]
            p-5
          "
                >
                    <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Trophy size={19} />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-sm font-semibold text-white">
                                        AI Interview Readiness
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Sakura will estimate your interview readiness
                                        from your DSA performance.
                                    </p>
                                </div>

                                <span className="flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-500">
                  <Lock size={11} />
                  AI Phase
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DSACoach;
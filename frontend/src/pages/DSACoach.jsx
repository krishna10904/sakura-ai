import { useEffect, useState } from "react";
import {
    Code2,
    CheckCircle2,
    Circle,
    Flame,
    Target,
    Sparkles,
} from "lucide-react";

import Card from "../components/Card.jsx";
import api from "../services/api.js";

const initialProblems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        topic: "Array",
        solved: false,
    },
    {
        id: 2,
        title: "Contains Duplicate",
        difficulty: "Easy",
        topic: "Array",
        solved: false,
    },
    {
        id: 3,
        title: "Valid Anagram",
        difficulty: "Easy",
        topic: "HashMap",
        solved: false,
    },
    {
        id: 4,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        topic: "Array",
        solved: false,
    },
    {
        id: 5,
        title: "Valid Parentheses",
        difficulty: "Easy",
        topic: "Stack",
        solved: false,
    },
];

function DSACoach() {
    const [problems, setProblems] = useState(initialProblems);
    const [loadingId, setLoadingId] = useState(null);
    const [loadingProblems, setLoadingProblems] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadSolvedProblems = async () => {
            try {
                setLoadingProblems(true);
                setError("");

                const response = await api.get("/dsa");

                if (response.data.success) {
                    const solvedIds = new Set(
                        response.data.solvedProblems.map(
                            (problem) => Number(problem.problemId)
                        )
                    );

                    setProblems(
                        initialProblems.map((problem) => ({
                            ...problem,
                            solved: solvedIds.has(problem.id),
                        }))
                    );
                }
            } catch (error) {
                console.error(
                    "Load DSA progress error:",
                    error
                );

                setError(
                    error.response?.data?.message ||
                    "Unable to load DSA progress"
                );
            } finally {
                setLoadingProblems(false);
            }
        };

        loadSolvedProblems();
    }, []);

    const solvedCount = problems.filter(
        (problem) => problem.solved
    ).length;

    const markAsSolved = async (id) => {
        const problem = problems.find(
            (item) => item.id === id
        );

        if (!problem || problem.solved) {
            return;
        }

        try {
            setLoadingId(id);
            setError("");

            const response = await api.post("/dsa", {
                problemId: problem.id,
                title: problem.title,
                difficulty: problem.difficulty,
                topic: problem.topic,
            });

            if (response.data.success) {
                setProblems((currentProblems) =>
                    currentProblems.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                solved: true,
                            }
                            : item
                    )
                );
            }
        } catch (error) {
            console.error(
                "DSA update error:",
                error
            );

            if (error.response?.status === 409) {
                setProblems((currentProblems) =>
                    currentProblems.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                solved: true,
                            }
                            : item
                    )
                );

                setError(
                    "This problem was already solved."
                );
            } else {
                setError(
                    error.response?.data?.message ||
                    "Unable to update DSA progress"
                );
            }
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">

            <div className="mb-8">

                <div className="flex items-center gap-2">
                    <Sparkles
                        size={17}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
                        AI DSA Coach
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Master DSA with{" "}
                    <span className="sakura-gradient-text">
                        Sakura
                    </span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                    Practice coding problems, track your progress,
                    and build strong problem-solving skills.
                </p>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                <Card>
                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Code2 size={20} />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">
                                Problems
                            </p>

                            <p className="mt-1 text-xl font-bold text-white">
                                {problems.length}
                            </p>
                        </div>

                    </div>
                </Card>

                <Card>
                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                            <CheckCircle2 size={20} />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">
                                Solved
                            </p>

                            <p className="mt-1 text-xl font-bold text-white">
                                {solvedCount}
                            </p>
                        </div>

                    </div>
                </Card>

                <Card>
                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                            <Flame size={20} />
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">
                                Practice Goal
                            </p>

                            <p className="mt-1 text-xl font-bold text-white">
                                {Math.min(solvedCount, 3)} / 3
                            </p>
                        </div>

                    </div>
                </Card>

            </div>

            {error && (
                <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                    {error}
                </div>
            )}

            <Card className="mt-6">

                <div className="flex items-center justify-between">

                    <div>
                        <h2 className="font-semibold text-white">
                            Today's Progress
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Keep solving to improve your DSA skills.
                        </p>
                    </div>

                    <Target
                        size={20}
                        className="text-purple-400"
                    />

                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">

                    <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500"
                        style={{
                            width: `${Math.min(
                                (solvedCount / 3) * 100,
                                100
                            )}%`,
                        }}
                    />

                </div>

                <p className="mt-2 text-xs text-gray-500">
                    {solvedCount} of 3 problems completed
                </p>

            </Card>

            <div className="mt-6">

                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-white">
                        Today's Problems
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Complete problems and track your progress.
                    </p>
                </div>

                {loadingProblems ? (
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center">
                        <p className="text-sm text-gray-400">
                            Loading your DSA progress...
                        </p>
                    </div>
                ) : (
                    <div className="space-y-3">

                        {problems.map((problem) => (

                            <div
                                key={problem.id}
                                className="group rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-purple-500/20 hover:bg-white/[0.04]"
                            >

                                <div className="flex items-center gap-4">

                                    <div>
                                        {problem.solved ? (
                                            <CheckCircle2
                                                size={22}
                                                className="text-green-400"
                                            />
                                        ) : (
                                            <Circle
                                                size={22}
                                                className="text-gray-600"
                                            />
                                        )}
                                    </div>

                                    <div className="min-w-0 flex-1">

                                        <h3
                                            className={`text-sm font-medium ${
                                                problem.solved
                                                    ? "text-gray-500 line-through"
                                                    : "text-white"
                                            }`}
                                        >
                                            {problem.title}
                                        </h3>

                                        <div className="mt-2 flex flex-wrap gap-2">

                                            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[11px] text-green-400">
                                                {problem.difficulty}
                                            </span>

                                            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] text-purple-400">
                                                {problem.topic}
                                            </span>

                                        </div>

                                    </div>

                                    {!problem.solved && (
                                        <button
                                            onClick={() =>
                                                markAsSolved(problem.id)
                                            }
                                            disabled={
                                                loadingId === problem.id
                                            }
                                            className="shrink-0 rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-400 transition hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            {loadingId === problem.id
                                                ? "Saving..."
                                                : "Mark Solved"}
                                        </button>
                                    )}

                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </div>

        </div>
    );
}

export default DSACoach;
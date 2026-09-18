import { useState } from "react";
import {
    BookOpen,
    Clock3,
    Target,
    Flame,
    CheckCircle2,
    Play,
    Sparkles,
    Brain,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Button from "../components/Button.jsx";

const subjects = [
    {
        name: "DSA",
        progress: 72,
        hours: "12.5h",
        color: "purple",
    },
    {
        name: "React",
        progress: 84,
        hours: "8.2h",
        color: "pink",
    },
    {
        name: "JavaScript",
        progress: 68,
        hours: "6.5h",
        color: "blue",
    },
    {
        name: "Japanese",
        progress: 45,
        hours: "4.8h",
        color: "green",
    },
];

const todayTasks = [
    {
        title: "Arrays & Hashing",
        type: "DSA",
        duration: "45 min",
        completed: true,
    },
    {
        title: "React Hooks Revision",
        type: "React",
        duration: "40 min",
        completed: false,
    },
    {
        title: "Japanese Vocabulary",
        type: "Japanese",
        duration: "25 min",
        completed: false,
    },
    {
        title: "JavaScript Promises",
        type: "JavaScript",
        duration: "35 min",
        completed: false,
    },
];

const recommendedTopics = [
    {
        title: "Binary Search",
        description:
            "Strengthen your understanding of searching in sorted arrays.",
        difficulty: "Medium",
    },
    {
        title: "React Performance",
        description:
            "Learn memoization and practical performance optimization.",
        difficulty: "Medium",
    },
    {
        title: "Async JavaScript",
        description:
            "Revise promises, async/await and error handling.",
        difficulty: "Easy",
    },
];

function StudyCoach() {
    const [tasks, setTasks] = useState(todayTasks);
    const [studyStarted, setStudyStarted] = useState(false);

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const toggleTask = (index) => {
        setTasks((currentTasks) =>
            currentTasks.map((task, taskIndex) =>
                taskIndex === index
                    ? {
                        ...task,
                        completed: !task.completed,
                    }
                    : task
            )
        );
    };

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">

            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <BookOpen
                        size={18}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                        Study Coach
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Learn{" "}
                    <span className="sakura-gradient-text">
            Smarter
          </span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Sakura creates a personalized learning path based on
                    your goals, progress and study patterns.
                </p>
            </div>

            {/* Top Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Today's Study
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                2.5h
                            </h2>

                            <p className="mt-2 text-xs text-green-400">
                                Goal: 4 hours
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Clock3 size={19} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Tasks Completed
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                {completedTasks}/{tasks.length}
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                Today's plan
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                            <CheckCircle2 size={19} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Current Streak
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                12 days
                            </h2>

                            <p className="mt-2 flex items-center gap-1 text-xs text-orange-400">
                                <Flame size={13} />
                                Keep going!
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                            <Flame size={19} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Overall Progress
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                67%
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                Across all subjects
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <Target size={19} />
                        </div>
                    </div>
                </Card>

            </section>

            {/* Today's Plan + AI Insight */}
            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* Today's Plan */}
                <Card className="xl:col-span-2">

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                <CalendarDays size={21} />
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    Today's Study Plan
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Personalized tasks generated by Sakura
                                </p>
                            </div>

                        </div>

                        <span className="w-fit rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs text-purple-400">
              {completedTasks}/{tasks.length} completed
            </span>

                    </div>

                    <div className="mt-6 space-y-3">

                        {tasks.map((task, index) => (

                            <button
                                key={task.title}
                                type="button"
                                onClick={() => toggleTask(index)}
                                className={`
                  flex w-full items-center gap-4
                  rounded-xl border p-4
                  text-left
                  transition-all duration-200
                  ${
                                    task.completed
                                        ? "border-green-500/10 bg-green-500/[0.03]"
                                        : "border-white/5 bg-white/[0.02] hover:border-purple-500/20 hover:bg-white/[0.04]"
                                }
                `}
                            >

                                <div
                                    className={`
                    flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                    ${
                                        task.completed
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-purple-500/10 text-purple-400"
                                    }
                  `}
                                >
                                    {task.completed ? (
                                        <CheckCircle2 size={18} />
                                    ) : (
                                        <BookOpen size={18} />
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">

                                    <h3
                                        className={`
                      text-sm font-medium
                      ${
                                            task.completed
                                                ? "text-gray-500 line-through"
                                                : "text-white"
                                        }
                    `}
                                    >
                                        {task.title}
                                    </h3>

                                    <div className="mt-1 flex items-center gap-2">

                    <span className="text-xs text-gray-600">
                      {task.type}
                    </span>

                                        <span className="text-gray-700">
                      •
                    </span>

                                        <span className="text-xs text-gray-600">
                      {task.duration}
                    </span>

                                    </div>

                                </div>

                                {!task.completed && (
                                    <ArrowRight
                                        size={16}
                                        className="text-gray-600"
                                    />
                                )}

                            </button>

                        ))}

                    </div>

                    <div className="mt-5">

                        <Button
                            icon={Play}
                            onClick={() =>
                                setStudyStarted(!studyStarted)
                            }
                        >
                            {studyStarted
                                ? "Study Session Active"
                                : "Start Study Session"}
                        </Button>

                    </div>

                </Card>

                {/* AI Insight */}
                <Card className="relative overflow-hidden">

                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300">
                                <Sparkles size={20} />
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    Sakura's Insight
                                </h2>

                                <p className="mt-1 text-xs text-gray-600">
                                    AI Study Analysis
                                </p>
                            </div>

                        </div>

                        <p className="mt-5 text-sm leading-6 text-gray-400">
                            Your frontend progress is strong. Sakura recommends
                            spending today's focused session on DSA and
                            JavaScript fundamentals.
                        </p>

                        <div className="mt-5 rounded-xl border border-purple-500/10 bg-purple-500/[0.04] p-4">

                            <div className="flex items-center gap-2">
                                <Brain
                                    size={15}
                                    className="text-purple-400"
                                />

                                <p className="text-xs font-medium text-purple-300">
                                    Recommended Focus
                                </p>
                            </div>

                            <p className="mt-2 text-sm font-medium text-white">
                                DSA + JavaScript
                            </p>

                            <p className="mt-1 text-xs leading-5 text-gray-600">
                                Strengthening these areas can improve your
                                technical interview preparation.
                            </p>

                        </div>

                    </div>

                </Card>

            </section>

            {/* Subject Progress */}
            <section className="mt-6">

                <Card>

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <Target size={21} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Subject Progress
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Track your progress across important skills.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

                        {subjects.map((subject) => (

                            <div
                                key={subject.name}
                                className="
                  rounded-xl border border-white/5
                  bg-white/[0.02] p-4
                "
                            >

                                <div className="flex items-center justify-between">

                                    <div>
                                        <h3 className="text-sm font-medium text-white">
                                            {subject.name}
                                        </h3>

                                        <p className="mt-1 text-xs text-gray-600">
                                            {subject.hours} studied
                                        </p>
                                    </div>

                                    <span className="text-sm font-semibold text-purple-300">
                    {subject.progress}%
                  </span>

                                </div>

                                <div className="mt-4">

                                    <ProgressBar
                                        value={subject.progress}
                                        showValue={false}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </Card>

            </section>

            {/* Recommended Learning */}
            <section className="mt-6">

                <Card>

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Brain size={21} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Recommended Learning
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Topics Sakura thinks you should study next.
                            </p>
                        </div>

                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">

                        {recommendedTopics.map((topic) => (

                            <div
                                key={topic.title}
                                className="
                  rounded-xl border border-white/5
                  bg-white/[0.02] p-5
                  transition-all duration-200
                  hover:border-purple-500/20
                  hover:bg-white/[0.04]
                "
                            >

                                <div className="flex items-start justify-between gap-3">

                                    <h3 className="text-sm font-semibold text-white">
                                        {topic.title}
                                    </h3>

                                    <span
                                        className="
                      shrink-0 rounded-full
                      bg-purple-500/10
                      px-2.5 py-1
                      text-[10px]
                      text-purple-300
                    "
                                    >
                    {topic.difficulty}
                  </span>

                                </div>

                                <p className="mt-3 text-xs leading-5 text-gray-600">
                                    {topic.description}
                                </p>

                                <button
                                    type="button"
                                    className="
                    mt-4 flex items-center gap-2
                    text-xs font-medium
                    text-purple-400
                    transition
                    hover:text-purple-300
                  "
                                >
                                    Start Learning
                                    <ArrowRight size={14} />
                                </button>

                            </div>

                        ))}

                    </div>

                </Card>

            </section>

            {/* Weekly Goal */}
            <section className="mt-6">

                <div
                    className="
            relative overflow-hidden rounded-2xl
            border border-purple-500/10
            bg-gradient-to-r
            from-purple-500/[0.06]
            to-pink-500/[0.04]
            p-5 sm:p-6
          "
                >

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Target size={21} />
                        </div>

                        <div className="flex-1">

                            <h2 className="font-semibold text-white">
                                Weekly Study Goal
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                You're making progress toward your weekly target.
                            </p>

                            <div className="mt-4 max-w-xl">
                                <ProgressBar
                                    value={61}
                                    label="15.2 / 25 hours"
                                />
                            </div>

                        </div>

                        <div className="text-left sm:text-right">

                            <p className="text-2xl font-bold text-white">
                                61%
                            </p>

                            <p className="mt-1 text-xs text-gray-600">
                                9.8h remaining
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default StudyCoach;
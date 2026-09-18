import {
    Clock3,
    Code2,
    Target,
    BookOpen,
    ArrowRight,
    Flame,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

import StatCard from "../components/StatCard.jsx";
import Card from "../components/Card.jsx";
import GlassCard from "../components/GlassCard.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Button from "../components/Button.jsx";

function Dashboard() {
    const tasks = [
        {
            title: "Solve 3 DSA problems",
            category: "DSA",
            completed: false,
        },
        {
            title: "Complete React revision",
            category: "Frontend",
            completed: false,
        },
        {
            title: "Practice Japanese N5 vocabulary",
            category: "Japan",
            completed: true,
        },
    ];

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">

            {/* ================= HEADER ================= */}

            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <Sparkles
                        size={17}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
                        Your Workspace
                    </p>
                </div>

                <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Good evening,{" "}
                            <span className="sakura-gradient-text">
                Krishna
              </span>{" "}
                            👋
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                            Here's your progress and what needs your attention today.
                        </p>
                    </div>

                    {/* Streak */}
                    <div
                        className="
              flex w-fit items-center gap-3
              rounded-xl border border-orange-500/10
              bg-orange-500/[0.05]
              px-4 py-3
            "
                    >
                        <Flame
                            size={20}
                            className="text-orange-400"
                        />

                        <div>
                            <p className="text-xs text-gray-500">
                                Current streak
                            </p>

                            <p className="text-sm font-semibold text-white">
                                12 days 🔥
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= STATS ================= */}

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Study Hours"
                    value="24.5h"
                    subtitle="+12% this week"
                    icon={Clock3}
                    progress={72}
                />

                <StatCard
                    title="DSA Problems"
                    value="87"
                    subtitle="+8 this week"
                    icon={Code2}
                    progress={58}
                />

                <StatCard
                    title="Career Progress"
                    value="64%"
                    subtitle="+6% this month"
                    icon={Target}
                    progress={64}
                />

                <StatCard
                    title="Study Streak"
                    value="12 days"
                    subtitle="Personal best"
                    icon={BookOpen}
                    progress={80}
                />

            </section>

            {/* ================= AI INSIGHT + WEEKLY ================= */}

            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* AI INSIGHT */}

                <GlassCard
                    glow
                    className="xl:col-span-2"
                >
                    <div className="p-6 sm:p-7">

                        <div className="flex items-start justify-between gap-4">

                            <div className="flex items-center gap-3">

                                <div
                                    className="
                    flex h-11 w-11 shrink-0
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
                                    <h2 className="font-semibold text-white">
                                        Sakura's Insight
                                    </h2>

                                    <p className="mt-0.5 text-xs text-gray-500">
                                        Personalized AI analysis
                                    </p>
                                </div>

                            </div>

                            <Sparkles
                                size={18}
                                className="sakura-pulse text-purple-400"
                            />

                        </div>

                        <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                            Your DSA consistency has improved this week.
                            You're solving more problems, but Dynamic
                            Programming accuracy still needs attention.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">

                            <Button icon={ArrowRight}>
                                View DSA Analysis
                            </Button>

                            <Button variant="secondary">
                                Ask Sakura
                            </Button>

                        </div>

                    </div>
                </GlassCard>

                {/* WEEKLY PROGRESS */}

                <Card>

                    <div className="flex items-center justify-between">

                        <div>
                            <h2 className="font-semibold text-white">
                                Weekly Progress
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Your activity this week
                            </p>
                        </div>

                        <div
                            className="
                flex h-9 w-9
                items-center justify-center
                rounded-lg
                bg-purple-500/10
                text-purple-400
              "
                        >
                            <Target size={17} />
                        </div>

                    </div>

                    <div className="mt-6 space-y-5">

                        <ProgressBar
                            label="DSA"
                            value={72}
                        />

                        <ProgressBar
                            label="React"
                            value={84}
                        />

                        <ProgressBar
                            label="JavaScript"
                            value={68}
                        />

                        <ProgressBar
                            label="Japanese"
                            value={45}
                        />

                    </div>

                </Card>

            </section>

            {/* ================= TODAY'S TASKS ================= */}

            <section className="mt-6">

                <Card>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <h2 className="font-semibold text-white">
                                Today's Tasks
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Keep your momentum going
                            </p>
                        </div>

                        <span
                            className="
                w-fit rounded-full
                border border-purple-500/20
                bg-purple-500/10
                px-3 py-1
                text-xs font-medium
                text-purple-400
              "
                        >
              2 remaining
            </span>

                    </div>

                    <div className="mt-5 space-y-3">

                        {tasks.map((task) => (

                            <div
                                key={task.title}
                                className="
                  group flex items-center gap-3
                  rounded-xl
                  border border-white/5
                  bg-white/[0.02]
                  p-3
                  transition-all duration-200
                  hover:border-purple-500/20
                  hover:bg-white/[0.04]
                  sm:p-4
                "
                            >

                                {/* Checkbox */}

                                <div
                                    className={`
                    flex h-5 w-5 shrink-0
                    items-center justify-center
                    rounded-full border
                    transition-all
                    ${
                                        task.completed
                                            ? "border-green-500/40 bg-green-500/10 text-green-400"
                                            : "border-gray-600 group-hover:border-purple-400"
                                    }
                  `}
                                >
                                    {task.completed && (
                                        <CheckCircle2 size={14} />
                                    )}
                                </div>

                                {/* Task */}

                                <div className="min-w-0 flex-1">

                                    <p
                                        className={`
                      text-sm transition
                      ${
                                            task.completed
                                                ? "text-gray-600 line-through"
                                                : "text-gray-300 group-hover:text-white"
                                        }
                    `}
                                    >
                                        {task.title}
                                    </p>

                                    <p className="mt-1 text-xs text-gray-600">
                                        {task.category}
                                    </p>

                                </div>

                                {/* Arrow */}

                                {!task.completed && (
                                    <ArrowRight
                                        size={16}
                                        className="
                      text-gray-700
                      transition-all
                      group-hover:translate-x-1
                      group-hover:text-purple-400
                    "
                                    />
                                )}

                            </div>

                        ))}

                    </div>

                </Card>

            </section>

            {/* ================= QUICK ACTIONS ================= */}

            <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

                <GlassCard>
                    <div className="p-5">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Code2 size={19} />
                        </div>

                        <h3 className="mt-4 text-sm font-semibold text-white">
                            Practice DSA
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Continue today's coding practice.
                        </p>

                        <button
                            className="
                mt-4 flex items-center gap-2
                text-xs font-medium
                text-purple-400
                transition
                hover:text-purple-300
              "
                        >
                            Start practice
                            <ArrowRight size={14} />
                        </button>

                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="p-5">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <BookOpen size={19} />
                        </div>

                        <h3 className="mt-4 text-sm font-semibold text-white">
                            Study Coach
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Continue your personalized study plan.
                        </p>

                        <button
                            className="
                mt-4 flex items-center gap-2
                text-xs font-medium
                text-pink-400
                transition
                hover:text-pink-300
              "
                        >
                            Open study plan
                            <ArrowRight size={14} />
                        </button>

                    </div>
                </GlassCard>

                <GlassCard>
                    <div className="p-5">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                            <Target size={19} />
                        </div>

                        <h3 className="mt-4 text-sm font-semibold text-white">
                            Career Copilot
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Check your career roadmap and skill gaps.
                        </p>

                        <button
                            className="
                mt-4 flex items-center gap-2
                text-xs font-medium
                text-blue-400
                transition
                hover:text-blue-300
              "
                        >
                            View roadmap
                            <ArrowRight size={14} />
                        </button>

                    </div>
                </GlassCard>

            </section>

        </div>
    );
}

export default Dashboard;
import {
    BarChart3,
    Clock3,
    Code2,
    BookOpen,
    Mic,
    BriefcaseBusiness,
    Languages,
    TrendingUp,
    Target,
    Sparkles,
} from "lucide-react";

import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

const weeklyActivity = [
    { day: "Mon", hours: 3.2 },
    { day: "Tue", hours: 4.1 },
    { day: "Wed", hours: 2.8 },
    { day: "Thu", hours: 5.0 },
    { day: "Fri", hours: 3.7 },
    { day: "Sat", hours: 4.5 },
    { day: "Sun", hours: 1.2 },
];

const moduleProgress = [
    {
        name: "DSA",
        progress: 72,
        icon: Code2,
    },
    {
        name: "React",
        progress: 84,
        icon: BookOpen,
    },
    {
        name: "Career",
        progress: 64,
        icon: BriefcaseBusiness,
    },
    {
        name: "Interview",
        progress: 48,
        icon: Mic,
    },
    {
        name: "Japanese",
        progress: 45,
        icon: Languages,
    },
];

function Analytics() {
    const totalHours = weeklyActivity.reduce(
        (total, item) => total + item.hours,
        0
    );

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <BarChart3
                        size={18}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                        Analytics
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Your{" "}
                    <span className="sakura-gradient-text">
            Progress
          </span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Understand your learning patterns, career progress and
                    interview readiness with Sakura's analytics.
                </p>
            </div>

            {/* Overview Stats */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Study Hours
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                24.5h
                            </h2>

                            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
                                <TrendingUp size={13} />
                                +12% this week
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
                                DSA Solved
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                87
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                8 this week
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <Code2 size={19} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Interview Score
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                76%
                            </h2>

                            <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
                                <TrendingUp size={13} />
                                +8% this month
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                            <Mic size={19} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                Career Progress
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                64%
                            </h2>

                            <p className="mt-2 text-xs text-gray-600">
                                3 skill gaps remaining
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                            <Target size={19} />
                        </div>
                    </div>
                </Card>
            </section>

            {/* Weekly Activity + Module Progress */}
            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* Activity Chart */}
                <Card className="xl:col-span-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="font-semibold text-white">
                                Weekly Activity
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Study time over the last 7 days
                            </p>
                        </div>

                        <div className="rounded-xl bg-purple-500/10 px-3 py-2">
                            <p className="text-xs text-gray-500">
                                Total
                            </p>

                            <p className="text-sm font-semibold text-purple-300">
                                {totalHours.toFixed(1)}h
                            </p>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="mt-8 flex h-56 items-end justify-between gap-2 sm:gap-4">
                        {weeklyActivity.map((item) => {
                            const height = `${(item.hours / 5) * 100}%`;

                            return (
                                <div
                                    key={item.day}
                                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                                >
                                    <div className="flex h-full w-full items-end justify-center">
                                        <div
                                            className="
                        group relative w-full max-w-10
                        rounded-t-lg
                        bg-gradient-to-t
                        from-purple-600
                        to-pink-400
                        opacity-80
                        transition-all duration-300
                        hover:opacity-100
                      "
                                            style={{ height }}
                                        >
                                            <div
                                                className="
                          absolute -top-7 left-1/2
                          -translate-x-1/2
                          rounded-md bg-[#181824]
                          px-2 py-1
                          text-[10px] text-gray-300
                          opacity-0
                          transition
                          group-hover:opacity-100
                        "
                                            >
                                                {item.hours}h
                                            </div>
                                        </div>
                                    </div>

                                    <span className="text-xs text-gray-600">
                    {item.day}
                  </span>
                                </div>
                            );
                        })}
                    </div>
                </Card>

                {/* Module Progress */}
                <Card>
                    <div>
                        <h2 className="font-semibold text-white">
                            Module Progress
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Current progress across Sakura
                        </p>
                    </div>

                    <div className="mt-6 space-y-5">
                        {moduleProgress.map((module) => {
                            const Icon = module.icon;

                            return (
                                <div key={module.name}>
                                    <div className="mb-2 flex items-center gap-2">
                                        <Icon
                                            size={15}
                                            className="text-purple-400"
                                        />

                                        <span className="flex-1 text-sm text-gray-400">
                      {module.name}
                    </span>

                                        <span className="text-xs text-gray-600">
                      {module.progress}%
                    </span>
                                    </div>

                                    <ProgressBar
                                        value={module.progress}
                                        showValue={false}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </section>

            {/* Learning Breakdown */}
            <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <BookOpen size={19} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Learning Breakdown
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Where your study time is going
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  DSA
                </span>

                                <span className="text-xs text-gray-600">
                  9.5h
                </span>
                            </div>

                            <ProgressBar
                                value={78}
                                showValue={false}
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  React / JavaScript
                </span>

                                <span className="text-xs text-gray-600">
                  7.2h
                </span>
                            </div>

                            <ProgressBar
                                value={60}
                                showValue={false}
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  Japanese
                </span>

                                <span className="text-xs text-gray-600">
                  4.8h
                </span>
                            </div>

                            <ProgressBar
                                value={40}
                                showValue={false}
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  Career
                </span>

                                <span className="text-xs text-gray-600">
                  3.0h
                </span>
                            </div>

                            <ProgressBar
                                value={25}
                                showValue={false}
                            />
                        </div>
                    </div>
                </Card>

                {/* Goals */}
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <Target size={19} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Current Goals
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Progress toward your major targets
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-5">
                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  Solve 100 DSA Problems
                </span>

                                <span className="text-xs text-purple-400">
                  87/100
                </span>
                            </div>

                            <ProgressBar
                                value={87}
                                showValue={false}
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  Build 2 Major Projects
                </span>

                                <span className="text-xs text-purple-400">
                  1/2
                </span>
                            </div>

                            <ProgressBar
                                value={50}
                                showValue={false}
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between">
                <span className="text-sm text-gray-400">
                  Japanese N4 Preparation
                </span>

                                <span className="text-xs text-purple-400">
                  45%
                </span>
                            </div>

                            <ProgressBar
                                value={45}
                                showValue={false}
                            />
                        </div>
                    </div>
                </Card>
            </section>

            {/* AI Insights */}
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

                    <div className="relative flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <Sparkles size={20} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Sakura's Weekly Insight
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                Your activity is strongest in DSA and frontend
                                development. Maintaining consistent study sessions
                                while increasing Japanese practice can help keep
                                your different goals moving together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement */}
            <section className="mt-6">
                <Card>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                                🏆
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    12 Day Learning Streak
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Keep the momentum going!
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-green-400">
                            <TrendingUp size={14} />
                            Personal best
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}

export default Analytics;
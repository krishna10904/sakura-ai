import {
    BookOpen,
    Code2,
    CheckCircle,
    TrendingUp,
} from "lucide-react";

function Dashboard() {
    return (
        <div className="min-h-screen p-8 text-white">

            {/* Header */}
            <div className="mb-8">
                <p className="text-sm text-gray-500">
                    Monday, September 14
                </p>

                <h1 className="mt-2 text-3xl font-bold">
                    Good Evening 👋
                </h1>

                <p className="mt-2 text-gray-400">
                    Let's make today productive with Sakura AI.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                <StatCard
                    icon={<BookOpen size={22} />}
                    title="Study Time"
                    value="3.5h"
                    subtitle="Today's learning"
                />

                <StatCard
                    icon={<Code2 size={22} />}
                    title="DSA Solved"
                    value="8"
                    subtitle="Problems today"
                />

                <StatCard
                    icon={<CheckCircle size={22} />}
                    title="Tasks"
                    value="6 / 8"
                    subtitle="Completed today"
                />

            </div>

            {/* AI Insight + Progress */}
            <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

                {/* AI Insight */}
                <div className="rounded-2xl border border-white/10 bg-[#101018] p-6">

                    <div className="flex items-center gap-3">
                        <div className="text-2xl">
                            🌸
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                Sakura AI Insight
                            </h2>

                            <p className="text-xs text-gray-500">
                                Personalized recommendation
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 leading-relaxed text-gray-300">
                        You're making good progress this week.
                        Focus on JavaScript and DSA today to
                        strengthen your placement preparation.
                    </p>

                    <button className="mt-5 rounded-lg bg-purple-500/20 px-4 py-2 text-sm text-purple-300 transition hover:bg-purple-500/30">
                        View Recommendation →
                    </button>

                </div>

                {/* Weekly Progress */}
                <div className="rounded-2xl border border-white/10 bg-[#101018] p-6">

                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">
                            Weekly Progress
                        </h2>

                        <span className="text-sm text-gray-400">
              82%
            </span>
                    </div>

                    <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full bg-purple-500"
                            style={{ width: "82%" }}
                        />
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                        <TrendingUp size={17} />
                        You're improving consistently.
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">

                        <div className="rounded-xl bg-white/5 p-3">
                            <p className="text-lg font-semibold">
                                18h
                            </p>
                            <p className="text-xs text-gray-500">
                                Study
                            </p>
                        </div>

                        <div className="rounded-xl bg-white/5 p-3">
                            <p className="text-lg font-semibold">
                                32
                            </p>
                            <p className="text-xs text-gray-500">
                                DSA
                            </p>
                        </div>

                        <div className="rounded-xl bg-white/5 p-3">
                            <p className="text-lg font-semibold">
                                24
                            </p>
                            <p className="text-xs text-gray-500">
                                Tasks
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            {/* Today's Tasks */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#101018] p-6">

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold">
                            Today's Tasks
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            Keep your momentum going
                        </p>
                    </div>

                    <span className="text-sm text-gray-500">
            6/8 completed
          </span>
                </div>

                <div className="mt-6 space-y-4">

                    <Task
                        text="React practice"
                        completed={true}
                    />

                    <Task
                        text="DSA Arrays — 5 problems"
                    />

                    <Task
                        text="JavaScript revision"
                    />

                    <Task
                        text="Japanese vocabulary"
                    />

                </div>

            </div>

        </div>
    );
}


/* Stat Card */
function StatCard({
                      icon,
                      title,
                      value,
                      subtitle,
                  }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#101018] p-5 transition hover:border-purple-500/30">

            <div className="mb-4 text-purple-400">
                {icon}
            </div>

            <p className="text-sm text-gray-500">
                {title}
            </p>

            <h2 className="mt-1 text-2xl font-bold">
                {value}
            </h2>

            <p className="mt-1 text-xs text-gray-600">
                {subtitle}
            </p>

        </div>
    );
}


/* Task */
function Task({
                  text,
                  completed = false,
              }) {
    return (
        <div className="flex items-center gap-3">

            <div
                className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                    completed
                        ? "border-purple-500 bg-purple-500"
                        : "border-white/20"
                }`}
            >
                {completed && (
                    <CheckCircle
                        size={14}
                        className="text-white"
                    />
                )}
            </div>

            <span
                className={
                    completed
                        ? "text-gray-500 line-through"
                        : "text-gray-300"
                }
            >
        {text}
      </span>

        </div>
    );
}

export default Dashboard;
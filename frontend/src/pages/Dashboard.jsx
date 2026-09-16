import {
    Clock3,
    Code2,
    Target,
    BookOpen,
} from "lucide-react";

import StatCard from "../components/StatCard.jsx";
import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Button from "../components/Button.jsx";

function Dashboard() {
    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">

            {/* =========================
          Header
      ========================= */}

            <div className="mb-8">

                <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                    Your workspace
                </p>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Good evening,{" "}
                    <span className="sakura-gradient-text">
            Krishna
          </span>{" "}
                    👋
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Here's your progress and what needs your
                    attention today.
                </p>

            </div>

            {/* =========================
          Stats
      ========================= */}

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

            {/* =========================
          Main Content
      ========================= */}

            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

                {/* AI Insight */}

                <Card className="relative overflow-hidden xl:col-span-2">

                    {/* Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

                    <div className="relative">

                        {/* Title */}

                        <div className="flex items-center gap-3">

                            <div className="sakura-glow flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-xl">
                                🌸
                            </div>

                            <div>

                                <h2 className="font-semibold text-white">
                                    Sakura's Insight
                                </h2>

                                <p className="mt-0.5 text-xs text-gray-500">
                                    Personalized for you
                                </p>

                            </div>

                        </div>

                        {/* Content */}

                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                            Your DSA consistency has improved this
                            week. You are solving more problems, but
                            your dynamic programming accuracy still
                            needs work.
                        </p>

                        {/* Button */}

                        <div className="mt-5">
                            <Button>
                                View DSA Analysis →
                            </Button>
                        </div>

                    </div>

                </Card>

                {/* Weekly Progress */}

                <Card>

                    <h2 className="font-semibold text-white">
                        Weekly Progress
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        Your activity this week
                    </p>

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

            {/* =========================
          Today's Tasks
      ========================= */}

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

                        <span className="w-fit rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
              3 remaining
            </span>

                    </div>

                    <div className="mt-5 space-y-3">

                        {[
                            "Solve 3 DSA problems",
                            "Complete React revision",
                            "Practice Japanese N5 vocabulary",
                        ].map((task) => (

                            <div
                                key={task}
                                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:border-purple-500/20 hover:bg-white/[0.04] sm:p-4"
                            >

                                <div className="h-4 w-4 shrink-0 rounded-full border border-gray-600 transition group-hover:border-purple-400" />

                                <span className="text-sm text-gray-300 transition group-hover:text-white">
                  {task}
                </span>

                            </div>

                        ))}

                    </div>

                </Card>

            </section>

        </div>
    );
}

export default Dashboard;
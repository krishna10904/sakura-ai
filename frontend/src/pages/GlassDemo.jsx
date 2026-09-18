import {
    Sparkles,
    Brain,
    Target,
    Zap,
} from "lucide-react";

import GlassCard from "../components/GlassCard.jsx";

function GlassDemo() {
    const features = [
        {
            title: "AI Intelligence",
            description:
                "Sakura understands your goals and provides personalized guidance.",
            icon: Brain,
        },
        {
            title: "Smart Goals",
            description:
                "Track your career, study and development goals in one place.",
            icon: Target,
        },
        {
            title: "Fast Insights",
            description:
                "Get useful insights from your activity and progress.",
            icon: Zap,
        },
    ];

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <Sparkles
                        size={17}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400">
                        Sakura UI
                    </p>
                </div>

                <h1 className="mt-2 text-3xl font-bold text-white">
                    Glassmorphism
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                    A reusable glass-style UI system for Sakura AI.
                </p>
            </div>

            {/* Hero Glass Card */}
            <GlassCard
                glow
                className="mb-6 p-6 sm:p-8"
            >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div
                        className="
              flex h-16 w-16 shrink-0
              items-center justify-center
              rounded-2xl
              bg-gradient-to-br
              from-pink-500/20
              to-purple-500/20
              text-2xl
              shadow-lg
              shadow-purple-500/10
            "
                    >
                        🌸
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-purple-400">
                            Sakura AI
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-white">
                            Your AI Life Copilot
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                            One intelligent workspace for studying, coding,
                            career preparation and your Japan journey.
                        </p>
                    </div>
                </div>
            </GlassCard>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <GlassCard
                            key={feature.title}
                            className="p-5"
                        >
                            <div
                                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-purple-500/10
                  text-purple-400
                "
                            >
                                <Icon size={21} />
                            </div>

                            <h3 className="mt-5 font-semibold text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                {feature.description}
                            </p>
                        </GlassCard>
                    );
                })}
            </div>
        </div>
    );
}

export default GlassDemo;
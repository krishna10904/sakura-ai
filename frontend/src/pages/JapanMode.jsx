import { useState } from "react";
import {
    Languages,
    BriefcaseBusiness,
    BookOpen,
    MessageCircle,
    Target,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    MapPin,
} from "lucide-react";

import Card from "../components/Card.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import Button from "../components/Button.jsx";

const goals = [
    {
        title: "Japanese Language",
        progress: 45,
        current: "N5 → N4",
        icon: Languages,
    },
    {
        title: "Technical Skills",
        progress: 68,
        current: "Full Stack",
        icon: Target,
    },
    {
        title: "Interview Preparation",
        progress: 32,
        current: "Getting Started",
        icon: MessageCircle,
    },
];

const japaneseTopics = [
    {
        title: "Self Introduction",
        japanese: "自己紹介",
        level: "N5",
        completed: true,
    },
    {
        title: "Workplace Vocabulary",
        japanese: "職場の言葉",
        level: "N4",
        completed: false,
    },
    {
        title: "Business Communication",
        japanese: "ビジネス会話",
        level: "N4",
        completed: false,
    },
];

function JapanMode() {
    const [jobDescription, setJobDescription] = useState("");
    const [analyzed, setAnalyzed] = useState(false);

    const handleAnalyze = (event) => {
        event.preventDefault();

        if (!jobDescription.trim()) {
            return;
        }

        setAnalyzed(true);
    };

    return (
        <div className="min-h-full bg-[#09090f] p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-lg">🇯🇵</span>

                    <p className="text-xs font-medium uppercase tracking-widest text-pink-400 sm:text-sm">
                        Japan Mode
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Your Japan{" "}
                    <span className="sakura-gradient-text">
            Career Journey
          </span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Prepare for Japanese tech opportunities with language
                    practice, career preparation and Japan-specific job
                    analysis.
                </p>
            </div>

            {/* Japan Goal Banner */}
            <section className="mb-6">
                <div
                    className="
            relative overflow-hidden rounded-2xl
            border border-pink-500/10
            bg-gradient-to-r
            from-pink-500/[0.07]
            via-purple-500/[0.05]
            to-transparent
            p-5 sm:p-6
          "
                >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div
                            className="
                flex h-14 w-14 shrink-0
                items-center justify-center
                rounded-2xl
                bg-white/[0.05]
                text-2xl
                shadow-lg
                shadow-pink-500/10
              "
                        >
                            🌸
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <MapPin
                                    size={14}
                                    className="text-pink-400"
                                />

                                <span className="text-xs font-medium uppercase tracking-wider text-pink-400">
                  Target
                </span>
                            </div>

                            <h2 className="mt-1 text-xl font-bold text-white">
                                Japan Tech Career
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Build technical skills + Japanese communication
                                skills for your target career path.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                            <p className="text-xs text-gray-600">
                                Overall Progress
                            </p>

                            <p className="mt-1 text-2xl font-bold text-white">
                                51%
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Goal Cards */}
            <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {goals.map((goal) => {
                    const Icon = goal.icon;

                    return (
                        <Card key={goal.title}>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        {goal.title}
                                    </p>

                                    <h2 className="mt-2 text-xl font-bold text-white">
                                        {goal.current}
                                    </h2>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                    <Icon size={19} />
                                </div>
                            </div>

                            <div className="mt-5">
                                <ProgressBar
                                    value={goal.progress}
                                    label="Progress"
                                />
                            </div>
                        </Card>
                    );
                })}
            </section>

            {/* Main Section */}
            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
                {/* Japanese Learning */}
                <Card className="xl:col-span-2">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                                <BookOpen size={21} />
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    Japanese Learning
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Build practical Japanese for work and daily
                                    communication.
                                </p>
                            </div>
                        </div>

                        <span className="w-fit rounded-full border border-pink-500/10 bg-pink-500/5 px-3 py-1 text-xs text-pink-400">
              N5 → N4
            </span>
                    </div>

                    <div className="mt-6 space-y-3">
                        {japaneseTopics.map((topic) => (
                            <div
                                key={topic.title}
                                className="
                  flex flex-col gap-3 rounded-xl
                  border border-white/5
                  bg-white/[0.02]
                  p-4
                  transition-all duration-200
                  hover:border-pink-500/20
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
                                        topic.completed
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-pink-500/10 text-pink-400"
                                    }
                  `}
                                >
                                    {topic.completed ? (
                                        <CheckCircle2 size={18} />
                                    ) : (
                                        <Languages size={18} />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-white">
                                        {topic.title}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-600">
                                        {topic.japanese}
                                    </p>
                                </div>

                                <span className="w-fit rounded-full bg-white/5 px-3 py-1 text-xs text-gray-500">
                  {topic.level}
                </span>

                                {topic.completed && (
                                    <span className="text-xs text-green-400">
                    Completed
                  </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        <Button
                            icon={ArrowRight}
                            variant="secondary"
                        >
                            Continue Japanese Practice
                        </Button>
                    </div>
                </Card>

                {/* Sakura Japan Insight */}
                <Card className="relative overflow-hidden">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pink-500/10 blur-3xl" />

                    <div className="relative">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-xl">
                                🌸
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    Sakura's Insight
                                </h2>

                                <p className="mt-1 text-xs text-gray-600">
                                    Japan preparation
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-sm leading-6 text-gray-400">
                            Focus on practical Japanese communication alongside
                            your technical preparation. Learn phrases that are
                            useful in interviews, meetings and workplace
                            situations.
                        </p>

                        <div className="mt-5 rounded-xl border border-pink-500/10 bg-pink-500/[0.04] p-4">
                            <p className="text-xs text-gray-600">
                                Today's focus
                            </p>

                            <p className="mt-1 text-sm font-medium text-pink-300">
                                Practice your Japanese self-introduction.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Job Description Analyzer */}
            <section className="mt-6">
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <BriefcaseBusiness size={21} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Japan Job Analyzer
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Paste a Japanese or English job description.
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleAnalyze}
                        className="mt-6"
                    >
            <textarea
                value={jobDescription}
                onChange={(event) =>
                    setJobDescription(event.target.value)
                }
                rows={7}
                placeholder="Paste Japanese or English job description here..."
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

                        <div className="mt-4 flex justify-end">
                            <Button
                                type="submit"
                                icon={Sparkles}
                                disabled={!jobDescription.trim()}
                            >
                                Analyze Japan Job
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>

            {/* Analysis Result */}
            {analyzed && (
                <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                <CheckCircle2 size={19} />
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    Detected Requirements
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Skills identified from the job description.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {[
                                "React",
                                "JavaScript",
                                "TypeScript",
                                "AWS",
                                "Japanese",
                                "Git",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="
                    rounded-full border border-green-500/10
                    bg-green-500/[0.04]
                    px-3 py-1.5
                    text-xs text-green-300
                  "
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                <Target size={19} />
                            </div>

                            <div>
                                <h2 className="font-semibold text-white">
                                    Preparation Focus
                                </h2>

                                <p className="mt-1 text-xs text-gray-500">
                                    Areas to focus on for this opportunity.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-3">
                            {[
                                "Improve Japanese workplace vocabulary",
                                "Strengthen TypeScript fundamentals",
                                "Build an AWS deployment project",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="
                    flex items-center gap-3
                    rounded-xl border border-white/5
                    bg-white/[0.02] p-3
                  "
                                >
                                    <ArrowRight
                                        size={15}
                                        className="text-purple-400"
                                    />

                                    <span className="text-sm text-gray-400">
                    {item}
                  </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>
            )}

            {/* Bottom Stats */}
            <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card>
                    <p className="text-xs text-gray-600">
                        Japanese Study
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                        42h
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                        Total learning time
                    </p>
                </Card>

                <Card>
                    <p className="text-xs text-gray-600">
                        Vocabulary
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                        486
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                        Words learned
                    </p>
                </Card>

                <Card>
                    <p className="text-xs text-gray-600">
                        Japan Jobs
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                        12
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                        Opportunities analyzed
                    </p>
                </Card>
            </section>
        </div>
    );
}

export default JapanMode;
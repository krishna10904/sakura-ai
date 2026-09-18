import { useState } from "react";
import {
    BriefcaseBusiness,
    FileText,
    Target,
    CheckCircle2,
    AlertCircle,
    Sparkles,
    ArrowRight,
    TrendingUp,
} from "lucide-react";

import Card from "../components/Card.jsx";
import TextArea from "../components/TextArea.jsx";
import Button from "../components/Button.jsx";
import ProgressBar from "../components/ProgressBar.jsx";

function CareerCopilot() {
    const [jobDescription, setJobDescription] = useState("");
    const [analyzed, setAnalyzed] = useState(false);

    const matchedSkills = [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Git",
    ];

    const missingSkills = [
        "TypeScript",
        "AWS",
        "Docker",
    ];

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
                    <BriefcaseBusiness
                        size={18}
                        className="text-purple-400"
                    />

                    <p className="text-xs font-medium uppercase tracking-widest text-purple-400 sm:text-sm">
                        Career Copilot
                    </p>
                </div>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Build Your{" "}
                    <span className="sakura-gradient-text">
            Career
          </span>
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                    Compare your skills with real job requirements and
                    discover what you should learn next.
                </p>
            </div>

            {/* Input Section */}
            <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Resume */}
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                            <FileText size={21} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Your Resume
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Resume connected from your Documents
                            </p>
                        </div>
                    </div>

                    <div
                        className="
              mt-6 rounded-xl border border-white/10
              bg-white/[0.02] p-4
            "
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                <FileText size={18} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-white">
                                    Krishna_Resume.pdf
                                </p>

                                <p className="mt-1 text-xs text-gray-600">
                                    PDF • 1.2 MB
                                </p>
                            </div>

                            <CheckCircle2
                                size={18}
                                className="text-green-400"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="mb-3 text-xs text-gray-500">
                            Detected skills
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {[
                                "React",
                                "JavaScript",
                                "Node.js",
                                "MongoDB",
                                "Java",
                                "DSA",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="
                    rounded-full border border-purple-500/10
                    bg-purple-500/[0.05]
                    px-3 py-1.5
                    text-xs text-purple-300
                  "
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Job Description */}
                <Card>
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <BriefcaseBusiness size={21} />
                        </div>

                        <div>
                            <h2 className="font-semibold text-white">
                                Target Job
                            </h2>

                            <p className="mt-1 text-xs text-gray-500">
                                Paste the job description
                            </p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleAnalyze}
                        className="mt-6"
                    >
                        <TextArea
                            name="jobDescription"
                            placeholder="Paste the job description here..."
                            value={jobDescription}
                            onChange={(event) =>
                                setJobDescription(event.target.value)
                            }
                            rows={8}
                        />

                        <div className="mt-4 flex justify-end">
                            <Button
                                type="submit"
                                icon={Sparkles}
                                disabled={!jobDescription.trim()}
                            >
                                Analyze Job
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>

            {/* Analysis */}
            {analyzed && (
                <>
                    {/* Match Score */}
                    <section className="mt-6">
                        <Card className="relative overflow-hidden">
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

                            <div className="relative">
                                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-purple-400">
                                            AI Analysis
                                        </p>

                                        <h2 className="mt-2 text-xl font-bold text-white">
                                            Job Compatibility
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Based on your current resume and the job
                                            description.
                                        </p>
                                    </div>

                                    <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border-4 border-purple-500/20 bg-purple-500/10">
                    <span className="text-2xl font-bold text-white">
                      78%
                    </span>

                                        <span className="text-[10px] text-gray-500">
                      Match
                    </span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <ProgressBar
                                        value={78}
                                        label="Overall compatibility"
                                    />
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* Skills */}
                    <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Matched */}
                        <Card>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                                    <CheckCircle2 size={19} />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-white">
                                        Matched Skills
                                    </h2>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Skills already present in your profile
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-3">
                                {matchedSkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="
                      flex items-center gap-3
                      rounded-xl border border-green-500/10
                      bg-green-500/[0.03]
                      px-4 py-3
                    "
                                    >
                                        <CheckCircle2
                                            size={16}
                                            className="text-green-400"
                                        />

                                        <span className="text-sm text-gray-300">
                      {skill}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Missing */}
                        <Card>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                                    <AlertCircle size={19} />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-white">
                                        Skill Gaps
                                    </h2>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Skills you should consider learning
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-3">
                                {missingSkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="
                      flex items-center justify-between
                      rounded-xl border border-orange-500/10
                      bg-orange-500/[0.03]
                      px-4 py-3
                    "
                                    >
                                        <div className="flex items-center gap-3">
                                            <AlertCircle
                                                size={16}
                                                className="text-orange-400"
                                            />

                                            <span className="text-sm text-gray-300">
                        {skill}
                      </span>
                                        </div>

                                        <span className="text-xs text-orange-400">
                      Learn
                    </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    {/* Roadmap */}
                    <section className="mt-6">
                        <Card>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                    <TrendingUp size={19} />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-white">
                                        Suggested Career Roadmap
                                    </h2>

                                    <p className="mt-1 text-xs text-gray-500">
                                        A possible learning sequence based on the
                                        identified gaps.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                {[
                                    {
                                        step: "01",
                                        title: "Master TypeScript",
                                        description:
                                            "Learn types, interfaces, generics and TypeScript with React.",
                                    },
                                    {
                                        step: "02",
                                        title: "Learn AWS Fundamentals",
                                        description:
                                            "Understand EC2, S3, IAM, RDS and basic cloud deployment.",
                                    },
                                    {
                                        step: "03",
                                        title: "Learn Docker",
                                        description:
                                            "Containerize your frontend and backend applications.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.step}
                                        className="
                      flex gap-4 rounded-xl
                      border border-white/5
                      bg-white/[0.02]
                      p-4
                    "
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-xs font-bold text-purple-400">
                                            {item.step}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                                {item.description}
                                            </p>
                                        </div>

                                        <ArrowRight
                                            size={16}
                                            className="mt-1 text-gray-600"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </section>

                    {/* Sakura Insight */}
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
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg">
                                    🌸
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-white">
                                        Sakura's Career Insight
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-400">
                                        Your current profile already covers several
                                        important full-stack skills. Focus your next
                                        learning cycle on the identified gaps and
                                        strengthen your projects with measurable,
                                        real-world outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Empty State */}
            {!analyzed && (
                <section className="mt-6">
                    <div
                        className="
              rounded-2xl border border-white/5
              bg-white/[0.015]
              p-8 text-center
            "
                    >
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                            <Target size={24} />
                        </div>

                        <h2 className="mt-4 font-semibold text-white">
                            Ready to analyze your next opportunity?
                        </h2>

                        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
                            Paste a job description above and Sakura will
                            compare it with your current skills.
                        </p>
                    </div>
                </section>
            )}
        </div>
    );
}

export default CareerCopilot;